const form = document.querySelector('form');
const tbodyEl = document.querySelector('tbody')
const tableEl = document.querySelector('table')
const calculateEl = document.getElementById('calculate')
function onAddWebsite(e) {
    e.preventDefault();
    const tuition = document.getElementById('tuition').value;
    const month = document.getElementById('month').value;
    const hours = document.getElementById('hours').value;
    const rates = document.getElementById('rates').value;
    tbodyEl.innerHTML += `
        <tr>
            <td>${tuition}</td>
            <td>${month}</td>
            <td>${hours}</td>
            <td>${rates}</td>
            <td>${hours * rates}</td>
            <td><button class='deleteBtn'>Delete</button></td>
        </tr >
        `
    updateTotal()
}

function onDeleteRow(e) {
    if (!e.target.classList.contains('deleteBtn')) {
        return;
    }
    const btn = e.target;
    btn.closest('tr').remove();

    updateTotal()
}

function updateTotal() {
    if (tableEl.rows.length == 1) {
        document.querySelector('h2').innerHTML = "Total Earned = 0"
    }
    var totalArr = []
    const monthFilterEl = document.getElementById('monthFilter').value;
    if (monthFilterEl === 'None') {
        for (var i = 1; i < tableEl.rows.length; i++) {
            totalArr.push(parseInt(tableEl.rows[i].cells[4].innerHTML))
        }
    } else {
        for (var i = 1; i < tableEl.rows.length; i++) {
            if (tableEl.rows[i].cells[1].innerHTML === monthFilterEl) {
                totalArr.push(parseInt(tableEl.rows[i].cells[4].innerHTML))
            }
        }
    }
    var total = totalArr.reduce((total, number) => {
        return total + number;
    })
    document.querySelector('h2').innerHTML = "Total Earned = " + total
}

form.addEventListener('submit', onAddWebsite)
tableEl.addEventListener('click', onDeleteRow)
calculateEl.addEventListener('click', updateTotal)