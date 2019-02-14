/* eslint-disable import/no-unresolved,import/extensions */
import { ApolloLink } from 'apollo-link';
import formatMessage from './formatMessage';
import logging from './logging';

const loggerLink = new ApolloLink((operation, forward) => {
  const startTime = new Date().getTime();

  return forward(operation).map(result => {
    // Here we try to find an operation definition to find its operationType
    // (as opposed to fragment definitions with no operationType)
    // There is usually only one query or mutation
    let operationType;
    operation.query.definitions.forEach(definition => {
      operationType = definition.operation || operationType;
    });
    const elapsed = new Date().getTime() - startTime;

    const group = formatMessage(operationType, operation, elapsed);

    logging.groupCollapsed(...group);

    logging.log('INIT', operation);
    logging.log('RESULT', result);

    logging.groupEnd(...group);
    return result;
  });
});

export default loggerLink;
