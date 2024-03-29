import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.css"

class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button className={styles.button} type={this.props.type} onClick={() => this.props.onClickHandler(this.props.data)}> {this.props.text} </button>
    )
  }
}

Button.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
  }),
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClickHandler: PropTypes.func,
};

export default Button;