import PropTypes from 'prop-types';
import { Icon } from 'elements/Icon';
import { CompareIcon, FavoriteIcon } from 'icons';
import { classNames } from 'helpers';
import { useCompareToggleItem, useWishListToggleItem } from 'hooks';

import css from '../ProductCard.module.scss';

const ProductCardFloatButtons = ({ data }) => {
	const onToggleProductCompare = useCompareToggleItem();
	const onToggleProductWishlist = useWishListToggleItem();

	return (
		<div className={css.floatButtons}>
			<button
				type="button"
				onClick={() => onToggleProductWishlist(data)}
				className={classNames(css.floatButton, data?.isInWishlist && css.isActive)}
			>
				<Icon src={FavoriteIcon} />
			</button>
			<button
				type="button"
				className={classNames(css.floatButton, data?.isInCompare && css.isActive)}
				onClick={() => onToggleProductCompare(data)}
			>
				<Icon src={CompareIcon} />
			</button>
		</div>
	);
};

ProductCardFloatButtons.propTypes = {
	data: PropTypes.oneOfType([PropTypes.object]),
};

ProductCardFloatButtons.defaultProps = {
	data: null,
};

export { ProductCardFloatButtons };
