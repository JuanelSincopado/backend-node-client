import conn from "../config/db.js";

export const getClients = async (req, res) => {
  try {
    await conn.query("SELECT * FROM clients", (error, data) => {
      if (error) throw error;

      res.json({ data });
    });
  } catch (error) {
    console.log(error);
  }
};

export const createClient = async (req, res) => {
  try {
    const { identification, name, age, address, phone, genere } = req.body;

    await conn.query(
      `SELECT * FROM clients WHERE identification = ${identification}`,
      (error, data) => {
        if (error) throw error;

        if (data.length === 0) {
          conn.query(
            `INSERT INTO clients (identification, name, age, address, phone, genere) VALUES ("${identification}", "${name}", ${age}, "${address}", "${phone}", ${genere})`,
            (error, data) => {
              if (error) throw erorr;

              res.json({ msg: "Creado con exito" });
            }
          );

          return;
        }

        res.json({ msg: "Ya existe un usuario con esa identificación" });
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const editClient = async (req, res) => {
  try {
    const { identification, name, age, address, phone, genere } = req.body;

    const id = req.params.id;

    await conn.query(
      `UPDATE clients SET identification = "${identification}", name = "${name}", age = ${age}, address = "${address}", phone = "${phone}", genere = ${genere} WHERE id = ${id}`,
      (error, data) => {
        if (error) throw error;

        res.json({ msg: "Cliente actualizado con exito" });
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const deleteClient = async (req, res) => {
  try {
    const id = req.params.id;

    await conn.query(`DELETE FROM clients WHERE id = ${id}`, (error, data) => {
      if (error) throw error;

      res.json({ msg: "Cliente actualizado con exito" });
    });
  } catch (error) {
    console.log(error);
  }
};
