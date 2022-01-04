import { useMutation } from '@apollo/client';
import { CreateEmptyCartMutation } from 'schemas';
import { $cart } from 'models';

export const useCartGenerateId = () => {
	const [createEmptyCartMutation] = useMutation(CreateEmptyCartMutation, { ignoreResults: true });

	return async () => {
		if (!$cart.isId) {
			const { data: { createEmptyCart = null } = {} } = await createEmptyCartMutation();

			if (createEmptyCart) {
				$cart.id = createEmptyCart;
			}
		}
	};
};
