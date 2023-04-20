/* flasher */
let about_book = `<i>Join Marmalade, an adventurous little mouse, as she sets off
					on a thrilling quest to find the ancient Mouse Kingdom\'s treasure. 
					Along the way, she befriends a wise owl, a brave hedgehog, 
					and a clever fox. Together, they overcome obstacles, solve riddles, 
					and learn the true power of friendship. 
					Will Marmalade and her friends uncover the long-lost treasure? 
					Dive into this enchanting tale to find out!</i>`;
let about_author = `<i>The author of \"The Incredible Journey of Marmalade the Mouse\" 
					loves to weave delightful stories that spark the imagination of young readers. 
					With a unique knack for dreaming up whimsical adventures, 
					the author draws upon a vast treasure trove of knowledge and creativity. 
					Their curiosity knows no bounds, and their ability to connect with 
					children through enchanting tales has made them a beloved storyteller 
					among both kids and adults alike.</i>`;
let duration = 1000;
let btns = document.getElementsByClassName("flashing_btn");

window.onload = (event) => {
  document.querySelector('#info_content').innerHTML = about_book;
};


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
		}, duration); // in millis
		};
}

document.querySelector("#top_image").addEventListener('click', function(){
		document.location.href = "about_author.html";
	});
	
document.querySelector(".top_menu").querySelector("img").addEventListener('click', function(){
		document.location.href = "https://www.reddit.com/r/PetMice/";
	});
	
  document.querySelectorAll('.flashing_btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
    });
  });


