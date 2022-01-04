module.exports = (args) => {
	const rules = require('./rules').reduce((result, rule) => {
		if (typeof rule === 'function') {
			const response = rule(args)

			if (Array.isArray(response)) {
				result = [...result, ...response]
			} else {
				result.push(response)
			}
		}

		return result
	}, []).filter(Boolean)

	return {
		rules,
	}
}