import { Meteor } from 'meteor/meteor'; // eslint-disable-line

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

// I need to fake about 10 000 jobs
// I won't address performance and scale during a hackathon
// I'll need to differentiate between various microjobs
// community services are good too

// let's do 1000 charitable/volunteer opportunities
// let's do 200 retweets for $0.50
// 200 mow the lawn contracts
// 500 plumber contracts
// 400 electrician contracts
// 500 maid contracts
//

Meteor.startup(() => {
  console.log('Our app is live =)');
});
