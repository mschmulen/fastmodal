// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


var winhome = Titanium.UI.createWindow({ title:'home',  backgroundColor:'#fff', url:'home.js' }); 
var tabhome = Titanium.UI.createTab({ icon:'KS_nav_views.png', title:'home', window:winhome });  
tabGroup.addTab(tabhome);

var winone = Titanium.UI.createWindow({ title:'one',  backgroundColor:'#fff', url:'one.js' }); 
var tabone = Titanium.UI.createTab({ icon:'KS_nav_views.png', title:'one', window:winone });  
tabGroup.addTab(tabone);


var wintwo = Titanium.UI.createWindow({ title:'two',  backgroundColor:'#fff', url:'two.js' }); 
var tabtwo = Titanium.UI.createTab({ icon:'KS_nav_views.png', title:'two', window:wintwo });  
tabGroup.addTab(tabtwo);


var winthree = Titanium.UI.createWindow({ title:'three',  backgroundColor:'#fff', url:'three.js' }); 
var tabthree = Titanium.UI.createTab({ icon:'KS_nav_views.png', title:'three', window:winthree });  
tabGroup.addTab(tabthree);


Titanium.include('login.js');
uiLogin.factoryWindow({}).open({modal:true});

// open tab group
tabGroup.open();
