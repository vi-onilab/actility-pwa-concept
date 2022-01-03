import {
	createRef, useEffect, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './InputCode.module.scss';

const InputCode = (
	{
		count,
		className,
		onFullInput,
		disabled,
	},
) => {
	const [prevFullInput, setPrevFullInput] = useState(null);
	const [value, setValue] = useState(() => (
		Array.from({ length: count }).join(' ')
	));
	const refs = useMemo(() => (
		Array.from({ length: count }).map((_, key) => ({
			key,
			ref: createRef(),
		}))
	), [count]);

	const onChangeHandler = (ev, self, index) => {
		const newValue = ev.nativeEvent.data?.trim?.();

		if (/^[0-9]$/igm.test(newValue)) {
			setValue((prev) => (
				`${prev.slice(0, index)}${newValue}${prev.slice(index + 1)}`
			));

			self?.[index + 1]?.ref?.current?.focus?.();
		}
	};

	const onPasteHandler = (ev) => {
		try {
			ev.preventDefault();
			const newValue = ev.clipboardData.getData('Text').replace(/([^0-9]+)/igm, '') || '';
			const splitValues = newValue.slice(0, count);
			const length = splitValues?.length || 0;

			if (length === count) {
				setValue(newValue);
			}
		} catch {
			// TODO: Handle error
		}
	};

	useEffect(() => {
		if (value?.replace(' ', '')?.length === count) {
			if (prevFullInput !== value) {
				onFullInput?.(value);
			}

			setPrevFullInput(value);
		}
	}, [value, count, onFullInput, prevFullInput]);

	return (
		<div
			className={classNames(css.wrapper, className)}
		>
			{refs.map(({ ref, key }, index, self) => (
				<input
					key={key}
					ref={ref}
					onPaste={onPasteHandler}
					className={css.input}
					minLength={1}
					disabled={disabled}
					value={value?.[index] || ''}
					onChange={(ev) => onChangeHandler(ev, self, index)}
				/>
			))}
		</div>
	);
};

InputCode.propTypes = {
	className: PropTypes.string,
	count: PropTypes.number,
	onFullInput: PropTypes.func,
	disabled: PropTypes.bool,
};

InputCode.defaultProps = {
	className: null,
	count: 6,
	onFullInput: null,
	disabled: false,
};

export { InputCode };
