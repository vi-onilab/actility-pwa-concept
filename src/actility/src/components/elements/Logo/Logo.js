import { createElement } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import logo from 'images/logo.svg';
import logoMobile from 'images/logo-mobile.svg';
import { Image } from 'elements/Image';

import css from './Logo.module.scss';

const Logo = ({ className, as, asProps }) => (
	createElement(
		as,
		{
			...asProps,
			className: classNames(css.main, className),
		},
		(
			<picture>
				<source
					srcSet={logo}
					media="(min-width: 993px)"
				/>
				<Image
					src={logoMobile}
					width="100%"
					alt="Logo"
				/>
			</picture>
		),
	)
);

Logo.propTypes = {
	className: PropTypes.string,
	as: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
	asProps: PropTypes.oneOfType([PropTypes.object]),
};

Logo.defaultProps = {
	className: null,
	as: 'span',
	asProps: {},
};

export { Logo };
