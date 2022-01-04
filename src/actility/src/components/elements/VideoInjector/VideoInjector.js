import { useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'elements/Icon';
import { PlayIcon } from 'icons';
import { Image } from 'elements/Image';
import { useIntersectionObserver } from 'hooks';

import css from './VideoInjector.module.scss';

const videoServiceUrlMutation = (url) => {
	if (/(youtu\.be|youtube\.com)/igm.test(url)) {
		const lastPartBySlash = url?.split('/')?.reverse?.()?.[0];
		const videoCode = lastPartBySlash?.split('=')?.reverse?.()?.[0];

		if (!videoCode) {
			return url;
		}

		return `https://www.youtube.com/embed/${videoCode}`;
	}

	return url;
};

const VideoInjector = ({ isAutoplay, src, preview }) => {
	const containerRef = useRef(null);
	const [isPlayed, setPlayed] = useState(false);
	const isRealAutoplay = (preview && isAutoplay);

	const videoUrl = useMemo(() => (
		`${videoServiceUrlMutation(src)}?${isRealAutoplay ? 'autoplay=1&mute=1' : ''}`
	), [src, isRealAutoplay]);

	const allow = `accelerometer; mute; ${isRealAutoplay ? 'autoplay;' : ''} clipboard-write; encrypted-media; gyroscope; picture-in-picture`;

	useIntersectionObserver(({ isIntersecting }) => {
		if (!preview && !isPlayed && isIntersecting) {
			setPlayed(true);
		}
	}, [containerRef]);

	return (
		isPlayed ? (
			<iframe
				width="100%"
				height="100%"
				src={videoUrl}
				title="Video player"
				frameBorder="0"
				allow={allow}
				allowFullScreen
			/>
		) : (
			<div
				className={css.wrapper}
				ref={containerRef}
			>
				{preview && (
					<Image
						src={preview}
						width="100%"
						height="100%"
						alt=""
					/>
				)}

				<button
					onClick={() => setPlayed(true)}
					type="button"
					className={css.button}
				>
					<Icon src={PlayIcon} className={css.icon} />
				</button>
			</div>

		)
	);
};

VideoInjector.defaultProps = {
	isAutoplay: false,
	preview: null,
};
VideoInjector.propTypes = {
	isAutoplay: PropTypes.bool,
	src: PropTypes.string.isRequired,
	preview: PropTypes.string,
};

export { VideoInjector };
