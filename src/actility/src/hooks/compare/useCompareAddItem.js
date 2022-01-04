import { useApolloClient, useMutation } from '@apollo/client';
import { arrayFromPrimitive, arrayMapId } from 'helpers';
import { $compare, $notifications } from 'models';
import { AddProductsToCompareListMutation, CreateCompareListMutation, CompareListDataFragment } from 'schemas';
import { useMediaBreakpoint } from 'providers';

const COMPARE_MAX_ITEMS_COUNT = 5;

export const useCompareAddItem = () => {
	const client = useApolloClient();
	const { isBreakpointDown } = useMediaBreakpoint();
	const setIsModalShow = $compare.useSetIsModalShow();
	const [addProductsToCompareListMutation] = useMutation(AddProductsToCompareListMutation);
	const [createCompareListMutation] = useMutation(CreateCompareListMutation);

	return async (input) => {
		const products = arrayFromPrimitive(input);
		const productsIds = arrayMapId(products);

		const currentCompareList = $compare.getList();

		if (currentCompareList?.items?.length < COMPARE_MAX_ITEMS_COUNT) {
			$compare.setList({
				...currentCompareList,
				items: [
					...(currentCompareList?.items || []),
					...products.map((product) => ({
						product,
					})),
				],
				itemCount: currentCompareList.itemCount + 1,
			});

			if (isBreakpointDown('lg')) {
				setIsModalShow(true);
			} else {
				$notifications.addSuccessNotify({
					body: 'The product was added to comparison!',
				});
			}

			const saveInToModel = (data) => {
				$compare.setList(client.cache.readFragment({
					id: client.cache.identify(data),
					fragment: CompareListDataFragment,
				}));
			};

			try {
				if (!$compare.isId) {
					const mutation = await createCompareListMutation({
						variables: {
							input: {
								products: productsIds,
							},
						},
					});

					saveInToModel(mutation?.data?.createCompareList);
				} else {
					const mutation = await addProductsToCompareListMutation({
						variables: {
							input: {
								uid: $compare.id,
								products: productsIds,
							},
						},
					});

					saveInToModel(mutation?.data?.addProductsToCompareList);
				}
			} catch {
				// TODO: Handle error...
			}
		} else {
			$notifications.addErrorNotify({
				body: 'Sorry, you can add <span>only up to 5 products</span> to the comparison list',
			});
		}
	};
};
