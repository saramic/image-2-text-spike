class GameController < ApplicationController
  def game
    if params.has_key?(:id)
      @game = Game.find(params[:id])
    else
      @game = Game.new
      @game.save
    end
    @game.round = params[:round].to_i if params.has_key?(:round)
  end

  def round
    @game = Game.find(params[:id])
    @game.round = params[:round].to_i if params.has_key?(:round)
    if params[:term]
      if params[:term] == @game.term
        flash.clear
        flash[:success] = "#{params[:term].inspect} is correct"
        if @game.round >= @game.rounds
          redirect_to win_path
        else
          redirect_to game_path(@game.id, round: @game.round + 1)
        end
      else
        flash.clear
        flash[:warn] = "#{params[:term].inspect} is NOT correct try again"
      end
    end
    @images = @game.images
  end
end