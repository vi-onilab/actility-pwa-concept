import { useHeaderMenuQuery } from 'hooks';

import { MenuItem, MenuItemSkeleton } from './MenuItem';
import styles from './Menu.module.scss';
import { MenuNodes } from './MenuNodes';

const Menu = () => {
	const { data, loading } = useHeaderMenuQuery();

	if (!data && !loading) {
		return null;
	}

	const nodes = data?.nodes || [];

	return (
		<nav className={styles.mainNav}>
			<ul className={styles.mainNav__list}>
				{loading ? (
					Array.from({ length: 6 }).map((_, index) => (
						<MenuItemSkeleton key={index} />
					))
				) : (
					nodes?.map((node, index) => (
						<MenuItem key={node?.nodeId || index} data={node}>
							<MenuNodes data={node?.nodes} />
						</MenuItem>
					))
				)}
			</ul>
		</nav>
	);
};

export default Menu;
