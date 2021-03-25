import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { GoogleSheetsDbService } from "ng-google-sheets-db";
import { environment } from "../environments/environment";
import { Location, locationAttributesMapping } from "./location.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  locations$: Observable<Location[]>;

  constructor(private googleSheetsDbService: GoogleSheetsDbService) {}

  ngOnInit(): void {
    this.locations$ = this.googleSheetsDbService.getActive<Location>(
      environment.locations.spreadsheetId,
      environment.locations.worksheetId,
      locationAttributesMapping,
      "Active"
    );
  }
}
