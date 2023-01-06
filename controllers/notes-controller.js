import conn from "../config/db.js";

export const getNotes = async (req, res) => {
  try {
    await conn.query("SELECT * FROM notes", (error, data) => {
      if (error) throw error;

      res.json({ data });
    });
  } catch (error) {}
};

export const createNotes = async (req, res) => {
  try {
    const { note, client } = req.body;

    conn.query(
      `INSERT INTO notes (note, client) VALUES ("${note}", ${client})`,
      (error, data) => {
        if (error) throw error;

        res.json({ msg: "Nota creada con exito" });
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const editNotes = async (req, res) => {
  try {
    const { note, client } = req.body;

    const id = req.params.id;

    await conn.query(
      `UPDATE notes SET note = "${note}", client = ${client} WHERE id = ${id}`,
      (error, data) => {
        if (error) throw error;

        res.json({ msg: "Nota actualizada con éxito" });
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const deleteNotes = async (req, res) => {
  try {
    const id = req.params.id;

    await conn.query(`DELETE FROM notes WHERE id = ${id}`, (error, data) => {
      if (error) throw error;

      res.json({ msg: "Nota eliminada con éxito" });
    });
  } catch (error) {
    console.log(error);
  }
};
