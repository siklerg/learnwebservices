window.onload = function() {
  registerOnSubmit();
  checkServerStatus();
  registerCopyButtonHandlers();
}

function registerCopyButtonHandlers() {  
  $(".btn-copy").mouseleave(function(e) {
    $(this).tooltip('hide');
  });
}

function registerOnSubmit() {
  let form = document.getElementById("hello-form");
  form.onsubmit = submitHandler;
}

function checkServerStatus() {
  let url = "http://www.learnwebservices.com/actuator/info";
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(info) {        
      setStatus("Online (" + info.build.version + ")", "badge-success");
    })
    .catch(function(error) {
      setStatus("Offline", "badge-danger")  
    });
}

function submitHandler() {
    callWebservice(readName(), function(message) {
        writeMessage(message);
    },
    function(error) {
        showErrorMessage();
    });
    return false;
}

function showErrorMessage() {
  let div = document.getElementById("webservice-error-div");
  div.classList.remove("d-none");
}

function setStatus(text, ccsClass) {
    let badge = document.getElementById("health-check-badge");
    badge.innerHTML = text;
    badge.classList.remove("d-none");
    badge.classList.add(ccsClass);
}

function readName() {
    return document.getElementById("hello-name-input").value;
}

function writeMessage(message) {
    document.getElementById("hello-message-input").value = message;
}

function callWebservice(name, onSuccess, onError) {
  let url = "http://www.learnwebservices.com/services/hello";
  let request = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
     <soapenv:Header/>
     <soapenv:Body>
        <SayHello xmlns="http://learnwebservices.com/services/hello">
           <HelloRequest>
              <Name>{{name}}</Name>
           </HelloRequest>
        </SayHello>
     </soapenv:Body>
  </soapenv:Envelope>`.replace("{{name}}", name);

  let fetchData = {
     method: 'POST',
     body: request
  };

  fetch(url, fetchData)
    .then(function(response) {
      return response.text();
    })
    .then(function(xml) {
        let xmlDoc = new DOMParser().parseFromString(xml, "text/xml");
        let message = xmlDoc.getElementsByTagNameNS("http://learnwebservices.com/services/hello", "Message")[0].textContent;
        onSuccess(message);
    })
    .catch(function(error) {
      onError(error);
    });

  return false;
}
