class Merchants::Api::V1::BaseController < BaseApiController
  before_action :authenticate_merchant!
end
