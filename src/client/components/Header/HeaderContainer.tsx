import { connect } from 'react-redux';
import Header from './Header';
import { RootState } from '../../store/types';
import { bindActionCreators } from 'redux';
import store from '../../store';

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = () => bindActionCreators({}, store.dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
