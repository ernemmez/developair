#!/usr/bin/env node

/**
 * developair
 * A developer assistant
 *
 * @author Eren Emmez <https://www.linkedin.com/in/erenemmez/>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const main = require('./src/main');

const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	main();

	debug && log(flags);
})();
