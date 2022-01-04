import PropTypes from 'prop-types';
import { Image } from 'elements/Image';

import css from '../ProductCard.module.scss';

const ProductCardImages = ({ images }) => (
	<div className={css.imageWrapper}>
		{images?.length > 0 && (
			<Image
				src={images?.[0]?.src}
				className={css.imageItem}
				alt={images?.[0]?.alt}
			/>
		)}
	</div>
);

ProductCardImages.propTypes = {
	images: PropTypes.arrayOf(PropTypes.shape({
		src: PropTypes.string,
		alt: PropTypes.string,
	})),
};

ProductCardImages.defaultProps = {
	images: [],
};

export { ProductCardImages };
