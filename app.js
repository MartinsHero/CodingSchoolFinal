document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    googleCalendarApiKey: 'AIzaSyCxwfqTz_7-eRN6u1CnH_YEsS73d-GjQBI',
    events: {
      googleCalendarId: 'q68v3fq7m1rhidsthbjj8qmsoo@group.calendar.google.com',
      color: '#ffaa00',
      textColor: '#fff'
    },
    height: 800,
    locale: 'lv',
    firstDay: 1,
    buttonText: {
      today: 'Šodiena',
      month: 'Mēnesis',
      week: 'Nedēļa',
      list: 'Pasākumu saraksts'
    },

    headerToolbar: {
      start: 'title',
      center: '',
      end: 'today prev,next',
      color: '#fff'
    },
    footerToolbar: {
      end: 'dayGridMonth dayGridWeek listMonth'
    },
    eventTimeFormat: {
      hour: '2-digit',
      minute: '2-digit',
      meridiem: false
    },
    eventClassNames: 'pasakums',
    dayHeaderFormat: {
      weekday: 'narrow'
    },
  });

  calendar.render();
});

const move_down = document.querySelector('#top').offsetTop;
window.scrollTo(0,move_down);

document.getElementById("vairodzins").addEventListener("click", function(event){
  event.preventDefault()
  window.scrollTo(0, document.querySelector('#top').offsetTop)
});
