// // import { MENU_URL } from "../../utilities/URL.js";
// // import { useEffect,useState } from "react";


// // export default fetchMenuData =(resId) => {
//     const fetchData = async () => {
//         try {
//           const response = await fetch(MENU_URL + resId);
//           if (!response.ok) {
//             throw new Error(response.statusText);
//           }
//           const json = await response.json();
//           setResInfo(json.data);
//         } catch (error) {
//           console.error("Fetch error:", error);
//           // Handle error state if needed
//           setResInfo([]); // Set resInfo to an empty array or handle error state
//         }
//       };

  
// //       return resInfo;
// //   };