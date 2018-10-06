# README

This README would normally document whatever steps are necessary to get the
application up and running.

## More reading
  - use of [fetch](https://github.com/github/fetch)
  - heroku blog on [react, rails and active admin](https://blog.heroku.com/a-rock-solid-modern-web-stack)

## TODO

  - [ ] login against [devise](https://github.com/plataformatec/devise)
    following along with https://serverless-stack.com/chapters/create-a-login-page.html

  - [ ] omniauth for github and/or twitter
  - [ ] add bootstrap or [react semantic-ui](https://react.semantic-ui.com/)
  - [ ] update capyabara to from [firefix blog](https://underpantsgnome.com/2018/02/26/integration-testing-a-rails-react-app-with-rspec/) to
    [chrome](https://mikecoutermarsh.com/rails-capybara-selenium-chrome-driver-setup/)
  - [ ] sort out feature specs ReactJS Rails and capybara
    - https://pillow.codes/how-to-set-up-integration-test-for-react-app-rails-backend-917a16ac04e3
    - https://medium.com/@ethanryan/testing-your-app-in-the-browser-with-capybara-rails-backend-react-frontend-e409671c4596
  - [ ] CSRF tokens
    - https://blog.codeship.com/using-react-inside-your-rails-apps/
  - [ ] data via axios
    - https://www.sitepoint.com/react-rails-5-1/

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
  - [x] add react client
    ```
    heroku buildpacks:add heroku/nodejs --index 1
    heroku buildpacks:add heroku/ruby --index 2
    ```
    Now can
      * go to Rails game https://image-2-text.herokuapp.com/game
      * go to ReactJS https://image-2-text.herokuapp.com/
      * go to Rails ActiveAdmin https://image-2-text.herokuapp.com/admin/login

    What happens with conflict
      * ReactJS localhost:3000/game
      * ReactJS localhost:3000/game/round
      * Rails   localhost:3001/game

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
