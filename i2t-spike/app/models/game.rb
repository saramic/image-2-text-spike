class Game
  include ActiveModel::Model

  attr_reader :seed, :round, :term

  def initialize(seed: Random.new_seed, round: 1)
    @seed = seed
    @round = round
    @@game_images ||= YAML.load(File.open('config/initializers/game_images.yaml'))
    rng = Random.new(@seed)
    @term = @@game_images['terms'].keys.sort_by{ rng }.first(term_count)[@round - 1]
  end

  def term_count
    [@@game_images['terms'].keys.count, 10].min # max of 10 rounds
  end

  def images
    @@game_images['terms'][@term]
  end
end