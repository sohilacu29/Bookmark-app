var productNameInput =document.getElementById('bookmarkName');
var productPriceInput =document.getElementById('bookmarkURL');


var productlist=[];
function addProduct(){
    var product ={
       websiteName : bookmarkName.value,
    // :bookmarkURL.value ,

       
    }
    productlist.push( product)
    // clearform()
    displayData()
}
console.log(productlist);

function clearform(){
    bookmarkName.value =""
    bookmarkURL.value =""

}

function displayData(){
    var items="";
    for (let i = 0; i < productlist.length ; i++) {
        items+=`<tr>
        <td> ${i } </td>
        <td> ${productlist[i].websiteName}  </td>
        <td> <button class="btn btn-warning btn-sm">Visit</button> </td>
        <td> <button onclick="deleteitem(${i})" class="btn btn-danger btn-sm ">Delete</button> </td>
        
    </tr>`
        
    }
    document.getElementById("tableContent").innerHTML= items;
}
function deleteitem(index){
    alert( index)
}

function deleteitem(index) {
    productlist.splice(index,1)
    console.log(productlist);
    displayData()
}


