let selectedTable = null;

document.querySelectorAll('.table').forEach(table => {
    table.addEventListener('click', () => {
        selectedTable = table.dataset.id;

        document.getElementById('bookingForm').classList.remove('hidden');
        document.getElementById('bookingForm').scrollIntoView({behavior: "smooth"});
    });
});

document.getElementById('bookingForm').addEventListener('submit', e => {
    e.preventDefault();
    alert("Стол #" + selectedTable + " сәтті брондалды!");
});

function openOrderModal(coffeeName) {
    document.getElementById('modalTitle').innerText = coffeeName;
    document.getElementById('orderModal').style.display = 'block';
}

function closeOrderModal() {
    document.getElementById('orderModal').style.display = 'none';
}

function placeOrder() {
    alert('Сіздің тапсырысыңыз қабылданды!');
    closeOrderModal();
}

// Модаль терезеден тыс жерге басқанда жабу
window.onclick = function(event) {
    if (event.target == document.getElementById('orderModal')) {
        closeOrderModal();
    }
}

