import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { ProductSlider } from 'modules/Product';
import { LinkArrow } from 'elements/LinkArrow';
import { classNames } from 'helpers';
import { Tab, Tabs } from 'elements/Tabs';
import { Container } from 'elements/Container';
import { useQuery } from '@apollo/client';
import { ProductsQuery } from 'schemas';
import { SectionTitle, SectionTop } from 'elements/Section';
import { useRouter } from 'hooks';

import styles from './ProductsCarousel.module.scss';

const cardModeByAdvancedAndCategories = (isAdvanced, isCategories) => {
	if (isCategories) {
		return 'large';
	}
	if (isAdvanced) {
		return 'medium';
	}

	return 'small';
};

const ProductsCarousel = (
	{
		title,
		target_label,
		target_url,
		itemsIds,
		itemsToCategory,
		advanced_view,
	},
) => {
	const { getEntityUrl } = useRouter();
	const categories = useMemo(() => Object.values(itemsToCategory), [itemsToCategory]);
	const isWithCategories = categories?.length > 1;
	const isAdvancedView = advanced_view === '1';
	const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

	const productsIds = categories?.[activeCategoryIndex]?.items || itemsIds;
	const { data, loading } = useQuery(ProductsQuery, {
		variables: {
			filter: {
				entity_id: {
					in: productsIds,
				},
			},
		},
		skip: !productsIds?.length,
	});

	const products = data?.products?.items || [];
	const activeCategory = categories?.[activeCategoryIndex] || null;

	if (!loading && (!activeCategory && products?.length < 1)) {
		return null;
	}

	const arrowLinkJsx = (
		target_url?.url && activeCategory && (
			<LinkArrow to={getEntityUrl(activeCategory)} className={styles.linkArrow}>
				{isWithCategories ? (
					`See all ${activeCategory?.name}`.trim()
				) : (
					target_label || 'See all'
				)}
			</LinkArrow>
		)
	);

	const titleJsx = (
		<SectionTitle className={styles.sectionTitle}>{title}</SectionTitle>
	);

	const cardMode = cardModeByAdvancedAndCategories(isAdvancedView, isWithCategories);

	return (
		<section className={classNames(styles.sectionCatalog, isWithCategories && styles.sectionWithCategories)}>
			<Container>
				{isWithCategories && titleJsx}
				<SectionTop className={classNames('sectionTop', styles.sectionTop)}>
					{!isWithCategories ? (
						titleJsx
					) : (
						<Tabs className={styles.tabs}>
							{categories?.map?.((category, index) => (
								<Tab
									key={category?.id || index}
									onClick={() => setActiveCategoryIndex(index)}
									isActive={activeCategoryIndex === index}
								>
									{category?.name}
								</Tab>
							))}
						</Tabs>
					)}
					{arrowLinkJsx}
				</SectionTop>

				<ProductSlider
					data={products}
					variant={cardMode}
					isLoading={loading}
				/>

				{isWithCategories && (
					<div className={styles.hiddenLink}>
						{arrowLinkJsx}
					</div>
				)}

			</Container>
		</section>
	);
};

ProductsCarousel.propTypes = {
	title: PropTypes.string.isRequired,
	target_label: PropTypes.string,
	target_url: PropTypes.oneOfType([PropTypes.object]),
	itemsIds: PropTypes.arrayOf(PropTypes.string).isRequired,
	itemsToCategory: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
	advanced_view: PropTypes.oneOf(['0', '1']),
};

ProductsCarousel.defaultProps = {
	target_label: null,
	target_url: {},
	itemsToCategory: null,
	advanced_view: '0',
};

export { ProductsCarousel };
