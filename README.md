#### Project 12

## Survey Marks 🔩

###### This is the final project for the 🏡 Treehouse Techdegree Full Stack JavaScript.
🚧 🚧 🚧 Currently a WIP. 🚧 🚧 🚧

You need to rename `.env.example` to `.env` and add your keys to the file like so

```
STREET_VIEW=YOUR-STREET-VIEW-KEY
WEATHER=YOUR-WEATHER-KEY
PLACES=YOUR-PLACES-KEY
URL=YOUR-URL

```

You'll need API keys from [Google Street View](https://developers.google.com/maps/documentation/streetview/intro), [OpenWeather](https://openweathermap.org/api), and [Maps Javascript API](https://developers.google.com/maps/documentation/javascript/places).

`npm i` to install dependences, then `npm start` to run, `npm test` to test.


### 3 APIS:
- Google Street View
- Open Weather Map
- Maps Javascript API


### Populating the `marks` table

Update the `bin/scims.sql` file and then run:

`node bin/extract-scims.js`