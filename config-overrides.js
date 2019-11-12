const { addLessLoader } = require("customize-cra");
const { override } = require("customize-cra");
module.exports = override(addLessLoader({
	strictMath: true,
	noIeCompat: true,
}));