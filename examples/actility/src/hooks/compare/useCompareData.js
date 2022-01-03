import { useQuery } from '@apollo/client';
import { $auth, $compare } from 'models';
import { CompareListQuery, CustomerCompareQuery } from 'schemas';

export const useCompareData = () => {
	const [uid] = $compare.useId();
	const isToken = $auth.useIsToken();
	const isCustomerCompare = !uid && isToken;

	const {
		data: {
			customer: {
				compareList: customerCompareList = null,
			} = {},
		} = {},
		loading: customerLoading,
	} = useQuery(CustomerCompareQuery, {
		skip: !isCustomerCompare,
		onCompleted: (response) => $compare.setList(response?.customer?.compareList),
	});

	const {
		data: {
			compareList = null,
		} = {},
		loading,
	} = useQuery(CompareListQuery, {
		variables: {
			uid,
		},
		skip: isCustomerCompare || !uid,
		onCompleted: (response) => $compare.setList(response?.compareList),
	});

	return {
		data: (isCustomerCompare ? (customerCompareList ?? compareList) : compareList),
		loading: (isCustomerCompare ? customerLoading : loading),
	};
};
