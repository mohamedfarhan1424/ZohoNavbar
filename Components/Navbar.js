import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCalendar, faChartArea, faCodeBranch, faDatabase, faDollarSign, faFileInvoice, faMale, faMeteor, faPersonBooth, faTruck, faUser } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
function Navbar() {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav((c) => !c);
  };
  return (
    <div
      className={nav ? styles.sidebar : `${styles.sidebar} ${styles.unactive}`}
    >
      <ul>
        <li>
          <a>
        <FontAwesomeIcon className={styles.icon} icon={faDatabase} /> 
            DashBoard
          </a>
        </li>
        <li>
          <a><FontAwesomeIcon className={styles.icon} icon={faUser}/>Customers</a>
        </li>
        <li>
          <a><FontAwesomeIcon className={styles.icon} icon={faBriefcase}/>Items</a>
        </li>
        <br />
        <li>
          <a><FontAwesomeIcon className={styles.icon} icon={faChartArea}/>Estimates</a>
        </li>
        <li>
          <a><FontAwesomeIcon className={styles.icon} icon={faTruck}/>Delivary challans</a>
        </li>
        <li>
          <a><FontAwesomeIcon className={styles.icon} icon={faFileInvoice}/>Invoices</a>
        </li>
        <li>
          <a><FontAwesomeIcon className={styles.icon} icon={faDollarSign}/>Payments Recieved</a>
        </li>
        <br />
        <li>
          <a><FontAwesomeIcon className={styles.icon} icon={faDollarSign}/>Expenses</a>
        </li>
        <br />
        <li>
          <a><FontAwesomeIcon className={styles.icon} icon={faCalendar}/>Timesheet</a>
        </li>
        <li>
          <a><FontAwesomeIcon className={styles.icon} icon={faCodeBranch}/>Reports</a>
        </li>
        <li className={styles.close}>
          <a onClick={() => handleNav()}>&rsaquo;</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
