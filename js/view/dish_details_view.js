//ExampleView Object constructor
var DishDetailsView = function (container, modell, ID) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	//modell.addObserver(this);

	var id = ID;
	$("#").html("");
	console.log('dish_details');
	container.find('#details_content').html('')
	container.find('#details_content').append(
					$('<div>')
					.addClass('details')
					.addClass('container-fluid')
					.attr('style', 'float:left')
					.append(
						$('<img>')
						.attr('src', 'images/'+modell.getDish(id)['image'])
					)
					.append(
						$('<h3>')
						
						.html(modell.getDish(id)['name'])
					)
					.append(
						$('<p>')
						.attr('style', 'display:inline;float:left;width:700px')
						.html(modell.getDish(id)['description'])
					)
					.append(
						$('<button>')
						.attr('class','btn btn-default')
						.attr('id', 'btn-back-to-select-dish')
						.html('<hr>')
						.html('Back to Select Dish')
					)
				)
				
	this.backtoselectdishButton = container.find("#btn-back-to-select-dish");

// THIS IS BUYLIST PART:



//	console.log(modell.getDish(id)['ingredients'][0]['name']);
	var ingred = modell.getDish(id)['ingredients'];
	var table = $('<table>').attr('id', 'ingredients');
	var priceList = [];
	var guests = modell.getNumberOfGuests();
	container.find('#ingtable').html('');
	for (i=0;i<ingred.length;i++){
//		console.log(ingred.length);			
				table.append(
					$('<tr>')
					.append(
						$('<td>')
						.attr('id', 'quantity')
						.attr('style', 'padding:10px')
						.html(modell.getDish(id)['ingredients'][i]['name'])
					)
					.append(
						$('<td>')
						.attr('id', 'quantity')
						.html(modell.getDish(id)['ingredients'][i]['quantity']*guests+' '+modell.getDish(id)['ingredients'][i]['unit'])
					)
					.append(
						$('<td>')
						.attr('id', 'price')
						.html(modell.getDish(id)['ingredients'][i]['price']*guests+' kr')
					)				
				)
			priceList.push(modell.getDish(id)['ingredients'][i]['price']);
	}
	container.find("#ingtable").append(table);
	var totPrice = 0;
	for(i=0;i<priceList.length;i++){
		totPrice += modell.getDish(id)['ingredients'][i]['price']*guests;
	}
	table.append('<tfoot>'+'<tr>'+'<td>'+'<button id="btn-conf-dish" class="btn btn-default">Confirm dish</button>'+'</td>'+'<td>'+'</td>'+'<td>'+totPrice+'kr'+'</td>'+'</tr>'+'<tfoot>');
//	console.log(totPrice)
	this.confdishButton = container.find("#btn-conf-dish");

}
