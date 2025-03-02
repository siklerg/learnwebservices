const fetch = require('node-fetch');
const DOMParser = require('xmldom').DOMParser;

function callWebservice() {
  var url = "http://localhost:8080/services/hello";
  var request = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
     <soapenv:Header/>
     <soapenv:Body>
        <SayHello xmlns="http://learnwebservices.com/services/hello">
           <HelloRequest>
              <Name>John Doe</Name>
           </HelloRequest>
        </SayHello>
     </soapenv:Body>
  </soapenv:Envelope>`;

  var fetchData = {
     method: 'POST',
     body: request
  };

  fetch(url, fetchData)
    .then(function(response) {
      return response.text();
    })
    .then(function(xml) {
        var xmlDoc = new DOMParser().parseFromString(xml, "text/xml");
        console.log(xmlDoc.getElementsByTagNameNS("http://learnwebservices.com/services/hello", "Message")[0].textContent);
    })
    .catch(function(error) {
      console.log("Error calling webservice: " + error);
    });
}

callWebservice();
