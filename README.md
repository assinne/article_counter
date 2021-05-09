# Article Counter
 
A simple article counter, using express with routing-controller running typescript, using Jest unit tests.
This was developed on:
Node: v12.16.1
Npm: 7.12.0

# How to run
It order to get started, running following command to install node modules:
```
npm install
```
Running the following to start the server:
```
npm run watch
```
 
# How to use the endpoint
The endpoint runs on port:3000
 
User I created in the database are:
- user1 - 1 article
- user2 - 2 article
- user3 - 3 article
- user4 - 0 article
 
The key thing to watch for is return object '**canRead**' which is a boolean. If it returns "true" the user in question can read another article, if "false" then the user cannot read another article. Any user outside of these will return an user not found error. Simply update the fakeResponse method in DatabaseHandler to increase the number of users.
 
Curl command (I used postman, simple import the code below)
```
curl --location --request GET 'http://localhost:3000/userArticleRead/user2'
```
 
# Running Tests
To run tests use the following command:
```
npm run test
```
# Further improvements
More thing I have planned but did not implement:
- Logging decorator function
- Docker file
- Unit test coverage visualisation
 
# Scalability
One area I admit I do not have much knowledge is in devops and scaling. Since we have been using node and express along with kubernetes cluster, I do not have much issue relating to scalability, as result my experience is rather limited. It has not been an issue given the technologies we are using so far. The latest micro services we built using similar technology as here have scaled to every customer we are serving at a given region. Thus it has worked well within expectations.
 
My own personal take on the software side is to make the code as simple as possible, make if/else, for loops as simple and logical efficient as possible.
 
# Handling increasing complexity over time
Handling increasing complexity needs a sound structure to begin with, a basic uniform structure is must. Thus making a newcomer or even the original developers means they can locate where files and methods are, to speed development and ensure functional logic are at expected file locations.
 
Further development must fall in line with existing structure and expectation. This familiarity helps with scaling to expectations.
 
# Error handling and logging
Error handling must be done in monitoring and logging. Monitoring again, using basic metrics should be sufficient to begin with. Is the micro service healthy? All Kubernetes clusters are required to have endpoint health/g2g to run effectively. Is monitoring the micro service responding to external requests? These should be simple to set up and should be minimal requirements.
 
Lastly logging, logging is actually quite hard, striking a balance between too little logs or too much logs are naturally at odds. Cost can also be considered as storing logging over a period of time can mount further costs. As they are needed to diagnose hard to find issues.
 
For me I personally like the new decorator in typescript, the logs which can be used when the function is executing and when it finishes, it should provide a nice baseline along to where the code has gotten and where it failed. This combined with error try/catch should be used together to pinpoint where in code it has gone wrong. This should allow the developer to reproduce the error locally. Which in turn should speed up debugging.
