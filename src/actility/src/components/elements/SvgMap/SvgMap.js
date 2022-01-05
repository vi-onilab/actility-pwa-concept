import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import WorldMap from '@svg-maps/world';

import css from './SvgMap.module.scss';

const SvgMap = (
	{
		className,
		locationClassName,
		activeLocationClassName,
		map,
		value,
		onSelectLocation,
	},
) => {
	const activeIds = useMemo(() => value?.map?.((item) => item.toLowerCase()) || [value.toLowerCase()], [value]);
	const realLocationClassName = locationClassName ?? css.location;
	const realActiveLocationClassName = activeLocationClassName ?? css.isActive;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox={map?.viewBox}
			aria-label={map?.label}
			className={classNames(
				css.wrapper,
				onSelectLocation && css.isExistSelection,
				className,
			)}
		>
			{map?.locations.map((location) => (
				<path
					id={location.id}
					key={location.id}
					name={location.name}
					d={location.path}
					onClick={() => onSelectLocation?.(location.id.toLowerCase())}
					className={classNames(
						realLocationClassName,
						activeIds?.includes(location.id) && realActiveLocationClassName,
					)}
				/>
			))}
		</svg>
	);
};

SvgMap.propTypes = {
	className: PropTypes.string,
	locationClassName: PropTypes.string,
	activeLocationClassName: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
	map: PropTypes.oneOfType([PropTypes.object]),
	onSelectLocation: PropTypes.func,
};

SvgMap.defaultProps = {
	className: null,
	value: [],
	locationClassName: null,
	activeLocationClassName: null,
	map: WorldMap,
	onSelectLocation: null,
};

export { SvgMap };
