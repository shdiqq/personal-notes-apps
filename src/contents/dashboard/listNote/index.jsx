import React from "react";
import PropTypes from "prop-types";
import Card from "../../../components/card";
import styles from "./index.module.css"

class ListNote extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return(
        <>
          <h2 className={styles.h2}>Catatan Aktif</h2>
          <div className={styles.container}>
            {this.props.dataNote.length === 0 
            ?
              <p>Tidak ada catatan arsip</p>
            : 
            this.props.dataNote.map((el) => {
              if (this.props.searchValue !== "") {
                if (el.title.includes(this.props.searchValue)) {
                  return (<Card key={el.id} data={el} text={"Arsip"} onDelete={this.props.deleteNote} onMove={this.props.moveToArchiveNote}/>)
                }
              } else {
                return (<Card key={el.id} data={el} text={"Arsip"} onDelete={this.props.deleteNote} onMove={this.props.moveToArchiveNote}/>)
              }
            })}
          </div>
        </>
      )
  }
}

ListNote.propTypes = {
  dataNote: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
    })
  ),
  searchValue: PropTypes.string.isRequired,
  moveToArchiveNote : PropTypes.func.isRequired,
  deleteNote : PropTypes.func.isRequired,
};

export default ListNote;