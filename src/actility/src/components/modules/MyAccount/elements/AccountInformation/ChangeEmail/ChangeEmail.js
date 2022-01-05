import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Error } from 'elements/Error';
import { Input } from 'elements/Input';
import { REGEX_EMAIL_VALIDATION } from 'constants';
import { useFormState } from 'hooks';
import { useForm } from 'react-hook-form';
import { UpdateCustomerEmailMutation } from 'schemas';
import { useMutation } from '@apollo/client';
import { LinkArrow } from 'elements/LinkArrow';
import { AuthPasswordRecoveryForm } from 'modules/Auth';
import { ModalPortal } from 'elements/Modal';
import { $notifications } from 'models';

const ChangeEmail = (
	{
		customerEmail,
	},
) => {
	const [currentCustomerEmail, setCurrentCustomerEmail] = useState(customerEmail);
	const [isVisiblePasswordField, setVisiblePasswordField] = useState(false);
	const [isVisibleForgotPasswordModal, setVisibleForgotPasswordModal] = useState(false);
	const [updateCustomerEmailMutation] = useMutation(UpdateCustomerEmailMutation, { ignoreResults: true });

	useEffect(() => {
		if (customerEmail) {
			setCurrentCustomerEmail(customerEmail);
		}
	}, [customerEmail]);

	const {
		isSubmitting, setSubmitting, setErrorMessage, errorMessage,
	} = useFormState();

	const {
		handleSubmit, register, formState: { errors, isDirty },
	} = useForm({
		defaultValues: {
			email: currentCustomerEmail,
			currentPassword: '',
		},
	});

	const onChangeEmailField = () => {
		setVisiblePasswordField(true);
	};

	const onOpenForgotPasswordModal = () => {
		setVisibleForgotPasswordModal(true);
	};

	const onCloseForgotPasswordModal = () => {
		setVisibleForgotPasswordModal(false);
	};

	const onSubmitHandler = async ({
		email,
		currentPassword,
	}) => {
		setSubmitting(true);
		try {
			const { data: { updateCustomerEmail: { customer } } = {} } = await updateCustomerEmailMutation({
				variables: {
					email,
					password: currentPassword,
				},
			});

			if (!customer?.email) throw new Error('Internal error');

			setCurrentCustomerEmail(customer?.email);

			$notifications.addSuccessNotify({
				body: 'Your e-mail was successfully changed!',
			});

			setVisiblePasswordField(false);

			setSubmitting(false);

			return true;
		} catch (e) {
			setErrorMessage(e.message);
			return false;
		}
	};

	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmitHandler)}
			>
				<Error value={errors?.email?.message}>
					<Input
						name="email"
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
						onChange={onChangeEmailField}
					/>
				</Error>
				{
					isVisiblePasswordField && (
						<>
							<Error value={errors?.currentPassword?.message}>
								<Input
									name="currentPassword"
									variant="password"
									label="Enter current password for confirmation*"
									{...register('currentPassword', {
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
							<Error value={errorMessage} />
							<div>
								<p>Forgot password?</p>
								<LinkArrow
									variant="graySmallHover"
									onClick={() => (isDirty && onOpenForgotPasswordModal())}
									withArrow
								>
									Request one time password
								</LinkArrow>
							</div>
							<button
								disabled={isSubmitting || !isDirty}
								type="submit"
							>
								Save Changes
							</button>
						</>
					)
				}
			</form>
			<ModalPortal
				isOpen={isVisibleForgotPasswordModal}
				onDismiss={onCloseForgotPasswordModal}
			>
				<AuthPasswordRecoveryForm email={currentCustomerEmail} />
			</ModalPortal>
		</>
	);
};

export { ChangeEmail };

ChangeEmail.defaultProps = {
	customerEmail: '',
};

ChangeEmail.propTypes = {
	customerEmail: PropTypes.string,
};
