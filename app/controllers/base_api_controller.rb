class BaseApiController < ApplicationController

  include Pagy::Backend
  include ErrorHandler

  rescue_from ActiveRecord::RecordNotFound, with: :respond_not_found
  rescue_from ActiveModel::ValidationError, with: :respond_validation_error

  def respond_success_with(object, includes = [], methods = [])
    if object.is_a?(ActiveRecord::Relation)
      pagination, records = pagy(object)
      return render json: {
        success: true,
        data: JSON.parse(records.to_json(
          include: includes,
          methods: methods
        )),
        pagination: pagination
      }
    else
      return render json: {
        success: true,
        data: JSON.parse(object.to_json(
          include: includes,
          methods: methods
        ))
      }
    end
  end

end
