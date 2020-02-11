import { useState } from 'react';
import firebase from 'firebase';
 
function GetGrid() {
 
  const [dataList, setDataList] = useState([]);

      firebase.firestore().collection("grids")
      .onSnapshot((querySnapshot) => {
          var firestoreData = [];
          querySnapshot.forEach(function(doc) {
            firestoreData.push(doc.data().grid);
          });
          setDataList(firestoreData);
        });


  
  return (dataList);
 };

 
export default GetGrid;