class GameController < ApplicationController
  before_action :read_games

  def game
    @round = params.has_key?(:round) ? params[:round].to_i : 1
    @rounds = params.has_key?(:rounds) ? params[:rounds].to_i : @@game_images['terms'].keys.count
    @seed = Random.new_seed
  end

  def round
    @seed = params[:seed].to_i
    @round = params[:round].to_i
    @rounds = params[:rounds].to_i
    rng = Random.new(@seed)
    @term = @@game_images['terms'].keys.sort_by{ rng }.first(@rounds)[@round - 1]
    if params[:term]
      if params[:term] == @term
        flash.clear
        flash[:success] = "#{params[:term].inspect} is correct"
        @round = @round + 1
        @term = @@game_images['terms'].keys.sample(1, random: rng).first
        if @round > @rounds
          redirect_to win_path
        else
          redirect_to game_path(round: @round, rounds: @rounds)
        end
      else
        flash.clear
        flash[:warn] = "#{params[:term].inspect} is NOT correct try again"
      end
    end
    @images = @@game_images['terms'][@term]
  end

  private

  def read_games
    @@game_images ||= YAML.load(File.open('config/initializers/game_images.yaml'))
  end
end