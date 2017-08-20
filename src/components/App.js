import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import { CSSTransitionGroup } from 'react-transition-group'

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <IndexLink to="/">Home</IndexLink>
        {' | '}
        <Link to="/fuel-savings">Demo App</Link>
        {' | '}
        <Link to="/about">About</Link>
        <br/>
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {/*{ this.props.children }*/}
          {React.cloneElement(this.props.children, { key: this.props.location.pathname })}
        </CSSTransitionGroup>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
