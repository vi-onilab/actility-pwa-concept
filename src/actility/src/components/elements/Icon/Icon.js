import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { Image } from 'elements/Image';

import css from './Icon.module.scss';

const Icon = (
	{
		src: Src,
		alt,
		className,
	},
) => {
	if (typeof Src === 'function') {
		return (
			<span
				className={classNames(css.wrapper, className)}
			>
				<Src className={css.icon} />
			</span>
		);
	}

	return (
		<Image
			src={Src}
			alt={alt}
			className={classNames(css.wrapper, className)}
		/>
	);
};

Icon.defaultProps = {
	src: '',
	alt: null,
	className: null,
};

Icon.propTypes = {
	src: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
	alt: PropTypes.string,
	className: PropTypes.string,
};

export { Icon };
