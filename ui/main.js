var counter=0;
var button = document.getElementById('counter');

button.onclick = function() {
  counter = counter + 1;
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
      if(request.readystate === XMLHttpRequest.DONE) {
          if(request.status === 200) {
               var counter = request.responseText;
               var span = document.getElementById('count');
               span.innerHTML = counter.toString();
               
         }
      }
      
  };
  
  request.open('GET','http://sahildshah.imad.hasura-app.io/', true);
   request.send(null);
};
