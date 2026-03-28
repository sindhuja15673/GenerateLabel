// import React from "react";
// import Barcode from "react-barcode";

// const Label = ({ data }) => {
//   return (
//     <div id="label" style={styles.container}>

//       {/* LEFT LOGO AREA */}
//       <div style={styles.logo}>Meenu</div>

//       {/* FROM SECTION */}
//       <div style={styles.fromSection}>
//         <div style={styles.fromTitle}>FROM:</div>
//         <div style={styles.fromName}>Meenu Wood Crafts</div>
//         <div>No. 2, Old Vandipalayam</div>
//         <div>Cuddalore – 607004, Tamil Nadu, India</div>
//         <div style={{ fontWeight: "bold" }}>Phone: 6384785350</div>
//       </div>

//       {/* DIVIDER LINE */}
//       <div style={styles.topLine}></div>

//       {/* TO SECTION */}
//       <div style={styles.toSection}>
//         <div style={styles.toTag}>TO:</div>

//         <div style={styles.name}>{data.name}</div>
//         <div style={styles.company}>{data.company}</div>

//         <div style={styles.address}>
//           {data.address}
//           <br />
//           Tamil Nadu – <b>{data.pincode}</b>
//         </div>

//         <div style={styles.phone}>
//           📞 Phone: <b>{data.phone}</b>
//         </div>
//       </div>

//       {/* RIGHT SIDE BARCODE */}
//       <div style={styles.rightSection}>
//         <div style={styles.barLine}></div>

//         <Barcode value={`MEENU-TN${data.pincode}`} height={70} />

//         <div style={styles.barText}>
//           MEENU - TN{data.pincode}
//         </div>
//       </div>

//       {/* PRODUCT */}
//       <div style={styles.product}>
//         📦 Product: <span style={{ color: "red" }}>{data.product}</span>
//       </div>

//     </div>
//   );
// };

// const styles = {
//   container: {
//     width: "1000px",
//     height: "520px",
//     border: "3px solid black",
//     borderRadius: "20px",
//     backgroundColor: "#f2f2f2",
//     position: "relative",
//     fontFamily: "Arial",
//     padding: "20px",
//   },

//   logo: {
//     position: "absolute",
//     top: "30px",
//     left: "40px",
//     fontSize: "40px",
//     fontWeight: "bold",
//     color: "#00aaff",
//   },

//   fromSection: {
//     position: "absolute",
//     top: "30px",
//     left: "300px",
//   },

//   fromTitle: {
//     fontWeight: "bold",
//     fontSize: "18px",
//   },

//   fromName: {
//     fontSize: "26px",
//     fontWeight: "bold",
//   },

//   topLine: {
//     position: "absolute",
//     top: "150px",
//     left: "20px",
//     right: "20px",
//     height: "2px",
//     backgroundColor: "red",
//   },

//   toSection: {
//     position: "absolute",
//     top: "180px",
//     left: "40px",
//     width: "500px",
//   },

//   toTag: {
//     backgroundColor: "red",
//     color: "white",
//     padding: "5px 12px",
//     fontWeight: "bold",
//     display: "inline-block",
//     marginBottom: "10px",
//   },

//   name: {
//     fontSize: "30px",
//     fontWeight: "bold",
//   },

//   company: {
//     fontSize: "22px",
//     fontWeight: "bold",
//   },

//   address: {
//     marginTop: "10px",
//     fontSize: "18px",
//     lineHeight: "26px",
//   },

//   phone: {
//     marginTop: "15px",
//     fontSize: "18px",
//   },

//   rightSection: {
//     position: "absolute",
//     right: "40px",
//     top: "200px",
//     textAlign: "center",
//   },

//   barLine: {
//     width: "200px",
//     height: "1px",
//     backgroundColor: "#999",
//     marginBottom: "10px",
//   },

//   barText: {
//     marginTop: "10px",
//     fontWeight: "bold",
//   },

//   product: {
//     position: "absolute",
//     bottom: "30px",
//     left: "40px",
//     fontSize: "20px",
//     fontWeight: "bold",
//   },
// };

// export default Label;
import React from "react";
import Barcode from "react-barcode";
import logo from "./assets/logo.png";

