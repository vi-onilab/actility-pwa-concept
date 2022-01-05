import PropTypes from 'prop-types';
import { QuestionIcon } from 'icons';
import { classNames } from 'helpers';
import { Icon } from '../Icon';
import css from './Tooltip.module.scss';

const Tooltip = ({
	className,
	onClick,
}) => (
	<button type="button" onClick={onClick} className={classNames(css.icon, className)}>
		<Icon src={QuestionIcon} className={css.iconSvg} />
	</button>
);

Tooltip.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
};

Tooltip.defaultProps = {
	className: null,
	onClick: null,
};

export { Tooltip };
