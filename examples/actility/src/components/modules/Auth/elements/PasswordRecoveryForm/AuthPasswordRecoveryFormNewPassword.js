import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { classNames } from 'helpers';
import { Icon } from 'elements/Icon';
import { RecoveryIcon } from 'icons';
import { useFormState } from 'hooks';
import { useMutation } from '@apollo/client';
import { GenerateCustomerTokenMutation, ResetPasswordMutation } from 'schemas';
import { Error } from 'elements/Error';
import { Input } from 'elements/Input';
import { $auth } from 'models';

import css from './AuthPasswordRecoveryForm.module.scss';
import { useAuthContext } from '../../providers';

const AuthPasswordRecoveryFormNewPassword = (
	{
		className,
		resetPasswordToken,
		email,
	},
) => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const {
		isSubmitting, setSubmitting, setErrorMessage, errorMessage,
	} = useFormState();

	const [resetPasswordMutation] = useMutation(ResetPasswordMutation, { ignoreResults: true });
	const [generateCustomerTokenMutation] = useMutation(GenerateCustomerTokenMutation, { ignoreResults: true });

	const {
		onDismiss,
	} = useAuthContext();

	const onChangePasswordHandler = async ({ password }) => {
		setSubmitting(true);
		try {
			const { data: { resetPassword } = {} } = await resetPasswordMutation({
				variables: {
					email,
					newPassword: password,
					resetPasswordToken,
				},
			});

			if (resetPassword) {
				const { data: { generateCustomerToken } = {} } = await generateCustomerTokenMutation();

				if (generateCustomerToken?.token) {
					$auth.setToken(generateCustomerToken.token);
					onDismiss();
				} else {
					throw new Error('Internal error');
				}
			} else {
				throw new Error('Internal error');
			}
		} catch (e) {
			setErrorMessage(e.message);
		}
	};

	return (
		<div
			className={classNames(css.wrapper, className)}
		>
			<div className={css.header}>
				<Icon src={RecoveryIcon} className={css.headerIcon} />
			</div>
			<div className={css.titleGroup}>
				<p className={css.title}>Password recovery</p>
			</div>
			<form
				onSubmit={handleSubmit(onChangePasswordHandler)}
			>
				<div className={css.oneTime}>
					<p className={css.oneTimeDescription}>
						Please, enter the new password
					</p>
				</div>
				<Error value={errorMessage ?? errors?.password}>
					<Input
						name="password"
						label="New password"
						variant="password"
						{...register('password', {
							required: {
								value: true,
								message: 'Password is required!',
							},
							minLength: {
								value: 8,
								message: 'Minimum password length 8 characters!',
							},
						})}
					/>
				</Error>

				<button
					disabled={isSubmitting}
					type="submit"
					className={css.button}
				>
					{isSubmitting ? 'Setting a new password..' : 'Set a new password'}
				</button>
			</form>
		</div>
	);
};

AuthPasswordRecoveryFormNewPassword.propTypes = {
	className: PropTypes.string,
	email: PropTypes.string.isRequired,
	resetPasswordToken: PropTypes.string.isRequired,
};

AuthPasswordRecoveryFormNewPassword.defaultProps = {
	className: null,
};

export { AuthPasswordRecoveryFormNewPassword };
