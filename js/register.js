  $('.datepicker').pickadate({
    selectMonths: true,                               
    selectYears: 20,                                  
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false                         
  });
var currentSelect = 0;
var currentTab = 0;  
function button_selection(n) {
    var p = document.getElementsByClassName("button-select");
    if (n == 0) {
        p[0].style.display = "block";
        p[1].style.display = "none";
        currentSelect = 0;        
        showTab(currentTab); 
    }
    else {
        p[0].style.display = "none";
        p[1].style.display = "block";
        currentSelect = 1;        
        showTab(currentTab); 
    }
}                                                
function showTab(n) {
    if (currentSelect == 0) {
        var x = document.getElementsByClassName("tab");
        x[n].style.display = "block";
    } else {
        var x = document.getElementsByClassName("tab-1");
        x[n].style.display = "block";
    }
}
function nextPrev(n) {
    if (currentSelect == 0) {
        var x = document.getElementsByClassName("tab");
        x[currentTab].style.display = "none";          
        currentTab = currentTab + n;                   
        if (currentTab > x.length) {                  
            return false;
        }
        if (currentTab == 0) {
            var y = document.getElementsByClassName("left-btn");
            for (var i=0; i<y.length; i++)
                y[i].disabled = true;
        } else {
            var y = document.getElementsByClassName("left-btn");
            for (var i=0; i<y.length; i++)
                y[i].disabled = false;
        }
        if (currentTab >= x.length-1) {
            var y = document.getElementsByClassName("right-btn");
            for (var i=0; i<y.length; i++)
                y[i].disabled = true;
            document.getElementById("finish").style.display = "block";
        } else {
            var y = document.getElementsByClassName("right-btn");
            for (var i=0; i<y.length; i++)
                y[i].disabled = false;
            document.getElementById("finish").style.display = "none";
        }
    } else {
        var x = document.getElementsByClassName("tab-1");
        x[currentTab].style.display = "none"; 
        currentTab = currentTab + n;                   
        if (currentTab > x.length) {                  
            return false;
        }
        if (currentTab == 0) {
            var y = document.getElementsByClassName("left-btn");
            for (var i=0; i<y.length; i++)
                y[i].disabled = true;
        } else {
            var y = document.getElementsByClassName("left-btn");
            for (var i=0; i<y.length; i++)
                y[i].disabled = false;
        }
        if (currentTab >= x.length-1) {
            var y = document.getElementsByClassName("right-btn");
            for (var i=0; i<y.length; i++)
                y[i].disabled = true;
        } else {
            var y = document.getElementsByClassName("right-btn");
            for (var i=0; i<y.length; i++)
                y[i].disabled = false;
        }
    }
  
  showTab(currentTab);     
}
function myMap() {
  var myCenter = new google.maps.LatLng(23.2599,77.4126);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 12};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);
}