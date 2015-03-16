	this.editdinnerButton = container.find("#dinnerButton");
	modell.addObserver(this);
//	console.log('dinner_overview');	
//	var currentDishes = [];
//	var id=[100];
	
	
	
		
	this.update = function()
	{
		var dishes = modell.menu; //REPLACE with menu array
			var totPriceList= []; //stores the total prices of individual dishes
			var guests = modell.getNumberOfGuests(); //REPLACE with modell.getNumberOfGuests();
//			console.log(guests);
		//	console.log('menu '+menu);
		//	console.log(dishes.length)
			
				//Makes container for each dish in menu
			container.find('#overview_content').html('')
			for (i in dishes)
				{
					var priceList = []; //stores the prices on ingredients
					
		//			console.log('inside dishes-loop');
					var id = dishes[i];
					var ingred = modell.getDish(id)['ingredients']; //stores the ingredients for price-calc
					//Adds the prices of ingred to priceList

					for (i=0;i<ingred.length;i++){			
						var price = modell.getDish(id)['ingredients'][i]['price']+' kr';							
						priceList.push(price);

		//				console.log('inside priceList-loop');	
						
					}	
		//			console.log(priceList.length);
					//Calculates total price in priceList
					var totPrice = 0;	
							
					for(j=0;j<priceList.length;j++){
		//				console.log(j);
						totPrice += modell.getDish(id)['ingredients'][j]['price']*guests;
		//				console.log('inside tot-loop');
					}
					totPriceList.push(totPrice);
		//			console.log('totPrice '+totPrice);
					
					//Makes the container and adds the content to html
					
					container.find('#overview_content').append(	
						$('<div>')
						.addClass('dish')
						.addClass('container-fluid')
						.attr('style', 'float:left;margin:20px;padding:0')
						.append(
							$('<img>')
							.attr('src', 'images/'+modell.getDish(id)['image'])
							.attr('style', 'width:150px;height:128px;border:3px solid black')
						)
						.append(
							$('<p>')
							.attr('style', 'width:150px;border:3px solid black;border-top:0px;background:#D3D3D3;float:top')
							.html(modell.getDish(id)['name'])
						)
						.append(
							$('<p>')
							.attr('id', 'price')
							.html('Price: '+totPrice+' kr')
						)	
					)
					
				}
//				console.log(totPriceList)
				var finalPrice = 0;
				for(key in totPriceList){
					finalPrice+=totPriceList[key];
				}	
				container.find('#overview_content').append(
					$('<div>')
					.addClass('dish')
					.addClass('container-fluid')
					.attr('style', 'float:left;margin:20px;padding:0')
					.append(
						$('<p>')
						.html('Total Price: '+finalPrice)
					)
					.append('<button align="center"class="btn btn-default" style="text-align:center">Print Full Recipe</button>')
				)
			
	}
	
	this.update();

}
 
