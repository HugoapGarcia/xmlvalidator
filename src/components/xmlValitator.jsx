import React, { useState } from 'react';
import "../index.css";
import XMLViewer from 'react-xml-viewer'
import convert from 'xml-js';
///const convert = require('xml-js');

const XmlComponent = () => {
    const [XML, setXML] = useState('');
    const [newXML, setNewXML] = useState('');
    const [complexXML, setComplexXML] = useState('');
    const [newComplexXML, setNewComplexXML] = useState('');

    /*** Retreive XML File */
    function getXML() {
        let url = 'https://hugoapgarcia.github.io/structure/user.xml';
        fetch(url)
            .then(response => response.text())
            .then(data => {
                //console.log(data);  //string
                let parser = new DOMParser();
                let xml = parser.parseFromString(data, "application/xml");
                //document.getElementById('output').textContent = data;
                setXML(data);
                //console.log(xml);

                //read xml
                xmlData(xml)

                //process xml
                processFile(xml)

            });

    }

    /*** Example of how to display values of xml from response */
    function xmlData(xml) {
        document.getElementById('users').textContent = '';

        let list = document.getElementById('users');
        let users = xml.getElementsByTagName("user");

        for (let i = 0; i < users.length; i++) {
            let user = users[i];
            let names = user.getElementsByTagName("name");

            let li = document.createElement('li');

            for (let j = 0; j < names.length; j++) {
                //alert(names[j].childNodes[0].nodeValue);
                li.textContent = names[j].childNodes[0].nodeValue;
                list.appendChild(li);
            }
        }
    }

    /*** Example of how to send new xml to specific endpoint */
    function sendXML(xml, name) {
        const xhttp = new XMLHttpRequest();
        let endpoint = '';
        xhttp.open("POST", endpoint);
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState === 4 && xhttp.status === 200) {
                const res = xhttp.response;
                alert(`${res}: ${name}`);
            }
        };
        xhttp.setRequestHeader("Content-Type", "text/xml");
        xhttp.send(xml);

    }
    /*** Example of how to process file, adding new values to existin xml from response */
    function processFile(data) {
        var chat = data.createElement("user");

        var user = data.createElement("id");
        user.appendChild(data.createTextNode("1"));

        var content = data.createElement("name");
        content.appendChild(data.createTextNode("Karla"));

        var timezone = data.createElement("date");
        let time = new Date().toISOString();
        timezone.appendChild(data.createTextNode(time));

        chat.appendChild(user);
        chat.appendChild(content);
        chat.appendChild(timezone);

        data.getElementsByTagName("users")[0].appendChild(chat);

        console.log(data); //check the updated new XML
        sendXML(data, 'newXML');

        // showing updated users
        let newUsers = data.getElementsByTagName("users")[0];
        let xmlText = new XMLSerializer().serializeToString(newUsers)
        //document.getElementById('output-2').textContent = xmlText;
        setNewXML(xmlText);
    }


    /*** Retreive XSD File */
    function getXMLOrXSD() {
        let url = 'https://hugoapgarcia.github.io/structure/registration.xsd';

        fetch(url)
            .then(response => {
                return response.text()
            }).then(str => {
                //console.log(str);
                //document.getElementById('outputxsd').textContent = str;
                setComplexXML(str)

                // parse string
                return (new window.DOMParser()).parseFromString(str, "text/xml")
            }).then(xml => {
                console.log(xml);
                let xmlData = new XMLSerializer().serializeToString(xml);
                // convert xml object to json.
                // pass optiom to lib : [compact, ignoreAttributes, spaces]
                const options = { compact: true, ignoreAttributes: true, spaces: 4 };
                let refactoredJson = JSON.parse(convert.xml2json(xmlData, options));

                return refactoredJson;
            }).then(json => {
                // json is now available
                //console.log(json)

                const xml = convert.json2xml(json, {
                    compact: true
                });

                processXMLDFile(xml)
            });


    }

    /*** Example of how to process file, adding new values to existin xml from response */
    function processXMLDFile(data) {
        let parser = new DOMParser();
        let xml = parser.parseFromString(data, "application/xml");

        let title = xml.getElementsByTagName('title');
        title[0].textContent = 'Engineer'



        let xmlString = new XMLSerializer().serializeToString(xml);
        setNewComplexXML(xmlString);
        //document.getElementById('outputxsd2').textContent = xmlString




        // var chat = data.createElement("user");

        // var user = data.createElement("id");
        // user.appendChild(data.createTextNode("1"));

        // var content = data.createElement("name");
        // content.appendChild(data.createTextNode("Karla"));

        // var timezone = data.createElement("date");
        // let time = new Date().toISOString();
        // timezone.appendChild(data.createTextNode(time));

        // chat.appendChild(user);
        // chat.appendChild(content);
        // chat.appendChild(timezone);

        // data.getElementsByTagName("users")[0].appendChild(chat);

        // console.log(data); //check the updated new XML
        // sendXML(data, 'newXML');

        // // showing updated users
        // let newUsers = data.getElementsByTagName("users")[0];
        // let xmlText = new XMLSerializer().serializeToString(newUsers)
        // document.getElementById('output-2').textContent = xmlText;

    }



    return (<>
        <button onClick={(e) => getXML(e)}>Get & Update XML</button>
        <h3>Description:</h3>
        <p>Click event will be displaying current XML file retrives as List of usernames or any other item. Also will be executting an updated XML ready to be send to a
            specific endpoint url. Open Dev Tool and Conosole to see the updated XML.
        </p>
        <h3>XML DATA:</h3>
        <div className="xml-box">
            <div className="child">
                <h2>Current XML Response :</h2>
                <textarea readOnly id="output" lang="xml" rows="30" cols="55" value={XML}></textarea>
            </div>
            <div className="child">
                <h2>Updated XML</h2>
                <XMLViewer className='newXmlbox' xml={newXML} />
            </div>
            <div className="interaction">
                <h1>INTERACTION WITH XML:</h1>
                <p>Iterate in xml file to display only user-names in HTML.</p>
                <ul id="users"></ul>
            </div>
        </div>
        <hr />
        <button onClick={(e) => getXMLOrXSD(e)}>Get XSD & Create Valid XML from Schema</button>
        <h1>PROCESING XSD DATA:</h1>
        <div className="xml-box">
            <div className="child">
                <h2>Current XML Schema (XSD) Response :</h2>
                <textarea readOnly id="outputxsd" lang="xml" rows="30" cols="55" value={complexXML}></textarea>
            </div>
            <div className="child">
                <h2>Generated Valid XML :</h2>
                <XMLViewer className='newXmlbox' xml={newComplexXML} />

            </div>
        </div>
    </>
    )

}

export default XmlComponent;