var DateTime = luxon.DateTime;
dt = DateTime.fromObject({
    day: 22,
    hour: 12,
    zone: 'America/Los_Angeles',
    numberingSystem: 'beng'
})


moment('2016-03-12 13:00:00').add(24, 'hours').format('LLL')
"March 13, 2016 2:00 PM"

$("#timer").text(moment + add + format)

// $("#timer").text(dt.day + "" + dt.hour + "" + dt.zone)