class Merchants::BaseController < ApplicationController

    include DeviseTokenAuth::Concerns::SetUserByToken
end