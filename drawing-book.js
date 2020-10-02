function gradingStudents(grades) {
    // Write your code here

    var sorted = [];
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 38 && (grades[i] % 5) > 2) { 
            sorted.push(grades[i] + (5-grades[i] % 5));
        }
        else {
            sorted.push(grades[i]);
        }
    }

    return sorted;
}