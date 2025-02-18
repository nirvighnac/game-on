
gdjs.evtsExt__ShakeObject3D__ShakeModel3D = gdjs.evtsExt__ShakeObject3D__ShakeModel3D || {};

/**
 * Behavior generated from 3D shake
 */
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D = class ShakeModel3D extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.TranslationAmplitudeX = behaviorData.TranslationAmplitudeX !== undefined ? behaviorData.TranslationAmplitudeX : Number("0") || 0;
    this._behaviorData.TranslationAmplitudeY = behaviorData.TranslationAmplitudeY !== undefined ? behaviorData.TranslationAmplitudeY : Number("0") || 0;
    this._behaviorData.TranslationAmplitudeZ = behaviorData.TranslationAmplitudeZ !== undefined ? behaviorData.TranslationAmplitudeZ : Number("0") || 0;
    this._behaviorData.RotationAmplitudeX = behaviorData.RotationAmplitudeX !== undefined ? behaviorData.RotationAmplitudeX : Number("5") || 0;
    this._behaviorData.RotationAmplitudeY = behaviorData.RotationAmplitudeY !== undefined ? behaviorData.RotationAmplitudeY : Number("5") || 0;
    this._behaviorData.RotationAmplitudeZ = behaviorData.RotationAmplitudeZ !== undefined ? behaviorData.RotationAmplitudeZ : Number("5") || 0;
    this._behaviorData.Time = Number("") || 0;
    this._behaviorData.Duration = Number("") || 0;
    this._behaviorData.StartEasingDuration = Number("") || 0;
    this._behaviorData.StopEasingDuration = Number("") || 0;
    this._behaviorData.Frequency = behaviorData.Frequency !== undefined ? behaviorData.Frequency : Number("") || 0;
    this._behaviorData.DeltaX = Number("") || 0;
    this._behaviorData.DeltaY = Number("") || 0;
    this._behaviorData.DeltaZ = Number("") || 0;
    this._behaviorData.DeltaAngleX = Number("") || 0;
    this._behaviorData.DeltaAngleY = Number("") || 0;
    this._behaviorData.DeltaAngleZ = Number("") || 0;
    this._behaviorData.NoiseTime = Number("") || 0;
    this._behaviorData.Object3D = behaviorData.Object3D !== undefined ? behaviorData.Object3D : "";
    this._behaviorData.IsStartingAtCreation = behaviorData.IsStartingAtCreation !== undefined ? behaviorData.IsStartingAtCreation : false;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.TranslationAmplitudeX !== newBehaviorData.TranslationAmplitudeX)
      this._behaviorData.TranslationAmplitudeX = newBehaviorData.TranslationAmplitudeX;
    if (oldBehaviorData.TranslationAmplitudeY !== newBehaviorData.TranslationAmplitudeY)
      this._behaviorData.TranslationAmplitudeY = newBehaviorData.TranslationAmplitudeY;
    if (oldBehaviorData.TranslationAmplitudeZ !== newBehaviorData.TranslationAmplitudeZ)
      this._behaviorData.TranslationAmplitudeZ = newBehaviorData.TranslationAmplitudeZ;
    if (oldBehaviorData.RotationAmplitudeX !== newBehaviorData.RotationAmplitudeX)
      this._behaviorData.RotationAmplitudeX = newBehaviorData.RotationAmplitudeX;
    if (oldBehaviorData.RotationAmplitudeY !== newBehaviorData.RotationAmplitudeY)
      this._behaviorData.RotationAmplitudeY = newBehaviorData.RotationAmplitudeY;
    if (oldBehaviorData.RotationAmplitudeZ !== newBehaviorData.RotationAmplitudeZ)
      this._behaviorData.RotationAmplitudeZ = newBehaviorData.RotationAmplitudeZ;
    if (oldBehaviorData.Time !== newBehaviorData.Time)
      this._behaviorData.Time = newBehaviorData.Time;
    if (oldBehaviorData.Duration !== newBehaviorData.Duration)
      this._behaviorData.Duration = newBehaviorData.Duration;
    if (oldBehaviorData.StartEasingDuration !== newBehaviorData.StartEasingDuration)
      this._behaviorData.StartEasingDuration = newBehaviorData.StartEasingDuration;
    if (oldBehaviorData.StopEasingDuration !== newBehaviorData.StopEasingDuration)
      this._behaviorData.StopEasingDuration = newBehaviorData.StopEasingDuration;
    if (oldBehaviorData.Frequency !== newBehaviorData.Frequency)
      this._behaviorData.Frequency = newBehaviorData.Frequency;
    if (oldBehaviorData.DeltaX !== newBehaviorData.DeltaX)
      this._behaviorData.DeltaX = newBehaviorData.DeltaX;
    if (oldBehaviorData.DeltaY !== newBehaviorData.DeltaY)
      this._behaviorData.DeltaY = newBehaviorData.DeltaY;
    if (oldBehaviorData.DeltaZ !== newBehaviorData.DeltaZ)
      this._behaviorData.DeltaZ = newBehaviorData.DeltaZ;
    if (oldBehaviorData.DeltaAngleX !== newBehaviorData.DeltaAngleX)
      this._behaviorData.DeltaAngleX = newBehaviorData.DeltaAngleX;
    if (oldBehaviorData.DeltaAngleY !== newBehaviorData.DeltaAngleY)
      this._behaviorData.DeltaAngleY = newBehaviorData.DeltaAngleY;
    if (oldBehaviorData.DeltaAngleZ !== newBehaviorData.DeltaAngleZ)
      this._behaviorData.DeltaAngleZ = newBehaviorData.DeltaAngleZ;
    if (oldBehaviorData.NoiseTime !== newBehaviorData.NoiseTime)
      this._behaviorData.NoiseTime = newBehaviorData.NoiseTime;
    if (oldBehaviorData.Object3D !== newBehaviorData.Object3D)
      this._behaviorData.Object3D = newBehaviorData.Object3D;
    if (oldBehaviorData.IsStartingAtCreation !== newBehaviorData.IsStartingAtCreation)
      this._behaviorData.IsStartingAtCreation = newBehaviorData.IsStartingAtCreation;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    TranslationAmplitudeX: this._behaviorData.TranslationAmplitudeX,
    TranslationAmplitudeY: this._behaviorData.TranslationAmplitudeY,
    TranslationAmplitudeZ: this._behaviorData.TranslationAmplitudeZ,
    RotationAmplitudeX: this._behaviorData.RotationAmplitudeX,
    RotationAmplitudeY: this._behaviorData.RotationAmplitudeY,
    RotationAmplitudeZ: this._behaviorData.RotationAmplitudeZ,
    Time: this._behaviorData.Time,
    Duration: this._behaviorData.Duration,
    StartEasingDuration: this._behaviorData.StartEasingDuration,
    StopEasingDuration: this._behaviorData.StopEasingDuration,
    Frequency: this._behaviorData.Frequency,
    DeltaX: this._behaviorData.DeltaX,
    DeltaY: this._behaviorData.DeltaY,
    DeltaZ: this._behaviorData.DeltaZ,
    DeltaAngleX: this._behaviorData.DeltaAngleX,
    DeltaAngleY: this._behaviorData.DeltaAngleY,
    DeltaAngleZ: this._behaviorData.DeltaAngleZ,
    NoiseTime: this._behaviorData.NoiseTime,
    Object3D: this._behaviorData.Object3D,
    IsStartingAtCreation: this._behaviorData.IsStartingAtCreation,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.TranslationAmplitudeX !== undefined)
      this._behaviorData.TranslationAmplitudeX = networkSyncData.props.TranslationAmplitudeX;
    if (networkSyncData.props.TranslationAmplitudeY !== undefined)
      this._behaviorData.TranslationAmplitudeY = networkSyncData.props.TranslationAmplitudeY;
    if (networkSyncData.props.TranslationAmplitudeZ !== undefined)
      this._behaviorData.TranslationAmplitudeZ = networkSyncData.props.TranslationAmplitudeZ;
    if (networkSyncData.props.RotationAmplitudeX !== undefined)
      this._behaviorData.RotationAmplitudeX = networkSyncData.props.RotationAmplitudeX;
    if (networkSyncData.props.RotationAmplitudeY !== undefined)
      this._behaviorData.RotationAmplitudeY = networkSyncData.props.RotationAmplitudeY;
    if (networkSyncData.props.RotationAmplitudeZ !== undefined)
      this._behaviorData.RotationAmplitudeZ = networkSyncData.props.RotationAmplitudeZ;
    if (networkSyncData.props.Time !== undefined)
      this._behaviorData.Time = networkSyncData.props.Time;
    if (networkSyncData.props.Duration !== undefined)
      this._behaviorData.Duration = networkSyncData.props.Duration;
    if (networkSyncData.props.StartEasingDuration !== undefined)
      this._behaviorData.StartEasingDuration = networkSyncData.props.StartEasingDuration;
    if (networkSyncData.props.StopEasingDuration !== undefined)
      this._behaviorData.StopEasingDuration = networkSyncData.props.StopEasingDuration;
    if (networkSyncData.props.Frequency !== undefined)
      this._behaviorData.Frequency = networkSyncData.props.Frequency;
    if (networkSyncData.props.DeltaX !== undefined)
      this._behaviorData.DeltaX = networkSyncData.props.DeltaX;
    if (networkSyncData.props.DeltaY !== undefined)
      this._behaviorData.DeltaY = networkSyncData.props.DeltaY;
    if (networkSyncData.props.DeltaZ !== undefined)
      this._behaviorData.DeltaZ = networkSyncData.props.DeltaZ;
    if (networkSyncData.props.DeltaAngleX !== undefined)
      this._behaviorData.DeltaAngleX = networkSyncData.props.DeltaAngleX;
    if (networkSyncData.props.DeltaAngleY !== undefined)
      this._behaviorData.DeltaAngleY = networkSyncData.props.DeltaAngleY;
    if (networkSyncData.props.DeltaAngleZ !== undefined)
      this._behaviorData.DeltaAngleZ = networkSyncData.props.DeltaAngleZ;
    if (networkSyncData.props.NoiseTime !== undefined)
      this._behaviorData.NoiseTime = networkSyncData.props.NoiseTime;
    if (networkSyncData.props.Object3D !== undefined)
      this._behaviorData.Object3D = networkSyncData.props.Object3D;
    if (networkSyncData.props.IsStartingAtCreation !== undefined)
      this._behaviorData.IsStartingAtCreation = networkSyncData.props.IsStartingAtCreation;
  }

  // Properties:
  
  _getTranslationAmplitudeX() {
    return this._behaviorData.TranslationAmplitudeX !== undefined ? this._behaviorData.TranslationAmplitudeX : Number("0") || 0;
  }
  _setTranslationAmplitudeX(newValue) {
    this._behaviorData.TranslationAmplitudeX = newValue;
  }
  _getTranslationAmplitudeY() {
    return this._behaviorData.TranslationAmplitudeY !== undefined ? this._behaviorData.TranslationAmplitudeY : Number("0") || 0;
  }
  _setTranslationAmplitudeY(newValue) {
    this._behaviorData.TranslationAmplitudeY = newValue;
  }
  _getTranslationAmplitudeZ() {
    return this._behaviorData.TranslationAmplitudeZ !== undefined ? this._behaviorData.TranslationAmplitudeZ : Number("0") || 0;
  }
  _setTranslationAmplitudeZ(newValue) {
    this._behaviorData.TranslationAmplitudeZ = newValue;
  }
  _getRotationAmplitudeX() {
    return this._behaviorData.RotationAmplitudeX !== undefined ? this._behaviorData.RotationAmplitudeX : Number("5") || 0;
  }
  _setRotationAmplitudeX(newValue) {
    this._behaviorData.RotationAmplitudeX = newValue;
  }
  _getRotationAmplitudeY() {
    return this._behaviorData.RotationAmplitudeY !== undefined ? this._behaviorData.RotationAmplitudeY : Number("5") || 0;
  }
  _setRotationAmplitudeY(newValue) {
    this._behaviorData.RotationAmplitudeY = newValue;
  }
  _getRotationAmplitudeZ() {
    return this._behaviorData.RotationAmplitudeZ !== undefined ? this._behaviorData.RotationAmplitudeZ : Number("5") || 0;
  }
  _setRotationAmplitudeZ(newValue) {
    this._behaviorData.RotationAmplitudeZ = newValue;
  }
  _getTime() {
    return this._behaviorData.Time !== undefined ? this._behaviorData.Time : Number("") || 0;
  }
  _setTime(newValue) {
    this._behaviorData.Time = newValue;
  }
  _getDuration() {
    return this._behaviorData.Duration !== undefined ? this._behaviorData.Duration : Number("") || 0;
  }
  _setDuration(newValue) {
    this._behaviorData.Duration = newValue;
  }
  _getStartEasingDuration() {
    return this._behaviorData.StartEasingDuration !== undefined ? this._behaviorData.StartEasingDuration : Number("") || 0;
  }
  _setStartEasingDuration(newValue) {
    this._behaviorData.StartEasingDuration = newValue;
  }
  _getStopEasingDuration() {
    return this._behaviorData.StopEasingDuration !== undefined ? this._behaviorData.StopEasingDuration : Number("") || 0;
  }
  _setStopEasingDuration(newValue) {
    this._behaviorData.StopEasingDuration = newValue;
  }
  _getFrequency() {
    return this._behaviorData.Frequency !== undefined ? this._behaviorData.Frequency : Number("") || 0;
  }
  _setFrequency(newValue) {
    this._behaviorData.Frequency = newValue;
  }
  _getDeltaX() {
    return this._behaviorData.DeltaX !== undefined ? this._behaviorData.DeltaX : Number("") || 0;
  }
  _setDeltaX(newValue) {
    this._behaviorData.DeltaX = newValue;
  }
  _getDeltaY() {
    return this._behaviorData.DeltaY !== undefined ? this._behaviorData.DeltaY : Number("") || 0;
  }
  _setDeltaY(newValue) {
    this._behaviorData.DeltaY = newValue;
  }
  _getDeltaZ() {
    return this._behaviorData.DeltaZ !== undefined ? this._behaviorData.DeltaZ : Number("") || 0;
  }
  _setDeltaZ(newValue) {
    this._behaviorData.DeltaZ = newValue;
  }
  _getDeltaAngleX() {
    return this._behaviorData.DeltaAngleX !== undefined ? this._behaviorData.DeltaAngleX : Number("") || 0;
  }
  _setDeltaAngleX(newValue) {
    this._behaviorData.DeltaAngleX = newValue;
  }
  _getDeltaAngleY() {
    return this._behaviorData.DeltaAngleY !== undefined ? this._behaviorData.DeltaAngleY : Number("") || 0;
  }
  _setDeltaAngleY(newValue) {
    this._behaviorData.DeltaAngleY = newValue;
  }
  _getDeltaAngleZ() {
    return this._behaviorData.DeltaAngleZ !== undefined ? this._behaviorData.DeltaAngleZ : Number("") || 0;
  }
  _setDeltaAngleZ(newValue) {
    this._behaviorData.DeltaAngleZ = newValue;
  }
  _getNoiseTime() {
    return this._behaviorData.NoiseTime !== undefined ? this._behaviorData.NoiseTime : Number("") || 0;
  }
  _setNoiseTime(newValue) {
    this._behaviorData.NoiseTime = newValue;
  }
  _getObject3D() {
    return this._behaviorData.Object3D !== undefined ? this._behaviorData.Object3D : "";
  }
  _setObject3D(newValue) {
    this._behaviorData.Object3D = newValue;
  }
  _getIsStartingAtCreation() {
    return this._behaviorData.IsStartingAtCreation !== undefined ? this._behaviorData.IsStartingAtCreation : false;
  }
  _setIsStartingAtCreation(newValue) {
    this._behaviorData.IsStartingAtCreation = newValue;
  }
  _toggleIsStartingAtCreation() {
    this._setIsStartingAtCreation(!this._getIsStartingAtCreation());
  }
}

