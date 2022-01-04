import { memo } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { Container } from 'elements/Container';
import { useCartData, useCartRemoveItem, useCartUpdateItem } from 'hooks';
import { Flex } from 'elements/Flex';
import { InputNumber } from 'elements/InputNumber';

import css from './CartPage.module.scss';

const CartPage = (
	{
		className,
	},
) => {
	const [removeItem] = useCartRemoveItem();
	const [updateItem] = useCartUpdateItem();
	const { data: cart, loading } = useCartData({ isFull: true });

	if (loading) {
		return 'Loading...';
	}

	return (
		<div
			className={classNames(css.wrapper, className)}
		>
			<Container>
				<h1 className={css.title}>
					{cart?.totalQuantity > 0 ? `Shopping cart: ${cart.totalQuantity} items` : 'Shopping cart'}
				</h1>

				<div>
					{cart?.items?.map((item) => (
						<div key={item?.uid}>
							<hr />

							<Flex>
								<Flex direction="column" flex="auto">
									<Flex>
										<p>{item?.product?.name}</p>
										<p>{`(${item?.product?.sku})`}</p>
									</Flex>
									<p>
										{`Quantity: ${item?.quantity}`}
									</p>
								</Flex>
								<InputNumber
									value={item?.quantity}
									onChange={(value) => {
										updateItem(item, value);
									}}
								/>
								<button
									onClick={() => removeItem(item)}
									type="button"
								>
									Remove
								</button>
							</Flex>
						</div>
					))}
				</div>
			</Container>
		</div>
	);
};

CartPage.propTypes = {
	className: PropTypes.string,
};

CartPage.defaultProps = {
	className: null,
};

export default memo(CartPage);
