import db from "../config/firebaseConnect"

import { collection, addDoc, getDocs } from 'firebase/firestore'
import { searchByAddress } from "./LocationService"


export const createCoord = (endereco, vinicola) => {
    return new Promise(async (resolve, reject) => {
        try {
            var coordenadas = await searchByAddress(endereco)
            let lat = coordenadas.lat
            let lng = coordenadas.lng
            const dados = {
                "lat":lat,
                "lng":lng,
                "vinicola":vinicola
            }
            const docId = await addDoc(collection(db, "location"), dados)
            resolve(docId)
        } catch (error) {
            reject(error)
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
                console.log(data);
                registros.push(data)
            })
            resolve(registros)
        } catch (error) {
            console.log("Erro:", error)
            reject()
        }
    })
}


