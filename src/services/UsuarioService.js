import db from "../config/firebaseConnect"

import { collection , getDoc, deleteDoc, doc , setDoc} from 'firebase/firestore'
// import { searchByAddress } from "./LocationService"


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


// export const deleteUser = (key) => {
//     console.log("Delete", key)
//     return new Promise(async (resolve, reject) => {

//         try {
//             await deleteDoc(doc(db, "users", key))
//             resolve()
//         } catch (error) {
//             console.log(error)
//             reject()
//         }
//     })
// }