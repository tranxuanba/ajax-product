function showAllClass() {
    //1. lay du lieu tu phia backend
    $.ajax({
        //loai cua request: GET, POST, PUT, ....
        type: "GET",
        //duong dan cua API
        url: "http://localhost:8083/api/products",
        //xu ly luc thanh cong
        success: function (data) {
            console.log(data)
            //2. ve lai cai bang
            let content ="";
            for (let i = 0; i < data.length; i++) {
                content+=`<tr><td>${data[i].id}</td>
        <td>${data[i].name}</td>
        <td>${data[i].price}</td>
        <td>${data[i].description}</td>
        <td><a href="${data[i].id}" onclick="deleteClass(this)">Delete</a></td></tr>`;
            }
            document.getElementById("tbody").innerHTML = content;

        }
    })
}
showAllClass();

function deleteClass(element) {
    // lay id
    let id = element.getAttribute("href");
    //goi API phia backend
    $.ajax({
        type: "DELETE",
        url: "http://localhost:8083/api/products"+ id,
        success: function (data){
            console.log("Xoa thanh cong id " + id);
            //xoa the
            // thay doi giao dien
            // showAllClass();
            id.parent().parent().remove();
        }
    })
    //chan su kien mac dinh cua the
    event.preventDefault();
}
function create() {
    //lay ten
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let description = document.getElementById("description").value;
    //chuyen sang doi tuong
    let ob = {
        name: name,
        price: price,
        description: description
    }

    $.ajax({
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        data: JSON.stringify(ob),
        url: "http://localhost:8083/api/products",
        success: function () {
            showAllClass();
        }
    })
}

