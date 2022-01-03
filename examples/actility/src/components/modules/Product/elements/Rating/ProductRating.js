import PropTypes from 'prop-types';
import { Rating } from 'elements/Rating';

const ProductRating = (
	{
		data,
		variant,
		className,
	},
) => (
	<Rating
		className={className}
		value={data?.reviewSummary?.ratingSummary}
		variant={variant}
		count={data?.reviewSummary?.count}
	/>
);

ProductRating.propTypes = {
	data: PropTypes.oneOfType([PropTypes.object]),
	variant: Rating.propTypes.variant,
	className: PropTypes.string,
};

ProductRating.defaultProps = {
	data: null,
	variant: Rating.defaultProps.variant,
	className: null,
};

export { ProductRating };
