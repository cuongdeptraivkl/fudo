const ListFood = [
    {
      id: 1,
      name: "Gà Rán",
      price: 1,
      desc: "Gà rán là thức ăn nhanh phổ biến được giới trẻ ưa chuộng và đang trở thành lựa chọn hàng đầu của nhiều người khi đến với nhữngcửa hàng fastfood không chỉ vì tiện lợi mà còn có những lợi íchkhông ngờ.",
      image: "src/img/img2.jpg",
      category: 1,
    },
    {
      id: 2,
      name: "Hamburger",
      price: 1,
      desc: "Hamburger chính là một thức ăn nhanh phổ biến ở Mỹ và các quốc gia, dù rằng Hamburger bắt nguồn từ thủ phủ Hamburg (Đức).",
      image: "src/img/img3.jpg",
      category: 1,
    },
    {
      id: 3,
      name: "Khoai tây chiên",
      price: 2,
      desc: "Là thức ăn nhanh phổ biến ở tất cả các quốc gia từ thành thị đến nông thôn, đây là món khoái khẩu của nhiều người không phân biệt lứa tuổi.",
      image: "src/img/img4.jpg",
      category: 3,
    },
    {
      id: 4,
      name: "Pizza",
      price: 2,
      desc: "Là loại bánh dẹt, tròn được chế biến từ nước, bột mỳ và nấm men, sau khi đã được ủ ít nhất 24 tiếng đồng hồ và nhào nặn thành loại bánh có hình dạng tròn và dẹt, và được cho vào lò nướng chín.",
      image: "src/img/img5.jpg",
      category: 4,
    },
    {
      id: 5,
      name: "Pasta",
      price: 2,
      desc: "Pasta là một loại thực phẩm truyền thống của nước Ý, đã có từ năm 1154 và trở thành thức ăn nhanh phổ biến trên khắp thế giới. Pasta có hơn 310 loại với 1300 tên gọi, hương vị và hình dạng khác nhau.",
      image: "src/img/img6.jpg",
      category: 5,
    },
    {
      id: 6,
      name: "Xúc xích",
      price: 1,
      desc: "Thức ăn nhanh phổ biến xúc xích là một loại thực phẩm chế biến từ thịt. Đây cũng là một trong những món ăn lâu đời nhất mà con người đã tạo ra trong quá trình bảo quản và lưu trữ thực phẩm bằng phương pháp hong khói, phơi khô, ủ muối hoặc hấp chín.",
      image: "src/img/img7.jpg",
      category: 6,
    },
  ];

  const BlogCategory = [
    {
      id: 1,
      name: "breakfast",
    },
    {
      id: 2,
      name: "vegan",
    },
    {
      id: 3,
      name: "meat",
    },
    {
      id: 4,
      name: "dessert",
    },
    {
      id: 5,
      name: "lunch",
    },
    {
      id: 6,
      name: "chocolate",
    },
  ];

  function showFood(data) {
    const FoodCT = document.querySelector(".content-food");
    FoodCT.innerHTML = "";
    for (let item of data) {
        if (item.id %= 2){
            FoodCT.innerHTML += `
            
            <div class="food-c">
            <div class="img-food">
            <img src="${item.image}" alt="" />
          </div>
            <div class="content-food">
              <a href=""><h2>${item.name}</h2></a>
              <p>
                ${item.desc}
              </p>
            </div>
          
            </div>
             `;
        }else{
            FoodCT.innerHTML += `
      <div class="food-c">
      <div class="content-food">
        <a href=""><h2>${item.name}</h2></a>
        <p>
          ${item.desc}
        </p>
      </div>
      <div class="img-food">
        <img src="${item.image}" alt="" />
      </div>
      
      </div>
       `;
        }
    }
  }
  showFood(ListFood);
