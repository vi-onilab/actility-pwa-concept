import PropTypes from 'prop-types';
import { MenuNodeLink } from 'elements/MenuNodeLink';
import { Icon } from 'elements/Icon';
import { ChevronArrowRightIcon } from 'icons';
import { Image } from 'elements/Image';

import css from './BurgerMenuNodes.module.scss';

const BurgerMenuNodesSecond = ({ data, onChangeRequest }) => (
	<div className={css.items}>
		<MenuNodeLink node={data} className={css.header}>
			{data?.content?.categoryWidgetSvgIcon && (
				<Image
					src={data?.content?.categoryWidgetSvgIcon}
					className={css.headerIcon}
					alt=""
				/>
			)}
			<div className={css.headerText}>
				{data?.title}
			</div>
			<Icon src={ChevronArrowRightIcon} className={css.headerIcon} />
		</MenuNodeLink>
		{data?.nodes?.map((node, index) => (
			node?.nodes?.length ? (
				// eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
				<div
					key={node?.nodeId || index}
					onClick={() => onChangeRequest(data)}
					className={css.item}
				>
					{node?.title}
				</div>
			) : (
				<MenuNodeLink
					key={node?.nodeId || index}
					node={node}
					className={css.item}
				>
					{node?.title}
					<Icon src={ChevronArrowRightIcon} className={css.itemIcon} />
				</MenuNodeLink>
			)
		))}
	</div>

);

BurgerMenuNodesSecond.defaultProps = {
	data: [],
};

BurgerMenuNodesSecond.propTypes = {
	data: PropTypes.objectOf(PropTypes.object),
	onChangeRequest: PropTypes.func.isRequired,
};

export { BurgerMenuNodesSecond };
