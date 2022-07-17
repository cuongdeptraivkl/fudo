const ListProduct = [
    {
        id: 1,
        name:"Big and Juicy Wagyu Beef Cheeseburger",
        price:30,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"src/img/image 26.png",
        category:1
    },
    {
        id: 2,
        name:"Fresh Lime Roasted Salmon",
        price:10,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"src/img/img2.png",
        category:1
    },
    {
        id: 3,
        name:"The Best Easy One Pot Chicken and Rice",
        price:20,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"src/img/img3.png",
        category: 3
    },
    {
        id: 4,
        name:"Fresh and Healthy Mixed Mayonnaise ",
        price:50,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"src/img/img4.png",
        category: 4
    },
    {
        id: 5,
        name:"The Creamiest Creamy Chicken",
        price:60,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"src/img/img5.png",
        category: 5
    },
    {
        id: 6,
        name:"Fruity Pancake with Orange & Blueberry",
        price:15,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"src/img/img6.png",
        category: 6
    }
]
const ListCart =[]
const ListCategory = [
    {
        id:1,
        name:"breakfast",
        image:"./image/home/breakfast.png"
    },
    {
        id:2,
        name:"vegan",
        image:"./image/home/breakfast.png"
    },
    {
        id:3,
        name:"meat",
        image:"./image/home/breakfast.png"
    },
    {
        id:4,
        name:"dessert",
        image:"./image/home/breakfast.png"
    },
    {
        id:5,
        name:"lunch",
        image:"./image/home/breakfast.png"
    },
    {
        id:6,
        name:"chocolate",
        image:"./image/home/breakfast.png"
    }
]

function showProduct(data){
    const popularList = document.querySelector(".sp")
  if(popularList) { popularList.innerHTML = ""
    for(let item of data){
        // console.log(item);
        popularList.innerHTML += `
        <div class="food">
        <a href="./detail.html?id=${item.id}"> <img src="${item.image}" alt=""></a>
        <p class=" ct1"><a href="./detail.html?id=${item.id}">${item.name}</a></p>
        <div class="iconne">
            <img src="src/img/lolhai.png" alt="">
            <p>30 Minutes</p>
            <img src="src/img/thia.png" alt="">
            <p>Snack</p>
        </div>
    </div>


          
        `
    }}
}
showProduct(ListProduct)





const filterSelect = document.querySelector("#filter-select")
function filterProduct(){
    const under30 = ListProduct.filter(function(product){
        return product.price < 30
    })
    const over30 = ListProduct.filter(function(product){
        return product.price>=30
    })
    const all = ListProduct.filter(function(product){
        return product.price>0
    })
    if(filterSelect.value == 'under30'){
        showProduct(under30)
    }
    if(filterSelect.value == 'over30'){
        showProduct(over30)
    }
    if(filterSelect.value == 'all'){
        showProduct(all)
    }
}





if(filterSelect){ 
    filterSelect.addEventListener("change",filterProduct)
}








function detailProduct(){
    const prdId = new URLSearchParams(window.location.search).get('id')
     console.log(prdId);
    if(prdId){
        const product = ListProduct.find(function(item){
            return item.id == prdId
        })
        console.log(product);
        const detailProductDiv = document.querySelector('.banner')
        detailProductDiv.innerHTML = `
        <div class="left">
        <p class="item-content">${product.name}</p>
        <p class="price">$${product.price}</p>
        <img class="left-img" width="100%" src="${product.image}" alt="">
        <p class="noidung">${product.desc}</p>
        <form action="" onsubmit="return validate4()">
        <input type="number" id="quality" placeholder="Quality">
         <button type="submit">Add To Cart</button>
        </form>
    </div>
    <div class="right">
        <img width="100%" src="${product.image}" alt="">
    </div>
        `
    }
}
detailProduct();








///validate///


function validate4(){
    var quality = document.getElementById('quality')
    var flag =true;
    if(quality.value==""){
        alert(" Please enter the quantity")
        flag=false;
    }else{
        flag=true;
    }
    return flag;
}
    function validate(){
        var abc = document.getElementById('discover')
        var status= true;



        if(abc.value==""){
            alert("PLEASE DO NOT leave blank")
            status = false;
        }else{
           status=true; 
        }
        return status;
    }

    function validate2(){
        var username=document.getElementById('name')
        var email = document.getElementById('email')
        var subject=document.getElementById('subject')
        var status = true;
        var Advertising= document.getElementById('Advertising')
         if(username.value==""){
            document.getElementById('err-username').innerHTML=" Please enter your name"
            status = false;
         }else{
             document.getElementById("err-username").innerHTML=""
             status= true;
         }
         if(email.value==""){
             document.getElementById('errol-email').innerHTML="Please enter your email"
             status=false;
         }else{
            document.getElementById('errol-email').innerHTML=""
            status=true;
         } 
         if(subject.value==""){
             document.getElementById('errol-subject').innerHTML="Please enter your subject"
             status= false;
         }else{
            document.getElementById('errol-subject').innerHTML=""
            status=true;
         }
         if(Advertising.value==0){
             document.getElementById('errol-enquiry').innerHTML="Please enter your option"
             status=false;

         }else{
            document.getElementById('errol-enquiry').innerHTML=" "
          
         }
         return status;

        
    }

    /////cart////
    function tinhtien(event){
        var parent=event.parentElement;
        var price = Number(parent.previousElementSibling.innerText)
        var quantity = event.value;
        var unitprice=parent.nextElementSibling;
        unitprice.innerText=price*quantity;
    tongtien();
    }
    function tongtien(){
        var thanhtien=document.getElementsByClassName('thanhtien');
        var tong=0;
        for(var i=0;i<thanhtien.length;i++){
            tong+=Number(thanhtien[i].innerText)
        }
        document.getElementById('tongtien').innerHTML=tong;
    }
    
     

 
function addCart(id){
    for(let item of ListProduct){
        if(id==item.id){
            if(!item.quantity){
                item.quantity=1;
                ListCart.push(item);
            }else{
                item.quantity+=1;
            }
        }
    }
   console.log(ListCart);
    sessionStorage.setItem("cart",JSON.stringify(ListCart));
}
addCart(1);
addCart(2);
addCart(3);
addCart(4);
addCart(5);
addCart(6);


function showcart(){
    const ListCartDiv=document.getElementsByClassName('giohang')
    const data = sessionStorage.getItem("cart")
    data = JSON.parse(data);
    if(ListCartDiv){
        for(let item of data){
            ListCartDiv.innerHTML=`
            <tr>
            <td></td>
            <td><img src="${item.image}" width="120px" alt=""></td>
            <td class="tittle-form">${item.name} </td>
            <td class="price"> ${item.price}</td>
            <td><input type="number" value="0" min="0" onchange="tinhtien(this)"></td>
            <td class="thanhtien"></td>
            <td><button onclick="removerUser()">DELETE</button></td>
              </tr>
            `
        }
    }
}
showcart();
