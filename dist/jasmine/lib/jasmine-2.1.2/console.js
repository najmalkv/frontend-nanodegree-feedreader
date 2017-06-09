function getJasmineRequireObj() {
    return "undefined" != typeof module && module.exports ? exports : (window.jasmineRequire = window.jasmineRequire || {}, 
    window.jasmineRequire);
}

getJasmineRequireObj().console = function(e, n) {
    n.ConsoleReporter = e.ConsoleReporter();
}, getJasmineRequireObj().ConsoleReporter = function() {
    function e(e) {
        function t() {
            c("\n");
        }
        function i(e, n) {
            return p ? v[e] + n + v.none : n;
        }
        function o(e, n) {
            return 1 == n ? e : e + "s";
        }
        function r(e, n) {
            for (var t = [], i = 0; i < n; i++) t.push(e);
            return t;
        }
        function s(e, n) {
            for (var t = (e || "").split("\n"), i = [], o = 0; o < t.length; o++) i.push(r(" ", n).join("") + t[o]);
            return i.join("\n");
        }
        function a(e) {
            t(), c(e.fullName);
            for (var n = 0; n < e.failedExpectations.length; n++) {
                var i = e.failedExpectations[n];
                t(), c(s(i.message, 2)), c(s(i.stack, 2));
            }
            t();
        }
        function u(e) {
            for (var n = 0; n < e.failedExpectations.length; n++) t(), c(i("red", "An error was thrown in an afterAll")), 
            t(), c(i("red", "AfterAll " + e.failedExpectations[n].message));
            t();
        }
        var f, l, d, c = e.print, p = e.showColors || !1, m = e.onComplete || function() {}, h = e.timer || n, g = [], v = {
            green: "[32m",
            red: "[31m",
            yellow: "[33m",
            none: "[0m"
        }, w = [];
        return c("ConsoleReporter is deprecated and will be removed in a future version."), 
        this.jasmineStarted = function() {
            f = 0, l = 0, d = 0, c("Started"), t(), h.start();
        }, this.jasmineDone = function() {
            t();
            for (var e = 0; e < g.length; e++) a(g[e]);
            if (f > 0) {
                t();
                var n = f + " " + o("spec", f) + ", " + l + " " + o("failure", l);
                d && (n += ", " + d + " pending " + o("spec", d)), c(n);
            } else c("No specs found");
            t();
            var i = h.elapsed() / 1e3;
            for (c("Finished in " + i + " " + o("second", i)), t(), e = 0; e < w.length; e++) u(w[e]);
            m(0 === l);
        }, this.specDone = function(e) {
            if (f++, "pending" == e.status) return d++, void c(i("yellow", "*"));
            "passed" != e.status ? "failed" == e.status && (l++, g.push(e), c(i("red", "F"))) : c(i("green", "."));
        }, this.suiteDone = function(e) {
            e.failedExpectations && e.failedExpectations.length > 0 && (l++, w.push(e));
        }, this;
    }
    var n = {
        start: function() {},
        elapsed: function() {
            return 0;
        }
    };
    return e;
};