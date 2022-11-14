var saveBtn = $(".saveBtn")

$(document).ready(function() {
  var currentDate = dayjs().format('MM/D/YYYY')
  $("#currentDay").text(currentDate)

  var presentHour = dayjs().format("HH")
  var timeBlock = $('.time-block')
  timeBlock.each(function() {
    var hour = $(this).attr("id")
    if(hour === presentHour) {
      $(this).children(".col-sm-10").attr("class", "present col-sm-10 description")
    } else if(presentHour > hour) {
      $(this).children(".col-sm-10").attr("class", "past col-sm-10 description")
    } else {
      $(this).children(".col-sm-10").attr("class", "future col-sm-10 description")
    }
  })

  saveBtn.on("click", function(event) {
    event.preventDefault();
    var id = $(this).parent().attr("id");
    var description = $(this).siblings(".col-sm-10").val().replace(id)

    localStorage.setItem(id, JSON.stringify(description))
  })

  $("#09 textarea").val(JSON.parse(localStorage.getItem("09")))
  $("#10 textarea").val(JSON.parse(localStorage.getItem("10")))
  $("#11 textarea").val(JSON.parse(localStorage.getItem("11")))
  $("#12 textarea").val(JSON.parse(localStorage.getItem("12")))
  $("#13 textarea").val(JSON.parse(localStorage.getItem("13")))
  $("#14 textarea").val(JSON.parse(localStorage.getItem("14")))
  $("#15 textarea").val(JSON.parse(localStorage.getItem("15")))
  $("#16 textarea").val(JSON.parse(localStorage.getItem("16")))
  $("#17 textarea").val(JSON.parse(localStorage.getItem("17")))
})