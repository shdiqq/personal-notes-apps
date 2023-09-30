import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.css";

class SearchBar extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <input className={styles.input} type="text" placeholder="Pencarian..." onChange={(event) => this.props.onChange(event)}></input>
    )
  }
}

SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default SearchBar;