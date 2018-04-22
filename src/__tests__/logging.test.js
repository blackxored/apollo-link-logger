import logging from '../logging';

const logSpy = jest.spyOn(global.console, 'log');

describe('logging', () => {
  describe('console.groupCollapsed', () => {
    it('should not use custom `groupCollapsed` if `console.groupCollapsed` exists', () => {
      logging.groupCollapsed();
      expect(logSpy).not.toHaveBeenCalled();
    });
  });
});
