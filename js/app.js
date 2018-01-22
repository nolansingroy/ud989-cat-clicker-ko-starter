// first make view model



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
	this.currentCat = ko.observable( new Cat({
        clickCount:0,
        name: 'Tabby',
        imgSrc: 'img/...',
        imgAttribution: 'https://www.flickr.com/photos/bigtallguy/43416456',
        nicknames: ['Tabtab','T-Bone','Mr. T', 'Tabitha Tab Tabby Catty Cat']
        }));
	this..incrementCounter = function() {
            self.currentCat().clickCount(self.currentCat().clickCount() +1);
	};
}
ko.applyBindings(new ViewModel());
