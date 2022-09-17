import React, { PureComponent } from 'react';
import { connect } from '../hoc';
import { addNumber } from '../store/features/counter';

export class About extends PureComponent {
  render() {
    const { counter } = this.props;
    return (
      <div>
        <h2>About Counter: {counter}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
});

const mapDispatchtoProps = (dispatch) => ({
  addNumber(num) {
    dispatch(addNumber());
  },
});
export default connect(mapStateToProps, mapDispatchtoProps)(About);
