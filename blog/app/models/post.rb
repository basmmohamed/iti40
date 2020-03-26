class Post < ApplicationRecord
    validates :title, :content, presence: true
    validates :title, uniqueness: true
    validates :title, length: { maximum: 50 }
    # belongs_to :user
end
