module Api
  class RoundsController < BaseApiController
    def show
      rounds   = 3
      seed_str = params[:seed] || Random.new_seed.to_s
      round     = params[:id].to_i
      term = Term
          .all
          .sort_by{ random_number_generator(seed_str) }
          .first(rounds)[round - 1]
          .term
      images = ImageSearchService
          .new(term)
          .call
          .shuffle
          .first(9)
          .each_with_index
          .map { |image, index| { id: index, src: image } }
      render json: {
          round: round,
          seed: seed_str,
          term: term,
          images: images
      }
    end

    private

    def random_number_generator(seed_str)
      Random.new(seed_str.to_i)
    end
  end
end
