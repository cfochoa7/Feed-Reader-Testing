
$(function() {
/* Sets up the first section made up of 3 tests in a function named 'RSS Feeds'. This function
is to ensure that the variable 'allFeeds' is defined properly and not have any empty objects*/
    describe('RSS Feeds', function() {
/* The first test sets up as 'are defined'. This trial will expect that
the variable 'allFeeds' is defined. In this case it is set as 4 objects with each set of 'name' & 'url'.
It will also expect that the length of the object not to be an empty string*/
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
/*Within the 'allFeeds', a test of 'URL defined' will make sure that each url is defined
and that each one does not have an empty string. This is accomplished through the for loop.*/
         it('URL defined', function() {
           for(i = 0; i < allFeeds.length; i++) {
             expect(allFeeds[i].url).toBeDefined();
             expect(allFeeds[i].url.length).not.toBe('');
          }
         });
/* The same test will be done as with the 'URL defined' only a test of 'Name defined' will make
sure that the name is defined and does not have an empty string.*/
         it('Name defined', function() {
           for(i = 0; i < allFeeds.length; i++) {
             expect(allFeeds[i].name).toBeDefined();
             expect(allFeeds[i].name.length).not.toBe('');
          }
         });
    });



/*Sets up the second section of 'The menu' in order to identify and check the toggle menu's ability
to oepn and close*/
    describe('The menu', function() {
/*A test of 'Hidden' will select from the DOM of 'body' and story it in the variable of 'element'.
Will expect that the classList contains the 'menu-hidden' feature.*/
         it('Hidden', function() {
          const element = document.querySelector('body');
          expect(element.classList).toContain('menu-hidden');

         });
/*A test of 'Visablity' has two variables form the DOM that will make sure that the menu has the ability to be toggled
on and off when clicked.
Influenced from https://matthewcranford.com/feed-reader-walkthrough-part-3-menu-test-suite*/
          it('Visability', function() {
            const access = document.querySelector('.menu-icon-link');
            const element = document.querySelector('body');

            access.click();
            expect(element.classList.contains('menu-hidden')).toBeFalsy();

            access.click();
            expect(element.classList.contains('menu-hidden')).toBeTruthy();

          });
    });



/*The third section creates a function called 'Initial Entries' which will check
that the load feed functions will hold until it is completed. The first loadFeed of 0
will be called. Then the second function will be called to check the loadFeed.*/
    describe('Initial Entries', function() {

        beforeEach(function(done) {
          loadFeed(0, done);
        });
/*The function of 'Completed Work will use a variable that stores both '.feed' & '.entry'.
It will then expect that the completed work will contain the appropriate quantity length.*/
         it('Completed Work', function() {
           const insert = document.querySelector('.feed .entry');
           expect(insert.length).not.toBeLessThan(0);
         });
      });



/*The 'New Feed Selection' will make sure that new content will reload after its
first load. This is coompleted by using the beforeEach(). Within the beforeEach()
a loadFeed of 0 will be called  becoming the first feed. Then along with a loadFeed of 1.
Which will become the second feed.*/
    describe('New Feed Selection', function() {
    const feedOne = document.querySelector('.feed').innerHTML;

    beforeEach(function (done) {
      loadFeed(0, () => {
        loadFeed(1, () => {
          done();
        });
      });
    });
/*The Chaning Content function will check and make sure that both (feedOne & feedTwo)'s .innerHTML
are not equal to each other.*/
         it('Changing Content', function() {
           const feedTwo = document.querySelector('.feed').innerHTML;
           expect(feedOne === feedTwo).toBeFalsy();
         });
       });
}());
