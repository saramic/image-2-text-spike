class GameController < ApplicationController
  def game
    game = Game.new
    @round = params.has_key?(:round) ? params[:round].to_i : 1
    @rounds = params.has_key?(:rounds) ? params[:rounds].to_i : game.term_count
    @seed = game.seed
  end

  def round
    @seed = params[:seed].to_i
    @round = params[:round].to_i
    @rounds = params[:rounds].to_i
    game = Game.new(seed: @seed, round: @round)
    if params[:term]
      if params[:term] == game.term
        flash.clear
        flash[:success] = "#{params[:term].inspect} is correct"
        @round = @round + 1
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
    @images = game.images
  end
end