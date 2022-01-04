import { SkeletonText } from 'elements/Skeleton';
import { classNames } from 'helpers';

import styles from '../Menu.module.scss';

const MenuItemSkeleton = () => (
	<div className={classNames(styles.mainNav__item, styles.mainNav__link, styles.mainNav__linkSkeleton)}>
		<SkeletonText containerClassName={styles.mainNav__linkSkeletonItem} />
	</div>
);

MenuItemSkeleton.defaultProps = {};

MenuItemSkeleton.propTypes = {};

export { MenuItemSkeleton };
