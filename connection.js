const oracledb = require('oracledb');
// hr schema password
var password = '' 
// checkConnection asycn function
async function checkConnection() {
  try {
    var connection = await oracledb.getConnection({
        user: "sys",
        password: 'Oradoc_db1',
        connectString: "raje.tk:1521/ORCLCDB.localdomain",
        privilege: oracledb.SYSDBA
    });
    console.log('connected to database');
  } catch (err) {
    console.error(err.message);
  } finally {
    if (connection) {
      try {
        // Always close connections
        await connection.close(); 
        console.log('close connection success');
      } catch (err) {
        console.error(err.message);
      }
    }
  }
}

checkConnection();