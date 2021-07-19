let pg = require("pg")

const Pool = pg.Pool
const pool = new Pool({
    user: 'jysvxalicawiqc',
    host: 'ec2-54-228-99-58.eu-west-1.compute.amazonaws.com',
    database: 'd76d999305u3uu',
    password: 'ed40b1e7fb1782fff7418a770b77fa817e881a841da1b0f4faaa6c4ebef951bf',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    },
})

exports.getHDD = function (request, response) {
    pool.query('select * from public."HDD"', function (error, results) {
        if (error) {
            console.log(error);
        }

        response.render("hdd.hbs", {
            HDDarray: results.rows
        });
    });
}
exports.getCPU = function (request, response) {
    pool.query('select * from public."CPU"', function (error, results) {
        if(error){
            console.log(error);
        }
        response.render("cpu.hbs", {
            CPUarray: results.rows
        })
    })
}
exports.getRAM = function (request, response) {
    pool.query('select * from public."RAM"', function (error, results) {
        if(error){
            console.log(error);
        }
        response.render("ram.hbs", {
            RAMarray: results.rows
        })
    })
}
exports.getKbrd = function (request, response) {
    pool.query('select * from public."Keyboard"', function (error, results) {
        if(error){
            console.log(error);
        }
        response.render("keyboard.hbs", {
            kbrdArray: results.rows
        })
    })
}
exports.getMouse = function (request, response) {
    pool.query('select * from public."Mouse"', function (error, results) {
        if(error){
            console.log(error);
        }
        response.render("mouse.hbs", {
            mouseArray: results.rows
        })
    })
}