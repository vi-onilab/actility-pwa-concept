import { BottomSheet as SpringBottomSheet } from 'react-spring-bottom-sheet';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './BottomSheet.module.scss';

const BottomSheet = (
	{
		children,
		onDismiss,
		isOpen,
		header,
		footer,
		className,
	},
) => (
	<SpringBottomSheet
		open={isOpen}
		// blocking={false}
		// scrollLocking={false}
		// reserveScrollBarGap={false}
		className={classNames(css.container, className)}
		header={(
			header && (
				<div className={css.header}>
					{header}
				</div>
			)
		)}
		footer={footer}
		onDismiss={onDismiss}
	>
		<div
			className={css.wrapper}
		>
			{children}
		</div>
	</SpringBottomSheet>
);

BottomSheet.defaultProps = {
	onDismiss: null,
	isOpen: false,
	header: null,
	footer: null,
	className: null,
};

BottomSheet.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]).isRequired,
	onDismiss: PropTypes.func,
	isOpen: PropTypes.bool,
	header: PropTypes.node,
	footer: PropTypes.node,
	className: PropTypes.string,
};

export { BottomSheet };
