import React, { useState, useEffect } from 'react';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { ImCross } from 'react-icons/im';

const SavedPlants = () => {
  const [plants, setPlants] = useState([]);
  const { user } = UserAuth();
  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setPlants(doc.data()?.savedFavorites);
    });
  }, [user?.email]);

  const favoriteRef = doc(db, 'users', `${user?.email}`)
  const deleteFavorite = async (passedID) => {
      try {
        const result = plants.filter((item) => item.id !== passedID)
        await updateDoc(favoriteRef, {
            savedFavorites: result
        })
      } catch (error) {
          console.log(error)
      }
  }

  return (
    <div>SavedPlants</div>
  )
}

export default SavedPlants
