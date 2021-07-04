import { PathLike } from 'fs'

/**
 * Specifies file paths for each logging method.
 */
export interface SLFilePathOptions {
  /**
   * The file path for sl.log()
   * Default: 'info.log'
   */
  log?: PathLike,
  /**
   * The file path for sl.info()
   * Default: 'info.log'
   */
  info?: PathLike,
  /**
   * The file path for sl.warn()
   * Default: 'error.log'
   */
  warn?: PathLike,
  /**
   * The file path for sl.error()
   * Default: 'error.log'
   */
  error?: PathLike,
}

/**
 * The configuration for SL.
 */
export interface SLOptions {
  /**
   * If SL is in production, it will write to a file.
   * If SL is in development, it will write to the console.
   * Default: false
   */
  isProduction?: boolean,
  /**
   * The directory to store log files in when in production.
   * Default: './'
   */
  logDirectory?: PathLike,
  /**
   * The file path to use when in production.
   * If `filePaths` is set, `filePath` will be ignored.
   * Default: 'error.log'
   */
  filePath?: PathLike,
  /**
   * The file paths to use when in production, per log method.
   * Default: null
   */
  filePaths?: SLFilePathOptions,
}
