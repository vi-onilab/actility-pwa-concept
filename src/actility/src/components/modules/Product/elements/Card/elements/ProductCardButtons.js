import { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'elements/Icon';
import { classNames } from 'helpers';
import {
	CartIcon, CompareIcon, FavoriteIcon, ViewIcon,
} from 'icons';
import { ProductQuickViewModal, useProductQuickViewContext } from 'modules/Product';
import { useCartAddItem } from 'hooks';

import css from '../ProductCard.module.scss';

const ProductCardButtons = ({ data }) => {
	const [addToCart, { isLoading }] = useCartAddItem();
	const [isQuickViewOpen, setQuickViewOpen] = useState(null);
	const { onOpenQuickView = null } = useProductQuickViewContext();

	const onQuickViewClickHandler = () => {
		if (onOpenQuickView) {
			onOpenQuickView?.(data);
		} else {
			setQuickViewOpen(true);
		}
	};

	return (
		<div className={css.buttons}>
			<button
				type="button"
				className={classNames(css.button, data?.isInWishlist && css.isButtonActive, css.buttonFavorite)}
			>
				<Icon src={FavoriteIcon} className={css.buttonIcon} />
				<span className={css.buttonText}>
					{data?.isInWishlist ? 'Remove from favourite' : 'Add to favourite'}
				</span>
			</button>
			<button type="button" className={classNames(css.button, css.buttonCompare)}>
				<Icon src={CompareIcon} className={css.buttonIcon} />
				<span className={css.buttonText}>View rating</span>
			</button>
			<button
				type="button"
				onClick={onQuickViewClickHandler}
				className={classNames(css.button, css.buttonView)}
			>
				<Icon src={ViewIcon} className={css.buttonIcon} />
				<span className={css.buttonText}>Quick view</span>
			</button>
			<button
				type="button"
				onClick={() => addToCart(data)}
				className={classNames(css.button, data?.isInCart && css.isButtonActive, css.buttonCart)}
			>
				<Icon src={CartIcon} className={css.buttonIcon} />
				<span className={css.buttonText}>
					{isLoading ? 'Adding...' : 'Add to cart'}
				</span>
			</button>
			{data?.id && !onOpenQuickView && (
				<ProductQuickViewModal
					isOpen={isQuickViewOpen}
					productId={data.id}
					onDismiss={() => setQuickViewOpen(false)}
				/>
			)}
		</div>
	);
};

ProductCardButtons.propTypes = {
	data: PropTypes.oneOfType([PropTypes.object]),
};

ProductCardButtons.defaultProps = {
	data: null,
};

export { ProductCardButtons };
