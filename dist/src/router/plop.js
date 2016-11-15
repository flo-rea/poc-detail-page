"use strict";
const Reaptor = require('reaptor');
const React = require('react');
const bootstrap_1 = require('../bootstrap/bootstrap');
const Button = Reaptor.Button.Button;
var Plop;
(function (Plop) {
    function serverRendering(elements) {
        return (React.createElement("body", null, 
            React.createElement("div", {id: "app-container"}, elements), 
            React.createElement("script", {src: "client.js"})));
    }
    Plop.serverRendering = serverRendering;
    function clicked() {
        console.log('wiojfwoifjowefjwoeijf');
    }
    function home() {
        return (React.createElement("div", null, 
            React.createElement("div", null, "Welcome Home!"), 
            React.createElement("div", null, 
                "Send me to the ", 
                React.createElement("button", {onClick: clicked}, "Listing")), 
            React.createElement("div", null, 
                "Send me to the ", 
                React.createElement("button", {onClick: () => goTo('listing')}, "Listing"))));
    }
    Plop.home = home;
    function goTo(link) {
        console.log(`go ${link}`);
        bootstrap_1.default.Application.Router.redirect(link);
    }
    function listing() {
        return (React.createElement("ul", null, 
            React.createElement("li", null, 
                React.createElement(Button, {onClick: () => goTo('home')}, "link 1")
            ), 
            React.createElement("li", null, 
                React.createElement(Button, {onClick: () => goTo('home')}, "link 2")
            ), 
            React.createElement("li", null, 
                React.createElement(Button, {onClick: () => goTo('home')}, "link 3")
            )));
    }
    Plop.listing = listing;
})(Plop = exports.Plop || (exports.Plop = {}));
;
//# sourceMappingURL=plop.js.map