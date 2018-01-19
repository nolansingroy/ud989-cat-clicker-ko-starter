// first make view model


var ViewModel = function() {

//put model in view model 
//functionality first


//create variables 
//name clickcount img scr imgattribution


this.clickCount = ko.observable(0);
this.name = ko.observable('Tabby');
this.imgSrc = ko.observable('img/tabby.jpg')
this.imgAttribution = ko.observable('https://www.flickr.com/photos/big')

this.incrementCounter = function() {
    this.clickCount(this.clickCount() +1);
};





}


ko.applyBindings(new ViewModel());
