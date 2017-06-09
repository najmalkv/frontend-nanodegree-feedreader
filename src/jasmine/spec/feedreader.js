/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

    /* This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This test is to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('all feeds have a url property and it is not empty', function() {

            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });

        });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('all feeds have a name property and it is not empty', function() {

            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });

        });
    });


    /* This suite is all about the menu section */
    describe('The menu', function(){

        /* This is a test that ensures the menu element is
         * hidden by default.
         */

        it('should be hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* This is a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('should toggle visibility when clicked', function(){

            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).not.toBe(true);

            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);

        });

    });

    /* This suite is about the intial entries */
    describe('Intial Entries', function(){


        /* This is a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */

        //  This is run before running every spec.
        beforeEach(function(done){
            /* loads the feed with the first url in the allFeeds array.
             * It runs the callback when its done loading.
             */

            loadFeed(0, function(){

                // Call done() in this call back function to run our spec.
                done();

            });

        });

        it('should load atleast one feed in the feed container' , function(done){

            // Checks if there elements with class .entry in the feed container.
            expect($('.feed').find('.entry').length).not.toBe(0);

            // Call done to inform that we are done with this test.
            done();
        });
    });


    /* This suite is about the new feed selection */
    describe('New Feed Selection', function() {


        /* This is a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */

         var intialContent;

        //  This is run before running every spec.
        beforeEach(function(done){

            // Load the first feed
            loadFeed(0, function(){

                // In the callback store its content in a variable.
                intialContent = $('.feed').html();

                // Load the next feed
                loadFeed(1, function(){

                    // In the callback run done to run our specs.
                    done();

                });
            });

        });

        it('should change when new feed is loaded', function(done) {

            // Checks if the html content of the feed container has changed.
            expect($('.feed').html() !== intialContent).toBe(true);

            // Reset the feed to the intial feed.
            loadFeed(0);

            // Call done to inform that we are done with this test.
            done();
        });
    });

}());
