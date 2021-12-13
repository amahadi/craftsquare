module HomemadeClassMethods
  module Address
    extend ActiveSupport::Concern

    def current
      find_by(current: true)
    end

  end
end