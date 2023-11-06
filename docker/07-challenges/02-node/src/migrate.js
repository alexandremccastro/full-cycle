const conn = require("./database/conn");
const { faker } = require("@faker-js/faker");

(async () => {
  try {
    await conn.execute(
      `
      create table if not exists people (
        id int not null unique auto_increment,
        name varchar(100) not null,
        primary key (id)
      );
    `
    );

    const people = [
      faker.person.firstName(),
      faker.person.firstName(),
      faker.person.firstName(),
      faker.person.firstName(),
    ];

    for (const person of people) {
      await conn.execute("INSERT INTO people (name) VALUES(?)", [person]);
    }
  } catch (err) {
    console.log(err);
  } finally {
    conn.destroy();
  }
})();
