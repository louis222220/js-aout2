import { LogAnalyzer } from "../src/LogAnalyzer";
import { Logger } from "../src/Logger";

// 取代整個 Logger Class，包含建構子、所有函式
jest.mock('../src/Logger');

describe('test LogAnalyzer with mocking Logger (jest.mock)', () => {
  
  beforeEach(() => {
    Logger.mockClear();
  });

  it('logError with too-short filename', () => {
    const logAnalyzer = new LogAnalyzer();
    logAnalyzer.minNameLength = 10;
    logAnalyzer.analyze('abc.txt');

    const mockLogger = Logger.mock.instances[0];
    expect(Logger).toHaveBeenCalledTimes(1);
    expect(mockLogger.logError).toHaveBeenCalledTimes(1);
  });
});