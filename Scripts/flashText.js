/* flasher */
var about_book = "Join Marmalade, an adventurous little mouse, as she sets off on a thrilling quest to find the ancient Mouse Kingdom's treasure. Along the way, she befriends a wise owl, a brave hedgehog, and a clever fox. Together, they overcome obstacles, solve riddles, and learn the true power of friendship. Will Marmalade and her friends uncover the long-lost treasure? Dive into this enchanting tale to find out! ";

var about_author = "The author of \"The Incredible Journey of Marmalade the Mouse\" loves to weave delightful stories that spark the imagination of young readers. With a unique knack for dreaming up whimsical adventures, the author draws upon a vast treasure trove of knowledge and creativity. Their curiosity knows no bounds, and their ability to connect with children through enchanting tales has made them a beloved storyteller among both kids and adults alike.";


var duration = 1000;
var state = "about_book";
/*document.querySelectorAll('.flashing_btn').forEach(function(button) {
	console.log(1);
  button.addEventListener('click', function() {
	
	//set content
	
	
	// flash
    var infoBox = this.closest('#right').querySelector('.info_box');
    infoBox.classList.add('flash');
    setTimeout(function() {
      infoBox.classList.remove('flash');
    }, duration); // The duration of the animation in milliseconds
  });
});*/


let btns = document.getElementsByClassName("flashing_btn");
for(let i = 0; i < btns.length; i++){
	btns[i].onclick = () => {
		event.preventDefault;
		let curButton = btns[i].textContent;
		console.log(curButton);
		let curTxt;
		switch(curButton){
			case "About the Book":
				curTxt = about_book;
				break;
			case "About the Author":
				curTxt = about_author;
				break;
			default:
				break;
			}
			console.log(curTxt);
			document.querySelector('#info_content').innerHTML = curTxt;	
			
		var infoBox = btns[i].closest('#right').querySelector('.info_box');
		infoBox.classList.add('flash');
		setTimeout(function() {
		infoBox.classList.remove('flash');
		}, duration); // The duration of the animation in milliseconds
		};
}
/* Change content */



