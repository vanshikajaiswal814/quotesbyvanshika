
// Import the functions you need from the SDKs you need
//firebase is a container for my web application
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set,push,increment,update,get,onValue } from "firebase/database";
//import { useEffect, useState } from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6wKov0jUMyb5BN2XbDdspctJAWwCNRWo",
  authDomain: "quotes-database-af6c2.firebaseapp.com",
  databaseURL: "https://quotes-database-af6c2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "quotes-database-af6c2",
  storageBucket: "quotes-database-af6c2.appspot.com",
  messagingSenderId: "266336004494",
  appId: "1:266336004494:web:1a6f45c257a555d7d39cdf"
};

// Initialize Firebase
const Add = initializeApp(firebaseConfig);
// export default app;

const initialiseDB=()=>
{
const db = getDatabase();
const postListRef = ref(db, 'quotes');
const newPostRef = push(postListRef);
const likeObject={like:0}
set(newPostRef, likeObject
    
);
}
const incrementLike=(id)=>
{
    const db = getDatabase();
    const updates={};
    updates[`quotes/${id}/like`] = increment(1);
    update(ref(db), updates);
    
}
// }
// const incrementLike=async(id)=>
// {
//   try
//   {
//     const db = getDatabase();
//     // const updates={};
//     // updates[`quotes/${id}/like`] = increment(1);
//     // update(ref(db), updates);
//     const starCountRef = ref(db, 'quotes/' + id + '/like');
    
//     const snapshot = await get(starCountRef); // Retrieve the current count
    
//     const currentCount = snapshot.val();
//     const updatedCount = currentCount + 1; // Increment the count
    
//     set(starCountRef, updatedCount); // Update the count in the database
    
//     console.log(updatedCount);
    
//     //return updatedCount;
//   } catch (error) {
//     console.error('Error incrementing like count:', error);
//     return null;
//   }
  
  
// }

const ReadData = async () => {
  try {
    const db = getDatabase();
    const starCountRef = ref(db, 'quotes/');

    const snapshot = await new Promise((resolve, reject) => {
      onValue(starCountRef, (snapshot) => {
        resolve(snapshot);
      }, (error) => {
        reject(error);
      });
    });
    // const snapshot = await get(starCountRef);
    const data = snapshot.val();
    //console.log(data);

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};
export default {initialiseDB,ReadData,incrementLike}
