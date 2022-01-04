import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { ChevronArrowRightIcon } from 'icons';

import css from './ShowMore.module.scss';
import { Icon } from '../Icon';

const ShowMore = ({ children, className, onClick }) => (
	<button
		type="button"
		onClick={onClick}
		className={classNames(css.showMore, className)}
	>
		<span className={css.title}>{children}</span>
		<Icon src={ChevronArrowRightIcon} className={css.icon} />
	</button>
);

ShowMore.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
	onClick: PropTypes.func,
};

ShowMore.defaultProps = {
	children: null,
	className: null,
	onClick: null,
};

export { ShowMore };
