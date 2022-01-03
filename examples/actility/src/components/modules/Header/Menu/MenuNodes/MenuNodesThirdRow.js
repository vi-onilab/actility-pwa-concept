import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { Image } from 'elements/Image';

import styles from '../Menu.module.scss';

const MenuNodesThirdRow = (
	{
		data,
		children,
		onChangeNode,
		activeNodeId,
	},
) => (
	<>
		<div className={styles.subMenu__row}>
			{data?.map((node, index) => (
				<button
					type="submit"
					key={node?.nodeId || index}
					className={classNames(styles.subMenu__item, activeNodeId === node?.nodeId && styles.activeMenuItem)}
					onClick={() => onChangeNode?.(node)}
				>
					{node?.content?.categoryWidgetSvgIcon && (
						<Image
							src={node.content.categoryWidgetSvgIcon}
							alt={node?.title}
							className={styles.subMenu__item_icon}
						/>
					)}
					<div className={styles.subMenu__itemTitle}>{node?.title}</div>
				</button>
			))}
		</div>
		{children}
	</>
);

MenuNodesThirdRow.defaultProps = {
	data: null,
	children: null,
	onChangeNode: null,
	activeNodeId: null,
};

MenuNodesThirdRow.propTypes = {
	data: PropTypes.oneOfType([PropTypes.array]),
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	onChangeNode: PropTypes.func,
	activeNodeId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export { MenuNodesThirdRow };
