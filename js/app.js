console.log('Hello World!!')
var courses = ['Algebra 1', 'Geometry', 'Algebra 2', 'Precalculus', 'Calculus'];
var description = ['Start off as a beginner, the fundamentals of all math above this.', 'This moderately hard course will leave you both in a state of "Oh!" and mesmerization.', 'A continuation of Algebra 1. Can you survive?', 'Oh wow, it\'s getting harder! Keep it up!', 'Seriously? You\'re taking this during high school? You must be very smart.'];
var cycletext = ['Over 37 million active users', 'Goes ']

for(var i = 0; i < courses.length; i++){
    var c = document.createElement('div');
    c.className = 'courseholder';
    c.innerHTML = '';
    document.getElementById('topPage').appendChild(c);
}

for(var i = 0; i < courses.length; i++){
    var n = document.createElement('p');
    n.className = 'coursename';
    n.innerHTML = courses[i];
    document.getElementsByClassName('courseholder')[i].appendChild(n);

    var d = document.createElement('p');
    d.className = 'coursedesc';
    d.innerHTML = description[i];
    document.getElementsByClassName('courseholder')[i].appendChild(d);
}