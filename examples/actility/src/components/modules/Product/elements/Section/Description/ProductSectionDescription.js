import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { SplitBox, SplitBoxHeader, SplitBoxTitle } from 'elements/SplitBox';
import { Container } from 'elements/Container';
import { ProductSection, useProductContext } from 'modules/Product';
import { ContentParser } from 'elements/ContentParser';

import css from './ProductSectionDescription.module.scss';

const ProductSectionDescription = (
	forwardRef(
		(
			{
				className,
			},
			ref,
		) => {
			const product = useProductContext();

			if (!product?.description?.html?.length) {
				return null;
			}

			return (
				<ProductSection
					id="description"
					ref={ref}
				>
					<Container>
						<SplitBox
							className={classNames(css.wrapper, className)}
						>
							<div className={css.full}>
								<SplitBoxHeader>
									<SplitBoxTitle>
										Description
									</SplitBoxTitle>
								</SplitBoxHeader>
								{/* <DownloadableFile title="Bluetooth Low Energy 5.0." /> */}
								<ContentParser html={product?.description?.html} />
							</div>
						</SplitBox>

					</Container>
				</ProductSection>
			);
		},
	)
);

ProductSectionDescription.propTypes = {
	className: PropTypes.string,
};

ProductSectionDescription.defaultProps = {
	className: null,
};

export { ProductSectionDescription };
