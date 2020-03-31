$(document).ready(function(){
    $("#btn_distribuir").on("click", function (e) {
        $("#table_example").tableExport();
    });
});
