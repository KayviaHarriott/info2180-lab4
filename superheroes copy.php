<html>
<head>
<script>
function searchme(str) {
	if(str.length == 0){
		document.getElementById("src").innerHTML = "";
		return;
	}
	else{
		 var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
			 if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("src").innerHTML = xmlhttp.responseText;
			 }
	};
	xmlhttp.open("GET", "search.php?a=" + str, true);
	xmlhttp.send();
	}
}				
</script>
</head>
<body>

<h1>Search</h1>

<form>
<input type="text" onKeyUp="searchme(this.value)">
</form>
<p>Results<span id="src"></span></p>
</body>
</html><html>
<head>
<script>
function searchme(str) {
	if(str.length == 0){
		document.getElementById("src").innerHTML = "";
		return;
	}
	else{
		 var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
			 if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("src").innerHTML = xmlhttp.responseText;
			 }
	};
	xmlhttp.open("GET", "search.php?a=" + str, true);
	xmlhttp.send();
	}
}				
</script>
</head>
<body>

<h1>Search</h1>

<form>
<input type="text" onKeyUp="searchme(this.value)">
</form>
<p>Results<span id="src"></span></p>
</body>
</html>