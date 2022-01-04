import PropTypes from 'prop-types';
import { Container } from 'elements/Container';
import { MicrositeSectionLayout } from 'modules/Microsite';
import { Image } from 'elements/Image';
import {
	Slider, SliderPagination, SliderSlide,
} from 'elements/Slider';

import css from './MicrositeSectionBanner.module.scss';

const MicrositeSectionBanner = ({ vendor }) => {
	const image = vendor?.banner?.image;
	const type = vendor?.banner?.type;
	const slider = vendor?.banner?.slider;

	if ((type === '0' && image?.length < 1) || (type === '1' && slider?.items?.length < 1)) {
		return null;
	}
	return (
		<MicrositeSectionLayout variant="largePaddingTop">
			<Container variant="small">
				{type === '1' ? (
					<>
						{slider?.title?.length > 0 && (
							<div className={css.header}>
								<h2 className={css.headerTitle}>{slider?.title}</h2>
							</div>
						)}

						<Slider
							className={css.wrapper}
							autoHeight
							speed={slider?.speed || 160}
						>
							{slider?.items?.map?.(({ url }, index) => (
								<SliderSlide
									key={url || index}
									className={css.slide}
								>
									<Image
										src={url}
										className={css.slideImage}
									/>
								</SliderSlide>
							))}
							{slider?.isHidePagination === false && <SliderPagination className={css.sliderPagination} />}
						</Slider>
					</>
				) : (
					<div className={css.wrapper}>
						<Image src={image} className={css.banner} />
					</div>
				)}
			</Container>
		</MicrositeSectionLayout>
	);
};

MicrositeSectionBanner.propTypes = {
	vendor: PropTypes.oneOfType([PropTypes.object]),
};

MicrositeSectionBanner.defaultProps = {
	vendor: null,
};

export { MicrositeSectionBanner };
