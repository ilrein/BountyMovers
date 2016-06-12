// Jobs
import Opportunities from '../lib/collections/OpportunitiesCollection';

Meteor.publish('opportunities', function() { // eslint-disable-line
  return Opportunities.find({});
});
