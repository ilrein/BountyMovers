import { Meteor } from 'meteor/meteor'; // eslint-disable-line
const faker = require('faker');

// add some on createHooks
/* eslint-disable no-param-reassign */
Accounts.onCreateUser((options, user) => {
  user.isAdmin = false;
  user.rep = 0;
  user.involvement = {
    charity: 0,
    profit: 0,
  };
  return user;
});

// I'll fake a few good examples

const places = JSON.parse(Assets.getText('places.json'));

Meteor.startup(() => {
  console.log('Our app is live =)');
  // const firstName = faker.name.firstName();
  // const lastName = faker.name.lastName();
  console.log(places);

  if (Opportunities.find({}).count() === 0) {
    console.log('no opps, seeding...');

    places.places.forEach((place, index) => {
      console.log(index, place);
      // "location": "211 Yonge St, ON",
      //   "title": "Drive",
      //   "description": "car",
      //   "hours": "2",
      //   "notForProfit": false,
      //   "rate": "2",
      //   "createFormIsInvalid": false,
      //   "position": {
      //     "lat": 43.6538403,
      //     "lng": -79.3795657
      //   }
      // }
      //

      Opportunities.insert({
        date: faker.date.future(),
        time: faker.date.future(),
        address: place.address,
        title: faker.name.jobTitle(),
        description: faker.company.catchPhrase(),
        hours: Math.floor(Math.random() * 6) + 1,
        notForProfit: place.notForProfit,
        rate: place.notForProfit ? 0 : Math.floor(Math.random() * 40) + 1,
        position: {
          lat: place.lat,
          lng: place.lng,
        },
      });
    });
  }
});
