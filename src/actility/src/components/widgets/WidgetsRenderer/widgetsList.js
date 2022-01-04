import WidgetMainSlider from '../GreetBanner';
import { ProductsCarousel } from '../ProductsCarousel';
import WidgetBlog from '../BlogWidget';
import { CategoryCarousel } from '../CategoryCarousel';
import BrandSlider from '../BrandSlider';

const widgetsList = {
	widget_main_slider: WidgetMainSlider,
	widget_blog: WidgetBlog,
	widget_product_carousel: ProductsCarousel,
	widget_category_carousel: CategoryCarousel,
	widget_vendors_list: BrandSlider,
};

export default widgetsList;
