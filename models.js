const Sequelize = require('sequelize');

const db = new Sequelize({
  database: 'city_scaper_db',
  dialect: 'postgres',
  define: {
    underscored: true,
  },
});

class Tour extends Sequelize.Model {}
Tour.init({
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
}, {
  sequelize: db,
  modelName: 'tour',
});

class Location extends Sequelize.Model {}
Location.init({
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
  location: Sequelize.STRING,
  image: Sequelize.STRING,
}, {
  sequelize: db,
  modelName: 'location',
});

Tour.belongsToMany(Location, { through: 'tours_locations' });

module.exports = {
  Tour,
  Location,
  db,
};
