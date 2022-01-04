import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { SplitBox, SplitBoxHeader, SplitBoxTitle } from 'elements/SplitBox';
import { Container } from 'elements/Container';
import { ContentParser, ProductSection, useProductContext } from 'modules/Product';

import css from './ProductSectionEndlessPossibilities.module.scss';

const ProductSectionEndlessPossibilities = (
	forwardRef(
		(
			{
				className,
			},
			ref,
		) => {
			const product = useProductContext();

			if (!product?.acEndlessPossibilities?.length) {
				return null;
			}

			return (
				<ProductSection
					id="endless"
					variant="primary"
					ref={ref}
				>
					<Container>
						<SplitBox
							className={classNames(css.wrapper, className)}
						>
							<div className={css.full}>
								<SplitBoxHeader>
									<SplitBoxTitle>Endless possibilities</SplitBoxTitle>
								</SplitBoxHeader>

								<ContentParser html={product?.acEndlessPossibilities} />
							</div>
						</SplitBox>
					</Container>
				</ProductSection>
			);
		},
	)
);

ProductSectionEndlessPossibilities.propTypes = {
	className: PropTypes.string,
};

ProductSectionEndlessPossibilities.defaultProps = {
	className: null,
};

export { ProductSectionEndlessPossibilities };
