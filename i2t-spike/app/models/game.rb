class Game < ApplicationRecord
  after_initialize :set_game_seed

  def round
    @round ||= 1
  end

  def round=(round_number)
    @round = round_number
  end

  def term
    @term = Term.all.sort_by{ rng }.first(rounds)[round - 1].term
  end

  def rounds
    [Term.all.count, 10].min # max of 10 rounds
  end

  def images
    @@game_images ||= YAML.load(File.open('config/initializers/game_images.yaml'))
    @@game_images['terms'][term] || ImageSearchService.new(term).call
  end

  private

  def rng
    Random.new(self.seed.to_i)
  end

  def set_game_seed
    self.seed = Random.new_seed.to_s
  end
end