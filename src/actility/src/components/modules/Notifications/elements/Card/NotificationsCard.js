import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { NOTIFICATIONS_TYPE } from 'modules/Notifications';
import { $notifications } from 'models';
import { Icon } from 'elements/Icon';
import { AttentionIcon, CheckIcon, CloseMenuIcon } from 'icons';
import { Flex } from 'elements/Flex';
import parser from 'html-react-parser';

import css from './NotificationsCard.module.scss';

const OPTIONS_BY_TYPE = {
	[NOTIFICATIONS_TYPE.SUCCESS]: {
		icon: CheckIcon,
		className: css.variantSuccess,
	},
	[NOTIFICATIONS_TYPE.ERROR]: {
		icon: AttentionIcon,
		className: css.variantError,
	},
};

const NotificationsCard = (
	{
		className,
		data,
		onClick,
	},
) => {
	const { id } = data || {};
	const timerRef = useRef(null);
	const option = OPTIONS_BY_TYPE?.[data?.type];

	useEffect(() => {
		timerRef.current = setTimeout(() => {
			$notifications.removeNotify(id);
		}, 4000);

		return () => {
			clearTimeout(timerRef.current);
			$notifications.removeNotify(id);
		};
	}, [timerRef, id]);

	if (!option || data?.body?.length < 1) {
		return null;
	}

	return (
		<button
			type="button"
			onClick={() => onClick?.(data)}
			className={classNames(
				css.wrapper,
				className,
				option?.className,
			)}
		>
			{option?.icon && (
				<Flex
					alignItems="center"
					justifyContent="center"
					className={css.iconWrapper}
				>
					<Icon
						src={option.icon}
						className={css.icon}
					/>
				</Flex>
			)}
			<div
				className={css.body}
			>
				{parser(data?.body, {
					trim: true,
				})}
			</div>
			<div className={css.close}>
				<Icon
					src={CloseMenuIcon}
					className={css.closeIcon}
				/>
			</div>
		</button>
	);
};

NotificationsCard.propTypes = {
	className: PropTypes.string,
	data: PropTypes.shape({
		type: PropTypes.string,
		body: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	}),
	onClick: PropTypes.func,
};

NotificationsCard.defaultProps = {
	className: null,
	data: null,
	onClick: null,
};

export { NotificationsCard };
