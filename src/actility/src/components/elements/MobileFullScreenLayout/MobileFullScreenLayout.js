import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { MediaBreakpointDown } from 'providers';

import css from './MobileFullScreenLayout.module.scss';

const MobileFullScreenLayout = (
	{
		children,
		header,
		className,
	},
) => (
	<div
		className={classNames(css.wrapper, className)}
	>
		{header && (
			<MediaBreakpointDown name="lg">
				<header className={css.header}>
					{header}
				</header>
			</MediaBreakpointDown>
		)}

		<main className={css.main}>
			{children}
		</main>
	</div>
);

MobileFullScreenLayout.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
		PropTypes.string,
	]),
	header: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
		PropTypes.string,
	]),
	className: PropTypes.string,
};

MobileFullScreenLayout.defaultProps = {
	children: null,
	header: null,
	className: null,
};

export { MobileFullScreenLayout };
