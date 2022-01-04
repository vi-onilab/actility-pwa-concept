import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { ProductFormProvider } from 'modules/Product';

const ProductContext = createContext({});
const useProductContext = () => useContext(ProductContext);

const ProductProvider = (
	{
		children,
		data,
	},
) => (
	<ProductContext.Provider value={data}>
		<ProductFormProvider data={data}>
			{children}
		</ProductFormProvider>
	</ProductContext.Provider>
);

ProductProvider.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

ProductProvider.defaultProps = {
	children: null,
	data: null,
};

export { ProductProvider, useProductContext };
