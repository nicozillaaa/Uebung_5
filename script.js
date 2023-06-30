function handleSubmit() {
  var name = document.getElementById('name').value;
  var date = document.getElementById('date').value;
  var address = document.getElementById('address').value;
  var pet = document.getElementById('pet').value;
  var check = document.getElementById('check').checked;

  var message =
    'Folgende Angaben wurden an uns übersandt:' +
    '\nIhr Name:' +
    name +
    '\nFür den Zeitraum:' +
    date +
    '\nAdresse:' +
    address +
    '\nReist ihr Haustier mit?' +
    pet +
    '\nVielen Dank für Ihre Anfrage.';

  alert(message);
}
