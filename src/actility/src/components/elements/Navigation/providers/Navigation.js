import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useIntersectionObserver } from 'hooks';

const NavigationFloatContext = createContext({
	isVisible: false,
});
const useNavigationContext = () => useContext(NavigationFloatContext);

const NavigationProvider = (
	{
		children,
		hiddenByRef,
	},
) => {
	const [isVisible, setVisible] = useState(!hiddenByRef?.current);

	useIntersectionObserver(
		({ isIntersecting }) => {
			setVisible(!isIntersecting);
		},
		[hiddenByRef, setVisible],
	);

	const value = {
		isVisible,
	};

	return (
		<NavigationFloatContext.Provider value={value}>
			{children}
		</NavigationFloatContext.Provider>

	);
};

NavigationProvider.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	hiddenByRef: PropTypes.oneOfType([PropTypes.object]),
};

NavigationProvider.defaultProps = {
	children: null,
	hiddenByRef: null,
};

export { NavigationProvider, useNavigationContext };
