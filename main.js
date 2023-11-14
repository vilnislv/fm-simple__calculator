// ||Color Changer
const colorThemes = document.querySelectorAll('[name="theme"]');

const storeTheme = function(theme) {
  localStorage.setItem("theme", theme);
};

const setTheme = function() {
  const activeTheme = localStorage.getItem("theme");
  colorThemes.forEach((themeOption) => {
    if (themeOption.id === activeTheme) {
      themeOption.checked = true;
    }
  }); 
  document.documentElement.className = theme;
};

colorThemes.forEach(themeOption => {
  themeOption.addEventListener('click', () => {
    storeTheme(themeOption.id);
  });
});

// ||Calculator functionality
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
  button.addEventListener('click', (e) => {
    if(e.target.innerHTML == '=') {
      string = eval(string);
      input.value = string;
    }
    else if(e.target.innerHTML =='RESET') {
      string = "";
      input.value = string;
    }
    else if(e.target.innerHTML == 'DEL') {
      string = input.value.substring(0, string.length-1);
      input.value = string;
    }
    else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
