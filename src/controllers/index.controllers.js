import { pool } from '../db.js'

export const getPing =  async (req, resp) => {
    const [result] = await pool.query('SELECT 1 + 1 AS result')
    resp.json(result[0])
  }