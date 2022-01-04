import { $compare, $notifications } from 'models';
import { useMutation } from '@apollo/client';
import { DeleteCompareListMutation } from 'schemas';

export const useCompareClear = () => {
	const [deleteCompareListMutation] = useMutation(DeleteCompareListMutation);

	return async () => {
		$compare.resetList();

		$notifications.addSuccessNotify({
			body: 'The comparison has been cleared',
		});

		if ($compare.isId) {
			try {
				await deleteCompareListMutation({
					variables: {
						uid: $compare.id,
					},
				});
			} catch {
				// TODO: Handle error...
			}
		}
	};
};
