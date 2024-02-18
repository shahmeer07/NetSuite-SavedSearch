/**
 *@NApiVersion 2.x
 *@NScriptType ScheduledScript
 */
define (['N/search','N/log'], function(search,log){
    function execute(context){
        try {
            var customerSearch = search.load({
                id : "customsearch550"
            })
            var results = customerSearch.run().each(function(result){
                log.debug({
                    title: 'Result.billaddress',
                    details: result.getValue({
                        name : 'billaddress'
                    })
                })
            })
            
            log.debug({
                title: "Saved Search run successfully",
                details: "Search ID : customsearch550"
            })
            
           
            return results
        }
        catch(error){
            log.error({
                title : error.title,
                details : error.details
            })
        }
    }
    return {
        execute : execute 
    }
})
