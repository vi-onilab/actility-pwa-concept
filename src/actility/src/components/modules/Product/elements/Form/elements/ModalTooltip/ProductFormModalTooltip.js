import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { ModalPortal } from 'elements/Modal';
import { useState } from 'react';
import { Tooltip } from 'elements/Tooltip';
import { BottomSheet } from 'elements/BottomSheet';
import { MediaBreakpointDown, MediaBreakpointUp } from 'providers';

import css from './ProductFormModalTooltip.module.scss';

const ProductFormModalTooltip = (
	{
		children,
		className,
	},
) => {
	const [isOpen, setIsOpen] = useState(false);

	const onDismiss = (e) => {
		e?.stopPropagation?.();
		setIsOpen(false);
	};

	return (
		<>
			<Tooltip
				className={classNames(css.tooltip, className)}
				onClick={(e) => {
					e.stopPropagation();
					setIsOpen((prev) => !prev);
				}}
			/>
			<MediaBreakpointUp name="lg">
				<ModalPortal
					isOpen={isOpen}
					onDismiss={(e) => {
						onDismiss(e);
					}}
					className={css.wrapper}
				>
					{children}
				</ModalPortal>
			</MediaBreakpointUp>
			<MediaBreakpointDown name="lg">
				<BottomSheet
					isOpen={isOpen}
					onDismiss={(e) => {
						onDismiss(e);
					}}
				>
					{children}
				</BottomSheet>
			</MediaBreakpointDown>
		</>
	);
};

ProductFormModalTooltip.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
};

ProductFormModalTooltip.defaultProps = {
	children: null,
	className: null,
};

export { ProductFormModalTooltip };
