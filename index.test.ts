import sl from './index'
import { readFile, rm } from 'fs/promises'
import { join } from 'path'

test('Logs "Test" to logs/info.log using log() configured with filePath', async () => {
  const { log } = sl({
    isProduction: true,
    logDirectory: './logs',
    filePath: 'info.log',
  })
  
  await rm(join(__dirname, 'logs'), { recursive: true, force: true })
  await log('Test')
  const logFile = await readFile(join(__dirname, 'logs', 'info.log'))
  await rm(join(__dirname, 'logs'), { recursive: true, force: true })
  
  expect(`${logFile}`).toBe('Test')
})

test('Logs "Test" to logs/info.log using log() configured with filePaths', async () => {
  const { log } = sl({
    isProduction: true,
    logDirectory: './logs',
    filePaths: {
      log: 'info.log',
    },
  })
  
  await rm(join(__dirname, 'logs'), { recursive: true, force: true })
  await log('Test')
  const logFile = await readFile(join(__dirname, 'logs', 'info.log'))
  await rm(join(__dirname, 'logs'), { recursive: true, force: true })
  
  expect(`${logFile}`).toBe('Test')
})

test('Logs "Test" to logs/info.log using info() configured with filePath', async () => {
  const { info } = sl({
    isProduction: true,
    logDirectory: './logs',
    filePath: 'info.log',
  })
  
  await rm(join(__dirname, 'logs'), { recursive: true, force: true })
  await info('Test')
  const logFile = await readFile(join(__dirname, 'logs', 'info.log'))
  await rm(join(__dirname, 'logs'), { recursive: true, force: true })
  
  expect(`${logFile}`).toBe('Test')
})

test('Logs "Test" to logs/info.log using info() configured with filePaths', async () => {
  const { info } = sl({
    isProduction: true,
    logDirectory: './logs',
    filePaths: {
      info: 'info.log',
    },
  })
  
  await rm(join(__dirname, 'logs'), { recursive: true, force: true })
  await info('Test')
  const logFile = await readFile(join(__dirname, 'logs', 'info.log'))
  await rm(join(__dirname, 'logs'), { recursive: true, force: true })
  
  expect(`${logFile}`).toBe('Test')
})

test('Logs "Test" to logs/warnings.log using warn() configured with filePath', async () => {
  const { warn } = sl({
    isProduction: true,
    logDirectory: './logs',
    filePath: 'warnings.log',
  })
  
  await rm(join(__dirname, 'logs'), { recursive: true, force: true })
  await warn('Test')
  const logFile = await readFile(join(__dirname, 'logs', 'warnings.log'))
  await rm(join(__dirname, 'logs'), { recursive: true, force: true })
  
  expect(`${logFile}`).toBe('Test')
})

test('Logs "Test" to logs/warnings.log using log() configured with filePaths', async () => {
  const { warn } = sl({
    isProduction: true,
    logDirectory: './logs',
    filePaths: {
      warn: 'warnings.log',
    },
  })
  
  await rm(join(__dirname, 'logs'), { recursive: true, force: true })
  await warn('Test')
  const logFile = await readFile(join(__dirname, 'logs', 'warnings.log'))
  await rm(join(__dirname, 'logs'), { recursive: true, force: true })
  
  expect(`${logFile}`).toBe('Test')
})

test('Logs "Test" to logs/errors.log using error() configured with filePath', async () => {
  const { error } = sl({
    isProduction: true,
    logDirectory: './logs',
    filePath: 'errors.log',
  })
  
  await rm(join(__dirname, 'logs'), { recursive: true, force: true })
  await error('Test')
  const logFile = await readFile(join(__dirname, 'logs', 'errors.log'))
  await rm(join(__dirname, 'logs'), { recursive: true, force: true })
  
  expect(`${logFile}`).toBe('Test')
})

test('Logs "Test" to logs/errors.log using log() configured with filePaths', async () => {
  const { error } = sl({
    isProduction: true,
    logDirectory: './logs',
    filePaths: {
      error: 'errors.log',
    },
  })
  
  await rm(join(__dirname, 'logs'), { recursive: true, force: true })
  await error('Test')
  const logFile = await readFile(join(__dirname, 'logs', 'errors.log'))
  await rm(join(__dirname, 'logs'), { recursive: true, force: true })
  
  expect(`${logFile}`).toBe('Test')
})
