import PropTypes from 'prop-types';
import { Icon } from 'elements/Icon';
import { CloseTagIcon } from 'icons';
import { BottomSheet } from 'elements/BottomSheet';
import { Tag, Tags } from 'elements/Tags';
import Badge from 'elements/Badge';

import { FilterGroup } from '../Group';
import { FilterClearAll } from '../Tooltip';
import { FilterOptions } from '../Options';
import { useFilterContext } from '../../providers';

import cl from './FilterBottomSheet.module.scss';

const FilterBottomSheet = ({
	isOpen,
	onDismiss,
}) => {
	const {
		tags,
		tagsCount,
		list,
		shared,
		onRemoveOption,
	} = useFilterContext();

	const jsxHeader = (
		<div className={cl.headerWrapper}>
			{tagsCount > 0 && (
				<FilterClearAll variant="mobile" />
			)}
			<span className={cl.headerTitle}>
				Filters

				{tagsCount > 0 && (
					<Badge
						variant="filterLabel"
						className={cl.headerTitleBadge}
					>
						{tagsCount}
					</Badge>
				)}
			</span>
			<button type="submit" onClick={onDismiss} className={cl.closeButton}>
				<Icon src={CloseTagIcon} className={cl.closeButtonIcon} />
			</button>
		</div>
	);

	const jsxFooter = (
		<div className={cl.bottomControl}>
			<button
				type="button"
				onClick={onDismiss}
				className={cl.bottomControlButton}
			>
				{`Show ${shared?.itemsCount || 0} product(s)`}
			</button>
		</div>
	);

	return (
		<BottomSheet
			onDismiss={onDismiss}
			isOpen={isOpen}
			header={(
				jsxHeader
			)}
			footer={(
				jsxFooter
			)}
		>
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
		</BottomSheet>
	);
};

FilterBottomSheet.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onDismiss: PropTypes.func.isRequired,
};

FilterBottomSheet.defaultProps = {};

export { FilterBottomSheet };
