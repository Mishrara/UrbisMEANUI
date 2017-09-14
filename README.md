"# UrbisMEANUI" 

echo "# test" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/thakrass/test.git
git push -u origin master

to create new branch 
git checkout -b UrbisDev

///////// comments for using git////////////
to push my changed to my branch
  -> git status //to check changes/files changed
  -> git add . //all the chnages or git add filename1,filename2   //to add individual files
  -> git commit -m "Your comment"  //now the changes are committed to your local branch
  ->git push --all
  
 to create request to merge the changes to master(origin)
   ->go to git site and create a pull request 
 
 to merges the changes from master to your branch
 -> git checkout master //switch to master branch
 -> git fetch  // to get the changes to your local repository
 -> git checkout yourbranch name // switch to your branch
 -> git pull
 -> git merge master // to get the changes in your branch ready for commit
 -> git push origin yourbranch name // pulled changes will get reflected in your branch
 
 ///learning 

