import { connect } from 'react-redux';
import { setCounter } from './actions';

import styles from './styles/App.module.css';

function App(props) {
  return (
    <div className={styles.App}>
      <div className={styles.Counter}>
          <button onClick={() => props.setCounter(-1)}>Decrease</button>
          <h4>{props.counter}</h4>
          <button onClick={() => props.setCounter(1)}>Increase</button>
      </div>
      <h1>React & Redux Template</h1>
      <h5>oguz3</h5>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

export default connect(mapStateToProps, { setCounter })(App);