var cls = 'main';
debugMode = false;

var originalBG = "transparent",
    x, y, xy, bgWebKit, bgMoz,
    lowLightIntensityColour = "rgba(187,187,187,0.75)",
    mediumLightIntensityColour = "rgba(128,128,128,0.75)",
    mediumHighLightIntensityColour = "rgba(86,86,86,0.75)",
    highLightIntensityColour = "rgba(68,68,68,0.75)",
    accentLowLightIntensityColour = "rgba(var(--accent-color-hover-r), var(--accent-color-hover-g), var(--accent-color-hover-b), 0.5)"
    gradientSize = 100,
    radioGradientSize = 50,
    inputGradientSize = 110;

document.body.onmousemove = function(e) {
    //mouseLeaveTimer = 0;
    var self = this;
    document.querySelectorAll('header.native nav ul li').forEach(function(el, id) {
        x = e.clientX - self.offsetLeft - el.offsetLeft + document.documentElement.scrollLeft;
        y = e.clientY - self.offsetTop - el.offsetTop + document.documentElement.scrollTop;
        xy = x + " " + y;
        
        if (debugMode) {
        console.log(xy);
        console.log(x);

        console.log("e.clientX: " + e.clientX);
        console.log("e.clientY: " + e.clientY);
        console.log("self.offsetLeft: " + self.offsetLeft);
        console.log("self.offsetTop: " + self.offsetTop);
        console.log("this.offsetLeft: " + el.offsetLeft);
        console.log("this.offsetTop: " + el.offsetTop);
        }

        bgWebKit = "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", " + gradientSize + ", from(" + lowLightIntensityColour + "), to(rgba(255,255,255,0.0))), " + originalBG;
        bgMoz    = "-moz-radial-gradient(" + x + "px " + y + "px 45deg, circle, " + lowLightIntensityColour + " 0%, " + originalBG + " " + gradientSize + "px)";

        el.style.background = bgWebKit;

        if (debugMode) {
            console.log(bgWebKit);
            console.log(e);
            console.log(self);
        }
    })

    document.querySelectorAll('.buttonReveal').forEach(function(el, id) {
        x = e.clientX - self.offsetLeft - el.offsetLeft + document.documentElement.scrollLeft;
        y = e.clientY - self.offsetTop - el.offsetTop + document.documentElement.scrollTop;
        xy = x + " " + y;
        
        if (debugMode) {
        console.log(xy);
        console.log(x);

        console.log("e.clientX: " + e.clientX);
        console.log("e.clientY: " + e.clientY);
        console.log("self.offsetLeft: " + self.offsetLeft);
        console.log("self.offsetTop: " + self.offsetTop);
        console.log("this.offsetLeft: " + el.offsetLeft);
        console.log("this.offsetTop: " + el.offsetTop);
        }

        bgWebKit = "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", " + gradientSize + ", from(" + lowLightIntensityColour + "), to(rgba(255,255,255,0.0))), " + originalBG;
        bgMoz    = "-moz-radial-gradient(" + x + "px " + y + "px 45deg, circle, " + lowLightIntensityColour + " 0%, " + originalBG + " " + gradientSize + "px)";

        el.style.background = bgWebKit;

        if (debugMode) {
            console.log(bgWebKit);
            console.log(e);
            console.log(self);
        }
    })

    document.querySelectorAll('.primaryButtonReveal').forEach(function(el, id) {
        x = e.clientX - self.offsetLeft - el.offsetLeft + document.documentElement.scrollLeft;
        y = e.clientY - self.offsetTop - el.offsetTop + document.documentElement.scrollTop;
        xy = x + " " + y;
        
        if (debugMode) {
        console.log(xy);
        console.log(x);

        console.log("e.clientX: " + e.clientX);
        console.log("e.clientY: " + e.clientY);
        console.log("self.offsetLeft: " + self.offsetLeft);
        console.log("self.offsetTop: " + self.offsetTop);
        console.log("this.offsetLeft: " + el.offsetLeft);
        console.log("this.offsetTop: " + el.offsetTop);
        }

        bgWebKit = "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", " + gradientSize + ", from(" + accentLowLightIntensityColour + "), to(rgba(255,255,255,0.0))), " + originalBG;
        bgMoz    = "-moz-radial-gradient(" + x + "px " + y + "px 45deg, circle, " + accentLowLightIntensityColour + " 0%, " + originalBG + " " + gradientSize + "px)";

        el.style.background = bgWebKit;

        if (debugMode) {
            console.log(bgWebKit);
            console.log(e);
            console.log(self);
        }
    })

    document.querySelectorAll('.inputReveal').forEach(function(el, id) {
        x = e.clientX - self.offsetLeft - el.offsetLeft + document.documentElement.scrollLeft;
        y = e.clientY - self.offsetTop - el.offsetTop + document.documentElement.scrollTop;
        xy = x + " " + y;
        
        if (debugMode) {
        console.log(xy);
        console.log(x);

        console.log("e.clientX: " + e.clientX);
        console.log("e.clientY: " + e.clientY);
        console.log("self.offsetLeft: " + self.offsetLeft);
        console.log("self.offsetTop: " + self.offsetTop);
        console.log("this.offsetLeft: " + el.offsetLeft);
        console.log("this.offsetTop: " + el.offsetTop);
        }

        bgWebKit = "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", " + inputGradientSize + ", from(" + mediumLightIntensityColour + "), to(rgba(255,255,255,0.0))), " + originalBG;
        bgMoz    = "-moz-radial-gradient(" + x + "px " + y + "px 45deg, circle, " + mediumLightIntensityColour + " 0%, " + originalBG + " " + inputGradientSize + "px)";

        el.style.background = bgWebKit;

        if (debugMode) {
            console.log(bgWebKit);
            console.log(e);
            console.log(self);
        }
    })

    document.querySelectorAll('.radioReveal').forEach(function(el, id) {
        if (el.hasChildNodes) {
            if (!el.querySelector("input").checked) {
                x = e.clientX - self.offsetLeft - el.offsetLeft + document.documentElement.scrollLeft;
                y = e.clientY - self.offsetTop - el.offsetTop + document.documentElement.scrollTop;
                xy = x + " " + y;
                
                if (debugMode) {
                console.log(xy);
                console.log(x);

                console.log("e.clientX: " + e.clientX);
                console.log("e.clientY: " + e.clientY);
                console.log("self.offsetLeft: " + self.offsetLeft);
                console.log("self.offsetTop: " + self.offsetTop);
                console.log("this.offsetLeft: " + el.offsetLeft);
                console.log("this.offsetTop: " + el.offsetTop);
                }

                bgWebKit = "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", " + radioGradientSize + ", from(" + mediumHighLightIntensityColour + "), to(rgba(255,255,255,0.0))), " + originalBG;
                bgMoz    = "-moz-radial-gradient(" + x + "px " + y + "px 45deg, circle, " + mediumHighLightIntensityColour + " 0%, " + originalBG + " " + radioGradientSize + "px)";

                el.style.background = bgWebKit;

                if (debugMode) {
                    console.log(bgWebKit);
                    console.log(e);
                    console.log(self);
                }
            } else {
                el.style.background = originalBG;
            }
        }
    })

    document.querySelectorAll('.checkboxReveal').forEach(function(el, id) {
        if (el.hasChildNodes) {
            if (!el.querySelector("input").checked) {
                x = e.clientX - self.offsetLeft - el.offsetLeft + document.documentElement.scrollLeft;
                y = e.clientY - self.offsetTop - el.offsetTop + document.documentElement.scrollTop;
                xy = x + " " + y;
                
                if (debugMode) {
                console.log(xy);
                console.log(x);

                console.log("e.clientX: " + e.clientX);
                console.log("e.clientY: " + e.clientY);
                console.log("self.offsetLeft: " + self.offsetLeft);
                console.log("self.offsetTop: " + self.offsetTop);
                console.log("this.offsetLeft: " + el.offsetLeft);
                console.log("this.offsetTop: " + el.offsetTop);
                }

                bgWebKit = "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", " + radioGradientSize + ", from(" + mediumLightIntensityColour + "), to(rgba(255,255,255,0.0))), " + originalBG;
                bgMoz    = "-moz-radial-gradient(" + x + "px " + y + "px 45deg, circle, " + mediumLightIntensityColour + " 0%, " + originalBG + " " + radioGradientSize + "px)";

                el.style.background = bgWebKit;

                if (debugMode) {
                    console.log(bgWebKit);
                    console.log(e);
                    console.log(self);
                }
            } else {
                el.style.background = originalBG;
            }
        }
    })


}
document.documentElement.onmouseleave = function(e) {
    document.querySelectorAll('.buttonReveal').forEach(function(el, id) {
        el.style.background = originalBG;
    });
}