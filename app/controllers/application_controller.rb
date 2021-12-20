class ApplicationController < ActionController::Base

    before_action :set_headers_from_cookie
    after_action :set_token_cookie, if: :sign_in_action?

    include CookieTokenHandler
    include DeviseTokenAuth::Concerns::SetUserByToken
    skip_before_action :verify_authenticity_token

    # private

    # def switch_locale(&action)
    #     locale = params[:locale] || I18n.default_locale
    #     I18n.with_locale(locale, &action)
    # end
end
