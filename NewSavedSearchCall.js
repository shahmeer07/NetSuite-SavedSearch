/**
 * @NapiVersion 2.0
 * @NScriptType ScheduledScript
 */

define (['N/search' , 'N/log'], function(search,log){
    function execute(context){
        try{
            var mysearch = search.load({
                id: 'customsearch551'
            })
            
            var runresult = mysearch.run()
            var allresults = runresult.getRange({
                start: 0,
                end:10
            })

            var results = allresults.forEach(function(result){
                log.debug({
                    title : "Result",
                    details: result
                })
            })
        }
        catch(error){
            log.error({
                title: error.title,
                details: error.message
            })
        }
    }
    return{
        execute : execute
    }
})
