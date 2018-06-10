# REA Properties viewer

[Design Document](https://)

This app contains properties display in two different columns, which are result column and saved properties column. It allows users select properties from results to add into saved properties, and users are also able to remove properties from saved properties.

## Technologies used

ReactJS with Ant Design
webpack
webtask(online server services) for mocking backend api
Jest and enzyme for unit testing
Eslint and prettier for code formating

## Usage

1.  install dependencies using npm or yarn

```bash
npm install
```

or

```bash
yarn install
```

2.  start dev server

```bash
npm start
```

## Hosting JSON Data

It only tooks 2 mins to set it up and get all JSON servered from a url. (Go to [webtask](https://webtask.io/) to get your free url to host JSON data.)

## Environment config

You could set up your own backend api url at `/config/webpack.config.js`. It’s done inside webpack by checking the running environment is prod or not prod, and by changing env.xxx, so we can make frontend to swap different url for different environment.

Working in dev environment, just simply run

```
npm start
```

Run the command below for working in production environment

```
npm run prod
```

## build and deploy with github pages

Github pages support hosting your site in a docs directory within your repo. Simply run the following command to build your site into docs directory and update the source setting on github.

```bash
npm run build
```

## run tests

```bash
npm test
```
