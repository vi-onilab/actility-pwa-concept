import { useCompareAddItem } from './useCompareAddItem';
import { useCompareRemoveItem } from './useCompareRemoveItem';

export const useCompareToggleItem = () => {
	const onRemoveFromCompare = useCompareRemoveItem();
	const onAddToCompare = useCompareAddItem();

	return async (product) => {
		if (product?.isInCompare) {
			await onRemoveFromCompare(product);
		} else {
			await onAddToCompare(product);
		}
	};
};
