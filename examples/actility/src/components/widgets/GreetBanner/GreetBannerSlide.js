import { createElement, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Container } from 'elements/Container';
import parser from 'html-react-parser';
import { classNames } from 'helpers';
import { Image } from 'elements/Image';
import { VideoInjector } from 'elements/VideoInjector';

import css from './GreetBanner.module.scss';

const GreetBannerSlide = (
	{
		banner = {},
		currentIndex,
		count,
	},
) => {
	const {
		title,
		content,
		buttonTitle,
		videoLabel,
		videoLink,
		mobileImage,
		desktopImage,
		retinaImage,
		targetUrl,
		theme,
	} = banner;
	return (
		<div
			className={(
				classNames(
					css.greetSlide,
					theme === '1' && css.themeBlack,
					videoLabel?.url && css.slideOffers,
				)
			)}
		>
			<Container className={css.container}>
				<div className={css.greetSlideLeft}>
					<div className={css.greetSlideContent}>
						{title && (
							<div className={css.greetTitle}>
								{title}
							</div>
						)}
						{content && (
							<div className={css.greetSubtitle}>
								{parser(content)}
							</div>
						)}
						{buttonTitle && (
							createElement(
								(targetUrl?.url ? 'a' : Fragment),
								(targetUrl?.url ? {
									href: targetUrl?.url,
									target: (targetUrl?.openInNewTab ? '_blank' : ''),
									rel: (targetUrl?.openInNewTab ? 'noopener noreferer' : ''),
								} : {}),
								(
									<button
										type="button"
										className={css.greetButton}
									>
										{buttonTitle}
									</button>
								),
							)
						)}
					</div>
					<div className={css.sliderPagination}>
						{`${currentIndex + 1}/${count}`}
					</div>
				</div>
				<picture>
					{mobileImage?.url && (
						<source
							srcSet={mobileImage?.url}
							media="(max-width: 640px)"
						/>
					)}
					{retinaImage?.url && (
						<source
							srcSet={retinaImage?.url}
							media="(min-width: 2400px)"
						/>
					)}
					<Image
						src={desktopImage?.url}
						alt=""
						className={css.greetSlideBg}
					/>
				</picture>
				{videoLabel?.url && videoLink && (
					<div className={css.greetVideo}>
						<VideoInjector
							src={videoLink}
							preview={videoLabel.url}
						/>
					</div>
				)}
			</Container>
		</div>
	);
};

GreetBannerSlide.propTypes = {
	banner: PropTypes.oneOfType([PropTypes.object]),
	currentIndex: PropTypes.number,
	count: PropTypes.number,
};

GreetBannerSlide.defaultProps = {
	banner: {},
	currentIndex: 0,
	count: 0,
};

export default GreetBannerSlide;
