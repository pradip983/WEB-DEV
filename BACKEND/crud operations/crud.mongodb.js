use("CrudDb")


db.createCollection("courses");

// db.courses.insertOne({
    // name:"pradip",
    // salary:700000,
    // assignment:12,
    // project:45
// })

// let a = db.courses.find({name:"pradip"});

db.courses.updateOne({salary: 700000},{$set:{salary: 100}})


db.courses.deleteMany({salary:100});