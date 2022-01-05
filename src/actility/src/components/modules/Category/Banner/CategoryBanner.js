import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import { Container } from 'elements/Container';
import { LinkArrow } from 'elements/LinkArrow';
import { Image } from 'elements/Image';

import css from './CategoryBanner.module.scss';

const CategoryBanner = (
	{
		data,
		onClick,
	},
) => {
	if (!data?.id) {
		return null;
	}

	return (
		<div className={css.wrapper}>
			<Container className={css.container}>
				{(data?.topBanner || data?.topBannerMobile) && (
					<picture>
						{!!data?.topBannerMobile && (
							<source
								srcSet={data?.topBanner}
								media="(min-width: 768px)"
							/>
						)}

						<Image
							className={css.background}
							src={data?.topBannerMobile || data?.topBanner}
							alt="categoryBanner"
						/>
					</picture>
				)}

				<div className={css.main}>
					<div className={css.title}>{data?.name}</div>
					<div className={css.text}>
						{data?.description?.length > 0 && parser(data?.description)}
					</div>
					{!!onClick && (
						<LinkArrow
							onClick={onClick}
							className={css.linkArrow}
							variant="light"
						>
							Read more
						</LinkArrow>
					)}
				</div>
			</Container>
		</div>
	);
};

CategoryBanner.propTypes = {
	data: PropTypes.oneOfType([
		PropTypes.shape({
			id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
			name: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			topBanner: PropTypes.string,
			topBannerUrl: PropTypes.string,
			topBannerMobile: PropTypes.string,
			topBannerMobileUrl: PropTypes.string,
		}),
	]).isRequired,
	onClick: PropTypes.func,
};

CategoryBanner.defaultProps = {
	onClick: null,
};

export { CategoryBanner };
