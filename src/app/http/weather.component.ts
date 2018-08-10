import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
//rx js 5 in angular 5
// import {Http,Headers} from '@angular/http'

//angular 6 with rxjs 6.0
import { HttpClient,HttpHeaders } from '@angular/common/http';
/*
//RXJS 5.0 in Angular 4/5
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';

*/

import { Observable } from 'rxjs';
import { debounceTime, switchMap, map } from 'rxjs/operators';


const httpOptions = {
    headers: new HttpHeaders(
        { 'Content-Type': 'application/json' })
};

@Component({
    selector: "app-weather",
    template: `
    <div class="container">
      <h3 style="background:orange">Live Weather Forecast by Murthy</h3>
      
      City:<input type="text"
            [formControl]="searchInput">

      <h3>Current Temperature in {{temperature}}F </h3>
      <h3>Humidity {{humidity}}% </h3>
     <h2 >Status : {{description}}</h2>
     </div>
    `
})
export class WeatherComponent {
    //http://api.openweathermap.org/data/2.5/weather?q=chennai&units=imperial&appid=ca3f6d6ca3973a518834983d0b318f73
    
    private baseWeatherURL: string =
    'http://api.openweathermap.org/data/2.5/weather?q=';

    private urlSuffix: string =
    "&units=imperial&appid=ca3f6d6ca3973a518834983d0b318f73";

   // FormControl comes from ReactiveFormsModule
    searchInput: FormControl = new FormControl();
    temperature: string;
    description: string = '';
    humidity: string = '';
    /*
    Angullar 4/5 way for subscribe:  
     observable.subscribe(    (res: any) => {
                this.description = res.weather[0].description;
                this.temperature = res.main.temp;
                this.humidity = res.main.humidity;

                (Pipe is used for operators in rxjs 6.0)
    */

    constructor(private http: HttpClient) {
        //Observable form       
        this.searchInput.valueChanges
            .pipe(debounceTime(4000))
            .pipe(switchMap((city: string) => this.getWeather(city)))
            .subscribe(    (res: any) => {
                this.description = res.weather[0].description;
                this.temperature = res.main.temp;
                this.humidity = res.main.humidity;
            },
            (err: any) =>
                console.log(
                `Can't get weather. Error code: %s, URL: %s`, 
                  err.message, err.url
                ),
            () => console.log('done')
            );
    }
    ngOnInit() {
        this.searchInput.setValue("Hyderabad");
    }    
      // send a POST request to the API to create a new data object
      createWeather(data) {
        //let body = JSON.stringify(data);
       // return this.http.post
           //(this.baseUrl+'/api/weather/', body, httpOptions);
    }
    //Ajax call here (write this code in service)
    getWeather(city: string): Observable<Array<string>> {
        return this.http.get(this.baseWeatherURL + city + this.urlSuffix)
            .pipe(map((data:any) => {
                console.log(data);
                return data
            }));
    }
}
// end