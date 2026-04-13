// import React, { useState } from "react";
// import Label from "./Label";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";

// function App() {
//   const [data, setData] = useState({});
//   const [show, setShow] = useState(false);

//   const handleChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShow(true);
//   };
// const downloadPDF = async () => {
//   const element = document.getElementById("divs"); // your label container
//   const canvas = await html2canvas(element, { scale: 3 });
//   const imgData = canvas.toDataURL("image/png");

//   const pdf = new jsPDF("portrait", "px", "a4"); // A4 page
//   const a4Width = pdf.internal.pageSize.getWidth();
//   const a4Height = pdf.internal.pageSize.getHeight();

//   // Use canvas dimensions for accurate sizing
//   const imgWidth = canvas.width;
//   const imgHeight = canvas.height;

//   // Scale down if label is bigger than A4
//   const scale = Math.min(a4Width / imgWidth, a4Height / imgHeight);

//   const pdfWidth = imgWidth * scale;
//   const pdfHeight = imgHeight * scale;

//   const x = (a4Width - pdfWidth) / 2;
//   const y = (a4Height - pdfHeight) / 2;

//   pdf.addImage(imgData, "PNG", x, y, pdfWidth, pdfHeight);
//   pdf.save("label.pdf");
// };
// //   const downloadPDF = async () => {
// //     const element = document.getElementById("label");

// //     const canvas = await html2canvas(element, { scale: 3 });
// //     const imgData = canvas.toDataURL("image/png");

// //     // const pdf = new jsPDF("landscape", "px", [1000, 520]);
// //     // pdf.addImage(imgData, "PNG", 0, 0, 1000, 520);
// //     // pdf.save("label.pdf");
// //     // const pdf = new jsPDF("landscape", "px", [element.offsetWidth, element.offsetHeight]);
// //     const pdf = new jsPDF("portrait", "px", "a4");
// // pdf.addImage(imgData, "PNG", 0, 0, element.offsetWidth, element.offsetHeight);
// // pdf.save("label.pdf");
// //   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Enter Details</h2>

//       <form onSubmit={handleSubmit}>
//         <input name="name" placeholder="Name" onChange={handleChange} required /><br />
//         <input name="company" placeholder="Company" onChange={handleChange} /><br />
//         <textarea name="address" placeholder="Address" onChange={handleChange} required /><br />
//         <input name="pincode" placeholder="Pincode" onChange={handleChange} required /><br />
//         <input name="phone" placeholder="Phone" onChange={handleChange} required /><br />
//         <input name="product" placeholder="Product" onChange={handleChange} required /><br />

//         <button type="submit">Generate Label</button>
//       </form>

//       {show && (
//         <>
//           <Label data={data} />
//           <button onClick={downloadPDF}>Download PDF</button>
//         </>
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import Label from "./Label";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function App() {
  const [data, setData] = useState({});
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const downloadPDF = async () => {
    const element = document.getElementById("divs");
    const canvas = await html2canvas(element, { scale: 3 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("portrait", "px", "a4");
    const a4Width = pdf.internal.pageSize.getWidth();
    const a4Height = pdf.internal.pageSize.getHeight();

    const imgWidth = canvas.width;
    const imgHeight = canvas.height;

    const scale = Math.min(a4Width / imgWidth, a4Height / imgHeight);
    const pdfWidth = imgWidth * scale;
    const pdfHeight = imgHeight * scale;
    const x = (a4Width - pdfWidth) / 2;
    const y = (a4Height - pdfHeight) / 2;

    pdf.addImage(imgData, "PNG", x, y, pdfWidth, pdfHeight);
    pdf.save("label.pdf");
  };

  // Styles
  const styles = {
    container: {
      maxWidth: "600px",
      margin: "40px auto",
      padding: "30px",
      borderRadius: "12px",
      backgroundColor: "#f9f9f9",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      textAlign: "center",
      marginBottom: "25px",
      color: "#333",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    input: {
      padding: "12px 15px",
      fontSize: "16px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      outline: "none",
      transition: "0.3s",
    },
    inputFocus: {
      borderColor: "#00aaff",
      boxShadow: "0 0 5px rgba(0,170,255,0.3)",
    },
    button: {
      padding: "12px 15px",
      fontSize: "16px",
      fontWeight: "bold",
      borderRadius: "8px",
      border: "none",
      backgroundColor: "#00aaff",
      color: "white",
      cursor: "pointer",
      transition: "0.3s",
    },
    buttonHover: {
      backgroundColor: "#0077cc",
    },
    pdfButton: {
      marginTop: "20px",
      padding: "12px 15px",
      fontSize: "16px",
      borderRadius: "8px",
      border: "none",
      backgroundColor: "#28a745",
      color: "white",
      cursor: "pointer",
      transition: "0.3s",
    },
    pdfButtonHover: {
      backgroundColor: "#1e7e34",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Generate Shipping Label</h2>

      <form style={styles.form} onSubmit={handleSubmit}>
        {/* <input
          name="name"
          placeholder="Recipient Name"
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          name="company"
          placeholder="Company"
          onChange={handleChange}
          style={styles.input}
        />
        <textarea
          name="address"
          placeholder="Address"
          onChange={handleChange}
          required
          style={{ ...styles.input, height: "80px", resize: "none" }}
        />
        <input
          name="pincode"
          placeholder="Pincode"
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          name="product"
          placeholder="Product"
          onChange={handleChange}
          required
          style={styles.input}
        /> */}
<textarea
  name="toAddress"
  placeholder="Enter Full Address (Name, Street, City, Pincode, Phone)"
  onChange={handleChange}
  required
  style={{ ...styles.input, height: "100px" }}
/>
        <button type="submit" style={styles.button}>
          Generate Label
        </button>
      </form>

      {show && (
        <>
          <Label data={data} />
          <button onClick={downloadPDF} style={styles.pdfButton}>
            Download PDF
          </button>
        </>
      )}
    </div>
  );
}

export default App;