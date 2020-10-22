(function (angular) {
    'use strict';
    var app=angular.module("Gurukool",['ngRoute','LocalStorageModule']);
		
    app.config(function($routeProvider,localStorageServiceProvider){
        localStorageServiceProvider.setStorageType('localStorage');
        
        $routeProvider
        .when("/",
            {
                templateUrl  : "/app/component/home.html",
                controller: 'HomeController'
            })
        .when("/privacy_policy",
            {
                templateUrl  : "/app/component/privacy_policy.html",
                controller: 'PrivacyController'
            })
            .when("/terms",
            {
                templateUrl : "/app/component/terms.html",
                controller: 'TermsController'
            })
            .when("/teacherRegistration",
            {
                templateUrl : "/app/component/teacher.html",
                controller: 'teacherRegistrationController'
            })
            .when("/teacherRegistration2",
            {
                templateUrl : "/app/component/teacher2.html",
                controller: 'teacherRegistrationController'
            })
            .when("/studentRegistration",
            {
                templateUrl : "/app/component/Student.html",
                controller: 'studentRegistrationController'
            })
            .when("/studentRegistration2",
            {
                templateUrl : "/app/component/student2.html",
                controller: 'studentRegistrationController'
            })
            .when("/instituteRegistration",
            {
                templateUrl : "/app/component/institute.html",
                controller: 'instituteRegistrationController'
            })
            .when("/instituteRegistration2",
            {
                templateUrl : "/app/component/institute2.html",
                controller: 'instituteRegistrationController'
            })
            .when("/teacherDashProfile",
            {
                templateUrl : "/app/component/dashboard/teacher_dashboard.html",
                controller: 'teacherProfileController'
            })
            .when("/studentDashProfile",
            {
                templateUrl : "/app/component/dashboard/student_dashboard.html",
                controller: 'studentProfileController'
            })
            .when("/instituteDashProfile",
            {
                templateUrl : "/app/component/dashboard/institute_dashboard.html",
                controller: 'instituteProfileController'
            })
            .when("/faq",
            {
                templateUrl : "/app/component/faq.html",
                controller: 'FaqController'
            });

    });
}(window.angular));

