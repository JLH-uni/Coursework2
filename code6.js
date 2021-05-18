gdjs.ControlsCode = {};
gdjs.ControlsCode.GDmainMenuObjects1= [];
gdjs.ControlsCode.GDmainMenuObjects2= [];
gdjs.ControlsCode.GDbackgroundObjects1= [];
gdjs.ControlsCode.GDbackgroundObjects2= [];

gdjs.ControlsCode.conditionTrue_0 = {val:false};
gdjs.ControlsCode.condition0IsTrue_0 = {val:false};
gdjs.ControlsCode.condition1IsTrue_0 = {val:false};


gdjs.ControlsCode.mapOfGDgdjs_46ControlsCode_46GDmainMenuObjects1Objects = Hashtable.newFrom({"mainMenu": gdjs.ControlsCode.GDmainMenuObjects1});gdjs.ControlsCode.eventsList0 = function(runtimeScene) {

{


gdjs.ControlsCode.condition0IsTrue_0.val = false;
{
gdjs.ControlsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.ControlsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


};gdjs.ControlsCode.mapOfGDgdjs_46ControlsCode_46GDmainMenuObjects1Objects = Hashtable.newFrom({"mainMenu": gdjs.ControlsCode.GDmainMenuObjects1});gdjs.ControlsCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("mainMenu"), gdjs.ControlsCode.GDmainMenuObjects1);

gdjs.ControlsCode.condition0IsTrue_0.val = false;
{
gdjs.ControlsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ControlsCode.mapOfGDgdjs_46ControlsCode_46GDmainMenuObjects1Objects, runtimeScene, true, false);
}if (gdjs.ControlsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ControlsCode.GDmainMenuObjects1 */
{for(var i = 0, len = gdjs.ControlsCode.GDmainMenuObjects1.length ;i < len;++i) {
    gdjs.ControlsCode.GDmainMenuObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.ControlsCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainMenu"), gdjs.ControlsCode.GDmainMenuObjects1);

gdjs.ControlsCode.condition0IsTrue_0.val = false;
{
gdjs.ControlsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ControlsCode.mapOfGDgdjs_46ControlsCode_46GDmainMenuObjects1Objects, runtimeScene, true, true);
}if (gdjs.ControlsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ControlsCode.GDmainMenuObjects1 */
{for(var i = 0, len = gdjs.ControlsCode.GDmainMenuObjects1.length ;i < len;++i) {
    gdjs.ControlsCode.GDmainMenuObjects1[i].setAnimation(0);
}
}}

}


{


{
}

}


};

gdjs.ControlsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ControlsCode.GDmainMenuObjects1.length = 0;
gdjs.ControlsCode.GDmainMenuObjects2.length = 0;
gdjs.ControlsCode.GDbackgroundObjects1.length = 0;
gdjs.ControlsCode.GDbackgroundObjects2.length = 0;

gdjs.ControlsCode.eventsList1(runtimeScene);
return;

}

gdjs['ControlsCode'] = gdjs.ControlsCode;
