
function preloader() {  
    if (document.images) {  
        var img1 = new Image();  
        var img2 = new Image();  
        var img3 = new Image(); 
        var img4 = new Image(); 
        var img5 = new Image(); 
        var img6 = new Image(); 
        var img7 = new Image(); 
        var img8 = new Image(); 
        var img9 = new Image(); 
        img1.src = "../img/breakfast.jpg";  
        img2.src = "../img/breakfast2.jpg";  
        img3.src = "../img/coffee.jpg";  
        img4.src = "../img/food1.jpg"; 
        img5.src = "../img/food2.jpg"; 
        img6.src = "../img/pizza.jpeg";
        img7.src = "../img/tocos.jpg";
        img8.src = "../img/beef.jpg";
        img9.src = "../img/salads.jpg";
    }  
}  


document.addEventListener('DOMContentLoaded', preloader);
function Menu(dish) {

    var menuContent = ''; // initial 
   
if (dish === "breakfast") { // display the breakfast menu
     menuContent = `
    <h2>Breakfast Menu</h2>
    <div class="image-row">
        <div>
            <img src="../img/breakfast.jpg" alt="pancake" width="100%">
            <p>pancake</p>
        </div>
        <div>
            <img src="../img/breakfast2.jpg" alt="Scallion Pancakes" width="100%">
            <p>Scallion Pancakes</p>
        </div>
        <div>
            <img src = "../img/coffee.jpg" alt="coffee" width="100%">
            <p>coffee</p>
        </div>
    </div>
`;
} else if (dish === "lunch") {  //display the lunch menu
    menuContent = `
    <h2>Lunch Menu</h2>
    <div class="image-row">
        <div>
            <img src="../img/food1.jpg" alt="Kung Pao Chicken" width="100%">
            <p>Kung Pao Chicken</p>
        </div>
        <div> 
            <img src="../img/food2.jpg" alt="Beef and Kale Stir-Fry"  width="100%">
            <p>Beef and Kale Stir-Fry</p>
        </div>
        <div>
            <img src="../img/pizza.jpeg" alt="Pizza" width="100%">
            <p>Pizza</p>
        </div>
    </div>
    `;
} else if (dish === "dinner") {  //display the dinner menu
    menuContent =`
    <h2>Dinner Menu</h2>
    <div class="image-row">
        <div>
            <img src="../img/tocos.jpg" alt="Tacos" width="100%">
            <p>tocos</p>
        </div>
        <div>
            <img src="../img/beef.jpg" alt="Beef burger" width="100%">
            <p>Beef burger</p>
        </div>
        <div>
            <img src="../img/salads.jpg" alt="Vegetable salads" width="100%">
            <p>vegetable salads</p>
        </div>
    </div>
    `;
}
$("#menu-content").html(menuContent);
}

document.addEventListener('DOMContentLoaded', () => {
Menu("breakfast");
});

$(document).ready(function() {
    $(".menu-item").click(function() {
        var item= $(this).attr("data-item");
        Menu(item);
    });
});
// -------------------
