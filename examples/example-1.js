var Table = require('../');
var chalk = require('chalk');

var header = [
	{
		value : "item",
		headerColor : "cyan",
		color: "yellow",
		//headerAlignment : "center",
		//alignment : "left",
		//paddingLeft : 2,
		width : 30
	},
	{
		value : "price",
		//alignment : "center",
		color : "red", 
		formatter : function(value){
			var str = "$" + value.toFixed(2);
			if(value > 5){
				str = chalk.underline.green(str);
			}
			return str;
		}
	},
	{
		value : "organic",
		formatter : function(value){
			if(value === 'yes'){
				value = chalk.stripColor(value);
				value = chalk.green(value);
			}
			else{
				value = chalk.white.bgRed(value);
			}
			return value;
		}
	}
];

var rows = [
	["hamburger",2.50,"no"],
	["el jefe's special cream sauce",0.10,"yes"],
	["two tacos, rice and beans topped with cheddar cheese",9.80,"no"],
	["apple slices",1.00,"yes"],
	["ham sandwich",1.50,"no"],
	["macaroni, ham and peruvian mozzarella",3.75,"no"]
];

//Example 1
var t1 = Table(header,rows,{
	borderStyle : 1,
	paddingBottom : 0,
	headerAlignment : "center",
	alignment : "center",
	color : "white"
});
var str1 = t1.render();
console.log(str1);
