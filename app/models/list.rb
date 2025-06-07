class List < ApplicationRecord
  belongs_to :user_group
  has_many :list_entries
  has_many :list_items, through: :list_entries
end
