import db from "../config/firebaseConnect"

import { collection, addDoc, getDocs, deleteDoc, doc, query, where,updateDoc } from 'firebase/firestore'
import { searchByAddress } from "../services/LocationService"


export const createWine = (dados, email, uuid4) => {
    return new Promise(async (resolve, reject) => {
        try {
            var coordenadas = await searchByAddress(dados.endereco)
            let lat = coordenadas.lat
            let lng = coordenadas.lng
            dados.lat = lat
            dados.lng = lng
            dados.email = email 
            dados.uuid4 = uuid4
            const docId = await addDoc(collection(db, "vinho"), dados)
            resolve(docId)
        } catch (error) {
            reject(error)
        }
    })
}

export const updateWine = (key, data) => {

    return new Promise(async (resolve, reject) => {
        var coordenadas = await searchByAddress(data.endereco)
        let lat = coordenadas.lat
        let lng = coordenadas.lng
        try {
            const dataUptade ={
                'ano':data.ano,
                'endereco':data.endereco,
                'nome_vinho':data.nome_vinho,
                'uva':data.uva,
                'vinicola':data.vinicola,
                'lat':lat,
                'lng':lng
            }
            const docRef = await updateDoc(doc(db, 'vinho', key) ,dataUptade)
        
            resolve(docRef)
        } catch (error) {
            console.log("Erro:", error)
            reject()
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



export const deleteWine = (key) => {
    console.log("Delete", key)
    return new Promise(async (resolve, reject) => {

        try {
            await deleteDoc(doc(db, "vinho", key))
            resolve()
        } catch (error) {
            console.log(error)
            reject()
        }
    })
}