(function (angular) {
    'use strict';
    var app = angular.module("Gurukool")

    .controller("GKAppController", ['$scope' , '$rootScope' , '$location' , '$anchorScroll', function($scope , $rootScope ,$location, $anchorScroll){

    $scope.scrollAbout =function(id){
        $location.hash(id);
        $anchorScroll();
    }

    $scope.userType = 
    [
        "Teacher" , "Student"                  
    ]

    $scope.boardType = 
    [
        "C.B.S.E Board" , "I.C.S.E Board" , "State Board"                  
    ]

    $scope.classType = 
    [
        "V" , "VI" , "VII" , "B.E" , "B.Sc"                 
    ]

    $scope.subjectType = 
    [
        "PHYSICS" , "CHEMISTRY" , "BIOLOGY" , "MATHs"                  
    ]

    $scope.userSearchButton = function(){
        console.log($sscope.user.board)
    }

    }])

    .controller("HomeController", ['$scope' , '$rootScope' , function($scope , $rootScope ){} ] )

    .controller("FaqController", ['$scope' , '$rootScope' , function($scope , $rootScope ){} ] )

    .controller("teacherRegistrationController", ['$scope' , '$rootScope' , function($scope , $rootScope ){
        $scope.regTeacherBoard =
        [
            "C..B.S.E" , "ISCE" , "State Board"
        ]
        
        $scope.regTeacherClass =
        [
            "V" , "VI" , "VII"
        ]
        
        $scope.regTeacherSubject =
        [
            "Maths" , "Computer" , "Science"
        ]
        
        $scope.regTeacherMode =
        [
            "Month" , "Year" , "Per Class"
        ]

        $scope.regTeacherSubmit = function(){
            console.log("Teacher has clicked register submit button");
        }

    } ] )

    .controller("studentRegistrationController", ['$scope' , '$rootScope' , function($scope , $rootScope ){
        $scope.regStudentBoard =
        [
            "C..B.S.E" , "ISCE" , "State Board"
        ]
        
        $scope.regStudentClass =
        [
            "V" , "VI" , "VII"
        ]
        
        $scope.regStudentSubject =
        [
            "Maths" , "Computer" , "Science"
        ]
        
        $scope.regStudentMode =
        [
            "Month" , "Year" , "Per Class"
        ]

        $scope.regStudentSubmit = function(){
            console.log("Student has clicked register submit button");
        }

    } ] )

    .controller("instituteRegistrationController", ['$scope' , '$rootScope' , function($scope , $rootScope ){
        $scope.regInstituteSubmit = function(){
            console.log("Institute has clicked on submit button");
        }

    } ] )
     
    .controller("teacherProfileController", ['$scope' , '$rootScope','localStorageService','$location' , '$window' ,  function($scope , $rootScope,localStorageService,$location ,$window){
        /*##################*/
        //Profile Controller//
        /*##################*/

        $scope.stars=['1','2','3','4','5'];

        $scope.logOut=function(){
            $location.path('/');
            localStorageService.remove('logged');
            $window.scrollTo(0,0);
        }

        $scope.saveTeacherProfile = function(){
            console.log("Save Teacher Profile");
            $scope.edit.profiles = false;
        }

        $scope.teacherSavePortfolio = function(){
            console.log("Save Teacher Portfolio");
            $scope.edit.profilePortfolio = false;
        }

        $scope.teacherAddSubject = function(){
            console.log("Subject added in teacher");
            $scope.edit.profileAddSubject = false;
        }

        $scope.teacherAddInstitution = function(){
            console.log("Instituiton added in teacher");
            $scope.edit.profileAddInstitution = false;
        }

        $scope.classList =
        [
                "Recurring and non-Recurring" , "Recurring 1" , "Recurring 2" , "Recurringc 3"
        ]

        $scope.latestPublicationArticle = [
            {
                data : "Dobrick published an article" ,
                date : "24 May 2015"
            },
            {
                data : "Dobrick published an article" ,
                date : "24 May 2015"
            },
            {
                data : "Dobrick published an article" ,
                date : "24 May 2015"
            },
            {
                data : "Dobrick published an article" ,
                date : "24 May 2015"
            },
            {
                data : "Dobrick published an article" ,
                date : "24 May 2015"
            }
        ];

        $scope.topStudent = [
            {
                    name : "Aradhya S." ,
                    img : "assets/img/indian-students.png",
                    marks : "90%",
                    board : "CBSE Board 2015"
            },
            {
                    name : "Aradhya S." ,
                    img : "assets/img/indian-students.png",
                    marks : "90%",
                    board : "CBSE Board 2015"
            },
            {
                    name : "Aradhya S." ,
                    img : "assets/img/indian-students.png",
                    marks : "90%",
                    board : "CBSE Board 2015"
            },
            {
                    name : "Aradhya S." ,
                    img : "assets/img/indian-students.png",
                    marks : "90%",
                    board : "CBSE Board 2015"
            },
            {
                name : "Aradhya S." ,
                img : "assets/img/indian-students.png",
                marks : "90%",
                board : "CBSE Board 2015"
            }

        ]

        $scope.researchStatement = [
            {
                    data : "Dobrick published an article" ,
                    date : "24 May 2015"
            },
            {
                    data : "Dobrick published an article" ,
                    date : "24 May 2015"
            },
            {
                    data : "Dobrick published an article" ,
                    date : "24 May 2015"
            },
            {
                    data : "Dobrick published an article" ,
                    date : "24 May 2015"
            },
            {
                    data : "Dobrick published an article" ,
                    date : "24 May 2015"
            }
        ] 

        $scope.institutionAssociation = [
            {
                    college : "RN College" ,
                    subject : "Java Professor"
            },
            {
                    college : "BMD College" ,
                    subject : "Java Professor"
            }
        ]

        $scope.week = [
            {
                day : "Monday" , 
                select : "selected"
            },
            {
                day : "Tuesday" , 
                select : ""
            },
            {
                day : "Wednesday" , 
                select : ""
            },
            {
                day : "Thursday" , 
                select : ""
            },
            {
                day : "Friday" , 
                select : ""
            },
            {
                day : "Saturday" , 
                select : ""
            },
            {
                day : "Sunday" , 
                select : ""
            },
        ]

        $scope.studentSubject =
        [
            "Mathematics" , "Physics" , "Chemistry" , "English" , "Computer"
        ]

        $scope.dashboardActive = true;
        $scope.experienceActive = false;
        $scope.editActive = false;

        $scope.tabChange = function(tab){
            if(tab == 'dashboard'){
                $scope.dashboardActive = true;
                $scope.experienceActive = false;
                $scope.editActive = false;
            }
            else if(tab == 'experience'){
                $scope.dashboardActive = false;
                $scope.experienceActive = true;
                $scope.editActive = false;
            }
            else if(tab == 'edit'){
                $scope.dashboardActive = false;
                $scope.experienceActive = false;
                $scope.editActive = true;
            }

        }

        $scope.createClassSubmit = function(){
           console.log($scope.create.class + " " + $scope.create.subject + " " + $scope.create.board + " " + $scope.create.time + " " + $scope.create.day + " " + $scope.create.recurring + " " + $scope.create.frequency);
        }
        
        $scope.updTeacherProfile = function()
        {
            console.log("Teacher Profile update button has been clicked");
        }

    } ] )

    .controller("instituteProfileController", ['$scope' , '$rootScope' , 'localStorageService','$location' , '$window' ,  function($scope , $rootScope ,localStorageService,$location ,$window){

        $scope.logOut=function(){
            $location.path('/');
            localStorageService.remove('logged');
            $window.scrollTo(0,0);
        }

        $scope.saveInstituteProfile = function(){
            console.log("Save Institute Profile");
            $scope.edit.profiles = false;
        }

        $scope.saveInstituteAbout = function(){
            console.log("Save Institute About");
            $scope.edit.profilesAbout = false;
        }

        $scope.dashboardActive = true;
        $scope.editActive = false;

        $scope.tabChange = function(tab){
            if(tab == 'dashboard'){
                $scope.dashboardActive = true;
                $scope.editActive = false;
            }
            else if(tab == 'edit'){
                $scope.dashboardActive = false;
                $scope.editActive = true;
            }
        }
               
        $scope.updInstituteProfile = function()
        {
            console.log("Institute Profile update button has been clicked");
        }
    } ] )

    .controller("studentProfileController", ['$scope' , '$rootScope' ,'localStorageService','$location' , '$window' ,  function($scope , $rootScope,localStorageService,$location ,$window ){
        /*##################*/
        //Student Profile Controller//
        /*##################*/
        
        $scope.logOut=function(){
            $location.path('/');
            localStorageService.remove('logged');
            $window.scrollTo(0,0);
        }

        $scope.saveStudentProfile = function(){
            console.log("Save Student Profile");
            $scope.edit.profiles = false;
        }

        $scope.studentSavePortfolio = function(){
            console.log("Save Teacher Portfolio");
            $scope.edit.profilePortfolio = false;
        }

        $scope.studentAddSubject = function(){
            console.log("Subject added in Student");
            $scope.edit.profileAddSubject = false;
        }

        $scope.studentAddInstitution = function(){
            console.log("Instituiton added in Student");
            $scope.edit.profileAddInstitution = false;
        }
        
        $scope.classList =
        [
          "Recurring and non-Recurring" , "Recurring 1" , "Recurring 2" , "Recurringc 3"
        ]

        $scope.institutionAssociation = [
            {
                    college : "RN College" ,
                    subject : "Java Professor"
            },
            {
                    college : "BMD College" ,
                    subject : "Java Professor"
            }
        ]

        $scope.studentSubject =
        [
            "Mathematics" , "Physics" , "Chemistry" , "English" , "Computer"
        ]

        $scope.dashboardActive = true;
        $scope.experienceActive = false;
        $scope.editActive = false;

        $scope.tabChange = function(tab){
            if(tab == 'dashboard'){
                $scope.dashboardActive = true;
                $scope.experienceActive = false;
                $scope.editActive = false;
            }
            else if(tab == 'experience'){
                $scope.dashboardActive = false;
                $scope.experienceActive = true;
                $scope.editActive = false;
            }
            else if(tab == 'edit'){
                $scope.dashboardActive = false;
                $scope.experienceActive = false;
                $scope.editActive = true;
            }

        }

        $scope.createClassSubmit = function(){
           console.log($scope.create.class + " " + $scope.create.subject + " " + $scope.create.board + " " + $scope.create.time + " " + $scope.create.day + " " + $scope.create.recurring + " " + $scope.create.frequency);
        }

        $scope.updStudentProfile = function()
        {
            console.log("Student Profile update button has been clicked" + $scope.updstudent);
        }

    } ] )

    .controller("PrivacyController", ['$scope' , '$rootScope' , '$window' , function($scope , $rootScope ,$window){
        $window.scrollTo(0,0);
    } ]  )

    .controller("TermsController", ['$scope' , '$rootScope' , '$window' , function($scope , $rootScope , $window){
        $window.scrollTo(0,0);
    } ]  )
    
    
}(window.angular));


