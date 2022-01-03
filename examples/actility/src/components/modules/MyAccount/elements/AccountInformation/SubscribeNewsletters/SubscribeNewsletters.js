import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/client';
import { SubscribeEmailToNewsletterMutation, UnSubscribeEmailToNewsletterMutation } from 'schemas';
import { $notifications } from 'models';

const SubscribeNewsletters = (
	{
		isSubscribed,
		customerEmail,
	},
) => {
	const [subscribed, setSubscribed] = useState(false);
	const [subscribeEmailToNewsletterMutationHandler] = useMutation(SubscribeEmailToNewsletterMutation);
	const [unSubscribeEmailToNewsletterMutationHandler] = useMutation(UnSubscribeEmailToNewsletterMutation);

	useEffect(() => {
		setSubscribed(isSubscribed);
	}, [isSubscribed]);

	const subscribeToNewslettersHandler = async () => {
		try {
			if (!subscribed) {
				await subscribeEmailToNewsletterMutationHandler({
					variables: {
						email: customerEmail,
					},
				});

				$notifications.addSuccessNotify({
					body: 'You have been successfully subscribed to our newsletter!',
				});

				setSubscribed(true);

				return true;
			}

			await unSubscribeEmailToNewsletterMutationHandler({
				variables: {
					is_subscribed: false,
				},
			});

			$notifications.addSuccessNotify({
				body: 'You have been successfully unsubscribed to our newsletter!',
			});

			setSubscribed(false);

			return true;
		} catch (e) {
			$notifications.addErrorNotify({
				body: 'Error',
			});

			return false;
		}
	};

	return (
		<div>
			<span>Subscribe to our newsletters</span>
			<button
				type="button"
				onClick={subscribeToNewslettersHandler}
			>
				{
					!subscribed ? 'subscribe' : 'unsubscribe'
				}
			</button>
		</div>
	);
};

export { SubscribeNewsletters };

SubscribeNewsletters.propTypes = {
	isSubscribed: PropTypes.bool,
	customerEmail: PropTypes.string,
};

SubscribeNewsletters.defaultProps = {
	isSubscribed: false,
	customerEmail: '',
};
