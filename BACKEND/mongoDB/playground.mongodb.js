
use('mongodbVSCodePlaygroundDB');

// Insert a few documents into the sales collection.
db.getCollection('data').insertMany([
    { "name": "pradip", "salary": 700000, "instructor": "pradip" },
    { "name": "pradip", "salary": 750000, "instructor": "pradip" },
    { "name": "pradip", "salary": 710000, "instructor": "pradip" },
    { "name": "pradip", "salary": 720000, "instructor": "pradip" },
    { "name": "pradip", "salary": 730000, "instructor": "pradip" },
    { "name": "pradip", "salary": 740000, "instructor": "pradip" },
    { "name": "pradip", "salary": 760000, "instructor": "pradip" },
    { "name": "pradip", "salary": 770000, "instructor": "pradip" },
    { "name": "pradip", "salary": 780000, "instructor": "pradip" },
    { "name": "pradip", "salary": 790000, "instructor": "pradip" }

]);

// Print a message to the output window.
console.log(`insert is done`);

