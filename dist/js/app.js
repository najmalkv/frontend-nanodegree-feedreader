function init() {
    loadFeed(0);
}

function loadFeed(e, n) {
    var t = allFeeds[e].url, a = allFeeds[e].name;
    $.ajax({
        type: "POST",
        url: "https://rsstojson.udacity.com/parseFeed",
        data: JSON.stringify({
            url: t
        }),
        contentType: "application/json",
        success: function(e, t) {
            var d = $(".feed"), i = $(".header-title"), l = e.feed.entries, o = (l.length, Handlebars.compile($(".tpl-entry").html()));
            i.html(a), d.empty(), l.forEach(function(e) {
                d.append(o(e));
            }), n && n();
        },
        error: function(e, t, a) {
            n && n();
        },
        dataType: "json"
    });
}

var allFeeds = [ {
    name: "Udacity Blog",
    url: "http://blog.udacity.com/feed"
}, {
    name: "CSS Tricks",
    url: "http://feeds.feedburner.com/CssTricks"
}, {
    name: "HTML5 Rocks",
    url: "http://feeds.feedburner.com/html5rocks"
}, {
    name: "Linear Digressions",
    url: "http://feeds.feedburner.com/udacity-linear-digressions"
} ];

google.setOnLoadCallback(init), $(function() {
    $(".feed");
    var e = $(".feed-list"), n = Handlebars.compile($(".tpl-feed-list-item").html()), t = 0, a = $(".menu-icon-link");
    allFeeds.forEach(function(a) {
        a.id = t, e.append(n(a)), t++;
    }), e.on("click", "a", function() {
        var e = $(this);
        return $("body").addClass("menu-hidden"), loadFeed(e.data("id")), !1;
    }), a.on("click", function() {
        $("body").toggleClass("menu-hidden");
    });
}());