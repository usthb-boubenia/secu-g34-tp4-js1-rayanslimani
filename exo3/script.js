"use strict";

// (slide 38) array of student objects
const students = [
  {
    id: 1000,
    firstName: "JOHN",
    lastName: "DOE",
    note1: 14,
    note2: 5,
  },
  {
    id: 2000,
    firstName: "BOB",
    lastName: "CARLTON",
    note1: 7,
    note2: 1,
  },
  {
    id: 3000,
    firstName: "RAYANE",
    lastName: "SMITH",
    note1: 13,
    note2: 3,
  }
];

// (slide 48) main function called on button click
function deliberation() {
  // (slide 44) loop through students
  for (const student of students) {
    const moyenne = (student.note1 + student.note2) / 2 + 5; 
    const passed = verifierNote(moyenne);

    // (slide 40) DISPLAY RESULTS WITH CONDITION IF-ELSE
    if (passed) {
      console.log(`${student.id} : Admis `);
    } else {
      console.log(`${student.id} : Ajourné `);
    }
  }
}

// (slide 48) FUNCTION WITH PARAMETERS 
// (slide 43) SIMPLE RETURNING FUNCTION WITH CONDITION
function verifierNote(moyenne) {
  return moyenne >= 10;
}
