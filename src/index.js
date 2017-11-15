const formatMessage = (operationType, operation, ellapsed) => {
  const headerCss = [
    'color: gray; font-weight: lighter', // title
    `color: ${operationType === 'query' ? '#03A9F4' : 'red'};`, // operationType
    'color: #000;', // operationName
    'color: gray; font-weight: lighter;', // time, etc
  ];

  const parts = ['%c apollo'];

  parts.push(`%c${operationType}`);
  parts.push(`%c${operation.operationName}`);
  parts.push(`%c(in ${ellapsed} ms)`);

  return [parts.join(' ', ...headerCss)];
};

const loggerLink = new ApolloLink((operation, forward) => {
  const startTime = new Date().getTime();

  return forward(operation).map(result => {
    const operationType = operation.query.definitions[0].operation;
    const ellapsed = new Date().getTime() - startTime;

    const group = formatMessage(operationType, operation, ellapsed);

    console.groupCollapsed(...group);

    console.log('INIT', operation);
    console.log('RESULT', result);

    console.groupEnd(...group);
    return result;
  });
});

module.exports = loggerLink;
