import { Icon } from 'elements/Icon';
import Badge from 'elements/Badge';

import styles from '../UserPanel.module.scss';

const Favorite = () => (
	<div className={`${styles.userPanel__wrap} ${styles.favoriteBtn}`}>
		<Icon name="favorite" />
		<Badge color="4DBF7B">0</Badge>
	</div>
);

export default Favorite;
