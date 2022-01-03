import { useState } from 'react';
import { useFormState } from 'hooks';
import { useForm } from 'react-hook-form';
import { Error } from 'elements/Error';
import { Input } from 'elements/Input';
import { useMutation } from '@apollo/client';
import { ChangeCustomerPasswordMutation } from 'schemas';
import { LinkArrow } from 'elements/LinkArrow';
import PropTypes from 'prop-types';
import { ModalPortal } from 'elements/Modal';
import { AuthPasswordRecoveryForm } from 'modules/Auth';
import { $notifications } from 'models';

const ChangePassword = (
	{
		customerEmail,
	},
) => {
	const [isVisibleForgotPasswordForm, setVisibleForgotPasswordForm] = useState(false);
	const [isVisibleForgotPasswordModal, setVisibleForgotPasswordModal] = useState(false);
	const [changeCustomerPasswordMutation] = useMutation(ChangeCustomerPasswordMutation, { ignoreResults: true });

	const {
		isSubmitting, setSubmitting, setErrorMessage, errorMessage,
	} = useFormState();

	const {
		handleSubmit, register, formState: { errors, isDirty },
	} = useForm({
		defaultValues: {
			currentPassword: '',
			newPassword: '',
		},
	});

	const onOpenForgotPasswordModal = () => {
		setVisibleForgotPasswordModal(true);
	};

	const onCloseForgotPasswordModal = () => {
		setVisibleForgotPasswordModal(false);
	};

	const onToggleForgotPasswordForm = () => {
		setVisibleForgotPasswordForm(!isVisibleForgotPasswordForm);
	};

	const onSubmitHandler = async ({
		currentPassword,
		newPassword,
	}) => {
		setSubmitting(true);

		if (currentPassword === newPassword) {
			return setErrorMessage('Passwords can’t be the same');
		}

		try {
			const { data: { changeCustomerPassword: { email } } = {} } = await changeCustomerPasswordMutation({
				variables: {
					currentPassword,
					newPassword,
				},
			});

			if (!email) throw new Error('Internal error');

			$notifications.addSuccessNotify({
				body: 'Your password was successfully changed!',
			});

			onToggleForgotPasswordForm();

			setSubmitting(false);

			return true;
		} catch (e) {
			setErrorMessage(e.message);
			return false;
		}
	};

	return (
		<>
			<button type="button" onClick={onToggleForgotPasswordForm}>
				Change Password
			</button>
			{
				isVisibleForgotPasswordForm && (
					<form
						onSubmit={handleSubmit(onSubmitHandler)}
					>
						<Error value={errors?.currentPassword?.message}>
							<Input
								name="currentPassword"
								variant="password"
								label="Current password"
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
						<Error value={errors?.newPassword?.message}>
							<Input
								name="newPassword"
								variant="password"
								label="New password"
								{...register('newPassword', {
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
						<button
							disabled={isSubmitting || !isDirty}
							type="submit"
						>
							Save Changes
						</button>
					</form>
				)
			}
			<ModalPortal
				isOpen={isVisibleForgotPasswordModal}
				onDismiss={onCloseForgotPasswordModal}
			>
				<AuthPasswordRecoveryForm email={customerEmail} />
			</ModalPortal>
		</>
	);
};

export { ChangePassword };

ChangePassword.defaultProps = {
	customerEmail: '',
};

ChangePassword.propTypes = {
	customerEmail: PropTypes.string,
};
