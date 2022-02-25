require 'rails_helper'

RSpec.describe Address, type: :model do

  let(:customer) {
    Customer.create(
      email: "customer_for_address_test@example.com",
      password: "password",
      password_confirmation: "password",
      first_name: "Address",
      last_name: "Test"
    )
  }

  it "raises error with proper message when street is not present" do
    address = customer.addresses.new(city: 'Victoria', province: "British Columbia", postal_code: 'V2W 3L3', country: 'Canada')
    expect(address).not_to be_valid
    expect(address.errors.messages[:street]).to eq [I18n.t('errors.model.address.validation.presence.street')]
  end

  it "raises error with proper message when city is not present" do
    address = customer.addresses.new(street: '1234 street', province: "British Columbia", postal_code: 'V2W 3L3', country: 'Canada')
    expect(address).not_to be_valid
    expect(address.errors.messages[:city]).to eq [I18n.t('errors.model.address.validation.presence.city')]
  end

  it "raises error with proper message when province is not present" do
    address = customer.addresses.new(street: '1234 street', city: "Victoria", postal_code: 'V2W 3L3', country: 'Canada')
    expect(address).not_to be_valid
    expect(address.errors.messages[:province]).to eq [I18n.t('errors.model.address.validation.presence.province')]
  end

  it "raises error with proper message when postal code is not present" do
    address = customer.addresses.new(street: '1234 street', province: "British Columbia", city: "Victoria", country: 'Canada')
    expect(address).not_to be_valid
    expect(address.errors.messages[:postal_code]).to eq [I18n.t('errors.model.address.validation.presence.postal_code')]
  end

  it "raises error with proper message when country is not present" do
    address = customer.addresses.new(street: '1234 street', province: "British Columbia", postal_code: 'V2W 3L3', city: "Victoria")
    expect(address).not_to be_valid
    expect(address.errors.messages[:country]).to eq [I18n.t('errors.model.address.validation.presence.country')]
  end

  it "Create address record successfully when all valid attributes are provided" do
    address = customer.addresses.new(street: '1234 street', city: "Victoria", province: "British Columbia", postal_code: 'V2W 3L3', country: "Canada")
    expect(address).to be_valid
    expect(address.save).to be true
  end

  it "changes current address to new address when the new address is the current address" do
    address_1 = customer.addresses.create(
      street: '1234 street', city: "Victoria", province: "British Columbia",
      postal_code: 'V2W 3L3', country: "Canada", current: true
    )
    expect(address_1.current).to be true
    address_2 = customer.addresses.create(
      street: '7800 street', city: "Victoria", province: "British Columbia",
      postal_code: 'V3W 4L4', country: "Canada", current: true
    )
    expect(address_2.current).to be true
    expect(address_1.reload.current).to be false
  end


end