import type { HttpError } from "@refinedev/core";
import type { LibsqlError } from "@libsql/client";

export const handleError = (error: LibsqlError) => {
  const customError: HttpError = {
    ...error,
    message: error.message,
    statusCode: Number.parseInt(error.code),
  };
  return Promise.reject(customError);
};