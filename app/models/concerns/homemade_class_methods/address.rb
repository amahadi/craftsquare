module HomemadeClassMethods
  module Address
    extend ActiveSupport::Concern

    class_methods do

      def current
        find_by(current: true)
      end

    end

  end
end