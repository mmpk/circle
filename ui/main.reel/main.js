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
            /*
            var t = false;
            var flow = this.templateObjects.flow;
            var r = this.templateObjects.range;
            flow.addBeforePathChangeListener("scroll", function(v){
                console.log("SCROLL: " + Math.round(v))  
                if(t)
                {
                     r.content= r.content.concat(r.content)
                    console.log(r.content)
                }
                t= true
            });
            */
        }
    },

    handleMouseHover: {
        value: function () {
            console.log("HOVER CAPTURE")
        }
    }

});
