

// We can access these arrays from other files without
// needing to add them to the constructor first.

var views = {};
var gotos = {};
var ctrls = {};

// The annoymous function .. aka PRIVATE

$(document).ready(function() {
	//We instantiate our model
	var model = new DinnerModel();
	var resetpage = function()
	{
		$("#sidebar").hide();
		$("#home_page").hide();
		$("#select_dish_content").hide();
		$("#dish_details").hide();
		$("#dinner_overview").hide();
		$("#dish_preparations").hide();
		$("#dish_prep").hide();
		$("#dish_overview").hide();
	}
	gotos.gotoHomepage = function()
	{
		resetpage();
		$("#home_page").show();
	}
	gotos.gotoSelectDishpage = function()
	{
		resetpage();
		$("#sidebar").show();
		$("#select_dish_content").show();
	}

	gotos.gotoDinnerOverview = function()
	{
		resetpage();
		$("#dish_overview").show();
	}

	gotos.gotoDinnerPrep = function()
	{
		resetpage();
		$("#dish_prep").show();
	}

	gotos.gotoDishDetails = function()
	{
		resetpage();
		$("#dish_details").show();
		$("#sidebar").show();
	}



	gotos.gotoHomepage();

	//View and controller for Home
	views.homeview = new HomeView($("#home_page"), model);
	ctrls.homectrl = new HomeCtrl(views.homeview, model);

	//View and controller for sidebar
	views.sidebarView = new SidebarView($("#sidebar"), model);
	ctrls.sidebarCtrl = new SidebarCtrl(views.sidebarView, model);

    //View and controller for SelectDish
    views.selectdishView = new SelectDishView($("#select_dish_content"), model);
	ctrls.selectdishCtrl2 = new SelectDishCtrl2(views.selectdishView, model);

    //View and controller for Dinner_overview
    views.dinneroverview = new DinnerOverview($("#dish_overview"), model);
    ctrls.dinneroverviewCtrl = new DinnerOverviewCtrl(views.dinneroverview, model);

    //View and controller for Dinner_preparation
    views.dinnerprepview = new DinnerPrepView($("#dish_prep"), model);
    ctrls.dinnerprepctrl = new DinnerPrepCtrl(views.dinnerprepview, model);



});
