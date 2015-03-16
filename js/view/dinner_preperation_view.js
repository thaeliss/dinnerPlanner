//ExampleView Object constructor
var DinnerPrepView = function (container, modell) {

	/** Get all the relevant elements of the view (ones that show data
  	 and/or ones that responed to interaction) */

	//modell.addObserver(this);
	this.editdinnerButton = container.find("#dinnerButton");

    // Confirm dishes är inte klar än så vi måste lägga till dessa manuellt.
    modell.addDishToMenu(102);
    //console.log("dinnerprepView: " + modell.getFullMenu());
    modell.addDishToMenu(202);
    //console.log("Nu la vi till ID=1");
    modell.addDishToMenu(2);
    //console.log("Nu la vi till ID=2");
    // Hämtar hela menyn - varje element kommer innhålla en array med all info!
    //console.log("dinnerprepView: " + modell.getFullMenu());
    var menuDishes = modell.getFullMenu();

    //kollar längden på vår menu.
    //console.log(menuDishes.length);

    for (var i = 0; i<menuDishes.length; i++)
    {
        var dasDish = menuDishes[i];
        //console.log(dasDish.image);
        container.append
        (
            $('<div class="row" style="">' +
            '<div class="col-md-6" style="" >' +
            '<div class="container-fluid" >' +
            '<div class="row" style="padding: 15px;">' +
            '<div class="col-md-3" style="padding-top:10px;">' +
            '<img src="images/'+ dasDish.image +'" id="imgsettings"class="img-responsive" alt="Responsive image" style="border: 3px solid black">' +
            '</div>' +
            '<div class="col-md-9" style="">' +
            '<div class="container-fluid">' +
            '<div class="row">' +
            '<div class="col-md-12">' +
            '<h4>'+dasDish.name+'</h4>' +
            '</div>' +
            '</div>' +
            '<div class="row">' +
            '<div class="col-md-12">' +
            '<p>'+ dasDish.description +
            '</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="col-md-6" style="" >' +
            '<div class="container-fluid" >' +
            '<div class="row" style="padding: 15px;">' +
            '<div class="col-md-12" style="">' +
            '<div class="container-fluid">' +
            '<div class="row">' +
            '<div class="col-md-12">' +
            '<h4>Preparations</h4>' +
            '</div>' +
            '</div>' +
            '<div class="row">' +
            '<div class="col-md-12">' +
            '<p>' + dasDish.description +
            '</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>'
            )
        ); // end of container

    }//end of for-loop

}//end of main function
