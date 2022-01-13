module LogHandler
  extend ActiveSupport::Concern

  def backtrace(exception)
    if exception&.backtrace.present? && exception&.backtrace[0].present?
      return exception&.backtrace[0]
    else
      return nil
    end
  end

  def log_warnings(exception)
    logger.warn(
      "PATH=#{params[:controller]} \
      ACTION=#{params[:action]} \
      EXCEPTION=#{exception} \
      BACKTRACE=#{backtrace(exception).present? ? backtrace(exception) : 'N/A'}"
    )
  end

  def log_errors(exception)
    logger.error(
      "PATH=#{params[:controller]} \
      ACTION=#{params[:action]} \
      EXCEPTION=#{exception} \
      BACKTRACE=#{backtrace(exception).present? ? backtrace(exception) : 'N/A'}"
    )
  end

  def log_fatals(exception)
    logger.fatal(
      "PATH=#{params[:controller]} \
      ACTION=#{params[:action]} \
      EXCEPTION=#{exception} \
      BACKTRACE=#{backtrace(exception).present? ? backtrace(exception) : 'N/A'}"
    )
  end
end