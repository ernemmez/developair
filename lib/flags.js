module.exports = {
    clear: {
      type: `boolean`,
      default: false,
      alias: `c`,
      desc: `Clear the console`
    },
    noClear: {
      type: `boolean`,
      default: false,
      desc: `Don't clear the console`
    },
    debug: {
      type: `boolean`,
      default: false,
      alias: `d`,
      desc: `Print debug info`
    },
    version: {
      type: `boolean`,
      alias: `v`,
      desc: `Print CLI version`
    },
    init: {
      type: `boolean`,
      default: false,
      alias: `i`,
      desc: `Create and initialize developair.config.ts`
    }
};