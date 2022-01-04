import { memo } from 'react';
import { Icon } from 'elements/Icon';
import { classNames } from 'helpers/classNames';
import { Tag, Tags } from 'elements/Tags';
import { FilterIcon, SortByIcon } from 'icons';
import Badge from 'elements/Badge';

import { FilterGroup } from '../Group';
import { FilterOptions } from '../Options';
import { FilterTooltip } from '../Tooltip';
import { useFilterContext } from '../../providers';

import cl from './FilterSidebar.module.scss';

const FilterSidebar = memo(() => {
	const {
		tags,
		tagsCount,
		list,
		onRemoveOption,
		shared,
	} = useFilterContext();

	return (
		<aside className={cl.filters}>
			<div className={cl.filters__header}>
				<div className={cl.filters__headerBtns}>
					<button type="button" className={cl.filtersBtn}>
						<span className={cl.filtersBtn__icon}>
							<Icon src={FilterIcon} className={cl.filtersBtn__iconSvg} />
						</span>
						<span className={cl.filtersBtn__text}>
							Filters
							{tagsCount > 0 && (
								<Badge
									variant="filterLabel"
								>
									{tagsCount}
								</Badge>
							)}
						</span>
					</button>
					<button type="button" className={classNames(cl.filtersBtn, cl.sortBtn)}>
						<span className={cl.filtersBtn__icon}>
							<Icon src={SortByIcon} className={cl.filtersBtn__iconSvg} />
						</span>
						<span className={cl.filtersBtn__text}>Sort by</span>
					</button>
				</div>
			</div>
			<div className={cl.filters__content}>
				{tagsCount > 0 && (
					<FilterGroup>
						<Tags>
							{tags.map(({ label, name, value }) => (
								<Tag
									onClick={() => onRemoveOption(name, value)}
									key={label}
								>
									{label}
								</Tag>
							))}
						</Tags>
					</FilterGroup>
				)}

				{list?.map((group, index) => (
					<FilterGroup
						key={group?.type || index}
						title={group?.label}
					>
						<FilterOptions data={group} />
					</FilterGroup>
				))}
			</div>
			{tagsCount > 0 && (
				<FilterTooltip
					result={`${shared?.itemsCount || 0} result(s)`}
				/>
			)}
		</aside>
	);
});

FilterSidebar.propTypes = {};

FilterSidebar.defaultProps = {};

export { FilterSidebar };
