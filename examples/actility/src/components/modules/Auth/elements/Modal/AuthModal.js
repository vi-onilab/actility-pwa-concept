import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { ModalHeaderCrossLogo, ModalPortal } from 'elements/Modal';
import { MediaBreakpointDown } from 'providers';
import { ModalAnimationBounce } from 'elements/Modal/Animations';

import css from './AuthModal.module.scss';

const AuthModal = (
	{
		children,
		className,
		isOpen,
		onDismiss,
	},
) => (
	<ModalPortal
		isOpen={isOpen}
		onDismiss={onDismiss}
		variant="login"
		animation={ModalAnimationBounce}
		header={(
			<MediaBreakpointDown name="lg">
				<ModalHeaderCrossLogo onDismiss={onDismiss} />
			</MediaBreakpointDown>
		)}
		className={classNames(css.wrapper, className)}
	>
		{children}
	</ModalPortal>
);

AuthModal.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
	isOpen: PropTypes.bool,
	onDismiss: PropTypes.func,
};

AuthModal.defaultProps = {
	children: null,
	className: null,
	isOpen: false,
	onDismiss: null,
};

export { AuthModal };
