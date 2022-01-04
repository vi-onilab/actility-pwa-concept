import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './PopoverDivider.module.scss';

const PopoverDivider = (
	{
		className,
	},
) => (
	<div className={classNames(css.wrapper, className)} />
);

PopoverDivider.propTypes = {
	className: PropTypes.string,
};

PopoverDivider.defaultProps = {
	className: null,
};

export { PopoverDivider };
