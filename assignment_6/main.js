function Item(image, name, yarn, filling, quantity, price) {
  this.image = image;
  this.name = name;
  this.yarn = yarn;
  this.filling = filling;
  this.quantity = quantity;
  this.price = price;
}

var items = []

$(document).ready(function() {
  	let items = JSON.parse(localStorage.getItem("savedItems"));

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
		$("#yarn-color").text("Cozy Demim");
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

  	$(".secondary-button").click(function() {
  		let image = $("#gallery-main-image").attr('src');
  		let name = $('.product-title')[0].textContent;
  		let yarn = $('#yarn-color')[0].textContent;
  		let filling = $('#filling-choice')[0].textContent;
  		let quantity = $('.quantity')[0].value;
  		let price = $('.card-price')[0].textContent;
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


   	let items_checkout = JSON.parse(localStorage.getItem("savedItems"));
   	image = items_checkout[0].image;
   	$("#checkout-image-file").attr("src",items_checkout[0].image);
});