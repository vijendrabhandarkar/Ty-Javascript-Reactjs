var fruits = ["apple","Banana","Orange","Mango"]
console.log("-----Fruits---------");
console.log(fruits[0]);
console.log(fruits[1]);



console.log("---------------------------------");
for (var i=0; i<fruits.length;i++){
    console.log("fruits at index "+ i + " " +fruits[i]);
}

console.log("--------------------------------");

for(var i=fruits.length-1; i>=0; i--){
    console.log(`fruit at index ${i} ${fruits[i]}`);
}

console.log("----------------------------------------");

var person=[`Bhagat Singh`,150, `Brown`,false]

for(var i=0;i<person.length;i++){
    console.log(person[i]);

}

console.log(`--------------------------------------`);

var data = [ null , undefined, `string` ,12,true,,,,]
for( var i=0 ; i<data.length; i++){
    console.log(data[i])
}
console.log(`---------------------------------------`);

var movies = new Array(`KGF 2`,`Pushpa`,`RRR`,`Spider no way home`,`Jersey`,`83`)
for (var i=0; i<movies.length; i++){
console.log(movies[i]);
}

console.log(`-------------------------------------------`);


movies.length = 0
movies=[]


console.log(`movies`,movies);

console.log(`----------------------------------------------`);

var books = [{ 
    title :`Javascript`,
    price:  1500
},{
    title : `Java`,
    print : 750
},
{
    title : `python`,
    price : 1000
}
]
for (var i=0 ; i< books.length ; i++){
    console.log(books[i]);
}

console.log(`--------------------`)

for ( var i=0;i< books.length ;i++){
    if (books[i].price>1000) {
        
        console.log(books[i]);
    }
    
}

console.log(`------------------`);
for ( var i=0;i < books.length ;i++){
    if (books[i].title.length>4) {
        
        console.log(books[i]);
    }
    
}

console.log(`-------------------------`);