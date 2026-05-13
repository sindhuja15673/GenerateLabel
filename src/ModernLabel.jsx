

import React from "react";
import logo from "./assets/logo.png";

const Label = ({ data }) => {
  return (
    <div id="divs" style={styles.wrapper}>
      <div style={styles.container}>

        {/* LOGO */}
        <img src={logo} alt="logo" style={styles.logo} />

        {/* FROM */}
        <div style={styles.from}>
          <h3 style={styles.title}>MEENU WOOD CRAFTS & TOYS</h3>
          <p>6384785350</p>
          <p>No.2, Old Vandipalayam</p>
          <p>Cuddalore – 607004</p>
        </div>

        <hr style={styles.line} />

        {/* TO SECTION */}
        <div style={styles.toSection}>
          <div style={styles.toLabel}>📦 TO:</div>

          <div style={styles.address}>
            {data.toAddress}
          </div>
        </div>

        <hr style={styles.line} />

        {/* FOOTER */}
        <div style={styles.footer}>
          ✨ Handcrafted with Love
        </div>

      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: "40px",
    display: "flex",
    justifyContent: "center",
  },

  container: {
    width: "420px",
    border: "2px solid #c9a66b",
    borderRadius: "15px",
    padding: "20px",
    backgroundColor: "#fdfbf7",
    fontFamily: "Georgia, serif",
    textAlign: "center",
  },

  logo: {
    width: "180px",
    marginBottom: "10px",
  },

  from: {
    marginBottom: "10px",

  },

  title: {
    margin: "5px 0",
    fontSize: "18px",
    fontWeight: "bold",
    marginTop:"-30px"
  },

  line: {
    border: "none",
    borderTop: "1px solid #ccc",
    margin: "15px 0",
  },

  toSection: {
    textAlign: "left",
    padding: "10px",
  },

  toLabel: {
    fontWeight: "bold",
    marginBottom: "8px",
  },

  address: {
    fontSize: "18px",
    lineHeight: "24px",
    whiteSpace: "pre-line", // IMPORTANT
  },

  footer: {
    marginTop: "10px",
    fontStyle: "italic",
    fontSize: "16px",
  },
};

export default Label;