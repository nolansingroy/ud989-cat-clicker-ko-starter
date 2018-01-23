// add cats, but could also load this data froma  server
var initial Cats = [
    {
        clickCount : 0,
        name : 'Tabby',
        imgSrc : 'img/434164568_.jpg',
        imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568'
    },
    {
        clickCount : 0,
        name : 'Tiger',
        imgScr : 'img/41545.jpg',
        imgAttribution : 'https://wwflickr.com/photos/xshamx',
        nicknames: ['Tigger']
    },
    {
    name : 'Scaredy',
    imgSrc : 'img/415.jpq',
    imgAttribution : 'https://flickr.com/photos/kpjas',
    nicknames: ['casper']
    }
]



//put model in view model
//functionality first


//create variables
//name clickcount img scr imgattribution
var Cat = function() {
this.clickCount = ko.observable(data.clickCount);
this.name = ko.observable(data.name);
this.imgSrc = ko.observable(data.imgSrc);
this.imgAttribution = ko.observable(data.imgAttribution);
this.nicknames = ko.observableArray(data.nicknames);


this.title = ko.computed(function(){
    var title;
    var clicks = this.clickCount();
    if (clicks < 10){
    title = 'baby';
}   else if (clicks < 15 ){
    title = 'toddler';
}   else {
    title = 'Child';
}return title;
},this);
}
//alert('The first element is ' + myObservableArray()[0]);
var ViewModel = function() {
	var self = this;

        this.catList = ko.observableArray([]);

        initalCats.forEach(function(catItem)){
            self.catList.push(new Cat(catItem) );
        });

	this.currentCat = ko.observable( this.catList() [0] );

	this..incrementCounter = function() {
            self.currentCat().clickCount(self.currentCat().clickCount() +1);
	};
}
ko.applyBindings(new ViewModel());
