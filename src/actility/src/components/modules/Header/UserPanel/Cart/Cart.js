import { Icon } from 'elements/Icon';
import { CartIcon } from 'icons';
import Badge from 'elements/Badge';
import { Link } from 'elements/Link';
import { useCartData, useRouter } from 'hooks';

import css from '../UserPanel.module.scss';

const Cart = () => {
	const { getCartUrl } = useRouter();
	const { data } = useCartData();

	return (
		<Link
			to={getCartUrl()}
			type="button"
			className={css.btnCart}
		>
			<Icon src={CartIcon} className={css.btnCartIcon} />
			<span className={css.btnCart__text}>My Cart</span>

			{data?.totalQuantity > 0 && (
				<Badge className={css.cartBadge} variant="cart">
					{data?.totalQuantity || 0}
				</Badge>
			)}
		</Link>
	);
};

export default Cart;
