let cart = [];


// Add food to cart

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    document.getElementById("cart-count").innerText =
        cart.length;

    alert(name + " added to cart!");
}


// Show cart

function showCart() {

    const popup =
        document.getElementById("cart-popup");

    const items =
        document.getElementById("cart-items");

    const total =
        document.getElementById("cart-total");

    items.innerHTML = "";

    let totalPrice = 0;


    if (cart.length === 0) {

        items.innerHTML =
            "<p>Your cart is empty.</p>";

    }


    cart.forEach(function(item, index) {

        totalPrice += item.price;

        items.innerHTML += `

            <div class="cart-item">

                <span>
                    ${item.name}
                </span>

                <span>
                    ₹${item.price}
                </span>

            </div>

        `;

    });


    total.innerText = totalPrice;

    popup.style.display = "block";
}


// Close cart

function closeCart() {

    document.getElementById("cart-popup")
        .style.display = "none";

}


// Checkout

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }

    alert(
        "Order placed successfully! Thank you for ordering."
    );

    cart = [];

    document.getElementById("cart-count")
        .innerText = "0";

    closeCart();
}


// Contact form

function sendMessage() {

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const message =
        document.getElementById("message").value;


    if (
        name === "" ||
        email === "" ||
        message === ""
    ) {

        alert("Please fill all fields.");

        return;
    }


    alert(
        "Thank you " +
        name +
        "! Your message has been sent."
    );


    document.getElementById("name").value = "";

    document.getElementById("email").value = "";

    document.getElementById("message").value = "";

}
