function search() {
	var value = document.getElementById("searchText").value;
	//window.location.href = "search.html?value=" + value;
	self.location = "search.html?value=" + value;
}