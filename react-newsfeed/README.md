This project has 2 versions:
1. The repository one was created with [Create React App](https://github.com/facebook/create-react-app).

## To run the app
In the project directory, you can run:

### `npm install`
### `npm start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />

2. The zip one(that can also be open with this link) was created on an static html using the React CDN.

## To run the app
Simply open the index.html in the browser and the linked CDN would do the job.

## About the project
This app was built in React, HTML5 & CSS3 and utilizes the News API (https://newsapi.org/docs) from Google where you get the latest news and can also filter your search by predetermined endpoints.

Architecture
The app has an App Component that renders the whole page and acts as parent. For the main section I created a Feed component and a Categories component which filter acording to the sugested categories in the API documentation and keywords - note: the API returns repeted articles for these queries so i added a function to remove duplicity -. It also has a Header and Footer component like it would have if it was a real application, which, for this project I am keeping them very simple and rendering the necessary to fullfill the design. 

Design
I took in mind a clean and simple news feed with a responsive layout and intuitive sections. I added some UX accesibility by adding a checks on the selected category, hover styles and transitions for the news cards and buttons as well as the thought on a simple colour scheme and shapes. For the responsive version, the categories sections transform into a carousel.


