# Images 2 text

An oldy but a goodie, choose the text that was used to generate the images
shown. In the past there was a version of this called "Guess the Google"

On heroku [https://image-2-text.herokuapp.com/](https://image-2-text.herokuapp.com/)

## i2t BDD process

### 1 rails new

```
rails new i2t-bdd --database=postgresql --skip-test --no-rdoc --no-ri
```

### 2 TDD and BDD framework

```
vi Gemfile
  group :test do
    # TDD
    gem "rspec-rails"
    # BDD
    gem "rspec-example_steps"
    gem "rspec-wait"

    gem "capybara"
  end

rails generate rspec:install

mkdir -p spec/features/flows
vi spec/features/flows/play_a_game_of_i2t_spec.rb

rails db:create db:migrate

rspec
```

