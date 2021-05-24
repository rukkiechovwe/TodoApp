function SetTheme(themeName) {
   localStorage.setItem('theme', themeName);
   document.documentElement.className = themeName;
}

function KeepTheme() {
 if (localStorage.getItem('theme')) {
   if (localStorage.getItem('theme') === 'theme-dark') {
     SetTheme('theme-dark');
   } else if (localStorage.getItem('theme') === 'theme-light') {
     SetTheme('theme-light')
   }
 } else {
   SetTheme('theme-dark')
 }
}

module.exports = {
 SetTheme,
 KeepTheme
}
