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

  test "First name has valid characters" do
    merchant = Merchant.first
    merchant.first_name = "Merchant!@#$567"
    assert_not merchant.save
  end

  test "Last name has valid characters" do
    merchant = Merchant.first
    merchant.last_name = "Merchant!@#$567"
    assert_not merchant.save
  end

  test "Should be above the age of 16" do
    merchant = Merchant.first
    merchant.date_of_birth = "2020-12-12"
    assert_not merchant.save
  end
end
