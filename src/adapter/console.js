const Base = require('./base');

module.exports = class ConsoleLogger extends Base {
  formatConfig(config) {
    let { level, layout } = config;
    level = level ? level.toUpperCase() : 'ALL';
    //layout = layout || {type: 'pattern', pattern: '%[[%d] [%z] [%p]%] - %m'};

    const props = {};
    if (!!layout) {
      props.layout = layout;
    }

    return Object.assign({
      appenders: {
        console: { type: 'console', ...props }
      },
      categories: {
        default: { appenders: ['console'], level }
      }
    }, config);
  }
};
