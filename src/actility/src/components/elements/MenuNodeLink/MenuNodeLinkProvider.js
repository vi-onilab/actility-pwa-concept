import PropTypes from 'prop-types';
import { createContext, useContext } from 'react';

const MenuNodeLinkContext = createContext({});
const useMenuNodeLinkContext = () => useContext(MenuNodeLinkContext);

const MenuNodeLinkProvider = ({ value, children }) => (
	<MenuNodeLinkContext.Provider value={value}>
		{children}
	</MenuNodeLinkContext.Provider>
);

MenuNodeLinkProvider.defaultProps = {
	value: {},
	children: null,
};

MenuNodeLinkProvider.propTypes = {
	value: PropTypes.oneOfType([PropTypes.object]),
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
};

export { MenuNodeLinkProvider, useMenuNodeLinkContext };
