import { ChevronArrowRightIcon } from 'icons';
import { classNames } from 'helpers';
import PropTypes from 'prop-types';

import css from './SceneTabs.module.scss';
import { Icon } from '../Icon';

const SceneTab = ({
	title, icon, isActive, onClick, className, description, badge,
}) => (
	<button
		type="submit"
		onClick={onClick}
		className={classNames(css.tab, isActive && css.isActive, className)}
	>
		<div className={css.tabContent}>
			{icon && (
				<div className={css.tabImage}>
					{icon}
				</div>
			)}
			<p className={css.tabTitle}>
				{title}
			</p>
			{description && <p className={css.tabDescription}>{description}</p>}
			<div className={css.tabBadge}>
				{badge}
			</div>
		</div>
		<Icon src={ChevronArrowRightIcon} className={css.tabIcon} />
	</button>
);

SceneTab.propTypes = {
	title: PropTypes.string,
	icon: PropTypes.string,
	onClick: PropTypes.func,
	isActive: PropTypes.bool,
	className: PropTypes.string,
	description: PropTypes.string,
	badge: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
};

SceneTab.defaultProps = {
	title: null,
	icon: null,
	onClick: null,
	isActive: false,
	className: null,
	description: null,
	badge: null,
};

export { SceneTab };
