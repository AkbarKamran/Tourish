function successResponse(code: any, message: string, data: any, res: any) {
  res.status(code).send({
    header: {
      code: code.toString(),
      status: true,
      message: message,
    },
    data: data,
  });
}

function internalServerError(message: String, err: any, res: any) {
  res.status(500).send({
    header: {
      code: "500",
      status: true,
      message: message,
    },
    data: err,
  });
}

function dbError(err: any, res: any) {
  res.status(500).send({
    header: {
      code: "500",
      status: true,
      message: "sql_Db Error",
    },
    data: err,
  });
}

export { successResponse, internalServerError, dbError };
