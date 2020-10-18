const Pool = require('pg').Pool
const pool = new Pool({
 host: 'localhost',
  database: 'housedb',
  user:'mit21',
  password: 'mit21',
  port: 5432,
})
const getUsers = (request, response) => {
  pool.query('SELECT * FROM table_sample ORDER BY id ASC', (error, results) => {
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