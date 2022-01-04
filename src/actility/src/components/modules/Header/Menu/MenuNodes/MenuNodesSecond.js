import PropTypes from 'prop-types';

import styles from '../Menu.module.scss';
import { MenuNodeLink } from '../../../../elements/MenuNodeLink';

const MenuNodesSecond = (
	{
		data,
	},
) => (
	<div className={styles.subMenu}>
		<div className={styles.subMenu__wrapper}>
			<div className={styles.subMenu__row}>
				<ul className={styles.submenuList}>
					{data?.map((node, index) => (
						<li
							key={node?.nodeId || index}
							className={styles.submenuList__item}
						>
							<MenuNodeLink node={node}>{node?.title}</MenuNodeLink>
						</li>
					))}
				</ul>
			</div>
		</div>
	</div>
);

MenuNodesSecond.defaultProps = {
	data: null,
};

MenuNodesSecond.propTypes = {
	data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export { MenuNodesSecond };
