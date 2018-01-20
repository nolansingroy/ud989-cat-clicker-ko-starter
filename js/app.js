// first make view model



//put model in view model
//functionality first


//create variables
//name clickcount img scr imgattribution
var Cat = function() {
this.clickCount = ko.observable(0);
this.name = ko.observable('Tabby');
this.imgSrc = ko.observable('img/tabby.jpg')
this.imgAttribution = ko.observable('https://www.flickr.com/photos/big')
this.nicknames = ko.observableArray(['small cat','medium cat','large cat']);


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
        this.currentCat = ko.observable( new Cat() );
	this.incrementCounter = function() {
            this.currentCat().clickCount(this.currentCat().clickCount() +1);
	};
}
ko.applyBindings(new ViewModel());
