import _ from 'mysql';

function updateDatabase(ip)
{
    var con = mysql.createConnection(
    {
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "server"
    });

    con.connect(function(err) 
    {
        if (err) throw err;
        console.log("Database connection successful.");
    });

    //mySQL DATETIME format uses YYYY-MM-DD hh:mm:ss
    var date = new Date();

    var month = date.getMonth().toString();
    if (month.length < 2)
        month = "0" + month;

    var day = date.getDate().toString();
    if (day.length < 2)
        day = "0" + day;

    var hour = date.getHours().toString();
    if (hour.length < 2)
        hour = "0" + hour;

    var minute = date.getMinutes().toString();
    if (minute.length < 2)
        minute = "0" + minute;

    var second = date.getSeconds().toString();
    if (second.length < 2)
        second = "0" + second;

    var timedate = `${date.getFullYear()}-${month}-${day} ${hour}:${minute}:${second}`;

    query = `INSERT INTO Users (ip, time) VALUES ("${ip}", "${timedate}")`;
    executeQuery(con, query);
}

function executeQuery(connection, query)
{
    connection.query(query, function(err, result) 
    {
        if (err) throw err;
        console.log("Successful query.");
    });
}

module.exports = updateDatabase;