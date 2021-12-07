class BaseApiController < ApplicationController
  def respond_successfull_with object
    {
      success: true,
      data: object
    }
  end
end
