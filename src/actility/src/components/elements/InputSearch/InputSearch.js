import { forwardRef, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { classNames, mergeRefs } from 'helpers';
import { Icon } from 'elements/Icon';
import { CloseCircleIcon, SearchIcon } from 'icons';

import css from './InputSearch.module.scss';

const VARIANTS = {
	default: css.variantDefault,
	darkSmall: css.variantDarkSmall,
};

const InputSearch = forwardRef(
	(
		{
			name,
			className,
			value,
			onChange,
			onSubmit,
			onFocus,
			onBlur,
			isClean,
			isAutoFocus,
			side,
			variant,
		},
		ref,
	) => {
		const inputRef = useRef(null);

		useEffect(() => {
			if (isAutoFocus) {
				inputRef.current?.focus?.();
			}
		}, [isAutoFocus, inputRef]);

		const onChangeHandler = (ev) => {
			onChange?.(ref ? ev : ev?.target?.value);
		};

		return (
			<div
				className={classNames(
					css.wrapper,
					className,
					variant && VARIANTS?.[variant],
				)}
			>
				{side && (
					<div className={css.side}>
						{side}
					</div>
				)}
				<div className={css.inputContainer}>
					<input
						{...(value !== undefined ? { value } : {})}
						{...(onChange !== undefined ? { onChange: onChangeHandler } : {})}
						required
						name={name}
						onFocus={onFocus}
						onBlur={onBlur}
						ref={ref ? mergeRefs(inputRef, ref) : inputRef}
						className={css.input}
					/>
					<div className={css.label}>
						Search
					</div>
				</div>
				{isClean && !!value?.length && (
					<>
						<button
							type="submit"
							onClick={() => onChange?.('')}
							className={css.clean}
						>
							<span className={css.cleanText}>Clean</span>
							<span className={css.cleanIcon}>
								<Icon src={CloseCircleIcon} className={css.cleanIconSvg} />
							</span>
						</button>
						<div className={css.divider} />
					</>
				)}
				<button
					type="submit"
					onClick={onSubmit}
					className={css.button}
				>
					<Icon src={SearchIcon} className={css.buttonIcon} />
				</button>
			</div>
		);
	},
);

InputSearch.propTypes = {
	className: PropTypes.string,
	name: PropTypes.string,
	onChange: PropTypes.func,
	onSubmit: PropTypes.func,
	onFocus: PropTypes.func,
	onBlur: PropTypes.func,
	value: PropTypes.string,
	isClean: PropTypes.bool,
	isAutoFocus: PropTypes.bool,
	side: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.string,
		PropTypes.number,
		PropTypes.node,
	]),
	variant: PropTypes.oneOf(['default', 'darkSmall']),
};

InputSearch.defaultProps = {
	className: null,
	name: null,
	onChange: undefined,
	onSubmit: undefined,
	onFocus: undefined,
	onBlur: undefined,
	value: undefined,
	isClean: false,
	isAutoFocus: false,
	side: null,
	variant: 'default',
};

export { InputSearch };
