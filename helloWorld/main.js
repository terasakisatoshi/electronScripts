const{ app, BrowserWindow } =require("electron")
let win;
function createWindow(){
    win=new BrowserWindow({width:800,height:600});
    win.loadURL('file://' + __dirname + '/index.html')
    //this sentence cannnot work on Windows10
    //win.loadURL('file://${__dirname}/index.html')
    win.on("closed",()=>{win=null;});
}

app.on("ready",createWindow);
app.on("window-all-closed",()=>{
    if(process.platform!=="darwin"){
        app.quit();
    }
});

app.on("active",()=>{
    if(win===null){
        createWindow();
    }
});