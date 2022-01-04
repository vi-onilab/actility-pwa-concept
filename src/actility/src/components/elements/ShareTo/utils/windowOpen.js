const windowOpen = (url, { height = 520, width = 720, ...configRest } = {}, onClose = null) => {
	const config = {
		height,
		width,
		location: 'no',
		toolbar: 'no',
		status: 'no',
		directories: 'no',
		menubar: 'no',
		scrollbars: 'yes',
		resizable: 'no',
		centerscreen: 'yes',
		chrome: 'yes',
		left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - width / 2,
		top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - height / 2,
		...configRest,
	};

	const shareDialog = window.open(
		url,
		'',
		Object.entries(config)
			.map(([key, value]) => `${key}=${value}`)
			.join(', '),
	);

	if (onClose) {
		const interval = window.setInterval(() => {
			try {
				if (shareDialog === null || shareDialog.closed) {
					window.clearInterval(interval);
					onClose(shareDialog);
				}
			} catch {
				// TODO: handle error..
			}
		}, 1000);
	}

	return shareDialog;
};

export { windowOpen };
