# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_08_03_142550) do
  create_table "discounts", force: :cascade do |t|
    t.float "percent"
    t.string "code"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "orders", force: :cascade do |t|
    t.float "total_cost"
    t.string "status"
    t.datetime "order_date"
    t.datetime "ship_date"
    t.datetime "deliver_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "shipping_address"
    t.string "billing_address"
    t.integer "user_id"
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "phone"
    t.integer "discount_id"
  end

  create_table "orders_products", force: :cascade do |t|
    t.integer "product_id"
    t.integer "order_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "products", force: :cascade do |t|
    t.string "title"
    t.float "price"
    t.string "description"
    t.string "category"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ratings", force: :cascade do |t|
    t.integer "stars"
    t.text "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "product_id"
    t.index ["product_id"], name: "index_ratings_on_product_id"
  end

  add_foreign_key "ratings", "products"
end
