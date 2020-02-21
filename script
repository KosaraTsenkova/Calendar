var today = new Date();
var year = today.getFullYear();
var currentMonth = today.getMonth();
var months = ["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"]
document.getElementById("month").innerHTML = months[today.getMonth()];
document.getElementById("year").innerHTML = year;
var selectYear = document.getElementById("year");
var selectMonth = document.getElementById("month");

showCalendar(currentMonth,year);

function changeWeekendColor(){
    var weekends = document.getElementsByName("weekend");
    var i;
    for (i = 0; i < weekends.length; i++) {
        weekends[i].style.backgroundColor = "lightGrey";
    }
}

function normalView(){
    var x = document.getElementsByTagName("td");
    var i;
    for (i = 0; i < x.length; i++) {
     x[i].style.backgroundColor = "white";
    }
}

function next(){
    year = (currentMonth === 11) ? year + 1 : year;
    currentMonth = (currentMonth + 1) % 12;
    clear();
    showCalendar(currentMonth, year);
}

function previous(){

}

function clear(){
    for(var i=0;i<7;i++){
            var cell = document.getElementsByTagName("td");
            var cellText = document.createTextNode("1");
            var newText = document.createTextNode("2");
            //var cellText = document.getElementsByTagName("tr");
            //cellText.textContent = ""; 
            cell[i].removeChild(cellText);
        
    }
    //location.reload();
}


function showCalendar(monthC,yearC) {

    var tbl = document.getElementById("calendar-body");
    //var firstDay = today.getDay();
    var lastDayOfMonth = new Date(yearC, monthC+1, 0).getDate();
    selectYear.value = year;
    selectMonth.value = month;
    
    
    const CALENDAR_NUMBER_COUNT = 7
    var date = 1;
    for (var i = 0; i < 6; i++) {

    var row = document.getElementsByTagName("tr");
    var cell = document.getElementsByTagName("td");

    

        for (var j = 0; j < CALENDAR_NUMBER_COUNT; j++) {
            if (date > lastDayOfMonth) { 
                 break;
            }
            else {
                 var cellText = document.createTextNode(date)
                 if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-info");
                 } // color today's date
        
                 if(date<8){
                     var sum = i+j;
                    cell[sum].appendChild(cellText);
                   // row[i].appendChild(cell[i]);
                 }
                 else{
               var sum = CALENDAR_NUMBER_COUNT * i + j;
               cell[sum].appendChild(cellText);
                //row[i].appendChild(cell);
                 }
                date++;
            }
        }   
    }
   // tbl.appendChild(row);
}
