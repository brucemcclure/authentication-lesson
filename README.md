# Authentication lesson

If you are reading this you have successfully downloaded the lesson repo for authentication. **Go You**.

The way this lesson is broken down uses the power of GIT. That is to say that we will be using branches to navigate from step to step.


#### How to navigate 
To See what branches are avalible type the command `git branch -a`.  You will see all the remote branches avalible in red, and your local *master* branch in white.The remote branches will look something like this `remotes/origin/step-1_packageJson`.  If you would like to move on to the first step you could type the command `git checkout step-1_packageJson` or the second step `git checkout step-2_express-boilerplate`. 

### Step 1 
###### package.json file

Install dependencies
- [x] celebrate - ( wraps joi validation )
- [x] dotenv - ( provides environment variables )
- [x] express - ( the web server )
- [x] express-handlebars - ( Js templating )
- [x] mongoose - ( odm for mongo )
- [x] morgan - ( used for http logging )

Install dev-dependencies
- [x] forever - ( restarts the server upon crashing )
- [x] jest - ( Automated testing )
- [x] nodemon - ( watches code for updates on save )

### Step 2 
##### Basic express app

Write scrips we will need later on in development

```
  "scripts": {
    "test": "jest --coverage",
    "seed": "node database/seeds",
    "dev-server": "nodemon index.js",
    "server": "forever -c \"nodemon --exitcrash -L\" index.js"
  }
```

Set up the file structure for the basic web server. The basic files in this step are set out for a readable and flexible express app. Each line is commented in case there is something you are unsure of. 

