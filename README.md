#### Project 12

## Bolt Street View 🔩

###### This is the final project for the 🏡 Treehouse Techdegree Full Stack JavaScript.

### App is live here: [Bolt Street View](https://bolt-street-view.herokuapp.com/).
Survey marks (or bolts) are objects that mark key survey points on the Earth's surface, and are used in geodetic and land surveying. (In simple terms, surveyors uses these known marks to measure). With this app, you can search for a survey mark and it will retrieve the street view for its location,  you can then click the arrow to turn around 360. It also returns a nearby hardware store and the current weather.



### How to use this app

`npm i` to install dependences.

You'll need API keys from [Google Street View](https://developers.google.com/maps/documentation/streetview/intro), [OpenWeather](https://openweathermap.org/api), and [Maps Javascript API](https://developers.google.com/maps/documentation/javascript/places).


You need to rename `.env.example` to `.env` and add your keys to the file like so

```
STREET_VIEW=YOUR-STREET-VIEW-KEY
WEATHER=YOUR-WEATHER-KEY
PLACES=YOUR-PLACES-KEY
URL=YOUR-URL

```
### Populating the `marks` table

Update the `bin/scims.sql` file, run:

`node bin/extract-scims.js`

This will take about 5 minutes to complete.

When the console logs out '👍 Done' you are ready to use this app: `npm start` to run, `npm test` to test.



### Capstone project
This is the final project for my Treehouse Tech Degree (Full Stack JavaScript). I've aimed for exceeds expectations.

##### 3 APIS:
- Google Street View
- Open Weather Map
- Maps Javascript API

#### Tested on:
- Safari Version 11.0.2 (12604.4.7.1.4)
- FireFox 56.0 (64-bit)
- Chrome Version 63.0.3239.84 (Official Build) (64-bit)
- Internet Explorer 11