import { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { useMediaBreakpoint } from 'providers';
import { ShippingCard, ShippingList, ShippingModalBottomSheet } from 'modules/Shipping';
import {
	SplitBox, SplitBoxHeader, SplitBoxMain, SplitBoxSide, SplitBoxTitle,
} from 'elements/SplitBox';
import { Container } from 'elements/Container';
import { ProductSection } from 'modules/Product';

import css from './ProductSectionShippingConditions.module.scss';

const ProductSectionShippingConditions = (
	forwardRef(
		(
			{
				className,
			},
			ref,
		) => {
			const [isOpen, setOpen] = useState(false);
			const { isBreakpointDown } = useMediaBreakpoint();
			const cardVariant = (isBreakpointDown('lg') && 'touch');

			const onOpenBottomSheet = () => {
				if (isBreakpointDown('lg')) {
					setOpen(true);
				}
			};

			return (
				<ProductSection
					id="shipping-conditions"
					ref={ref}
				>
					<Container>
						<SplitBox
							className={classNames(css.wrapper, className)}
						>
							<SplitBoxSide>
								<SplitBoxHeader>
									<SplitBoxTitle>
										Shipping conditions
									</SplitBoxTitle>
								</SplitBoxHeader>
							</SplitBoxSide>
							<SplitBoxMain>
								<ShippingList variant={isBreakpointDown('lg') && 'touch'}>
									<ShippingCard variant={cardVariant} onClick={onOpenBottomSheet} />
									<ShippingCard variant={cardVariant} onClick={onOpenBottomSheet} />
								</ShippingList>

								<ShippingModalBottomSheet
									isOpen={isOpen}
									onDismiss={() => setOpen(false)}
								>
									<ShippingCard />
									<ShippingCard />
								</ShippingModalBottomSheet>
							</SplitBoxMain>
						</SplitBox>
					</Container>
				</ProductSection>
			);
		},
	)
);

ProductSectionShippingConditions.propTypes = {
	className: PropTypes.string,
};

ProductSectionShippingConditions.defaultProps = {
	className: null,
};

export { ProductSectionShippingConditions };
