class WelcomeController < ApplicationController
  def index
    game_images = YAML.load(File.open('config/initializers/game_images.yaml'))
    @term = game_images['terms'].keys.sample
    @images = game_images['terms'][@term]
  end
end
