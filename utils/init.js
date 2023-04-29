const welcome = require('cli-welcome');
const pkg = require('./../package.json');
const unhandled = require('cli-handle-unhandled');


module.exports = ({ clear = true }) => {
	unhandled();
	welcome({
		title: `developair`, 
		tagLine: `by Eren Emmez`,
		description: pkg.description,
		version: pkg.version,
		bgColor: '#160F30',
		color: '#fff',
		bold: true,
		clear
	});
};
