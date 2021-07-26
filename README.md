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


## Command to see number of commits within a specific day
git rev-list --count HEAD --since="Jan 29 2021" --before="June 29 2021"

## no of commits by username
git shortlog -s -n

$ git shortlog -s -n --after="2021-07-03 00:00" --before="2021-07-03 23:59"

git rev-list --count HEAD --after="2021-07-03 00:00" --before="2021-07-03 23:59"

### How to install postgresql on wls
https://www.youtube.com/watch?v=LsPBp3x7Nsw&t=23s 

I have also got this error:

`sudo apt-get update `
`E: Type 'mongodb-org/4.2' is not known on line 2 in source list /etc/apt/sources.list.d/mongodb-org-4.2.list
E: The list of sources could not be read.
I used following command -`

`ls /etc/apt/sources.list.d/` you can see your all .list file like ls /etc/apt/sources.list.d/getdeb.list openjdk-r-ppa-trusty.list mongodb-org-4.2.list pcf-miro-releases-trusty.list nginx.list webupd8team-java-trusty.list
choose one of them have problem and remove using following command 2. `sudo rm -r /etc/apt/sources.list.d/mongodb-org-4.2.list`

