const modalProducto = document.getElementById('modalProducto');

modalProducto.addEventListener('show.bs.modal', (event) => {
    const producto = event.relatedTarget;

    document.getElementById('modalProductoTitulo').textContent = producto.dataset.productTitle;
    document.getElementById('modalProductoCategoria').textContent = producto.dataset.productCategory;
    document.getElementById('modalProductoPrecio').textContent = producto.dataset.productPrice;
    document.getElementById('modalProductoDescripcion').textContent = producto.dataset.productDescription;

    const imagen = document.getElementById('modalProductoImagen');
    imagen.src = producto.dataset.productImage;
    imagen.alt = producto.dataset.productTitle;
});
