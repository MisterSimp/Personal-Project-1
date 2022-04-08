const tableEl = document.querySelector('table')
const tbodyEl = document.querySelector('tbody')
const form = document.querySelector('form')
const calculateEl = document.getElementById('calculate')

function addNewRow(e) {
    e.preventDefault();
    const month = document.getElementById('month').value;
    const rydePrice = document.getElementById('rydePrice').value;
    tbodyEl.innerHTML += `
    <tr>
        <td>${month}</td>
        <td>${rydePrice}</td>
        <td><button class='deleteBtn'>Delete</button></td>
    </tr>
    `
    updateTotal()
}

function updateTotal() {
    if (tableEl.rows.length == 1) {
        document.querySelector('h2').innerHTML = "Total Earned = 0"
    }
    var totalArr = []
    for (var i = 1; i < tableEl.rows.length; i++) {
        totalArr.push(parseInt(tableEl.rows[i].cells[1].innerHTML))
    }
    var total = totalArr.reduce((total, number) => {
        return total + number
    })
    document.querySelector('h2').innerHTML = 'Total Earned: ' + total
}

function onDeleteRow(e) {
    if (!e.target.classList.contains('deleteBtn')) {
        return;
    }
    const btn = e.target;
    btn.closest('tr').remove();

    updateTotal()
}


form.addEventListener('submit', addNewRow)
tableEl.addEventListener('click', onDeleteRow)
calculateEl.addEventListener('click', updateTotal)