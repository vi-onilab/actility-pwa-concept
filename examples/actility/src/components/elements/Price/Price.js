import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './Price.module.scss';

const PriceContext = createContext({});
const usePriceContext = () => useContext(PriceContext);

const Price = (
	{
		className,
		currentValue,
		initialValue,
		isRange,
		children,
	},
) => {
	const contextValue = {
		currentValue,
		initialValue,
		isRange,
	};

	return (
		<div className={classNames(css.main, className)}>
			<PriceContext.Provider value={contextValue}>
				{children}
			</PriceContext.Provider>
		</div>
	);
};

Price.propTypes = {
	className: PropTypes.string,
	currentValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	initialValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	isRange: PropTypes.bool,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]).isRequired,
};

Price.defaultProps = {
	className: null,
	initialValue: null,
	currentValue: null,
	isRange: false,
};

export { Price, usePriceContext };
