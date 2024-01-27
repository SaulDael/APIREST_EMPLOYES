import { pool } from '../db.js'

export const getEmploye = async (req, resp) => {
    try {
        console.log(req.params.id);
        const [rows] = await pool.query('SELECT * FROM employe WHERE id = ?', [req.params.id])
        if (rows.length <= 0) return resp.status(404).json({
            mesagge: 'Empleado no encontrado'
        })
        resp.json(rows[0])
    } catch (error) {
        return resp.status(500).json({
            mesagge: "algo salio mal"
        })
    }
};

export const getEmployes = async (req, resp) => {
    try {
        const [rows] = await pool.query('SELECT * FROM employe')
        resp.json(rows)
    } catch (error) {
        return resp.status(500).json({
            mesagge: "algo salio mal"
        })
    }
};

export const postEmployes = async (req, resp) => {
    const { name, salary } = req.body;
    try {
        const [rows] = await pool.query('INSERT INTO employe (name, salary) VALUES (?, ?)', [name, salary])
        resp.send({
            id: rows.insertId,
            name,
            salary,
        })
    } catch (error) {
        return resp.status(500).json({
            mesagge: "algo salio mal"
        })
    }
};

export const deleteEmployes = async (req, resp) => {
    try {
        const [result] = await pool.query('DELETE FROM employe WHERE id = ?', [req.params.id])

        if (result.affectedRows <= 0) return resp.status(400).json({
            message: "Empleado no encontrado"
        })

        resp.sendStatus(204)
    } catch (error) {
        return resp.status(500).json({
            mesagge: "algo salio mal"
        })
    }
};

export const updateEmploye = async (req, resp) => {
    const { id } = req.params
    const { name, salary } = req.body
    try {

        const [result] = await pool.query('UPDATE employe SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE  id = ?', [name, salary, id])

        if (result.affectedRows === 0) return resp.status(400).json({
            mesagge: "Empleado no encontrado"
        })

        const [rows] = await pool.query('SELECT * FROM employe WHERE id = ?', [id])

        resp.send(rows[0])
    } catch (error) {
        return resp.status(500).json({
            mesagge: "algo salio mal"
        })
    }
};



