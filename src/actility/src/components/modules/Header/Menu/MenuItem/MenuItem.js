import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { MenuNodeLink, MenuNodeLinkProvider } from 'elements/MenuNodeLink';

import styles from '../Menu.module.scss';

const MenuItem = (
	{
		data,
		children,
	},
) => {
	const [isOpen, setOpen] = useState(true);
	const { title = null } = data;

	const onLinkClick = useCallback(() => {
		setOpen(false);
	}, []);

	return (
		<MenuNodeLinkProvider value={{ onLinkClick }}>
			<li className={styles.mainNav__item} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
				<MenuNodeLink node={data} className={styles.mainNav__link}>
					{title}
				</MenuNodeLink>
				{isOpen && children}
			</li>
		</MenuNodeLinkProvider>
	);
};

MenuItem.defaultProps = {
	data: null,
	children: null,
};

MenuItem.propTypes = {
	data: PropTypes.oneOfType([PropTypes.object]),
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
};

export { MenuItem };
