$.fn.dataTableExt.oStdClasses.sWrapper = "dataTables_wrapper clearfix";
$(function() {
	$("table.data").dataTable({
		"iDisplayLength": 50,
		"bAutoWidth": false,
		"bLengthChange": false
	});
});
