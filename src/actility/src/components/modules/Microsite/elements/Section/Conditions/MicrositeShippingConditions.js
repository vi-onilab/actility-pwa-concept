import { useMediaBreakpoint } from 'providers';
import { forwardRef, useState } from 'react';
import { ShippingCard, ShippingList, ShippingModalBottomSheet } from 'modules/Shipping';
import { Container } from 'elements/Container';
import { MicrositeSectionLayout } from 'modules/Microsite';

import css from './MicrositeShippingConditions.module.scss';

const MicrositeShippingConditions = (
	forwardRef(
		(
			_,
			ref,
		) => {
			const { isBreakpointDown } = useMediaBreakpoint();
			const [isOpen, setIsOpen] = useState(false);
			const isMediaBreakpointLg = isBreakpointDown('lg');

			return (
				<MicrositeSectionLayout
					ref={ref}
					id="shipping"
					variant="largePaddingTop"
				>
					<Container variant="small">
						<div className={css.containerHeader}>
							<h2 className={css.containerHeaderTitle}>Shipping conditions</h2>
						</div>
						<ShippingList
							variant={isMediaBreakpointLg && 'touch'}
						>
							<ShippingCard
								onClick={() => setIsOpen(!isOpen)}
								variant={isMediaBreakpointLg && 'touch'}
							/>
							<ShippingCard
								onClick={() => setIsOpen(!isOpen)}
								variant={isMediaBreakpointLg && 'touch'}
							/>
						</ShippingList>
						<ShippingModalBottomSheet
							isOpen={isMediaBreakpointLg && isOpen}
							onDismiss={() => setIsOpen(!isOpen)}
						>
							<ShippingCard />
							<ShippingCard />
						</ShippingModalBottomSheet>
					</Container>
				</MicrositeSectionLayout>
			);
		},
	));

export { MicrositeShippingConditions };
