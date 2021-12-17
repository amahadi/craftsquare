class BaseApiController < ApplicationController

  include Pagy::Backend

  rescue_from ActiveRecord::RecordNotFound, with: :respond_not_found

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
    log_errors(exception)
    return render status: 404, json: {
      success: false,
      message: 'Not found'
    }
  end

  def log_errors(exception)
    if exception&.backtrace.present? && exception&.backtrace[0].present?
      backtrace = exception&.backtrace[0]
    else
      backtrace = nil
    end
    Logger.new(Rails.root.join("log/", "#{Rails.env}.log")).error(
      "PATH=#{params[:controller]} \
      ACTION=#{params[:action]} \
      EXCEPTION=#{exception} \
      BACKTRACE=#{backtrace.present? ? backtrace : 'N/A'}"
    )
  end



end
