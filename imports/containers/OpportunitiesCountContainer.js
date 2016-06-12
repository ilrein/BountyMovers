import { composeWithTracker } from 'react-komposer';
import OpportunitiesCount from '../ui/OpportunitiesCount';

function composer(props, onData) {
  const handle = Meteor.subscribe('opportunities');
  if (handle.ready()) {
    const totalOpportunities = Opportunities.find({}).count();
    onData(null, { totalOpportunities });
  }
}

export default composeWithTracker(composer)(OpportunitiesCount);
