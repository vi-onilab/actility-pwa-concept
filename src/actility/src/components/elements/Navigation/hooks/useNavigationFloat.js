import { createRef, useRef, useState } from 'react';

export const useNavigationFloat = () => {
	const list = useRef([]);
	const timeoutRef = useRef();
	const [length, setLength] = useState();

	return {
		registerNavigation: (name, args = {}) => (ref) => {
			const { key = null } = args;
			const current = list.current.find(({ label }) => label === name);

			if (current) {
				if (current.ref.current !== ref) {
					current.ref.current = ref;
				}
			} else {
				const newRef = createRef();
				newRef.current = ref;

				list.current.push({
					key: (key ?? ref?.id) || null,
					label: name,
					ref: newRef,
					position: args?.position || 0,
				});

				list.current = (
					list.current
						.sort((a, b) => (a.position > b.position ? 1 : -1))
				);
			}

			if (length !== list.current.length) {
				clearTimeout(timeoutRef.current);
				timeoutRef.current = setTimeout(() => {
					setLength(list.current.length);
				}, 200);
			}
		},
		list: list.current?.filter((item) => !!item?.ref?.current),
	};
};
