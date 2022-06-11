import db from "../config/firebaseConnect"

import { collection, addDoc, getDocs, query, where } from 'firebase/firestore'
import { searchByAddress } from "../services/LocationService"

export const createCoord = (endereco, vinicola, uuid4) => {
    return new Promise(async (resolve, reject) => {
        try {
            var coordenadas = await searchByAddress(endereco)
            let lat = coordenadas.lat
            let lng = coordenadas.lng
            const dados = {
                "lat":lat,
                "lng":lng,
                "endereco":endereco,
                "vinicola":vinicola,
                "uuid4":uuid4
            }
            const docId = await addDoc(collection(db, "location"), dados)
            resolve(docId)
        } catch (error) {
            reject(error)
        }
    })
}



export const getCoordUnique = (uudi4) => {
    return new Promise(async (resolve, reject) => {
        try {
            const colecao = collection(db, "location")
            const q = query(colecao, where("uuid4", "==", uudi4))
            const querySnapshot = await getDocs(q)
            let registros = []
            querySnapshot.forEach((item) => {
                let data = item.data()
                data.id = item.id
                registros.push(data)
            })
            resolve(registros)
        } catch (error) {
            console.log("Erro:", error)
            reject()
        }
    })
}


export const getCoord = () => {

    return new Promise(async (resolve, reject) => {
        try {
            const querySnapshot = await getDocs(collection(db, "location"))
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


