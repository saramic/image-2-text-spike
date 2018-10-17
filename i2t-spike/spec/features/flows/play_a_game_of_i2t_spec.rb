require 'rails_helper'

feature 'Michael plays a game of images 2 text', js: true do
  scenario 'Michael plays a perfect game' do
    When 'Michael starts a new game' do
      visit root_path
      focus_on(:welcome).new_game
    end

    Then 'Michael starts Round 1' do
      wait_for { focus_on(:round).number }.to eq '1'
      pending 'no images displayed as yet'
      wait(0.5).for { focus_on(:round).images.count }.to eq 9
    end
  end
end
