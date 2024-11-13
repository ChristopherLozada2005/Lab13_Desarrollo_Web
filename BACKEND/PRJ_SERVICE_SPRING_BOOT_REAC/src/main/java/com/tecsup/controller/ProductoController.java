package com.tecsup.controller;

import com.tecsup.Exception.ResourceNotFoundException;
import com.tecsup.model.Producto;
import com.tecsup.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1")

public class ProductoController {

    @Autowired
    private ProductoRepository productoRepository;

    @GetMapping("productos")
    public List<Producto> ListarProductos() {
        return productoRepository.findAll();
    }

    @PostMapping("/productos")
    public Producto guardarProducto(@RequestBody Producto producto) {
        return productoRepository.save(producto);
    }

    @GetMapping("/productos/{id}")
    public ResponseEntity<Producto> ListarProductoPorId(@PathVariable long id){
        Producto producto = productoRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("El Producto no existe"+ id));
        return ResponseEntity.ok(producto);
    }

    @PutMapping("/productos/{id}")
    public ResponseEntity<Producto> ActualizarProducto(@PathVariable long id, @RequestBody Producto productoRequest){
        Producto producto = productoRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("El Producto no existe"+ id));

        producto.setNombre(productoRequest.getNombre());
        producto.setPrecio(productoRequest.getPrecio());
        producto.setStock(productoRequest.getStock());

        Producto productoActualizado= productoRepository.save(producto);
        return ResponseEntity.ok(productoActualizado);
    }

    @DeleteMapping("/productos/{id}")
    public ResponseEntity<Map<String, Boolean>> EliminarCliente(@PathVariable long id){
        Producto producto = productoRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("El Producto no existe"+ id));

        productoRepository.delete(producto);
        Map<String, Boolean> response = new HashMap<>();
        response.put("eliminado", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