(function (angular) {
    'use strict';
    var app = angular.module("Gurukool")

    .directive('gkHeader' , function(){
        return{
            restrict : 'E',
            templateUrl : '/app/component/shared/gk_header.html',
            scope : false,
            controller:['$scope','$rootScope','$window','$location','localStorageService',function($scope,$rootScope,$window,$location,localStorageService){
            $scope.boardDetail = 
            [
              "C.B.S.E" , "I.S.C.E" , "STATE BOARD"
            ]

            $scope.classDetail = 
            [
              "V" , "VI" , "VII"                  
            ]

            $scope.subjectDetail = 
            [
              "PHYSICS" , "CHEMISTRY" , "BIOLOGY" , "MATHs"                  
            ]

            $scope.subjectGroupDetail = 
            [
              "PHYSICS" , "CHEMISTRY" , "BIOLOGY" , "MATHs"                  
            ]

             $scope.teacherSubmit = function(){
                console.log($scope.teacher.fname + " " + $scope.teacher.phone + " " + $scope.teacher.email + " " + $scope.teacher.board + " " + $scope.teacher.class + " " + $scope.teacher.subject + " " + $scope.teacher.describe)
             }

             $scope.studentSubmit = function(){
                console.log($scope.student.fname + " " + $scope.student.phone + " " + $scope.student.email + " " + $scope.student.board + " " + $scope.student.class + " " + $scope.student.subject + " " + $scope.student.describe)
             }

             $scope.searchSubmit = function(){
                console.log($scope.search.board + " " + $scope.search.class + " " + $scope.search.subjectGroup + " " + $scope.search.subject )
             }
             
            //$scope.accountLoggedIn = false;

            var checkSignStatus=function(){
                var status=localStorageService.get('logged');
                if(status){
                    $scope.accountLoggedIn = true;
                }
                else{
                    $scope.accountLoggedIn = false;
                }
            };

            checkSignStatus();

            $scope.signInSubmit = function(){
                 $("#signinmodel").modal('hide');
                 localStorageService.set('logged',true);
                 console.log("Sign In Button CLicked!");
                 $scope.accountLoggedIn = true;
                 console.log($scope.accountLoggedIn);
                 $location.path("/teacherDashProfile");
            }

             $scope.confirmPasswordChange = function(){
                console.log("Password Verification!")
            }

             $scope.signUpSubmit = function(){
                console.log("Sign Up Button CLicked!")
            }

            $scope.forgetPasswordSubmit = function(){
                console.log("Reset Password Button CLicked!")
            }
            $scope.touchInSubmit = function(){
                console.log("Touch In Submit Form Button Got Clicked");
            }

            }]
        };
    })

    .directive('gkFooter' , function(){
        return{
            restrict : 'E',
            templateUrl : '/app/component/shared/gk_footer.html',
            scope : false,
            controller:['$scope','$rootScope','$window','$location',function($scope,$rootScope,$window,$location){

                $scope.callBack = function(){
                    console.log("Client is requesting to send message");
                }

            }]
        };
    });
}(window.angular));
