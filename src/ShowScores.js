import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
 
function LeaderBoards({collectionName}) {
 
  const [dataList, setDataList] = useState([]);

  useEffect(
    () => {
      const unsubscribe = firebase.firestore().collection("challenges")
      .onSnapshot((querySnapshot) => {
          var firestoreData = [];
          querySnapshot.forEach(function(doc) {
            firestoreData.push({score: doc.data().score, id: doc.id});
          });
          setDataList(firestoreData);
        });
      return () => unsubscribe()
    },
    []
  )

  return (
    <div>
        <header> LeaderBoards </header>
       <ul> 
        {dataList.map((data) => {
          return (<li key={data.id}>{data.id}, {data.score}</li>)
        })}
      </ul>
    </div>);
 };

 
export default LeaderBoards;