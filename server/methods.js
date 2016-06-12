Meteor.methods({
  insertOpportunity(opportunity) {
    return Opportunities.insert(opportunity);
  },
});
