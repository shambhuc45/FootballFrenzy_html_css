function createNav(){
    let nav = document.querySelector('.navbar');
    nav.innerHTML=`
    <div class="nav">
    <a href="index.html"><img src="images/logob.png" class="brand-logo"><a>
     <div class="nav-items">
       <div class="search">
           <input type="text" class="search-box" placeholder="Search Item Here">
           <button class="search-btn">Search</button>
       </div>
       <a href="#"><img src="images/profile.png" height="40px" ></a>
       <a href="#"><img src="images/cart.png" height="40px" ></a>
      </div>
   </div>
    <ul class="links-container">
    <li class="list-items"><a href="#" class="link">Home</a></li>
    <li class="list-items"><a href="#" class="link">Club</a></li>
    <li class="list-items"><a href="#" class="link">National</a></li>
    <li class="list-items"><a href="#" class="link">Phone Cases</a></li>
    </ul>
    `;
}
createNav();