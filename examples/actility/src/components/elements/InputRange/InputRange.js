import PropTypes from 'prop-types';
import { classNames } from 'helpers/classNames';
import { getTrackBackground, Range } from 'react-range';
import { useCurrencyContext } from 'providers';

import css from './InputRange.module.scss';

const VARIANTS = {
	default: css.variantDefault,
	row: css.variantRow,
};

const TRACK_COLORS = [
	css.rangeBackgroundColor,
	css.rangeFillColor,
	css.rangeBackgroundColor,
];

const convertPriceToNumber = (value) => (
	Number(value?.replace(/[^0-9]+/igm, ''))
);

const InputRange = (
	{
		variant,
		min,
		max,
		step,
		values,
		onChange,
		onFinalChange,
		mode,
	},
) => {
	const currency = useCurrencyContext();
	const currentValues = values?.map((value) => Math.min(max, Math.max(min, value))) || [min, max];

	if (currentValues?.length !== 2 || min === max) {
		return null;
	}

	return (
		<div
			className={classNames(
				css.container,
				variant && VARIANTS?.[variant],
			)}
		>
			<div className={css.range}>
				<Range
					step={step}
					min={min}
					max={max}
					onFinalChange={onFinalChange}
					values={currentValues || []}
					onChange={onChange}
					renderTrack={({ props: args, children }) => (
						// eslint-disable-next-line jsx-a11y/no-static-element-interactions
						<div
							onMouseDown={args.onMouseDown}
							onTouchStart={args.onTouchStart}
							style={args.style}
							className={css.rangeTrack}
						>
							<div
								ref={args.ref}
								style={{
									height: '5px',
									width: '100%',
									borderRadius: '4px',
									background: getTrackBackground({
										values: currentValues,
										colors: TRACK_COLORS,
										min,
										max,
									}),
									alignSelf: 'center',
								}}
							>
								{children}
							</div>
						</div>
					)}
					renderThumb={({ props: args, value, isDragged }) => (
						// eslint-disable-next-line jsx-a11y/no-static-element-interactions
						<div
							key={args?.key}
							style={args?.style}
							tabIndex={args?.tabIndex}
							aria-valuemax={args?.['aria-valuemax'] || ''}
							aria-valuemin={args?.['aria-valuemin'] || ''}
							aria-valuenow={args?.['aria-valuenow'] || ''}
							draggable={args?.draggable}
							ref={args?.ref}
							role={args?.role || ''}
							onKeyDown={args?.onKeyDown}
							onKeyUp={args?.onKeyUp}
							className={classNames(css.rangeThumb, isDragged && css.rangeThumbDragged)}
						>
							<div className={css.rangeThumbValue}>
								{(
									mode === 'price' ? (
										currency.transform(value, 0).label
									) : (
										value
									)
								)}
							</div>
						</div>
					)}
				/>
			</div>
			<div className={css.fields}>
				<div className={classNames(css.fieldsInput, css.fieldsFrom)}>
					<span>From:</span>
					<input
						type="text"
						min={min}
						max={max}
						onBlur={onFinalChange}
						onChange={(ev) => (
							onChange?.([
								Math.min(
									currentValues[1],
									Number(convertPriceToNumber(ev?.target?.value)),
								),
								currentValues[1],
							])
						)}
						value={currency.transform(currentValues[0], 0).label}
					/>
				</div>

				<div className={classNames(css.fieldsInput, css.fieldsTo)}>
					<span>To:</span>
					<input
						type="text"
						min={min}
						max={max}
						onBlur={onFinalChange}
						onChange={(ev) => (
							onChange?.([
								currentValues[0],
								Math.max(
									currentValues[0],
									Number(convertPriceToNumber(ev?.target?.value)),
								),
							])
						)}
						value={currency.transform(currentValues[1], 0).label}
					/>
				</div>
			</div>
		</div>
	);
};

InputRange.propTypes = {
	variant: PropTypes.oneOf(['default', 'row']),
	values: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.arrayOf(PropTypes.string)]),
	onChange: PropTypes.func,
	onFinalChange: PropTypes.func,
	min: PropTypes.number,
	max: PropTypes.number,
	step: PropTypes.number,
	mode: PropTypes.oneOf(['number', 'price']),
};

InputRange.defaultProps = {
	variant: 'default',
	min: 0,
	max: 100,
	step: 1,
	values: [],
	onChange: null,
	onFinalChange: null,
	mode: 'price',
};

export default InputRange;
