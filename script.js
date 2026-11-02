let products = [];



function loadProducts() {

    fetch("api.php")
    .then(response => response.json())
    .then(data => {

        products = data.graph;
        displayProducts(products);

    })
    .catch(error => {

        document.getElementById("productContainer").innerHTML =
        "<p>Unable to load products.</p>";

        console.log(error);

    });

}




function displayProducts(list) {

    let container = document.getElementById("productContainer");

    container.innerHTML = "";

    if (list.length == 0) {

        container.innerHTML = "<p>No products found.</p>";
        return;

    }

    for (let i = 0; i < list.length; i++) {

        let product = list[i];

        let card = document.createElement("article");

        card.className = "product-card";

        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>${product.description}</p>
            <p class="price">Rs. ${product.price}</p>
            <p class="stock">Stock: ${product.stock}</p>
        `;

        container.appendChild(card);

    }

}




document.getElementById("searchBox").addEventListener("input", function() {

    let search = this.value.toLowerCase();

    let result = products.filter(function(product) {

        return product.name.toLowerCase().includes(search) ||
               product.category.toLowerCase().includes(search);

    });

    displayProducts(result);

});


loadProducts();
