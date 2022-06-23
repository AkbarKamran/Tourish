function successResponse(code: any, message: string, data: any, res: any) {
  res.status(code).send({
    header: {
      code: code.toString(),
      status: true,
      message: message,
    },
    body: data,
  });
}

function internalServerError(message: String, err: any, res: any) {
  res.status(500).send({
    header: {
      code: "500",
      status: true,
      message: message,
    },
    body: err,
  });
}

function dbError(err: any, res: any) {
  res.status(500).send({
    header: {
      code: "500",
      status: true,
      message: "sql_Db Error",
    },
    body: err,
  });
}

export { successResponse, internalServerError, dbError };
