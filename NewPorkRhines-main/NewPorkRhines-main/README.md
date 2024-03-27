# NewPorkRhines

## Setup

### Setup # 1. Github Setup Instructions:

#### Setup # 1.a. If you don't have a SSH key set up with github and vscode

- ssh-keygen command

  - '''ssh-keygen''' in a command prompt
  - default location, no password so vscode can use it
  - Open C:/Users/username/.ssh/id_rsa.pub (THE .pub IS VERY IMPORTANT)
  - Add it to your github ssh keys (in settings) by adding a new key and copy and pasting

- install git in windows

  - https://git-scm.com/download/win
  - The following lines each align with one step in the process
  - Default components
  - Editor shouldn't matter much (I choose vim since I use it, you'll probably want notepad++ if you have it installed, or notepad)
  - Initial branch shouldn't matter
  - Git from command line and also 3rd party software
  - Bundled is fine
  - OpenSSL library
  - Take your pick for commit style
  - Windows default
  - If you don't know what it means by git pull, choose default you can change it later
  - git credential manager
  - keep it default
  - keep it default
  - Choose install

- In a command prompt
  - run '''git config --global user.name "Carter Pohl"''' but replace your name
  - run '''git config --global user.email "carterpohl7@gmail.com"''' but replace your email

#### Setup # 1.b. If you don't have a git folder set up

- create a folder '''C:/Users/username/git'''

#### Setup # 1.c. Cloning the repo (get Carter to add you to github first)

- open a new command prompt (a one you opened before installing git won't work)

  - run '''cd ./git'''
  - run '''git clone git@github.com:CarterPohl/NewPorkRhines.git'''

### Setup # 2. Django Setup (backend)

- install python3 and pip if you don't have them yet (I have them installed as python and pip, if you have them installed as python3 and pip3 you need to modify the commands you use, if you're installing them I recommend you call it python3 and pip3 if the install gives you the option)
- '''pip install pipenv'''
  - if you get a path warning (in yellow text), as Carter for help
- in an admin command prompt
  - Navigate to '''cd C:/Users/username/git/NewPorkRhines'''
  - '''pipenv shell'''
  - '''pipenv install django'''
  - Navigate to '''cd C:/Users/username/git/NewPorkRhines/Djangobackend'''
  - '''python manage.py migrate'''
  - '''python manage.py runserver''' to start the django server
- open '''localhost:8000''' in a web browser

### Setup # 3. React Setup (frontend)

- This part is still a work in progress

- Download the setup wizard

  - https://nodejs.org/en/download/
  - The following lines each align with one step in the process
  - Accept the license\
  - install location
  - default setup
  - Automatically install necessary tools
  - Install
  - Let the addition tools script run

- in a command prompt

  - Navigate to '''cd C:/Users/username/git/NewPorkRhines/reactfrontend'''
  - '''npm install'''
  - '''npm start'''

- open '''localhost:3000''' in a web browser

### Setup # 4 Starting Django

- in an admin command prompt
  - Navigate to '''cd C:/Users/username/git/NewPorkRhines/Djangobackend'''
  - '''pipenv shell''' (cd back to Djangobackend if it moved you to NewPorkRhines)
  - '''python manage.py runserver''' to start the django server
  - keep that command prompt open

### Setup # 5 Starting React

- in an command prompt
  - Navigate to '''cd C:/Users/username/git/NewPorkRhines/reactfrontend'''
  - if anyone has added packages since you last ran npm install, then run '''npm install'''
  - '''npm start'''
  - keep the command prompt open

## Git

- NEVER MAKE CHANGES DIRECTLY ON MAIN**!!! Create a branch, make your changes there, and then make a pull request before merging it into main! **The only exceptions should be if it's very minor and you know what you're doing.

- Having multiple people working on a branch at the same time is a pain in the butt. Consider using the Vscode Live Share Extension (so you can see each other's changes in real time).

- If you're done working for the session, commit and push your changes so others can see your progress and/or can pick up where you left off.

[A good basic explanation of git](https://youtu.be/3a2x1iJFJWc)

### VSCODE shortcuts (ie how to do things graphically instead of from a command line/terminal)

Add: On the Source Control window hit the plus button on a file name under the Changes section (pro tip you can click the name of a file here to see the all the things you've changed)
Commit: (Add your changes first) On the Source Control window, type a message in the textbox at the top and hit Ctrl + Enter
Fetch: On the Source Control window, hit the three dots and hit fetch.
Pull: (You probably want to have Autofetch turned on in settings or Fetch before you pull) On the Source Control window, hit the three dots and hit pull.
Push: (Commit your changes first) On the Source Control window, hit the three dots and hit push.
Create a branch: In the bottom right corner, hit the current branch name (just to the right of the tiny source control icon), and then hit Create New Branch From. Create your branch from origin/main unless you have a reason not to.
Merge a branch: Open github and create a pull request for others to review. Once someone else has looked at it (preferably someone that didn't write any of the changes), merge it.
