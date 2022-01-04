import {
	forwardRef,
	useEffect,
	useMemo,
	useState,
} from 'react';
import PropTypes from 'prop-types';

import { SelectItem } from './SelectItem';

import css from './Select.module.scss';

const SelectDropdown = forwardRef((
	{
		options,
		onChange,
		search,
		value,
		triggerRef,
	},
	ref,
) => {
	const [styles, setStyles] = useState(triggerRef?.current ? { top: 0, left: 0, width: 0 } : null);
	const searchRegExp = useMemo(() => (
		search ? (
			new RegExp(`(${search})`, 'igm')
		) : null
	), [search]);

	const outputOptions = useMemo(() => (
		searchRegExp ? (
			options.filter((option) => (
				searchRegExp.test(option?.label || '')
			))
		) : (
			options
		)
	), [options, searchRegExp]);

	useEffect(() => {
		const calcPosition = () => {
			if (triggerRef?.current) {
				const position = triggerRef?.current?.getBoundingClientRect();

				setStyles({
					top: `${(position.top + position.height)}px`,
					left: `${position.left}px`,
					width: `${position.width}px`,
					position: 'fixed',
					opacity: 1,
				});
			}
		};

		calcPosition();

		window.addEventListener('resize', calcPosition);

		return () => {
			window.removeEventListener('resize', calcPosition);
		};
	}, [triggerRef, setStyles]);

	return (
		((triggerRef?.current && styles) || !triggerRef?.current) && (
			<div
				ref={ref}
				className={css.dropdown}
				style={{ opacity: 0, ...styles }}
			>
				<div className={css.dropdownList}>
					{outputOptions?.map?.((option, index) => (
						<SelectItem
							key={option?.value || index}
							isActive={(option?.value === value)}
							onClick={onChange}
							value={option?.value}
							icon={option?.icon}
						>
							{option?.label}
						</SelectItem>
					))}
				</div>
			</div>
		)
	);
});

SelectDropdown.displayName = 'SelectDropdown';

SelectDropdown.defaultProps = {
	search: null,
	options: [],
	value: null,
	onChange: null,
	triggerRef: null,
};

SelectDropdown.propTypes = {
	search: PropTypes.string,
	onChange: PropTypes.func,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	options: PropTypes.arrayOf(PropTypes.shape({
		value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		label: PropTypes.string,
		icon: PropTypes.string,
	})),
	triggerRef: PropTypes.oneOfType([PropTypes.object]),
};

export { SelectDropdown };
