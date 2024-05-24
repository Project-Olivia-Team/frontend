document.addEventListener("DOMContentLoaded", function () {
	var sidebarToggle = document.querySelector(".navbar-toggler");
	var sidebar = document.querySelector("#sidebarMenu");

	sidebarToggle.addEventListener("click", function () {
		sidebar.classList.toggle("show");
	});

	var table = $("#userTable").DataTable({
		dom: 't<"bottom"p>',
		pageLength: 10,
		paging: true,
		info: false,
	});

	$("#customSearchButton").on("click", function () {
		table.search($("#customSearchBox").val()).draw();
	});

	$("#customSearchBox").on("keypress", function (e) {
		if (e.which === 13) {
			table.search(this.value).draw();
		}
	});
});
$(document).ready(function () {
	$("#produkForm").submit(function (event) {
		event.preventDefault();
		window.location.href = "merchandise.html";
	});
});
