"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var promises_1 = require("fs/promises");
var path_1 = require("path");
/**
 * Configures SL and returns four logging methods: log, info, warn, and error.
 * @param options The options used to configure SL.
 */
function sl(options) {
    var config = __assign({ isProduction: false, logDirectory: './', filePath: 'error.log', filePaths: null }, options);
    /**
     * Logs text content to a log file, creating the file if it does not exist.
     * @param log The path for the log file.
     * @param entry The entry to log.
     */
    function addEntry(log, entry) {
        return __awaiter(this, void 0, void 0, function () {
            var path, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        path = path_1.join(__dirname, "" + config.logDirectory, "" + log);
                        return [4 /*yield*/, promises_1.mkdir(config.logDirectory, { recursive: true })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, promises_1.appendFile(path, entry)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log("Error adding entry to '" + log + "': " + error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    return {
        /**
         * Logs data to the console in development, or a file in production.
         * @param data The data to log.
         */
        log: function () {
            var _a;
            var data = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                data[_i] = arguments[_i];
            }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!config.isProduction) return [3 /*break*/, 2];
                            return [4 /*yield*/, addEntry(config.filePaths ? ((_a = config.filePaths.log) !== null && _a !== void 0 ? _a : 'info.log') : config.filePath, data.join(' '))];
                        case 1:
                            _b.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            console.log.apply(console, data);
                            _b.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        },
        /**
         * Logs data as info to the console in development, or a file in production.
         * @param data The data to log.
         */
        info: function () {
            var _a;
            var data = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                data[_i] = arguments[_i];
            }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!config.isProduction) return [3 /*break*/, 2];
                            return [4 /*yield*/, addEntry(config.filePaths ? ((_a = config.filePaths.info) !== null && _a !== void 0 ? _a : 'info.log') : config.filePath, data.join(' '))];
                        case 1:
                            _b.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            console.info.apply(console, data);
                            _b.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        },
        /**
         * Logs data as a warning to the console in development, or a file in production.
         * @param data The data to log.
         */
        warn: function () {
            var _a;
            var data = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                data[_i] = arguments[_i];
            }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!config.isProduction) return [3 /*break*/, 2];
                            return [4 /*yield*/, addEntry(config.filePaths ? ((_a = config.filePaths.warn) !== null && _a !== void 0 ? _a : 'error.log') : config.filePath, data.join(' '))];
                        case 1:
                            _b.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            console.warn.apply(console, data);
                            _b.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        },
        /**
         * Logs data as an error to the console in development, or a file in production.
         * @param data The data to log.
         */
        error: function () {
            var _a;
            var data = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                data[_i] = arguments[_i];
            }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!config.isProduction) return [3 /*break*/, 2];
                            return [4 /*yield*/, addEntry(config.filePaths ? ((_a = config.filePaths.error) !== null && _a !== void 0 ? _a : 'error.log') : config.filePath, data.join(' '))];
                        case 1:
                            _b.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            console.error.apply(console, data);
                            _b.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
    };
}
exports["default"] = sl;
