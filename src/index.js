const { ApolloLink } = require('apollo-link');
const formatMessage = require('./formatMessage');
const logging = require('./logging');

const loggerLink = new ApolloLink((operation, forward) => {
  const startTime = new Date().getTime();

  return forward(operation).map(result => {
    const operationType = operation.query.definitions[0].operation;
    const ellapsed = new Date().getTime() - startTime;

    const group = formatMessage(operationType, operation, ellapsed);

    logging.groupCollapsed(...group);

    logging.log('INIT', operation);
    logging.log('RESULT', result);

    logging.groupEnd(...group);
    return result;
  });
});

module.exports = loggerLink;
