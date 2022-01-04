const path = require('path');

module.exports = ({ root }) => ({
	index: path.join(root, 'src', 'index.js'),
})