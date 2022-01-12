class BaseApiController < ApplicationController

  include DeviseTokenAuth::Concerns::SetUserByToken
  include Pagy::Backend
  include LogHandler
  include ResponseHandler
  include ErrorHandler

  rescue_from ActiveRecord::RecordNotFound, with: :rescue_not_found_error
  rescue_from ActiveModel::ValidationError, with: :rescue_validation_error

end
