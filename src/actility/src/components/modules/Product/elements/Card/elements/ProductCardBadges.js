import PropTypes from 'prop-types';
import { Image } from 'elements/Image';

import css from '../ProductCard.module.scss';

const ProductCardBadges = ({ icon, text }) => (
	text && (
		<div className={css.badge}>
			{icon && (
				<Image src={icon} alt="" className={css.badgeIcon} />
			)}
			<span className={css.badgeText}>{text}</span>
		</div>
	)
);

ProductCardBadges.propTypes = {
	icon: PropTypes.string,
	text: PropTypes.string,
};

ProductCardBadges.defaultProps = {
	icon: null,
	text: null,
};

export { ProductCardBadges };
