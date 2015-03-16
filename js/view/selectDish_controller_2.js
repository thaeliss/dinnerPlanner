
// This controller controlls all the stuff in selectDish_view

var SelectDishCtrl2 = function (view, model)
{

	view.selectType.change( function()
	{
        console.log("--------");
        console.log("SelectType.change initialized");
        view.displayDishes($(this).find("option:selected").val());
    });

    view.searchButton.click(function()
    {
        console.log("Explore the unknwn");
        view.displayDishes($(view.selectType).val(), $(view.searchTxt).val());
    });

}
