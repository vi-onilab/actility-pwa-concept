import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { hideContentIcon, ShowContentIcon } from 'icons';
import { forwardRef, useState } from 'react';
import css from './Input.module.scss';
import { Icon } from '../Icon';

const VARIANTS = {
	password: css.variantPassword,
	default: css.variantDefault,
};

const Input = forwardRef(
	(
		{
			className,
			label,
			value,
			onChange,
			isDisabled,
			multiple,
			variant,
			id,
			maxLength,
			name,
			onBlur,
			required,
		},
		ref,
	) => {
		const [passwordVisible, setPasswordVisible] = useState(false);

		const inputProps = {
			...(value !== undefined ? { value } : {}),
			...(onChange !== undefined ? {
				onChange: async (ev) => {
					if (!isDisabled) {
						await onChange?.(ev, ev?.target?.value || '');
					}
				},
			} : {}),
			onBlur,
		};

		return (
			<div
				className={classNames(
					css.container,
					isDisabled && css.isDisabled,
					value?.length > 0 && css.isValue,
					className,
				)}
			>
				{!multiple && (
					<input
						{...inputProps}
						disabled={isDisabled}
						className={classNames(css.input, variant && VARIANTS?.[variant], value?.length > 0 && css.isActive)}
						type={!!passwordVisible || variant !== 'password' ? 'text' : 'password'}
						id={id}
						maxLength={maxLength}
						required={required}
						ref={ref}
						name={name}
					/>
				)}
				{multiple && (
					<textarea
						{...inputProps}
						disabled={isDisabled}
						className={classNames(css.input, variant && VARIANTS?.[variant], value?.length > 0 && css.isActive)}
						required={required}
						ref={ref}
						name={name}
					/>
				)}
				{label?.length > 0 && (
					<div className={classNames(css.label, multiple && css.labelMultiple)}>
						{label}
					</div>
				)}
				{variant === 'password'
					? (
						// eslint-disable-next-line jsx-a11y/no-static-element-interactions
						<div
							onMouseDown={() => setPasswordVisible(true)}
							onMouseUp={() => setPasswordVisible(false)}
						>
							{passwordVisible
								? <Icon src={ShowContentIcon} className={css.show} />
								: <Icon src={hideContentIcon} className={css.show} />}
						</div>
					) : null}
			</div>
		);
	},
);

Input.propTypes = {
	className: PropTypes.string,
	isDisabled: PropTypes.bool,
	label: PropTypes.string,
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	value: PropTypes.string,
	multiple: PropTypes.bool,
	variant: PropTypes.oneOf(['default', 'password']),
	id: PropTypes.string,
	maxLength: PropTypes.number,
	name: PropTypes.string,
	required: PropTypes.bool,
};

Input.defaultProps = {
	className: null,
	isDisabled: false,
	label: null,
	onChange: undefined,
	onBlur: undefined,
	value: undefined,
	multiple: null,
	variant: 'default',
	id: null,
	maxLength: null,
	name: null,
	required: true,
};

export { Input };
