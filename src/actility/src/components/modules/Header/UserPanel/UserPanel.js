import Search from '../Search';
import Cart from './Cart';

import styles from './UserPanel.module.scss';

const UserPanel = () => (
	<div className={styles.userPanel}>
		<Search />
		<Cart />
	</div>
);

export default UserPanel;
