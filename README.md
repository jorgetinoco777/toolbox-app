
## Project name: toolbox-app

### Toolbox TV - Code Challenge

**Important:** This project works correctly with version `16.3.0`

***

##### DEV INFO
**Name:** Jorge Tinoco

**Email:** jorgeluis238@hotmail.com

**Phone:** +593 9 6764 7864


#
***

##### RUN PROJECT

Go to the directory where you clone the project.

1. Install dependencies

    <code style="font-size: 12px">`$ npm install`</code>

2. Create the `.env` file with the following variables

    >PORT=80

    >API_TOOLBOX="http://localhost:3000"


3. Run project: node-api-toolbox

    <code style="font-size: 12px">`$ npm start`</code>

4. Check the url and port it shows in the terminal.

    ![alt text](</documentation/image-3.png>)

5. Open a browser and write the url with the port that was assigned.

    ![alt text](/documentation/image-1.png)



***

##### RUN UNIT TEST

Go to the directory where you clone the project.

1. Install dependencies

    <code style="font-size: 12px">`$ npm install`</code>

2. Create the .env file with the following variables

    >PORT=80

    >API_TOOLBOX="http://localhost:3000"

3. Execute unit test

    <code style="font-size: 12px">`$ npm test`</code>

4. See the test results in the terminal

    ![alt text](/documentation/image-2.png)

#
***

#### RUN PROJECT - Docker

Go to the directory where you clone the project.

1. Install dependencies

    <code style="font-size: 12px">$ npm install</code>

2. Create the .env file with the following variables

    >PORT=80

    >API_TOOLBOX="http://localhost:3000"

3. Create docker image

    <code style="font-size: 12px">`$ docker build . -t react-app-toolbox:latest`</code>

4. Run docker image 

    <code style="font-size: 12px">`$ docker run --rm -d -p 80:80/tcp react-app-toolbox:latest`</code>

5. Open the following url in the browser

    <code>`http://localhost`</code>

#
***


#### Important!

<span style="font-size: 14px"><b>Message: </b>If you've made it this far, I hope everything worked well. Thank you, I had fun doing this challenge.</span>