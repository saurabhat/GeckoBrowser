var iframe = document.getElementsByTagName('iframe')[0];
var url = iframe.src;
var getData = function (data) {
   };
var loadURL = function (src) {
    url = src;
    var script = document.createElement('script');
    //script.text = 'alert(document.getElementsByTagName("h2")[0].innerHTML)';
    document.body.appendChild(script);
    loadHTML("Error something")
};
var loadHTML = function (html) {
    //iframe.src = url;
    iframe.contentWindow.document.getElementsByTagName("h2")[0].innerHTML = "Hello JavaScript!"

    //iframe.contentWindow.document.write('<scr' + 'ipt>alert("hey");</scr' + 'ipt>');
    //iframe.contentWindow.document.close();
}

loadURL(iframe.src);