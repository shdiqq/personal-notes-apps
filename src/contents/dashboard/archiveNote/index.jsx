import React from "react";
import PropTypes from "prop-types";
import Card from "../../../components/card";
import styles from "./index.module.css"

class ArchiveNotes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return(
        <>
          <h2 className={styles.h2}>Arsip</h2>
          <div className={styles.container}>
            {this.props.archiveNote.length === 0 
            ?
              <p>Tidak ada catatan arsip</p>
            : 
            this.props.archiveNote.map((el) => (
              <Card key={el.id} data={el} text={"Pindahkan"} onDelete={this.props.deleteArchiveNote} onMove={this.props.moveToNote}/>
            ))}
          </div>
        </>
      )
  }
}

ArchiveNotes.propTypes = {
  archiveNote: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
    })
  ),
  moveToNote : PropTypes.func.isRequired,
  deleteArchiveNote : PropTypes.func.isRequired,
};

export default ArchiveNotes;