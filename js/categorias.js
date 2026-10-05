const modalProducto = document.getElementById('modalProducto');

modalProducto.addEventListener('show.bs.modal', (event) => {
    const producto = event.relatedTarget;

    document.getElementById('modalProductoTitulo').textContent = producto.dataset.productTitle;
    const categoria = document.getElementById('modalProductoCategoria');
    const categoriaClases = {
        'Libretas': ['bg-success-subtle', 'text-success-emphasis'],
        'Escritura': ['bg-warning-subtle', 'text-warning-emphasis'],
        'Organización': ['bg-primary-subtle', 'text-primary-emphasis']
    };

    categoria.textContent = producto.dataset.productCategory;
    categoria.classList.remove(
        'bg-secondary-subtle', 'text-secondary-emphasis',
        'bg-success-subtle', 'text-success-emphasis',
        'bg-warning-subtle', 'text-warning-emphasis',
        'bg-primary-subtle', 'text-primary-emphasis'
    );
    categoria.classList.add(...(categoriaClases[producto.dataset.productCategory] || ['bg-secondary-subtle', 'text-secondary-emphasis']));
    document.getElementById('modalProductoPrecio').textContent = producto.dataset.productPrice;
    document.getElementById('modalProductoDescripcion').textContent = producto.dataset.productDescription;

    const imagen = document.getElementById('modalProductoImagen');
    imagen.src = producto.dataset.productImage;
    imagen.alt = producto.dataset.productTitle;
});
