'use strict';

var allProducts= [];
var leftSideImageElement= document.getElementById('left_img');
var middleImageElement= document.getElementById('middle_img');
var rightSideImageElement= document.getElementById('right_img');
var imagesSection=document.getElementById('all_img');
var currentLeftSideImage;
var currentMiddleImage;
var currentRightSideImage;
var totalClicks=0;
var resultsList=document.getElementById('finalResult');


// constructor
function ProductImage(productName,link) {
    this.productName=productName;
    this.link= link;
this.votes=0;
this.timeDisplayed=0;
allProducts.push(this);
}

// creating object

new ProductImage('Bag','img/bag.jpg');
new ProductImage('Banana','img/banana.jpg');
new ProductImage('Bathroom','img/bathroom.jpg');
new ProductImage('Boots','img/boots.jpg');
new ProductImage('Breakfast','img/breakfast.jpg');
new ProductImage('Dubblegum','img/bubblegum.jpg');
new ProductImage('Chair','img/chair.jpg');
new ProductImage('Cthulhu','img/cthulhu.jpg');
new ProductImage('Dog Duck','img/dog-duck.jpg');
new ProductImage('Dragon','img/dragon.jpg');
new ProductImage('Pen','img/pen.jpg');
new ProductImage('Pet Sweep','img/pet-sweep.jpg');
new ProductImage('Scissors','img/scissors.jpg');
new ProductImage('Shark','img/shark.jpg');
new ProductImage('Sweep','img/sweep.png');
new ProductImage('Tauntaun','img/tauntaun.jpg');
new ProductImage('Unicorn','img/unicorn.jpg');
new ProductImage('Usb Gif','img/usb.gif');
new ProductImage('Water Can','img/water-can.jpg');
new ProductImage('Wine Glass','img/wine-glass.jpg');

function displayRandomImages(){
    var leftImageIndex;
    var middleImageIndex;
    var rightImageIndex;
    leftImageIndex=Math.floor((Math.random()*allProducts.length));
    do{
    middleImageIndex=Math.floor((Math.random()*allProducts.length));
}
while(leftImageIndex===middleImageIndex);
do{
rightImageIndex=Math.floor((Math.random()*allProducts.length));
}
while(rightImageIndex===leftImageIndex || rightImageIndex===middleImageIndex)
displayImages(leftImageIndex,middleImageIndex,rightImageIndex);
}

function displayImages(leftIndex,middleIndex,rightIndex) {
    currentLeftSideImage=allProducts[leftIndex];
    currentMiddleImage=allProducts[middleIndex];
    currentRightSideImage=allProducts[rightIndex];
    currentLeftSideImage.timeDisplayed++;
    currentMiddleImage.timeDisplayed++;
    currentRightSideImage.timeDisplayed++;
    leftSideImageElement.setAttribute('src',currentLeftSideImage.link);
    middleImageElement.setAttribute('src',currentMiddleImage.link)
    rightSideImageElement.setAttribute('src',currentRightSideImage.link)
}

displayRandomImages();

imagesSection.addEventListener('click',handleVote);

function handleVote(event){
    var clickedImage;
    if (event.target.id==='left_img'){
        clickedImage=currentLeftSideImage;
    } else if (event.target.id==='middle_img'){
        clickedImage=currentMiddleImage;
    } else if (event.target.id==='right_img') {
        clickedImage=currentRightSideImage;
    }
    if (clickedImage){
        clickedImage.votes++;
        displayRandomImages();
        totalClicks++;
    }
    if (totalClicks>=25) {
        imagesSection.removeEventListener('click',handleVote);
        displayResults();
    }
}

function displayResults() {
var listItem;
for (var i=0; i<allProducts.length;i++){
    listItem=document.createElement('li');
    listItem.textContent='Displayed Times For '+allProducts[i].productName+' is '+allProducts[i].timeDisplayed+' and votes are '+allProducts[i].votes;
    resultsList.appendChild(listItem);
}
}
