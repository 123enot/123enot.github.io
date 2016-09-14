/* Who completed more tasks? */

var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

var champion = Object.keys(tasksCompleted)[0];
console.log('First element: ' + champion);

for (var student in tasksCompleted) {
    if (tasksCompleted[student] > tasksCompleted[champion]) {champion = student}
}

console.log('Champion is: ' + champion + ', ' + tasksCompleted[champion] + ' tasks!');