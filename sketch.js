var dog,sadDog,happyDog, database; 
var foodS,foodStock; var addFood; 
var foodObj; var lastFed; var feed; 
function preload(){
   sadDog=loadImage("Dog.png");
    happyDog=loadImage("happy dog.png"); 

  } function setup()
   { database=firebase.database();
     createCanvas(1000,400); 
     foodObj = new Food(); 

     foodStock=database.ref('Food');
     foodStock.on("value",readStock); 

      dog=createSprite(800,200,150,150);
      dog.addImage(sadDog); dog.scale=0.15;

      lessFood=createButton("Feed dog"); 
      lessFood.position(900,95);
      lessFood.mousePressed(feedDog); 

      addFood=createButton("Add Food");
      addFood.position(800,95);
      addFood.mousePressed(addFoods);
      } 
      function draw(){ 
      background(46,139,87);
      foodObj.display();
      //write code to read fedtime value from the database 
     fill("white") 
     text("Last Feed:12 AM",500,30); 
     //write code to display text lastFed time here 
      drawSprites();
      } 
      //function to read food Stock
      function readStock(data){ 
      foodS=data.val(); 
      foodObj.updateFoodStock(foodS);
      } 
      function feedDog(){
      dog.addImage(happyDog);
      var food_stock_val = foodObj.getFoodStock();
      if(food_stock_val<= 0 ){ 
      foodObj.updateFoodStock(food_stock_val*0);
      }else{ foodObj.updateFoodStock(food_stock_val -1); 
      } 
      //write code last fed time here 
      if(lastFed>=12){

      }else if(lastFed==0){
       text("Last Feed:12 AM",350,30); 
       }else{ 

       } 
      } 
      //function to add food in stock 
      function addFoods(){
      foodS++; database.ref('/').update({ Food:foodS }) 
      }