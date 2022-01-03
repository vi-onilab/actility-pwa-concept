import PropTypes from 'prop-types';

const Image = (
	{
		className,
		src,
		alt,
		title,
		width,
		height,
		onClick,
	},
) => (
	// eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
	<img
		src={src}
		className={className}
		alt={alt}
		width={width}
		height={height}
		title={title}
		onClick={onClick}
	/>
);

Image.propTypes = {
	className: PropTypes.string,
	src: PropTypes.string,
	alt: PropTypes.string,
	title: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	onClick: PropTypes.func,
};

Image.defaultProps = {
	className: null,
	src: null,
	alt: null,
	title: null,
	width: '100%',
	height: '100%',
	onClick: null,
};

export { Image };
