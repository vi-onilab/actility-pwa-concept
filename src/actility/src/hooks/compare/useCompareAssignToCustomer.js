import { $compare } from 'models';
import { useMutation } from '@apollo/client';
import { AssignCompareListToCustomerMutation } from 'schemas';

export const useCompareAssignToCustomer = () => {
	const [assignCompareListToCustomerMutation] = useMutation(AssignCompareListToCustomerMutation, { ignoreResults: true });

	return async () => {
		if ($compare.isId) {
			try {
				const { data: { assignCompareListToCustomer } = {} } = await assignCompareListToCustomerMutation({
					variables: {
						uid: $compare.id,
					},
				});

				if (assignCompareListToCustomer?.compareList?.uid) {
					$compare.id = assignCompareListToCustomer.compareList.uid;
				}
			} catch {
				// TODO: Handle error...
			}
		}
	};
};
