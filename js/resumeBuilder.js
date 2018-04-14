/*
This is empty on purpose! Your code to build the resume will go here.
 */

 // $("#main").append("Billy Mitchell")

 // var formattedName = HTMLheaderName.replace("%data%", "Billy Mitchell")
 // var formattedRole = HTMLheaderRole.replace("%data%", "Software Developer")

 // $("#header").prepend(formattedRole)
 // $("#header").prepend(formattedName)

// var skills = ["just learning", "eager"];

var bio = {
    "name": "Billy Mitchell",
    "role": "Software Developer Apprentice",
    "welcomeMessage": "Hello World!",
    "biopic": "images/sftdev2.jpg",
    "contacts": {
        "mobile": "615-521-3237",
        "email": "bm8839@yahoo.com",
        "github": "bm8839",
        "location": "Nashville TN",
        "linkedin": "linkedin.com/in/billy-mitchell-5674a0132"
    },
    "skills": ["Udacity Nanodegrees", "Python", "JavaScript","PostgreSQL",
               "Java", "Google Maps", "Object Oriented Programming"]
};

var work = {
    "jobs": [
    {
        "employer": "AT&T",
        "title": "Manager Network Operations",
        "url": "https://www.att.jobs/",
        "location": "Nashville TN",
        "dates": "2001 to present",
        "description": "Began as Electronic Technician and then promoted to" +
                       " manage activities of AT&T's SS7 Switch maintenance" +
                       " group maintaining the AT&T TDM SS7 and Advanced" +
                       " Intelligent Network for the entire 21-state region." +
                       " Managed through advances in technology and" +
                       " automation to cut costs by more than 50 percent."
    },
    {
        "employer": "Great Lakes Window",
        "title": "Glass Operations Manager",
        "url": "http://greatlakeswindow.com/",
        "location": "Toledo OH",
        "dates": "1999-2001",
        "description": "Managed glass operations for window manufacturer" +
                       " with over $80 million in annual sales.  Responsible" +
                       " for the largest department with the most equipment" +
                       " and greatest amount of floor space.  Led over 75" +
                       " people in producing 3000 insulated glass units" +
                       " daily in a three-shift operation."
    },
    {
        "employer": "United States Air Force",
        "title": "Superintendent",
        "url": "https://www.airforce.com/careers/detail/bomber-special-"+
               "electronic-warfare-and-radar-surveillance-integrated-avionics",
        "location": "Little Rock AR",
        "dates": "1979-1999",
        "description": "Senior maintenance supervisor for 170 aircraft" +
                       " maintenance personnel from eight different Air" +
                       " Force skill specialties. Managed resources and" +
                       " directed production activities to ensure 14" +
                       " aircraft valued at $560 million were maintained at" +
                       " the highest state of readiness. Several years of" +
                       " hands-on electronics equipment troubleshooting and" +
                       " repair and managing high-pressure aircraft" +
                       " maintenance activities."
    }
  ]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var email = HTMLemail.replace("%data%", bio.contacts.email);
var welcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
var pic = HTMLbioPic.replace("%data%", bio.biopic);
var loc = HTMLlocation.replace("%data%", bio.contacts.location);
var linkedIn = HTMLlinkedIn.replace("%data%", bio.contacts.linkedin);
var gitHub = HTMLgithub.replace("%data%", bio.contacts.github);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(pic);
$("#topContacts").append(mobile);
$("#topContacts").append(email);
$("#topContacts").append(loc);
$("#footerContacts").append(mobile);
$("#footerContacts").append(email);
$("#footerContacts").append(linkedIn);
$("#footerContacts").append(gitHub);


// var work = {};
// work.current_job_position = "Network Operations Manager";
// work.current_job_employer = "AT&T";
// work.current_job_years = "16";
// work.current_job_city = "Nashville TN";

var education = {
    "schools": [
      {
        "name": "Southern Illinois University",
        "location": "Carbondale IL",
        "degree": "BS",
        "dates": "1996",
        "url": "http://engineering.siu.edu/tech/undergraduate/Industrial"+
               "-Management-and-Applied-Engineering/",
        "majors": ["Industrial Technology"]
      },
      {
        "name": "University of Arkansas",
        "location": "Fayetteville AR",
        "degree": "MS",
        "dates": "1998",
        "url": "https://operations-management.uark.edu/",
        "majors": ["Operations Management"]
      }
    ],
    "onlineCourses": [
      {
        "title": "Intro to Programming Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/intro-to-programming-"+
               "nanodegree--nd000"
      },
      {
        "title": "Full Stack Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://www.udacity.com/course/full-stack-web-developer"+
               "-nanodegree--nd004"
      },
      {
        "title": "Intro to JavaScript",
        "school": "Udacity",
        "dates": "2018",
        "url": "https://www.udacity.com/course/intro-to-javascript--ud803"
      },
      {
        "title": "Java Programming Basics",
        "school": "Udacity",
        "dates": "2018",
        "url": "https://www.udacity.com/course/intro-to-javascript--ud803"
      },
      {
        "title": "Object Oriented Programming in Java",
        "school": "Udacity",
        "dates": "2018",
        "url": "https://www.udacity.com/course/intro-to-javascript--ud803"
      }
      // {
      //   "title": "Intro to Algorithms ",
      //   "school": "Udacity",
      //   "dates": "2019",
      //   "url": "https://www.udacity.com/course/intro-to-javascript--ud803"
      // }
    ]
};

var projects = {
    "projects": [
      {
        "title": "Movie Trailer Website",
        "url": "http://ec2-18-217-253-59.us-east-2.compute.amazonaws.com/movie",
        "dates": "2016",
        "description": "Server-side code to store a list of movie titles," +
        " along with the respective box art imagery and movie's trailer." +
        " The code generates a static web page allowing visitors to browse" +
        " my favorite movies and watch the trailers.",
        "images": ["images/movie.jpg"]
      },
      {
        "title": "Project Portfolio",
        "url": "http://ec2-18-217-253-59.us-east-2.compute.amazonaws.com/portfolio",
        "dates": "2017",
        "description": "Static webpage with pictures, short descriptions," +
                       " and links to some projects I've completed.",
        "images": ["images/project3.jpg"]
    },
    {
        "title": "Catalog App",
        "url": "http://ec2-18-217-253-59.us-east-2.compute.amazonaws.com/catalog",
        "dates": "2017",
        "description": "This app provides a list of items within a variety" +
                       " of categories, as well as providing a user" +
                       " registration and authentication system using Google" +
                       " and Facebook. This app allows users to view items" +
                       " in a catalog. If they use their Google or Facebook" +
                       " credentials to login, they can add, edit, or delete" +
                       " items in the catalog.",
        "images": ["images/catalog3.jpg"]
    },
    {
        "title": "Google Map Project",
        "url": "http://ec2-18-217-253-59.us-east-2.compute.amazonaws.com/map",
        "dates": "2017",
        "description": "This App allows users to view all Major League" +
                       " Baseball team locations on a Google Map of the U.S." +
                       " When the team's map marker is clicked, a Google" +
                       " StreetView image opens. The App also presents" +
                       " Wikipedia articles about the team when the team is" +
                       " selected from a list.",
        "images": ["images/map2.jpg"]
    },
    {
        "title": "Multi User Blog",
        "url": "https://multi-user-blog-170319.appspot.com",
        "dates": "2017",
        "description": "This is an app that allows users to enter blog posts" +
                       " after establishing an account. Users can return to" +
                       " the app to read the blog and merely log back in to" +
                       " post and comment on or like other's posts.",
        "images": ["images/blog1.jpg"]
    },
    {
        "title": "Linux Server Configuration",
        "url": "https://github.com/bm8839/Catalog/tree/server",
        "dates": "2018",
        "description": "This project takes a baseline installation of a" +
                       " Linux server on Amazon Lightsail and prepares it to" +
                       " host a web application.",
        "images": ["images/server.jpg"]
    }
  ]
};

//education["last_school_name"] = "Udacity";
//education["last_school_years"] = "2016-2018";
//education["last_school_city"] = "Online";

// var position = HTMLworkStart.replace("%data%", work["current_job_position"]);
// var last_school_name = HTMLschoolStart.replace("%data%", education.last_school_name);

// $("#workExperience").append(position);
// $("#education").append(last_school_name);

if (bio.skills) {
    $("#header").append(HTMLskillsStart);
    var x = 0;
    while (bio.skills[x]) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[x]);
      $("#skills").append(formattedSkill);
    x += 1;
    };

};

