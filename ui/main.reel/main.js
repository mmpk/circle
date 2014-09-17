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
                if(v > t){
                 t++
                 
                r.content.push(   r.content[t] )
                if(t > 12){
                    r.content.splice(0,5)
                     t=1   
                }
                  console.log("LEN: " + r.content.length)  
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
