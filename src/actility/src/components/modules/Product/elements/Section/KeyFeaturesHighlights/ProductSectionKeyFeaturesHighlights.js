import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import {
	SplitBox, SplitBoxHeader, SplitBoxMain, SplitBoxSide, SplitBoxTitle,
} from 'elements/SplitBox';
import { Container } from 'elements/Container';
import { ContentParser, ProductSection, useProductContext } from 'modules/Product';

import css from './ProductSectionKeyFeaturesHighlights.module.scss';

const ProductSectionKeyFeaturesHighlights = (
	forwardRef(
		(
			{
				className,
			},
			ref,
		) => {
			const product = useProductContext();

			if (!product?.keyFeaturesHighlights?.length) {
				return null;
			}

			return (
				<ProductSection
					id="key-features"
					ref={ref}
				>
					<Container>
						<SplitBox
							className={classNames(css.wrapper, className)}
						>
							<SplitBoxSide>
								<SplitBoxHeader>
									<SplitBoxTitle>
										Key features highlights
									</SplitBoxTitle>
								</SplitBoxHeader>
							</SplitBoxSide>
							<SplitBoxMain>
								<ContentParser html={product?.keyFeaturesHighlights} />
							</SplitBoxMain>
						</SplitBox>
					</Container>
				</ProductSection>
			);
		},
	)
);

ProductSectionKeyFeaturesHighlights.propTypes = {
	className: PropTypes.string,
};

ProductSectionKeyFeaturesHighlights.defaultProps = {
	className: null,
};

export { ProductSectionKeyFeaturesHighlights };
