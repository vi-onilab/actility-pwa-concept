export const filterObjectToSearchString = (values) => (
	Object.keys(values)
		.map((key) => {
			const value = values[key];

			if (value?.length === 0) {
				return null;
			}

			if (typeof value === 'object') {
				if (Array.isArray(value)) {
					return (
						`${key}=${value?.map((val) => encodeURIComponent(val))?.join(',')}`
					);
				}

				const response = (
					Object.keys(value)
						.map((valueKey) => {
							if (typeof value[valueKey] === 'object') {
								return (
									value?.[valueKey]?.length > 0 ? (
										`${valueKey}:${value?.[valueKey]?.map((val) => encodeURIComponent(val))?.join(',')}`
									) : null
								);
							}

							if (!valueKey || !value || !value?.[valueKey]) {
								return null;
							}

							return `${valueKey}:${encodeURIComponent(value[valueKey])}`;
						})
						.filter(Boolean)
						.join(';')
				);

				return (
					response?.length > 0 ? (
						`${key}=${response}`
					) : null
				);
			}

			if (!value?.toString?.()?.length) {
				return null;
			}

			return (
				`${key}=${encodeURIComponent(value?.toString?.() || '')}`
			);
		})
		.filter(Boolean)
		.join('&')
);
