module CookieTokenHandler
  extend ActiveSupport::Concern

  private

  def sign_in_action?
      params[:controller] == "devise_token_auth/sessions" &&
      params[:action] == "create"
  end

  def set_token_cookie
      cookies.signed[:__hm_tokens] = {
          value: JSON.generate({
            access_token: response.headers["access-token"],
            client: response.headers["client"],
            uid: response.headers["uid"]
          }),
          expires: Time.at(response.headers["expiry"].to_i),
          http_only: true
      }
  end

  def unpack_cookie
      if cookies.signed[:__hm_tokens].present?
        JSON.parse(cookies.signed[:__hm_tokens])&.deep_symbolize_keys
      else
        nil
      end
  end

  def set_headers_from_cookie
      token_values = unpack_cookie
      if token_values.present?
        request.headers["access-token"] = token_values[:access_token]
        request.headers["uid"] = token_values[:uid]
        request.headers["client"] = token_values[:client]
      end
  end

end