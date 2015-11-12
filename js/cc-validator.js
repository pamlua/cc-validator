var CardTypeHelper = function(){};
CardTypeHelper.prototype.CreditCards = [
{"type":"amex", "single": ["34", "37"]},
{"type":"discover", "single":["6011", "65"], "range":["622126-622925", "644-649"]},
{"type":"mastercard", "range":["50-55"]},
{"type":"visa", "single": ["4"]}
];
$("#ccNumber").on("keyup", function(){
	var ccValue = $(this).val();
	console.log(ccValue);
	if (ccValue.length === 0){
		$("#ccNumber").removeClass();
		$("#ccNumber").addClass("blank");
		$("#ccLogo").empty();
	}
	CardTypeHelper.prototype.determineCard = function(){
		for(var i = 0; i < this.CreditCards.length; i++){
			var card = this.CreditCards[i];
			if(card.single){
				for(var n = 0; n < card.single.length; n++){
					var substring = ccValue.substring(0, card.single[n].length);
					if(substring === card.single[n]){
						$("#ccNumber").removeClass();
						$("#ccNumber").addClass(this.CreditCards[i].type);
					}
				}
			}
			if(card.range){
				for(var n = 0; n < card.range.length; n++){
					var range = card.range[n].split("-");
					var num1 = parseInt(range[0]);
					var num2 = parseInt(range[1]);
					if(num1 <= ccValue && ccValue <= num2){
						$("#ccNumber").removeClass();
						$("#ccNumber").addClass(this.CreditCards[i].type);
					}
				}
			}
		}
	}
	var ccType = new CardTypeHelper();
	ccType.determineCard();
});