/**
 * Shared data generated from 3D shake
 */
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.SharedData = class ShakeModel3DSharedData {
  constructor(sharedData) {
    
    this.EasingFactor = Number("") || 0;
  }
  
  // Shared properties:
  
  _getEasingFactor() {
    return this.EasingFactor !== undefined ? this.EasingFactor : Number("") || 0;
  }
  _setEasingFactor(newValue) {
    this.EasingFactor = newValue;
  }
}

gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._ShakeObject3D_ShakeModel3DSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._ShakeObject3D_ShakeModel3DSharedData = new gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.SharedData(
      initialData
    );
  }
  return instanceContainer._ShakeObject3D_ShakeModel3DSharedData;
}

// Methods:
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.onCreatedContext = {};
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.onCreatedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.onCreatedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsStartingAtCreation() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.onCreatedContext.GDObjectObjects1[k] = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.onCreatedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.onCreatedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.onCreatedContext.GDObjectObjects1 */
{gdjs.evtsExt__ShakeObject3D__DefineHelperClasses.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).StartShaking(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ShakeObject3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ShakeObject3D"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.onCreatedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects3= [];


gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationAmplitudeX() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDeltaX(gdjs.evtsExt__ShakeObject3D__Noise2d.func(runtimeScene, "", eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNoiseTime(), 1000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationAmplitudeX() * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._getEasingFactor());
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].setX(gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getX() + (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDeltaX()));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationAmplitudeY() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDeltaY(gdjs.evtsExt__ShakeObject3D__Noise2d.func(runtimeScene, "", eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNoiseTime(), 2000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationAmplitudeY() * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._getEasingFactor());
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].setY(gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getY() + (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDeltaY()));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationAmplitudeZ() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDeltaZ(gdjs.evtsExt__ShakeObject3D__Noise2d.func(runtimeScene, "", eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNoiseTime(), 3000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationAmplitudeZ() * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._getEasingFactor());
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ() + (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDeltaZ()));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationAmplitudeX() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDeltaAngleX(gdjs.evtsExt__ShakeObject3D__Noise2d.func(runtimeScene, "", eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNoiseTime(), 4000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationAmplitudeX() * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._getEasingFactor());
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setRotationX(gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getRotationX() + (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDeltaAngleX()));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationAmplitudeY() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDeltaAngleY(gdjs.evtsExt__ShakeObject3D__Noise2d.func(runtimeScene, "", eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNoiseTime(), 5000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationAmplitudeY() * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._getEasingFactor());
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setRotationY(gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getRotationY() + (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDeltaAngleY()));
}
}}

}


