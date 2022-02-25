require 'rails_helper'

RSpec.describe Merchant, type: :model do

  let(:merchant) { Merchant.create(email: "merchant@example.com", password: "password") }

  it "raises error when attempt to save without email with appropriate message" do
    merchant = Merchant.new(password: "password")
    expect(merchant).to_not be_valid
    expect(merchant.errors.messages[:email]).to eq ["can't be blank", "Email must be provided"]
  end

  it "raises error when attempt to save without password with appropriate message" do
    merchant = Merchant.new(email: "merchant@example.com")
    expect(merchant).to_not be_valid
    expect(merchant.errors.messages[:password]).to eq ["can't be blank", "Password must be provided"]
  end

  it "creates a merchant successfully when email and password is provided" do
    merchant = Merchant.create(email: "merchant@example.com", password: "password")
    expect(merchant).to be_valid
  end

  it "raises error when attempt to update with invalid first name with appropriate message" do
    merchant.first_name = "abc!@#123def"
    expect(merchant).not_to be_valid
    expect(merchant.errors.messages[:first_name]).to eq ["First name is not valid, numeric and invalid name character is not allowed as first name."]
  end

  it "raises error when attempt to update with invalid last name with appropriate message" do
    merchant.last_name = "mno!@#123xyz"
    expect(merchant).not_to be_valid
    expect(merchant.errors.messages[:last_name]).to eq ["Last name is not valid, numeric and invalid name character is not allowed as last name."]
  end

  it "raises error when attempt to update with age less than 16 with proper message" do
    merchant.date_of_birth = Date.parse("1-1-2020")
    expect(merchant).not_to be_valid
    expect(merchant.errors.messages[:date_of_birth]).to eq ["You need to be at least 16 years old to sign up as a merchant."]
  end

  it "updated successfully when provided with valid attributes" do
    merchant.update(first_name: "valid", last_name: "merchant", date_of_birth: Date.parse("1-1-2000"))
    expect(merchant).to be_valid
  end

end
