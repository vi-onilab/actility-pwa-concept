import { makeVar, useReactiveVar } from '@apollo/client';
import { NOTIFICATIONS_TYPE } from 'modules/Notifications';

const notificationsModel = makeVar([]);

export const $notifications = {
	addNotify: ({ type, body }) => {
		const response = {
			id: Date.now().toString(32),
			type,
			body,
		};

		notificationsModel([
			response,
			...notificationsModel(),
		]);

		return response;
	},

	addErrorNotify: ({ body }) => $notifications.addNotify({
		type: NOTIFICATIONS_TYPE.ERROR,
		body,
	}),

	addSuccessNotify: ({ body }) => $notifications.addNotify({
		type: NOTIFICATIONS_TYPE.SUCCESS,
		body,
	}),

	removeNotify: (notifyOrId) => {
		const findId = notifyOrId?.id || notifyOrId;

		const isExist = notificationsModel().findIndex(({ id }) => id === findId) > -1;

		if (isExist) {
			notificationsModel(notificationsModel().filter(({ id }) => id !== findId));
		}
	},

	useNotificationsList: () => useReactiveVar(notificationsModel),
};
