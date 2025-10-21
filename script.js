const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", function() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    let product = document.getElementById("product").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let notes = document.getElementById("special-notes").value;

    if (name === "") {
        alert("Please enter your name");
        return;
    }
    if (phone === "") {
        alert("Please enter your phone number");
        return;
    }
    if (email === "") {
        alert("Please enter your email");
        return;
    }
    if (product === "") {
        alert("Please select a product");
        return;
    }
    if (date === "") {
        alert("Please pick a pick up date");
        return;
    }
    if (time === "") {
        alert("Please confirm pick up time");
        return;
    }

    let emailBody = `New Order Form ${name}
    Phone: ${phone}
    Email: ${email}
    Product: ${product}
    Pickup Date: ${date}
    Pickup Time: ${time}
    Special Instructions: ${notes}`;
    window.location.href = `mailto:owner@bakery.com?subject=New Order from ${name}&body=${emailBody}`;
});
