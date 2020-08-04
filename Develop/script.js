var DateTime = luxon.DateTime;
dt = DateTime.fromObject({
    day: 29,
    hour: 11,
    zone: 'America/Los_Angeles',
    numberingSystem: 'beng'
})

var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}

var hourCheck = setInterval(hourGrab, 1500);



function hourGrab() {
    var currentHour = moment().hour();

    // console.log(currentHour);
    $(".time-block").each(function () {
        var imputHour = parseInt($(this).attr("id"));
        console.log(imputHour);
        if (imputHour < currentHour) {
            $(this).attr("class", "past");

        } else if (imputHour === currentHour) {
            $(this).removeAttr("class", "past");
            $(this).attr("class", "present");

        } else {
            $(this).removeAttr("class", "past");
            $(this).removeAttr("class", "present");
            $(this).attr("class", "future");
        }
    });

}


// Time blocks
$(document).ready(function () {

    // Timmer
    $("#timer").text(moment().format("MMMM DD, YYYY hh:mm A"))

    // Concolelog / Save Buttons
    $(document).on("click", ".saveBtn", function () {
        //your code to store data into localstorage
        var id = $(this).attr("id");
        console.log("ID: " + id);
    })
    $(document).on("click", ".saveBtn", function () {
        //your code to store data into localstorage
        var id = $(this).attr("id");
        var note = $(this).siblings("textarea").val()
        console.log("ID: ", id, "-", note);
        localStorage.setItem(id, note)

    })

    // Note Saves

    // Time Block 1
    $("#9 .discription").val(localStorage.getItem("900"));

    // Time Block 2
    $("#10 .discription").val(localStorage.getItem("1000"));

    // Time Block 3
    $("#11 .discription").val(localStorage.getItem("1100"));

    // Time Block 4
    $("#12 .discription").val(localStorage.getItem("1200"));

    // Time Block 5
    $("#13 .discription").val(localStorage.getItem("1300"));

    // Time Block 6
    $("#14 .discription").val(localStorage.getItem("1400"));

    // Time Block 7
    $("#15 .discription").val(localStorage.getItem("1500"));

    // Time Block 8
    $("#16 .discription").val(localStorage.getItem("1600"));

    // Time Block 9
    $("#17 .discription").val(localStorage.getItem("1700"));

});