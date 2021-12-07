class BaseApiController < ApplicationController
  include Pagy::Backend

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
