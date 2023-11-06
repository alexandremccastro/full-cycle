const mysql = require("mysql2/promise");
const config = require("./config");

class Conn {
  constructor() {
    this.connection = null;
  }

  async getConnection() {
    if (!this.connection)
      this.connection = await mysql.createConnection(config);

    return this.connection;
  }

  async execute(str, values) {
    const connection = await this.getConnection();
    return connection.execute(str, values);
  }

  destroy() {
    if (this.connection) this.connection.destroy();
  }
}

module.exports = new Conn();
