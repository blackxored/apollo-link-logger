const { ApolloLink } = require('apollo-link');
const formatMessage = require('./formatMessage');

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
