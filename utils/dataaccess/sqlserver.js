const sql = require("mssql");

module.exports = { /*
   * @param1 Db name
   * @param2 Sp name
   * @return3 input [ { name , sqlType , value   }  ]
   */
    FetchData: (connectionString, spname, input) => {
        try {

            if (!connectionString) {
                throw new Error("ConnectionString cannot be empty");
            }

            if (!spname) {
                throw new Error("Spname cannot be empty");
            }

            let conn = new sql.ConnectionPool(connectionString);

            let req = new sql.Request(conn);

            let pr = new Promise((resolve, reject) => {
                conn.connect(function (err) {
                    if (err) {
                        throw err;
                    }
                    if (input) {
                        for (let i = 0; i < input.length; i++) {
                            req.input(input[i].name, input[i].sqlType, input[i].value);
                        }
                    }
                    req.execute(spname).then(data => {
                        resolve(data.recordset);
                    }).catch(err => {
                        reject(err);
                    }). finally(() => {
                        conn.close();
                    });
                });
            });
            return pr;
        } catch (err) {
            throw err;
        }
    },
    /*
   * @param1 Db name
   * @param2 Sp name
   * @return3 input [ { name , sqlType , value   }  ]
   * @return4 output [ { name  , sqlType , value   }  ]
   */
    FetchDataAsOutput: (connectionString, spname, input, output) => {
        try {
            if (!connectionString) {
                throw new Error("ConnectionString cannot be empty");
              }
              if (!spname) {
                throw new Error("Spname cannot be empty");
              }

            let conn = new sql.ConnectionPool(connectionString);
            let req = new sql.Request(conn);
            let pr = new Promise((resolve, reject) => {
                conn.connect(function (err) {
                    if (err) {
                        throw err;
                    }

                    if (input) {
                        for (let i = 0; i < input.length; i++) {
                            req.input(input[i].name, input[i].sqlType, input[i].value);
                        }
                    }

                    if (output) {
                        for (let i = 0; i < output.length; i++) {
                            if (output[i].value) {
                                req.output(output[i].name, output[i].sqlType, output[i].value);
                            } else {
                                req.output(output[i].name, output[i].sqlType);
                            }
                        }
                    }
                    req.execute(spname).then(data => {
                        resolve(data.output);
                    }).catch(err => {
                        reject(err);
                    }). finally(() => {
                        conn.close();
                    });
                });
            });
            return pr;
        } catch (error) {
            throw err;
        }
    }
};
