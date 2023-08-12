const mongoose = require('mongoose');
const certificateModel = mongoose.Schema({
iqamaPic:String,
profilePic:String,
qrLink:String,
clientName:String,
supervisorName:String,
welderName : String,
identification_wps:String,
iqamaNo : String,
QualifcationStandard:String,
welderId:String,
baseMetalSpecs:String,
wtaRef : String,
jointType:String,
date_of_test:String,
weldType:String,
welderProcess:{
    actualVals:String,
    rangeQual:String
},
typesOfWelders:{
    actualVals:String,
    rangeQual:String
},
bracking:{
    actualVals:String,
    rangeQual:String
},
productType:{
    actualVals:String,
    rangeQual:String
},
diameterOfPipe:{
    actualVals:String,
    rangeQual:String
},
baseMetalp_p:{
    actualVals:String,
    rangeQual:String
},
fillerMetal:{
    actualVals:String,
    rangeQual:String
},
fillerMetalFNo:{
    actualVals:String,
    rangeQual:String
},
fillerMetalAddition:{
    actualVals:String,
    rangeQual:String
},
consumableInsert:{
    actualVals:String,
    rangeQual:String
},
depositeThickness:{
    actualVals:String,
    rangeQual:String
},
welderPosition:{
    actualVals:String,
    rangeQual:String
},
verticalProgression:{
    actualVals:String,
    rangeQual:String
},
typesOfFuelGas:{
    actualVals:String,
    rangeQual:String
},
insertGasBacking:{
    actualVals:String,
    rangeQual:String
},
transferModel:{
    actualVals:String,
    rangeQual:String
},
currentTypePolarity:{
    actualVals:String,
    rangeQual:String
},
virtualInspector:{
    checked:Boolean,
    reportNo:String,
    results:String,
},
radiography:{
    checked:Boolean,
    reportNo:String,
    results:String,
},
mechTest:{
    checked:Boolean,
    reportNo:String,
    results:String,
}
})

const Certificate = mongoose.model("Certificate",certificateModel);
module.exports = Certificate