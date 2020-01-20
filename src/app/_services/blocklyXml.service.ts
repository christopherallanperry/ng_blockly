import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
// import "rxjs/add/operator/catch";
// import { catchError } from "rxjs/operators";
import { Observable } from "rxjs";
// import { IBlocklyXml } from "../../assets/blockly/data/interface";

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
        .append("Access-Control-Allow-Methods", "GET")
        .append("Access-Control-Allow-Origin", "*")
        .append(
          "Access-Control-Allow-Headers",
          "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"
        ),
      responseType: "text"
    });
  }

  // errorHandler(error: HttpErrorResponse) {
  //   return Observable.throwError(error.message || "Server Error");
  // }
}
