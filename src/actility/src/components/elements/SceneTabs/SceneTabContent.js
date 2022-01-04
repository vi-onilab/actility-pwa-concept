import PropTypes from 'prop-types';

import css from './SceneTabs.module.scss';

const SceneTabContent = ({ children }) => (
	<div className={css.contentWrapper}>
		<div className={css.content}>
			{children}
		</div>
	</div>
);

SceneTabContent.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
};

SceneTabContent.defaultProps = {
	children: null,
};

export { SceneTabContent };
