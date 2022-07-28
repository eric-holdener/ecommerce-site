json.extract! order, :id, :total_cost, :status, :order_date, :ship_date, :deliver_date, :created_at, :updated_at
json.url order_url(order, format: :json)
