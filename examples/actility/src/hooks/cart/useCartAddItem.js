import { useState } from 'react';
import { $cart, $notifications } from 'models';
import { useCartGenerateId } from 'hooks';
import { useMutation } from '@apollo/client';
import { AddProductsToCartMutation } from 'schemas';

const useCartAddItem = ({ watch = true } = {}) => {
	const [addProductsToCartMutation] = useMutation(AddProductsToCartMutation, { ignoreResults: true });
	const [isLoading, setLoading] = useState(false);
	const generateId = useCartGenerateId();

	return [
		async ({ sku }, quantity = 1, { selectedOptions = [] } = {}) => {
			if (watch) {
				setLoading(true);
			}

			try {
				await generateId();

				await addProductsToCartMutation({
					variables: {
						cartId: $cart.id,
						cartItems: [
							{
								sku,
								quantity,
								selected_options: selectedOptions,
							},
						],
					},
				});

				$notifications.addSuccessNotify({ body: 'The product was added to cart.' });
			} catch {
				$notifications.addErrorNotify({ body: 'Internal error.' });
			}

			if (watch) {
				setLoading(false);
			}
		},
		{
			isLoading,
		},
	];
};

export { useCartAddItem };
