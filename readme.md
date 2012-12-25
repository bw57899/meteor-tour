# Meteor Framework - 25 Dec 2012
This file create from tour video of meteor project from http://www.meteor.com/screencast

## step 1: initial stage -- create project and git store
* get meteor from http://win.meteor.com
* `meteor create tour`
* `cd tour` 
* `git init`
> other useful command = git help, git status  
* `git add --all` to add all file in root folder, not include .meteor files
`git commit --all --message "step 1: initial stage"`

## step 2: live reload -- show that after HTML edit browser will auto reload
* `meteor run`
* open browse to localhost:3000
* `git add tour.html` --> after edit html browser will live reload
* `git commit --message "live reload"`
> `git log` to see history of master branch, use **q** to exit

## step 3: template and mongo client API
this step show that you can use mongo api from client side (web browser)!!
also html file show you a bit about how to use template

## step 4: Color on click
this step will implement color change when item was click.
It's show how to use Session and click event

## step 5: Exchange info
this step implement like button. Which when clicked will update like count on all browser.  
It's show you one more time about template and event implementation

## step 6: Mongo DB API at client side
this step has no code change. but one more time show you via google chrome console that you can do lots of db api from client side. eg.  
* Colors.**find**({likes: {$gt: 2}}).fetch()  
* Colors.**update**({likes: {$gt: 2}}, {$inc: {like: 10}}, {multi: true})  
* Color.**remove**({likes: 2})  

## step 7: Hot Code Push
show you that when you modify js file on server side. result immediately reflect to all open client --> user selection on color still maintain
 this is like you "push" the update software

