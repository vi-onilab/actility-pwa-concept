import PropTypes from 'prop-types';
import InnerImageZoom from 'react-inner-image-zoom';
import { classNames } from 'helpers';

import css from './ImageZoom.module.scss';
import './ImageZoom.vendor.scss';

const ImageZoom = (
	{
		className,
		src,
		zoomSrc,
	},
) => (
	<div className={classNames(css.wrapper, className)}>
		<InnerImageZoom
			hideHint
			hideCloseButton
			src={src}
			zoomType="hover"
			zoomSrc={zoomSrc}
			zoomScale={4}
			hasSpacer
		/>
	</div>
);

ImageZoom.propTypes = {
	className: PropTypes.string,
	src: PropTypes.string,
	zoomSrc: PropTypes.string,
};

ImageZoom.defaultProps = {
	className: null,
	src: null,
	zoomSrc: null,
};

export { ImageZoom };
