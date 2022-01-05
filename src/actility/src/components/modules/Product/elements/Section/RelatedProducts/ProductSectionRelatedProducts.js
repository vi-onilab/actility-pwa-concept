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

import css from './ProductSectionRelatedProducts.module.scss';

const ProductSectionRelatedProducts = (
	{
		className,
		data,
	},
) => {
	if (data?.relatedProducts?.length < 1) {
		return null;
	}

	return (
		<Container>
			<SplitBox
				className={classNames(css.wrapper, className)}
			>
				<SplitBoxMain>
					<SplitBoxHeader>
						<SplitBoxTitle>Related products</SplitBoxTitle>
					</SplitBoxHeader>

					<ProductSlider
						variant="medium"
						data={data?.relatedProducts}
					/>
				</SplitBoxMain>
			</SplitBox>
		</Container>
	);
};

ProductSectionRelatedProducts.propTypes = {
	className: PropTypes.string,
	data: PropTypes.shape({
		relatedProducts: PropTypes.arrayOf([PropTypes.object]),
	}),
};

ProductSectionRelatedProducts.defaultProps = {
	className: null,
	data: [],
};

export { ProductSectionRelatedProducts };
