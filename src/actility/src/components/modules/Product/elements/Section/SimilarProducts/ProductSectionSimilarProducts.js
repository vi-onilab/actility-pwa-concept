import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import {
	SplitBox,
	SplitBoxHeader,
	SplitBoxMain,
	SplitBoxTitle,
} from 'elements/SplitBox';
import { Container } from 'elements/Container';
import { ProductSlider } from 'modules/Product';

import css from './ProductSectionSimilarProducts.module.scss';

const ProductSectionSimilarProducts = (
	{
		className,
		data,
	},
) => {
	if (data?.similarProducts?.length < 1) {
		return null;
	}

	return (
		<Container>
			<SplitBox
				className={classNames(css.wrapper, className)}
			>
				<SplitBoxMain>
					<SplitBoxHeader>
						<SplitBoxTitle>Similar products</SplitBoxTitle>
					</SplitBoxHeader>

					<ProductSlider
						variant="medium"
						data={data?.similarProducts}
					/>
				</SplitBoxMain>
			</SplitBox>
		</Container>
	);
};

ProductSectionSimilarProducts.propTypes = {
	className: PropTypes.string,
	data: PropTypes.shape({
		similarProducts: PropTypes.arrayOf([PropTypes.object]),
	}),
};

ProductSectionSimilarProducts.defaultProps = {
	className: null,
	data: [],
};

export { ProductSectionSimilarProducts };
