import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useRouter } from './useRouter';

const useRouterGoBack = () => {
	const { getHomeUrl } = useRouter();
	const { goBack, replace, length } = useHistory();

	return useCallback(() => {
		if (length > 2) {
			goBack();
		} else {
			replace(getHomeUrl());
		}
	}, [getHomeUrl, goBack, length, replace]);
};

export { useRouterGoBack };
