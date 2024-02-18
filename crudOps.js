/**
 * @NapiVersion 2.0
 * @NScriptType ScheduledScript
 */

define(['N/record', 'N/log'] , function (record) {
    function createRecord(){
        try{
            
            var objrecord = record.create({
                type : 'customrecord225',
                isDynamic: true
            })
        objrecord.setValue({
            fieldId : 'name',
            value: "New Customer John's record"
        })
        objrecord.setValue({
            fieldId : 'custrecord1',
            value : 'New Customer John'
        })

        objrecord.setValue({
            fieldId : 'custrecord2',
            value : "For meeting purpose"
        })
        log.debug({
            title : "Values added successfully!",
            details: record
        })
        var objrecord1 = objrecord.save()
        return objrecord1;
        
    }
    catch(error){
        log.error({
            Title: error.Title,
            details: error.message
        })
    }
    }



    function UpdateRecord(recordId){
        try{
           
            var UpdRecord = record.load ({
                type : 'customrecord225',
                id: recordId,
                isDynamic: true
            })
            UpdRecord.setValue({
                fieldId: "custrecord1",
                value: "New Customer Bilal Zaka"
            })
            UpdRecord.setValue({
                fieldId : "custrecord2",
                value: "For Oracle NetSuite Partnership"
            })
            UpdRecord.save()
            log.debug({
                Title: "Record Updates Successfully",
                details : UpdRecord
            })
        }
        catch(error){
            log.error({
                Title: error.Title,
                details: error.message
            })
        }
    }


    function ReadRecord(recordId){
        var Redrecord = record.load({
            type: 'customrecord225',
            id: recordId,
            isDynamic : true
        })

        var VisitorName = Redrecord.getValue({
            fieldId: "custrecord1"
        })
        var PurposeOfvisit = Redrecord.getValue({
            fieldId: "custrecord2"
        })
        log.debug("Visitor Name : ", VisitorName)
        log.debug("Purpose of Visit: " , PurposeOfvisit)

    }



    function DeleteRecord(recordId){
        try{
            var DelRecord = record.delete({
                type: "customrecord225", 
                id: recordId,
                isDynamic: true
            })
            log.debug({
                Title: "Record Deleted Successfully",
                details: DelRecord
            })
        }
        catch(e){
            log.error({
                title: error.title,
                details: error.message
            })
        }
    }



    function execute (context ){
       var createRecordid = createRecord()
       log.debug({
        Title: "New Record Added Successfully",
        details : createRecordid
       })
       var UpdateRecordid = UpdateRecord(4)
       log.debug({
        Title: "New Record Updated Successfully",
        details: UpdateRecord
       })
        var ReadRecordid = ReadRecord(1)
        log.debug({
            Title: "Record Read Successfully",
            details: ReadRecordid
        })
        var DelRecordid = DeleteRecord(2)
        log.debug({
            Title: "Record Deleted Successfully",
            details: DelRecordid
        })
    }
return {
    execute : execute
}
})