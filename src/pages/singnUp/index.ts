import { connect } from 'react-redux';
import { SignUp } from './signUp';
import { createNewUser } from '../../store/user/actions';
import { IAppState } from '../../store/types';

const mapStateToProps = (state: IAppState) => ({
  isLoading: state.user.loading,
  isAuthenticated: state.user.isAuthenticated,
});

const mapDispatchToProps = {
  createNewUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
