import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import { useQuery } from '@apollo/client';
import { Link } from 'elements/Link';
import { LinkArrow } from 'elements/LinkArrow';
import { InputSearch } from 'elements/InputSearch';
import { Logo } from 'elements/Logo';
import { Container } from 'elements/Container';
import { Icon } from 'elements/Icon';
import { ProductSearchCard, ProductSearchCardSkeleton } from 'modules/Product';
import { LiveSearchResultsQuery } from 'schemas';
import { ModalHeaderBackArrow, ModalPortal } from 'elements/Modal';
import { ChevronArrowRightIcon, SearchQuestionIcon } from 'icons';
import { Image } from 'elements/Image';
import { useRouter } from 'hooks';

import css from './SearchModal.module.scss';

const SearchModal = (
	{
		isOpen,
		onDismiss,
		onOpenAdvanced,
	},
) => {
	const { register, getValues, watch } = useFormContext();
	const { getEntityUrl, getSearchUrl } = useRouter();

	const value = getValues('q');
	watch('q');

	const { data: { liveSearchResults = null } = {}, loading } = useQuery(LiveSearchResultsQuery, {
		variables: {
			search: value,
		},
		skip: !value || value?.length < 1,
	});

	const isNotFound = ((liveSearchResults?.products?.items?.length || 0) < 1 && !loading);

	const suggest = liveSearchResults?.suggest;

	const aside = useMemo(() => {
		const response = [];

		if (liveSearchResults?.suggestions?.length > 0) {
			response.push({
				title: 'Suggestions',
				data: liveSearchResults?.suggestions?.slice?.(0, 4)?.map((item, index) => ({
					key: item || index,
					to: getEntityUrl(item),
					text: item,
				})),
			});
		}

		if (liveSearchResults?.cmsPages?.length > 0) {
			response.push({
				title: 'Pages',
				data: liveSearchResults?.cmsPages?.slice?.(0, 4)?.map((page, index) => ({
					key: page?.urlKey || page?.identifier || index,
					to: getEntityUrl(page),
					text: page?.title,
				})),
			});
		}

		if (liveSearchResults?.categories?.length > 0) {
			response.push({
				title: 'Categories',
				data: liveSearchResults?.categories?.slice?.(0, 4)?.map((category, index) => ({
					key: category?.id || index,
					to: getEntityUrl(category),
					icon: category?.categoryWidgetSvgIcon,
					text: category?.name,
				})),
			});
		}

		return response;
	}, [
		getEntityUrl,
		liveSearchResults?.categories,
		liveSearchResults?.cmsPages,
		liveSearchResults?.suggestions,
	]);

	const notFoundJsx = (
		value?.length > 0 && (
			<div className={css.notFound}>
				<Icon src={SearchQuestionIcon} className={css.notFoundIcon} />
				<div>
					Sorry, nothing found
					{value?.length > 0 && (
						<>
							{' for '}
							<span className={css.notFoundHighlight}>
								{`“${value}”`}
							</span>
						</>
					)}
				</div>
			</div>
		)
	);

	return (
		<ModalPortal
			isOpen={isOpen}
			header={(
				<div className={css.modalHeader}>
					<ModalHeaderBackArrow onDismiss={onDismiss}>
						<InputSearch
							isAutoFocus
							isClean
							{...register('q')}
							variant="darkSmall"
						/>
					</ModalHeaderBackArrow>
				</div>
			)}
			onDismiss={onDismiss}
			variant="search"
		>
			<Container className={css.container}>
				<Logo className={css.logo} />

				<div className={css.wrapper}>
					{isNotFound && (
						<div className={css.notFoundMobile}>
							{notFoundJsx}
						</div>
					)}

					{(!notFoundJsx || !isNotFound) && (
						<button
							type="submit"
							onClick={onOpenAdvanced}
							className={css.advancedMobile}
						>
							<div>Advanced search</div>
							<Icon src={ChevronArrowRightIcon} className={css.advancedMobileIcon} />
						</button>
					)}

					<div className={css.header}>
						<div className={css.form}>
							<InputSearch
								isAutoFocus
								{...register('q')}
								side={(
									<LinkArrow
										variant="small"
										onClick={onOpenAdvanced}
										className={css.formAdvancedSearch}
									>
										Advanced search
									</LinkArrow>
								)}
								isClean
							/>
						</div>

						{suggest && (
							<div className={css.suggestions}>
								<div className={css.suggestionsItem}>
									Showing
									<span>
										{` “${suggest}”  `}
									</span>
									results
								</div>
								<div className={css.suggestionsItemInstead}>
									Search instead
									<span>
										{` “${value}”`}
									</span>
								</div>
							</div>
						)}
					</div>
					{aside?.length > 0 && (
						<aside className={css.aside}>
							{aside.map((group, index) => (
								<div
									key={group.title || index}
									className={css.asideGroup}
								>
									<div className={css.asideHeader}>
										<div className={css.label}>
											{group.title}
										</div>
									</div>

									{group.data.map((item, itemIndex) => (
										<Link
											key={item?.key || itemIndex}
											to={item?.to}
											className={css.asideItem}
										>
											{item?.icon && (
												<Image
													src={item?.icon}
													alt={item?.text}
													className={css.asideItemIcon}
												/>
											)}
											<div className={css.asideItemText}>{item?.text}</div>
										</Link>
									))}

								</div>
							))}
						</aside>
					)}
					<main className={css.main}>
						{isNotFound ? (
							<div className={css.notFoundDesktop}>
								{notFoundJsx}
							</div>
						) : (
							<div className={css.mainGroup}>
								<div className={css.mainHeader}>
									<div className={css.label}>
										Products
									</div>
									{!loading && liveSearchResults?.products?.items?.length > 5 && (
										<LinkArrow
											variant="smallBold"
											to={getSearchUrl(value)}
										>
											{`View all ${liveSearchResults?.products?.totalCount} products`}
										</LinkArrow>
									)}
								</div>
								<div className={css.mainList}>
									{loading ? (
										<>
											<div className={css.mainItem}>
												<ProductSearchCardSkeleton />
											</div>
											<div className={css.mainItem}>
												<ProductSearchCardSkeleton />
											</div>
											<div className={css.mainItem}>
												<ProductSearchCardSkeleton />
											</div>
											<div className={css.mainItem}>
												<ProductSearchCardSkeleton />
											</div>
											<div className={css.mainItem}>
												<ProductSearchCardSkeleton />
											</div>
										</>
									) : (
										liveSearchResults?.products?.items?.slice?.(0, 5)?.map((product, index) => (
											<ProductSearchCard
												key={product?.id || index}
												className={css.mainItem}
												product={product}
											/>
										))
									)}
								</div>
							</div>
						)}
					</main>
				</div>
			</Container>
		</ModalPortal>
	);
};

SearchModal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onDismiss: PropTypes.func.isRequired,
	onOpenAdvanced: PropTypes.func.isRequired,
};

export { SearchModal };
