import mySQL from 'mysql';

function updateDatabase(ip)
{
    var con = mySQL.createConnection(
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
    //so convert the date object to that type format
    var datetime = convertDate(date);

    query = `INSERT INTO Users (ip, time) VALUES ("${ip}", "${datetime}")`;
    executeQuery(con, query);
}

function convertDate(date)
{
    //the year value is the only part that doesn't need to be changed

    var month = date.getMonth().toString();
    month = formatDateValue(month);

    var day = date.getDate().toString();
    day = formatDateValue(day);

    var hour = date.getHours().toString();
    hour = formatDateValue(hour);

    var minute = date.getMinutes().toString();
    minute = formatDateValue(minute);

    var second = date.getSeconds().toString();
    second = formatDateValue(second);

    return `${date.getFullYear()}-${month}-${day} ${hour}:${minute}:${second}`;
}

function formatDateValue(val)
{
    if (val.length < 2)
        return "0" + val;
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