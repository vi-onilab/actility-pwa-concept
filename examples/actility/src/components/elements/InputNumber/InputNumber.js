import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './InputNumber.module.scss';

const VARIANTS = {
	default: css.variantDefault,
	small: css.variantSmall,
};

const InputNumber = (
	{
		className,
		value,
		onChange,
		min,
		max,
		variant,
	},
) => (
	<div
		className={classNames(css.wrapper, className, VARIANTS?.[variant])}
	>
		<button
			type="button"
			onClick={() => onChange?.(Math.max(min, value - 1))}
			className={css.button}
		>
			-
		</button>
		<input
			type="text"
			className={css.input}
			value={value}
			onChange={(ev) => {
				onChange?.(Math.max(min, Math.min(max, (+ev?.target?.value || 0))));
			}}
		/>
		<button
			type="button"
			onClick={() => onChange?.(Math.min(max, value + 1))}
			className={css.button}
		>
			+
		</button>
	</div>
);

InputNumber.propTypes = {
	className: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	value: PropTypes.number,
	onChange: PropTypes.func,
	min: PropTypes.number,
	max: PropTypes.number,
	variant: PropTypes.oneOf(['default', 'small']),
};

InputNumber.defaultProps = {
	className: null,
	value: 0,
	onChange: null,
	min: -Infinity,
	max: Infinity,
	variant: 'default',
};

export { InputNumber };
