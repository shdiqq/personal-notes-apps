import React from "react";
import styles from "./index.module.css"

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isMenuVisible: true,
    }
  }

  show = () => {
    this.setState({ isMenuVisible: !this.state.isMenuVisible})
  }

  render() {
    const ulClasses = `${styles.ul} ${this.state.isMenuVisible ? styles.hideListMenu : styles.showListMenu}`;
    return(
      <header className={styles.header}>
        <div className={styles.left}>
          <h1>Personal Notes App</h1>
        </div>
        <div className={styles.right}>
          <button className={styles.hamburger} onClick={this.show}>≡</button>
          <div className={styles.container}>
            <ul className={ulClasses}>
              <a className={styles.a} href="#pencarian"> <li className={styles.li}> Pencarian </li></a>
              <a className={styles.a} href="#catatan-aktif"> <li className={styles.li}> Catatan Aktif </li></a>
              <a className={styles.a} href="#buat-catatan"> <li className={styles.li}> Buat Catatan </li></a>
              <a className={styles.a} href="#arsip"> <li className={styles.li}> Arsip </li></a>
            </ul>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;