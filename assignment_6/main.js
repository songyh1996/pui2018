function Item(image, name, yarn, filling, quantity, price) {
  this.image = image;
  this.name = name;
  this.yarn = yarn;
  this.filling = filling;
  this.quantity = quantity;
  this.price = price;
}

// Product Detail Page JS
$(document).ready(function() {
	var items = [];
  	var items = JSON.parse(localStorage.getItem("savedItems"));
  	var wishes = [];
  	var wishes = JSON.parse(localStorage.getItem("wishlist"));
	// Yarn Color
	$("#yarn-1").click(function() {
		$("#yarn-color").text("After School Special");
		$("#gallery-main-image").attr("src","images/couch_pillow/yarn1/gallery-main.png");
		$("#thumbnail-1").attr("src","images/couch_pillow/yarn1/thumbnail-1.png");
		$("#thumbnail-2").attr("src","images/couch_pillow/yarn1/thumbnail-2.png");
		$("#thumbnail-3").attr("src","images/couch_pillow/yarn1/thumbnail-3.png");
		$("#thumbnail-4").attr("src","images/couch_pillow/yarn1/thumbnail-4.png");
  	});

	$("#yarn-2").click(function() {
		$("#yarn-color").text("Morning Haze");
		$("#gallery-main-image").attr("src","images/couch_pillow/yarn2/gallery-main.png");
		$("#thumbnail-1").attr("src","images/couch_pillow/yarn2/thumbnail-1.png");
		$("#thumbnail-2").attr("src","images/couch_pillow/yarn2/thumbnail-2.png");
		$("#thumbnail-3").attr("src","images/couch_pillow/yarn2/thumbnail-3.png");
		$("#thumbnail-4").attr("src","images/couch_pillow/yarn2/thumbnail-4.png");
  	});

	$("#yarn-3").click(function() {
		$("#yarn-color").text("Cozy Denim");
		$("#gallery-main-image").attr("src","images/couch_pillow/yarn3/gallery-main.png");
		$("#thumbnail-1").attr("src","images/couch_pillow/yarn3/thumbnail-1.png");
		$("#thumbnail-2").attr("src","images/couch_pillow/yarn3/thumbnail-2.png");
		$("#thumbnail-3").attr("src","images/couch_pillow/yarn3/thumbnail-3.png");
		$("#thumbnail-4").attr("src","images/couch_pillow/yarn3/thumbnail-4.png");
  	});

	$("#yarn-4").click(function() {
		$("#yarn-color").text("Rainy Day");
		$("#gallery-main-image").attr("src","images/couch_pillow/yarn4/gallery-main.png");
		$("#thumbnail-1").attr("src","images/couch_pillow/yarn4/thumbnail-1.png");
		$("#thumbnail-2").attr("src","images/couch_pillow/yarn4/thumbnail-2.png");
		$("#thumbnail-3").attr("src","images/couch_pillow/yarn4/thumbnail-3.png");
		$("#thumbnail-4").attr("src","images/couch_pillow/yarn4/thumbnail-4.png");
  	});

	// Filling
	$("#filling-1").click(function() {
		$("#filling-choice").text("Duck Down");
		$(".card-price").text("$36");
  	});

	$("#filling-2").click(function() {
		$("#filling-choice").text("Hypoallergenic Poly-Blend (+$14)");
		$(".card-price").text("$50");
  	});

	$("#filling-3").click(function() {
		$("#filling-choice").text("Memory Foam (+$39)");
		$(".card-price").text("$75");
  	});

	// Add to cart
  	$(".secondary-button").click(function() {
  		let image = $("#gallery-main-image").attr('src');
  		let name = $('.product-title')[0].textContent;
  		let yarn = $('#yarn-color')[0].textContent;
  		let filling = $('#filling-choice')[0].textContent;
  		let quantity = $('.quantity')[0].value;
  		let price = $('.card-price')[0].textContent.substr(1);
  		item = new Item(image, name, yarn, filling, quantity, price);
  		if (items == null) {
  			items = [];
  			items.push(item);
  		}
  		else {
  			items.push(item);
  		}
  		console.log(items);
  		localStorage.setItem("savedItems", JSON.stringify(items));
  	})

  	// Add to wishlist
  	$(".primary-button").click(function() {
  		let image = $("#gallery-main-image").attr('src');
  		let name = $('.product-title')[0].textContent;
  		let yarn = $('#yarn-color')[0].textContent;
  		let filling = $('#filling-choice')[0].textContent;
  		let quantity = $('.quantity')[0].value;
  		let price = $('.card-price')[0].textContent.substr(1);
  		item = new Item(image, name, yarn, filling, quantity, price);
  		if (wishes == null) {
  			wishes = [];
  			wishes.push(item);
  		}
  		else {
  			wishes.push(item);
  		}
  		localStorage.setItem("wishlist", JSON.stringify(wishes));
  	})

  	// Creating Cart Page
   	var items_checkout = JSON.parse(localStorage.getItem("savedItems"));
   	if (items_checkout.length == 0) {
   		$("body #checkout-box").append(
  			'<div class="empty-message"> Your Cart is empty.</div>');
   	}
   	let totalPrice = parseInt(0);
   	for (x = 0; x < items_checkout.length; x++) {
  		$("body #checkout-box").append(
  			'<div class="checkout-item">\
  				<div class="checkout-image"> \
					<img class="checkout-image-file" src="' + items_checkout[x].image + '">\
				</div>\
				<div class="checkout-name"><br> \
					<span class="checkout-product-name">' + items_checkout[x].name + '</span><br>\
					<span class="checkout-product-yarn" id="checkout-product-options">-' + items_checkout[x].yarn +'</span><br>\
					<span class="checkout-product-filling" id="checkout-product-options">-' + items_checkout[x].filling + '</span>\
				</div><div class="checkout-quantity">' + items_checkout[x].quantity + '</div>\
			<div class="checkout-price">$' + items_checkout[x].price + '</div>\
			<div class="checkout-delete"><img id="'+ x +'"class="trash" src="images/trash.svg"</div>\
		</div>');

   		$(".checkout-image-file").attr("style","height: 90px;");
   		$(".trash").attr("style","height: 20px; margin-top: 35px");
   		totalPrice = parseInt(totalPrice) + parseInt(items_checkout[x].price);
   	}

   	  	$("body .checkout-container").append(
  			'<br><br><h3>Your Total: $'+ totalPrice + '</h3>');

   	// Remove from cart
	$(document).on("click", '.trash', function() {
  		var items = JSON.parse(localStorage.getItem("savedItems"));
   	 	totalPrice = parseInt(totalPrice) - parseInt(items[event.target.id].price);
		items.splice([event.target.id],1);
		localStorage.setItem("savedItems", JSON.stringify(items));
  	 	var items_checkout = JSON.parse(localStorage.getItem("savedItems"));
		$("body #checkout-box").children("div").remove();
		$("body .checkout-container").children("h3").remove();
		for (x = 0; x < items_checkout.length; x++) {
	  		$("body #checkout-box").append(
	  			'<div class="checkout-item">\
	  				<div class="checkout-image"> \
						<img class="checkout-image-file" src="' + items_checkout[x].image + '">\
					</div>\
					<div class="checkout-name"><br> \
						<span class="checkout-product-name">' + items_checkout[x].name + '</span><br>\
						<span class="checkout-product-yarn" id="checkout-product-options">-' + items_checkout[x].yarn +'</span><br>\
						<span class="checkout-product-filling" id="checkout-product-options">-' + items_checkout[x].filling + '</span>\
					</div><div class="checkout-quantity">' + items_checkout[x].quantity + '</div>\
				<div class="checkout-price">$' + items_checkout[x].price + '</div>\
				<div class="checkout-delete"><img id="'+ x +'"class="trash" src="images/trash.svg"</div>\
			</div>');
	   		$(".checkout-image-file").attr("style","height: 90px;");
	   		$(".trash").attr("style","height: 20px; margin-top: 35px");
	   	}
	   	$("body .checkout-container").append(
  			'<br><br><h3>Your Total: $'+ totalPrice + '</h3>');
	   	if (items_checkout.length == 0) {
	   		$("body #checkout-box").append(
	  			'<div class="empty-message"> Your Cart is empty.</div>');
	   	}

	});

	// Create wishlist page
   	var items_wishlist = JSON.parse(localStorage.getItem("wishlist"));
   	if (items_wishlist.length == 0) {
   		$("body #wishlist-box").append(
  			'<div class="empty-message"> Your Wishlist is empty.</div>');
   	}
   	for (x = 0; x < items_wishlist.length; x++) {
  		$("body #wishlist-box").append(
  			'<div class="checkout-item">\
  				<div class="checkout-image"> \
					<img class="checkout-image-file" src="' + items_wishlist[x].image + '">\
				</div>\
				<div class="checkout-name"><br> \
					<span class="checkout-product-name">' + items_wishlist[x].name + '</span><br>\
					<span class="checkout-product-yarn" id="checkout-product-options">-' + items_wishlist[x].yarn +'</span><br>\
					<span class="checkout-product-filling" id="checkout-product-options">-' + items_wishlist[x].filling + '</span>\
				</div><div class="checkout-quantity">' + items_wishlist[x].quantity + '</div>\
			<div class="checkout-price">$' + items_wishlist[x].price + '</div>\
			<div class="checkout-delete"><img id="'+ x +'"class="trash-wishlist" src="images/trash.svg"</div>\
		</div>');

   		$(".checkout-image-file").attr("style","height: 90px;");
   		$(".trash-wishlist").attr("style","height: 20px; margin-top: 35px");
   	}

   	// Remove from wishlist
	$(document).on("click", '.trash-wishlist', function() {
  		var items = JSON.parse(localStorage.getItem("wishlist"));
		items.splice([event.target.id],1);
		localStorage.setItem("wishlist", JSON.stringify(items));
  	 	var items_wishlist = JSON.parse(localStorage.getItem("wishlist"));
		$("body #wishlist-box").children("div").remove();
		$("body .wishlist-container").children("h3").remove();
		for (x = 0; x < items_wishlist.length; x++) {
	  		$("body #wishlist-box").append(
	  			'<div class="checkout-item">\
	  				<div class="checkout-image"> \
						<img class="checkout-image-file" src="' + items_wishlist[x].image + '">\
					</div>\
					<div class="checkout-name"><br> \
						<span class="checkout-product-name">' + items_wishlist[x].name + '</span><br>\
						<span class="checkout-product-yarn" id="checkout-product-options">-' + items_wishlist[x].yarn +'</span><br>\
						<span class="checkout-product-filling" id="checkout-product-options">-' + items_wishlist[x].filling + '</span>\
					</div><div class="checkout-quantity">' + items_wishlist[x].quantity + '</div>\
				<div class="checkout-price">$' + items_wishlist[x].price + '</div>\
				<div class="checkout-delete"><img id="'+ x +'"class="trash-wishlist" src="images/trash.svg"</div>\
			</div>');
	   		$(".checkout-image-file").attr("style","height: 90px;");
	   		$(".trash-wishlist").attr("style","height: 20px; margin-top: 35px");
	   	}
	   	if (items_wishlist.length == 0) {
   			$("body #wishlist-box").append('<div class="empty-message"> Your Wishlist is empty.</div>');
   		}
	});

});