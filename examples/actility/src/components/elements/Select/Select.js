import {
	forwardRef, useEffect, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import { classNames, mergeRefs } from 'helpers';
import { ChevronArrowRightIcon } from 'icons';
import { Image } from 'elements/Image';
import { Portal } from 'elements/Portal';
import { useOutsideClick } from 'hooks';

import css from './Select.module.scss';
import { SelectDropdown } from './SelectDropdown';
import { Icon } from '../Icon';

const Select = forwardRef(
	(
		{
			name,
			className,
			options,
			value,
			onChange,
			label,
			isSearchable,
			isDisabled,
			required,
		},
		ref,
	) => {
		const selectRef = useRef(null);
		const [cacheValue, setCacheValue] = useState(value);
		const [isVisibleDropdown, setVisibleDropdown] = useState(false);
		const [searchValue, setSearchValue] = useState('');
		const [active, setActive] = useState(null);
		const [isFocus, setFocus] = useState(false);

		const triggerRef = useRef(null);
		const dropdownRef = useRef(null);

		useEffect(() => {
			setActive(options?.find?.((item) => item.value === cacheValue));
		}, [cacheValue, setActive, options]);

		useOutsideClick(() => (
			isVisibleDropdown && setVisibleDropdown(false)
		), [triggerRef, dropdownRef]);

		useEffect(() => {
			if (value !== cacheValue) {
				setCacheValue(value);
			}
		}, [value, cacheValue]);

		const onChangeHandler = (newValue) => {
			if (!isDisabled) {
				if (!ref) {
					onChange?.(newValue);
				} else if ('value' in selectRef.current) {
					setCacheValue(newValue);
					selectRef.current.value = newValue;
				}
				setSearchValue(newValue?.label || '');
				setVisibleDropdown(false);
			}
		};

		const onInputBlurHandler = () => {
			if (!isDisabled && isSearchable) {
				setFocus(false);
				setSearchValue(null);
			}
		};

		const onInputChangeHandler = (ev) => {
			if (!isDisabled && isSearchable) {
				setSearchValue(ev?.target?.value || '');
			}
		};

		const onInputFocusHandler = () => {
			if (!isDisabled && isSearchable) {
				setFocus(true);
			}
		};

		const isDropdown = (isVisibleDropdown || isFocus);

		return (
			<div
				className={classNames(
					css.wrapper,
					!!active && css.isActive,
					isDropdown && css.isDropdown,
					className,

				)}
			>
				<button
					ref={triggerRef}
					type="button"
					onClick={() => setVisibleDropdown((prev) => !prev)}
					className={css.main}
				>
					{active?.icon && (
						<div className={css.iconContainer}>
							<Image
								src={active?.icon}
								className={css.icon}
								alt=""
							/>
						</div>

					)}
					{ref && (
						// eslint-disable-next-line jsx-a11y/control-has-associated-label
						<select
							ref={mergeRefs(ref, selectRef)}
							value={active?.value}
							onChange={onChange}
							name={name}
							className={css.select}
						/>
					)}
					<input
						className={css.input}
						value={searchValue || ''}
						onChange={onInputChangeHandler}
						required={required}
						disabled={isDisabled || !isSearchable}
						onBlur={onInputBlurHandler}
						onFocus={onInputFocusHandler}
					/>
					{!searchValue && (
						<div className={classNames(css.input, css.inputResult)}>
							{active?.label}
						</div>
					)}
					{label && (
						<>
							<div className={css.label}>{label}</div>
							<Icon src={ChevronArrowRightIcon} className={css.labelIcon} />
						</>
					)}
				</button>

				{isDropdown && (
					<Portal>
						<SelectDropdown
							value={value}
							ref={dropdownRef}
							triggerRef={triggerRef}
							options={options}
							onChange={onChangeHandler}
							search={searchValue}
						/>
					</Portal>
				)}
			</div>
		);
	},
);

Select.defaultProps = {
	className: null,
	label: null,
	options: [],
	value: null,
	onChange: null,
	isSearchable: false,
	isDisabled: false,
	name: undefined,
	required: true,
};

Select.propTypes = {
	className: PropTypes.string,
	label: PropTypes.string,
	onChange: PropTypes.func,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	options: PropTypes.arrayOf(PropTypes.shape({
		value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		label: PropTypes.string,
		icon: PropTypes.string,
	})),
	isSearchable: PropTypes.bool,
	isDisabled: PropTypes.bool,
	name: PropTypes.string,
	required: PropTypes.bool,
};

export { Select };
