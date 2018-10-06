module Api
  class GamesController < BaseApiController
    def index
      render json: Game.all.limit(10)
    end

    def show
      render json: Game.find(params[:id])
    end
  end
end
