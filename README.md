# js-practices
## how to do heroku on cloud9
https://nbanzyme.medium.com/how-to-install-heroku-on-an-aws-cloud-9-environment-5ff3d4e14c73

### hot to login heroku cloud9
heroku login -i

### steps to react.j on cloud9 
https://github.com/dowjones/react-tutorial/blob/master/AWS.Cloud9.Instructions.md

### how to add ssh key on cloud 9
https://medium.com/sonabstudios/setting-up-github-on-aws-cloud9-with-ssh-2545c4f989ea

## Checking all apps on heroku 
heroku apps 

### How to delete app on heroku 
heroku apps:destroy --app instaClone --confirm instaClone   

### Important react technology to learn
1. Gasby
2. Material UI
3. Dom manipulation using TodoList app

### the solution which I faced when pushing to heroku using feature branch
https://questions.microverse.org/t/cant-deploy-create-react-app-on-heroku-using-feature-branch/1490

### How to delete git branch 
// delete branch locally
git branch -d localBranchName

// delete branch remotely
git push origin --delete remoteBranchName

Rename the local branch by typing:

git branch -m new_name

link https://www.freecodecamp.org/news/how-to-delete-a-git-branch-both-locally-and-remotely/


The prop `value` is marked as required in `Button`, but its value is `undefined 
React
I solved this by 
Ok, I found an mistake
on your App.js
line 6 you're importing ButtonPanel from 'Button'
it should import from ButtonPanel

### how to fix eslint using cli
https://stackoverflow.com/questions/40271230/how-to-run-eslint-fix-from-npm-script
`npm run lint:fix`
`npm run lint -- --fix`

https://stackoverflow.com/questions/43031126/jsx-not-allowed-in-files-with-extension-js-with-eslint-config-airbnb

## How to update wsl to wsl2 
1. Enable virtualization 
  - I'm using lenovo win10 on startup I pressed enter then f1 to go to bios then enabled intel virtualization using BIOS
  - 
