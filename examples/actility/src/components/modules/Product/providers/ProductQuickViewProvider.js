import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';
import { ProductQuickViewModal, transformProductsToQuickViewIdList } from 'modules/Product';

const ProductQuickViewContext = createContext({
	onOpenQuickView: null,
});
const useProductQuickViewContext = () => useContext(ProductQuickViewContext);

const ProductQuickViewProvider = (
	{
		children,
		data,
	},
) => {
	const ids = transformProductsToQuickViewIdList(data);
	const [activeProductId, setActiveProductId] = useState(null);

	const currentIndex = ids?.findIndex((id) => String(id) === String(activeProductId));

	const value = {
		onOpenQuickView: (product) => {
			if (product) {
				setActiveProductId(product?.id || product);
			}
		},
	};

	const isVisibleArrows = ids?.length > 1 && currentIndex >= 0;

	const onOpenNext = isVisibleArrows ? (
		() => setActiveProductId(ids[Math.abs((currentIndex + 1) % ids.length)])
	) : null;

	const onOpenPrev = isVisibleArrows ? (
		() => setActiveProductId(ids[(currentIndex === 0 ? ids.length : currentIndex) - 1])
	) : null;

	return (
		<ProductQuickViewContext.Provider value={value}>
			{children}
			<ProductQuickViewModal
				isOpen={!!activeProductId}
				onDismiss={() => setActiveProductId(null)}
				productId={activeProductId}
				onOpenNext={onOpenNext}
				onOpenPrev={onOpenPrev}
			/>
		</ProductQuickViewContext.Provider>
	);
};

ProductQuickViewProvider.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	data: PropTypes.arrayOf(PropTypes.object),
};

ProductQuickViewProvider.defaultProps = {
	children: null,
	data: null,
};

export { ProductQuickViewProvider, useProductQuickViewContext };
