import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { useForm } from 'react-hook-form';
import { Icon } from 'elements/Icon';
import { GoogleIcon, HandIcon } from 'icons';
import { Input } from 'elements/Input';
import { DelimiterLine } from 'elements/DelimiterLine';
import { LinkArrow } from 'elements/LinkArrow';
import { Error } from 'elements/Error';
import { MediaBreakpointDown } from 'providers';
import { useCustomerAssign, useFormState } from 'hooks';
import { $auth } from 'models';
import { useMutation } from '@apollo/client';
import { GenerateCustomerTokenMutation } from 'schemas';
import { REGEX_EMAIL_VALIDATION } from 'constants';

import css from './AuthLoginForm.module.scss';
import { AuthPasswordRecoveryForm } from '../PasswordRecoveryForm';
import { useAuthContext } from '../../providers';

const AuthLoginForm = (
	{
		className,
		isOneTime,
	},
) => {
	const customerAssign = useCustomerAssign();
	const {
		isSubmitting, setSubmitting, setErrorMessage, errorMessage,
	} = useFormState();
	const {
		handleSubmit, register, formState: { errors, isDirty }, getValues,
	} = useForm({
		defaultValues: {
			name: '',
			email: '',
			password: '',
			accept: false,
		},
	});
	const [generateCustomerTokenMutation] = useMutation(GenerateCustomerTokenMutation, { ignoreResults: true });
	const {
		onOpenOneTimePassword,
		onOpenRegister,
		onDismiss,
	} = useAuthContext();

	const onSubmitHandler = async ({ email, password }) => {
		setSubmitting(true);

		try {
			const { data: { generateCustomerToken } = {} } = await generateCustomerTokenMutation({
				variables: {
					email,
					password,
				},
			});

			if (generateCustomerToken?.token) {
				$auth.setToken(generateCustomerToken.token);

				await customerAssign();

				onDismiss();
			} else {
				throw new Error('Internal error');
			}
		} catch (e) {
			setErrorMessage(e.message);
		}
	};

	return (
		!isOneTime ? (
			<form
				onSubmit={handleSubmit(onSubmitHandler)}
				className={classNames(css.wrapper, className)}
			>
				<div className={css.header}>
					<Icon src={HandIcon} className={css.headerIcon} />
				</div>
				<div className={css.titleGroup}>
					<Error value={errorMessage}>
						<p className={css.title}>Hello! Login to your account</p>
					</Error>
				</div>
				{MediaBreakpointDown('lg') && (
					<div className={classNames(css.restore, css.restoreCenter)}>
						<p className={css.restoreTitle}>Don’t have an account?</p>
						<LinkArrow
							variant="coloredSmallHover"
							onClick={onOpenRegister}
							className={css.restoreLink}
							withArrow
						>
							New Account
						</LinkArrow>
					</div>
				)}
				<div className={css.group}>
					<Error value={errors?.email}>
						<Input
							className={css.input}
							name="email"
							{...register('email', {
								pattern: {
									value: REGEX_EMAIL_VALIDATION,
									message: 'Invalid email!',
								},
								required: {
									value: true,
									message: 'Email is required!',
								},
							})}
							label="E-mail"
						/>
					</Error>
				</div>

				<div className={css.group}>
					<Error value={errors?.password}>
						<Input
							variant="password"
							className={css.input}
							label="Password"
							{...register('password', {
								required: {
									value: true,
									message: 'Password is required!',
								},
							})}
						/>
					</Error>
				</div>
				<div className={classNames(css.restore, (!isDirty || !!errors?.email) && css.restoreDisabled)}>
					<p className={css.restoreTitle}>Forgot password?</p>
					<LinkArrow
						variant="graySmallHover"
						onClick={() => (isDirty && !errors?.email && onOpenOneTimePassword())}
						className={css.restoreLink}
						withArrow
					>
						Request one time password
					</LinkArrow>
				</div>
				<button
					type="submit"
					disabled={isSubmitting}
					className={css.button}
				>
					{isSubmitting ? 'Login...' : 'Login'}
				</button>
				<DelimiterLine>
					or
				</DelimiterLine>
				<button className={classNames(css.google, css.button)} type="submit">
					<Icon src={GoogleIcon} className={css.googleIcon} />
					<span className={css.googleText}>Log in with Google</span>
				</button>
			</form>
		) : (
			<AuthPasswordRecoveryForm email={getValues('email')} />
		)
	);
};

AuthLoginForm.propTypes = {
	className: PropTypes.string,
	isOneTime: PropTypes.bool,
};

AuthLoginForm.defaultProps = {
	className: null,
	isOneTime: false,
};

export { AuthLoginForm };
