// add cats, but could also load this data froma  server
var initialCats = [{
    clickCount: 0,
    name: 'Tabby',
    imgSrc: 'img/small.jpg',
    imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568'
  },
  {
    clickCount: 0,
    name: 'Tiger',
    imgSrc: 'img/tiger.jpg',
    imgAttribution: 'https://flickr.com/photos/kpjas',
    nicknames: ['Tigger']
  },
  {
    clickCount: 0,
    name: 'Scaredy',
    imgSrc: 'img/ready.jpg',
    imgAttribution: 'https://flickr.com/photos/kpjas',
    nicknames: ['casper']
  },
  {
    clickCount: 0,
    name: 'snow',
    imgSrc: 'img/small.jpg',
    imgAttribution: 'https://flickr.com/photos/kpjas',
    nicknames: ['snowbaby']
  },
  {
    clickCount: 0,
    name: 'ready',
    imgSrc: 'img/ready.jpg',
    imgAttribution: 'https://flickr.com/photos/kpjas',
    nicknames: ['babyCakes']
  }

]


//put model in view model
//functionality first


//create variables
//name clickcount img scr imgattribution
var Cat = function(data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);
  this.nicknames = ko.observableArray(data.nicknames);


  this.title = ko.computed(function() {
    var title;
    var clicks = this.clickCount();
    if (clicks < 10) {
      title = 'baby';
    } else if (clicks < 15) {
      title = 'toddler';
    } else {
      title = 'Child';
    }
    return title;
  }, this);
}
//alert('The first element is ' + myObservableArray()[0]);

var ViewModel = function() {
  var self = this;

  this.catList = ko.observableArray([]);

  initialCats.forEach(function(catItem) {
    self.catList.push(new Cat(catItem));
  });

this.currentCat = ko.observable(this.catList()[0]);

this.incrementCounter = function() {
  self.currentCat().clickCount(self.currentCat().clickCount() + 1);
};

this.setCat = function(clickedCat) {
  console.log('hi');
    self.currentCat(clickedCat);
};

};
ko.applyBindings(new ViewModel());
