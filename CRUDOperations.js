/**
 * @NapiVersion 2.0
 * @NScriptType ScheduledScript
 */

define (['N/record' , 'N/log'] ,function (record,log) {
    
        function createRecord(){
            try {
                var ctRecord = record.create({
                    type: "customrecord226",
                    isDynamic: true
                })
                
                ctRecord.setValue({
                    fieldId: 'name',
                    value: "Shahmeer Khan's Entry"
                })
                log.debug({
                    title : 'Record created Succcessfully',
                    details : ctRecord.name
                })
                ctRecord.setValue({
                    fieldId: 'custrecord4',
                    value: "Shahmeer Khan"
                })
                ctRecord.setValue({
                    fieldId: 'custrecord5',
                    value: 500
                })
                ctRecord.setValue({
                    fieldId: 'custrecord6',
                    value: "Shahmeerk3000@gmail.com"
                })
                ctRecord.setValue({
                    fieldId: 'custrecord7',
                    value: new Date()
                })
                ctRecord.setValue({
                    fieldId: 'custrecord8',
                    value: true
                })
                ctRecord.setValue({
                    fieldId: 'custrecord9',
                    value: '03360303389'
                })
                log.debug({
                    title:"Values added Successfully",
                    details: record
                })
                var ctRecord1 = ctRecord.save()
                
            }
            catch(error){
                log.error({
                    title:error.title,
                    details: error.message
                })
            }
        }


        function UpdateRecord (recordId) {
            try{
                var UpdRecord = record.load ({
                    type: "customrecord226",
                    id: recordId,
                    isDynamic: true
                })
                UpdRecord.setValue({
                    fieldId: 'custrecord4',
                    value: "new entry Shahmeer Khan"
                })
                UpdRecord.setValue({
                    fieldId: 'custrecord5',
                    value: 100000
                })
                UpdRecord.setValue({
                    fieldId: 'custrecord6',
                    value: "Shahmeer.khan@kaispe.com"
                })
                UpdRecord.setValue({
                    fieldId: 'custrecord7',
                    value: new Date()
                })
                UpdRecord.setValue({
                    fieldId: 'custrecord8',
                    value: false
                })
                UpdRecord.setValue({
                    fieldId: 'custrecord9',
                    value: '03360303389'
                })
                UpdRecord.save()
                log.debug({
                    title : "Record Updated Successfully",
                    details : UpdRecord               
                 })
            }
            catch(error){
                log.error({
                    title: error.title,
                    details: error.message
                })
            }
        }
        

        function DeleteRecord(recordId){
            try {
                var delrecord = record.delete({
                    type: "customrecord226",
                    id: recordId,
                    isDynamic: true,
                    
                })
                log.debug({
                    Title : "Record deleted Successfully",
                    
                })
            }
            catch(error){
                log.error({
                    title: error.title,
                    details: error.message
                })
            }

        }


    function execute (context){
        // var createRecordid = createRecord()
        // var UpdateRecordid = UpdateRecord()

        var DelRecordid = DeleteRecord()

    } 
    return {
        execute : execute 
    }
})