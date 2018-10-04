require 'rails_helper'

feature 'Michael plays a game of images 2 text' do
  scenario 'Michael plays a perfect game' do
    When 'Michael starts a new game' do
      visit root_path
      pending 'need a way to start the game'
      focus_on(:welcome).start_new_game
    end
  end
end
