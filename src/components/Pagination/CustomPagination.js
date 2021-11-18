// // import Pagination from "@material-ui/lab/Pagination"
// import { MuiThemeProvider } from "@material-ui/core";
// import Pagination from "@material-ui/lab/Pagination";
// import { ThemeProvider } from "@material-ui/styles";

// const darkTheme = createMuiTheme({
//     palette: {
//       type: "dark",
//     },
//   });

// const CustomPagination = ( {setPage, numofPages=10}) => {

//     const handlePageChange = (page) => {
//         setPage(page);
//         window.scroll(0, 0);
//       };

//     return (
//         <div 
//         style={{
//             width: "100%",
//             display: "flex",
//             justifyContent: "center",
//             marginTop: 10,
//           }}>
            
//    <MuiThemeProvider theme= {darkTheme}>

//    <Pagination  
//    count={numofPages} 
//           onChange ={(e) => handlePageChange(e.target.textContent)}
//           />
 
//        </ThemeProvider>

//        </div>
//     );
// };

// export default CustomPagination


import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { createTheme, ThemeProvider } from "@material-ui/core";

const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
});

export default function CustomPagination({ setPage, numOfPages = 10 }) {
  // Scroll to top when page changes
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Pagination
          onChange={(e) => handlePageChange(e.target.textContent)}
          count={numOfPages}
          color="primary"
          hideNextButton
          hidePrevButton
        />
      </ThemeProvider>
    </div>
  );
}