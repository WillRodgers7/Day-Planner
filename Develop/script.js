var DateTime = luxon.DateTime;
dt = DateTime.fromObject({
    day: 29,
    hour: 11,
    zone: 'America/Los_Angeles',
    numberingSystem: 'beng'
})

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