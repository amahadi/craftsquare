# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

merchant = Merchant.find_by(email: "seededmerchant@example.com")

unless merchant.present?
    merchant = Merchant.create(
        email: "seededmerchant@example.com",
        password: "password",
        password_confirmation: "password"
    )
end

customer = Customer.find_by(email: "seededcustomer@example.com")

unless customer.present?
    customer = Customer.create(
        email: "seededcustomer@example.com",
        password: "password",
        password_confirmation: "password",
        first_name: "Example",
        last_name: "Customer"
    )
end
