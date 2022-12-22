import React, { useState, useEffect } from "react";
import { addDoc, collection, getDocs, getFirestore, query, where, limit } from "firebase/firestore";
import { useParams} from "react-router-dom";
import ItemList from "./ItemList";
//import arrayProductos from "./json/arrayProductos.json";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    /* useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
            }, 2000)
        });

        promesa.then((data) => {
            setItems(data);
        })
    }, [id]); */

    // Inserto los Productos de mi JSON a FireStore
    /* useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
       
        arrayProductos.forEach((item) => {
            addDoc(itemsCollection, item);
        });
    }, []); */

    // Consultar la Collection de mis Productos
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        //const q = query(itemsCollection, where("precio", ">", 1500), limit(2)); //Filtro los Documento con una condición
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(q).then((snapShot) => {
            setItems(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})));
        });
    }, [id]);

    return (
        <div className="container py-5">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;