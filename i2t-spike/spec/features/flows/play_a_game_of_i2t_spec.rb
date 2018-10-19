require 'rails_helper'

feature 'Michael plays a game of images 2 text', js: true do
  scenario 'Michael plays a perfect game' do
    When 'Michael starts a new game' do
      visit root_path
      focus_on(:welcome).new_game
    end

    Then 'Michael starts Round 1' do
      wait_for { focus_on(:round).number }.to eq '1'
      wait_for { focus_on(:round).images.count }.to eq 9
      wait_for { focus_on(:round).status }.to eq 'Playing ...'
      wait_for { focus_on(:round).guess_box_enabled? }.to be_truthy
    end

    When 'Michael enters the winning term "beaver"' do
      focus_on(:round).enter_guess('beaver')
    end

    Then 'the round is completed' do
      wait_for { focus_on(:round).status }.to eq 'WINNER'
      wait_for { focus_on(:round).guess_box_disabled? }.to be_truthy
      pending 'need a timer for the score'
      wait(0.5).for { focus_on(:round).score }.to eq '1 second'
    end
  end
end
