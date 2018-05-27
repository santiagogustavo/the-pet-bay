import React from 'react';
import PropTypes from 'prop-types';

class ClickOutside extends React.Component {
  componentDidMount = () => {
    document.addEventListener('mousedown', this.handleOnClickOutside);
  }
  componentWillUnmount = () => {
    document.addEventListener('mousedown', this.handleOnClickOutside);
  }
  setWrapperRef = (node) => {
    this.wrapperRef = node;
  }
  handleOnClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.onClickOutside();
    }
  }
  render = () => (
    <div ref={this.setWrapperRef}>
      {this.props.children}
    </div>
  );
}

ClickOutside.propTypes = {
  children: PropTypes.element.isRequired,
  onClickOutside: PropTypes.func.isRequired,
};

export default ClickOutside;
