/**
 * @NApi Version 2.x
 * @NScriptType ClientScript
 */

define (['N/ui/message'] , function (message) {
    function pageInit () {
        var msg = message.create (
            {
                Title: "My Title",
                message: "This is an amazing message",
                type : message.TYPE.CONFIRMATION
            }
        )
        msg.show( {
            duration : 5000 
        })
    }

return {
    pageInit : pageInit
}

} )