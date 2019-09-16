const { Tour, Location, User } = require('./models');
const { tourdata, locationdata, userdata } = require('./data');

const seed = async () => {
  try {
    const tours = await Tour.bulkCreate(tourdata);
    console.log(`${tours.length} planets created!`);
    const locations = await Location.bulkCreate(locationdata);
    console.log(`${locations.length} locations created!`);
    const users = await User.bulkCreate(userdata);
    console.log(`${users.length} users created!`);
  } catch (e) {
    console.log(e.message);
  } finally {
    process.exit();
  }
};

seed();
