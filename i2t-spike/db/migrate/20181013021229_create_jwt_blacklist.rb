class CreateJwtBlacklist < ActiveRecord::Migration[5.2]
  def change
    create_table :jwt_blacklist, id: :uuid do |t|
      t.string :jti, null: false
    end
    add_index :jwt_blacklist, :jti
  end
end
