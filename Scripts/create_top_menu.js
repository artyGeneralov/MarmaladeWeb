let main = document.createElement('div');
let logo = document.createElement('img');
let buttons = 	[
					["Home", "index.html"], 
					["About", "about_author.html"]
				];
let logo_path = "Images/logo_mouse.png";
main.setAttribute('class','top_menu');
// logo:
let lo = document.createElement('img');
lo.setAttribute('src', logo_path);
main.appendChild(lo);
// buttons:
for(let i = 0; i < buttons.length; i++){
	let el = document.createElement('a');
	el.setAttribute('href', buttons[i][1]);
	el.innerHTML = buttons[i][0];
	main.appendChild(el);
}
document.body.appendChild(main);
