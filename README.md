Portland Dog Parks
===============

by <a href="http://duanemoody.io" target="_blank">Duane M. Moody</a>.

Portland Dog Parks provides a simple list of all the dog parks in the Portland area and provides a little detail on each park.  This is a feature that is coming soon to Portland Great Danes.

Installation
------------

Install Portland Dog Parks by first cloning the repository.  
```
$ git clone http://github.com/dmmoody/portland_dog_parks.git
```

Install all of the required gems:
```
$ bundle install
```

Database Setup
--------------

Run the following in the command line:
```
$ rake db:create
$ rake db:migrate
$ rake db:test:prepare
```

Running the app
---------------

To run the app, ```\cd``` into the root folder for the app and start the webserver:
```
$ ruby app.rb
```

In your web browser, go to http://localhost:4567

Contribute
----------

- Issue Tracker: https://github.com/dmmoody/portland_dog_parks/issues
- Source Code: https://github.com/dmmoody/portland_dog_parks

Support
-------

If you are having issues, please let me know at: dmmoody@gmail.com

Bug reports
-----------

If you discover any bugs, feel free to create an issue on GitHub. Please add as much information as possible to help me fixing the possible bug. I also encourage you to help even more by forking and sending me a pull request.

https://github.com/dmmoody/portland_dog_parks/issues

License
-------

MIT License. Copyright 2014 Duane M. Moody | <a href="http://moodyco.de">MoodyCode</a>
