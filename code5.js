gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.GDmainMenuObjects1= [];
gdjs.LeaderboardCode.GDmainMenuObjects2= [];
gdjs.LeaderboardCode.GDTheTownObjects1= [];
gdjs.LeaderboardCode.GDTheTownObjects2= [];
gdjs.LeaderboardCode.GDTheCemeteryObjects1= [];
gdjs.LeaderboardCode.GDTheCemeteryObjects2= [];
gdjs.LeaderboardCode.GDTheChurchObjects1= [];
gdjs.LeaderboardCode.GDTheChurchObjects2= [];
gdjs.LeaderboardCode.GDleaderboardStatsObjects1= [];
gdjs.LeaderboardCode.GDleaderboardStatsObjects2= [];

gdjs.LeaderboardCode.conditionTrue_0 = {val:false};
gdjs.LeaderboardCode.condition0IsTrue_0 = {val:false};
gdjs.LeaderboardCode.condition1IsTrue_0 = {val:false};
gdjs.LeaderboardCode.conditionTrue_1 = {val:false};
gdjs.LeaderboardCode.condition0IsTrue_1 = {val:false};
gdjs.LeaderboardCode.condition1IsTrue_1 = {val:false};


gdjs.LeaderboardCode.mapOfGDgdjs_46LeaderboardCode_46GDmainMenuObjects1Objects = Hashtable.newFrom({"mainMenu": gdjs.LeaderboardCode.GDmainMenuObjects1});gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

{


gdjs.LeaderboardCode.condition0IsTrue_0.val = false;
{
gdjs.LeaderboardCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.LeaderboardCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


};gdjs.LeaderboardCode.mapOfGDgdjs_46LeaderboardCode_46GDmainMenuObjects1Objects = Hashtable.newFrom({"mainMenu": gdjs.LeaderboardCode.GDmainMenuObjects1});gdjs.LeaderboardCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("mainMenu"), gdjs.LeaderboardCode.GDmainMenuObjects1);

gdjs.LeaderboardCode.condition0IsTrue_0.val = false;
{
gdjs.LeaderboardCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LeaderboardCode.mapOfGDgdjs_46LeaderboardCode_46GDmainMenuObjects1Objects, runtimeScene, true, false);
}if (gdjs.LeaderboardCode.condition0IsTrue_0.val) {
/* Reuse gdjs.LeaderboardCode.GDmainMenuObjects1 */
{for(var i = 0, len = gdjs.LeaderboardCode.GDmainMenuObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDmainMenuObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.LeaderboardCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainMenu"), gdjs.LeaderboardCode.GDmainMenuObjects1);

gdjs.LeaderboardCode.condition0IsTrue_0.val = false;
{
gdjs.LeaderboardCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LeaderboardCode.mapOfGDgdjs_46LeaderboardCode_46GDmainMenuObjects1Objects, runtimeScene, true, true);
}if (gdjs.LeaderboardCode.condition0IsTrue_0.val) {
/* Reuse gdjs.LeaderboardCode.GDmainMenuObjects1 */
{for(var i = 0, len = gdjs.LeaderboardCode.GDmainMenuObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDmainMenuObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.LeaderboardCode.condition0IsTrue_0.val = false;
{
{gdjs.LeaderboardCode.conditionTrue_1 = gdjs.LeaderboardCode.condition0IsTrue_0;
gdjs.LeaderboardCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16335988);
}
}if (gdjs.LeaderboardCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TheCemetery"), gdjs.LeaderboardCode.GDTheCemeteryObjects1);
gdjs.copyArray(runtimeScene.getObjects("TheChurch"), gdjs.LeaderboardCode.GDTheChurchObjects1);
gdjs.copyArray(runtimeScene.getObjects("TheTown"), gdjs.LeaderboardCode.GDTheTownObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDTheTownObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDTheTownObjects1[i].setString("The Town: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("TownScore"))));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDTheCemeteryObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDTheCemeteryObjects1[i].setString("The Cemetery: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("CemeteryScore"))));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDTheChurchObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDTheChurchObjects1[i].setString("The Church: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("ChurchScore"))));
}
}}

}


};

gdjs.LeaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardCode.GDmainMenuObjects1.length = 0;
gdjs.LeaderboardCode.GDmainMenuObjects2.length = 0;
gdjs.LeaderboardCode.GDTheTownObjects1.length = 0;
gdjs.LeaderboardCode.GDTheTownObjects2.length = 0;
gdjs.LeaderboardCode.GDTheCemeteryObjects1.length = 0;
gdjs.LeaderboardCode.GDTheCemeteryObjects2.length = 0;
gdjs.LeaderboardCode.GDTheChurchObjects1.length = 0;
gdjs.LeaderboardCode.GDTheChurchObjects2.length = 0;
gdjs.LeaderboardCode.GDleaderboardStatsObjects1.length = 0;
gdjs.LeaderboardCode.GDleaderboardStatsObjects2.length = 0;

gdjs.LeaderboardCode.eventsList1(runtimeScene);
return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;
