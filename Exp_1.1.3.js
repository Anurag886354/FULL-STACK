let balance = 0;

function deposit() {
    let amount = document.getElementById("amount").value;

    if (amount > 0) {
        balance += Number(amount);
        document.getElementById("balance").innerText = balance;
        document.getElementById("message").innerText = "Deposited Successfully";
    } else {
        document.getElementById("message").innerText = "Enter a valid amount";
    }

    document.getElementById("amount").value = "";
}

function withdraw() {
    let amount = document.getElementById("amount").value;

    if (amount > 0 && amount <= balance) {
        balance -= Number(amount);
        document.getElementById("balance").innerText = balance;
        document.getElementById("message").innerText = "Withdrawn Successfully";
    } else if (amount > balance) {
        document.getElementById("message").innerText = "Insufficient balance";
    } else {
        document.getElementById("message").innerText = "Enter a valid amount";
    }

    document.getElementById("amount").value = "";
}


const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
});
