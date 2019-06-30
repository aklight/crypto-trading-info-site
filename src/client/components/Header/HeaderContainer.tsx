import { connect } from 'react-redux';
import Header from './Header';
import { RootState } from 'store/types';
import { bindActionCreators } from 'redux';
import {toggleCamerasList} from 'store/actions';
import store from 'store';

const mapStateToProps = (state: RootState) => ({
  isCameraListHidden: state.cameras.isCameraListHidden,
  isCameraListCanBeShown: state.cameras.isCameraListCanBeShown,
  session: state.session,
  isFullScreen: state.config.isFullScreen
});

const mapDispatchToProps = () => bindActionCreators(
  {
    toggleCamerasList
  },
  store.dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
