var DateTime = luxon.DateTime;
dt = DateTime.fromObject({
    day: 29,
    hour: 11,
    zone: 'America/Los_Angeles',
    numberingSystem: 'beng'
})



$("#timer").text(moment().format("MMMM DD, YYYY hh:mm A"))