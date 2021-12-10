module ObjectFile
  extend ActiveSupport::Concern

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