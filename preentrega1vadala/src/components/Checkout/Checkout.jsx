import React, { useContext, useState, useEffect } from 'react';
import { collection, addDoc, doc, getDoc, updateDoc, getFirestore } from 'firebase/firestore';
import { CartContext } from '../../context/CartContext';

const Checkout = () => {
    //RECOMIENDA REACT FOR
    //CAMPOS DEL FORMULARIO
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    //DATOS NECESARIOS DEL CONTEXT
    const { cart, total, cantidadTotal, clearCart } = useContext(CartContext)

    //SUBMIT
    const manejadorFormulario = (event) => {
        //EVITAMOS SE EJECUTE EL EVENTO SUBMIT, PARA QUE NO SE ACTUALIZE PAG.
        event.preventDefault()

        //MANEJOS DE ERRORES
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Completar todos los campos requeridos")
            return;
        }
        if (email !== emailConfirmacion) {
            setError("Los campos del email no coinciden")
            return;
        }

        //CREAMOS INSTANCIA DE BASE DE DATOS
        const db = getFirestore()

        //GENERAMOS OBJETO DE ORDEN DE COMPRA
        const orden = {
            items: cart.map((producto) => ({
                id: producto.producto.id,
                nombre: producto.producto.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }

        //GENERAMOS LOGICA PARA LA ORDEN Y REDUCCION DE STOCK
        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "Productos", productoOrden)
                const productoDoc = await getDoc(productoRef)
                const stockActual = productoDoc.data().stock

                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad
                })
            })
        )
            .then(() => {
                addDoc(collection(db, "ordenes"), orden)
                    .then((docRef) => {
                        setOrdenId(docRef.id);
                        clearCart()
                    })
                    .catch((error) => {
                        setError("Se produjo un error al crear la orden")
                    })
                    .catch((error) => {
                        setError("No se puede actualizar stock, intentelo mas tarde")
                    })
            })

    }

    return (
        //FORMULARIO

        <div>
            <h2>Ingresa tu formulario</h2>

            {
                cart.map((producto) => {
                    <div key={producto.producto.id}>
                        <p>
                            {producto.producto.nombre} x {producto.cantidad}
                        </p>
                        <p>
                            {producto.producto.precio}
                        </p>
                    </div>
                })
            }

            <form onSubmit={manejadorFormulario}>

                <div>
                    <label htmlFor="">Nombre</label>
                    <input type="text" onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Apellido</label>
                    <input type="text" onChange={(e) => setApellido(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Telefono</label>
                    <input type="number" onChange={(e) => setTelefono(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Email de Confirmacion</label>
                    <input type="email" onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>
                
                {error && <p style={{ color: "red" }}>{error}</p>}

                <button type='submit'>Comprar</button>

                {
                    ordenId && (
                        <p>
                            Gracias por adoptar una planta! Tu numero de Id: {ordenId}
                        </p>
                    )
                }

            </form>

        </div>


    );
};

export default Checkout;