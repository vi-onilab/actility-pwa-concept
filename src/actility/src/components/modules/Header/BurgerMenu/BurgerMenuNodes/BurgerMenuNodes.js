import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useHeaderMenuQuery } from 'hooks';
import { classNames } from 'helpers';
import { ChevronArrowRightIcon } from 'icons';
import { Icon } from 'elements/Icon';
import { MenuNodeLink } from 'elements/MenuNodeLink';

import styles from '../../Header.module.scss';
import { BurgerMenuNodesModal } from './BurgerMenuNodesModal';

const BurgerMenuNodes = ({ onRequestClose }) => {
	const history = useHistory();
	const [activeNode, setActiveNode] = useState(null);
	const { data } = useHeaderMenuQuery();

	useEffect(() => {
		const unregister = history.listen(() => {
			setActiveNode(null);
			onRequestClose?.();
		});

		return () => {
			unregister?.();
		};
	}, [history, onRequestClose]);

	return (
		<div className={styles.burgerMenu__block}>
			<nav className={styles.mainNav}>
				<ul className={styles.mainNav__list}>
					{data?.nodes?.map((node, index) => (
						<li key={node?.nodeId || index} className={styles.mainNav__item}>
							{node?.nodes?.length ? (
								// eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
								<div
									onClick={() => setActiveNode(node)}
									className={classNames(styles.mainNav__link, styles.arrow)}
								>
									{node?.title}
									<Icon src={ChevronArrowRightIcon} className={styles.mainNav__linkArrow} />
								</div>
							) : (
								<MenuNodeLink
									node={node}
									className={styles.mainNav__link}
								>
									{node?.title}
								</MenuNodeLink>
							)}
						</li>
					))}
				</ul>
			</nav>
			{activeNode && (
				<BurgerMenuNodesModal
					isOpen={!!activeNode?.nodeId}
					data={activeNode}
					onRequestClose={() => setActiveNode(null)}
				/>
			)}
		</div>
	);
};

BurgerMenuNodes.defaultProps = {
	onRequestClose: null,
};

BurgerMenuNodes.propTypes = {
	onRequestClose: PropTypes.func,
};

export { BurgerMenuNodes };
