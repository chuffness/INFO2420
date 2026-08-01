// JavaScript Document

	PrintButton1 = new Image
	PrintButton2 = new Image
	logo1 = new Image
	logo2 = new Image
if (document.images) {
	PrintButton1.src = "Images/Project6_Images/print5.gif"
	PrintButton2.src = "Images/Project6_Images/print6.gif"
	logo1.src = "Images/Project6_Images/logo1.png"
	logo2.src = "Images/Project6_Images/logo2.png"
}


		var imgArray = new Array(
			'Image1Lg.jpg',
			'Image2Lg.jpg',
			'Image3Lg.jpg',
			'Image4Lg.jpg'
		);


		var titleArray = new Array(
			'Couples Mountainbiking',
			'Couples Cooking',
			'Couples Hiking',
			'Mountaineering'
			
		);
			
		var imgPath = "Images/Project6_Images/FullSize/";
		
		function swapImage(imgID) {

			var theImage = document.getElementById('theImage');
			var textDiv = document.getElementById('bottomText');

			var newImg;
			var textTitle;

			newImg = imgArray[imgID];
			theImage.src = imgPath + newImg;

			textTitle=titleArray[imgID];

      			textDiv.innerHTML = textTitle;
		}
			
		function preloadImages() {		
			for(var i = 0; i < imgArray.length; i++) {
				var tmpImg = new Image;
				tmpImg.src = imgPath + imgArray[i];
			}
		}
		
