import { composeWithTracker } from 'react-komposer';
import Opps from '../ui/Opps';

function composer(props, onData) {
  const handle = Meteor.subscribe('opportunities');
  if (handle.ready()) {
    const opps = Opportunities.find({}).fetch();
    onData(null, { opps });
  }
}

export default composeWithTracker(composer)(Opps);
