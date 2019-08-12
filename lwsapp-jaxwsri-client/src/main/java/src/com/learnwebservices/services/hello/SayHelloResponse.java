
package com.learnwebservices.services.hello;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for SayHelloResponse complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="SayHelloResponse">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="HelloResponse" type="{http://learnwebservices.com/services/hello}helloResponse"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "SayHelloResponse", propOrder = {
    "helloResponse"
})
public class SayHelloResponse {

    @XmlElement(name = "HelloResponse", required = true)
    protected HelloResponse helloResponse;

    /**
     * Gets the value of the helloResponse property.
     * 
     * @return
     *     possible object is
     *     {@link HelloResponse }
     *     
     */
    public HelloResponse getHelloResponse() {
        return helloResponse;
    }

    /**
     * Sets the value of the helloResponse property.
     * 
     * @param value
     *     allowed object is
     *     {@link HelloResponse }
     *     
     */
    public void setHelloResponse(HelloResponse value) {
        this.helloResponse = value;
    }

}
