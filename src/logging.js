const bindToConsole = (consoleMethod, polyfill) =>
  consoleMethod ? consoleMethod.bind(console) : polyfill;

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
    group: bindToConsole(console.group, consoleGroup),
    groupCollapsed: bindToConsole(console.groupCollapsed, consoleGroup),
    groupEnd: bindToConsole(console.groupEnd, consoleGroupEnd),
  };
})();

export default logging;
