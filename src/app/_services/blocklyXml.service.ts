import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BlocklyXmlService {
  private url = "../../assets/blockly/data/blockly.xml";

  constructor(private http: HttpClient) {}

  getBlocklyXml() {
    return this.http.get(this.url, {
      headers: new HttpHeaders()
        .set("Content-Type", "text/xml")
        .set("Accept", "text/xml")
        .append("Access-Control-Allow-Methods", "GET")
        .append("Access-Control-Allow-Origin", "*")
        .append(
          "Access-Control-Allow-Headers",
          "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"
        ),
      observe: "body",
      responseType: "text"
    });
  }
}
