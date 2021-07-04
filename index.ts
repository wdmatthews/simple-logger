import { SLOptions } from '.'
import { PathLike } from 'fs'
import { appendFile, mkdir } from 'fs/promises'
import { join } from 'path'

/**
 * Configures SL and returns four logging methods: log, info, warn, and error.
 * @param options The options used to configure SL.
 */
export default function sl(options? : SLOptions) {
  const config : SLOptions = {
    isProduction: false,
    logDirectory: './',
    filePath: 'error.log',
    filePaths: null,
    ...options,
  }
  
  /**
   * Logs text content to a log file, creating the file if it does not exist.
   * @param log The path for the log file.
   * @param entry The entry to log.
   */
  async function addEntry(log: PathLike, entry: string) {
    try {
      const path = join(__dirname, `${config.logDirectory}`, `${log}`)
      await mkdir(config.logDirectory, { recursive: true })
      await appendFile(path, entry)
    } catch (error) {
      console.log(`Error adding entry to '${log}': ${error}`)
    }
  }
  
  return {
    /**
     * Logs data to the console in development, or a file in production.
     * @param data The data to log.
     */
    async log(...data: any[]) {
      if (config.isProduction) {
        await addEntry(config.filePaths ? (config.filePaths.log ?? 'info.log') : config.filePath, data.join(' '))
      } else {
        console.log(...data)
      }
    },
    /**
     * Logs data as info to the console in development, or a file in production.
     * @param data The data to log.
     */
    async info(...data: any[]) {
      if (config.isProduction) {
        await addEntry(config.filePaths ? (config.filePaths.info ?? 'info.log') : config.filePath, data.join(' '))
      } else {
        console.info(...data)
      }
    },
    /**
     * Logs data as a warning to the console in development, or a file in production.
     * @param data The data to log.
     */
    async warn(...data: any[]) {
      if (config.isProduction) {
        await addEntry(config.filePaths ? (config.filePaths.warn ?? 'error.log') : config.filePath, data.join(' '))
      } else {
        console.warn(...data)
      }
    },
    /**
     * Logs data as an error to the console in development, or a file in production.
     * @param data The data to log.
     */
    async error(...data: any[]) {
      if (config.isProduction) {
        await addEntry(config.filePaths ? (config.filePaths.error ?? 'error.log') : config.filePath, data.join(' '))
      } else {
        console.error(...data)
      }
    },
  }
}
