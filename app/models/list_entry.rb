class ListEntry < ApplicationRecord
  belongs_to :list
  belongs_to :list_item
end
