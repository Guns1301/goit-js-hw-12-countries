(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{OPH6:function(e,t,n){},QfWi:function(e,t,n){"use strict";n.r(t);n("iPZ8"),n("kypl"),n("D/wG"),n("JBxO"),n("FdtR"),n("OPH6");var o=n("czhI"),r=n.n(o);console.log("axios",r.a),r.a.defaults.baseURL="https://api.openweathermap.org/data/2.5/weather";var c={city:document.querySelector(".city"),icon:document.querySelector(".icon"),temp:document.querySelector(".temp"),desc:document.querySelector(".description"),humidity:document.querySelector(".humidity"),wind:document.querySelector(".wind"),weather:document.querySelector(".weather"),searchInput:document.querySelector(".search-bar"),searchBtn:document.querySelector(".search-btn")},i=new(function(){function e(){this.key="b17a2dddb01d7481fea6373f92c2e546"}var t=e.prototype;return t.getDataWithAxios=function(e){var t=this,n="?q="+e+"&appid="+this.key;r.a.get(n).then((function(e){return e.data})).then((function(e){return t.showWeather(e)})).catch((function(e){return console.error(e)}))},t.getFetch=function(e){var t=this,n="https://api.openweathermap.org/data/2.5/weather?q="+e+"&appid="+this.key;fetch(n).then((function(e){if(console.log(e),e.ok)return e.json();throw alert("Bad Request!!!"),new Error("Bad Request!!!")})).then((function(e){return t.showWeather(e)}))},t.showWeather=function(e){c.weather.classList.remove("loading");var t=e.weather[0].icon,n=Math.round(e.main.temp-273.15),o=e.main.humidity,r=e.wind.speed,i=e.weather[0].description,a=e.name;c.temp.textContent=n+"°C",c.humidity.textContent="Humidity: "+o+"%",c.wind.textContent="Wind speed: "+r+"km/h",c.icon.src="https://openweathermap.org/img/wn/"+t+".png",c.icon.alt=i,c.desc.textContent=i,c.city.textContent="Weather in "+a},e}());console.log(i),c.searchBtn.addEventListener("click",(function(){var e=c.searchInput.value;i.getFetch(e)}))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.995a9cf8f92dd0a6ee30.js.map