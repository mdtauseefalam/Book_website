/*******************************************************************
File Name: BookDetails.js
Description: having functions for performing some tasks
********************************************************************/
var id;

/*******************************************************************
Function Name: fillDetails
Description: for showing the deatils of the selected book 
********************************************************************/		
function fillDetails(bid)
{
	var bookname=document.getElementById("idbook");
	var author=document.getElementById("idauth");
	var dop=document.getElementById("iddop");
	var pages=document.getElementById("idpage");
	var price=document.getElementById("idprice");
	
	bookname.innerHTML=localStorage.getItem("bname"+""+bid+"").toString();;
	author.value=localStorage.getItem("aname"+""+bid+"").toString();;
	dop.value=localStorage.getItem("dop"+""+bid+"").toString();;
	pages.value=localStorage.getItem("pages"+""+bid+"").toString();;
	price.value=localStorage.getItem("price"+""+bid+"").toString();;
	id=bid;
	
	var preview=document.getElementById("idimage");
	preview.setAttribute("src","images/"+id+".jpg");
}

/*******************************************************************
Function Name: goBack
Description: for returning back to the bookList page
********************************************************************/	

function goBack()
{	
    var bookDetails=document.getElementById("idbookdetails");
	var bookList=document.getElementById("idbooklist");
	if (bookDetails.style.display === "block") {
	    bookDetails.style.display="none";
		bookList.style.display="block";
	    bookList.addEventListener("load", loadTable()); 
	}
}

/*******************************************************************
Function Name: updateBookDetails
Description: calls the updateDetails function of booklist page and
			 update the details of selected book 
********************************************************************/	

function updateBookDetails()
{
	updateDetails(id);
}