/*******************************************************************
File Name: booklogin.js
Description: having functions for performing some tasks
********************************************************************/

/*******************************************************************
Function Name: validateUser
Description: for validating whether user is valid or not
********************************************************************/

function validateUser() 
{
	var username=document.getElementById("iduser").value;
	var Password=document.getElementById("idpassword").value;
	if(username.trim()=="username"&&Password.trim()=="password")
	{            
		var login=document.getElementById("idlogin");
		var bookList=document.getElementById("idbooklist");
		var index=document.getElementById("idIndex");
        if (login.style.display === "block")
		{
			login.style.display = "none";
			bookList.style.display = "block";
			index.addEventListener("load", loadTable()); 
        } 
	}
	else
	{
		alert("wrong username or password");
	}
}

/*******************************************************************
Function Name: loginLoad
Description: for checking whether user login previous or not
********************************************************************/
function loginLoad()
{
	if(localStorage!= null)
	{
		var username=document.getElementById("iduser");
		var Password=document.getElementById("idpassword");
		username.value= localStorage.getItem('user').toString();
		Password.value= localStorage.getItem('password').toString();
	}
}

/*******************************************************************
Function Name: rememberMe
Description: for saving username and password for next time
********************************************************************/
function rememberMe()
{
    if((document.getElementById("idcheck")).checked)
	{
		var username=document.getElementById("iduser").value;
		var Password=document.getElementById("idpassword").value;
		localStorage.setItem('user' , username);
		localStorage.setItem('password' ,Password);
	}
	else
	{
		localStorage.clear();
	}
}