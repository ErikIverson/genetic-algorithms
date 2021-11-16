# Genetic Algorithms
CS199 Capstone on Genetic Algorithms

Steps to Reproduce After Cloning (Must have NodeJS installed)

__Before you start:__ [Install Angular](https://angular.io/guide/setup-local) via  <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *npm install -g @angular/cli*

1.) Visit the [Google Cloud Console](https://console.cloud.google.com/) and sign up for a free trial account if you don't already have one. <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a.) Navigate to the API's & Services page, and create a new API Key in the credentials.<br />

2.) Enable the following APIs so we can access them with your new secret key.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Places API<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Geocoder API<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Maps JavaScript API<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Distance Matrix API<br />

3.) Open up the repository in your IDE and run the following commands inside the terminal of your Angular project.<br /><br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Run command: *npm install*<br /><br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Then find the **app.module.ts** file and the later 'apiKey' with your actual apiKey. Be warned that this key should only be used locally and never shared with others on the internet. <br /><br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Then run the command: *ng serve*<br />


