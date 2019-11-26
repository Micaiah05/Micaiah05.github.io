console.log('Hello World!!')
var courses = ['Algebra 1', 'Geometry', 'Algebra 2', 'Precalculus', 'Calculus'];
var description = ['Start off as a beginner, the fundamentals of all math above this.', 'This moderately hard course will leave you both in a state of "Oh!" and mesmerization.', 'A continuation of Algebra 1. Can you survive?', 'Oh wow, it\'s getting harder! Keep it up!', 'Seriously? You\'re taking this during high school? You must be very smart.'];
var cycleText = [];
var algebra1 = [{name: 'Intro to Algebra 1', web: 'https://scratchstats.com/steeldragon3000'}, {name: 'PEMDAS', web: 'https://wormax2.io'}, {name: 'Linear functions', web: 'https://paper.io'}, {name: 'Basic equation solving', web: 'https://socialblade.com/youtube/user/corycotton'}, {name: 'Basic inequality solving', web: 'https://scratchstats.com/griffpatch'}, {name: 'Histograms, scatterplots, and other graphs', web: 'https://teams.microsoft.com/_#/school/conversations/General?threadId=19:2aa10bef5c3e411e8fca6963f78b4087@thread.skype&ctx=channel'}, {name: 'Systems of linear equations and inequalities', web: 'https://hole.io'}, {name: 'Exponential graphs', web: 'https://scratch.mit.edu'}, {name: 'Exponential equations and inequalities', web: 'https://www.office.com/launch/word?ui=en-US&rs=US&auth=2'}];
var geometry = [{name: 'Intro to Geometry', web: 'https://micaiah05.github.io'}, {name: 'Points, lines, and planes', web: 'https://127.0.0.1.8080'}, {name: 'Logic statements', web: 'https://codepen.io/thecoderguy'}, {name: 'Postulates and proofs', web: 'https://teams.microsoft.com/_#/school/conversations/General?threadId=19:fad7d1c9fb4a485da3d79583b820c3a6@thread.skype&ctx=channel'}, {name: 'Postulates and proofs', web: 'khanacademy.org/profile/dangobrothers'}, {name: 'Two column proofs', web: 'https://scratch.mit.edu/users/dangobrothers'}, {name: 'Proving triangles congruent', web: 'https://scratch.mit.edu/projects/104'}, {name: 'Similar triangles', web: 'https://scratch.mit.edu/projects/328670074'}, {name: 'Applications of circles', web: 'https://scratch.mit.edu/projects/248509549'}, {name: 'Applications of triangles', web: 'https://scratch.mit.edu/users/me10lulu7'}, {name: 'Surface area and volume', web: 'https://scratch.mit.edu/users/sco20'}];
var precalculus = [{name: 'Introduction to precalculus', web: 'https://scratchstats.com/will_wam'}, {name: 'Twelve basic functions', web: 'https://scratch.mit.edu/messages'}, {name: 'Real zeroes of functions', web: 'https://maryknollschool.myschoolapp.com'}, {name: 'Graphing rational functions', web: 'https://un.org'}, {name: 'Transcendental functions', web: 'https://about:blank#blocked'}, {name: 'Solving exponential and logarithmic equations', web: 'https://scratchstats/com/pandakun'}, {name: 'Applications of transcendental functions', web: 'https://scratch.mit.edu/users/jetpac'}, {name: 'Trigonometry', web: 'https://scratch.mit.edu/users/ceebee'}, {name: 'Applications of trigonometry', web: 'https://youtube.com'}, {name: 'Polar coordinates', web: 'https://socialblade.com/youtube/user/pewdiepie'}, {name: 'Converging and diverging sequences', web: 'https://socialblade.com/youtube/user/termcr7'}, {name: 'Limits', web: 'https://scratchstats.com/nicopy'}, {name: 'Introduction to derivatives', web: 'https://scratch.mit.edu/statistics'}];

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

for(var i = 0; i < courses.length; i++){
    var courseholderlinks = document.createElement('p');
    courseholderlinks.className = 'linkscontainer';
    document.getElementsByClassName('courseholder')[i].appendChild(courseholderlinks);
}

for(var i = 0; i < algebra1.length; i++){
    var l = document.createElement('A');
    l.className = 'algebra1';
    var innerLink = document.createTextNode(algebra1[i].name);
    l.setAttribute('href', algebra1[i].web);
    l.appendChild(innerLink);
    document.getElementsByClassName('linkscontainer')[0].appendChild(l);
}

for(var i = 0; i < geometry.length; i++){
    var l = document.createElement('A');
    l.className = 'geometry';
    var innerLink = document.createTextNode(geometry[i].name);
    l.setAttribute('href', geometry[i].web);
    l.appendChild(innerLink);
    document.getElementsByClassName('linkscontainer')[1].appendChild(l);
}

for(var i = 0; i < precalculus.length; i++){
    var l = document.createElement('A');
    l.className = 'precalculus';
    var innerLink = document.createTextNode(precalculus[i].name);
    l.setAttribute('href', precalculus[i].web);
    l.appendChild(innerLink);
    document.getElementsByClassName('linkscontainer')[3].appendChild(l);
}