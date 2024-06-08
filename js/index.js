
var BookmarkNameInput = document.getElementById("siteNameInput");
var WebsiteUrlInput = document.getElementById("siteUrlInput");

var WebsitesContainer = [];
if(localStorage.getItem('sites')!==null){
    WebsitesContainer= JSON.parse(localStorage.getItem('sites'))
    DisPlay()
}
function Websites() {
    var isValid = false;

    if (BookmarkNameInput.value.length >= 3){
        if( WebsiteUrlInput.value.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g) && WebsiteUrlInput.value.search('book') >= 0) {
            isValid = true
        }
    }

    if (isValid) {
        var book = {
            code: BookmarkNameInput.value,
            URL:WebsiteUrlInput.value,
        }
        WebsitesContainer.push(book)
       localStorage.setItem('sites',JSON.stringify(WebsitesContainer))
        clearform()
        DisPlay()
    } else {
        var myModal = new bootstrap.Modal(document.getElementById('validationModal'), { 
            keyboard: false 
          }) 
          myModal.show()
    }
}


function clearform() {
     BookmarkNameInput.value=null;
     WebsiteUrlInput.value=null;
    
}
function clearItem(){
    
}

function DisPlay(){
    var box = `<tbody id="sites">`
    for(var i=0;i<WebsitesContainer.length;i++){
         box+=`  
             <tr>
                 <th scope="row">${i+1}</th>
                 <td>${WebsitesContainer[i].code}</td>
                 <td><button  onclick="window.open('${WebsitesContainer[i].URL}')"  class="btn btn-success">Visit</button></td>
                 <td><button  onclick="clearItem()" class="btn btn-danger">Delete</button></td>
             </tr>
     `
    }
    box += `</tbody>`
    document.getElementById('sites').innerHTML=box;
}






