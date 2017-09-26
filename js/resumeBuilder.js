/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Sharifah Alamer",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+966533811444",
        "email": "alamersharifah@gmail.com",
        "github": "Sharifah91",
        "twitter": "@Sharifah_91",
        "location": "Alahsa, Saudi Arabia"
    },
    "welcomeMessage": "Self motivated web developer who always seeks to widen my knowledge and enrich my experience.",
    "skills": ["Graphic Design", "JavaScript", "HTML", "CSS"],
    "biopic": "images/logo2.png"
};

bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);


    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts, #footerContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts, #footerContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts, #footerContacts").append(formattedGithub);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts, #footerContacts").append(formattedTwitter);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts, #footerContacts").append(formattedLocation);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);

    function displaySkills() {


        $("#header:last").append(HTMLskillsStart);

        for (var skill = 0; skill < bio.skills.length; skill++) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#header").append(formattedSkills);
        }
    }
    displaySkills();


};

bio.display();


var education = {
    "schools": [{
            "name": "King Faisal University",
            "location": "Hofuf, Saudi Arabia",
            "degree": "Master's Degree",
            "majors": ["CIS", "CS"],
            "dates": "2014-2016"
        },
        {
            "name": "King Faisal University",
            "location": "Hofuf, Saudi Arabia",
            "degree": "Bachlor's Degree",
            "majors": ["CIS"],
            "dates": "2009-2013"
        }
    ],
    "onlineCourses": [{
            "title": "Joomla! 3",
            "school": "Lynda.com",
            "dates": "June 2017- July 2017",
            "url": "lynda.com"
        },
        {
            "title": "PHP 5",
            "school": "Lynda.com",
            "dates": "Aug 2017- July 2017",
            "url": "lynda.com"
        }
    ]
};

education.display = function() {
    for (var school = 0; school < education.schools.length; school++) {

        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(formattedSchoolName);

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);

        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedDegree);

        var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedMajors);

        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedSchoolDates);
    }

    function displayCourses() {
        $("#education").append(HTMLonlineClasses, HTMLschoolStart);

        for (var course = 0; course < education.schools.length; course++) {

            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
            $(".education-entry:last").append(formattedOnlineTitle);

            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            $(".education-entry:last").append(formattedOnlineSchool);

            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
            $(".education-entry:last").append(formattedOnlineDates);

            var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
            $(".education-entry:last").append(formattedOnlineURL);

        }
    }
    displayCourses();
};
education.display();



var work = {
    "jobs": [{
            "employer": "KFU",
            "title": "Teaching Assistant",
            "location": "Hofuf, Alahsa",
            "dates": "Nov 2017 - Current",
            "description": ""
        },
        {
            "employer": "KSAU-HS",
            "title": "Programmer",
            "location": "Mubarraz, Alahsa",
            "dates": "Nov 2013 - Oct 2017",
            "description": "Developing systems for the college use. \n Administering systems and providing support. \n Network and A/V systems setup in the classrooms and conference rooms. \n Troubleshooting and resolving PC problems."
        },
        {
            "employer": "Al Anjal National Schools",
            "title": "Computer Teacher",
            "location": "Hofuf, Alahsa",
            "dates": "Sept 2013 - Nov 2017",
            "description": "Teaching Computer subject in the American division to Grade 1, 3, 5 and 6 ."
        }
    ]
};

work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {

        $("#workExperience").append(HTMLworkStart);

        var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);


        $(".work-entry:last").append(formattedworkEmployer);
        $(".work-entry:last").append(formattedworkTitle);
        $(".work-entry:last").append(formattedworkLocation);
        $(".work-entry:last").append(formattedworkDates);
        $(".work-entry:last").append(formattedworkDescription);
    }
};
work.display();


var projects = {
    "projects": [{
            "title": "Research Database",
            "dates": "2016",
            "description": "for the research committee",
            "images": [
                "images/197x1481.gif",
                "images/project1b.png"
            ]
        },
        {
            "title": "CON-A Website",
            "dates": "2017",
            "description": "Website of College of Nursing- Alahsa",
            "images": [
                "images/project2b.png",
                "images/project2a.png"
            ]
        }
    ]
};

projects.display = function() {

    $("#projects").append(HTMLprojectStart);
    for (var project = 0; project < projects.projects.length; project++) {
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            //        for (image in projects.projects[project].images){
            for (var image = 0; image < projects.projects[project].images.length; image++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};
projects.display();



$("#mapDiv").append(googleMap);