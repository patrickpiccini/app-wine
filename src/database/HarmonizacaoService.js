import db from "../config/firebaseConnect"

import { collection,  getDocs, } from 'firebase/firestore'

export const getHermonizacao = () => {

    return new Promise(async (resolve, reject) => {
        try {
            const querySnapshot = await getDocs(collection(db, "harmonizacao"))
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


