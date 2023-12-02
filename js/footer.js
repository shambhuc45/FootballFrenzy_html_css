function createFooter(){
    let footer = document.querySelector('footer');
    footer.innerHTML=` <div class="footer-content">
    <a href="index.html"><img src="images/logow.png" class="logo" alt=""></a>
    <div class="footer-ul-container">
        <ul class="category">
            <h6 class="category-title">Club Jerseys</h6>
            <li><a href="#" class="footer-link">FC Barcelona</a></li>
            <li><a href="#" class="footer-link">Liverpool</a></li>
            <li><a href="#" class="footer-link">Man United</a></li>
            <li><a href="#" class="footer-link">PSG</a></li>
            <li><a href="#" class="footer-link">Messi And CR7</a></li>
        </ul>
        <ul class="info-footer">
            <h6 class="category-title">Information</h6>
            <li><a href="#" class="footer-link">About Us</a></li>
            <li><a href="#" class="footer-link">Terms And Conditions</a></li>
            <li><a href="#" class="footer-link">Privacy Policy</a></li>
        </ul>
        <ul class="info-footer">
            <h6 class="category-title">Reach Us</h6>
            <li><a href="#" class="footer-link">Facebook</a></li>
            <li><a href="#" class="footer-link">Instagram</a></li>
            <li><a href="#" class="footer-link">Twitter</a></li>
        </ul>

    </div>

</div>
<div class="pay-methods">
    <label class="pay-title">We Accept:</label><img src="images/pay/all.png" class="pay">
</div>`;
}
createFooter();