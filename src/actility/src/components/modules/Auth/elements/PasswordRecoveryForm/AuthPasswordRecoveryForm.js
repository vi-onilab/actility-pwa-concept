import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { Icon } from 'elements/Icon';
import { EditIcon, RecoveryIcon } from 'icons';
import { LinkArrow } from 'elements/LinkArrow';
import { InputCode } from 'elements/InputCode';
import { useFormState } from 'hooks';
import { useMutation } from '@apollo/client';
import { RequestPasswordResetEmailMutation, VerifyOneTimePasswordMutation } from 'schemas';
import { Error } from 'elements/Error';
import { Timer } from 'elements/Timer';

import { useAuthContext } from '../../providers';
import { AuthPasswordRecoveryFormNewPassword } from './AuthPasswordRecoveryFormNewPassword';
import css from './AuthPasswordRecoveryForm.module.scss';

const RESEND_WAIT_IN_SECONDS = 20;

const AuthPasswordRecoveryForm = (
	{
		className,
		email,
	},
) => {
	const [timeInSeconds, setTimeInSeconds] = useState(RESEND_WAIT_IN_SECONDS);
	const [resetPasswordToken, setPasswordToken] = useState('');
	const {
		isSubmitting, setSubmitting, setErrorMessage, errorMessage,
	} = useFormState();

	const [requestPasswordResetEmailMutation] = useMutation(RequestPasswordResetEmailMutation, { ignoreResults: true });
	const [verifyOneTimePasswordMutation] = useMutation(VerifyOneTimePasswordMutation, { ignoreResults: true });

	useEffect(() => {
		if (email) {
			requestPasswordResetEmailMutation({
				variables: {
					email,
				},
			});
		}
	}, [email, requestPasswordResetEmailMutation]);

	const {
		onOpenLogin,
	} = useAuthContext();

	const onResentCode = async () => {
		setTimeInSeconds(RESEND_WAIT_IN_SECONDS);

		await requestPasswordResetEmailMutation({
			variables: {
				email,
			},
		});
	};

	const onCodeHandler = async (code) => {
		setSubmitting(true);

		try {
			const { data: { verifyOneTimePassword } = {} } = await verifyOneTimePasswordMutation({
				variables: {
					email,
					code,
				},
			});

			if (verifyOneTimePassword) {
				if (verifyOneTimePassword?.valid && verifyOneTimePassword?.token) {
					setPasswordToken(verifyOneTimePassword?.token);
					setSubmitting(false);
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
		resetPasswordToken?.length > 0 ? (
			<AuthPasswordRecoveryFormNewPassword
				email={email}
				resetPasswordToken={resetPasswordToken}
			/>
		) : (
			<div
				className={classNames(css.wrapper, className)}
			>
				<div className={css.header}>
					<Icon src={RecoveryIcon} className={css.headerIcon} />
				</div>
				<div className={css.titleGroup}>
					<p className={css.title}>Password recovery</p>
				</div>
				<div className={css.oneTime}>
					<p className={css.oneTimeDescription}>
						Please, enter the One time password send to
						<span className={css.oneTimeInput}>{email}</span>
						<button
							type="button"
							onClick={onOpenLogin}
							className={css.oneTimeButton}
						>
							<Icon src={EditIcon} className={css.oneTimeButtonIcon} />
						</button>
					</p>
				</div>

				<Error value={errorMessage}>
					<InputCode
						disabled={isSubmitting}
						className={css.inputCode}
						onFullInput={onCodeHandler}
					/>
				</Error>

				<div
					className={classNames(
						css.restore,
						css.restoreCenter,
						timeInSeconds > 0 && css.restoreDisabled,
					)}
				>
					<p className={css.restoreTitle}>
						{'Didn\'t receive your code?'}
					</p>
					<LinkArrow
						variant="graySmallHover"
						onClick={onResentCode}
						className={css.restoreLink}
						withArrow
					>
						Resend code
					</LinkArrow>
				</div>

				{timeInSeconds > 0 && (
					<Timer
						className={css.timer}
						onTimeEnd={() => setTimeInSeconds(0)}
						seconds={timeInSeconds}
					/>
				)}
			</div>
		)
	);
};

AuthPasswordRecoveryForm.propTypes = {
	className: PropTypes.string,
	email: PropTypes.string.isRequired,
};

AuthPasswordRecoveryForm.defaultProps = {
	className: null,
};

export { AuthPasswordRecoveryForm };
