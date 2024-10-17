import sql from "mssql";

//TODO: Verify the credentials.
const config = {
  user: "Testlab",
  password: "Testlab123!@#",
  server: "DESKTOP-UO9V2K8",
  database: "MDL",
  options: {
    trustServerCertificate: true,
    trustedConnection: false,
    enableArithAbort: true,
    instancename: "SQLEXPRESS"
  }
};

const sqlQuery = `
SELECT TOP 10
    T.ID,
    T.FileName,
    L.Value AS TransmissionStatus,
    T.CreatedOn,
    T.ModifiedOn
FROM
    HUB.PayloadTrans T
JOIN
    [CO].[Lookup] L ON L.Code = T.StatusId AND L.Header = 'PayloadStatusId'
ORDER BY
    T.ID DESC
`;

export const tableData = async (req, res) => {
  try {
    const pool = await sql.connect(config);
    const data = await pool.request().query(sqlQuery);
    res.status(200).json(data?.recordset);
    pool.close();
  } catch (err) {
    res.status(400).json(err);
  }
};
