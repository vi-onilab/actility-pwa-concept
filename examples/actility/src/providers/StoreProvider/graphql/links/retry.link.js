import { RetryLink } from '@apollo/client/link/retry';

const retryLink = (
	new RetryLink({
		delay: {
			initial: 300,
			max: Infinity,
			jitter: true,
		},
		attempts: {
			max: 10,
			retryIf: (error) => !!error,
		},
	})
);

export { retryLink };
