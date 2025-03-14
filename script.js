document.getElementById("accountForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let balance = document.getElementById("balance").value;
    
    if (balance < 500) {
        document.getElementById("message").innerHTML = "❌ Minimum balance should be ₹500!";
        document.getElementById("message").style.color = "red";
        return;
    }

    document.getElementById("message").innerHTML = `✅ Account created for ${fname} ${lname}!`;
    document.getElementById("message").style.color = "lightgreen";

    // Here, you can send the data to the backend via an API call (fetch/AJAX)
});
