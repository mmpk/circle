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
           
            flow.addBeforePathChangeListener("scroll", funtion(v){
                console.log("SCROLL" + v)                                
            });
        }
    }                               
});
