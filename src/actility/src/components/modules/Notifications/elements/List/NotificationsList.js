import PropTypes from 'prop-types';
import {
	CSSTransition,
	TransitionGroup,
} from 'react-transition-group';
import { NotificationsCard } from 'modules/Notifications';
import { $notifications } from 'models';
import { classNames } from 'helpers';

import css from './NotificationsList.module.scss';

const NotificationsList = (
	{
		data,
		className,
	},
) => (
	<TransitionGroup
		className={classNames(css.wrapper, className)}
	>
		{
			data
				.slice(0, 5)
				.map((notify, index) => (
					<CSSTransition
						className={css.item}
						key={notify?.id || index}
						timeout={400}
					>
						<NotificationsCard
							data={notify}
							onClick={({ id }) => $notifications.removeNotify(id)}
						/>
					</CSSTransition>
				))
		}
	</TransitionGroup>
);

NotificationsList.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object),
	className: PropTypes.string,
};

NotificationsList.defaultProps = {
	data: null,
	className: null,
};

export { NotificationsList };
