# kovo-mvc

Annotated course catalogue content management system in node, updated for the new study and exam regulations.

## Install

`npm install`

-   The config directory must contain a data.js file with the following arrays: instructors, courseTypes, weekdays, times, semesters, semSansSpace, modules, oldModules. These must be exported using `module.exports`.
-   The config directory must also contain a .env file with the `PORT`, `MONGO` DB URI and a `FLASH_SECRET`.

## Run

`npm start`

The program is now accessible under `localhost:{PORT}`, where `PORT` is the one you specified in the .env file.

## Things to add

Coming soon
