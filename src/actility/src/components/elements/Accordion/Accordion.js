import { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'elements/Icon';
import { classNames } from 'helpers';
import { ChevronArrowRightIcon } from 'icons';
import { MediaBreakpointDown, MediaBreakpointUp } from 'providers';

import { BottomSheet } from 'elements/BottomSheet';
import css from './Accordion.module.scss';

const VARIANTS = {
	default: css.variantDefault,
	list: css.variantList,
};

const Accordion = (
	{
		children,
		title,
		variant,
	},
) => {
	const [isActive, setActive] = useState(false);

	const isMediaBreakpointDownLgBottomSheet = variant === 'list';

	const onClickHandler = () => {
		setActive(!isActive);
	};

	return (
		<>
			{/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
			<div
				className={classNames(
					css.wrapper,
					isActive && css.isActive,
					variant && VARIANTS?.[variant],
				)}
			>
				<button
					type="submit"
					onClick={onClickHandler}
					className={css.header}
				>
					<p className={css.title}>{title}</p>
					<Icon src={ChevronArrowRightIcon} className={css.icon} />
					<MediaBreakpointUp name="lg">
						{variant === 'list' && <p className={css.iconText}>{isActive ? '-' : '+'}</p>}
					</MediaBreakpointUp>
				</button>
				{!isMediaBreakpointDownLgBottomSheet
				&& (
					<div className={css.content}>
						{children}
					</div>
				)}
				{isMediaBreakpointDownLgBottomSheet
					&& (
						<MediaBreakpointUp name="lg">
							<div className={css.content}>
								{children}
							</div>
						</MediaBreakpointUp>
					)}
				{isMediaBreakpointDownLgBottomSheet
				&& (
					<MediaBreakpointDown name="lg">
						<BottomSheet onDismiss={() => setActive(!isActive)} isOpen={isActive}>
							<div className={css.bottomSheet}>

								<h3 className={css.bottomSheetHeader}>FAQ</h3>

								<p className={css.bottomSheetTitle}>
									{title}
								</p>
								<p className={css.bottomSheetContent}>
									{children}
								</p>
							</div>
						</BottomSheet>
					</MediaBreakpointDown>
				)}

			</div>
		</>
	);
};

Accordion.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	title: PropTypes.string,
	variant: PropTypes.oneOf(['default', 'list']),
};

Accordion.defaultProps = {
	children: null,
	title: null,
	variant: 'default',
};

export { Accordion };