function displayWork() {
    work["jobs"].forEach(function(job) {
        // create new div for each work experience
        $("#workExperience").append(HTMLworkStart);
        // format the object variables
        var formattedEmployer = HTMLworkEmployer.replace("%data%",
                                job.employer).replace("#", job.url);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedLocation = HTMLworkLocation.replace("%data%",
                                job.location);
        var formattedDescription = HTMLworkDescription.replace("%data%",
                                   job.description);
        // console.log(formattedEmployer + formattedTitle);
        // put the formatted variables into the div
        $(".work-entry:last").append(formattedEmployer + formattedTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);

    });
};

displayWork();

// $("#main").append(internationalizeButton);

// function inName(name) {
//     var names = name.split(" ");
//     names[0] = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
//     names[1] = names[1].toUpperCase();
//     var iName = names.join(" ");
//     console.log(iName);
//     console.log(bio.name);
//     return iName
// };

projects.display = function() {
    projects["projects"].forEach(function(project) {
        // create new div for each project
        $("#projects").append(HTMLprojectStart);
        // format the object variables
        var formattedTitle = HTMLprojectTitle.replace("%data%",
                             project.title).replace("#", project.url);
        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%",
                                   project.description);
        var formattedImage = HTMLprojectImage.replace("%data%", project.images);
        // put the formatted variables into the div
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);
        $(".project-entry:last").append(formattedImage);
    });
};

projects.display();

function displayEducation () {
    education["schools"].forEach(function(school) {
        // create a div for each school
        $("#education").append(HTMLschoolStart);
        // format the object variables
        var formattedName = HTMLschoolName.replace("%data%",
                            school.name).replace("#", school.url);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%",
                                school.location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
        // append formatted variables to the div
        $(".education-entry:last").append(formattedName);
        $(".education-entry:last").append(formattedDegree);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedMajor);
    });
    $("#education").append(HTMLonlineClasses);
    education["onlineCourses"].forEach(function(course) {
        // create a div for each course
        $("#online").append(HTMLonlineStart);
        // format the object variables
        var formattedTitle = HTMLonlineTitle_School.replace("%data%",
                             course.title).replace("#",
                             course.url).replace("%data1%", course.school);
        // var fromattedSchool = HTMLonlineSchool.replace("%data%", course.school);
        var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
        var formattedUrl = HTMLonlineURL.replace("%data%", course.url);
        // append formatted variables to the HTML page
        // $(".online-entry:last").prepend(fromattedSchool);
        $(".online-entry:last").append(formattedTitle);

        $(".online-entry:last").append(formattedDates);
        // $(".online-entry:last").append(formattedUrl);
    });
};

displayEducation();

$("#mapDiv").append(googleMap);