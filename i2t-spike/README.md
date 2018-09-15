# README

This README would normally document whatever steps are necessary to get the
application up and running.

## TODO

  - [x] static html cut 1
  - [x] deploy to heroku
    attempting to deploy using git subtree split?
    ```
    git subtree push --prefix i2t-spike heroku master

    # or
    
    git push heroku `git subtree split --prefix i2t-spike master`:master --force    
    ```
  - [x] make somewhat playable
  - [x] push static data back to a model
  - [x] admin to manage terms and games
    ```bash
    heroku addons:create heroku-postgresql
    heroku run rake db:migrate
    heroku run rails console

    AdminUser.create!(email: 'admin@example.com', password: 'password...', password_confirmation: 'password...')
    ```
  - [ ] login per user
  - [ ] add a frontend framework (ReactJS) or 2 (Ember)
  - [ ] 2 users at a time
  - [ ] email password
  - [ ] style

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
