class WelcomeController < ApplicationController
  def index
    @seed = params.has_key?(:seed) ? params[:seed].to_i : Random.new_seed
    game_images = YAML.load(File.open('config/initializers/game_images.yaml'))
    rng = Random.new(@seed)
    @term = game_images['terms'].keys.sample(1, random: rng).first
    if params[:term] == @term
      flash.clear
      flash[:success] = "#{params[:term].inspect} is correct"
      @seed = Random.new_seed
      @term = game_images['terms'].keys.sample(1, random: rng).first
    else
      flash.clear
      flash[:warn] = "#{params[:term].inspect} is NOT correct try again"
    end
    @images = game_images['terms'][@term]
  end
end
