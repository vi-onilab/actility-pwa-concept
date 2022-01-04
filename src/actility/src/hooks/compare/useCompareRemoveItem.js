import { useApolloClient, useMutation } from '@apollo/client';
import { CompareListDataFragment, RemoveProductsFromCompareListMutation } from 'schemas';
import { arrayFromPrimitive, arrayMapId } from 'helpers';
import { $compare, $notifications } from 'models';

export const useCompareRemoveItem = () => {
	const client = useApolloClient();
	const [removeProductsFromCompareListMutation] = useMutation(RemoveProductsFromCompareListMutation);

	return async (input) => {
		const products = arrayMapId(arrayFromPrimitive(input));

		const currentCompareList = $compare.getList();

		$compare.setList({
			...(currentCompareList || {}),
			itemCount: Math.max(0, (currentCompareList?.itemCount || 1) - 1),
			items: (
				(currentCompareList?.items || []).filter((item) => (
					!products?.includes(String(item?.product?.id))
				))
			),
		});

		$notifications.addSuccessNotify({
			body: 'The product has been removed from comparison!',
		});

		if ($compare.isId) {
			try {
				const mutation = await removeProductsFromCompareListMutation({
					variables: {
						input: {
							uid: $compare.id,
							products,
						},
					},
				});

				$compare.setList(client.cache.readFragment({
					id: client.cache.identify(mutation?.data?.removeProductsFromCompareList),
					fragment: CompareListDataFragment,
				}));
			} catch {
				// TODO: Handle error...
			}
		}
	};
};
