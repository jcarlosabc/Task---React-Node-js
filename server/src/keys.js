const puerto = 5000;
module.exports = {
    database: {
        host:'localhost',
        user:'root',
        password:'',
        database:'tasklist'
    },
    port: puerto,
    config : {
        my_domain: 'http://localhost:' + puerto,
    }
}