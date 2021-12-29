class UtilitiesController < BaseApiController
    def index
        begin
            @data = send(params[:path])
            return respond_success_with(@data)
        rescue 
            respond_not_found(nil)
        end
    end

    private

    def currencies
        JSON.parse(
            File.read(
                Rails.root.join(
                    "lib/assets/data", "currencies.json"
                )
            )
        )
    end

    def languages
        JSON.parse(
            File.read(
                Rails.root.join(
                    "lib/assets/data", "languages.json"
                )
            )
        )
    end

    def timezones
        JSON.parse(
            File.read(
                Rails.root.join(
                    "lib/assets/data", "timezones.json"
                )
            )
        )
    end
end
