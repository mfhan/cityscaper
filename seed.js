const { Tour, Location, User } = require('./models');
const { tourdata, locationdata, userdata } = require('./data');

const seed = async () => {
  try {
    const location1 = await Location.create({
      name: 'The Flatiron Building',
      description: 'The not-quite-skinniest building in NYC.',
      location: 'LOCATION DATA',
      image: 'https://s3-media2.fl.yelpcdn.com/bphoto/FdXvDh2F1Yn8ObZ6amItPQ/l.jpg',
    });
    const location2 = await Location.create({
      name: 'One World Trade',
      description: 'The new world trade center building.',
      location: 'LOCATION DATA',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/One_World_Trade_Center_May_2015.jpg',
    });
    const location3 = await Location.create({
      name: 'Russ and Daughters Cafe',
      description: 'Delicious eats, retro vibe, and a classic New York experience.',
      location: 'LOCATION DATA',
      image: 'https://images.squarespace-cdn.com/content/v1/57be0600e3df288b8ce9492a/1553032863153-7I666EE0UMUGV6AA9S0Y/ke17ZwdGBToddI8pDm48kFTEgwhRQcX9r3XtU0e50sUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcW7uEhC96WQdj-SwE5EpM0lAopPba9ZX3O0oeNTVSRxdHAmtcci_6bmVLoSDQq_pb/static.jpg?format=2500w',
    });

    const tour1 = await Tour.create({
      name: 'LES Foodies',
      description: 'A tour of the best eats in the Lower East Side. Locals only!',
    });
    const tour2 = await Tour.create({
      name: 'Manhatten Henge',
      description: 'A list of historical locations in Manhattan that provide historical context for the greatest city in the world.',
    });
    const tour3 = await Tour.create({
      name: 'Scav-NYC',
      description: "New York's most famous scavenger hunt.",
    });

    await tour1.setLocations([location1, location2]);
    await tour2.setLocations([location2, location3]);
    await tour3.setLocations([location3, location1]);
  } catch (e) {
    console.log(e);
  }
};

seed();

// const seed = async () => {
//   try {
//     const tours = await Tour.bulkCreate(tourdata);
//     console.log(`${tours.length} planets created!`);
//     const locations = await Location.bulkCreate(locationdata);
//     console.log(`${locations.length} locations created!`);
//     const users = await User.bulkCreate(userdata);
//     console.log(`${users.length} users created!`);
//   } catch (e) {
//     console.log(e.message);
//   } finally {
//     process.exit();
//   }
// };
//
// seed();
