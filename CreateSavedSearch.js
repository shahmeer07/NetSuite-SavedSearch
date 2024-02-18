/**
 * @NapiVersion 2.0
 * @NScriptType ScheduledScript
 */

define (['N/search','N/log'], function (search,log) {
    function execute(context){
        try {
        var mysearch = search.create({
            type : "employee",
            
        })
        var results = mysearch.run().each(function(result){
            log.debug({
                title : 'result',
                details: result
            })
        })
        
    }

    catch(e){
        log.error({
            title: error.name,
           details: error.message
        });
    }
}
    return {
        execute : execute
    }

})