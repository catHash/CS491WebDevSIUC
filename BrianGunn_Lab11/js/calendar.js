var tasks = [];
function setDate(){
	today = new Date();
	document.getElementById("myday").value = today.getDate()
	document.getElementById("mymonth").value = today.getMonth();
	document.getElementById("myyear").value = today.getFullYear();
	buildCalendar()
}
function buildCalendar(){
	firstDate = new Date(document.getElementById("myyear").value,  document.getElementById("mymonth").value,  1);
	var targetDay = document.getElementById("myday").value
	var weekDay = firstDate.getDay();
	var day = firstDate.getDate();
	var month = firstDate.getMonth();
	var year = firstDate.getFullYear();
	var newDay = new Date(year, month + 1, 1); 
	var lastDate = new Date(newDay - 1); 
	var lastDay = lastDate.getDate(); 
	var code = "<table class='caltable' border='1'>"
	code = code + "<tr><td colspan='7' id='calendarmonth'>" + getMonthName() + " " + year + "</td></tr>";  
	var col = 0;
	code = code + "<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>"
	if (weekDay > 0){
		col = weekDay;
		code += "<tr>"
		for(i = 0;i < weekDay;i++){
			code += "<td></td>"
		}
	}
	for(i = 1; i <= lastDay; i++){
		if (col == 0){
			code = code + "<tr>";
		}
		if (i == targetDay){
			code = code + "<td id='dday'>"  + i + "</b></td>";
		}else{
			if (i<10){
				code = code + "<td id='day0" + i + "'>" + i + "</td>";
			}else{
				code = code + "<td id='day" + i + "'>" + i + "</td>";
			}
		}
		if (col < 6){
			col++;
		}else{
			col = 0;
			code = code + "</tr>";
		}
	}
	code = code + "</table>";
	document.getElementById("BottomLeft").innerHTML = code;
	
	
	code = "<table class='tasktable' border='0'>"
	code += "<tr><th>Date</th><th>Task</th></tr>"
	for(i = 0;i < tasks.length;i++){
		console.log(tasks[i])
		var date = new Date(tasks[i].date);
		var dateString = date.toString().split(" ");
		var dayNum = tasks[i].date.split("-")[2]
		mystring = "day"+dayNum
		if(document.getElementById("myyear").value == tasks[i].date.split("-")[0]){
			if(firstDate.getMonth()+1 == tasks[i].date.split("-")[1]){
				code += "<tr><td>" + dateString[0] + " " + dateString[1] + " " + dayNum + " " + dateString[3] + "</td><td>" + tasks[i].task + "</td></tr>"
				if(document.getElementById(mystring) != null)
					document.getElementById(mystring).style.backgroundColor = "rgb(192,192,192)";
			}
		}
	}
	document.getElementById("BottomRight").innerHTML = code;
	
}
function loadTasks(){
	
}
function addTask(){
	var date = document.getElementById("mydate").value
	var task = document.getElementById("mytask").value
	tasks.push({date: date,task: task});
	buildCalendar();
}
function getMonthName(){
	return document.getElementById("mymonth").options[document.getElementById("mymonth").value].text
}