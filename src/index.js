import { ApolloLink } from 'apollo-link';
import formatMessage from './formatMessage';
import logging from './logging';

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

export default loggerLink;
