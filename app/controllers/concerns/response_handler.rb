module ResponseHandler
  extend ActiveSupport::Concern

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

  def respond_not_found(exception)
    return render status: 404, json: {
      success: false,
      errors: {
        message: 'Not found',
        detail: exception
      }
    }
  end

  def respond_validation_error(exception)
    return render status: 422, json: {
      success: false,
      errors: {
        message: 'Validation error',
        detail: exception
      }
    }
  end
end