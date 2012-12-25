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

## step 8: reverse function call
instead of server emit data to template.  
You can do by specify parameter in template, this case is {{how_many}} and let's server side to execute the code once this {{how_many}} value changes

## step 9: deploy to meteor.com
this can do by single "deploy" command  
`meteor deploy gt-colors.meteor.com`
> noted: at the time I write, meteor 0.5.2 have rpc_callback bug so cannot > upload from my Windows system. It's will fix on version 0.5.3

## step 10: latency compensation
no code for this step. Just show you how application work in real internet life, which database is too slow to wait. What meteor do is update user interface in advance to prevent sluggishness (you should watch screencast)

## step 11: self hosted deployment
this can be done by "bundle" command  
`meteor bundle gt-colors.tgz`  
After you've got tgz file then extract and setup per README.md state.

unfortunately, as of Dec 25, 2012 you'll fail "Bundling is not yet supported on Windows. This requires reimplementing the (un)archiving of the bundle..." So here's workaround

* copy folder "\.meteor\local\build_tar\bundle\" underneath your project to whatever directory you want
* npm install fibers
* set environment variable by type  
'set MONGO_URL=mongodb://127.0.0.1:27017/test'  
'set ROOT_URL=http://example.com'  
'set MAIL_URL=smtp://test:hana@mailhost:25/'  
* if you have appserv you'll got port 80 collision, so need to change port on server.js to other port
'var port = process.env.PORT ? parseInt(process.env.PORT) : 80;'
node main.js

## step extra: push this tutorial to github
* create new repo at https://github.com/new
* add github server by type 'git remote add origin https://github.com/gampolt/meteor-tour.git'
* upload to server 'git push -u origin master'