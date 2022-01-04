import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { classNames, transformToLeadingZero } from 'helpers';

import css from './Timer.module.scss';

const Timer = (
	{
		className,
		seconds,
		onTimeEnd,
	},
) => {
	const timerRef = useRef(null);
	const [currentSeconds, setCurrentSeconds] = useState(seconds);

	useEffect(() => {
		if (timerRef.current && currentSeconds === 0) {
			clearInterval(timerRef.current);
			onTimeEnd?.();
		}
	}, [currentSeconds, onTimeEnd]);

	useEffect(() => {
		timerRef.current = setInterval(() => {
			setCurrentSeconds((prev) => Math.max(0, (prev - 1)));
		}, 1000);

		return () => {
			clearInterval(timerRef.current);
		};
	}, []);

	const responseSeconds = transformToLeadingZero(Math.floor(currentSeconds % 60));
	const responseMinutes = transformToLeadingZero(Math.floor((currentSeconds / 60) % 60));

	return (
		<div
			className={classNames(css.wrapper, className)}
		>
			{`${responseMinutes}:${responseSeconds}`}
		</div>
	);
};

Timer.propTypes = {
	seconds: PropTypes.number,
	className: PropTypes.string,
	onTimeEnd: PropTypes.func,
};

Timer.defaultProps = {
	seconds: 0,
	className: null,
	onTimeEnd: null,
};

export { Timer };
