
// add api key and spreadsheet ID
// make sure google sheets API is enabled
// https://support.google.com/googleapi/answer/6158862?hl=en

var API_KEY = 'AIzaSyCt5PXNCUR8oaTxgSTzePYPJYQCTRFo0hw';
var SPREADSHEET_ID = '14rYfDa4N1O4m-ZFUuxlgXp175OGvkxBGjUNSolI4Ei4';
var SHEET_NAME = 'responses 1';


// get spreadsheet data... NO EDITING, SOPHIA. DON'T DO IT. I KNOW YOU WANT TO BUT NO.

var response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${ SPREADSHEET_ID }/values/${ SHEET_NAME }?alt=json&key=${ API_KEY }`);
var data = await response.json();
var [header, ...rows] = data.values;
var entries = rows.map(row => Object.fromEntries(header.map((key, i) => [key.toLowerCase(), row[i] || ""])));


// log entries to the console

console.log(entries);

// get the entries container
var entriesContainer = document.querySelector('.entries');

// add the entries 
entries.forEach((entry) => {

    // log the entry to the console
    console.log (entry);

    // add entry to the entires container
    entriesContainer.innerHTML += `
        <li class="entry"> 
            <h2 class="entry-name">${ entry.name }</h2>
            <p class="entry-comment">${ entry.message } </p>
        </li>
    `;

});