const currentDay = document.getElementById('currentDay')
const button1 = document.getElementById('button1')

var currentHour = parseInt(moment().format('H'));
var updateDay = () => {
    let day = moment().format('MMMM Do YYYY');
    currentDay.textContent = day;
}



$(document).ready(function() {

    var $8am  = $("#8")
    var $9am  = $("#9")
    var $10am  = $("#10")
    var $11am  = $("#11")
    var $12pm  = $("#12")
    var $1pm  = $("#13")
    var $2pm  = $("#14")
    var $3pm  = $("#15")
    var $4pm  = $("#16")

    $('input').each(function () {
        let meetingTime = parseInt($(this).attr('id'));
        if (meetingTime < currentHour) {
            $(this).addClass("past")
            $(this).css({color: 'black'})
        } else if (meetingTime > currentHour) {
            $(this).addClass("future")
        } else {
            $(this).addClass("present")
        }
      })

    $('button').on('click', function() {
        localStorage.setItem("8am", ($8am.val()))
        localStorage.setItem("9am", ($9am.val()))
        localStorage.setItem("10am", ($10am.val()))
        localStorage.setItem("11am", ($11am.val()))
        localStorage.setItem("12pm", ($12pm.val()))
        localStorage.setItem("1pm", ($1pm.val()))
        localStorage.setItem("2pm", ($2pm.val()))
        localStorage.setItem("3pm", ($3pm.val()))
    })

    console.log(localStorage.getItem("8am"))
    $8am.val(localStorage.getItem("8am"))
    $9am.val(localStorage.getItem("9am"))
    $10am.val(localStorage.getItem("10am"))
    $11am.val(localStorage.getItem("11am"))
    $12pm.val(localStorage.getItem("12pm"))
    $1pm.val(localStorage.getItem("1pm"))
    $2pm.val(localStorage.getItem("2pm"))
    $3pm.val(localStorage.getItem("3pm"))
})

updateDay()