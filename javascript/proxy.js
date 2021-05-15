// do not need the <script> flag as it gets wraped around the code as a part of c#
function sayHello()
{
	window.external.ShowMessage('hi in file')
}

function login() {
	window.external.ShowMessage('hi in file')
}


function getPersona() {
	alert(window.external.GetPersona());
}