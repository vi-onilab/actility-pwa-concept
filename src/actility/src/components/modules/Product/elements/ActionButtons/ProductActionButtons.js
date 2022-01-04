import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { Icon } from 'elements/Icon';
import {
	CompareIcon,
	FavoriteIcon, FilledHeartIcon,
	ShareIcon,
} from 'icons';
import { ShareTo } from 'elements/ShareTo/elements/ShareTo';
import { useCompareToggleItem, useRouter, useWishListToggleItem } from 'hooks';

import css from './ProductActionButtons.module.scss';

const VARIANTS = {
	default: css.variantDefault,
	vertical: css.variantVertical,
};

const ProductActionButtons = (
	{
		className,
		variant,
		data,
	},
) => {
	const { getEntityUrl, withFullUrl } = useRouter();
	const onToggleProductCompare = useCompareToggleItem();
	const onToggleProductWishlist = useWishListToggleItem();

	if (!data) {
		return null;
	}

	return (
		<div
			className={classNames(
				css.wrapper,
				className,
				variant && VARIANTS?.[variant],
			)}
		>
			<button
				type="button"
				onClick={() => onToggleProductWishlist(data)}
				className={classNames(css.button, data?.isInWishlist && css.isActive)}
			>
				<div className={css.iconWrapper}>
					{data?.isInWishlist ? <Icon src={FilledHeartIcon} className={css.icon} /> : (
						<Icon
							src={FavoriteIcon}
							className={css.icon}
						/>
					)}

				</div>
				<p className={css.label}>
					{data?.isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
				</p>
			</button>
			<button
				type="button"
				onClick={() => onToggleProductCompare(data)}
				className={classNames(css.button, data?.isInCompare && css.isActive)}
			>
				<div className={css.iconWrapper}>
					<Icon
						src={CompareIcon}
						className={css.icon}
					/>
				</div>
				<p className={css.label}>
					{data?.isInCompare ? 'Remove from comparison' : 'Add to comparison'}
				</p>
			</button>
			<ShareTo
				title="Look what I found!"
				url={withFullUrl(getEntityUrl(data))}
				className={css.button}
			>
				<div className={css.iconWrapper}>
					<Icon
						src={ShareIcon}
						className={css.icon}
					/>
				</div>
				<p className={css.label}>Share to</p>
			</ShareTo>
		</div>
	);
};

ProductActionButtons.propTypes = {
	className: PropTypes.string,
	variant: PropTypes.oneOf(['default', 'vertical']),
	data: PropTypes.oneOfType([PropTypes.object]),
};

ProductActionButtons.defaultProps = {
	className: null,
	variant: 'default',
	data: null,
};

export { ProductActionButtons };
