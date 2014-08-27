/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },
    templateDidLoad: {
        value: function() {
            var flow = this.templateObjects.flow;
            var r = this.templateObjects.range;
            flow.addBeforePathChangeListener("scroll", function(v){
                console.log("SCROLL: " + Math.round(v))  
                //var arr =  r.content.push(r.content.pop())
                var last = r.content.pop()
                console.log("ARR: " + last) 
            });
        }
    }                               
});
