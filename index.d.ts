// Type definitions for think-logger in ThinkJs 3.x
// Project: https://thinkjs.org/
// Definitions by: SijieCai <https://github.com/SijieCai>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace ThinkLogger {
  interface Log4jsConfig {
    levels?: string;
    appenders: any;
    categories: any;
  }

  interface Base {
    debug(msg: string): void;
    info(msg: string): void;
    warn(msg: string): void;
    error(msg: string): void;
    configure(config: Log4jsConfig): any;
    setLogger(config: Log4jsConfig, category: string): any;
    formatConfig(config: Log4jsConfig): Log4jsConfig;
    getLogger(category: string): Logger;
  }

  interface Console extends Base {}

  interface File extends Base {}

  interface DateFile extends Base {}

  export interface Logger {
    debug(msg: string): void;
    info(msg: string): void;
    warn(msg: string): void;
    error(msg: string): void;
    getLogger(category: string): Logger;
  }

  export interface LoggerConstructor {
    new (config: any): Logger;
    Basic: Base;
    Console: Console;
    File: File;
    DateFile: DateFile;
  }
}
export = ThinkLogger;
