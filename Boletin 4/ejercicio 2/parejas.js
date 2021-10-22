
document.addEventListener("DOMContentLoaded", function () {
    var td = document.getElementsByTagName("td");    
    for (let item of td) {
        item.addEventListener("click", function () {
            this.innerHTML = '<img src="img/'+item.getAttribute("name")+'.png"/>';
        })
    }
});










