import formatMessage from '../formatMessage';

describe('formatMessage', () => {
  it('returns a list of strings suitable for console logging', () => {
    expect(
      formatMessage('query', { operationName: 'FormatMessageQuery' }, 1000),
    ).toMatchSnapshot();

    expect(
      formatMessage(
        'mutation',
        { operationName: 'FormatMessageMutation' },
        500,
      ),
    ).toMatchSnapshot();
  });
});
