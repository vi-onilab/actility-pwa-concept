import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import css from './ModalAnimationBounce.module.scss';

const ModalAnimationBounce = (
	{
		children,
		isOpen,
	},
) => (
	<CSSTransition
		in={isOpen}
		timeout={Number(css.animationTimeMs)}
		classNames={{
			appear: css.appear,
			appearActive: css.appearActive,
			appearDone: css.appearDone,
			enter: css.enter,
			enterActive: css.enterActive,
			enterDone: css.enterDone,
			exit: css.exit,
			exitActive: css.exitActive,
			exitDone: css.exitDone,

		}}
		unmountOnExit
	>
		{children}
	</CSSTransition>
);

ModalAnimationBounce.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	isOpen: PropTypes.bool,
};

ModalAnimationBounce.defaultProps = {
	children: null,
	isOpen: false,
};

export { ModalAnimationBounce };