const Label = ({ data }) => {
  return (
    <div id="divs" style={styles.div}>

    <div id="label" style={styles.container}>

      {/* LOGO */}
      <img src={logo} alt="logo" style={styles.logo} />
{/* DIVIDING LINE BETWEEN LOGO AND FROM */}
<div style={styles.logoDivider}></div>
      {/* FROM SECTION */}
      <div style={styles.from}>
        <div style={styles.fromTitle}>FROM:</div>
        <div style={styles.fromName}>Meenu Wood Crafts</div>
        <div>No. 2, Old Vandipalayam</div>
        <div>Cuddalore – 607004, Tamil Nadu, India</div>
        <div style={{ fontWeight: "bold" }}>Phone: 6384785350</div>
      </div>

      {/* TOP DIVIDER */}
      <div style={styles.topDivider}></div>
<div style={styles.toTag}>TO:</div>
      {/* TO SECTION */}
      <div style={styles.toSection}>
        {/* <div style={styles.toTag}>TO:</div> */}

        <div style={styles.name}>{data.name}</div>
        <div style={styles.company}>{data.company}</div>

        <div style={styles.address}>
          {data.address}
          <br />
          Tamil Nadu – <b>{data.pincode}</b>
        </div>

        <div style={styles.phone}>
          <span style={{ color: "red" }}>📞</span> Phone:{" "}
          <b>{data.phone}</b>
        </div>
      </div>

      {/* RIGHT SIDE (BARCODE AREA) */}
      <div style={styles.rightSection}>
        <div style={styles.barTopLine}></div>

        <Barcode value={`MEENU-TN${data.pincode}`} height={70} width={1.2} />

        <div style={styles.barText}>
          {/* MEENU - TN{data.pincode} */}
        </div>

        <div style={styles.barBottomLine}></div>
      </div>

      {/* PRODUCT */}
      <div style={styles.productDivider}></div>
      <div style={styles.product}>
        📦 <b>Product:</b>{" "}
        <span style={{ color: "red" }}>{data.product}</span>
      </div>

    </div>
    </div>
  );
};

const styles = {
    div:{
        padding:"55px",
        width: "670px"
// backgroundColor:"#c0bebe",

    },
  container: {
    width: "640px",
    height: "410px",
    border: "2px solid black",
    borderRadius: "20px",
    backgroundColor: "white",
    position: "relative",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },

  logo: {
    position: "absolute",
    top: "0px",
    left: "0px",
    width: "300px",
  },
logoDivider: {
  position: "absolute",
  top: "13px",
  left: "260px", // after logo
  width: "1px",
  height: "150px", // adjust according to logo height
  backgroundColor: "#1f1e1e",
},
  from: {
    position: "absolute",
    top: "30px",
    left: "280px",
  },

  fromTitle: {
    fontWeight: "bold",
    fontSize: "18px",
    borderBottom: "2px solid black",
    display: "inline-block",
    marginBottom: "5px",
  },

  fromName: {
    fontSize: "26px",
    fontWeight: "bold",
  },

  topDivider: {
    position: "absolute",
    top: "175px",
    left: "20px",
    right: "20px",
    height: "2px",
    backgroundColor: "red",
  },

  toSection: {
    position: "absolute",
    top: "190px",
    left: "40px",
    width: "500px",
  },

  toTag: {
    backgroundColor: "red",
    color: "white",
    padding: "6px 14px",
    fontWeight: "bold",
    display: "inline-block",
    marginBottom: "10px",
    marginTop: "140px"
    
  },

  name: {
    fontSize: "26px",
    fontWeight: "bold",
  },

  company: {
    fontSize: "22px",
    fontWeight: "bold",
  },

  address: {
    width: "320px",
    // marginTop: "10px",
    fontSize: "18px",
    lineHeight: "26px",
    wordBreak: "break-word",      // ensures long words break
  overflowWrap: "break-word",
  },

  phone: {
    marginTop: "3px",
    fontSize: "18px",
  },

  rightSection: {
    position: "absolute",
    right: "40px",
    top: "180px",
    width: "260px",
    textAlign: "center",
  },

  barTopLine: {
    height: "1px",
    backgroundColor: "#aaa",
    marginTop: "10px",
    width:'250px'
  },

  barBottomLine: {
    height: "1px",
    backgroundColor: "#aaa",
    marginTop: "10px",
    width:'250px'
  },

  barText: {
    marginTop: "8px",
    fontWeight: "bold",
  },
productDivider: {
  position: "absolute",
  bottom: "50px",  // adjust to sit just above the product
  left: "20px",
  right: "20px",
  borderTop: "2px dashed #999",
},
  product: {
    position: "absolute",
    bottom: "12px",
    left: "40px",
    fontWeight: "bold",
    fontSize: "20px",
  },
};

export default Label;