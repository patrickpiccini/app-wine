import db from "../config/firebaseConnect"

import {  getDoc, doc , setDoc} from 'firebase/firestore'


export const createUser = (dados) => {
    return new Promise(async (resolve, reject) => {
        try {
            let docRef = await doc(db, 'users' + "/" + dados.email)
            const docId = await setDoc(docRef, dados)
            resolve(docId)
        } catch (error) {
            reject(error)
        }
    })
}


export const getUser = (emailId) => {

    return new Promise(async (resolve, reject) => {
        try {
            const docRef = await doc(db, 'users' + "/" + emailId)
            const querySnapshot = await getDoc(docRef)
            resolve(querySnapshot.data())
        } catch (error) {
            console.log("Erro:", error)
            reject()
        }
    })
}

