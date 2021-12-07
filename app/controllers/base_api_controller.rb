class BaseApiController < ApplicationController
  include Pagy::Backend

  def respond_success_with object
    if object.is_a?(ActiveRecord::Relation)
      pagination, records = pagy(object)
      return {
        success: true,
        data: records,
        pagination: pagination
      }
    else
      return {
        success: true,
        data: object
      }
    end
  end

end
