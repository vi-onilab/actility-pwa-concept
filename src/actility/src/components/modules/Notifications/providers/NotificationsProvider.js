import PropTypes from 'prop-types';
import { NotificationsFloatLayout, NotificationsList } from 'modules/Notifications';
import { $notifications } from 'models';

const NotificationsProvider = ({ children }) => {
	const data = $notifications.useNotificationsList();

	return (
		<>
			{children}

			<NotificationsFloatLayout>
				<NotificationsList data={data} />
			</NotificationsFloatLayout>
		</>
	);
};

NotificationsProvider.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
};
NotificationsProvider.defaultProps = {
	children: null,
};

export { NotificationsProvider };
