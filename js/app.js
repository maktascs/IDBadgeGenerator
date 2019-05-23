var schoolsAll = [
    {
        value: 'hps',
        name: 'Harmony',
        logoURL: 'img/hpslogo.jpg'
    }
];

function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#photo').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

function setColor(input,input2){
   $(input2).css('color',input); 
   if(input2.id === "gradeDisplay"){
    $('#gradeJobDisplayLabel').css('color',input); 
    $('#positionDisplay').css('color',input); 
   }
}


 $(document).ready(function() {  
    $('#schoolNameFontSize').change(function(){
        var v = ( $(this).find("option:selected").attr('value') ); 
        $('#schoolNameDisplay').css('font-size',v);      
    });

    $('#schoolNameFontFamily').change(function(){
        var v = ( $(this).find("option:selected").attr('value') ); 
        $('#schoolNameDisplay').css('font-family',v);      
    });

    $('#schoolYearFontSize').change(function(){
        var v = ( $(this).find("option:selected").attr('value') ); 
        $('#schoolYearDisplay').css('font-size',v);      
    });

    $('#schoolYearFontFamily').change(function(){
        var v = ( $(this).find("option:selected").attr('value') ); 
        $('#schoolYearDisplay').css('font-family',v);      
    });

    $('#firstNameDisplayFontSize').change(function(){
        var v = ( $(this).find("option:selected").attr('value') ); 
        $('#firstNameDisplay').css('font-size',v);      
    });

    $('#firstNameDisplayFontFamily').change(function(){
        var v = ( $(this).find("option:selected").attr('value') ); 
        $('#firstNameDisplay').css('font-family',v);      
    });

    $('#lastNameDisplayFontSize').change(function(){
        var v = ( $(this).find("option:selected").attr('value') ); 
        $('#lastNameDisplay').css('font-size',v);      
    });

    $('#lastNameDisplayFontFamily').change(function(){
        var v = ( $(this).find("option:selected").attr('value') ); 
        $('#lastNameDisplay').css('font-family',v);      
    });

    $('#gradeDisplayFontSize').change(function(){
        var v = ( $(this).find("option:selected").attr('value') ); 
        $('#gradeDisplay').css('font-size',v);      
        $('#gradeJobDisplayLabel').css('font-size',v); 
        $('#positionDisplay').css('font-size',v); 
    });

    $('#gradeDisplayFontFamily').change(function(){
        var v = ( $(this).find("option:selected").attr('value') ); 
        $('#gradeDisplay').css('font-family',v);    
        $('#gradeJobDisplayLabel').css('font-family',v);    
        $('#positionDisplay').css('font-family',v);  
    });
    
    
 });


$("#imgInp").change(function () {
    readURL(this);
});

$('.positionRelated').hide();
$(window).on('load', function () {
    var x = jQuery('#cardTypeInput');
    x.change(function () {
        if ($(this).find(":selected").text() == 'Staff') {
            $('#gradeJobInputLabel').html("Position");
            $('.gradeRelated').hide();
            $('.positionRelated').show();
            $('#idNumberInputLabel').html("Staff number:");
        }
        else {
            $('#gradeJobInputLabel').html("Grade");
            $('.gradeRelated').show();
            $('.positionRelated').hide();
            $('#idNumberInputLabel').html("Student number:");
        }
    });
});

function schoolsViewModel() {

    this.cards = [
        { name: "student", description: "Student", imgPath: "img/idstudent.jpg" },
        { name: "staff", description: "Staff", imgPath: "img/idstaff.jpg" },
        { name: "walker", description: "Walker", imgPath: "img/idwalker.jpg" }
    ];

    this.chosenCard = ko.observable();

    this.schools = [
        { name: "hps", description: "Harmony", logoPath: "img/hpslogo_png.png" }
    ];

    this.chosenSchool = ko.observable();

    this.schoolName = ko.observable("School of Innovation - Brownsville");

    this.schoolYear = ko.observable("2018 - 2019");

    this.firstName = ko.observable("Muammer");
    this.lastName = ko.observable("Aktas");

    this.grades = [
        { grade: "PreK" },
        { grade: "KG" },
        { grade: "1" },
        { grade: "2" },
        { grade: "3" },
        { grade: "4" },
        { grade: "5" },
        { grade: "6" },
        { grade: "7" },
        { grade: "8" },
        { grade: "9" },
        { grade: "10" },
        { grade: "11" },
        { grade: "12" }
    ];
    
    
    this.chosenGrade = ko.observable();

    this.position = ko.observable("Software Developer");

    this.idNumber = ko.observable(1234567);

    this.idNumberBarcode = ko.computed(function() {
        return "*" + this.idNumber() + "*";
    }, this);
}

ko.applyBindings(new schoolsViewModel());