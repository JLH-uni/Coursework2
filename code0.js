gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.GDplayButtonObjects1= [];
gdjs.Main_32MenuCode.GDplayButtonObjects2= [];
gdjs.Main_32MenuCode.GDplayButtonObjects3= [];
gdjs.Main_32MenuCode.GDexitButtonObjects1= [];
gdjs.Main_32MenuCode.GDexitButtonObjects2= [];
gdjs.Main_32MenuCode.GDexitButtonObjects3= [];
gdjs.Main_32MenuCode.GDcontrolsButtonObjects1= [];
gdjs.Main_32MenuCode.GDcontrolsButtonObjects2= [];
gdjs.Main_32MenuCode.GDcontrolsButtonObjects3= [];
gdjs.Main_32MenuCode.GDaboutButtonObjects1= [];
gdjs.Main_32MenuCode.GDaboutButtonObjects2= [];
gdjs.Main_32MenuCode.GDaboutButtonObjects3= [];
gdjs.Main_32MenuCode.GDleaderboardButtonObjects1= [];
gdjs.Main_32MenuCode.GDleaderboardButtonObjects2= [];
gdjs.Main_32MenuCode.GDleaderboardButtonObjects3= [];
gdjs.Main_32MenuCode.GDbackground3Objects1= [];
gdjs.Main_32MenuCode.GDbackground3Objects2= [];
gdjs.Main_32MenuCode.GDbackground3Objects3= [];
gdjs.Main_32MenuCode.GDtitleObjects1= [];
gdjs.Main_32MenuCode.GDtitleObjects2= [];
gdjs.Main_32MenuCode.GDtitleObjects3= [];
gdjs.Main_32MenuCode.GDoptionsButtonObjects1= [];
gdjs.Main_32MenuCode.GDoptionsButtonObjects2= [];
gdjs.Main_32MenuCode.GDoptionsButtonObjects3= [];

gdjs.Main_32MenuCode.conditionTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition1IsTrue_0 = {val:false};


gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDplayButtonObjects2Objects = Hashtable.newFrom({"playButton": gdjs.Main_32MenuCode.GDplayButtonObjects2});gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "The Church", false);
}}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDplayButtonObjects2Objects = Hashtable.newFrom({"playButton": gdjs.Main_32MenuCode.GDplayButtonObjects2});gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDexitButtonObjects2Objects = Hashtable.newFrom({"exitButton": gdjs.Main_32MenuCode.GDexitButtonObjects2});gdjs.Main_32MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDexitButtonObjects2Objects = Hashtable.newFrom({"exitButton": gdjs.Main_32MenuCode.GDexitButtonObjects2});gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDleaderboardButtonObjects2Objects = Hashtable.newFrom({"leaderboardButton": gdjs.Main_32MenuCode.GDleaderboardButtonObjects2});gdjs.Main_32MenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Leaderboard", false);
}}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDleaderboardButtonObjects2Objects = Hashtable.newFrom({"leaderboardButton": gdjs.Main_32MenuCode.GDleaderboardButtonObjects2});gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDcontrolsButtonObjects2Objects = Hashtable.newFrom({"controlsButton": gdjs.Main_32MenuCode.GDcontrolsButtonObjects2});gdjs.Main_32MenuCode.eventsList3 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Controls", false);
}}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDcontrolsButtonObjects2Objects = Hashtable.newFrom({"controlsButton": gdjs.Main_32MenuCode.GDcontrolsButtonObjects2});gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDoptionsButtonObjects2Objects = Hashtable.newFrom({"optionsButton": gdjs.Main_32MenuCode.GDoptionsButtonObjects2});gdjs.Main_32MenuCode.eventsList4 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Options", false);
}}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDoptionsButtonObjects1Objects = Hashtable.newFrom({"optionsButton": gdjs.Main_32MenuCode.GDoptionsButtonObjects1});gdjs.Main_32MenuCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("playButton"), gdjs.Main_32MenuCode.GDplayButtonObjects2);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDplayButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDplayButtonObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDplayButtonObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDplayButtonObjects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("playButton"), gdjs.Main_32MenuCode.GDplayButtonObjects2);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDplayButtonObjects2Objects, runtimeScene, true, true);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDplayButtonObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDplayButtonObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDplayButtonObjects2[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("exitButton"), gdjs.Main_32MenuCode.GDexitButtonObjects2);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDexitButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDexitButtonObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDexitButtonObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDexitButtonObjects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("exitButton"), gdjs.Main_32MenuCode.GDexitButtonObjects2);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDexitButtonObjects2Objects, runtimeScene, true, true);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDexitButtonObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDexitButtonObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDexitButtonObjects2[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("leaderboardButton"), gdjs.Main_32MenuCode.GDleaderboardButtonObjects2);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDleaderboardButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDleaderboardButtonObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDleaderboardButtonObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDleaderboardButtonObjects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("leaderboardButton"), gdjs.Main_32MenuCode.GDleaderboardButtonObjects2);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDleaderboardButtonObjects2Objects, runtimeScene, true, true);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDleaderboardButtonObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDleaderboardButtonObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDleaderboardButtonObjects2[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("controlsButton"), gdjs.Main_32MenuCode.GDcontrolsButtonObjects2);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDcontrolsButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDcontrolsButtonObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDcontrolsButtonObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDcontrolsButtonObjects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("controlsButton"), gdjs.Main_32MenuCode.GDcontrolsButtonObjects2);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDcontrolsButtonObjects2Objects, runtimeScene, true, true);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDcontrolsButtonObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDcontrolsButtonObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDcontrolsButtonObjects2[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("optionsButton"), gdjs.Main_32MenuCode.GDoptionsButtonObjects2);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDoptionsButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDoptionsButtonObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDoptionsButtonObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDoptionsButtonObjects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("optionsButton"), gdjs.Main_32MenuCode.GDoptionsButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDoptionsButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDoptionsButtonObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDoptionsButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDoptionsButtonObjects1[i].setAnimation(0);
}
}}

}


};gdjs.Main_32MenuCode.eventsList6 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.eventsList5(runtimeScene);
}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "main menu.mp3", 0, true, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)), 1);
}}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDplayButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDplayButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDplayButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDexitButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDexitButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDexitButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDcontrolsButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDcontrolsButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDcontrolsButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDaboutButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDaboutButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDaboutButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDleaderboardButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDleaderboardButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDleaderboardButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDbackground3Objects1.length = 0;
gdjs.Main_32MenuCode.GDbackground3Objects2.length = 0;
gdjs.Main_32MenuCode.GDbackground3Objects3.length = 0;
gdjs.Main_32MenuCode.GDtitleObjects1.length = 0;
gdjs.Main_32MenuCode.GDtitleObjects2.length = 0;
gdjs.Main_32MenuCode.GDtitleObjects3.length = 0;
gdjs.Main_32MenuCode.GDoptionsButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDoptionsButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDoptionsButtonObjects3.length = 0;

gdjs.Main_32MenuCode.eventsList6(runtimeScene);
return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
