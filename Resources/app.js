var webview = Titanium.UI.createWebView({url:'facebook.html'});
var window = Titanium.UI.createWindow();
window.add(webview);
window.open({modal:true});
