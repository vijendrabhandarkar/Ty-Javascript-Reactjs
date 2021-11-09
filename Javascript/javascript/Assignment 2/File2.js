var date=new Date('Sept 12 2020')
console.log(date.getDate());
var weeks=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
var x=date.getDay();
var y=date.getMonth();
var months=['January','February','March','April','May','June','July','August','September','October','November','December']
// console.log(weeks[x],months[y],date.getDate(),date.getFullYear());
options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(date.toLocaleDateString("en-US",options))