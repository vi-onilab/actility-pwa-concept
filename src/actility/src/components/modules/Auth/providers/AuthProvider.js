import {
	createContext,
	useContext,
	useMemo,
	useState,
} from 'react';
import PropTypes from 'prop-types';

import { AuthRouter } from '../elements';

const AuthContext = createContext({
	onDismiss: () => null,
	onOpenLogin: () => null,
	onOpenRegister: () => null,
	onOpenOneTimePassword: () => null,
	onOpenNextInformation: () => null,
});

const useAuthContext = () => useContext(AuthContext);

const AuthProvider = (
	{
		children,
	},
) => {
	const [open, setOpen] = useState(null);

	const value = useMemo(() => ({
		onDismiss: () => setOpen(null),
		onOpenLogin: () => setOpen('login'),
		onOpenRegister: () => setOpen('register'),
		onOpenOneTimePassword: () => setOpen('oneTime'),
		onOpenNextInformation: () => setOpen('nextInformation'),
	}), [setOpen]);

	return (
		<AuthContext.Provider value={value}>
			{children}

			<AuthRouter open={open} />
		</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
};

AuthProvider.defaultProps = {
	children: null,
};

export { AuthProvider, useAuthContext };
