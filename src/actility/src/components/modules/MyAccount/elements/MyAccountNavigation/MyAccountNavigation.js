import { NavLink } from 'react-router-dom';
import { ACCOUNT_MENU } from 'modules/MyAccount/constants';

const MyAccountNavigation = () => (
	<>
		{
			ACCOUNT_MENU.map(({ title, path }) => (
				<NavLink
					key={path}
					to={path}
				>
					{title}
				</NavLink>
			))
		}
	</>
);

export { MyAccountNavigation };
