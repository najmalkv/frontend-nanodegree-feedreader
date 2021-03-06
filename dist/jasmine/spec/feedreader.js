$(function() {
    describe("RSS Feeds", function() {
        it("are defined", function() {
            expect(allFeeds).toBeDefined(), expect(allFeeds.length).not.toBe(0);
        }), it("all feeds have a url property and it is not empty", function() {
            allFeeds.forEach(function(e) {
                expect(e.url).toBeDefined(), expect(e.url.length).not.toBe(0);
            });
        }), it("all feeds have a name property and it is not empty", function() {
            allFeeds.forEach(function(e) {
                expect(e.name).toBeDefined(), expect(e.name.length).not.toBe(0);
            });
        });
    }), describe("The menu", function() {
        it("should be hidden by default", function() {
            expect($("body").hasClass("menu-hidden")).toBe(!0);
        }), it("should toggle visibility when clicked", function() {
            $(".menu-icon-link").click(), expect($("body").hasClass("menu-hidden")).not.toBe(!0), 
            $(".menu-icon-link").click(), expect($("body").hasClass("menu-hidden")).toBe(!0);
        });
    }), describe("Intial Entries", function() {
        beforeEach(function(e) {
            loadFeed(0, function() {
                e();
            });
        }), it("should load atleast one feed in the feed container", function(e) {
            expect($(".feed").find(".entry").length).not.toBe(0), e();
        });
    }), describe("New Feed Selection", function() {
        var e;
        beforeEach(function(n) {
            loadFeed(0, function() {
                e = $(".feed").html(), loadFeed(1, function() {
                    n();
                });
            });
        }), it("should change when new feed is loaded", function(n) {
            expect($(".feed").html() !== e).toBe(!0), loadFeed(0), n();
        });
    });
}());