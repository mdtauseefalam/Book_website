/*******************************************************************
File Name: BookList.js
Description: having functions for performing some tasks
********************************************************************/
var books = new Array();
var newArray;

books.push(["S.No.", "Book Name", "Author Name","DOP","Pages","Price"]);
books.push([1, "Thinking, Fast and Slow", "Daniel Kahneman","25 October 2011","499","359"]);
books.push([2, "The Mysteries of Human Behavior", "Mark Leary","July 08, 2013","527","485"]);
books.push([3, "21 Lessons for 21st century", "Yuval Noah Harrari","23 August 2018","372","500"]);
books.push([4, "My Experiment with truth", "M.K.Gandhi","26 April 1927","464","99"]);

/*******************************************************************
Function Name: loadTable
Description: for rendering book list table and  forwarding the 
				selected book details to bookdetails page  
********************************************************************/	
function loadTable()
{
    var i;
    for(i=1;i<books.length;i++)	
	{
		if(localStorage.getItem("aname"+""+i+"") != null)
		{
			books[i][2]= localStorage.getItem("aname"+""+i+"").toString();
			books[i][3]= localStorage.getItem("dop"+""+i+"").toString();
			books[i][4]= localStorage.getItem("pages"+""+i+"").toString();
			books[i][5]= localStorage.getItem("price"+""+i+"").toString();
		}  
	}
	newArray = books.slice();
    //Create a HTML Table element.
    var table = document.createElement("TABLE");
       
    //Get the count of columns.
    var columnCount = newArray[0].length-3;
 
    //Add the header row.
    var row = table.insertRow();
    for (var i = 0; i < columnCount; i++)
	{
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = newArray[0][i];
        row.appendChild(headerCell);
    }
 
    //Add the data rows.
    for (var i = 1; i < newArray.length; i++)
	{
        row = table.insertRow();
		let id = newArray[i][0];
        var bname = newArray[i][1];
		var aname = newArray[i][2];
		var dop = newArray[i][3];
		var pages = newArray[i][4];
		var price = newArray[i][5];
		
		localStorage.setItem("id"+""+i+"", id);
		localStorage.setItem("bname"+""+i+"", bname);
		localStorage.setItem("aname"+""+i+"", aname);
		localStorage.setItem("dop"+""+i+"", dop);
		localStorage.setItem("pages"+""+i+"", pages);
		localStorage.setItem("price"+""+i+"", price);
			
		row.onclick = function() {callBookDetails(id);};
		  
        for (var j = 0; j < columnCount; j++) 
		{
            var cell = row.insertCell(-1);
            cell.innerHTML = newArray[i][j];
        }
	}
    var dvTable = document.getElementById("ListTable");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
}	

/*******************************************************************
Function Name: updateDetails(id)
Description: for updating details if changed
Params: 
id: id of selected book
********************************************************************/		
function updateDetails(id)
{
	var author = document.getElementById("idauth").value;
	var dop = document.getElementById("iddop").value;
	var pages = document.getElementById("idpage").value;
    var price = document.getElementById("idprice").value;
	localStorage.setItem("aname"+""+id+"", author);
	localStorage.setItem("dop"+""+id+"", dop);
	localStorage.setItem("pages"+""+id+"", pages);
	localStorage.setItem("price"+""+id+"", price);
}
/*******************************************************************
Function Name: callBookDetails(id)
Description: for displaying details if changed
Params: 
bid: id of selected book
********************************************************************/
function callBookDetails(bid)
{
	var bookList = document.getElementById("idbooklist");
	var bookDetails = document.getElementById("idbookdetails");
	if (bookList.style.display === "block")
	{
		bookList.style.display = "none";
		bookDetails.style.display = "block";
		fillDetails(bid);
	}
}
