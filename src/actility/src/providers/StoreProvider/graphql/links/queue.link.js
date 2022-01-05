import QueueLink from 'apollo-link-queue';

const queueLink = new QueueLink();

if (typeof window !== 'undefined') {
	window.addEventListener('offline', () => queueLink.close());
	window.addEventListener('online', () => queueLink.open());
}

export { queueLink };
