var bio = {
	name: "Pooja Mathur",
	role: "Front-end Ninja",
	contactInfo: {
		email: "pmathur2@gmail.com",
		address: "2349 N. 64th St. Seattle, WA 98103",
		phone: "224-532-3140",
		twitter: "ninjasan",
		github: "ninjasan",
		blog: "http://poojamathur.com",
	},
	pictureURL: "images/197x148.gif",
	welcomeMessage: "Welcome to my page!",
	skills: ["ninja", "javascripting", "cooking", "tae kwon do", "frisbee", "starting lots of projects at the same time"]
};

var work = {
	"jobs": 
	[
		{
			"position": "Program Manager",
			"employer": "Microsoft",
			"dates": "2009-present",
			"location": "Redmond, WA",
			"description": "I herded cats, wrote emails, scheduled meetings, fixed bugs, tested code, and shipped services. Now I'm writing queries and learning web development."
		},
		{
			"position": "Program Manager Intern",
			"employer": "Microsoft",
			"dates": "May 2008 - August 2008",
			"location": "Redmond, WA",
			"description": "I gathered requirements and wrote the spec for the gamertag recycle feature."
		},
		{
			"position": "Program Manager Intern",
			"employer": "Microsoft",
			"dates": "May 2007 - August 2007",
			"location": "Redmond, WA",
			"description": "I did all sorts of random projects and got a patent cube out of it."
		}
	]
};

var education = {
	"schools": [
		{
			"name": "University of Illinois @ Urbana-Champaign",
			"location": "Champaign-Urbana",
			"degree": "Bachelor of Science",
			"major": "Comuter Science",
			"dates": "2004-2009"
		},
		{
			"name": "University of Illinois @ Urbana-Champaign",
			"location": "Champaign-Urbana",
			"degree": "Master of Science",
			"major": "Comuter Science",
			"dates": "2007-2009"
		}
	],
	"onlineCourses": [
		{
			"class": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": "June 2015",
			"url": "https://www.udacity.com/"
		},
		{
			"class": "Javascript Basics",
			"school": "Udacity",
			"dates": "June 2015",
			"url": "https://www.udacity.com/"
		},
		{
			"class": "HTML & CSS",
			"school": "Codecademy",
			"dates": "June 2015",
			"url": "http://www.codecademy.com/learn"
		},
		{
			"class": "Javascript",
			"school": "Codecademy",
			"dates": "June 2015",
			"url": "http://www.codecademy.com/learn"
		},
		{
			"class": "jQuery",
			"school": "Codecademy",
			"dates": "June 2015",
			"url": "http://www.codecademy.com/learn"
		},
		{
			"class": "Python",
			"school": "Codecademy",
			"dates": "October 2014",
			"url": "http://www.codecademy.com/learn"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "DiscNW Interaction Infographic",
			"dates": "June 2015 - present",
			"description": "Taking the data from DiscNW, I'm going to learn d3.js and create an interactive infographic about the who plays frisbee.",
			"image": "http://placehold.it/300x200"
		}
	]
};

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLbioPic.replace("%data%", bio.pictureURL));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

if(bio.hasOwnProperty("skills"))
{
	$("#header").append(HTMLskillsStart);
	for(var i = 0; i < bio.skills.length; i++) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer) + HTMLworkTitle.replace("%data%", work.jobs[job].position));
	$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
	$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
	$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
}

$(document).click(function(loc) {
	logClicks(loc.pageX, loc.pageY);
});

/*
var workPos = HTMLworkTitle.replace("%data%", work["position"]);
var eduName = HTMLschoolName.replace("%data%", education.name);

$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(workPos);

$("#education").append(HTMLschoolStart);
$("#education").append(eduName);*/

