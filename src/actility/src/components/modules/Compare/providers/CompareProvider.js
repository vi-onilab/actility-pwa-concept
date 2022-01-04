import {
	createContext, useContext, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import { $compare } from 'models';
import { useCompareData } from 'hooks';

import { CompareFloatNav, CompareItemsBottomSheet } from '../elements';

const CompareContext = createContext({
	isLoading: true,
	useListModel: () => null,
});
const useCompareContext = () => useContext(CompareContext);

const CompareProvider = (
	{
		children,
	},
) => {
	const { loading } = useCompareData();

	const value = useMemo(() => ({
		isLoading: loading,
		useListModel: $compare.useList,
	}), [loading]);

	return (
		<CompareContext.Provider value={value}>
			{children}
			<CompareFloatNav />
			<CompareItemsBottomSheet />
		</CompareContext.Provider>
	);
};

CompareProvider.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
};

CompareProvider.defaultProps = {
	children: null,
};

export { CompareProvider, useCompareContext };
