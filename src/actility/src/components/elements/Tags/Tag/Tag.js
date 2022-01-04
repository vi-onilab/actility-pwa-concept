import PropTypes from 'prop-types';
import { Icon } from 'elements/Icon';
import { CloseTagIcon } from 'icons';

import css from './Tag.module.scss';

const Tag = ({ children, onClick }) => (
	<button
		type="button"
		className={css.tag}
		onClick={onClick}
	>
		<span className={css.title}>{children}</span>
		<button className={css.delete} type="button">
			<Icon src={CloseTagIcon} className={css.icon} />
		</button>
	</button>
);

Tag.defaultProps = {
	children: null,
	onClick: null,
};

Tag.propTypes = {
	children: PropTypes.string,
	onClick: PropTypes.func,
};

export { Tag };
