const $ = (id) => document.getElementById(id);
const sections = {
    menu: $('restaurantMenu'),
    dateTime: $('dateTimeSection'),
    info: $('reservationInfoSection'),
    confirmation: $('confirmationMessage'),
};

const state = { restaurant: '' };

function show(...show) {
    Object.values(sections).forEach((el) => el.classList.toggle('hidden', !show.includes(el)));
}

document.querySelectorAll('.restaurantButton').forEach((btn) => {
    btn.addEventListener('click', () => {
        state.restaurant = btn.dataset.restaurant;
        show(sections.dateTime);
    });
});

$('enterButton').addEventListener('click', () => {
    const date = $('reservationDate').value;
    const time = $('reservationTime').value;
    if (!date || !time) return alert('Please select a valid date and time.');
    show(sections.info);
});

$('submitReservation').addEventListener('click', () => {
    const name = $('reservationName').value.trim();
    const email = $('reservationEmail').value.trim();
    const date = $('reservationDate').value;
    const time = $('reservationTime').value;

    if (!name || !email || !date || !time) return alert('Please fill in all fields.');

    $('confirmationDetails').innerHTML = `
        Reservation for <strong>${esc(name)}</strong><br>
        Restaurant: <strong>${esc(state.restaurant)}</strong><br>
        Date: <strong>${esc(date)}</strong><br>
        Time: <strong>${esc(time)}</strong><br>
        Email: <strong>${esc(email)}</strong>
    `;
    show(sections.confirmation);
});

$('backButton').addEventListener('click', reset);

function reset() {
    state.restaurant = '';
    ['reservationDate', 'reservationTime', 'reservationName', 'reservationEmail'].forEach(
        (id) => ($(id).value = ''),
    );
    show(sections.menu);
}

function esc(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}
