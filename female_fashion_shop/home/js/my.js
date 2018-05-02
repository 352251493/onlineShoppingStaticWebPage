function search() {
	var value = document.getElementById("searchInput").value;
	window.location.href = "search.html?value=" + value;
}