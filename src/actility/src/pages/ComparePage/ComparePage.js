import { memo, useLayoutEffect, useState } from 'react';
import { Container } from 'elements/Container';
import { ArrowReplyIcon, TrashIcon } from 'icons';
import { Icon } from 'elements/Icon';
import { Checkbox } from 'elements/Checkbox';
import { Skeleton } from 'elements/Skeleton';
import {
	CompareTable,
	CompareTableBody,
	CompareTableCell,
	CompareTableHeader,
	CompareTableRow,
} from 'modules/Compare/elements/Table';
import { ProductCard } from 'modules/Product';
import { MediaBreakpointDown, MediaBreakpointUp } from 'providers';
import { useCompareContext } from 'modules/Compare';
import { MobileFullScreenLayout } from 'elements/MobileFullScreenLayout';
import { ModalHeaderBackArrow } from 'elements/Modal';
import { useCompareClear, useCompareRemoveItem, useRouterGoBack } from 'hooks';
import { Flex } from 'elements/Flex';
import { ComparePageSkeleton } from 'pages/ComparePage/ComparePage.skeleton';

import css from './ComparePage.module.scss';

const ComparePage = () => {
	const [isHideDuplicateOptions, setHideDuplicateOptions] = useState(false);
	const goBack = useRouterGoBack();
	const onRemoveFromCompare = useCompareRemoveItem();
	const {
		useListModel,
		isLoading,
	} = useCompareContext();
	const onRemoveCompare = useCompareClear();

	const data = useListModel();

	const title = `Compare products (${data?.itemCount || 0})`;

	const productAttributes = data?.items?.reduce((summary, {
		uid,
		attributes,
	}) => {
		const response = summary;

		attributes?.forEach((attribute) => {
			const {
				code,
				value: label,
			} = attribute;

			const value = {
				code,
				label,
			};

			if (code in response) {
				response[code][uid] = value;
			} else {
				response[code] = {
					[uid]: value,
				};
			}
		});

		return summary;
	}, {}) || {};

	const attributes = data?.attributes?.length > 0 ? (
		data?.attributes
	) : (
		Array
			.from({ length: 6 })
			.fill({})
	);

	useLayoutEffect(() => {
		if (!isLoading && data?.itemCount < 1) {
			goBack();
		}
	}, [data, goBack]);

	const jsxClearAllButton = (
		<button
			type="button"
			className={css.clear}
			onClick={onRemoveCompare}
		>
			<Icon src={TrashIcon} className={css.clearIcon} />
			<span className={css.clearTitle}>Clear All</span>
		</button>
	);

	if (isLoading) {
		return (
			<>
				<MediaBreakpointUp name="lg">
					<ComparePageSkeleton />
				</MediaBreakpointUp>
				<MediaBreakpointDown name="lg">
					<MobileFullScreenLayout
						header={(
							<ModalHeaderBackArrow onDismiss={() => goBack()}>
								<Flex>
									<Flex
										alignItems="center"
										flex="auto"
									>
										{title}
									</Flex>
									{jsxClearAllButton}
								</Flex>
							</ModalHeaderBackArrow>
						)}
					>
						<ComparePageSkeleton />
					</MobileFullScreenLayout>
				</MediaBreakpointDown>
			</>
		);
	}

	return (
		<MobileFullScreenLayout
			header={(
				<ModalHeaderBackArrow onDismiss={() => goBack()}>
					<Flex>
						<Flex
							alignItems="center"
							flex="auto"
						>
							{title}
						</Flex>
						{jsxClearAllButton}
					</Flex>
				</ModalHeaderBackArrow>
			)}
		>
			<div className={css.comparePage}>
				<MediaBreakpointUp name="lg">
					<Container>
						<button onClick={() => goBack()} type="button" className={css.compareBack}>
							<Icon src={ArrowReplyIcon} className={css.compareBackIcon} />
							<span className={css.compareBackTitle}>Back</span>
						</button>

						<div className={css.compareSection}>
							<h1 className={css.compareSectionTitle}>
								{title}
							</h1>
						</div>
					</Container>
				</MediaBreakpointUp>
				<div className={css.scrollWrapper}>
					<CompareTable>
						<CompareTableHeader>
							<Container className={css.stretch}>
								<CompareTableRow className={css.row}>
									<CompareTableCell className={css.cell}>
										{jsxClearAllButton}
										<Checkbox
											isChecked={isHideDuplicateOptions}
											onChange={setHideDuplicateOptions}
											className={css.checkbox}
										>
											Hide common values
										</Checkbox>
									</CompareTableCell>
									{data?.items?.map((item, index) => (
										<CompareTableCell key={item?.uid || item?.product?.id || index}>
											<ProductCard
												variant="compare"
												product={item?.product}
											/>
										</CompareTableCell>
									))}
								</CompareTableRow>
							</Container>
						</CompareTableHeader>
						<CompareTableBody>
							{attributes?.map?.(({
								label = null,
								code = null,
							}, rowIndex) => {
								let duplicates = {};

								if (isHideDuplicateOptions) {
									duplicates = (
										data?.items?.reduce(
											(response, { uid }) => {
												const output = response;
												const value = productAttributes?.[code]?.[uid]?.label?.trim?.();

												if (value in output) {
													// eslint-disable-next-line no-plusplus
													output[value]++;
												} else {
													output[value] = 1;
												}

												return output;
											},
											{},
										)
									);
								}

								const values = Object.values(duplicates);

								if (data?.items?.length > 1 && values.length === 1 && values?.[0] === data?.items.length) {
									return null;
								}

								return (
									<CompareTableRow key={code || rowIndex}>
										<CompareTableCell>
											{label?.length > 0 ? (
												label
											) : (
												<Skeleton inline />
											)}
										</CompareTableCell>

										{data?.items?.map(({ uid }, columnIndex) => {
											const value = productAttributes?.[code]?.[uid]?.label?.trim?.() || '';

											if (duplicates?.[value] > 1) {
												return (
													<CompareTableCell key={uid || columnIndex} />
												);
											}

											return (
												<CompareTableCell key={uid || columnIndex}>
													{uid?.length > 0 ? (
														value
													) : (
														<Skeleton inline />
													)}
												</CompareTableCell>
											);
										})}
									</CompareTableRow>
								);
							})}
							<CompareTableRow className={css.row}>
								<CompareTableCell />

								{data?.items?.map((item, index) => (
									<CompareTableCell key={item?.uid || item?.id || index}>
										<div className={css.control}>
											<button
												type="button"
												onClick={() => {
													if (data?.items?.length === 1) {
														goBack();
													}

													onRemoveFromCompare(item?.product);
												}}
												className={css.delete}
											>
												<Icon
													src={TrashIcon}
													className={css.deleteIcon}
												/>
											</button>

											{/* TODO: Move button with logic to modules/Product/AddToCartButton */}
											<button
												type="button"
												className={css.add}
											>
												<span className={css.addTitle}>Add to cart</span>
											</button>
										</div>
									</CompareTableCell>
								))}
							</CompareTableRow>
						</CompareTableBody>
					</CompareTable>
				</div>
			</div>
		</MobileFullScreenLayout>
	);
};

export default memo(ComparePage);
