let students = ["shubh", "shivani", "shivangi", "anjali", "annapurna", "shubham", "krishananendu", "ravindranathan", "shivesh", "kaif", "emanual"];

let houses = [];

for (const student of students) {
    if (student.length < 6) {
        houses.push("gryffinder")
    }

else if (student.length < 8) {
    houses.push("hufflepuff")
}

else if (student.length < 12) {
    houses.push("revenclaw")
}
else{
    houses.push("stytherin")
}

}

console.log(houses);