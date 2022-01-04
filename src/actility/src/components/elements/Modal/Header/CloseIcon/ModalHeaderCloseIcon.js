import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { CloseTagIcon } from 'icons';

import { Icon } from '../../../Icon';

import css from './ModalHeaderCloseIcon.module.scss';

const ModalHeaderCloseIcon = (
	{
		className,
		onDismiss,
		isStarted,
	},
) => (
	<>
		{!isStarted && (
			<div className={classNames(css.header, className)}>
				<span className={css.headerTitle}>1/5 step</span>
			</div>
		)}
		<button type="button" className={css.close} onClick={onDismiss}>
			<Icon src={CloseTagIcon} className={css.closeIcon} />
		</button>
	</>
);

ModalHeaderCloseIcon.propTypes = {
	className: PropTypes.string,
	onDismiss: PropTypes.func,
	isStarted: PropTypes.bool,
};

ModalHeaderCloseIcon.defaultProps = {
	className: null,
	onDismiss: null,
	isStarted: false,
};

export { ModalHeaderCloseIcon };
