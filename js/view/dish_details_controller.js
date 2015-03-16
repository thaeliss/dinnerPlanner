//ExampleView Object constructor
var DishDetailsCtrl = function (view, modell, ID) {
	
	
	view.backtoselectdishButton.click(function()
	{
		console.log("back to select dish button pressed")
		
		gotos.gotoSelectDishpage();
	})
	
	view.confdishButton.click(function()
	{
		// Denna ska uppdatera menu som sidebar sedan kommer läsa
		// På nåt sätt kommer vi ha ID't här.
		// då vill vi göra addDishToMenu'
		console.log("adding dish#= " + ID + " to the menu")
		modell.addDishToMenu(ID);
		gotos.gotoSelectDishpage();
//		console.log(modell.getFullMenu());
	})

}
 
