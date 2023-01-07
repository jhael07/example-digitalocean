import { pool } from "../db.js";

const table = "taks";

export const getTasks = async (req, res) => {
  const [result] = await pool.query(
    `SELECT * FROM ${table} ORDER BY createdAt ASC`
  );
  return res.json(result);
};
export const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query(`SELECT * FROM ${table}  WHERE id = ?`, [
      id,
    ]);
    if (result.length === 0) throw new Error("There is no tasks");
    return res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const result = await pool.query(
      `INSERT INTO ${table}(title,description) VALUES (?,?)`,
      [title, description]
    );
    return res.json({ id: result.insertId, title, description });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateTask = async (req, res) => {
  try {
    const result = await pool.query(`UPDATE taks set ? WHERE id = ?`, [
      req.body,
      req.params.id,
    ]);
    return res.json(result);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export const deleteTask = async (req, res) => {
  try {
    const result = await pool.query(`DELETE FROM ${table} WHERE id = ?`, [
      req.params.id,
    ]);
    return res.json(result);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
