
let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'PersonalizeTheme/default.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'PersonalizeTheme/blue.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = 'PersonalizeTheme/green.css'
	}

	if(mode == 'yellow'){
		document.getElementById('theme-style').href = 'PersonalizeTheme/yellow.css'
	}

	localStorage.setItem('theme', mode)
}
