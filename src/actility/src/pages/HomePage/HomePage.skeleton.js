import { GreetBannerSkeleton } from 'components/widgets/GreetBanner';
import { BrandSliderSkeleton } from 'components/widgets/BrandSlider';
import { BenefitesSkeleton } from 'components/widgets/Benefites';
import { ProductsCarouselSkeleton } from 'components/widgets/ProductsCarousel/ProductsCarousel.skeleton';
import { CategoryCarouselSkeleton } from 'components/widgets/CategoryCarousel/CategoryCarousel.skeleton';

const HomePageSkeleton = () => (
	<>
		<GreetBannerSkeleton />
		<BrandSliderSkeleton />
		<BenefitesSkeleton />
		<ProductsCarouselSkeleton control />
		<CategoryCarouselSkeleton />
		<ProductsCarouselSkeleton />
		<ProductsCarouselSkeleton />
	</>
);

export { HomePageSkeleton };
