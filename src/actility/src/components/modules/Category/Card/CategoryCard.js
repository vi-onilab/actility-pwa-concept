import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { Link } from 'elements/Link';
import { ChevronArrowRightIcon } from 'icons';
import { Icon } from 'elements/Icon';
import { useRouter } from 'hooks';
import { Image } from 'elements/Image';

import css from './CategoryCard.module.scss';

const VARIANTS = {
	default: css.variantDefault,
	advanced: css.variantAdvantage,
	small: css.variantSmall,
	smallActive: css.variantSmallActive,
	smallList: css.variantSmallList,
};

const CategoryCard = ({ variant, className, category }) => {
	const { getEntityUrl } = useRouter();
	const classes = classNames(
		css.card,
		variant && VARIANTS?.[variant],
		className,
	);

	const url = getEntityUrl(category);

	switch (variant) {
	case 'small':
	case 'smallActive':
	case 'smallList':
		return (
			<Link
				to={url}
				className={classNames(css.item, classes)}
			>
				<div className={css.itemImageContainer}>
					{variant === 'smallActive'
						? <Icon src={ChevronArrowRightIcon} className={css.itemImageIcon} />
						: category?.imageUrl && (
							<Image
								src={category?.imageUrl}
								alt=""
								className={css.itemImage}
							/>
						)}
				</div>

				<div className={css.itemTitle}>
					{category?.name}
				</div>
			</Link>
		);
	case 'advanced':
		return (
			<Link
				to={url}
				className={classes}
			>
				<div className={css.imageContainer}>
					{category?.categoryWidgetThumbnail && (
						<Image src={category?.categoryWidgetThumbnail} alt="" className={css.image} />
					)}
				</div>

				<div className={css.nameContainer}>
					{category?.categoryWidgetSvgIcon && (
						<Image src={category?.categoryWidgetSvgIcon} alt="" className={css.icon} />
					)}

					{category?.name && (
						<div className={css.name}>
							{category.name}
						</div>
					)}
				</div>
			</Link>
		);
	default:
		return (
			<Link
				to={url}
				className={classes}
			>
				<div className={css.imageContainer}>
					{category?.imageUrl && (
						<Image src={category?.imageUrl} alt="" className={css.image} />
					)}
				</div>

				{category?.name && (
					<div className={css.name}>
						{category.name}
					</div>
				)}
			</Link>
		);
	}
};

CategoryCard.defaultProps = {
	variant: 'default',
	className: null,
	category: {},
};

CategoryCard.propTypes = {
	variant: PropTypes.oneOf(['default', 'advanced', 'small', 'smallActive', 'smallList']),
	className: PropTypes.string,
	category: PropTypes.shape({
		name: PropTypes.string,
		imageUrl: PropTypes.string,
		categoryWidgetThumbnail: PropTypes.string,
		categoryWidgetSvgIcon: PropTypes.string,
		id: PropTypes.number,
	}),
};

export { CategoryCard };
