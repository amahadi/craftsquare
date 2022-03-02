require 'rails_helper'

RSpec.describe DeliveryDateTime, type: :model do

  it "returns error with proper message when weekday is empty" do
    delivery_date_time = DeliveryDateTime.new(
      from_time: Time.now,
      to_time: Time.now + 5.hours,
      delivery_type: 'pick_up_and_drop_off'
    )
    expect(delivery_date_time).not_to be_valid
    expect(delivery_date_time.errors.messages[:weekday]).to eq [I18n.t('errors.model.delivery_date_time.validation.presence.weekday')]
  end

  it "returns error with proper message when from_time is empty" do
    delivery_date_time = DeliveryDateTime.new(
      weekday: 'sunday',
      to_time: Time.now + 5.hours,
      delivery_type: 'pick_up_and_drop_off'
    )
    expect(delivery_date_time).not_to be_valid
    expect(delivery_date_time.errors.messages[:from_time]).to eq [I18n.t('errors.model.delivery_date_time.validation.presence.from_time')]
  end

  it "returns error with proper message when to_time is empty" do
    delivery_date_time = DeliveryDateTime.new(
      weekday: 'sunday',
      from_time: Time.now,
      delivery_type: 'pick_up_and_drop_off'
    )
    expect(delivery_date_time).not_to be_valid
    expect(delivery_date_time.errors.messages[:to_time]).to eq [I18n.t('errors.model.delivery_date_time.validation.presence.to_time')]
  end

  it "returns error with proper message when delivery_type is empty" do
    delivery_date_time = DeliveryDateTime.new(
      weekday: 'sunday',
      from_time: Time.now,
      to_time: Time.now + 5.hours
    )
    expect(delivery_date_time).not_to be_valid
    expect(delivery_date_time.errors.messages[:delivery_type]).to eq [I18n.t('errors.model.delivery_date_time.validation.presence.delivery_type')]
  end

  it "returns error with proper message when from_time is greater than to_time" do
    delivery_date_time = DeliveryDateTime.new(
      weekday: 'sunday',
      from_time: Time.now + 5.hours,
      to_time: Time.now,
      delivery_type: 'pick_up_and_drop_off'
    )
    expect(delivery_date_time).not_to be_valid
    expect(delivery_date_time.errors.messages[:from_time]).to eq [I18n.t('errors.model.delivery_date_time.validation.from_time_should_be_less_than_to_time')]
  end

  it "returns error with proper message when from_time is equal to to_time" do
    time = Time.now
    delivery_date_time = DeliveryDateTime.new(
      weekday: 'sunday',
      from_time: time,
      to_time: time,
      delivery_type: 'pick_up_and_drop_off'
    )
    expect(delivery_date_time).not_to be_valid
    expect(delivery_date_time.errors.messages[:from_time]).to eq [I18n.t('errors.model.delivery_date_time.validation.from_time_should_be_less_than_to_time')]
  end
end
