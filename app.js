document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var agree = document.getElementById('agree').checked;
    if (!agree) {
        alert('Roziligingizni bildiring');
        return;
    }

    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Password va Confirm Password bir xil bo\'lishi kerak');
        return;
    }

    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;

    var table = document.getElementById('infoTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.textContent = name;
    cell2.textContent = surname;
    cell3.textContent = phone;
    cell4.textContent = email;

    document.getElementById('tableContainer').classList.remove('hidden');
    document.getElementById('userForm').reset();
});
