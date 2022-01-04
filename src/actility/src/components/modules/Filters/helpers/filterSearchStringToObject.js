export const filterSearchStringToObject = (value) => (
	(value || '')
		.replace(/(\?)/, '')
		.split('&')
		.reduce((response, part) => {
			const output = response;
			const [key, values] = part?.split('=');

			if (key?.length > 0) {
				if (values?.includes(':')) {
					output[key] = values?.split(';').reduce((list, current) => {
						const outputList = list;
						const [currentKey, currentValue] = current?.split(':');

						outputList[currentKey] = (
							currentValue
								?.split(',')
								.map((data) => decodeURIComponent(data))
						);

						return outputList;
					}, {});
				} else if (values?.includes(',')) {
					output[key] = (
						values
							.split(',')
							.map((data) => decodeURIComponent(data))
					);
				} else {
					output[key] = decodeURIComponent(values);
				}
			}

			return output;
		}, {})
);
