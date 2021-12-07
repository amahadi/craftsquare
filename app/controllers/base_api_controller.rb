class BaseApiController < ApplicationController
  def respond_success_with object
    {
      success: true,
      data: object
    }
  end
end
