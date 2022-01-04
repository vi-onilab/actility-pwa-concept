import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { Children, cloneElement } from 'react';
import { MediaBreakpointDown, MediaBreakpointUp } from 'providers';
import { ModalHeaderBackArrow, ModalPortal } from 'elements/Modal';

import { SceneTabContent } from './SceneTabContent';
import css from './SceneTabs.module.scss';
import { SceneTab } from './SceneTab';

const VARIANTS = {
	vertical: css.variantVertical,
	horizontal: css.variantHorizontal,
	form: css.variantForm,
};

const SceneTabs = (
	{
		children,
		variant,
		value,
		onChange,
	},
) => {
	const tabs = Children.toArray(children);

	const content = (
		value === null ? (
			tabs?.[0]
		) : (
			tabs?.[value] || tabs?.[0]
		)
	);

	return (
		<div className={classNames(css.wrapper, variant && VARIANTS?.[variant])}>
			<div className={css.header}>
				{Children.map(children, (tab, index) => (
					tab?.type === SceneTab ? (
						cloneElement(
							tab,
							{
								onClick: () => onChange?.(index),
								isActive: value === index || (index === 0 && !value),
							},
						)
					) : tab
				))}
			</div>

			<MediaBreakpointUp name="lg">
				<SceneTabContent>
					{content?.props?.children}
				</SceneTabContent>
			</MediaBreakpointUp>

			<MediaBreakpointDown name="lg">
				<ModalPortal
					isOpen={value !== null}
					onDismiss={() => onChange?.(null)}
					header={(
						<div>
							<ModalHeaderBackArrow onDismiss={() => onChange?.(null)}>
								{content?.props?.title}
							</ModalHeaderBackArrow>
						</div>
					)}
				>
					<SceneTabContent>
						{content?.props?.children}
					</SceneTabContent>
				</ModalPortal>
			</MediaBreakpointDown>
		</div>
	);
};

SceneTabs.propTypes = {
	variant: PropTypes.oneOf(['vertical', 'horizontal', 'form']),
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	value: PropTypes.number,
	onChange: PropTypes.func,
};

SceneTabs.defaultProps = {
	variant: 'horizontal',
	children: null,
	value: null,
	onChange: null,
};

export { SceneTabs };
