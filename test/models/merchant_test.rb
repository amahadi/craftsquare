require "test_helper"

class MerchantTest < ActiveSupport::TestCase

  test "Email must be provided" do
    merchant = Merchant.new
    assert_not merchant.save
  end

  test "Password must be provided" do
    merchant = Merchant.new
    assert_not merchant.save
  end

  test "Merchant should be created if email and password in provided" do
    merchant = Merchant.new(
      email: 'merchant@example.com',
      password: 'password',
      password_confirmation: 'password'
    )
    assert merchant.save
  end

  test "First name has valid characters" do
    merchant = Merchant.find_by(email: 'dummy_merchant@example.com')
    merchant.first_name = "Merchant!@#$567"
    begin
      merchant.save
    rescue => exception
      assert merchant.errors[:merchant].present?
    end
  end

  test "Last name has valid characters" do
    merchant = Merchant.find_by(email: 'dummy_merchant@example.com')
    merchant.last_name = "Merchant!@#$567"
    begin
      merchant.save
    rescue => exception
      assert merchant.errors[:merchant].present?
    end
  end

  test "Should be above the age of 16" do
    merchant = Merchant.find_by(email: 'dummy_merchant@example.com')
    merchant.date_of_birth = "2020-12-12"
    begin
      merchant.save
    rescue => exception
      assert merchant.errors[:merchant].present?
    end
  end
end
