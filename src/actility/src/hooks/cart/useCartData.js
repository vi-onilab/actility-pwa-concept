import { useQuery } from '@apollo/client';
import { CartQuery, CustomerCartQuery } from 'schemas';
import { $auth, $cart } from 'models';

export const useCartData = ({ isFull = false } = {}) => {
	const [cartId] = $cart.useId();
	const isCustomerCart = $auth.isToken && !$cart.isId;

	const { data: { customerCart = null } = {}, loading: customerLoading } = useQuery(CustomerCartQuery, {
		variables: {
			isFull,
		},
		skip: !isCustomerCart,
	});

	const { data: { cart = null } = {}, loading: cartLoading } = useQuery(CartQuery, {
		variables: {
			cartId,
			isFull,
		},
		skip: isCustomerCart || !$cart.isId,
	});

	return {
		data: (isCustomerCart ? (customerCart ?? cart) : cart),
		loading: (isCustomerCart ? customerLoading : cartLoading),
	};
};
