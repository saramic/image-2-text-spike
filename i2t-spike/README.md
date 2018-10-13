# README

This README would normally document whatever steps are necessary to get the
application up and running.

## More reading
  - use of [fetch](https://github.com/github/fetch)
  - heroku blog on [react, rails and active admin](https://blog.heroku.com/a-rock-solid-modern-web-stack)


## Login

- generally following along with
  https://serverless-stack.com/chapters/load-the-state-from-the-session.html

- Setup Devise with JWT
  https://medium.com/@mazik.wyry/rails-5-api-jwt-setup-in-minutes-using-devise-71670fd4ed03
  - setup JWT revocation
    http://waiting-for-dev.github.io/blog/2017/01/23/stand_up_for_jwt_revocation/
  - another perspective and what to do on the front end?
    https://stackoverflow.com/questions/50480626/how-to-use-devise-jwt-with-devise-for-signin-signup-and-signout-in-rails-api
  - core documentation on devise-jwt
    https://github.com/waiting-for-dev/devise-jwt

- another article on serverless react app
  https://medium.com/@jameshamann/serverless-react-web-app-with-aws-amplify-part-three-d3f1a30176e8

- CSRF protection for classical rails apps only
  https://stackoverflow.com/questions/35181340/rails-cant-verify-csrf-token-authenticity-when-making-a-post-request
  - attempt to make it work with SPA
    https://github.com/rails/rails/issues/32785
    https://stackoverflow.com/questions/50122298/rails-csrf-protection-with-single-page-application-react-angular-ember

- what about custom devise strategy?
  https://medium.com/@lukerollans/implementing-jwt-authentication-as-a-custom-devise-strategy-54948bddb134

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
