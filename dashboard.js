// 1. Count the number of records in the "Current Quarter Details" table.

// ** could also use ('.table tbody tr') - using ALL because I want all the records in the count**
var numberOfRecords = document.querySelectorAll('tbody tr');
console.log(numberOfRecords.length);

// 2. Set each dashboard image to different images, one for each season. Make sure you also set the alt="" attribute with an appropriate description.

//** because queryselector turn them into an array **/

var images = document.querySelectorAll('img');
images[0].setAttribute('src', 'https://unsplash.it/300/300?image=971');
images[0].setAttribute('alt', 'Snowy Winter Image');

images[1].setAttribute('src', 'https://unsplash.it/300/300?image=976');
images[1].setAttribute('alt', 'Spring Tulips Image');

images[2].setAttribute('src', 'https://unsplash.it/300/300?image=791');
images[2].setAttribute('alt', 'Summer Hot Air Ballons');

images[3].setAttribute('src', 'https://unsplash.it/300/300?image=924');
images[3].setAttribute('alt', 'Fall Trees Image');


// 3. Below each dashboard image, there's a season/quarter name. Below those, there are three dots. Replace those three dots with a randomly generated number formatted as currency, like $12,589.00.
var currencies = document.querySelectorAll('.placeholders span');
 //* they are random so they can loop */
currencies.forEach(function(currency){
    var randomCurrency = Math.round(Math.random() *200000);
    currency.innerHTML = '$' + randomCurrency + '.00';
})
//** use a counting.format */


// 4. Change the currently selected left side menu item from Overview to Reports.
// ***header. t head
var navItems = document.querySelectorAll('.nav-sidebar li')

navItems[0].classList.remove('active')
navItems[1].classList.add('active')

// 5. Set the default search input value to "Q4 sales".
// **replacing the 0 with id
document.querySelector('.navbar-form input').value = 'Q4 sales'
//console.dir(document.querySelector('.navbar-form input'))
document.querySelector('.navbar-form input').setAttribute('value', 'Q4 sales')

// 6. Add the "table-hover" class to the table. See the Bootstrap table docs.
document.querySelector('table').classList.add('table-hover')

// 7. Add the "success" class to the 7th - 10th row of the table, like: <tr class="success">...</tr>
var rows = document.querySelectorAll('tbody tr')
rows.forEach((row, i) => {
    console.log(row)
    if (i >= 7 && i <= 10) {
        row.classList.add('warning')
    }
})

// 8. Change the table header names to: ID, First Name, Last Name, Department, Client.
var headers = document.querySelectorAll('thead th')
headers.forEach((header, index)=> {
    var headerLabels = ['ID', 'First Name', 'Last Name', 'Department', 'Client']
    header.innerHTML = headerLabels[index]
})

// 9. Make an array of objects, each object representing a single row in the table. Remove the commas from the ID column and convert it to an actual Number data type. Example: [{id: 1001, firstName: 'Lorem', lastName: 'ipsum', department: 'dolor', client: 'sit'}]

var arrayObjects = document.querySelectorAll('tbody tr')
arrayObjects = Array.from(arrayObjects).map(function(arrayObject) {
   return {
       id: Number(arrayObject.children[0].innerHTML.replace(',', '')),
       firstName: arrayObject.children[1].innerHTML,
       lastName: arrayObject.children[2].innerHTML,
       department: arrayObject.children[3].innerHTML,
       client: arrayObject.children[4].innerHTML,
   }
   rowOfObjects.push(rowOfObject) // push new objects into the array 
})

console.log(arrayObjects);
// what shows up in the console log is the data type
// ** an object is a collection of name, value, pairs 
// ** Another way to assign object properties 
var data = [];
var rows = document.querySelectorAll('tbody tr');

rows.forEach(function(row) {
    var object = {};
    object.id = Number(row.children[0].innerText.replace(',', ''));
    object.firstName = row.children[1].innerText;
    object.lastName = row.children[2].innerText;
    object.department = row.children[3].innerText;
    object.client = row.children[4].innerText;

    data.push(object); 
});


// 10. Make each word in the table capitalized.
document.querySelector('.table').classList.add('text-capitalize')


