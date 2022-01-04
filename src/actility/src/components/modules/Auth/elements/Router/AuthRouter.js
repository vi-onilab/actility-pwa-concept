import PropTypes from 'prop-types';
import { MediaBreakpointUp } from 'providers';
import { Tab, Tabs } from 'elements/Tabs';

import { AuthModal } from '../Modal';
import { AuthLoginForm } from '../LoginForm';
import { AuthSignUpForm } from '../SignUpForm';
import { useAuthContext } from '../../providers';
import { AuthAdditionalInfo } from '../AdditionalInfo';

const AuthRouter = (
	{
		open,
	},
) => {
	const {
		onDismiss,
		onOpenRegister,
		onOpenLogin,
	} = useAuthContext();

	if (open === 'nextInformation') {
		return (
			<AuthModal
				onDismiss={onDismiss}
				isOpen={!!open}
			>
				<AuthAdditionalInfo />
			</AuthModal>
		);
	}

	return (
		<AuthModal
			onDismiss={onDismiss}
			isOpen={!!open}
		>
			<MediaBreakpointUp name="lg">
				<Tabs variant="form">
					<Tab onClick={() => onOpenLogin()} isActive={['login', 'oneTime'].includes(open)}>
						Login
					</Tab>
					<Tab onClick={() => onOpenRegister()} isActive={open === 'register'}>
						New account
					</Tab>
				</Tabs>
			</MediaBreakpointUp>

			{['login', 'oneTime'].includes(open) && (
				<AuthLoginForm isOneTime={open === 'oneTime'} />
			)}

			{open === 'register' && (
				<AuthSignUpForm />
			)}

			{open === 'nextInformation' && (
				<AuthAdditionalInfo />
			)}
		</AuthModal>
	);
};

AuthRouter.propTypes = {
	open: PropTypes.oneOf([null, 'login', 'register', 'oneTime', 'nextInformation']),
};

AuthRouter.defaultProps = {
	open: null,
};

export { AuthRouter };
