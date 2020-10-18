const Pool = require('pg').Pool
const pool = new Pool({
    /*host: 'ec2-54-217-206-236.eu-west-1.compute.amazonaws.com',
     database: 'd8pg59uki17vj',
     user: 'utotqzeajjkolm',
     password: '2fea7ccdb7fb8a361d60bc97272d6e68e01ed655425c930bbbc3eed760436fda',
     port: '5432',*/
    connectionString: 'postgres://utotqzeajjkolm:2fea7ccdb7fb8a361d60bc97272d6e68e01ed655425c930bbbc3eed760436fda@ec2-54-217-206-236.eu-west-1.compute.amazonaws.com:5432/d8pg59uki17vj',
    ssl: { rejectUnauthorized: false }
})



const getUsers = (request, response) => {
    pool.query('SELECT * FROM work1.table_sample', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getUserById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM table_sample WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}







module.exports = {
    getUsers,
    getUserById
}