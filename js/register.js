  $('.datepicker').pickadate({
    selectMonths: true,                               
    selectYears: 20,                                  
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false                         
  });
var currentTab = 0;                              
showTab(currentTab);                             
function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
    alert("value of str: "+x.length+"and n is: "+n);
  fixStepIndicator(n)                            
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  x[currentTab].style.display = "none";          
  currentTab = currentTab + n;                   
  if (currentTab >= x.length) {                  
    return false;
  }
  showTab(currentTab);     
}
function fixStepIndicator(n) {
  var i, x = document.getElementsByClassName("step"); 
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";                        
}