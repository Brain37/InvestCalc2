function Invest() {

    var initialMoneyInput = "initialMoneyInput";
    var interestRateInput = "interestRateInput";
    var periodInput = "periodInput";
    var resultsListItem = "resultsListItem";

    var $intialMoney = $("#initialMoneyInput");

    $("#unorderedList").children("li").click(function (event) {
        removeErrorMessage();

        if (!$.isNumeric($("#" + periodInput).val())) {
            addErrorMessage(investedTimeListItem);
        }

        if (!$.isNumeric($("#" + initialMoneyInput).val())) {
            addErrorMessage(intialMoneyListItem);
        }

        if (!$.isNumeric($("#" + interestRateInput).val())) {
            addErrorMessage(interestRateListItem);
        }

        if (event.currentTarget.id === resultsListItem && $("#errorMessage").text() === "")
        {
            $("#resultOutput").text(calculateInterest);
        }
    });
   
    function getSelectedListItemId()
    {
        return $("#unorderedList").children("li.active")[0].id;
    }

    function addErrorMessage(listItemId)
    {
        $("#errorMessage").removeClass("hidden");
        $("#errorMessage").text("Please enter a valid numerical value for highlighted fields");
        $($(listItemId).children("a")[0]).addClass("label-warning");
    }

    //left off: need to get switch list item to remove warning class if numeric value
    //also add calc function

    function removeErrorMessage()
    {
        $("#errorMessage").addClass("hidden");
        $("#errorMessage").text("");
        $.each($("#unorderedList").children("li"), function (index, data) {
            $.each($(data).children("a"), function (i, aData) {
                $(aData).removeClass("label-warning");
            });
        });
    }

    function calculateInterest()
    {
        var p = parseFloat($("#initialMoneyInput").val());
        var r = parseFloat($("#interestRateInput").val());
        var t = parseFloat($("#periodInput").val());
        var n = parseFloat($("#compoundedSelect").val());
        return (Math.round((p * Math.pow((1 + (r / n)), (n * t))) * 100) / 100).toFixed(2);
    }
}