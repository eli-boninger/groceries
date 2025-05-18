class List < ApplicationRecord
  belongs_to :user_group
  has_many :list_items
end
