var today = new Date();
var year = today.getFullYear();
var currentMonth = today.getMonth();
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
document.getElementById("month").innerHTML = months[today.getMonth()];
document.getElementById("year").innerHTML = year;
var selectYear = document.getElementById("yearChange");
var selectMonth = document.getElementById("monthChange");

//LIBRARY

var library = {
    getItemId: function(id) {
        return document.getElementById(id).id;
    },
    getElemntsName : function(name){
        return document.getElementsByName(name).name;
    },
    deleteElement: function (element) {
        document.removeChild(element);
    },
    addNewElement: function (element) {
        document.createElement(element);
    },
    changeAttribute: function (id,type,value) {
        this.getElementById(id).type = value;
    },
    changeElementText : function(id,message){
        document.getItemId(id).innerText = message;
    },
    changeBackgroundColor : function(element,value){
        element.style.backgroundColor = value;
    },
    getParent : function(id,nodeName){
        document.getElementById(id).parentNode.nodeName;
    },
    getNextSibling : function(id){
        return document.getElementById(id).nextSibling;
    },
    getPrevousSiblig : function(id){
        return document.getElementById(id).previousSibling;
    },
    getChildren : function(id){
        return document.getElementById(id).childNodes.length;
    }
}

function clicked() {

    var table = document.getElementById("table"), rIndex, cIndex;
    var cell = document.getElementsByTagName("td");
    var date = 1;
    var count = 0;
    var events = [];

    for (var i = 1; i < table.rows.length; i++) {

        for (var j = 0; j < table.rows[i].cells.length; j++) {

            table.rows[i].cells[j].onclick = function () {
                rIndex = this.parentElement.rowIndex - 1;
                cIndex = this.cellIndex;
                var text = document.getElementById("event").value;
                var cellText = document.createTextNode(" " + text);
                var isCalendarAtFirstRow = (date < 8);
                var sum = isCalendarAtFirstRow ? (rIndex + cIndex) : (7 * rIndex + cIndex);
                cell[sum].appendChild(cellText);
                //Serialize
                events[count] = { 'text': text, 'sum': sum };
                count++;
                var myObj = JSON.stringify(text);
                localStorage.setItem('events', JSON.stringify(events));
            };
            date++;
        }
    }
}

function getItemStorage() {
    //Deserialize
    var events = [] = JSON.parse(localStorage.getItem('events'));
    for (var i = 0; i < events.length; i++) {
        var text = events[i].text;
        var sum = events[i].sum;
        var cellText = document.createTextNode(" " + text);
        var cell = document.getElementsByTagName("td");
        cell[sum].appendChild(cellText);
    }
}

clicked();
showCalendar(currentMonth, year);

function changeWeekendColor() {
    var weekends = document.getElementsByName("weekend");
    var i;
    for (i = 0; i < weekends.length; i++) {
        library.changeBackgroundColor(weekends[i],"lightGrey");
    
    }
    var date = today.getDate();
    var x = document.getElementsByTagName("td");
    x[date - 1].style.backgroundColor = "lightBlue";
}

function normalView() {
    var x = document.getElementsByTagName("td");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "white";
    }
    var date = today.getDate();
    x[date - 1].style.backgroundColor = "lightBlue";
}

function clear() {
    var x = document.getElementsByTagName("td");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].innerHTML = "";
    }
}

function next() {
    clear();
    year = (currentMonth === 11) ? year + 1 : year;
    currentMonth = (currentMonth + 1) % 12;
    //document.getElementById("month").innerHTML = months[currentMonth]
    //library.func("year",year) ;
    library.getItemId("month").innerHTML = months[currentMonth];
    library.getItemId("year").innerHTML = year;
    showCalendar(currentMonth, year);
}

function previous() {
    clear();
    year = (currentMonth === 0) ? year - 1 : year;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    document.getElementById("month").innerHTML = months[currentMonth]
    document.getElementById("year").innerHTML = year;
    showCalendar(currentMonth, year);
}

function jump() {
    clear();
    currentYear = parseInt(selectYear.value);
    currentMonth = document.getElementById("monthChange").selectedIndex;
    document.getElementById("year").innerHTML = currentYear;
    document.getElementById("month").innerHTML = document.getElementById("monthChange").value;
    showCalendar(currentMonth, currentYear);
}


function showCalendar(monthC, yearC) {

    var tbl = document.getElementById("calendar-body");
    var lastDayOfMonth = new Date(yearC, monthC + 1, 0).getDate();

    const CALENDAR_NUMBER_COUNT = 7
    var date = 1;

    for (var i = 0; i < 6; i++) {
        var cell = document.getElementsByTagName("td");


        for (var j = 0; j < CALENDAR_NUMBER_COUNT; j++) {
            if (date > lastDayOfMonth) {
                break;
            }
            var cellText = document.createTextNode(date)

            if (date === today.getDate() && yearC === today.getFullYear() && monthC === today.getMonth()) {
                var x = document.getElementsByTagName("td");
                x[date - 1].style.backgroundColor = "lightBlue";
            }
            var isCalendarAtFirstRow = (date < 8);

            var sum = isCalendarAtFirstRow ? (i + j) : (CALENDAR_NUMBER_COUNT * i + j);

            cell[sum].appendChild(cellText);

            date++;
        }
    }
}

