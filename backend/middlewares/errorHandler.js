export const errorHandler = (err, res) => {
  let statusCode = 500;
  let message = "Internal Server Error";

  if (err instanceof Error) {
    statusCode = err.statusCode || 500;
    message = err.message || "Internal Server Error";
  }

  if (process.env.NODE_ENV === "development") {
    return res.status(statusCode).json({ message, stack: err.stack });
  }

  return res.status(statusCode).json({ message });
};
