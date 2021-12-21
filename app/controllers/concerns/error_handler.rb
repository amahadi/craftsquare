module ErrorHandler
  extend ActiveSupport::Concern

  def respond_not_found(exception)
    log_errors(exception)
    return render status: 404, json: {
      success: false,
      message: 'Not found'
    }
  end

  def respond_validation_error(exception)
    log_errors(exception)
    return render status: 422, json: {
      success: false,
      message: exception
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