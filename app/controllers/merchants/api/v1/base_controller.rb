class Merchants::Api::V1::BaseController < BaseApiController
  before_action :authenticate_merchant!

  def image_params_from(images)
    return [] unless images.present?
    images&.map do |img|
        if img[:data].present?
            {
                data: img[:data],
                filename: img[:filename],
                content_type: img[:content_type]
            }
        else
            # TODO: Need to define proper way of doing that
            data = Base64.encode64(File.read(img[:src])) # for opening file from local storage
            # data = Base64.encode64(File.read(open(img[:src]))) # for opening file from aws or any external source
            {
                data: "data:#{img[:content_type]};base64,#{data}",
                filename: img[:filename],
                content_type: img[:content_type]
            }
        end
    end
  end

end
