const conn = require("../database/conn");

const routes = [
  {
    type: "get",
    path: "*",
    action: async (req, res) => {
      const [results] = await conn.execute("SELECT * FROM people");

      res.write("<h1>Full Cycle Rocks!</h1>");

      const rows = [];

      for (const item of results) {
        rows.push(`
          <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
          </tr>
        `);
      }

      res.write(`
        <table border="1" style="width:20%;text-align:center">
          <thead>
            <th>#</th>
            <th>Name</th>
          </thead>
          <tbody>
            ${rows.join("")}
          </tbody>
        </table>
      `);

      res.end();
    },
  },
];

module.exports = routes;
