import { connect } from 'react-redux';
import { SignIn } from './signIn';
import { IAppState } from '../../store/types';
import { authenticateUser } from '../../store/user/actions';

const mapStateToProps = (state: IAppState) => ({
  isLoading: state.user.loading,
  isAuthenticated: state.user.isAuthenticated,
});

const mapDispatchToProps = {
  authenticateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
