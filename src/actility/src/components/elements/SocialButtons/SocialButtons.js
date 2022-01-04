import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { Icon } from 'elements/Icon';
import {
	FacebookIcon, GooglePlusIcon, InstagramIcon, PinterestIcon, TwitterIcon, VimeoIcon, WebSiteIcon, YoutubeIcon,
} from 'icons';

import css from './SocialButtons.module.scss';

const BUTTONS = {
	facebook: FacebookIcon,
	googlePlus: GooglePlusIcon,
	instagram: InstagramIcon,
	pinterest: PinterestIcon,
	twitter: TwitterIcon,
	vimeo: VimeoIcon,
	website: WebSiteIcon,
	youtube: YoutubeIcon,
};

const SocialButtons = (
	{
		className,
		data,
	},
) => {
	const list = useMemo(() => (
		(data && Object.entries(data)?.filter?.(([key, value]) => (key in BUTTONS && value?.length > 0))) || []
	), [data]);

	if (list?.length < 1) {
		return null;
	}

	return (
		<div
			className={classNames(css.wrapper, className)}
		>
			{list.map(([key, value]) => (
				<a
					key={key}
					href={value}
					target="_blank"
					rel="noopener noreferrer"
					className={css.button}
				>
					<Icon
						src={BUTTONS?.[key]}
						className={css.icon}
					/>
				</a>
			))}
		</div>
	);
};

SocialButtons.propTypes = {
	data: PropTypes.shape({
		facebook: PropTypes.string,
		googlePlus: PropTypes.string,
		instagram: PropTypes.string,
		pinterest: PropTypes.string,
		twitter: PropTypes.string,
		vimeo: PropTypes.string,
		website: PropTypes.string,
		youtube: PropTypes.string,
	}),
	className: PropTypes.string,
};

SocialButtons.defaultProps = {
	data: null,
	className: null,
};

export { SocialButtons };
