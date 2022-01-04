import { makeVar, useReactiveVar } from '@apollo/client';

const STORE_UID_KEY = '_compare_uid';

const initialCompareListModel = {
	itemCount: 0,
	attributes: [],
	items: [],
};
const compareListModel = makeVar(initialCompareListModel);
const compareIdModel = makeVar(localStorage.getItem(STORE_UID_KEY));
const compareModalShow$ = makeVar(false);

export const $compare = {
	get id() {
		return localStorage.getItem(STORE_UID_KEY) ?? (compareIdModel() || null);
	},
	set id(value) {
		if (value) {
			compareIdModel(value);
			localStorage.setItem(STORE_UID_KEY, value);
		} else {
			compareIdModel(null);
			localStorage.removeItem(STORE_UID_KEY);
		}
	},
	get isId() {
		return !!this.id;
	},
	useId: () => [
		useReactiveVar(compareIdModel),
		(value) => {
			$compare.id = value;
		},
	],

	useList: () => useReactiveVar(compareListModel),
	getList: () => compareListModel(),
	isInCompare: (id) => (
		compareListModel()?.items?.findIndex(({ product }) => String(product.id) === String(id)) >= 0
	),
	setList: (value) => {
		if (value?.itemCount) {
			if (value?.uid) {
				$compare.id = value.uid || null;
			}

			compareListModel(value);
		} else {
			$compare.resetList();
		}
	},
	resetList: () => {
		compareListModel(initialCompareListModel);
		$compare.id = null;
	},

	reset() {
		this.id = null;
		compareListModel(initialCompareListModel);
	},

	useIsModalShow: () => [useReactiveVar(compareModalShow$), (value) => compareModalShow$(value)],
	useSetIsModalShow: () => (value) => compareModalShow$(value),
};
