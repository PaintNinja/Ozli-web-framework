// https://stackoverflow.com/questions/9497528/get-html-source-code-as-a-string
// https://github.com/jeremyfa/yaml.js

/*
function runOzliParser() {
    var theDoc = document.getRootNode().documentElement;
    var theBody = document.getElementsByTagName("body")[0];

    var text = YAML.parse(document.getElementsByTagName("ozli")[0].textContent);
    console.log(text);
}
runOzliParser();
*/

var platformName = window.navigator.platform;
var deviceName = WURFL.complete_device_name;
var deviceType = WURFL.form_factor;

document.writeln(platformName);
document.writeln(navigator.oscpu);
document.writeln(deviceName);
console.log(navigator.userAgent);

/*platformName = "iPhone";
deviceName = "iPhone 6S";*/

// https://stackoverflow.com/questions/19877924/what-is-the-list-of-possible-values-for-navigator-platform-as-of-today
if (platformName == "iPhone" || platformName == "iPad" || platformName == "iPod") {
    deviceVer = deviceName.split("iPhone ")[1];
    document.head.innerHTML += '<meta name="apple-mobile-web-app-capable" content="yes"><meta http-equiv="Cache-Control" content="no-cache"/><meta http-equiv="Pragma" content="no-cache"/><meta http-equiv="Expires" content="0" />';
    
    if (deviceVer == "SE" || deviceVer == "5S" || deviceVer == "6" || deviceVer == "6S" || deviceVer == "7" || deviceVer == "8" || deviceVer == "X") {
        document.writeln('<link rel="stylesheet" href="ios.css">');
    } else {
        document.writeln('<link rel="stylesheet" href="ios.css">');
        document.writeln('<link rel="stylesheet" href="ios6.css">');
    }
} else if (navigator.userAgent.includes("NT 6.1")) {
    document.writeln('<link href="general.css" rel="stylesheet">');
    document.writeln('<link rel="stylesheet" href="win7.css">');
} else if (navigator.userAgent.includes("NT 10.0")) {
    document.writeln('<link href="general.css" rel="stylesheet">');
    document.writeln('<link rel="stylesheet" href="win10fluent.css">');
    document.writeln('<script src="win10fluent.js"></script>');
} else {
    document.writeln('<link href="general.css" rel="stylesheet">');
    document.writeln('<link rel="stylesheet" href="win10basic.css">');
}