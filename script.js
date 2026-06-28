const items = document.querySelectorAll(".item");
const content = document.getElementById("content");

items.forEach((item, index) => {

item.onclick = function () {

items.forEach(i => i.classList.remove("active"));
item.classList.add("active");

if(index===0){

content.innerHTML=`

<section class="glass-card">

<h1>تجربه‌ای متفاوت</h1>

<h3>از طراحی و رسم</h3>

</section>

<img src="images/device.jpg" class="device">

<div class="glass-card info-card">

<h2>درباره دستگاه</h2>

<p>

دستگاهی برای رسم، نوشتن و اجرای طرح روی سطوح صاف با دقت بالا.

این دستگاه با استفاده از Arduino UNO WiFi R3، شیلد CNC Shield V3، دو موتور پله‌ای و سروو موتور SG90 ساخته شده است.

مناسب برای رسم، نوشتن و اجرای طرح روی سطوح صاف با دقت بالا.

</p>

</div>

`;

}

else if(index===1){

content.innerHTML=`

<section class="glass-card">

<h2>گالری نمونه کارها</h2>

<p>

برای مشاهده بزرگ روی عکس کلیک کنید.

</p>

</section>

<div class="gallery">

<img src="images/sample1.jpg.jpg">

<img src="images/sample2.jpg.jpg">

<img src="images/sample3.jpg.jpg">

<img src="images/sample4.jpg.jpg">

<img src="images/sample5.jpg.jpg">

<img src="images/sample6.jpg.jpg">

</div>

<div id="viewer">

<img id="bigImage">

</div>

`;

document.querySelectorAll(".gallery img").forEach(img=>{

img.onclick=function(){

document.getElementById("viewer").style.display="flex";

document.getElementById("bigImage").src=this.src;

}

});

document.getElementById("viewer").onclick=function(){

this.style.display="none";

}

}
else if(index===2){

content.innerHTML=`

<section class="glass-card">

<h2>مشخصات دستگاه</h2>

</section>

<div class="glass-card info-card">

<h3>Arduino UNO WiFi R3</h3>

<p>

برد کنترل اصلی دستگاه

</p>

</div>

<div class="glass-card info-card">

<h3>CNC Shield V3</h3>

<p>

شیلد کنترل موتورهای پله‌ای

</p>

</div>

<div class="glass-card info-card">

<h3>دو موتور پله‌ای</h3>

<p>

کنترل محور X و محور Y

</p>

</div>

<div class="glass-card info-card">

<h3>Servo Motor SG90</h3>

<p>

کنترل محور Z

</p>

</div>

<div class="glass-card info-card">

<h3>محدوده کاری</h3>

<p>

۴ × ۴ سانتی‌متر

</p>

</div>

<div class="glass-card info-card">

<h3>نوع عملکرد</h3>

<p>

رسم، نوشتن و اجرای طرح روی سطوح صاف

</p>

</div>

<div class="glass-card info-card">

<h3>نوع کنترل</h3>

<p>

G-code

</p>

</div>

<div class="glass-card info-card">

<h3>کاربردها</h3>

<p>

✔ رسم با خودکار

<br>

✔ نوشتن متن

<br>

✔ طراحی روی کاغذ

<br>

✔ آموزش CNC

<br>

✔ پروژه‌های دانش‌آموزی و دانشجویی

</p>

</div>

`;

}
else if(index===3){

content.innerHTML=`

<section class="glass-card">

<h2>درباره برنامه</h2>

</section>

<div class="glass-card info-card">

<h3>Writer-bot</h3>

<p>

این برنامه برای معرفی دستگاه

Mini CNC Plotter

طراحی شده است.

</p>

</div>

<div class="glass-card info-card">

<h3>سازنده</h3>

<p>

سهند مرامی

</p>

</div>

<div class="glass-card info-card">

<h3>ایمیل</h3>

<p>

sahandmarami@gmail.com

</p>

</div>

<div class="glass-card info-card">

<h3>شماره تماس</h3>

<p>

09101240456

</p>

</div>

<div class="glass-card info-card">

<h3>نسخه برنامه</h3>

<p>

Version 1.0

</p>

</div>

<div class="glass-card info-card">

<h3>هدف برنامه</h3>

<p>

معرفی کامل دستگاه Mini CNC Plotter، نمایش مشخصات فنی، نمونه‌کارها و اطلاعات سازنده.

</p>

</div>

`;

}

};

});
const settings=document.querySelector(".settings");

settings.onclick=function(){

document.getElementById("settingsModal").style.display="flex";

}

function closeSettings(){

document.getElementById("settingsModal").style.display="none";

}

document.getElementById("darkMode").onchange=function(){

document.body.classList.toggle("dark");

}

function exitApp(){

alert("در نسخه اندروید دکمه خروج فعال خواهد شد.");

}
