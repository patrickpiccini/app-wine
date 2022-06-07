import db from "../config/firebaseConnect"

import { collection, addDoc, getDocs, deleteDoc, doc, query, where } from 'firebase/firestore'
// import { searchByAddress } from "./LocationService"


export const createWine = (dados) => {
    return new Promise(async (resolve, reject) => {
        try {
            const docId = await addDoc(collection(db, "vinho"), dados)
            resolve(docId)
        } catch (error) {
            reject(error)
        }
    })
}


export const getWine = (emailKey) => {
    return new Promise(async (resolve, reject) => {
        try {
            const colecao = collection(db, "vinho")
            const q = query(colecao, where("email", "==", emailKey))
            const querySnapshot = await getDocs(q)
            let registros = []
            querySnapshot.forEach((item) => {
                let data = item.data()
                data.key = item.id
                registros.push(data)
            })
            resolve(registros)
        } catch (error) {
            console.log("Erro:", error)
            reject()
        }
    })
}


// export const deleteWine = (key) => {
//     console.log("Delete", key)
//     return new Promise(async (resolve, reject) => {

//         try {
//             await deleteDoc(doc(db, "vinho", key))
//             resolve()
//         } catch (error) {
//             console.log(error)
//             reject()
//         }
//     })
// }