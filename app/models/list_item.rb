class ListItem < ApplicationRecord
  has_many :lists
  has_many :lists, through: :list_entries
end
