import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './Checkbox.module.scss';

const VARIANTS = {
	default: css.variantDefault,
	touch: css.variantTouch,
	list: css.variantList,
	filter: css.variantFilter,
};

const Checkbox = forwardRef(
	(
		{
			className,
			children,
			variant,
			isChecked,
			onChange,
			name,
			value,
			onBlur,
		},
		ref,
	) => {
		const onChangeHandler = () => {
			onChange?.(!isChecked, name);
		};

		return (
			// eslint-disable-next-line jsx-a11y/label-has-associated-control,jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
			<label
				className={classNames(
					css.checkboxWrapper,
					className,
					isChecked && css.isChecked,
					(variant && VARIANTS?.[variant]) || VARIANTS.default,
				)}
				onClick={!ref ? onChangeHandler : undefined}
			>
				{ref && (
					<input
						name={name}
						className={css.input}
						defaultChecked={isChecked}
						type="checkbox"
						value={value}
						onBlur={onBlur}
						onChange={onChange}
						ref={ref}
					/>
				)}
				<span className={css.checkbox}>
					<span className={css.display} />
					<span className={css.title}>{children}</span>
				</span>
			</label>
		);
	},
);

Checkbox.propTypes = {
	className: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	isChecked: PropTypes.bool,
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	name: PropTypes.string,
	variant: PropTypes.oneOf(['default', 'touch', 'list', false]),
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Checkbox.defaultProps = {
	className: '',
	children: undefined,
	isChecked: false,
	onChange: null,
	onBlur: null,
	name: null,
	variant: 'default',
	value: undefined,
};

export { Checkbox };
