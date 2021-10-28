import React from 'react';

import styles from "./style.module.scss";

import Logo from "../../assets/logo-white.png";
import Icon from "../../assets/icon.png";

export function Home() {

  return (
    <div className={styles.container}>
      <div className={styles.header}>

          <div className={styles.contentHeaderLeft}>
            {/* <img className={styles.logo} src={Logo} alt="logo"/> */}
            <div className={styles.titleHeaderLeft}>
                MBR Tech Soluções Inteligentes
            </div>
            <div className={styles.textHeaderLeft}>
                <span>Torne sua empresa digital.</span>
                <span style={{ paddingLeft: '100px' }}>Torne sua empresa acessível a novos negócios.</span>
                <span>Torne-se competitivo no mercado..</span>
            </div>
          </div>
          <div className={styles.contentHeaderRight}>
            <img src={Icon} alt="Icon" className={styles.icon}/>
          </div>
          
      </div>
      <div className={styles.bgWhite}></div>
      <div className={styles.bgThree}></div>
      <div className={styles.bgWhite}></div>
    </div>
  )
}