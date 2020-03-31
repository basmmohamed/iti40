class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :title,null:false, limit: 50
      t.string :content
      t.timestamps
    end
  end
end