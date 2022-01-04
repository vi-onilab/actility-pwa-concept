import { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import BrandSlider from './BrandSlider';
import SellerBlock from './SellerBlock';
import BlogWidget from './BlogWidget';
import GreetBanner from './GreetBanner';

// that component must be deleted after all cms block will be integrated and use WidgetRenderer component as default

const CmsWidget = memo(({ type }) => {
	const cmsContent = useMemo(() => {
		switch (type) {
		case 'greetBanner':
			return (
				<GreetBanner />
			);
		case 'brands':
			return (
				<BrandSlider />
			);
		case 'bestsellers':
			return (
				<></>
			);
		case 'sellerBlock':
			return (
				<SellerBlock />
			);
		case 'blogWidget':
			return (
				<BlogWidget />
			);
		default:
			return null;
		}
	}, [type]);

	return (
		<>
			{cmsContent }
		</>
	);
});

CmsWidget.defaultProps = {
	type: null,
};

CmsWidget.propTypes = {
	type: PropTypes.oneOfType([PropTypes.string]),
};

export default CmsWidget;
