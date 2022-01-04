import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { priceTransform } from 'helpers';

const CurrencyContext = createContext({
	transform: () => null,
});
const useCurrencyContext = () => useContext(CurrencyContext);

const CurrencyProvider = ({ children }) => {
	const value = {
		transform: priceTransform,
	};

	return (
		<CurrencyContext.Provider value={value}>
			{children}
		</CurrencyContext.Provider>
	);
};

CurrencyProvider.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]).isRequired,
};
CurrencyProvider.defaultProps = {};

export { CurrencyProvider, useCurrencyContext };
