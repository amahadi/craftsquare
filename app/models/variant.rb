class Variant < ApplicationRecord
    belongs_to :product
    has_many :variant_options

    accepts_nested_attributes_for :variant_options

    has_many_base64_attached :images

    acts_as_taggable_on :ingredients

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
