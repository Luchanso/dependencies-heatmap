import { createLogger, format, transports } from "winston";
import { isDevelopment } from "..";

const isObject = (obj: any): obj is object => {
  return obj.constructor === Object;
};

const CustomFormat = format.printf(info => {
  const { level, message, timestamp, stack } = info;

  if (stack) {
    return `${timestamp} [${level}] ${stack}`;
  }

  if (isObject(message)) {
    return `${timestamp} [${level}] ${JSON.stringify(message, null, 2)}`;
  }

  return `${timestamp} [${level}] ${message}`;
});

const logger = createLogger({
  level: process.env.LOGGER_LEVEL || isDevelopment ? "debug" : "info",
  format: format.combine(
    format.timestamp(),
    format.splat(),
    format.colorize(),
    format.errors({ stack: true }),
    CustomFormat
  ),
  transports: [new transports.Console()]
});

export default logger;
