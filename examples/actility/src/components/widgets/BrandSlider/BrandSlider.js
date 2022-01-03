import { Container } from 'elements/Container';
import { useQuery } from '@apollo/client';
import { VendorsQuery } from 'schemas';
import { Image } from 'elements/Image';
import { useRouter } from 'hooks';
import { Link } from 'elements/Link';
import { Slider, SliderNavigation, SliderSlide } from 'elements/Slider';

import { BrandSliderSkeleton } from './BrandSlider.skeleton';
import styles from './BrandSlider.scss';

const BrandSlider = () => {
	const { getMicrositeUrl } = useRouter();
	const { data, loading } = useQuery(VendorsQuery);

	if (!loading && !data?.vendors?.length) {
		return null;
	}

	if (loading) {
		return (<BrandSliderSkeleton />);
	}

	return (
		<section className={styles.brand}>
			<Container>
				<Slider
					className={styles.brand__slider}
					slidesPerView={3.5}
					spaceBetween={2}
					breakpoints={{
						768: {
							slidesPerView: 8,
							spaceBetween: 35,
						},
					}}
				>
					{data?.vendors?.map?.(({ id, image, storeName }, index) => (
						<SliderSlide
							key={id || index}
							className={styles.brand__slide}
						>
							<Link
								to={getMicrositeUrl(id)}
								className={styles.brand__item}
							>
								{image?.length > 0 && (
									<Image
										src={image}
										alt={storeName || ''}
									/>

								)}
							</Link>
						</SliderSlide>
					))}
					<SliderNavigation className={styles.brand__navigation} />
				</Slider>
			</Container>
		</section>
	);
};

export default BrandSlider;
