import React, { useState } from 'react';
import firebase from 'firebase';
 
function ScoreInput({user, field, currentScore}) {
 
  const [score, setScore] = useState(0);

    setScore(currentScore);
    if (user && user.uid) {
      firebase.firestore().collection("challenges").doc(user.uid)
      .set({[field]: score}, { merge: true })
      .then(() => {
        console.log("Document written!");
      }).catch((error) => {
        console.error("Error adding document: ", error);
      });
    }

  return (
    <p>
    Current Score for {field}: {score}
    </p>
  );
}
export default ScoreInput;