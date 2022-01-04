import { useState } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import { MenuNodesThirdRow } from './MenuNodesThirdRow';
import styles from '../Menu.module.scss';
import { MenuNodesThirdList } from './MenuNodesThirdList';

const MenuNodesThird = (
	{
		data,
	},
) => {
	const [activeNode, setActiveNode] = useState(null);

	const onChangeNodeHandlerCreator = (index) => (node) => {
		const isActive = activeNode?.node?.nodeId === node?.nodeId;

		setActiveNode(isActive ? null : { index, node });
	};

	return (
		<div className={classNames(styles.subMenu, styles.subMenuSolutions)}>
			<div className={styles.subMenu__wrapper}>
				{data?.map((node, index) => (
					<MenuNodesThirdRow
						onChangeNode={onChangeNodeHandlerCreator(index)}
						key={node?.nodeId || index}
						data={node?.nodes}
						activeNodeId={activeNode?.node?.nodeId}
					>
						<MenuNodesThirdList
							isActive={activeNode?.index === index}
							data={activeNode?.node}
						/>
					</MenuNodesThirdRow>
				))}
			</div>
		</div>
	);
};

MenuNodesThird.defaultProps = {
	data: null,
};

MenuNodesThird.propTypes = {
	data: PropTypes.oneOfType([PropTypes.array]),
};

export { MenuNodesThird };
