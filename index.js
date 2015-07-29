var express = require("express");
var makara = require("makara");
var path = require("path");

var app = express();

var useMakara = true;
var helpers = useMakara ? ["dust-makara-helpers"] : [];

app.engine("dust", makara.dust({
    cache: false,
    helpers: helpers
}));

app.set("views", path.resolve(__dirname, 'app/views'));
app.set('view engine', 'dust');


// don't `use` makara to make it work
if (useMakara) {
    app.use(makara({
        i18n: {
            contentPath: path.resolve(__dirname, "locales"),
            fallback: "en-US"
        }
    }));
}

app.use(function (req, res, next) {
    console.log([req.method,req.url].join(" - "));
    next();
});

app.use(function handleError(err, req, res, next) {
    var errResponse = {
        message: err.message,
        error: err,
        title: 'error'
    };
    res.status(err.status || 500);
    logger.err('error' + res.statusCode, errResponse);
    res.send(JSON.stringify(errResponse, null, 2));
});

app.get("/", function serveIndex(req, res, next) {
    res.render("index", {});
});

app.get("/break", function serveIndex(req, res, next) {
    res.render("break", {});
});

app.listen(3000);
