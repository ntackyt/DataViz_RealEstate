<h1>Real Estate Map</h1>
Team: Naomi, Amy, Abe, Avneet

Time: Fall 2022

Website: http://homesearcher.pythonanywhere.com/

## Introduction:

empty for now

## Data Set Sources:

empty for now

## Project Installations
<i>You can use a windows or mac device for this application. </i>

**Languages and Tools:**

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [Flask](https://flask.palletsprojects.com/en/2.0.x/)


<p> <a href="https://getbootstrap.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://flask.palletsprojects.com/" target="_blank"> <img src="https://d2knvm16wkt3ia.cloudfront.net/assets/svg-icon/flask.svg" alt="flask" width="40" height="40"/> </a> <a href="https://www.python.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a></p>

(HTML5/CSS3/Bootstrap/Flask/Python)

# Installation:

Go to our GitHub page and export our project files (clone or download the zip) into a workspace folder: 

https://github.com/ntackyt/DataViz_RealEstate.git

Through terminal (or VSCode’s terminal), move into the workspace folder. From there, you can do the following steps to install the virtual environment and the rest of the dependents. From there you should be able to run the site: 

## <b>Flask and Python Installation</b>

<i>To learn more about Flask, [here](https://www.askpython.com/python-modules/flask/create-hello-world-in-flask) is a tutorial of how to setup and create a Hello World app in flask (This is not required for this project, but will help you understand flask).</i> Otherwise just ignore and follow the next few steps to install + setup for this project. 

If you're using Vscode,  please install the <i>sqlite</i> extension for better view of the database tables.

**Windows:**

1. Install python 3.6, which should come with pip. Follow the installation instructions and check if it’s correctly installed by typing: 
```
python –version 
```
2. Install and set up a virtualenv (**PLEASE DO NOT COMMIT YOUR VIRTUAL ENVIRONMENT TO GITHUB** ): 
```
python –m pip install virtualenv 
python –m venv venv 
```

3. Enter the terminal (specifically cmd instead of powershell if you're on visual studio code, click on the right side icon of vscode's terminal window to change it). Then type in:
```
.\venv\Scripts\activate
```

3. Install the extensions 
```
python -m pip install flask 
python -m pip install flask-sqlalchemy 
python -m pip install requests
python -m pip install geojson 
```

4. Once you’ve installed these dependents, create a flask command that will be used to specify how to load the application (assuming you’re using bash, otherwise check out the flask site): 
```
set FLASK_APP=app
flask run
```
(Make sure you’re within the folder that has app.py)

5. You should be able to run and open the application now. 

6. To deactivate the virtual environment, just type:
```
deactivate
```

**Mac:**

***Notice: Mac OS uses an older version of python, so you want to change it to at least python 3.6+ if you are unable to use the pip command***

1. Install Python 3.6+ which should come with pip. If you have python installed, check the version by typing:
```
python --version
```

If it lists out a python version less than 3.6+, then check out this page and follow the steps:
    https://stackoverflow.com/questions/1687357/updating-python-on-mac


2. Instal and activate virtualenv to check if you have correctly downloaded it (**PLEASE DO NOT COMMIT YOUR VIRTUAL ENVIRONMENT TO GITHUB** ): 
```
python3 -m pip install virtualenv
python3 -m venv <name of environment>
source <name of environment>/bin/activate
```

3. Once you've entered your virtualenv, do the following in the command line 

```
pip install flask
pip install flask-sqlalchemy
pip install requests
pip install geojson
```
4. Once you've installed these dependents, create a flask command that will be used to specify how to load the application <i>(assuming you're using bash, otherwise check out the [flask site](https://flask.palletsprojects.com/en/2.0.x/cli/)</i>:
```
export FLASK_APP=app
flask run
```
(Make sure you’re within the folder that has app.py)

5. You should be able to run and open the application now. If you're adjusting the css/js files, please hit <i>command + shift + r</i> to refresh cache on chrome (commands might differ for different web programs).

6. To deactivate the virtual environment, just type:
```
deactivate
```
