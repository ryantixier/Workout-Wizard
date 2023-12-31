const seedExercise = require("./exercise-seeds");
// const seedPersonal_Best = require("./personal_best-seed");
const seedQuote = require("./quote-seeds");
const seedUser = require("./user-seeds");
const seedWorkout = require("./workout-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedUser();
  console.log("\n----- USERS SEEDED -----\n");

  await seedExercise();
  console.log("\n----- EXERCISES SEEDED -----\n");

  await seedWorkout();
  console.log("\n----- WORKOUTS SEEDED -----\n");

  await seedQuote();
  console.log("\n----- QUOTES SEEDED -----\n");

  process.exit(0);
};

seedAll();
