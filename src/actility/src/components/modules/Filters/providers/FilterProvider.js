import {
	createContext,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react';
import PropTypes from 'prop-types';

import { filterObjectToSearchString, getFiltersActive } from '../helpers';

const FilterContext = createContext({
	values: {},
	controls: {},
	shared: {},
	onChange: () => null,
	onChangeShared: () => null,
	onRemoveOption: () => null,
	onToggleOption: () => null,
	isOptionChecked: () => null,
	tags: [],
	tagsCount: 0,
	list: [],
	toQuery: () => {},
});

const useFilterContext = () => useContext(FilterContext);

const FilterProvider = (
	{
		children,
		controls,
		filters,
		onChange,
		initial,
	},
) => {
	const batchUpdateRef = useRef(null);
	const [shared, setShared] = useState({});
	const [currentValue, setCurrentValue] = useState(initial);
	const [tags, setTags] = useState([]);
	const [isBatchUpdate, setBatchUpdate] = useState(false);

	const onChangeValue = (callback) => {
		const newValue = callback(currentValue);
		setCurrentValue(newValue);
		setTags(getFiltersActive(newValue?.filters, filters));

		if (!isBatchUpdate) {
			setBatchUpdate(true);
		}
	};

	const contextValue = {
		values: currentValue,
		controls,
		shared,
		onChange: onChangeValue,
		onChangeShared: setShared,
		toQuery: () => ({
			...Object
				.keys(currentValue?.filters || {})
				.reduce(
					(summary, currentKey) => {
						let response = summary;
						const currentFilter = filters?.find(({ type }) => type === currentKey);

						if (currentFilter?.toQuery) {
							response = {
								...response,
								...currentFilter?.toQuery?.({
									data: currentValue?.filters[currentKey],
								}),
							};
						} else if (currentValue?.filters[currentKey]?.length > 0) {
							response[currentKey] = {
								in: currentValue?.filters[currentKey],
							};
						}

						return response;
					},
					{},
				),
			search: currentValue?.q,
		}),
		onRemoveOption: (name, value) => (
			onChangeValue((prev) => {
				const currentFilter = filters?.find(({ type }) => type === name);

				if (currentFilter?.onRemove) {
					return {
						...prev,
						filters: currentFilter.onRemove(prev?.filters || {}, value),
					};
				}

				const newFilters = { ...(prev?.filters || {}) };

				// If the "value" is "undefined", then delete the filter completely
				if (value === undefined) {
					delete newFilters[name];
				} else {
					newFilters[name] = newFilters?.[name]?.filter?.((item) => item !== value);
				}

				return {
					...(prev || {}),
					filters: newFilters,
				};
			})
		),
		onToggleOption: (name, value = null) => {
			if (name?.length > 0) {
				onChangeValue((prev) => {
					const prevValue = prev?.filters?.[name] || [];
					const isExist = prevValue?.includes?.(value);
					const newValue = (
						isExist ? (
							prevValue.filter((option) => option !== value)
						) : (
							[
								...prevValue,
								value,
							]
						)
					);

					return {
						...(prev || {}),
						filters: {
							...(prev?.filters || {}),
							[name]: newValue,
						},
					};
				});
			}
		},
		isOptionChecked: (name, value) => currentValue?.filters?.[name]?.includes(value),
		tags,
		tagsCount: tags.length,
		list: filters,
	};

	useEffect(() => {
		setCurrentValue(initial);
	}, [initial, setCurrentValue]);

	useEffect(() => {
		if (Object.keys(currentValue?.filters || {})?.length > 0 && tags?.length === 0) {
			setTags(getFiltersActive(currentValue?.filters, filters));
		}
	}, [currentValue, filters, tags?.length]);

	useEffect(() => {
		if (isBatchUpdate) {
			if (batchUpdateRef.current) {
				clearTimeout(batchUpdateRef.current);
			}

			batchUpdateRef.current = setTimeout(() => {
				onChange?.({
					value: currentValue,
					search: filterObjectToSearchString(currentValue),
				});
				setBatchUpdate(false);
			}, 600);
		}
	}, [batchUpdateRef, currentValue, isBatchUpdate, onChange]);

	return (
		<FilterContext.Provider value={contextValue}>
			{children}
		</FilterContext.Provider>
	);
};

FilterProvider.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]).isRequired,
	filters: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
	controls: PropTypes.shape({
		sort: PropTypes.shape({
			default: PropTypes.string,
			options: PropTypes.arrayOf(PropTypes.shape({
				label: PropTypes.string,
				value: PropTypes.string,
			})),
		}),
	}),
	onChange: PropTypes.func,
	initial: PropTypes.oneOfType([PropTypes.object]),
};

FilterProvider.defaultProps = {
	filters: null,
	controls: null,
	onChange: null,
	initial: null,
};

export { FilterProvider, useFilterContext };
