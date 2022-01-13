module ErrorHandler
  extend ActiveSupport::Concern

  def rescue_not_found_error(exception)
    log_warnings(exception)
    respond_not_found(exception)
  end

  def rescue_validation_error(exception)
    log_errors(exception)
    respond_validation_error(exception)
  end

  def rescue_internal_server_error(exception)
    log_fatals(exception)
    respond_internal_server_error(exception)
  end
end