import { connect } from 'react-redux';
import { Freelancer } from './freelancer';
import { IAppState } from '../../store/types';

const mapStateToProps = (state: IAppState) => ({
  isLoading: state.user.loading,
  isAuthenticated: state.user.isAuthenticated,
});


export default connect(mapStateToProps)(Freelancer);
