import PropTypes from 'prop-types';
import { Icon } from 'elements/Icon';
import { classNames } from 'helpers';
import { ArrowLeftIcon } from 'icons';

import css from './ModalHeaderBackArrow.module.scss';

const ModalHeaderBackArrow = ({ children, onDismiss, className }) => (
	<header className={classNames(css.wrapper, className)}>
		<button type="button" className={css.back} onClick={onDismiss}>
			{onDismiss && (
				<Icon src={ArrowLeftIcon} className={css.backIcon} />
			)}
		</button>
		<div className={css.main}>
			{children}
		</div>
	</header>
);

ModalHeaderBackArrow.defaultProps = {
	onDismiss: null,
	children: null,
	className: null,
};

ModalHeaderBackArrow.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	onDismiss: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
	className: PropTypes.string,
};

export { ModalHeaderBackArrow };
