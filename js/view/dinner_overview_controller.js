//ExampleView Object constructor
var DinnerOverviewCtrl = function (view, modell) {
	
	
	view.receipeButton.click(function()
	{
		gotos.gotoDinnerPrep();
	})
	
	view.editdinnerButton.click(function()
	{
		gotos.gotoSelectDishpage(); // ÄNDRA
	})

}
 
