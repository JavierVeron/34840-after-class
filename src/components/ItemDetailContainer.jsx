import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import ItemDetail from "./ItemDetail";
//import arrayProductos from "./json/arrayProductos.json";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();

    // Promesa que accede a una JSON con un Array de Objetos
    /* useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(arrayProductos.find(item => item.id === parseInt(id)));
            }, 2000);
        });

        promesa.then((data) => {
            setItem(data);
        })
    }, [id]); */

    // Consultar a Firestore por un ID
    useEffect(() => {
        const db = getFirestore();
        const documento = doc(db, "items", id);
        getDoc(documento).then((snapShot) => {
            if (snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data()});
            } else {
                console.log("Error! No se encontró el Documento!");
            }
        });
    }, []);

    return (
        <div className="container">
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer;