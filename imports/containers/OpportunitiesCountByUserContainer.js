// import { composeWithTracker } from 'react-komposer';
// import OpportunitiesCount from '../ui/OpportunitiesCount';
//
// function composer(props, onData) {
//   const handle = Meteor.subscribe('myOpportunities', Meteor.userId());
//   if (handle.ready()) {
//     const totalContracts = Contracts.find({}).count();
//     onData(null, { totalContracts });
//   }
// }
//
// export default composeWithTracker(composer)(ContractsCount);
