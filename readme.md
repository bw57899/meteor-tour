# Meteor Framework
This file create from tour video of meteor project from http://www.meteor.com/screencast
The project is use for demo ability of meteor framework by create software that display color name and let people to like it

## step 1: initial stage -- create project and git store
* `curl https://install.meteor.com/ | sh`
* `meteor create tour`
* `git clone https://github.com/bw57899/meteor-tour`
* `cd tour` 
* `cp ../meteor-tour/* .`

## step 2: live reload -- show that after HTML edit browser will auto reload
* `meteor`
* open browse to localhost:3000

## step 3: Mongo DB API at client side
Show you via google chrome developer javascript console that you can do lots of db api from client side. eg.  
* Colors.**insert**({name: "Red"})             		# insert a new line with red color
* Colors.**find**({likes: {$gt: 2}}).fetch()  		# show the color(s) with clicks more than 2 times
* Colors.**update**({likes: {$gt: 2}}, {$inc: {like: 10}}, {multi: true})  # no permitted, can't run it from client site.
* Color.**remove**({likes: 2})  			# no permitted, can't run it from client site.

## step 4: Mongo DB update at server side
    run another console, cd to tour folder
    meteor mongo
You will see the mongo shell
    $ meteor mongo
    MongoDB shell version: 2.4.9
`connecting to: 127.0.0.1:3001/meteor`
`> show dbs`
`local   (empty)`
`meteor  0.0625GB`
`> use meteor`
`switched to db meteor`
`> show collections`
`colors`
`system.indexes`
`> db.colors.find()`
`{ "_id" : "TfyYPxpmSePL8GuKC", "likes" : 12, "name" : "blue" }`
`{ "_id" : "4drhYwn65EHKnMJ94", "likes" : 5, "name" : "red" }`


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

## step extra2: let's git remember your credential
your.gitconfig setup your configuration about password
[user]
	email = xxxxx@xmail.com
	name = xxxxx
[credential]
	helper = cache --timeout=3600

you should downoad git-credential-winstore also to resolve problem in windows
look at [here](http://stackoverflow.com/questions/11693074/git-credential-cache-is-not-a-git-command) for more detail

## step extra3: how to download your project back to PC and run
* go to any folder
* `git clone https://github.com/gampolt/meteor-tour.git`
* `cd meteor-tour`
* `meteor run`
* open browser at http://localhost:3000

Good luck for your meteor journey :)


