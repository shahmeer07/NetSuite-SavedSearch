/**
 * @NapiVersion 2.0
 * @NScriptType ScheduledScript
 */

define (['N/search','N/log'], function (search,log){
    function execute (context) {
        try{

                var savedsearch = search.create({
                    type: 'Employee',
                    title: "Shahmeer Khan's code made Saved Search",
                    filters: [
                        ['email' , search.Operator.CONTAINS,'Amad'], 'and',
                        ['supervisor', search.Operator.ISEMPTY,"" ], 'and',
                        ['giveaccess',search.Operator.IS,true]
                    ],
                    columns : [
                        search.createColumn({ name: 'firstname' , label: "First Name"}),
                        search.createColumn({name:'email' , label:'Email'})
                    ]
                    

                })
                var results = savedsearch.run().each(function(result){
                        log.debug({
                            title: "Result ",
                            details: result
                        })
                })
            
            
        }

        catch(error){
            log.error({
                title : error.title,
                details: error.message
            })
        }
    }
    return {
        execute : execute 
    }
})
