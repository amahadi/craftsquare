class Product < ApplicationRecord
    belongs_to :shop
    has_many :variants
    has_many :adverts

    include Rails.application.routes.url_helpers

    acts_as_taggable_on :tags, :ingredients, :product_types

    has_many_base64_attached :images

    enum status: [:draft, :active, :inactive]

    def images
        super.map do |image|
            {
                filename: image.blob.filename,
                content_type: image.blob.content_type,
                src: ActiveStorage::Blob.service.send(:path_for, image.key)
            }
        end
    end
end
