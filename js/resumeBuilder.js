// Populate Bio Data //
var bio = {
	"name": "Taylor Utecht",
	"role": "Senior Applications Developer",
	"image": "images/fry.jpg",
	"contacts": {
		"mobile": "919-536-2954",
		"email": "utecht.taylor@gmail.com",
		"twitter": "N/A",
		"github": "tutecht",
		"location": "Research Triangle Park, NC"
	},
	"welcomeMessage": "Welcome to My Page!",
	"skills":[
		"Jquery",
		"Front End web Development",
		"Perl",
		"MySQL",
		"HTML"
	],
	"display" : function() {
		// Adding Bio to index.html //
		var bioRole = HTMLheaderRole.replace("%data%",bio.role);
		$("#header").prepend(bioRole);

		var bioName = HTMLheaderName.replace("%data%",bio.name);
		$("#header").prepend(bioName);

		var bioWelcomeMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
		$("#header").append(bioWelcomeMessage);

		var bioPic = HTMLbioPic.replace("%data%",bio.image)
		$("#header").append(bioPic);

		var bioMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
		$("#topContacts").append(bioMobile);
		$("#footerContacts").append(bioMobile);

		var bioEmail = HTMLemail.replace("%data%",bio.contacts.email);
		$("#topContacts").append(bioEmail);
		$("#footerContacts").append(bioEmail);

		var bioTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
		$("#topContacts").append(bioTwitter);
		$("#footerContacts").append(bioTwitter);

		var bioGitHub = HTMLgithub.replace("%data%",bio.contacts.github);
		$("#topContacts").append(bioGitHub);
		$("#footerContacts").append(bioGitHub);

		var bioLocation = HTMLlocation.replace("%data%",bio.contacts.location);
		$("#topContacts").append(bioLocation);
		$("#footerContacts").append(bioLocation);

		$("#header").append(HTMLskillsStart);
		for(skill in bio.skills){
			var bioSkill = HTMLskills.replace("%data%",bio.skills[skill]);
			$("#skills").append(bioSkill);
		}

		// Lets get the skills to match the template page onlne //
		// This makes the each skill on its own line and not next to each other as shown in the example //
		$("#skills").css('display','block');		
	}
};	

// Populate Work Expeirence Data //
var work = {
	"experience": [{
	"employer": "AT&T",
	"title": "Senior Applications Developer",
	"location": "Research Triangle Park, NC",
	"dates": "May 2009 to Present",
	"description": "Software and web developer."
	},
	{
	"employer": "Randazzo Builders",
	"title": "Network Manager",
	"location": "Sorrento, FL",
	"dates": "July 2008 to May 2009",
	"description": "Managed all IT functions."
	}],
	"display" : function() {
		// Iterate though each job and append to HTML //
		for(job in work.experience){

			$("#workExperience").append(HTMLworkStart);
			
			var workEmployer = ((HTMLworkEmployer.replace("%data%",work.experience[job].employer)) + ( HTMLworkTitle.replace("%data%",work.experience[job].title)));
			$(".work-entry:last").append(workEmployer);

			var workDates = HTMLworkDates.replace("%data%",work.experience[job].dates);
			$(".work-entry:last").append(workDates);

			var workLocation = HTMLworkLocation.replace("%data%",work.experience[job].location);
			$(".work-entry:last").append(workLocation);

			var workDescription = HTMLworkDescription.replace("%data%",work.experience[job].description);
			$(".work-entry:last").append(workDescription);
		}
	}
};

// Populate Project Data //
var projects = {
	"projects": [
			{
			"title": "Project 1",
			"dates": "Today",
			"decription": "The project for Today",
			"image": "images/number_one.jpg"
			},
			{
			"title": "Project 2",
			"dates": "Yesterday",
			"decription": "The project for Yesterday",
			"image": "images/number_two.jpg"
			}
		],
		"display": function() {
			// Adding Projects to index.html //
				for(project in projects.projects){

					$("#projects").append(HTMLprojectStart);
					
					var projectsTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
					$(".project-entry:last").append(projectsTitle);

					var projectsDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
					$(".project-entry:last").append(projectsDates);

					var projectsDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].decription);
					$(".project-entry:last").append(projectsDescription);
					
					var projectsImage = HTMLprojectImage.replace("%data%",projects.projects[project].image);
					$(".project-entry:last").append(projectsImage);
				}			
		
		}
};

// Populate Education Data //
var education = {
	"schools": [
	{
		"name":"DeVry University",
		 "location": "Orlando, FL",
		 "degree": "Bachelors Degree",
		 "major": "Network and Communications Management",
		 "attended": "July 2005 - June 2008",
		 "URL": "http://www.devry.edu/"
	 }
	],
	"onlinecourses": [
	{
		"name": "Udacity",
		"location" : "Online Curriculum",
		"degree": "Nanodegree",
		"major": "Front End Web Developer",
		"attended": "October 2014 - Present",
		"URL": "https://www.udacity.com"
	}
	],
	"display": function () {
		$("#education").append(HTMLschoolStart);
		for(school in education.schools){
			var educationSchool = ((HTMLschoolName.replace("%data%",education.schools[school].name)) + ( HTMLschoolDegree.replace("%data%",education.schools[school].degree)));
			$(".education-entry:last").append(educationSchool);
			
			var educationSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].attended);
			$(".education-entry:last").append(educationSchoolDates);
			
			var educationSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
			$(".education-entry:last").append(educationSchoolLocation);
			
			var educationSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
			$(".education-entry:last").append(educationSchoolMajor);
		}

		$("#education").append(HTMLonlineClasses);
		$("#education").append(HTMLschoolStart);
		for(school in education.onlinecourses){
			var educationSchool = ((HTMLonlineTitle.replace("%data%",education.onlinecourses[school].major)) + ( HTMLschoolDegree.replace("%data%",education.onlinecourses[school].name)));
			$(".education-entry:last").append(educationSchool);
			
			var educationSchoolDates = HTMLonlineDates.replace("%data%",education.onlinecourses[school].attended);
			$(".education-entry:last").append(educationSchoolDates);
			
			var educationSchoolLocation = HTMLschoolLocation.replace("%data%",education.onlinecourses[school].location);
			$(".education-entry:last").append(educationSchoolLocation);
			
			var educationSchoolMajor = HTMLschoolMajor.replace("%data%",education.onlinecourses[school].major);
			$(".education-entry:last").append(educationSchoolMajor);
			
			var educationSchoolURL = HTMLonlineURL.replace("%data%",education.onlinecourses[school].URL);
			$(".education-entry:last").append(educationSchoolURL);	
		}		
	
	}
};


//Lets create a function to do all the displays
function runDisplayFuncs(){
	// Now to Add Work to index.html //
	work.display();
	// Now to Add Projects to index.html //
	projects.display();
	// Now to Add Bio to index.html //
	bio.display();
	// Now to Add Education to index.html //
	education.display();
}

// Run displays
runDisplayFuncs();

// Adding Google Map //
$("#mapDiv").append(googleMap);