const fs = require("fs")
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
