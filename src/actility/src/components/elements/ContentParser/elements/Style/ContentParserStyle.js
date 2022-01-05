import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './ContentParserStyle.module.scss';

const ContentParserStyle = (
	{
		children,
		className,
	},
) => (
	<div
		className={classNames(css.wrapper, className)}
	>
		{children}
	</div>
);

ContentParserStyle.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
};

ContentParserStyle.defaultProps = {
	children: null,
	className: null,
};

export { ContentParserStyle };
