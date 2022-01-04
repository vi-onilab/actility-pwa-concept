import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { SplitBox, SplitBoxHeader, SplitBoxTitle } from 'elements/SplitBox';
import { Container } from 'elements/Container';
import { ContentParser, ProductSection, useProductContext } from 'modules/Product';

import css from './ProductSectionCertifications.module.scss';

const ProductSectionCertifications = (
	forwardRef(
		(
			{
				className,
			},
			ref,
		) => {
			const product = useProductContext();

			if (!product?.acCertifications?.length) {
				return null;
			}

			return (
				<ProductSection
					id="certifications"
					ref={ref}
					variant="primary"
				>
					<Container>
						<SplitBox
							className={classNames(css.wrapper, className)}
						>
							<div className={css.full}>
								<SplitBoxHeader>
									<SplitBoxTitle>Certifications</SplitBoxTitle>
								</SplitBoxHeader>

								<ContentParser html={product?.acCertifications} />
							</div>
						</SplitBox>
					</Container>
				</ProductSection>
			);
		},
	)
);

ProductSectionCertifications.propTypes = {
	className: PropTypes.string,
};

ProductSectionCertifications.defaultProps = {
	className: null,
};

export { ProductSectionCertifications };
