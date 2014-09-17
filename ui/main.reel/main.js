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
         
            var t = 1;
            var flow = this.templateObjects.flow;
            var r = this.templateObjects.range;
            flow.addBeforePathChangeListener("scroll", function(v){
                console.log("SCROLL: " + Math.round(v))  
                if(v > 4){
                 t++
                r.content.push([7,8,9])
                }
            });
            
        }
    },

    handleMouseover: {
        value: function () {
            console.log("HOVER CAPTURE")
        }
    }

});
