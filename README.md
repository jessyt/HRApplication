# HRApplication

Here is the link to the application! I have noticed that it doesn't grab the collection and throws a red message in logs because of in-activity? https://www.reddit.com/r/Heroku/comments/oqlsfp/getting_stopping_all_processes_with_sigterm/ was a followup but hopefully it doesn't happen!

https://jessy-hr-application.herokuapp.com/

To run the application:
(NOTE) Check out the "Python Test Data" below - this will populate the application

1. On the root directory, run "npm install" in a terminal
2. Then in the terminal, run "npm start". This should start the backend.
3. Next, navigate to 'HRApplication/frontend'. Run "npm start" here and that should kick off the front end. 


# HRApplication postman collection
I just included this so that you can test out the 4 endpoints that are in the program. To test these, import the collection to postman and run at the root directory of this folder "npm start". There are a small bit of functional tests on the collections.

## Python Test Data
I would suggest running this before running the app so it has some data in the collection
1. Run pip install pymongo
2. Run pip install "pymongo[srv]"
3. Run python .\testData.py
