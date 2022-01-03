import PropTypes from 'prop-types';

import { MediaBreakpoint } from 'providers';
import { ModalPortal } from 'elements/Modal';
import { ShippingList } from 'modules/Shipping';
import { BottomSheet, BottomSheetMain } from 'elements/BottomSheet';

import css from './ShippingModalBottomSheet.module.scss';

const ShippingModalBottomSheet = (
	{
		children,
		isOpen,
		onDismiss,
	},
) => (
	<MediaBreakpoint>
		{({ isBreakpointUp }) => (
			isBreakpointUp('lg') ? (
				<ModalPortal
					isOpen={isOpen}
					className={css.wrapper}
					variant="bottom"
					header={(
						<>
							Shipping conditions
						</>
					)}
					onDismiss={onDismiss}
				>
					<div className={css.main}>
						<ShippingList variant="modal">
							{children}
						</ShippingList>
					</div>
				</ModalPortal>
			) : (
				<BottomSheet
					isOpen={isOpen}
					className={css.wrapper}
					header={(
						<>
							Shipping conditions
						</>
					)}
					onDismiss={onDismiss}
				>
					<BottomSheetMain>
						<div className={css.main}>
							<ShippingList>
								{children}
							</ShippingList>
						</div>
					</BottomSheetMain>
				</BottomSheet>
			)
		)}
	</MediaBreakpoint>
);

ShippingModalBottomSheet.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	isOpen: PropTypes.bool,
	onDismiss: PropTypes.func,
};

ShippingModalBottomSheet.defaultProps = {
	children: null,
	isOpen: false,
	onDismiss: null,
};

export { ShippingModalBottomSheet };
