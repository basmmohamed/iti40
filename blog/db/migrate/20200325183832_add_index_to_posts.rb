class AddIndexToPosts < ActiveRecord::Migration[6.0]
  def change
    add_column :posts, :title, :string
    add_index :posts, :title, unique: true
  end
end
