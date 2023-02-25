**Architecture**

**Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).**

In the (Travlr) project there were several front end development processes that were applied. The front end (customer facing site) was developed originally using Express HTML and then converted over to a .hbs view to facilitate the rendering speeds such that during each refresh, not every component of the site would have to be fully loaded. JavaScript was used as a frontend and backend coding language to add dynamic elements to the webpage since HTML is static and client facing that cannot interact with backend databases to dynamically update information, hence JavaScript was used to pull trip information from the MongoDB database so that the page can change dynamically based on user interaction. The initial SPA was a website that functioned just like a typical single-page-application would. It would not fully refresh the page based on user interactions like an HTML page would. This is particularly useful in giving the website a local/native application feel when interacting with the application itself.

**Why did the backend use a NoSQL MongoDB database?**

NoSQL MongoDB database was used in the backend due to the ease with which a schema could be modified in regards to scaling (especially horizontally) and functionality changes due to the database’  non-relational nature. 

**Functionality**

**How is JSON different from JavaScript and how does JSON tie together the frontend and backend development pieces?**

JSON is a data interchange format used as a standardized way to format object data that can be easily read by JavaScript (a scripting language) to form it into a literal JavaScript object. This ties frontend and backend development together by creating a way to exchange data due to its characteristics and simplicity. It also allows for data/ JavaScript objects to be stored on the backend and used for or during frontend requests. 

**Provide instances in the full stack process when you refactored code to improve functionality and efficiencies and name the benefits that come from reusable user interface (UI) components.**

The trip card as opposed to the trip list components would be a good example of when/where I refactored code to improve functionality and efficiency. Both components render pretty much the same information hence having both would be inefficient, when you could have each trip to render separately but as part of the whole. Every time UI components are reused, the size of an application is reduced, and it makes the development process quicker, and decreases the chance of errors and vulnerabilities introduced into the system (provided the component is secure). 

**Testing**

**Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.**

One way of testing endpoints prior to adding security is by going to the localhost web address for the API endpoint and checking to see if the page loads the data successfully. If an error occurs, then check to see what type of error its throwing. In the Travlr (web application) project, Postman was used to test HTTP requests. This was the ideal choice because it can also take security measures and inputs to test endpoints that might be protected from unauthenticated users.

**Explain your understanding of methods, endpoints, and security in a full stack application.**

•	The methods (e.g. GET, POST, PUT, DELETE) of a website or web application in full stack application, is what drives the functionality and dynamics of a webpage. GET, POST, PUT, and DELETE are http requests that can be used to retrieve or modify the database. These are driven on the backend by using the functions of the database (.create, .findOne, .find, .findOneAndUpdate) to modify the database. 
•	Endpoints are the display or outputs of the methods seen by the admin or the client side of the application. Endpoints should be tested for proper functionality and display of data. Testing endpoints also help see errors if any is thrown. 
•	Security is another layer of code that is added to prevent unauthorized or unauthenticated users from accessing or modifying te database. An example of this would be to add or edit a trip in the database. These API endpoints need to be protected so that unauthorized users cant tamper with the database.

**Reflection**

**How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?**

The degree of learning I have acquired in this course is more than I can explain in terms of my understanding of Full stack development as a process from a developer’s perspective and an end-user/client point of view. This course given me an even bigger reason and direction towards becoming better career wise. There is certainly no doubt that the skills learned in this course has helped me to better understand the skill level I need to be competitive in the job market. 
