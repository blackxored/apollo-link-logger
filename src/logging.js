const logging = (() => {
  let prefix = '';

  const consoleLog = (...args) => {
    console.log(prefix, ...args);
  };

  const consoleError = (...args) => {
    console.error(prefix, ...args);
  };

  const consoleGroup = (...args) => {
    consoleLog(...args);
    prefix += '> ';
  };

  const consoleGroupEnd = () => {
    prefix = prefix.slice(0, -2);
  };

  return {
    log: consoleLog,
    error: consoleError,
    group: console.group || consoleGroup,
    groupCollapsed: console.groupCollapsed || consoleGroup,
    groupEnd: console.groupEnd || consoleGroupEnd,
  };
})();

module.exports = logging;