{

/* Reuse gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationAmplitudeZ() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDeltaAngleZ(gdjs.evtsExt__ShakeObject3D__Noise2d.func(runtimeScene, "", eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNoiseTime(), 6000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationAmplitudeZ() * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._getEasingFactor());
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects1[i].setAngle(gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects1[i].getAngle() + (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDeltaAngleZ()));
}
}}

}


};gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTime(gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTime() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsShaking((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNoiseTime(gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNoiseTime() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFrequency()));
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._setEasingFactor(Math.min((gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).StartEasingFactor((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).StopEasingFactor((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))));
}
}
{ //Subevents
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ShakeObject3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ShakeObject3D"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;


return;
}
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects3= [];


gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationAmplitudeX() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].setX(gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getX() - (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDeltaX()));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationAmplitudeY() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].setY(gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getY() - (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDeltaY()));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTranslationAmplitudeZ() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ() - (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDeltaZ()));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationAmplitudeX() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setRotationX(gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getRotationX() - (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDeltaAngleX()));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationAmplitudeY() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setRotationY(gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getRotationY() - (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDeltaAngleY()));
}
}}

}


{

/* Reuse gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationAmplitudeZ() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].setAngle(gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getAngle() - (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDeltaAngleZ()));
}
}}

}


};gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsShaking((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ShakeObject3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ShakeObject3D"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;


return;
}
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.ShakeContext = {};
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.ShakeContext.GDObjectObjects1= [];
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.ShakeContext.GDObjectObjects2= [];


gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.ShakeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.ShakeContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.ShakeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.ShakeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTime(0);
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.ShakeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.ShakeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNoiseTime(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFrequency());
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.ShakeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.ShakeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDuration(eventsFunctionContext.getArgument("NewDuration"));
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.ShakeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.ShakeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStartEasingDuration(eventsFunctionContext.getArgument("StartEaseDuration"));
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.ShakeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.ShakeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStopEasingDuration(eventsFunctionContext.getArgument("StopEaseDuration"));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("NewDuration")) || 0 : 0) < eventsFunctionContext.getArgument("StartEaseDuration") + eventsFunctionContext.getArgument("StopEaseDuration"));
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.ShakeContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.ShakeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.ShakeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStartEasingDuration(eventsFunctionContext.getArgument("StartEaseDuration") * eventsFunctionContext.getArgument("NewDuration") / (eventsFunctionContext.getArgument("StartEaseDuration") + eventsFunctionContext.getArgument("StopEaseDuration")));
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.ShakeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.ShakeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStopEasingDuration(eventsFunctionContext.getArgument("StopEaseDuration") * eventsFunctionContext.getArgument("NewDuration") / (eventsFunctionContext.getArgument("StartEaseDuration") + eventsFunctionContext.getArgument("StopEaseDuration")));
}
}}

}


};

gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.Shake = function(NewDuration, StartEaseDuration, StopEaseDuration, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ShakeObject3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ShakeObject3D"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "NewDuration") return NewDuration;
if (argName === "StartEaseDuration") return StartEaseDuration;
if (argName === "StopEaseDuration") return StopEaseDuration;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.ShakeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.ShakeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.ShakeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.ShakeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.ShakeContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StartShakingContext = {};
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StartShakingContext.GDObjectObjects1= [];
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StartShakingContext.GDObjectObjects2= [];


gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StartShakingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StartShakingContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StartShakingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StartShakingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTime(0);
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StartShakingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StartShakingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNoiseTime(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFrequency());
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StartShakingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StartShakingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDuration(1234567890);
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StartShakingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StartShakingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStartEasingDuration(eventsFunctionContext.getArgument("EaseDuration"));
}
}}

}


};

gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StartShaking = function(EaseDuration, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ShakeObject3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ShakeObject3D"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "EaseDuration") return EaseDuration;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StartShakingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StartShakingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StartShakingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StartShakingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StartShakingContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopShakingContext = {};
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopShakingContext.GDObjectObjects1= [];
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopShakingContext.GDObjectObjects2= [];


gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopShakingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopShakingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopShakingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopShakingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsShaking((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopShakingContext.GDObjectObjects1[k] = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopShakingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopShakingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopShakingContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopShakingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopShakingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTime(0);
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopShakingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopShakingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDuration(eventsFunctionContext.getArgument("EaseDuration"));
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopShakingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopShakingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStopEasingDuration(eventsFunctionContext.getArgument("EaseDuration"));
}
}}

}


};

gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopShaking = function(EaseDuration, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ShakeObject3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ShakeObject3D"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "EaseDuration") return EaseDuration;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopShakingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopShakingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopShakingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopShakingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopShakingContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsShakingContext = {};
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsShakingContext.GDObjectObjects1= [];
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsShakingContext.GDObjectObjects2= [];


gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsShakingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsShakingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsShakingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsShakingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTime() < eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDuration() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsShakingContext.GDObjectObjects1[k] = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsShakingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsShakingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsShakingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsShakingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTime() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsShakingContext.GDObjectObjects1[k] = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsShakingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsShakingContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsShaking = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ShakeObject3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ShakeObject3D"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsShakingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsShakingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsShakingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsShakingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsShakingContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsStoppingContext = {};
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsStoppingContext.GDObjectObjects1= [];
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsStoppingContext.GDObjectObjects2= [];


gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsStoppingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsStoppingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsStoppingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsStoppingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsShaking((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsStoppingContext.GDObjectObjects1[k] = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsStoppingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsStoppingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsStoppingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsStoppingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).StopEasingFactor((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) < 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsStoppingContext.GDObjectObjects1[k] = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsStoppingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsStoppingContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsStopping = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ShakeObject3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ShakeObject3D"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsStoppingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsStoppingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsStoppingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsStoppingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.IsStoppingContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.FrequencyContext = {};
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.FrequencyContext.GDObjectObjects1= [];
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.FrequencyContext.GDObjectObjects2= [];


gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.FrequencyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFrequency(); }}}

}


};

gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.Frequency = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ShakeObject3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ShakeObject3D"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.FrequencyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.FrequencyContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.FrequencyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.FrequencyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.FrequencyContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.SetFrequencyContext = {};
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.SetFrequencyContext.GDObjectObjects1= [];
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.SetFrequencyContext.GDObjectObjects2= [];


gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.SetFrequencyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.SetFrequencyContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.SetFrequencyContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.SetFrequencyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFrequency(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.SetFrequency = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ShakeObject3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ShakeObject3D"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.SetFrequencyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.SetFrequencyContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.SetFrequencyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.SetFrequencyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.SetFrequencyContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StartEasingFactorContext = {};
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StartEasingFactorContext.GDObjectObjects1= [];
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StartEasingFactorContext.GDObjectObjects2= [];


gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StartEasingFactorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StartEasingFactorContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StartEasingFactorContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StartEasingFactorContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStartEasingDuration() <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StartEasingFactorContext.GDObjectObjects1[k] = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StartEasingFactorContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StartEasingFactorContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = 1; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StartEasingFactorContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StartEasingFactorContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StartEasingFactorContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStartEasingDuration() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StartEasingFactorContext.GDObjectObjects1[k] = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StartEasingFactorContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StartEasingFactorContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtTools.common.clamp(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTime() / eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStartEasingDuration(), 0, 1); }}}

}


};

gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StartEasingFactor = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ShakeObject3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ShakeObject3D"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StartEasingFactorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StartEasingFactorContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StartEasingFactorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StartEasingFactorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StartEasingFactorContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopEasingFactorContext = {};
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopEasingFactorContext.GDObjectObjects1= [];
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopEasingFactorContext.GDObjectObjects2= [];
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopEasingFactorContext.GDObjectObjects3= [];


gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopEasingFactorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopEasingFactorContext.GDObjectObjects1, gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopEasingFactorContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopEasingFactorContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopEasingFactorContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTime() < eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDuration() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopEasingFactorContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopEasingFactorContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopEasingFactorContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = 1; }}}

}


{

/* Reuse gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopEasingFactorContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopEasingFactorContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopEasingFactorContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTime() >= eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDuration() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopEasingFactorContext.GDObjectObjects1[k] = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopEasingFactorContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopEasingFactorContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = 0; }}}

}


};gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopEasingFactorContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopEasingFactorContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopEasingFactorContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopEasingFactorContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStopEasingDuration() <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopEasingFactorContext.GDObjectObjects1[k] = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopEasingFactorContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopEasingFactorContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopEasingFactorContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopEasingFactorContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopEasingFactorContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopEasingFactorContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStopEasingDuration() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopEasingFactorContext.GDObjectObjects1[k] = gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopEasingFactorContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopEasingFactorContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtTools.common.clamp((eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDuration() - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTime()) / eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStopEasingDuration(), 0, 1); }}}

}


};

gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopEasingFactor = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ShakeObject3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ShakeObject3D"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopEasingFactorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopEasingFactorContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopEasingFactorContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopEasingFactorContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopEasingFactorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopEasingFactorContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D.prototype.StopEasingFactorContext.GDObjectObjects3.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}


gdjs.registerBehavior("ShakeObject3D::ShakeModel3D", gdjs.evtsExt__ShakeObject3D__ShakeModel3D.ShakeModel3D);
