import { connect } from 'react-redux';
import App from './App';
import { RootState } from '../.././store/types';
import { bindActionCreators } from 'redux';
import store from '../../store';

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = () =>
  bindActionCreators(
    {
      // There should be action
    },
    store.dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
