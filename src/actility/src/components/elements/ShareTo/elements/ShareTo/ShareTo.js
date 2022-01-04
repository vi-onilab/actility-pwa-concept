import { createElement, useState } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { useMediaBreakpoint } from 'providers';
import { BottomSheet } from 'elements/BottomSheet';
import { Flex } from 'elements/Flex';
import { Icon } from 'elements/Icon';

import { windowOpen } from '../../utils';
import { SHARE_BUTTONS } from '../../constants';

import css from './ShareTo.module.scss';

const ShareTo = (
	{
		children,
		className,
		as,
		asProps,
		title,
		url,
	},
) => {
	const [copiedTextIndex, setCopiedTextIndex] = useState(null);
	const [isOpen, setOpen] = useState(false);
	const { isBreakpointDown } = useMediaBreakpoint();

	const isMediaDownLg = isBreakpointDown('lg');

	const jsxContent = (
		<>
			{SHARE_BUTTONS.map(({
				label, icon, color,
				type, payload,
			}, index) => (
				label ? (
					<button
						type="button"
						key={index}
						style={color && { '--local-share-color': color }}
						className={css.item}
						onClick={() => {
							switch (type) {
							case 'window':
								windowOpen(payload.make({ title, url }));
								break;
							case 'copy':
								window.navigator.clipboard.writeText(url);
								setCopiedTextIndex(index);
								setTimeout(() => (
									setCopiedTextIndex(null)
								), 3000);
								break;
							default:
								break;
							}

							if (isOpen) {
								setOpen(false);
							}
						}}
					>
						{icon && (
							<Icon
								src={icon}
								className={css.icon}
							/>
						)}
						<p>
							{copiedTextIndex === index ? 'Copied!' : label}
						</p>
					</button>
				) : (
					<div
						key={index}
						className={css.divider}
					/>
				)
			))}
		</>
	);

	return (
		<>
			{createElement(
				as,
				{
					...asProps,
					onClick: () => isMediaDownLg && setOpen(true),
					className: classNames(
						css.wrapper,
						className,
					),
				},
				<>
					{children}

					{!isMediaDownLg && (
						<Flex
							direction="column"
							justifyContent="start"
							alignItems="start"
							className={css.dropdown}
						>
							<div className={css.dropdownWrap}>
								{jsxContent}
							</div>
						</Flex>
					)}
				</>
				,
			)}
			<BottomSheet
				isOpen={isOpen}
				onDismiss={() => setOpen(false)}
			>
				<div className={css.bottom}>
					<h2 className={css.bottomTitle}>Share to</h2>
					{jsxContent}
				</div>
			</BottomSheet>
		</>
	);
};

ShareTo.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
	as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
	asProps: PropTypes.oneOfType([PropTypes.object]),
	title: PropTypes.string,
	url: PropTypes.string,
};

ShareTo.defaultProps = {
	children: null,
	className: null,
	as: 'div',
	asProps: {},
	title: null,
	url: null,
};

export { ShareTo };
