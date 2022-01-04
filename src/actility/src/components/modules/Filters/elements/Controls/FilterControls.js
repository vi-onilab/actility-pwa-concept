import { memo, useState } from 'react';
import { MediaBreakpointDown, MediaBreakpointUp } from 'providers';
import { Tab, Tabs } from 'elements/Tabs';
import { Icon } from 'elements/Icon';
import { FilterIcon, SortByIcon } from 'icons';
import { BottomSheet, BottomSheetMain } from 'elements/BottomSheet';
import { NavList, NavListItem } from 'elements/NavList';
import Badge from 'elements/Badge';

import { useFilterContext } from '../../providers';
import { FilterBottomSheet } from '../BottomSheet';

import css from './FilterControls.module.scss';

const FilterControls = memo(() => {
	const {
		values,
		controls,
		onChange,
		tagsCount,
	} = useFilterContext();
	const [isFilterOpen, setFilterOpen] = useState(false);
	const [isSortOpen, setSortOpen] = useState(false);

	const { sort = null } = controls;
	const activeSort = values?.sort || { [controls?.sort?.default]: ['DESC'] };

	const onChangeSort = (item) => {
		onChange((prev) => ({
			...prev,
			sort: {
				[item.value]: ['DESC'],
			},
		}));
	};

	return (
		<>
			<MediaBreakpointDown name="lg">
				<Tabs variant="touch">
					<Tab onClick={() => setFilterOpen(true)}>
						<Icon src={FilterIcon} />
						<span className={css.title}>Filters</span>
						{tagsCount > 0 && (
							<Badge variant="filterLabel">
								{tagsCount}
							</Badge>
						)}
					</Tab>
					<Tab onClick={() => setSortOpen(true)}>
						<Icon src={SortByIcon} />
						<span className={css.title}>Sort by</span>
					</Tab>
				</Tabs>

				<FilterBottomSheet
					isOpen={isFilterOpen}
					onDismiss={() => setFilterOpen(false)}
				/>

				{sort?.options?.length > 0 && (
					<BottomSheet
						header="Sort by"
						isOpen={isSortOpen}
						onDismiss={() => setSortOpen(false)}
					>
						<BottomSheetMain variant="bottom">
							<NavList variant="light">
								{sort.options?.map((option) => (
									<NavListItem
										isActive={option.value in activeSort}
										onClick={() => {
											onChangeSort(option);
											setSortOpen(false);
										}}
										key={option.value}
									>
										{option.label}
									</NavListItem>
								))}
							</NavList>
						</BottomSheetMain>
					</BottomSheet>
				)}
			</MediaBreakpointDown>
			{sort?.options?.length > 0 && (
				<MediaBreakpointUp name="lg">
					<Tabs
						variant="small"
						title="Sorted By:"
					>
						{sort.options?.map((option) => (
							<Tab
								isActive={option.value in activeSort}
								onClick={() => onChangeSort(option)}
								key={option.value}
							>
								{option.label}
							</Tab>
						))}
					</Tabs>
				</MediaBreakpointUp>
			)}
		</>
	);
});

FilterControls.propTypes = {};

FilterControls.defaultProps = {};

export { FilterControls };
