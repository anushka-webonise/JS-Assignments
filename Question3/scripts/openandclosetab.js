
var windows = []
var interval = 3000;

//opens & closes new tabs
function NewTab()
{ 
    for(var i =0; i < 6 ;i++){
        var id= window.open('http://google.com', '_blank')
        windows.push(id)
    }

    windows.forEach(function(id, index) {
        setTimeout(function() 
		{
			id.close();}, index * interval);
		});
}
//stops script
function StopScript()
{
	alert("Stop called")
	window.close()

}


