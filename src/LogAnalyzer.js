import { Logger } from "./Logger";

export class LogAnalyzer {
  minNameLength = 10

  constructor(logger = new Logger()) {
    this.logger = logger
  }

  analyze(fileName) {
    let name = fileName.split('.')[0];
    const fileNameLength = name ? name.length : 0;
    if (fileNameLength < this.minNameLength) {
      this.logger.logError('too short')
      // return true
    } else {
      // return false
    }
  }
}
