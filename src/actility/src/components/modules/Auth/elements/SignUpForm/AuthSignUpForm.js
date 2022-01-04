import PropTypes from 'prop-types';
import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { classNames } from 'helpers';
import { Input } from 'elements/Input';
import { Select } from 'elements/Select';
import { Checkbox } from 'elements/Checkbox';
import { Icon } from 'elements/Icon';
import { GoogleIcon } from 'icons';
import { DelimiterLine } from 'elements/DelimiterLine';
import { Error } from 'elements/Error';
import { CreateCustomerMutation, GenerateCustomerTokenMutation } from 'schemas';
import { $auth, $customer } from 'models';
import { useCustomerAssign, useFormState } from 'hooks';
import { REGEX_EMAIL_VALIDATION, REGEX_FULL_NAME_VALIDATION } from 'constants';

import css from './AuthSignUpForm.module.scss';
import { useAuthContext } from '../../providers';

const AuthSignUpForm = (
	{
		className,
	},
) => {
	const customerAssign = useCustomerAssign();
	const {
		isSubmitting, setSubmitting, setErrorMessage, errorMessage,
	} = useFormState();
	const {
		handleSubmit, register, formState: { errors },
	} = useForm({
		defaultValues: {
			name: '',
			email: '',
			password: '',
			accept: false,
		},
	});
	const [createCustomerMutation] = useMutation(CreateCustomerMutation, { ignoreResults: true });
	const [generateCustomerTokenMutation] = useMutation(GenerateCustomerTokenMutation, { ignoreResults: true });

	const { onOpenNextInformation } = useAuthContext();

	const onSubmitHandler = async ({ name, email, password }) => {
		setSubmitting(true);

		try {
			const [firstname, middleOrLastName, ...names] = name.trim().split(' ');

			const { data: { createCustomerV2 } = {} } = await createCustomerMutation({
				variables: {
					input: {
						firstname,
						email,
						lastname: (names.length > 0 ? names.join(' ') : middleOrLastName),
						middlename: names.length > 0 ? middleOrLastName : null,
						password,
					},
				},
			});

			if (createCustomerV2?.customer) {
				$customer.setCustomer(createCustomerV2.customer);

				const { data: { generateCustomerToken } = {} } = await generateCustomerTokenMutation({
					variables: {
						email,
						password,
					},
				});

				if (generateCustomerToken?.token) {
					$auth.setToken(generateCustomerToken.token);

					await customerAssign();

					onOpenNextInformation();
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
		<form
			onSubmit={handleSubmit(onSubmitHandler)}
			className={classNames(css.wrapper, className)}
		>
			<div className={css.titleGroup}>
				<Error value={errorMessage}>
					<p className={css.title}>Welcome to ThingPark Market!</p>
				</Error>
			</div>

			<div className={css.group}>
				<Error value={errors?.name?.message}>
					<Input
						name="name"
						label="First & Last Name (e.g. Tom Hanks)*"
						{...register('name', {
							required: {
								value: true,
								message: 'Name is required!',
							},
							pattern: {
								value: REGEX_FULL_NAME_VALIDATION,
								message: 'Enter your first and last name!',
							},
						})}
					/>
				</Error>
			</div>

			<div className={css.group}>
				<Error value={errors?.email?.message}>
					<Input
						name="email"
						className={css.input}
						label="E-mail*"
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
					/>
				</Error>
			</div>

			<div className={css.group}>
				<Error value={errors?.password?.message}>
					<Input
						name="password"
						variant="password"
						className={css.input}
						label="Password (8 symbols min)*"
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
			</div>

			<div className={css.group}>
				<Error>
					<Select className={css.input} label="Country*" />
				</Error>
			</div>
			<div className={css.group}>
				<Error value={errors?.accept?.message}>
					<Checkbox
						{...register('accept', {
							required: {
								value: true,
								message: 'Required!',
							},
						})}
					>
						<p className={css.checkboxText}>
							I accept the
							{' '}
							<a className={css.checkboxLink} href="/">Terms and Conditions</a>
						</p>
					</Checkbox>
				</Error>
			</div>
			<button
				disabled={isSubmitting}
				type="submit"
				className={css.button}
			>
				{isSubmitting ? 'Creating an Account..' : 'Create an Account'}
			</button>
			<DelimiterLine>
				or
			</DelimiterLine>
			<button className={classNames(css.google, css.button)} type="button">
				<Icon src={GoogleIcon} className={css.googleIcon} />
				<span className={css.googleText}>Registration with Google</span>
			</button>
		</form>
	);
};

AuthSignUpForm.propTypes = {
	className: PropTypes.string,
};

AuthSignUpForm.defaultProps = {
	className: null,
};

export { AuthSignUpForm };
