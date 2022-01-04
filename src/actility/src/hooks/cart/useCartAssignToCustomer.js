import { useMutation } from '@apollo/client';
import { MergeCartsMutation } from 'schemas';
import { $auth, $cart } from 'models';

export const useCartAssignToCustomer = () => {
	const [mergeCartsMutation] = useMutation(MergeCartsMutation, { ignoreResults: true });

	return async () => {
		if ($auth.isToken && $cart.isId) {
			try {
				await mergeCartsMutation({
					variables: {
						sourceCartId: $cart.id,
					},
				});

				$cart.id = null;
			} catch {
				//
			}
		}
	};
};
