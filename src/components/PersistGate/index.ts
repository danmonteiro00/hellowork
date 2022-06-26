import { connect } from 'react-redux';
import { liftSession } from '../../store/user/actions';
import PersistGate from './persistGate';

const mapDispatchToProps = {
  liftSession,
};

export default connect(null, mapDispatchToProps)(PersistGate);
