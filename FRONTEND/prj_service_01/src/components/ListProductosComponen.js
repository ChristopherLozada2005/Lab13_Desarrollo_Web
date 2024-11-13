import React, { useEffect, useState } from 'react';
import ProductoService from '../services/ProductoService';
import { Link } from 'react-router-dom';

export const ListProductosComponent = () => {
    const [productos, setProductos] = useState([]);

    useEffect(()=>{
        listarProductos()
    },[])

    const listarProductos = () =>{
        ProductoService.getAllProductos().then(response =>{
            setProductos(response.data);
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        });
    }

    const deleteProduto =(productoId) => {
        ProductoService.deleteProducto(productoId).then(response => {
            listarProductos();

        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className='container' style= {{ marginTop: '80px '}}>
            <h2 className='text-center'> Listado de Productos</h2>

            <Link to='/add-producto' className='btn btn-primary'>Agregar Producto</Link>

            <table className='table table-secoundary table-hover' style={{ marginTop: '20px'}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.map(producto => (
                            <tr key={producto.id}>
                                <td>{producto.id}</td>
                                <td>{producto.nombre}</td>
                                <td>{producto.precio}</td>
                                <td>{producto.stock}</td>
                                <td>
                                    <Link className='btn btn-info' to={`/edit-producto/${producto.id}`}>Actualizar</Link>
                                    <button style={{ marginLeft: "10px" }} className='btn btn-danger' onClick={() => deleteProduto(producto.id)}>Eliminar</button>
                                </td>
                            </tr>
                        ))
                            
                    }
                </tbody>
            </table>
        </div>
    )
}
export default ListProductosComponent;