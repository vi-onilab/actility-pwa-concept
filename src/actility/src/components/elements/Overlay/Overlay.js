import PropTypes from 'prop-types';
import { Portal } from 'elements/Portal';
import { classNames } from 'helpers';

import styles from './Overlay.scss';

const Overlay = ({ onClick, isOverAll }) => (
	<Portal>
		{/* eslint-disable-next-line max-len */}
		{/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
		<div
			onClick={onClick}
			className={classNames(styles.overlay, isOverAll && styles.overlay__overall)}
		/>
	</Portal>
);

Overlay.propTypes = {
	onClick: PropTypes.func,
	isOverAll: PropTypes.bool,
};

Overlay.defaultProps = {
	onClick: null,
	isOverAll: false,
};

export { Overlay };
