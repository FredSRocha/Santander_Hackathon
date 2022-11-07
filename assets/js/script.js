$(document).ready(function() {
	$("#results").hide();
	$(".alert").hide();
	$("[type='number']").bind("keydown", function(e) {
		var code = e.keyCode || e.which;
		if (code == 189 || code == 173 || code == 32 || code == 69 || code == 109) {
			return false;
		}
	});

	$("#calculate-btn").on("click", function() {
		var calculateAndDisplayScore = function() {
			window.scrollTo(0, 400);
			$("#form").hide();
			var electricInput = document.getElementById("electric").value;
			var gasInput = document.getElementById("gas").value;
			var oilInput = document.getElementById("oil").value;
			var carInput = document.getElementById("car").value;
			var flights4LessInput = document.getElementById("flights-4-less").value;
			var flights4MoreInput = document.getElementById("flights-4-more").value;
			var electricScore = "";
			var gasScore = "";
			var oilScore = "";
			var carScore = "";
			var flights4LessScore = "";
			var flights4MoreScore = "";
			var newspaperScore = "";
			var alumTinScore = "";
			var totalScore = "";
			if (document.getElementById("optionsRadio1").checked) {
				newspaperScore = 0;
			} else {
				newspaperScore = 184;
			}
			if (document.getElementById("optionsRadio3").checked) {
				alumTinScore = 0;
			} else {
				alumTinScore = 166;
			}
			if (electricInput === 0 || electricInput === "undefined") {
				electricScore = 0;
			} else {
				electricScore = electricInput * 105;
			}
			if (gasInput === 0 || gasInput === "undefined") {
				gasScore = 0;
			} else {
				gasScore = gasInput * 105;
			}
			if (oilInput === 0 || oilInput === "undefined") {
				oilScore = 0;
			} else {
				oilScore = oilInput * 113;
			}
			if (carInput === 0 || carInput === "undefined") {
				carScore = 0;
			} else {
				carScore = carInput * 0.79;
			}
			if (flights4LessInput === 0 || flights4LessInput === "undefined") {
				flights4LessScore = 0;
			} else {
				flights4LessScore = flights4LessInput * 1100;
			}
			if (flights4MoreInput === 0 || flights4MoreInput === "undefined") {
				flights4MoreScore = 0;
			} else {
				flights4MoreScore = flights4MoreInput * 4400;
			}
			var energyScore = electricScore + gasScore + oilScore;
			var travelScore = carScore	+ flights4LessScore + flights4MoreScore;
			var wasteScore = newspaperScore + alumTinScore;
			totalScore = Math.round(energyScore + travelScore + wasteScore);
			var formattedScore = totalScore.toLocaleString("en");
			document.getElementById("score").innerHTML = formattedScore;
			$("#results").show();
			$("#recalculate-btn").on("click", function() {
				location.reload();
				window.scrollTo(0, 0);
			});
		}
		var recycleNewspaperSelectionYes = document.getElementById("optionsRadio1").checked;
		var recycleNewspaperSelectionNo = document.getElementById("optionsRadio2").checked;
		var recycleAlumTinSelectionYes = document.getElementById("optionsRadio3").checked;
		var recycleAlumTinSelectionNo = document.getElementById("optionsRadio4").checked;
		if (recycleNewspaperSelectionYes == false && recycleNewspaperSelectionNo == false || recycleAlumTinSelectionYes == false && recycleAlumTinSelectionNo == false) {
			if (recycleNewspaperSelectionYes == false && recycleNewspaperSelectionNo == false) {
				$("#newspaper-alert").show();
			} else {
				$("#newspaper-alert").hide();
			}
			if (recycleAlumTinSelectionYes == false && recycleAlumTinSelectionNo == false) {
				$("#alum-tin-alert").show();
			} else {
				$("#alum-tin-alert").hide();
			}
		} else {
			calculateAndDisplayScore();
		}
	});	
});