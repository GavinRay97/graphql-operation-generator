export const schema = `
schema {
  query: query_root
  mutation: mutation_root
  subscription: subscription_root
}

# expression to compare columns of type Boolean. All fields are combined with logical 'AND'.
input Boolean_comparison_exp {
  _eq: Boolean
  _gt: Boolean
  _gte: Boolean
  _in: [Boolean!]
  _is_null: Boolean
  _lt: Boolean
  _lte: Boolean
  _neq: Boolean
  _nin: [Boolean!]
}

scalar date

# expression to compare columns of type date. All fields are combined with logical 'AND'.
input date_comparison_exp {
  _eq: date
  _gt: date
  _gte: date
  _in: [date!]
  _is_null: Boolean
  _lt: date
  _lte: date
  _neq: date
  _nin: [date!]
}

# A soccer company
#
#
# columns and relationships of "facility"
#
type facility {
  about_facility: String
  bank_account_number: Int
  bank_routing_number: Int
  cleats_allowed: Boolean
  company_legal_name: String
  created_at: timestamptz!

  # An array relationship
  facility_users(
    # distinct select on columns
    distinct_on: [facility_user_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_user_order_by!]

    # filter the rows returned
    where: facility_user_bool_exp
  ): [facility_user!]!

  # An aggregated array relationship
  facility_users_aggregate(
    # distinct select on columns
    distinct_on: [facility_user_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_user_order_by!]

    # filter the rows returned
    where: facility_user_bool_exp
  ): facility_user_aggregate!
  id: Int!

  # An array relationship
  locations(
    # distinct select on columns
    distinct_on: [location_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [location_order_by!]

    # filter the rows returned
    where: location_bool_exp
  ): [location!]!

  # An aggregated array relationship
  locations_aggregate(
    # distinct select on columns
    distinct_on: [location_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [location_order_by!]

    # filter the rows returned
    where: location_bool_exp
  ): location_aggregate!
  name: String!
  owner_email: String!
  phone: String!

  # An object relationship
  region: region
  region_id: Int

  # A service fee which is calculated "inside" of the price (included). EG: A
  # $10.00 purchase and 3% fee, $0.30 of the $10.00 would be our fee.
  service_fee_percent_inside_price: numeric!

  # A service fee which is calculated "outside" of the price (excluded). EG: A
  # $10.00 purchase and 3% fee, $0.30 of the $10.30 would be our fee.
  service_fee_percent_outside_price: numeric!

  # Trigger price that causes trigger_price_service_fee_percent to take effect over service_fee_percent
  service_fee_trigger_price: numeric
  stripe_account_id: String

  # An object relationship
  subregion: subregion
  subregion_id: Int
  tax_id: Int
  trigger_price_service_fee_percent_inside_price: numeric
  trigger_price_service_fee_percent_outside_price: numeric
  updated_at: timestamptz!
  website_url: String
}

# aggregated selection of "facility"
type facility_aggregate {
  aggregate: facility_aggregate_fields
  nodes: [facility!]!
}

# aggregate fields of "facility"
type facility_aggregate_fields {
  avg: facility_avg_fields
  count(columns: [facility_select_column!], distinct: Boolean): Int
  max: facility_max_fields
  min: facility_min_fields
  stddev: facility_stddev_fields
  stddev_pop: facility_stddev_pop_fields
  stddev_samp: facility_stddev_samp_fields
  sum: facility_sum_fields
  var_pop: facility_var_pop_fields
  var_samp: facility_var_samp_fields
  variance: facility_variance_fields
}

# order by aggregate values of table "facility"
input facility_aggregate_order_by {
  avg: facility_avg_order_by
  count: order_by
  max: facility_max_order_by
  min: facility_min_order_by
  stddev: facility_stddev_order_by
  stddev_pop: facility_stddev_pop_order_by
  stddev_samp: facility_stddev_samp_order_by
  sum: facility_sum_order_by
  var_pop: facility_var_pop_order_by
  var_samp: facility_var_samp_order_by
  variance: facility_variance_order_by
}

# input type for inserting array relation for remote table "facility"
input facility_arr_rel_insert_input {
  data: [facility_insert_input!]!
  on_conflict: facility_on_conflict
}

# aggregate avg on columns
type facility_avg_fields {
  bank_account_number: Float
  bank_routing_number: Float
  id: Float
  region_id: Float
  service_fee_percent_inside_price: Float
  service_fee_percent_outside_price: Float
  service_fee_trigger_price: Float
  subregion_id: Float
  tax_id: Float
  trigger_price_service_fee_percent_inside_price: Float
  trigger_price_service_fee_percent_outside_price: Float
}

# order by avg() on columns of table "facility"
input facility_avg_order_by {
  bank_account_number: order_by
  bank_routing_number: order_by
  id: order_by
  region_id: order_by
  service_fee_percent_inside_price: order_by
  service_fee_percent_outside_price: order_by
  service_fee_trigger_price: order_by
  subregion_id: order_by
  tax_id: order_by
  trigger_price_service_fee_percent_inside_price: order_by
  trigger_price_service_fee_percent_outside_price: order_by
}

# Boolean expression to filter rows from the table "facility". All fields are combined with a logical 'AND'.
input facility_bool_exp {
  _and: [facility_bool_exp]
  _not: facility_bool_exp
  _or: [facility_bool_exp]
  about_facility: String_comparison_exp
  bank_account_number: Int_comparison_exp
  bank_routing_number: Int_comparison_exp
  cleats_allowed: Boolean_comparison_exp
  company_legal_name: String_comparison_exp
  created_at: timestamptz_comparison_exp
  facility_users: facility_user_bool_exp
  id: Int_comparison_exp
  locations: location_bool_exp
  name: String_comparison_exp
  owner_email: String_comparison_exp
  phone: String_comparison_exp
  region: region_bool_exp
  region_id: Int_comparison_exp
  service_fee_percent_inside_price: numeric_comparison_exp
  service_fee_percent_outside_price: numeric_comparison_exp
  service_fee_trigger_price: numeric_comparison_exp
  stripe_account_id: String_comparison_exp
  subregion: subregion_bool_exp
  subregion_id: Int_comparison_exp
  tax_id: Int_comparison_exp
  trigger_price_service_fee_percent_inside_price: numeric_comparison_exp
  trigger_price_service_fee_percent_outside_price: numeric_comparison_exp
  updated_at: timestamptz_comparison_exp
  website_url: String_comparison_exp
}

# A custom facility game category for a particular soccer facility
#
#
# columns and relationships of "facility_category"
#
type facility_category {
  color: String
  created_at: timestamptz!

  # An array relationship
  facility_game_categories(
    # distinct select on columns
    distinct_on: [facility_game_category_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_game_category_order_by!]

    # filter the rows returned
    where: facility_game_category_bool_exp
  ): [facility_game_category!]!

  # An aggregated array relationship
  facility_game_categories_aggregate(
    # distinct select on columns
    distinct_on: [facility_game_category_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_game_category_order_by!]

    # filter the rows returned
    where: facility_game_category_bool_exp
  ): facility_game_category_aggregate!
  facility_id: Int!
  id: Int!
  text: String!
  updated_at: timestamptz!
}

# aggregated selection of "facility_category"
type facility_category_aggregate {
  aggregate: facility_category_aggregate_fields
  nodes: [facility_category!]!
}

# aggregate fields of "facility_category"
type facility_category_aggregate_fields {
  avg: facility_category_avg_fields
  count(columns: [facility_category_select_column!], distinct: Boolean): Int
  max: facility_category_max_fields
  min: facility_category_min_fields
  stddev: facility_category_stddev_fields
  stddev_pop: facility_category_stddev_pop_fields
  stddev_samp: facility_category_stddev_samp_fields
  sum: facility_category_sum_fields
  var_pop: facility_category_var_pop_fields
  var_samp: facility_category_var_samp_fields
  variance: facility_category_variance_fields
}

# order by aggregate values of table "facility_category"
input facility_category_aggregate_order_by {
  avg: facility_category_avg_order_by
  count: order_by
  max: facility_category_max_order_by
  min: facility_category_min_order_by
  stddev: facility_category_stddev_order_by
  stddev_pop: facility_category_stddev_pop_order_by
  stddev_samp: facility_category_stddev_samp_order_by
  sum: facility_category_sum_order_by
  var_pop: facility_category_var_pop_order_by
  var_samp: facility_category_var_samp_order_by
  variance: facility_category_variance_order_by
}

# input type for inserting array relation for remote table "facility_category"
input facility_category_arr_rel_insert_input {
  data: [facility_category_insert_input!]!
  on_conflict: facility_category_on_conflict
}

# aggregate avg on columns
type facility_category_avg_fields {
  facility_id: Float
  id: Float
}

# order by avg() on columns of table "facility_category"
input facility_category_avg_order_by {
  facility_id: order_by
  id: order_by
}

# Boolean expression to filter rows from the table "facility_category". All fields are combined with a logical 'AND'.
input facility_category_bool_exp {
  _and: [facility_category_bool_exp]
  _not: facility_category_bool_exp
  _or: [facility_category_bool_exp]
  color: String_comparison_exp
  created_at: timestamptz_comparison_exp
  facility_game_categories: facility_game_category_bool_exp
  facility_id: Int_comparison_exp
  id: Int_comparison_exp
  text: String_comparison_exp
  updated_at: timestamptz_comparison_exp
}

# unique or primary key constraints on table "facility_category"
enum facility_category_constraint {
  # unique or primary key constraint
  facility_category_pkey
}

# input type for incrementing integer column in table "facility_category"
input facility_category_inc_input {
  facility_id: Int
  id: Int
}

# input type for inserting data into table "facility_category"
input facility_category_insert_input {
  color: String
  created_at: timestamptz
  facility_game_categories: facility_game_category_arr_rel_insert_input
  facility_id: Int
  id: Int
  text: String
  updated_at: timestamptz
}

# aggregate max on columns
type facility_category_max_fields {
  color: String
  created_at: timestamptz
  facility_id: Int
  id: Int
  text: String
  updated_at: timestamptz
}

# order by max() on columns of table "facility_category"
input facility_category_max_order_by {
  color: order_by
  created_at: order_by
  facility_id: order_by
  id: order_by
  text: order_by
  updated_at: order_by
}

# aggregate min on columns
type facility_category_min_fields {
  color: String
  created_at: timestamptz
  facility_id: Int
  id: Int
  text: String
  updated_at: timestamptz
}

# order by min() on columns of table "facility_category"
input facility_category_min_order_by {
  color: order_by
  created_at: order_by
  facility_id: order_by
  id: order_by
  text: order_by
  updated_at: order_by
}

# response of any mutation on the table "facility_category"
type facility_category_mutation_response {
  # number of affected rows by the mutation
  affected_rows: Int!

  # data of the affected rows by the mutation
  returning: [facility_category!]!
}

# input type for inserting object relation for remote table "facility_category"
input facility_category_obj_rel_insert_input {
  data: facility_category_insert_input!
  on_conflict: facility_category_on_conflict
}

# on conflict condition type for table "facility_category"
input facility_category_on_conflict {
  constraint: facility_category_constraint!
  update_columns: [facility_category_update_column!]!
  where: facility_category_bool_exp
}

# ordering options when selecting data from "facility_category"
input facility_category_order_by {
  color: order_by
  created_at: order_by
  facility_game_categories_aggregate: facility_game_category_aggregate_order_by
  facility_id: order_by
  id: order_by
  text: order_by
  updated_at: order_by
}

# primary key columns input for table: "facility_category"
input facility_category_pk_columns_input {
  id: Int!
}

# select columns of table "facility_category"
enum facility_category_select_column {
  # column name
  color

  # column name
  created_at

  # column name
  facility_id

  # column name
  id

  # column name
  text

  # column name
  updated_at
}

# input type for updating data in table "facility_category"
input facility_category_set_input {
  color: String
  created_at: timestamptz
  facility_id: Int
  id: Int
  text: String
  updated_at: timestamptz
}

# aggregate stddev on columns
type facility_category_stddev_fields {
  facility_id: Float
  id: Float
}

# order by stddev() on columns of table "facility_category"
input facility_category_stddev_order_by {
  facility_id: order_by
  id: order_by
}

# aggregate stddev_pop on columns
type facility_category_stddev_pop_fields {
  facility_id: Float
  id: Float
}

# order by stddev_pop() on columns of table "facility_category"
input facility_category_stddev_pop_order_by {
  facility_id: order_by
  id: order_by
}

# aggregate stddev_samp on columns
type facility_category_stddev_samp_fields {
  facility_id: Float
  id: Float
}

# order by stddev_samp() on columns of table "facility_category"
input facility_category_stddev_samp_order_by {
  facility_id: order_by
  id: order_by
}

# aggregate sum on columns
type facility_category_sum_fields {
  facility_id: Int
  id: Int
}

# order by sum() on columns of table "facility_category"
input facility_category_sum_order_by {
  facility_id: order_by
  id: order_by
}

# update columns of table "facility_category"
enum facility_category_update_column {
  # column name
  color

  # column name
  created_at

  # column name
  facility_id

  # column name
  id

  # column name
  text

  # column name
  updated_at
}

# aggregate var_pop on columns
type facility_category_var_pop_fields {
  facility_id: Float
  id: Float
}

# order by var_pop() on columns of table "facility_category"
input facility_category_var_pop_order_by {
  facility_id: order_by
  id: order_by
}

# aggregate var_samp on columns
type facility_category_var_samp_fields {
  facility_id: Float
  id: Float
}

# order by var_samp() on columns of table "facility_category"
input facility_category_var_samp_order_by {
  facility_id: order_by
  id: order_by
}

# aggregate variance on columns
type facility_category_variance_fields {
  facility_id: Float
  id: Float
}

# order by variance() on columns of table "facility_category"
input facility_category_variance_order_by {
  facility_id: order_by
  id: order_by
}

# unique or primary key constraints on table "facility"
enum facility_constraint {
  # unique or primary key constraint
  facility_pkey
}

# A game booked by a facility for their players
#
#
# columns and relationships of "facility_game"
#
type facility_game {
  created_at: timestamptz!
  datetime: timestamptz!

  # An array relationship
  facility_game_categories(
    # distinct select on columns
    distinct_on: [facility_game_category_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_game_category_order_by!]

    # filter the rows returned
    where: facility_game_category_bool_exp
  ): [facility_game_category!]!

  # An aggregated array relationship
  facility_game_categories_aggregate(
    # distinct select on columns
    distinct_on: [facility_game_category_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_game_category_order_by!]

    # filter the rows returned
    where: facility_game_category_bool_exp
  ): facility_game_category_aggregate!

  # An object relationship
  facility_game_column: facility_game_columns!
  facility_game_columns_id: Int!

  # An array relationship
  facility_game_global_categories(
    # distinct select on columns
    distinct_on: [facility_game_global_category_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_game_global_category_order_by!]

    # filter the rows returned
    where: facility_game_global_category_bool_exp
  ): [facility_game_global_category!]!

  # An aggregated array relationship
  facility_game_global_categories_aggregate(
    # distinct select on columns
    distinct_on: [facility_game_global_category_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_game_global_category_order_by!]

    # filter the rows returned
    where: facility_game_global_category_bool_exp
  ): facility_game_global_category_aggregate!

  # An array relationship
  facility_game_reservations(
    # distinct select on columns
    distinct_on: [facility_game_reservation_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_game_reservation_order_by!]

    # filter the rows returned
    where: facility_game_reservation_bool_exp
  ): [facility_game_reservation!]!

  # An aggregated array relationship
  facility_game_reservations_aggregate(
    # distinct select on columns
    distinct_on: [facility_game_reservation_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_game_reservation_order_by!]

    # filter the rows returned
    where: facility_game_reservation_bool_exp
  ): facility_game_reservation_aggregate!
  id: Int!

  # An object relationship
  recurring_facility_game: recurring_facility_game
  recurring_facility_game_id: Int
  updated_at: timestamptz!
}

# aggregated selection of "facility_game"
type facility_game_aggregate {
  aggregate: facility_game_aggregate_fields
  nodes: [facility_game!]!
}

# aggregate fields of "facility_game"
type facility_game_aggregate_fields {
  avg: facility_game_avg_fields
  count(columns: [facility_game_select_column!], distinct: Boolean): Int
  max: facility_game_max_fields
  min: facility_game_min_fields
  stddev: facility_game_stddev_fields
  stddev_pop: facility_game_stddev_pop_fields
  stddev_samp: facility_game_stddev_samp_fields
  sum: facility_game_sum_fields
  var_pop: facility_game_var_pop_fields
  var_samp: facility_game_var_samp_fields
  variance: facility_game_variance_fields
}

# order by aggregate values of table "facility_game"
input facility_game_aggregate_order_by {
  avg: facility_game_avg_order_by
  count: order_by
  max: facility_game_max_order_by
  min: facility_game_min_order_by
  stddev: facility_game_stddev_order_by
  stddev_pop: facility_game_stddev_pop_order_by
  stddev_samp: facility_game_stddev_samp_order_by
  sum: facility_game_sum_order_by
  var_pop: facility_game_var_pop_order_by
  var_samp: facility_game_var_samp_order_by
  variance: facility_game_variance_order_by
}

# input type for inserting array relation for remote table "facility_game"
input facility_game_arr_rel_insert_input {
  data: [facility_game_insert_input!]!
  on_conflict: facility_game_on_conflict
}

# aggregate avg on columns
type facility_game_avg_fields {
  facility_game_columns_id: Float
  id: Float
  recurring_facility_game_id: Float
}

# order by avg() on columns of table "facility_game"
input facility_game_avg_order_by {
  facility_game_columns_id: order_by
  id: order_by
  recurring_facility_game_id: order_by
}

# Boolean expression to filter rows from the table "facility_game". All fields are combined with a logical 'AND'.
input facility_game_bool_exp {
  _and: [facility_game_bool_exp]
  _not: facility_game_bool_exp
  _or: [facility_game_bool_exp]
  created_at: timestamptz_comparison_exp
  datetime: timestamptz_comparison_exp
  facility_game_categories: facility_game_category_bool_exp
  facility_game_column: facility_game_columns_bool_exp
  facility_game_columns_id: Int_comparison_exp
  facility_game_global_categories: facility_game_global_category_bool_exp
  facility_game_reservations: facility_game_reservation_bool_exp
  id: Int_comparison_exp
  recurring_facility_game: recurring_facility_game_bool_exp
  recurring_facility_game_id: Int_comparison_exp
  updated_at: timestamptz_comparison_exp
}

# One of the custom facility game categories applied to a facility game
#
#
# columns and relationships of "facility_game_category"
#
type facility_game_category {
  created_at: timestamptz!

  # An object relationship
  facility_category: facility_category!
  facility_category_id: Int!

  # An object relationship
  facility_game: facility_game!
  facility_game_id: Int!
  id: Int!
  updated_at: timestamptz!
}

# aggregated selection of "facility_game_category"
type facility_game_category_aggregate {
  aggregate: facility_game_category_aggregate_fields
  nodes: [facility_game_category!]!
}

# aggregate fields of "facility_game_category"
type facility_game_category_aggregate_fields {
  avg: facility_game_category_avg_fields
  count(columns: [facility_game_category_select_column!], distinct: Boolean): Int
  max: facility_game_category_max_fields
  min: facility_game_category_min_fields
  stddev: facility_game_category_stddev_fields
  stddev_pop: facility_game_category_stddev_pop_fields
  stddev_samp: facility_game_category_stddev_samp_fields
  sum: facility_game_category_sum_fields
  var_pop: facility_game_category_var_pop_fields
  var_samp: facility_game_category_var_samp_fields
  variance: facility_game_category_variance_fields
}

# order by aggregate values of table "facility_game_category"
input facility_game_category_aggregate_order_by {
  avg: facility_game_category_avg_order_by
  count: order_by
  max: facility_game_category_max_order_by
  min: facility_game_category_min_order_by
  stddev: facility_game_category_stddev_order_by
  stddev_pop: facility_game_category_stddev_pop_order_by
  stddev_samp: facility_game_category_stddev_samp_order_by
  sum: facility_game_category_sum_order_by
  var_pop: facility_game_category_var_pop_order_by
  var_samp: facility_game_category_var_samp_order_by
  variance: facility_game_category_variance_order_by
}

# input type for inserting array relation for remote table "facility_game_category"
input facility_game_category_arr_rel_insert_input {
  data: [facility_game_category_insert_input!]!
  on_conflict: facility_game_category_on_conflict
}

# aggregate avg on columns
type facility_game_category_avg_fields {
  facility_category_id: Float
  facility_game_id: Float
  id: Float
}

# order by avg() on columns of table "facility_game_category"
input facility_game_category_avg_order_by {
  facility_category_id: order_by
  facility_game_id: order_by
  id: order_by
}

# Boolean expression to filter rows from the table "facility_game_category". All fields are combined with a logical 'AND'.
input facility_game_category_bool_exp {
  _and: [facility_game_category_bool_exp]
  _not: facility_game_category_bool_exp
  _or: [facility_game_category_bool_exp]
  created_at: timestamptz_comparison_exp
  facility_category: facility_category_bool_exp
  facility_category_id: Int_comparison_exp
  facility_game: facility_game_bool_exp
  facility_game_id: Int_comparison_exp
  id: Int_comparison_exp
  updated_at: timestamptz_comparison_exp
}

# unique or primary key constraints on table "facility_game_category"
enum facility_game_category_constraint {
  # unique or primary key constraint
  facility_game_category_pkey
}

# input type for incrementing integer column in table "facility_game_category"
input facility_game_category_inc_input {
  facility_category_id: Int
  facility_game_id: Int
  id: Int
}

# input type for inserting data into table "facility_game_category"
input facility_game_category_insert_input {
  created_at: timestamptz
  facility_category: facility_category_obj_rel_insert_input
  facility_category_id: Int
  facility_game: facility_game_obj_rel_insert_input
  facility_game_id: Int
  id: Int
  updated_at: timestamptz
}

# aggregate max on columns
type facility_game_category_max_fields {
  created_at: timestamptz
  facility_category_id: Int
  facility_game_id: Int
  id: Int
  updated_at: timestamptz
}

# order by max() on columns of table "facility_game_category"
input facility_game_category_max_order_by {
  created_at: order_by
  facility_category_id: order_by
  facility_game_id: order_by
  id: order_by
  updated_at: order_by
}

# aggregate min on columns
type facility_game_category_min_fields {
  created_at: timestamptz
  facility_category_id: Int
  facility_game_id: Int
  id: Int
  updated_at: timestamptz
}

# order by min() on columns of table "facility_game_category"
input facility_game_category_min_order_by {
  created_at: order_by
  facility_category_id: order_by
  facility_game_id: order_by
  id: order_by
  updated_at: order_by
}

# response of any mutation on the table "facility_game_category"
type facility_game_category_mutation_response {
  # number of affected rows by the mutation
  affected_rows: Int!

  # data of the affected rows by the mutation
  returning: [facility_game_category!]!
}

# input type for inserting object relation for remote table "facility_game_category"
input facility_game_category_obj_rel_insert_input {
  data: facility_game_category_insert_input!
  on_conflict: facility_game_category_on_conflict
}

# on conflict condition type for table "facility_game_category"
input facility_game_category_on_conflict {
  constraint: facility_game_category_constraint!
  update_columns: [facility_game_category_update_column!]!
  where: facility_game_category_bool_exp
}

# ordering options when selecting data from "facility_game_category"
input facility_game_category_order_by {
  created_at: order_by
  facility_category: facility_category_order_by
  facility_category_id: order_by
  facility_game: facility_game_order_by
  facility_game_id: order_by
  id: order_by
  updated_at: order_by
}

# primary key columns input for table: "facility_game_category"
input facility_game_category_pk_columns_input {
  id: Int!
}

# select columns of table "facility_game_category"
enum facility_game_category_select_column {
  # column name
  created_at

  # column name
  facility_category_id

  # column name
  facility_game_id

  # column name
  id

  # column name
  updated_at
}

# input type for updating data in table "facility_game_category"
input facility_game_category_set_input {
  created_at: timestamptz
  facility_category_id: Int
  facility_game_id: Int
  id: Int
  updated_at: timestamptz
}

# aggregate stddev on columns
type facility_game_category_stddev_fields {
  facility_category_id: Float
  facility_game_id: Float
  id: Float
}

# order by stddev() on columns of table "facility_game_category"
input facility_game_category_stddev_order_by {
  facility_category_id: order_by
  facility_game_id: order_by
  id: order_by
}

# aggregate stddev_pop on columns
type facility_game_category_stddev_pop_fields {
  facility_category_id: Float
  facility_game_id: Float
  id: Float
}

# order by stddev_pop() on columns of table "facility_game_category"
input facility_game_category_stddev_pop_order_by {
  facility_category_id: order_by
  facility_game_id: order_by
  id: order_by
}

# aggregate stddev_samp on columns
type facility_game_category_stddev_samp_fields {
  facility_category_id: Float
  facility_game_id: Float
  id: Float
}

# order by stddev_samp() on columns of table "facility_game_category"
input facility_game_category_stddev_samp_order_by {
  facility_category_id: order_by
  facility_game_id: order_by
  id: order_by
}

# aggregate sum on columns
type facility_game_category_sum_fields {
  facility_category_id: Int
  facility_game_id: Int
  id: Int
}

# order by sum() on columns of table "facility_game_category"
input facility_game_category_sum_order_by {
  facility_category_id: order_by
  facility_game_id: order_by
  id: order_by
}

# update columns of table "facility_game_category"
enum facility_game_category_update_column {
  # column name
  created_at

  # column name
  facility_category_id

  # column name
  facility_game_id

  # column name
  id

  # column name
  updated_at
}

# aggregate var_pop on columns
type facility_game_category_var_pop_fields {
  facility_category_id: Float
  facility_game_id: Float
  id: Float
}

# order by var_pop() on columns of table "facility_game_category"
input facility_game_category_var_pop_order_by {
  facility_category_id: order_by
  facility_game_id: order_by
  id: order_by
}

# aggregate var_samp on columns
type facility_game_category_var_samp_fields {
  facility_category_id: Float
  facility_game_id: Float
  id: Float
}

# order by var_samp() on columns of table "facility_game_category"
input facility_game_category_var_samp_order_by {
  facility_category_id: order_by
  facility_game_id: order_by
  id: order_by
}

# aggregate variance on columns
type facility_game_category_variance_fields {
  facility_category_id: Float
  facility_game_id: Float
  id: Float
}

# order by variance() on columns of table "facility_game_category"
input facility_game_category_variance_order_by {
  facility_category_id: order_by
  facility_game_id: order_by
  id: order_by
}

# The columns for a facility game
#
#
# columns and relationships of "facility_game_columns"
#
type facility_game_columns {
  created_at: timestamptz!
  duration: Int!

  # An array relationship
  facility_games(
    # distinct select on columns
    distinct_on: [facility_game_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_game_order_by!]

    # filter the rows returned
    where: facility_game_bool_exp
  ): [facility_game!]!

  # An aggregated array relationship
  facility_games_aggregate(
    # distinct select on columns
    distinct_on: [facility_game_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_game_order_by!]

    # filter the rows returned
    where: facility_game_bool_exp
  ): facility_game_aggregate!

  # An object relationship
  field: field!
  field_id: Int!
  id: Int!
  notes: String
  price: Int!

  # An array relationship
  recurring_facility_games(
    # distinct select on columns
    distinct_on: [recurring_facility_game_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [recurring_facility_game_order_by!]

    # filter the rows returned
    where: recurring_facility_game_bool_exp
  ): [recurring_facility_game!]!

  # An aggregated array relationship
  recurring_facility_games_aggregate(
    # distinct select on columns
    distinct_on: [recurring_facility_game_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [recurring_facility_game_order_by!]

    # filter the rows returned
    where: recurring_facility_game_bool_exp
  ): recurring_facility_game_aggregate!
  title: String!
  updated_at: timestamptz!
}

# aggregated selection of "facility_game_columns"
type facility_game_columns_aggregate {
  aggregate: facility_game_columns_aggregate_fields
  nodes: [facility_game_columns!]!
}

# aggregate fields of "facility_game_columns"
type facility_game_columns_aggregate_fields {
  avg: facility_game_columns_avg_fields
  count(columns: [facility_game_columns_select_column!], distinct: Boolean): Int
  max: facility_game_columns_max_fields
  min: facility_game_columns_min_fields
  stddev: facility_game_columns_stddev_fields
  stddev_pop: facility_game_columns_stddev_pop_fields
  stddev_samp: facility_game_columns_stddev_samp_fields
  sum: facility_game_columns_sum_fields
  var_pop: facility_game_columns_var_pop_fields
  var_samp: facility_game_columns_var_samp_fields
  variance: facility_game_columns_variance_fields
}

# order by aggregate values of table "facility_game_columns"
input facility_game_columns_aggregate_order_by {
  avg: facility_game_columns_avg_order_by
  count: order_by
  max: facility_game_columns_max_order_by
  min: facility_game_columns_min_order_by
  stddev: facility_game_columns_stddev_order_by
  stddev_pop: facility_game_columns_stddev_pop_order_by
  stddev_samp: facility_game_columns_stddev_samp_order_by
  sum: facility_game_columns_sum_order_by
  var_pop: facility_game_columns_var_pop_order_by
  var_samp: facility_game_columns_var_samp_order_by
  variance: facility_game_columns_variance_order_by
}

# input type for inserting array relation for remote table "facility_game_columns"
input facility_game_columns_arr_rel_insert_input {
  data: [facility_game_columns_insert_input!]!
  on_conflict: facility_game_columns_on_conflict
}

# aggregate avg on columns
type facility_game_columns_avg_fields {
  duration: Float
  field_id: Float
  id: Float
  price: Float
}

# order by avg() on columns of table "facility_game_columns"
input facility_game_columns_avg_order_by {
  duration: order_by
  field_id: order_by
  id: order_by
  price: order_by
}

# Boolean expression to filter rows from the table "facility_game_columns". All fields are combined with a logical 'AND'.
input facility_game_columns_bool_exp {
  _and: [facility_game_columns_bool_exp]
  _not: facility_game_columns_bool_exp
  _or: [facility_game_columns_bool_exp]
  created_at: timestamptz_comparison_exp
  duration: Int_comparison_exp
  facility_games: facility_game_bool_exp
  field: field_bool_exp
  field_id: Int_comparison_exp
  id: Int_comparison_exp
  notes: String_comparison_exp
  price: Int_comparison_exp
  recurring_facility_games: recurring_facility_game_bool_exp
  title: String_comparison_exp
  updated_at: timestamptz_comparison_exp
}

# unique or primary key constraints on table "facility_game_columns"
enum facility_game_columns_constraint {
  # unique or primary key constraint
  facility_game_columns_pkey
}

# input type for incrementing integer column in table "facility_game_columns"
input facility_game_columns_inc_input {
  duration: Int
  field_id: Int
  id: Int
  price: Int
}

# input type for inserting data into table "facility_game_columns"
input facility_game_columns_insert_input {
  created_at: timestamptz
  duration: Int
  facility_games: facility_game_arr_rel_insert_input
  field: field_obj_rel_insert_input
  field_id: Int
  id: Int
  notes: String
  price: Int
  recurring_facility_games: recurring_facility_game_arr_rel_insert_input
  title: String
  updated_at: timestamptz
}

# aggregate max on columns
type facility_game_columns_max_fields {
  created_at: timestamptz
  duration: Int
  field_id: Int
  id: Int
  notes: String
  price: Int
  title: String
  updated_at: timestamptz
}

# order by max() on columns of table "facility_game_columns"
input facility_game_columns_max_order_by {
  created_at: order_by
  duration: order_by
  field_id: order_by
  id: order_by
  notes: order_by
  price: order_by
  title: order_by
  updated_at: order_by
}

# aggregate min on columns
type facility_game_columns_min_fields {
  created_at: timestamptz
  duration: Int
  field_id: Int
  id: Int
  notes: String
  price: Int
  title: String
  updated_at: timestamptz
}

# order by min() on columns of table "facility_game_columns"
input facility_game_columns_min_order_by {
  created_at: order_by
  duration: order_by
  field_id: order_by
  id: order_by
  notes: order_by
  price: order_by
  title: order_by
  updated_at: order_by
}

# response of any mutation on the table "facility_game_columns"
type facility_game_columns_mutation_response {
  # number of affected rows by the mutation
  affected_rows: Int!

  # data of the affected rows by the mutation
  returning: [facility_game_columns!]!
}

# input type for inserting object relation for remote table "facility_game_columns"
input facility_game_columns_obj_rel_insert_input {
  data: facility_game_columns_insert_input!
  on_conflict: facility_game_columns_on_conflict
}

# on conflict condition type for table "facility_game_columns"
input facility_game_columns_on_conflict {
  constraint: facility_game_columns_constraint!
  update_columns: [facility_game_columns_update_column!]!
  where: facility_game_columns_bool_exp
}

# ordering options when selecting data from "facility_game_columns"
input facility_game_columns_order_by {
  created_at: order_by
  duration: order_by
  facility_games_aggregate: facility_game_aggregate_order_by
  field: field_order_by
  field_id: order_by
  id: order_by
  notes: order_by
  price: order_by
  recurring_facility_games_aggregate: recurring_facility_game_aggregate_order_by
  title: order_by
  updated_at: order_by
}

# primary key columns input for table: "facility_game_columns"
input facility_game_columns_pk_columns_input {
  id: Int!
}

# select columns of table "facility_game_columns"
enum facility_game_columns_select_column {
  # column name
  created_at

  # column name
  duration

  # column name
  field_id

  # column name
  id

  # column name
  notes

  # column name
  price

  # column name
  title

  # column name
  updated_at
}

# input type for updating data in table "facility_game_columns"
input facility_game_columns_set_input {
  created_at: timestamptz
  duration: Int
  field_id: Int
  id: Int
  notes: String
  price: Int
  title: String
  updated_at: timestamptz
}

# aggregate stddev on columns
type facility_game_columns_stddev_fields {
  duration: Float
  field_id: Float
  id: Float
  price: Float
}

# order by stddev() on columns of table "facility_game_columns"
input facility_game_columns_stddev_order_by {
  duration: order_by
  field_id: order_by
  id: order_by
  price: order_by
}

# aggregate stddev_pop on columns
type facility_game_columns_stddev_pop_fields {
  duration: Float
  field_id: Float
  id: Float
  price: Float
}

# order by stddev_pop() on columns of table "facility_game_columns"
input facility_game_columns_stddev_pop_order_by {
  duration: order_by
  field_id: order_by
  id: order_by
  price: order_by
}

# aggregate stddev_samp on columns
type facility_game_columns_stddev_samp_fields {
  duration: Float
  field_id: Float
  id: Float
  price: Float
}

# order by stddev_samp() on columns of table "facility_game_columns"
input facility_game_columns_stddev_samp_order_by {
  duration: order_by
  field_id: order_by
  id: order_by
  price: order_by
}

# aggregate sum on columns
type facility_game_columns_sum_fields {
  duration: Int
  field_id: Int
  id: Int
  price: Int
}

# order by sum() on columns of table "facility_game_columns"
input facility_game_columns_sum_order_by {
  duration: order_by
  field_id: order_by
  id: order_by
  price: order_by
}

# update columns of table "facility_game_columns"
enum facility_game_columns_update_column {
  # column name
  created_at

  # column name
  duration

  # column name
  field_id

  # column name
  id

  # column name
  notes

  # column name
  price

  # column name
  title

  # column name
  updated_at
}

# aggregate var_pop on columns
type facility_game_columns_var_pop_fields {
  duration: Float
  field_id: Float
  id: Float
  price: Float
}

# order by var_pop() on columns of table "facility_game_columns"
input facility_game_columns_var_pop_order_by {
  duration: order_by
  field_id: order_by
  id: order_by
  price: order_by
}

# aggregate var_samp on columns
type facility_game_columns_var_samp_fields {
  duration: Float
  field_id: Float
  id: Float
  price: Float
}

# order by var_samp() on columns of table "facility_game_columns"
input facility_game_columns_var_samp_order_by {
  duration: order_by
  field_id: order_by
  id: order_by
  price: order_by
}

# aggregate variance on columns
type facility_game_columns_variance_fields {
  duration: Float
  field_id: Float
  id: Float
  price: Float
}

# order by variance() on columns of table "facility_game_columns"
input facility_game_columns_variance_order_by {
  duration: order_by
  field_id: order_by
  id: order_by
  price: order_by
}

# unique or primary key constraints on table "facility_game"
enum facility_game_constraint {
  # unique or primary key constraint
  facility_game_pkey
}

# One of the global/shared game categories applied to a facility game
#
#
# columns and relationships of "facility_game_global_category"
#
type facility_game_global_category {
  created_at: timestamptz!

  # An object relationship
  facility_game: facility_game!
  facility_game_id: Int!

  # An object relationship
  global_category: global_category!
  global_category_id: Int!
  id: Int!
  updated_at: timestamptz!
}

# aggregated selection of "facility_game_global_category"
type facility_game_global_category_aggregate {
  aggregate: facility_game_global_category_aggregate_fields
  nodes: [facility_game_global_category!]!
}

# aggregate fields of "facility_game_global_category"
type facility_game_global_category_aggregate_fields {
  avg: facility_game_global_category_avg_fields
  count(columns: [facility_game_global_category_select_column!], distinct: Boolean): Int
  max: facility_game_global_category_max_fields
  min: facility_game_global_category_min_fields
  stddev: facility_game_global_category_stddev_fields
  stddev_pop: facility_game_global_category_stddev_pop_fields
  stddev_samp: facility_game_global_category_stddev_samp_fields
  sum: facility_game_global_category_sum_fields
  var_pop: facility_game_global_category_var_pop_fields
  var_samp: facility_game_global_category_var_samp_fields
  variance: facility_game_global_category_variance_fields
}

# order by aggregate values of table "facility_game_global_category"
input facility_game_global_category_aggregate_order_by {
  avg: facility_game_global_category_avg_order_by
  count: order_by
  max: facility_game_global_category_max_order_by
  min: facility_game_global_category_min_order_by
  stddev: facility_game_global_category_stddev_order_by
  stddev_pop: facility_game_global_category_stddev_pop_order_by
  stddev_samp: facility_game_global_category_stddev_samp_order_by
  sum: facility_game_global_category_sum_order_by
  var_pop: facility_game_global_category_var_pop_order_by
  var_samp: facility_game_global_category_var_samp_order_by
  variance: facility_game_global_category_variance_order_by
}

# input type for inserting array relation for remote table "facility_game_global_category"
input facility_game_global_category_arr_rel_insert_input {
  data: [facility_game_global_category_insert_input!]!
  on_conflict: facility_game_global_category_on_conflict
}

# aggregate avg on columns
type facility_game_global_category_avg_fields {
  facility_game_id: Float
  global_category_id: Float
  id: Float
}

# order by avg() on columns of table "facility_game_global_category"
input facility_game_global_category_avg_order_by {
  facility_game_id: order_by
  global_category_id: order_by
  id: order_by
}

# Boolean expression to filter rows from the table
# "facility_game_global_category". All fields are combined with a logical 'AND'.
input facility_game_global_category_bool_exp {
  _and: [facility_game_global_category_bool_exp]
  _not: facility_game_global_category_bool_exp
  _or: [facility_game_global_category_bool_exp]
  created_at: timestamptz_comparison_exp
  facility_game: facility_game_bool_exp
  facility_game_id: Int_comparison_exp
  global_category: global_category_bool_exp
  global_category_id: Int_comparison_exp
  id: Int_comparison_exp
  updated_at: timestamptz_comparison_exp
}

# unique or primary key constraints on table "facility_game_global_category"
enum facility_game_global_category_constraint {
  # unique or primary key constraint
  facility_game_global_category_pkey
}

# input type for incrementing integer column in table "facility_game_global_category"
input facility_game_global_category_inc_input {
  facility_game_id: Int
  global_category_id: Int
  id: Int
}

# input type for inserting data into table "facility_game_global_category"
input facility_game_global_category_insert_input {
  created_at: timestamptz
  facility_game: facility_game_obj_rel_insert_input
  facility_game_id: Int
  global_category: global_category_obj_rel_insert_input
  global_category_id: Int
  id: Int
  updated_at: timestamptz
}

# aggregate max on columns
type facility_game_global_category_max_fields {
  created_at: timestamptz
  facility_game_id: Int
  global_category_id: Int
  id: Int
  updated_at: timestamptz
}

# order by max() on columns of table "facility_game_global_category"
input facility_game_global_category_max_order_by {
  created_at: order_by
  facility_game_id: order_by
  global_category_id: order_by
  id: order_by
  updated_at: order_by
}

# aggregate min on columns
type facility_game_global_category_min_fields {
  created_at: timestamptz
  facility_game_id: Int
  global_category_id: Int
  id: Int
  updated_at: timestamptz
}

# order by min() on columns of table "facility_game_global_category"
input facility_game_global_category_min_order_by {
  created_at: order_by
  facility_game_id: order_by
  global_category_id: order_by
  id: order_by
  updated_at: order_by
}

# response of any mutation on the table "facility_game_global_category"
type facility_game_global_category_mutation_response {
  # number of affected rows by the mutation
  affected_rows: Int!

  # data of the affected rows by the mutation
  returning: [facility_game_global_category!]!
}

# input type for inserting object relation for remote table "facility_game_global_category"
input facility_game_global_category_obj_rel_insert_input {
  data: facility_game_global_category_insert_input!
  on_conflict: facility_game_global_category_on_conflict
}

# on conflict condition type for table "facility_game_global_category"
input facility_game_global_category_on_conflict {
  constraint: facility_game_global_category_constraint!
  update_columns: [facility_game_global_category_update_column!]!
  where: facility_game_global_category_bool_exp
}

# ordering options when selecting data from "facility_game_global_category"
input facility_game_global_category_order_by {
  created_at: order_by
  facility_game: facility_game_order_by
  facility_game_id: order_by
  global_category: global_category_order_by
  global_category_id: order_by
  id: order_by
  updated_at: order_by
}

# primary key columns input for table: "facility_game_global_category"
input facility_game_global_category_pk_columns_input {
  id: Int!
}

# select columns of table "facility_game_global_category"
enum facility_game_global_category_select_column {
  # column name
  created_at

  # column name
  facility_game_id

  # column name
  global_category_id

  # column name
  id

  # column name
  updated_at
}

# input type for updating data in table "facility_game_global_category"
input facility_game_global_category_set_input {
  created_at: timestamptz
  facility_game_id: Int
  global_category_id: Int
  id: Int
  updated_at: timestamptz
}

# aggregate stddev on columns
type facility_game_global_category_stddev_fields {
  facility_game_id: Float
  global_category_id: Float
  id: Float
}

# order by stddev() on columns of table "facility_game_global_category"
input facility_game_global_category_stddev_order_by {
  facility_game_id: order_by
  global_category_id: order_by
  id: order_by
}

# aggregate stddev_pop on columns
type facility_game_global_category_stddev_pop_fields {
  facility_game_id: Float
  global_category_id: Float
  id: Float
}

# order by stddev_pop() on columns of table "facility_game_global_category"
input facility_game_global_category_stddev_pop_order_by {
  facility_game_id: order_by
  global_category_id: order_by
  id: order_by
}

# aggregate stddev_samp on columns
type facility_game_global_category_stddev_samp_fields {
  facility_game_id: Float
  global_category_id: Float
  id: Float
}

# order by stddev_samp() on columns of table "facility_game_global_category"
input facility_game_global_category_stddev_samp_order_by {
  facility_game_id: order_by
  global_category_id: order_by
  id: order_by
}

# aggregate sum on columns
type facility_game_global_category_sum_fields {
  facility_game_id: Int
  global_category_id: Int
  id: Int
}

# order by sum() on columns of table "facility_game_global_category"
input facility_game_global_category_sum_order_by {
  facility_game_id: order_by
  global_category_id: order_by
  id: order_by
}

# update columns of table "facility_game_global_category"
enum facility_game_global_category_update_column {
  # column name
  created_at

  # column name
  facility_game_id

  # column name
  global_category_id

  # column name
  id

  # column name
  updated_at
}

# aggregate var_pop on columns
type facility_game_global_category_var_pop_fields {
  facility_game_id: Float
  global_category_id: Float
  id: Float
}

# order by var_pop() on columns of table "facility_game_global_category"
input facility_game_global_category_var_pop_order_by {
  facility_game_id: order_by
  global_category_id: order_by
  id: order_by
}

# aggregate var_samp on columns
type facility_game_global_category_var_samp_fields {
  facility_game_id: Float
  global_category_id: Float
  id: Float
}

# order by var_samp() on columns of table "facility_game_global_category"
input facility_game_global_category_var_samp_order_by {
  facility_game_id: order_by
  global_category_id: order_by
  id: order_by
}

# aggregate variance on columns
type facility_game_global_category_variance_fields {
  facility_game_id: Float
  global_category_id: Float
  id: Float
}

# order by variance() on columns of table "facility_game_global_category"
input facility_game_global_category_variance_order_by {
  facility_game_id: order_by
  global_category_id: order_by
  id: order_by
}

# input type for incrementing integer column in table "facility_game"
input facility_game_inc_input {
  facility_game_columns_id: Int
  id: Int
  recurring_facility_game_id: Int
}

# input type for inserting data into table "facility_game"
input facility_game_insert_input {
  created_at: timestamptz
  datetime: timestamptz
  facility_game_categories: facility_game_category_arr_rel_insert_input
  facility_game_column: facility_game_columns_obj_rel_insert_input
  facility_game_columns_id: Int
  facility_game_global_categories: facility_game_global_category_arr_rel_insert_input
  facility_game_reservations: facility_game_reservation_arr_rel_insert_input
  id: Int
  recurring_facility_game: recurring_facility_game_obj_rel_insert_input
  recurring_facility_game_id: Int
  updated_at: timestamptz
}

# aggregate max on columns
type facility_game_max_fields {
  created_at: timestamptz
  datetime: timestamptz
  facility_game_columns_id: Int
  id: Int
  recurring_facility_game_id: Int
  updated_at: timestamptz
}

# order by max() on columns of table "facility_game"
input facility_game_max_order_by {
  created_at: order_by
  datetime: order_by
  facility_game_columns_id: order_by
  id: order_by
  recurring_facility_game_id: order_by
  updated_at: order_by
}

# aggregate min on columns
type facility_game_min_fields {
  created_at: timestamptz
  datetime: timestamptz
  facility_game_columns_id: Int
  id: Int
  recurring_facility_game_id: Int
  updated_at: timestamptz
}

# order by min() on columns of table "facility_game"
input facility_game_min_order_by {
  created_at: order_by
  datetime: order_by
  facility_game_columns_id: order_by
  id: order_by
  recurring_facility_game_id: order_by
  updated_at: order_by
}

# response of any mutation on the table "facility_game"
type facility_game_mutation_response {
  # number of affected rows by the mutation
  affected_rows: Int!

  # data of the affected rows by the mutation
  returning: [facility_game!]!
}

# input type for inserting object relation for remote table "facility_game"
input facility_game_obj_rel_insert_input {
  data: facility_game_insert_input!
  on_conflict: facility_game_on_conflict
}

# on conflict condition type for table "facility_game"
input facility_game_on_conflict {
  constraint: facility_game_constraint!
  update_columns: [facility_game_update_column!]!
  where: facility_game_bool_exp
}

# ordering options when selecting data from "facility_game"
input facility_game_order_by {
  created_at: order_by
  datetime: order_by
  facility_game_categories_aggregate: facility_game_category_aggregate_order_by
  facility_game_column: facility_game_columns_order_by
  facility_game_columns_id: order_by
  facility_game_global_categories_aggregate: facility_game_global_category_aggregate_order_by
  facility_game_reservations_aggregate: facility_game_reservation_aggregate_order_by
  id: order_by
  recurring_facility_game: recurring_facility_game_order_by
  recurring_facility_game_id: order_by
  updated_at: order_by
}

# primary key columns input for table: "facility_game"
input facility_game_pk_columns_input {
  id: Int!
}

# A player reservation for a singular facility game
#
#
# columns and relationships of "facility_game_reservation"
#
type facility_game_reservation {
  created_at: timestamptz!

  # An object relationship
  facility_game: facility_game!
  facility_game_id: Int!
  id: Int!

  # An object relationship
  player: player!
  player_id: Int!
  updated_at: timestamptz!
}

# aggregated selection of "facility_game_reservation"
type facility_game_reservation_aggregate {
  aggregate: facility_game_reservation_aggregate_fields
  nodes: [facility_game_reservation!]!
}

# aggregate fields of "facility_game_reservation"
type facility_game_reservation_aggregate_fields {
  avg: facility_game_reservation_avg_fields
  count(columns: [facility_game_reservation_select_column!], distinct: Boolean): Int
  max: facility_game_reservation_max_fields
  min: facility_game_reservation_min_fields
  stddev: facility_game_reservation_stddev_fields
  stddev_pop: facility_game_reservation_stddev_pop_fields
  stddev_samp: facility_game_reservation_stddev_samp_fields
  sum: facility_game_reservation_sum_fields
  var_pop: facility_game_reservation_var_pop_fields
  var_samp: facility_game_reservation_var_samp_fields
  variance: facility_game_reservation_variance_fields
}

# order by aggregate values of table "facility_game_reservation"
input facility_game_reservation_aggregate_order_by {
  avg: facility_game_reservation_avg_order_by
  count: order_by
  max: facility_game_reservation_max_order_by
  min: facility_game_reservation_min_order_by
  stddev: facility_game_reservation_stddev_order_by
  stddev_pop: facility_game_reservation_stddev_pop_order_by
  stddev_samp: facility_game_reservation_stddev_samp_order_by
  sum: facility_game_reservation_sum_order_by
  var_pop: facility_game_reservation_var_pop_order_by
  var_samp: facility_game_reservation_var_samp_order_by
  variance: facility_game_reservation_variance_order_by
}

# input type for inserting array relation for remote table "facility_game_reservation"
input facility_game_reservation_arr_rel_insert_input {
  data: [facility_game_reservation_insert_input!]!
  on_conflict: facility_game_reservation_on_conflict
}

# aggregate avg on columns
type facility_game_reservation_avg_fields {
  facility_game_id: Float
  id: Float
  player_id: Float
}

# order by avg() on columns of table "facility_game_reservation"
input facility_game_reservation_avg_order_by {
  facility_game_id: order_by
  id: order_by
  player_id: order_by
}

# Boolean expression to filter rows from the table "facility_game_reservation". All fields are combined with a logical 'AND'.
input facility_game_reservation_bool_exp {
  _and: [facility_game_reservation_bool_exp]
  _not: facility_game_reservation_bool_exp
  _or: [facility_game_reservation_bool_exp]
  created_at: timestamptz_comparison_exp
  facility_game: facility_game_bool_exp
  facility_game_id: Int_comparison_exp
  id: Int_comparison_exp
  player: player_bool_exp
  player_id: Int_comparison_exp
  updated_at: timestamptz_comparison_exp
}

# unique or primary key constraints on table "facility_game_reservation"
enum facility_game_reservation_constraint {
  # unique or primary key constraint
  facility_game_reservation_pkey

  # unique or primary key constraint
  unique_players_per_facility_game
}

# input type for incrementing integer column in table "facility_game_reservation"
input facility_game_reservation_inc_input {
  facility_game_id: Int
  id: Int
  player_id: Int
}

# input type for inserting data into table "facility_game_reservation"
input facility_game_reservation_insert_input {
  created_at: timestamptz
  facility_game: facility_game_obj_rel_insert_input
  facility_game_id: Int
  id: Int
  player: player_obj_rel_insert_input
  player_id: Int
  updated_at: timestamptz
}

# aggregate max on columns
type facility_game_reservation_max_fields {
  created_at: timestamptz
  facility_game_id: Int
  id: Int
  player_id: Int
  updated_at: timestamptz
}

# order by max() on columns of table "facility_game_reservation"
input facility_game_reservation_max_order_by {
  created_at: order_by
  facility_game_id: order_by
  id: order_by
  player_id: order_by
  updated_at: order_by
}

# aggregate min on columns
type facility_game_reservation_min_fields {
  created_at: timestamptz
  facility_game_id: Int
  id: Int
  player_id: Int
  updated_at: timestamptz
}

# order by min() on columns of table "facility_game_reservation"
input facility_game_reservation_min_order_by {
  created_at: order_by
  facility_game_id: order_by
  id: order_by
  player_id: order_by
  updated_at: order_by
}

# response of any mutation on the table "facility_game_reservation"
type facility_game_reservation_mutation_response {
  # number of affected rows by the mutation
  affected_rows: Int!

  # data of the affected rows by the mutation
  returning: [facility_game_reservation!]!
}

# input type for inserting object relation for remote table "facility_game_reservation"
input facility_game_reservation_obj_rel_insert_input {
  data: facility_game_reservation_insert_input!
  on_conflict: facility_game_reservation_on_conflict
}

# on conflict condition type for table "facility_game_reservation"
input facility_game_reservation_on_conflict {
  constraint: facility_game_reservation_constraint!
  update_columns: [facility_game_reservation_update_column!]!
  where: facility_game_reservation_bool_exp
}

# ordering options when selecting data from "facility_game_reservation"
input facility_game_reservation_order_by {
  created_at: order_by
  facility_game: facility_game_order_by
  facility_game_id: order_by
  id: order_by
  player: player_order_by
  player_id: order_by
  updated_at: order_by
}

# primary key columns input for table: "facility_game_reservation"
input facility_game_reservation_pk_columns_input {
  id: Int!
}

# select columns of table "facility_game_reservation"
enum facility_game_reservation_select_column {
  # column name
  created_at

  # column name
  facility_game_id

  # column name
  id

  # column name
  player_id

  # column name
  updated_at
}

# input type for updating data in table "facility_game_reservation"
input facility_game_reservation_set_input {
  created_at: timestamptz
  facility_game_id: Int
  id: Int
  player_id: Int
  updated_at: timestamptz
}

# aggregate stddev on columns
type facility_game_reservation_stddev_fields {
  facility_game_id: Float
  id: Float
  player_id: Float
}

# order by stddev() on columns of table "facility_game_reservation"
input facility_game_reservation_stddev_order_by {
  facility_game_id: order_by
  id: order_by
  player_id: order_by
}

# aggregate stddev_pop on columns
type facility_game_reservation_stddev_pop_fields {
  facility_game_id: Float
  id: Float
  player_id: Float
}

# order by stddev_pop() on columns of table "facility_game_reservation"
input facility_game_reservation_stddev_pop_order_by {
  facility_game_id: order_by
  id: order_by
  player_id: order_by
}

# aggregate stddev_samp on columns
type facility_game_reservation_stddev_samp_fields {
  facility_game_id: Float
  id: Float
  player_id: Float
}

# order by stddev_samp() on columns of table "facility_game_reservation"
input facility_game_reservation_stddev_samp_order_by {
  facility_game_id: order_by
  id: order_by
  player_id: order_by
}

# aggregate sum on columns
type facility_game_reservation_sum_fields {
  facility_game_id: Int
  id: Int
  player_id: Int
}

# order by sum() on columns of table "facility_game_reservation"
input facility_game_reservation_sum_order_by {
  facility_game_id: order_by
  id: order_by
  player_id: order_by
}

# update columns of table "facility_game_reservation"
enum facility_game_reservation_update_column {
  # column name
  created_at

  # column name
  facility_game_id

  # column name
  id

  # column name
  player_id

  # column name
  updated_at
}

# aggregate var_pop on columns
type facility_game_reservation_var_pop_fields {
  facility_game_id: Float
  id: Float
  player_id: Float
}

# order by var_pop() on columns of table "facility_game_reservation"
input facility_game_reservation_var_pop_order_by {
  facility_game_id: order_by
  id: order_by
  player_id: order_by
}

# aggregate var_samp on columns
type facility_game_reservation_var_samp_fields {
  facility_game_id: Float
  id: Float
  player_id: Float
}

# order by var_samp() on columns of table "facility_game_reservation"
input facility_game_reservation_var_samp_order_by {
  facility_game_id: order_by
  id: order_by
  player_id: order_by
}

# aggregate variance on columns
type facility_game_reservation_variance_fields {
  facility_game_id: Float
  id: Float
  player_id: Float
}

# order by variance() on columns of table "facility_game_reservation"
input facility_game_reservation_variance_order_by {
  facility_game_id: order_by
  id: order_by
  player_id: order_by
}

# select columns of table "facility_game"
enum facility_game_select_column {
  # column name
  created_at

  # column name
  datetime

  # column name
  facility_game_columns_id

  # column name
  id

  # column name
  recurring_facility_game_id

  # column name
  updated_at
}

# input type for updating data in table "facility_game"
input facility_game_set_input {
  created_at: timestamptz
  datetime: timestamptz
  facility_game_columns_id: Int
  id: Int
  recurring_facility_game_id: Int
  updated_at: timestamptz
}

# aggregate stddev on columns
type facility_game_stddev_fields {
  facility_game_columns_id: Float
  id: Float
  recurring_facility_game_id: Float
}

# order by stddev() on columns of table "facility_game"
input facility_game_stddev_order_by {
  facility_game_columns_id: order_by
  id: order_by
  recurring_facility_game_id: order_by
}

# aggregate stddev_pop on columns
type facility_game_stddev_pop_fields {
  facility_game_columns_id: Float
  id: Float
  recurring_facility_game_id: Float
}

# order by stddev_pop() on columns of table "facility_game"
input facility_game_stddev_pop_order_by {
  facility_game_columns_id: order_by
  id: order_by
  recurring_facility_game_id: order_by
}

# aggregate stddev_samp on columns
type facility_game_stddev_samp_fields {
  facility_game_columns_id: Float
  id: Float
  recurring_facility_game_id: Float
}

# order by stddev_samp() on columns of table "facility_game"
input facility_game_stddev_samp_order_by {
  facility_game_columns_id: order_by
  id: order_by
  recurring_facility_game_id: order_by
}

# aggregate sum on columns
type facility_game_sum_fields {
  facility_game_columns_id: Int
  id: Int
  recurring_facility_game_id: Int
}

# order by sum() on columns of table "facility_game"
input facility_game_sum_order_by {
  facility_game_columns_id: order_by
  id: order_by
  recurring_facility_game_id: order_by
}

# update columns of table "facility_game"
enum facility_game_update_column {
  # column name
  created_at

  # column name
  datetime

  # column name
  facility_game_columns_id

  # column name
  id

  # column name
  recurring_facility_game_id

  # column name
  updated_at
}

# aggregate var_pop on columns
type facility_game_var_pop_fields {
  facility_game_columns_id: Float
  id: Float
  recurring_facility_game_id: Float
}

# order by var_pop() on columns of table "facility_game"
input facility_game_var_pop_order_by {
  facility_game_columns_id: order_by
  id: order_by
  recurring_facility_game_id: order_by
}

# aggregate var_samp on columns
type facility_game_var_samp_fields {
  facility_game_columns_id: Float
  id: Float
  recurring_facility_game_id: Float
}

# order by var_samp() on columns of table "facility_game"
input facility_game_var_samp_order_by {
  facility_game_columns_id: order_by
  id: order_by
  recurring_facility_game_id: order_by
}

# aggregate variance on columns
type facility_game_variance_fields {
  facility_game_columns_id: Float
  id: Float
  recurring_facility_game_id: Float
}

# order by variance() on columns of table "facility_game"
input facility_game_variance_order_by {
  facility_game_columns_id: order_by
  id: order_by
  recurring_facility_game_id: order_by
}

# input type for incrementing integer column in table "facility"
input facility_inc_input {
  bank_account_number: Int
  bank_routing_number: Int
  id: Int
  region_id: Int
  service_fee_percent_inside_price: numeric
  service_fee_percent_outside_price: numeric
  service_fee_trigger_price: numeric
  subregion_id: Int
  tax_id: Int
  trigger_price_service_fee_percent_inside_price: numeric
  trigger_price_service_fee_percent_outside_price: numeric
}

# input type for inserting data into table "facility"
input facility_insert_input {
  about_facility: String
  bank_account_number: Int
  bank_routing_number: Int
  cleats_allowed: Boolean
  company_legal_name: String
  created_at: timestamptz
  facility_users: facility_user_arr_rel_insert_input
  id: Int
  locations: location_arr_rel_insert_input
  name: String
  owner_email: String
  phone: String
  region: region_obj_rel_insert_input
  region_id: Int
  service_fee_percent_inside_price: numeric
  service_fee_percent_outside_price: numeric
  service_fee_trigger_price: numeric
  stripe_account_id: String
  subregion: subregion_obj_rel_insert_input
  subregion_id: Int
  tax_id: Int
  trigger_price_service_fee_percent_inside_price: numeric
  trigger_price_service_fee_percent_outside_price: numeric
  updated_at: timestamptz
  website_url: String
}

# aggregate max on columns
type facility_max_fields {
  about_facility: String
  bank_account_number: Int
  bank_routing_number: Int
  company_legal_name: String
  created_at: timestamptz
  id: Int
  name: String
  owner_email: String
  phone: String
  region_id: Int
  service_fee_percent_inside_price: numeric
  service_fee_percent_outside_price: numeric
  service_fee_trigger_price: numeric
  stripe_account_id: String
  subregion_id: Int
  tax_id: Int
  trigger_price_service_fee_percent_inside_price: numeric
  trigger_price_service_fee_percent_outside_price: numeric
  updated_at: timestamptz
  website_url: String
}

# order by max() on columns of table "facility"
input facility_max_order_by {
  about_facility: order_by
  bank_account_number: order_by
  bank_routing_number: order_by
  company_legal_name: order_by
  created_at: order_by
  id: order_by
  name: order_by
  owner_email: order_by
  phone: order_by
  region_id: order_by
  service_fee_percent_inside_price: order_by
  service_fee_percent_outside_price: order_by
  service_fee_trigger_price: order_by
  stripe_account_id: order_by
  subregion_id: order_by
  tax_id: order_by
  trigger_price_service_fee_percent_inside_price: order_by
  trigger_price_service_fee_percent_outside_price: order_by
  updated_at: order_by
  website_url: order_by
}

# aggregate min on columns
type facility_min_fields {
  about_facility: String
  bank_account_number: Int
  bank_routing_number: Int
  company_legal_name: String
  created_at: timestamptz
  id: Int
  name: String
  owner_email: String
  phone: String
  region_id: Int
  service_fee_percent_inside_price: numeric
  service_fee_percent_outside_price: numeric
  service_fee_trigger_price: numeric
  stripe_account_id: String
  subregion_id: Int
  tax_id: Int
  trigger_price_service_fee_percent_inside_price: numeric
  trigger_price_service_fee_percent_outside_price: numeric
  updated_at: timestamptz
  website_url: String
}

# order by min() on columns of table "facility"
input facility_min_order_by {
  about_facility: order_by
  bank_account_number: order_by
  bank_routing_number: order_by
  company_legal_name: order_by
  created_at: order_by
  id: order_by
  name: order_by
  owner_email: order_by
  phone: order_by
  region_id: order_by
  service_fee_percent_inside_price: order_by
  service_fee_percent_outside_price: order_by
  service_fee_trigger_price: order_by
  stripe_account_id: order_by
  subregion_id: order_by
  tax_id: order_by
  trigger_price_service_fee_percent_inside_price: order_by
  trigger_price_service_fee_percent_outside_price: order_by
  updated_at: order_by
  website_url: order_by
}

# response of any mutation on the table "facility"
type facility_mutation_response {
  # number of affected rows by the mutation
  affected_rows: Int!

  # data of the affected rows by the mutation
  returning: [facility!]!
}

# input type for inserting object relation for remote table "facility"
input facility_obj_rel_insert_input {
  data: facility_insert_input!
  on_conflict: facility_on_conflict
}

# on conflict condition type for table "facility"
input facility_on_conflict {
  constraint: facility_constraint!
  update_columns: [facility_update_column!]!
  where: facility_bool_exp
}

# ordering options when selecting data from "facility"
input facility_order_by {
  about_facility: order_by
  bank_account_number: order_by
  bank_routing_number: order_by
  cleats_allowed: order_by
  company_legal_name: order_by
  created_at: order_by
  facility_users_aggregate: facility_user_aggregate_order_by
  id: order_by
  locations_aggregate: location_aggregate_order_by
  name: order_by
  owner_email: order_by
  phone: order_by
  region: region_order_by
  region_id: order_by
  service_fee_percent_inside_price: order_by
  service_fee_percent_outside_price: order_by
  service_fee_trigger_price: order_by
  stripe_account_id: order_by
  subregion: subregion_order_by
  subregion_id: order_by
  tax_id: order_by
  trigger_price_service_fee_percent_inside_price: order_by
  trigger_price_service_fee_percent_outside_price: order_by
  updated_at: order_by
  website_url: order_by
}

# primary key columns input for table: "facility"
input facility_pk_columns_input {
  id: Int!
}

# select columns of table "facility"
enum facility_select_column {
  # column name
  about_facility

  # column name
  bank_account_number

  # column name
  bank_routing_number

  # column name
  cleats_allowed

  # column name
  company_legal_name

  # column name
  created_at

  # column name
  id

  # column name
  name

  # column name
  owner_email

  # column name
  phone

  # column name
  region_id

  # column name
  service_fee_percent_inside_price

  # column name
  service_fee_percent_outside_price

  # column name
  service_fee_trigger_price

  # column name
  stripe_account_id

  # column name
  subregion_id

  # column name
  tax_id

  # column name
  trigger_price_service_fee_percent_inside_price

  # column name
  trigger_price_service_fee_percent_outside_price

  # column name
  updated_at

  # column name
  website_url
}

# input type for updating data in table "facility"
input facility_set_input {
  about_facility: String
  bank_account_number: Int
  bank_routing_number: Int
  cleats_allowed: Boolean
  company_legal_name: String
  created_at: timestamptz
  id: Int
  name: String
  owner_email: String
  phone: String
  region_id: Int
  service_fee_percent_inside_price: numeric
  service_fee_percent_outside_price: numeric
  service_fee_trigger_price: numeric
  stripe_account_id: String
  subregion_id: Int
  tax_id: Int
  trigger_price_service_fee_percent_inside_price: numeric
  trigger_price_service_fee_percent_outside_price: numeric
  updated_at: timestamptz
  website_url: String
}

# aggregate stddev on columns
type facility_stddev_fields {
  bank_account_number: Float
  bank_routing_number: Float
  id: Float
  region_id: Float
  service_fee_percent_inside_price: Float
  service_fee_percent_outside_price: Float
  service_fee_trigger_price: Float
  subregion_id: Float
  tax_id: Float
  trigger_price_service_fee_percent_inside_price: Float
  trigger_price_service_fee_percent_outside_price: Float
}

# order by stddev() on columns of table "facility"
input facility_stddev_order_by {
  bank_account_number: order_by
  bank_routing_number: order_by
  id: order_by
  region_id: order_by
  service_fee_percent_inside_price: order_by
  service_fee_percent_outside_price: order_by
  service_fee_trigger_price: order_by
  subregion_id: order_by
  tax_id: order_by
  trigger_price_service_fee_percent_inside_price: order_by
  trigger_price_service_fee_percent_outside_price: order_by
}

# aggregate stddev_pop on columns
type facility_stddev_pop_fields {
  bank_account_number: Float
  bank_routing_number: Float
  id: Float
  region_id: Float
  service_fee_percent_inside_price: Float
  service_fee_percent_outside_price: Float
  service_fee_trigger_price: Float
  subregion_id: Float
  tax_id: Float
  trigger_price_service_fee_percent_inside_price: Float
  trigger_price_service_fee_percent_outside_price: Float
}

# order by stddev_pop() on columns of table "facility"
input facility_stddev_pop_order_by {
  bank_account_number: order_by
  bank_routing_number: order_by
  id: order_by
  region_id: order_by
  service_fee_percent_inside_price: order_by
  service_fee_percent_outside_price: order_by
  service_fee_trigger_price: order_by
  subregion_id: order_by
  tax_id: order_by
  trigger_price_service_fee_percent_inside_price: order_by
  trigger_price_service_fee_percent_outside_price: order_by
}

# aggregate stddev_samp on columns
type facility_stddev_samp_fields {
  bank_account_number: Float
  bank_routing_number: Float
  id: Float
  region_id: Float
  service_fee_percent_inside_price: Float
  service_fee_percent_outside_price: Float
  service_fee_trigger_price: Float
  subregion_id: Float
  tax_id: Float
  trigger_price_service_fee_percent_inside_price: Float
  trigger_price_service_fee_percent_outside_price: Float
}

# order by stddev_samp() on columns of table "facility"
input facility_stddev_samp_order_by {
  bank_account_number: order_by
  bank_routing_number: order_by
  id: order_by
  region_id: order_by
  service_fee_percent_inside_price: order_by
  service_fee_percent_outside_price: order_by
  service_fee_trigger_price: order_by
  subregion_id: order_by
  tax_id: order_by
  trigger_price_service_fee_percent_inside_price: order_by
  trigger_price_service_fee_percent_outside_price: order_by
}

# aggregate sum on columns
type facility_sum_fields {
  bank_account_number: Int
  bank_routing_number: Int
  id: Int
  region_id: Int
  service_fee_percent_inside_price: numeric
  service_fee_percent_outside_price: numeric
  service_fee_trigger_price: numeric
  subregion_id: Int
  tax_id: Int
  trigger_price_service_fee_percent_inside_price: numeric
  trigger_price_service_fee_percent_outside_price: numeric
}

# order by sum() on columns of table "facility"
input facility_sum_order_by {
  bank_account_number: order_by
  bank_routing_number: order_by
  id: order_by
  region_id: order_by
  service_fee_percent_inside_price: order_by
  service_fee_percent_outside_price: order_by
  service_fee_trigger_price: order_by
  subregion_id: order_by
  tax_id: order_by
  trigger_price_service_fee_percent_inside_price: order_by
  trigger_price_service_fee_percent_outside_price: order_by
}

# update columns of table "facility"
enum facility_update_column {
  # column name
  about_facility

  # column name
  bank_account_number

  # column name
  bank_routing_number

  # column name
  cleats_allowed

  # column name
  company_legal_name

  # column name
  created_at

  # column name
  id

  # column name
  name

  # column name
  owner_email

  # column name
  phone

  # column name
  region_id

  # column name
  service_fee_percent_inside_price

  # column name
  service_fee_percent_outside_price

  # column name
  service_fee_trigger_price

  # column name
  stripe_account_id

  # column name
  subregion_id

  # column name
  tax_id

  # column name
  trigger_price_service_fee_percent_inside_price

  # column name
  trigger_price_service_fee_percent_outside_price

  # column name
  updated_at

  # column name
  website_url
}

# An employee of a soccer facility
#
#
# columns and relationships of "facility_user"
#
type facility_user {
  created_at: timestamptz!
  email: String!

  # An object relationship
  facility: facility!
  facility_id: Int!

  # An object relationship
  facility_user_role: facility_user_role!
  id: Int!
  password: String!
  role: facility_user_role_enum!
  updated_at: timestamptz!
}

# aggregated selection of "facility_user"
type facility_user_aggregate {
  aggregate: facility_user_aggregate_fields
  nodes: [facility_user!]!
}

# aggregate fields of "facility_user"
type facility_user_aggregate_fields {
  avg: facility_user_avg_fields
  count(columns: [facility_user_select_column!], distinct: Boolean): Int
  max: facility_user_max_fields
  min: facility_user_min_fields
  stddev: facility_user_stddev_fields
  stddev_pop: facility_user_stddev_pop_fields
  stddev_samp: facility_user_stddev_samp_fields
  sum: facility_user_sum_fields
  var_pop: facility_user_var_pop_fields
  var_samp: facility_user_var_samp_fields
  variance: facility_user_variance_fields
}

# order by aggregate values of table "facility_user"
input facility_user_aggregate_order_by {
  avg: facility_user_avg_order_by
  count: order_by
  max: facility_user_max_order_by
  min: facility_user_min_order_by
  stddev: facility_user_stddev_order_by
  stddev_pop: facility_user_stddev_pop_order_by
  stddev_samp: facility_user_stddev_samp_order_by
  sum: facility_user_sum_order_by
  var_pop: facility_user_var_pop_order_by
  var_samp: facility_user_var_samp_order_by
  variance: facility_user_variance_order_by
}

# input type for inserting array relation for remote table "facility_user"
input facility_user_arr_rel_insert_input {
  data: [facility_user_insert_input!]!
  on_conflict: facility_user_on_conflict
}

# aggregate avg on columns
type facility_user_avg_fields {
  facility_id: Float
  id: Float
}

# order by avg() on columns of table "facility_user"
input facility_user_avg_order_by {
  facility_id: order_by
  id: order_by
}

# Boolean expression to filter rows from the table "facility_user". All fields are combined with a logical 'AND'.
input facility_user_bool_exp {
  _and: [facility_user_bool_exp]
  _not: facility_user_bool_exp
  _or: [facility_user_bool_exp]
  created_at: timestamptz_comparison_exp
  email: String_comparison_exp
  facility: facility_bool_exp
  facility_id: Int_comparison_exp
  facility_user_role: facility_user_role_bool_exp
  id: Int_comparison_exp
  password: String_comparison_exp
  role: facility_user_role_enum_comparison_exp
  updated_at: timestamptz_comparison_exp
}

# unique or primary key constraints on table "facility_user"
enum facility_user_constraint {
  # unique or primary key constraint
  facility_user_pkey
}

# input type for incrementing integer column in table "facility_user"
input facility_user_inc_input {
  facility_id: Int
  id: Int
}

# input type for inserting data into table "facility_user"
input facility_user_insert_input {
  created_at: timestamptz
  email: String
  facility: facility_obj_rel_insert_input
  facility_id: Int
  facility_user_role: facility_user_role_obj_rel_insert_input
  id: Int
  password: String
  role: facility_user_role_enum
  updated_at: timestamptz
}

# aggregate max on columns
type facility_user_max_fields {
  created_at: timestamptz
  email: String
  facility_id: Int
  id: Int
  password: String
  updated_at: timestamptz
}

# order by max() on columns of table "facility_user"
input facility_user_max_order_by {
  created_at: order_by
  email: order_by
  facility_id: order_by
  id: order_by
  password: order_by
  updated_at: order_by
}

# aggregate min on columns
type facility_user_min_fields {
  created_at: timestamptz
  email: String
  facility_id: Int
  id: Int
  password: String
  updated_at: timestamptz
}

# order by min() on columns of table "facility_user"
input facility_user_min_order_by {
  created_at: order_by
  email: order_by
  facility_id: order_by
  id: order_by
  password: order_by
  updated_at: order_by
}

# response of any mutation on the table "facility_user"
type facility_user_mutation_response {
  # number of affected rows by the mutation
  affected_rows: Int!

  # data of the affected rows by the mutation
  returning: [facility_user!]!
}

# input type for inserting object relation for remote table "facility_user"
input facility_user_obj_rel_insert_input {
  data: facility_user_insert_input!
  on_conflict: facility_user_on_conflict
}

# on conflict condition type for table "facility_user"
input facility_user_on_conflict {
  constraint: facility_user_constraint!
  update_columns: [facility_user_update_column!]!
  where: facility_user_bool_exp
}

# ordering options when selecting data from "facility_user"
input facility_user_order_by {
  created_at: order_by
  email: order_by
  facility: facility_order_by
  facility_id: order_by
  facility_user_role: facility_user_role_order_by
  id: order_by
  password: order_by
  role: order_by
  updated_at: order_by
}

# primary key columns input for table: "facility_user"
input facility_user_pk_columns_input {
  id: Int!
}

# columns and relationships of "facility_user_role"
type facility_user_role {
  value: String!
}

# aggregated selection of "facility_user_role"
type facility_user_role_aggregate {
  aggregate: facility_user_role_aggregate_fields
  nodes: [facility_user_role!]!
}

# aggregate fields of "facility_user_role"
type facility_user_role_aggregate_fields {
  count(columns: [facility_user_role_select_column!], distinct: Boolean): Int
  max: facility_user_role_max_fields
  min: facility_user_role_min_fields
}

# order by aggregate values of table "facility_user_role"
input facility_user_role_aggregate_order_by {
  count: order_by
  max: facility_user_role_max_order_by
  min: facility_user_role_min_order_by
}

# input type for inserting array relation for remote table "facility_user_role"
input facility_user_role_arr_rel_insert_input {
  data: [facility_user_role_insert_input!]!
  on_conflict: facility_user_role_on_conflict
}

# Boolean expression to filter rows from the table "facility_user_role". All fields are combined with a logical 'AND'.
input facility_user_role_bool_exp {
  _and: [facility_user_role_bool_exp]
  _not: facility_user_role_bool_exp
  _or: [facility_user_role_bool_exp]
  value: String_comparison_exp
}

# unique or primary key constraints on table "facility_user_role"
enum facility_user_role_constraint {
  # unique or primary key constraint
  facility_user_role_pkey
}

enum facility_user_role_enum {
  EMPLOYEE
  MANAGER
  OWNER
}

# expression to compare columns of type facility_user_role_enum. All fields are combined with logical 'AND'.
input facility_user_role_enum_comparison_exp {
  _eq: facility_user_role_enum
  _in: [facility_user_role_enum!]
  _is_null: Boolean
  _neq: facility_user_role_enum
  _nin: [facility_user_role_enum!]
}

# input type for inserting data into table "facility_user_role"
input facility_user_role_insert_input {
  value: String
}

# aggregate max on columns
type facility_user_role_max_fields {
  value: String
}

# order by max() on columns of table "facility_user_role"
input facility_user_role_max_order_by {
  value: order_by
}

# aggregate min on columns
type facility_user_role_min_fields {
  value: String
}

# order by min() on columns of table "facility_user_role"
input facility_user_role_min_order_by {
  value: order_by
}

# response of any mutation on the table "facility_user_role"
type facility_user_role_mutation_response {
  # number of affected rows by the mutation
  affected_rows: Int!

  # data of the affected rows by the mutation
  returning: [facility_user_role!]!
}

# input type for inserting object relation for remote table "facility_user_role"
input facility_user_role_obj_rel_insert_input {
  data: facility_user_role_insert_input!
  on_conflict: facility_user_role_on_conflict
}

# on conflict condition type for table "facility_user_role"
input facility_user_role_on_conflict {
  constraint: facility_user_role_constraint!
  update_columns: [facility_user_role_update_column!]!
  where: facility_user_role_bool_exp
}

# ordering options when selecting data from "facility_user_role"
input facility_user_role_order_by {
  value: order_by
}

# primary key columns input for table: "facility_user_role"
input facility_user_role_pk_columns_input {
  value: String!
}

# select columns of table "facility_user_role"
enum facility_user_role_select_column {
  # column name
  value
}

# input type for updating data in table "facility_user_role"
input facility_user_role_set_input {
  value: String
}

# update columns of table "facility_user_role"
enum facility_user_role_update_column {
  # column name
  value
}

# select columns of table "facility_user"
enum facility_user_select_column {
  # column name
  created_at

  # column name
  email

  # column name
  facility_id

  # column name
  id

  # column name
  password

  # column name
  role

  # column name
  updated_at
}

# input type for updating data in table "facility_user"
input facility_user_set_input {
  created_at: timestamptz
  email: String
  facility_id: Int
  id: Int
  password: String
  role: facility_user_role_enum
  updated_at: timestamptz
}

# aggregate stddev on columns
type facility_user_stddev_fields {
  facility_id: Float
  id: Float
}

# order by stddev() on columns of table "facility_user"
input facility_user_stddev_order_by {
  facility_id: order_by
  id: order_by
}

# aggregate stddev_pop on columns
type facility_user_stddev_pop_fields {
  facility_id: Float
  id: Float
}

# order by stddev_pop() on columns of table "facility_user"
input facility_user_stddev_pop_order_by {
  facility_id: order_by
  id: order_by
}

# aggregate stddev_samp on columns
type facility_user_stddev_samp_fields {
  facility_id: Float
  id: Float
}

# order by stddev_samp() on columns of table "facility_user"
input facility_user_stddev_samp_order_by {
  facility_id: order_by
  id: order_by
}

# aggregate sum on columns
type facility_user_sum_fields {
  facility_id: Int
  id: Int
}

# order by sum() on columns of table "facility_user"
input facility_user_sum_order_by {
  facility_id: order_by
  id: order_by
}

# update columns of table "facility_user"
enum facility_user_update_column {
  # column name
  created_at

  # column name
  email

  # column name
  facility_id

  # column name
  id

  # column name
  password

  # column name
  role

  # column name
  updated_at
}

# aggregate var_pop on columns
type facility_user_var_pop_fields {
  facility_id: Float
  id: Float
}

# order by var_pop() on columns of table "facility_user"
input facility_user_var_pop_order_by {
  facility_id: order_by
  id: order_by
}

# aggregate var_samp on columns
type facility_user_var_samp_fields {
  facility_id: Float
  id: Float
}

# order by var_samp() on columns of table "facility_user"
input facility_user_var_samp_order_by {
  facility_id: order_by
  id: order_by
}

# aggregate variance on columns
type facility_user_variance_fields {
  facility_id: Float
  id: Float
}

# order by variance() on columns of table "facility_user"
input facility_user_variance_order_by {
  facility_id: order_by
  id: order_by
}

# aggregate var_pop on columns
type facility_var_pop_fields {
  bank_account_number: Float
  bank_routing_number: Float
  id: Float
  region_id: Float
  service_fee_percent_inside_price: Float
  service_fee_percent_outside_price: Float
  service_fee_trigger_price: Float
  subregion_id: Float
  tax_id: Float
  trigger_price_service_fee_percent_inside_price: Float
  trigger_price_service_fee_percent_outside_price: Float
}

# order by var_pop() on columns of table "facility"
input facility_var_pop_order_by {
  bank_account_number: order_by
  bank_routing_number: order_by
  id: order_by
  region_id: order_by
  service_fee_percent_inside_price: order_by
  service_fee_percent_outside_price: order_by
  service_fee_trigger_price: order_by
  subregion_id: order_by
  tax_id: order_by
  trigger_price_service_fee_percent_inside_price: order_by
  trigger_price_service_fee_percent_outside_price: order_by
}

# aggregate var_samp on columns
type facility_var_samp_fields {
  bank_account_number: Float
  bank_routing_number: Float
  id: Float
  region_id: Float
  service_fee_percent_inside_price: Float
  service_fee_percent_outside_price: Float
  service_fee_trigger_price: Float
  subregion_id: Float
  tax_id: Float
  trigger_price_service_fee_percent_inside_price: Float
  trigger_price_service_fee_percent_outside_price: Float
}

# order by var_samp() on columns of table "facility"
input facility_var_samp_order_by {
  bank_account_number: order_by
  bank_routing_number: order_by
  id: order_by
  region_id: order_by
  service_fee_percent_inside_price: order_by
  service_fee_percent_outside_price: order_by
  service_fee_trigger_price: order_by
  subregion_id: order_by
  tax_id: order_by
  trigger_price_service_fee_percent_inside_price: order_by
  trigger_price_service_fee_percent_outside_price: order_by
}

# aggregate variance on columns
type facility_variance_fields {
  bank_account_number: Float
  bank_routing_number: Float
  id: Float
  region_id: Float
  service_fee_percent_inside_price: Float
  service_fee_percent_outside_price: Float
  service_fee_trigger_price: Float
  subregion_id: Float
  tax_id: Float
  trigger_price_service_fee_percent_inside_price: Float
  trigger_price_service_fee_percent_outside_price: Float
}

# order by variance() on columns of table "facility"
input facility_variance_order_by {
  bank_account_number: order_by
  bank_routing_number: order_by
  id: order_by
  region_id: order_by
  service_fee_percent_inside_price: order_by
  service_fee_percent_outside_price: order_by
  service_fee_trigger_price: order_by
  subregion_id: order_by
  tax_id: order_by
  trigger_price_service_fee_percent_inside_price: order_by
  trigger_price_service_fee_percent_outside_price: order_by
}

# A soccer field at a facility location
#
#
# columns and relationships of "field"
#
type field {
  created_at: timestamptz!

  # An array relationship
  facility_game_columns(
    # distinct select on columns
    distinct_on: [facility_game_columns_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_game_columns_order_by!]

    # filter the rows returned
    where: facility_game_columns_bool_exp
  ): [facility_game_columns!]!

  # An aggregated array relationship
  facility_game_columns_aggregate(
    # distinct select on columns
    distinct_on: [facility_game_columns_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_game_columns_order_by!]

    # filter the rows returned
    where: facility_game_columns_bool_exp
  ): facility_game_columns_aggregate!

  # An object relationship
  field_type: field_type!
  field_type_id: Int!
  id: Int!

  # An object relationship
  location: location
  location_id: Int
  name: String

  # An array relationship
  open_game_columns(
    # distinct select on columns
    distinct_on: [open_game_columns_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [open_game_columns_order_by!]

    # filter the rows returned
    where: open_game_columns_bool_exp
  ): [open_game_columns!]!

  # An aggregated array relationship
  open_game_columns_aggregate(
    # distinct select on columns
    distinct_on: [open_game_columns_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [open_game_columns_order_by!]

    # filter the rows returned
    where: open_game_columns_bool_exp
  ): open_game_columns_aggregate!
  updated_at: timestamptz!
}

# aggregated selection of "field"
type field_aggregate {
  aggregate: field_aggregate_fields
  nodes: [field!]!
}

# aggregate fields of "field"
type field_aggregate_fields {
  avg: field_avg_fields
  count(columns: [field_select_column!], distinct: Boolean): Int
  max: field_max_fields
  min: field_min_fields
  stddev: field_stddev_fields
  stddev_pop: field_stddev_pop_fields
  stddev_samp: field_stddev_samp_fields
  sum: field_sum_fields
  var_pop: field_var_pop_fields
  var_samp: field_var_samp_fields
  variance: field_variance_fields
}

# order by aggregate values of table "field"
input field_aggregate_order_by {
  avg: field_avg_order_by
  count: order_by
  max: field_max_order_by
  min: field_min_order_by
  stddev: field_stddev_order_by
  stddev_pop: field_stddev_pop_order_by
  stddev_samp: field_stddev_samp_order_by
  sum: field_sum_order_by
  var_pop: field_var_pop_order_by
  var_samp: field_var_samp_order_by
  variance: field_variance_order_by
}

# input type for inserting array relation for remote table "field"
input field_arr_rel_insert_input {
  data: [field_insert_input!]!
  on_conflict: field_on_conflict
}

# aggregate avg on columns
type field_avg_fields {
  field_type_id: Float
  id: Float
  location_id: Float
}

# order by avg() on columns of table "field"
input field_avg_order_by {
  field_type_id: order_by
  id: order_by
  location_id: order_by
}

# Boolean expression to filter rows from the table "field". All fields are combined with a logical 'AND'.
input field_bool_exp {
  _and: [field_bool_exp]
  _not: field_bool_exp
  _or: [field_bool_exp]
  created_at: timestamptz_comparison_exp
  facility_game_columns: facility_game_columns_bool_exp
  field_type: field_type_bool_exp
  field_type_id: Int_comparison_exp
  id: Int_comparison_exp
  location: location_bool_exp
  location_id: Int_comparison_exp
  name: String_comparison_exp
  open_game_columns: open_game_columns_bool_exp
  updated_at: timestamptz_comparison_exp
}

# unique or primary key constraints on table "field"
enum field_constraint {
  # unique or primary key constraint
  field_pkey
}

# input type for incrementing integer column in table "field"
input field_inc_input {
  field_type_id: Int
  id: Int
  location_id: Int
}

# input type for inserting data into table "field"
input field_insert_input {
  created_at: timestamptz
  facility_game_columns: facility_game_columns_arr_rel_insert_input
  field_type: field_type_obj_rel_insert_input
  field_type_id: Int
  id: Int
  location: location_obj_rel_insert_input
  location_id: Int
  name: String
  open_game_columns: open_game_columns_arr_rel_insert_input
  updated_at: timestamptz
}

# aggregate max on columns
type field_max_fields {
  created_at: timestamptz
  field_type_id: Int
  id: Int
  location_id: Int
  name: String
  updated_at: timestamptz
}

# order by max() on columns of table "field"
input field_max_order_by {
  created_at: order_by
  field_type_id: order_by
  id: order_by
  location_id: order_by
  name: order_by
  updated_at: order_by
}

# aggregate min on columns
type field_min_fields {
  created_at: timestamptz
  field_type_id: Int
  id: Int
  location_id: Int
  name: String
  updated_at: timestamptz
}

# order by min() on columns of table "field"
input field_min_order_by {
  created_at: order_by
  field_type_id: order_by
  id: order_by
  location_id: order_by
  name: order_by
  updated_at: order_by
}

# response of any mutation on the table "field"
type field_mutation_response {
  # number of affected rows by the mutation
  affected_rows: Int!

  # data of the affected rows by the mutation
  returning: [field!]!
}

# input type for inserting object relation for remote table "field"
input field_obj_rel_insert_input {
  data: field_insert_input!
  on_conflict: field_on_conflict
}

# on conflict condition type for table "field"
input field_on_conflict {
  constraint: field_constraint!
  update_columns: [field_update_column!]!
  where: field_bool_exp
}

# ordering options when selecting data from "field"
input field_order_by {
  created_at: order_by
  facility_game_columns_aggregate: facility_game_columns_aggregate_order_by
  field_type: field_type_order_by
  field_type_id: order_by
  id: order_by
  location: location_order_by
  location_id: order_by
  name: order_by
  open_game_columns_aggregate: open_game_columns_aggregate_order_by
  updated_at: order_by
}

# primary key columns input for table: "field"
input field_pk_columns_input {
  id: Int!
}

# select columns of table "field"
enum field_select_column {
  # column name
  created_at

  # column name
  field_type_id

  # column name
  id

  # column name
  location_id

  # column name
  name

  # column name
  updated_at
}

# input type for updating data in table "field"
input field_set_input {
  created_at: timestamptz
  field_type_id: Int
  id: Int
  location_id: Int
  name: String
  updated_at: timestamptz
}

# aggregate stddev on columns
type field_stddev_fields {
  field_type_id: Float
  id: Float
  location_id: Float
}

# order by stddev() on columns of table "field"
input field_stddev_order_by {
  field_type_id: order_by
  id: order_by
  location_id: order_by
}

# aggregate stddev_pop on columns
type field_stddev_pop_fields {
  field_type_id: Float
  id: Float
  location_id: Float
}

# order by stddev_pop() on columns of table "field"
input field_stddev_pop_order_by {
  field_type_id: order_by
  id: order_by
  location_id: order_by
}

# aggregate stddev_samp on columns
type field_stddev_samp_fields {
  field_type_id: Float
  id: Float
  location_id: Float
}

# order by stddev_samp() on columns of table "field"
input field_stddev_samp_order_by {
  field_type_id: order_by
  id: order_by
  location_id: order_by
}

# aggregate sum on columns
type field_sum_fields {
  field_type_id: Int
  id: Int
  location_id: Int
}

# order by sum() on columns of table "field"
input field_sum_order_by {
  field_type_id: order_by
  id: order_by
  location_id: order_by
}

# Field type information with name and images for locations used when selecting
# fields to book games on the reservations platform
#
#
# columns and relationships of "field_type"
#
type field_type {
  created_at: timestamptz!

  # An array relationship
  fields(
    # distinct select on columns
    distinct_on: [field_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [field_order_by!]

    # filter the rows returned
    where: field_bool_exp
  ): [field!]!

  # An aggregated array relationship
  fields_aggregate(
    # distinct select on columns
    distinct_on: [field_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [field_order_by!]

    # filter the rows returned
    where: field_bool_exp
  ): field_aggregate!
  id: Int!
  image: String!

  # An object relationship
  location: location!
  location_id: Int!
  name: String!
  team_size: Int!
  updated_at: timestamptz!
}

# aggregated selection of "field_type"
type field_type_aggregate {
  aggregate: field_type_aggregate_fields
  nodes: [field_type!]!
}

# aggregate fields of "field_type"
type field_type_aggregate_fields {
  avg: field_type_avg_fields
  count(columns: [field_type_select_column!], distinct: Boolean): Int
  max: field_type_max_fields
  min: field_type_min_fields
  stddev: field_type_stddev_fields
  stddev_pop: field_type_stddev_pop_fields
  stddev_samp: field_type_stddev_samp_fields
  sum: field_type_sum_fields
  var_pop: field_type_var_pop_fields
  var_samp: field_type_var_samp_fields
  variance: field_type_variance_fields
}

# order by aggregate values of table "field_type"
input field_type_aggregate_order_by {
  avg: field_type_avg_order_by
  count: order_by
  max: field_type_max_order_by
  min: field_type_min_order_by
  stddev: field_type_stddev_order_by
  stddev_pop: field_type_stddev_pop_order_by
  stddev_samp: field_type_stddev_samp_order_by
  sum: field_type_sum_order_by
  var_pop: field_type_var_pop_order_by
  var_samp: field_type_var_samp_order_by
  variance: field_type_variance_order_by
}

# input type for inserting array relation for remote table "field_type"
input field_type_arr_rel_insert_input {
  data: [field_type_insert_input!]!
  on_conflict: field_type_on_conflict
}

# aggregate avg on columns
type field_type_avg_fields {
  id: Float
  location_id: Float
  team_size: Float
}

# order by avg() on columns of table "field_type"
input field_type_avg_order_by {
  id: order_by
  location_id: order_by
  team_size: order_by
}

# Boolean expression to filter rows from the table "field_type". All fields are combined with a logical 'AND'.
input field_type_bool_exp {
  _and: [field_type_bool_exp]
  _not: field_type_bool_exp
  _or: [field_type_bool_exp]
  created_at: timestamptz_comparison_exp
  fields: field_bool_exp
  id: Int_comparison_exp
  image: String_comparison_exp
  location: location_bool_exp
  location_id: Int_comparison_exp
  name: String_comparison_exp
  team_size: Int_comparison_exp
  updated_at: timestamptz_comparison_exp
}

# unique or primary key constraints on table "field_type"
enum field_type_constraint {
  # unique or primary key constraint
  field_type_pkey
}

# input type for incrementing integer column in table "field_type"
input field_type_inc_input {
  id: Int
  location_id: Int
  team_size: Int
}

# input type for inserting data into table "field_type"
input field_type_insert_input {
  created_at: timestamptz
  fields: field_arr_rel_insert_input
  id: Int
  image: String
  location: location_obj_rel_insert_input
  location_id: Int
  name: String
  team_size: Int
  updated_at: timestamptz
}

# aggregate max on columns
type field_type_max_fields {
  created_at: timestamptz
  id: Int
  image: String
  location_id: Int
  name: String
  team_size: Int
  updated_at: timestamptz
}

# order by max() on columns of table "field_type"
input field_type_max_order_by {
  created_at: order_by
  id: order_by
  image: order_by
  location_id: order_by
  name: order_by
  team_size: order_by
  updated_at: order_by
}

# aggregate min on columns
type field_type_min_fields {
  created_at: timestamptz
  id: Int
  image: String
  location_id: Int
  name: String
  team_size: Int
  updated_at: timestamptz
}

# order by min() on columns of table "field_type"
input field_type_min_order_by {
  created_at: order_by
  id: order_by
  image: order_by
  location_id: order_by
  name: order_by
  team_size: order_by
  updated_at: order_by
}

# response of any mutation on the table "field_type"
type field_type_mutation_response {
  # number of affected rows by the mutation
  affected_rows: Int!

  # data of the affected rows by the mutation
  returning: [field_type!]!
}

# input type for inserting object relation for remote table "field_type"
input field_type_obj_rel_insert_input {
  data: field_type_insert_input!
  on_conflict: field_type_on_conflict
}

# on conflict condition type for table "field_type"
input field_type_on_conflict {
  constraint: field_type_constraint!
  update_columns: [field_type_update_column!]!
  where: field_type_bool_exp
}

# ordering options when selecting data from "field_type"
input field_type_order_by {
  created_at: order_by
  fields_aggregate: field_aggregate_order_by
  id: order_by
  image: order_by
  location: location_order_by
  location_id: order_by
  name: order_by
  team_size: order_by
  updated_at: order_by
}

# primary key columns input for table: "field_type"
input field_type_pk_columns_input {
  id: Int!
}

# select columns of table "field_type"
enum field_type_select_column {
  # column name
  created_at

  # column name
  id

  # column name
  image

  # column name
  location_id

  # column name
  name

  # column name
  team_size

  # column name
  updated_at
}

# input type for updating data in table "field_type"
input field_type_set_input {
  created_at: timestamptz
  id: Int
  image: String
  location_id: Int
  name: String
  team_size: Int
  updated_at: timestamptz
}

# aggregate stddev on columns
type field_type_stddev_fields {
  id: Float
  location_id: Float
  team_size: Float
}

# order by stddev() on columns of table "field_type"
input field_type_stddev_order_by {
  id: order_by
  location_id: order_by
  team_size: order_by
}

# aggregate stddev_pop on columns
type field_type_stddev_pop_fields {
  id: Float
  location_id: Float
  team_size: Float
}

# order by stddev_pop() on columns of table "field_type"
input field_type_stddev_pop_order_by {
  id: order_by
  location_id: order_by
  team_size: order_by
}

# aggregate stddev_samp on columns
type field_type_stddev_samp_fields {
  id: Float
  location_id: Float
  team_size: Float
}

# order by stddev_samp() on columns of table "field_type"
input field_type_stddev_samp_order_by {
  id: order_by
  location_id: order_by
  team_size: order_by
}

# aggregate sum on columns
type field_type_sum_fields {
  id: Int
  location_id: Int
  team_size: Int
}

# order by sum() on columns of table "field_type"
input field_type_sum_order_by {
  id: order_by
  location_id: order_by
  team_size: order_by
}

# update columns of table "field_type"
enum field_type_update_column {
  # column name
  created_at

  # column name
  id

  # column name
  image

  # column name
  location_id

  # column name
  name

  # column name
  team_size

  # column name
  updated_at
}

# aggregate var_pop on columns
type field_type_var_pop_fields {
  id: Float
  location_id: Float
  team_size: Float
}

# order by var_pop() on columns of table "field_type"
input field_type_var_pop_order_by {
  id: order_by
  location_id: order_by
  team_size: order_by
}

# aggregate var_samp on columns
type field_type_var_samp_fields {
  id: Float
  location_id: Float
  team_size: Float
}

# order by var_samp() on columns of table "field_type"
input field_type_var_samp_order_by {
  id: order_by
  location_id: order_by
  team_size: order_by
}

# aggregate variance on columns
type field_type_variance_fields {
  id: Float
  location_id: Float
  team_size: Float
}

# order by variance() on columns of table "field_type"
input field_type_variance_order_by {
  id: order_by
  location_id: order_by
  team_size: order_by
}

# update columns of table "field"
enum field_update_column {
  # column name
  created_at

  # column name
  field_type_id

  # column name
  id

  # column name
  location_id

  # column name
  name

  # column name
  updated_at
}

# aggregate var_pop on columns
type field_var_pop_fields {
  field_type_id: Float
  id: Float
  location_id: Float
}

# order by var_pop() on columns of table "field"
input field_var_pop_order_by {
  field_type_id: order_by
  id: order_by
  location_id: order_by
}

# aggregate var_samp on columns
type field_var_samp_fields {
  field_type_id: Float
  id: Float
  location_id: Float
}

# order by var_samp() on columns of table "field"
input field_var_samp_order_by {
  field_type_id: order_by
  id: order_by
  location_id: order_by
}

# aggregate variance on columns
type field_variance_fields {
  field_type_id: Float
  id: Float
  location_id: Float
}

# order by variance() on columns of table "field"
input field_variance_order_by {
  field_type_id: order_by
  id: order_by
  location_id: order_by
}

# Global/shared categories for games that all facilities can use
#
#
# columns and relationships of "global_category"
#
type global_category {
  color: String!
  created_at: timestamptz!

  # An array relationship
  facility_game_global_categories(
    # distinct select on columns
    distinct_on: [facility_game_global_category_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_game_global_category_order_by!]

    # filter the rows returned
    where: facility_game_global_category_bool_exp
  ): [facility_game_global_category!]!

  # An aggregated array relationship
  facility_game_global_categories_aggregate(
    # distinct select on columns
    distinct_on: [facility_game_global_category_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_game_global_category_order_by!]

    # filter the rows returned
    where: facility_game_global_category_bool_exp
  ): facility_game_global_category_aggregate!
  id: Int!
  text: String!
  updated_at: timestamptz!
}

# aggregated selection of "global_category"
type global_category_aggregate {
  aggregate: global_category_aggregate_fields
  nodes: [global_category!]!
}

# aggregate fields of "global_category"
type global_category_aggregate_fields {
  avg: global_category_avg_fields
  count(columns: [global_category_select_column!], distinct: Boolean): Int
  max: global_category_max_fields
  min: global_category_min_fields
  stddev: global_category_stddev_fields
  stddev_pop: global_category_stddev_pop_fields
  stddev_samp: global_category_stddev_samp_fields
  sum: global_category_sum_fields
  var_pop: global_category_var_pop_fields
  var_samp: global_category_var_samp_fields
  variance: global_category_variance_fields
}

# order by aggregate values of table "global_category"
input global_category_aggregate_order_by {
  avg: global_category_avg_order_by
  count: order_by
  max: global_category_max_order_by
  min: global_category_min_order_by
  stddev: global_category_stddev_order_by
  stddev_pop: global_category_stddev_pop_order_by
  stddev_samp: global_category_stddev_samp_order_by
  sum: global_category_sum_order_by
  var_pop: global_category_var_pop_order_by
  var_samp: global_category_var_samp_order_by
  variance: global_category_variance_order_by
}

# input type for inserting array relation for remote table "global_category"
input global_category_arr_rel_insert_input {
  data: [global_category_insert_input!]!
  on_conflict: global_category_on_conflict
}

# aggregate avg on columns
type global_category_avg_fields {
  id: Float
}

# order by avg() on columns of table "global_category"
input global_category_avg_order_by {
  id: order_by
}

# Boolean expression to filter rows from the table "global_category". All fields are combined with a logical 'AND'.
input global_category_bool_exp {
  _and: [global_category_bool_exp]
  _not: global_category_bool_exp
  _or: [global_category_bool_exp]
  color: String_comparison_exp
  created_at: timestamptz_comparison_exp
  facility_game_global_categories: facility_game_global_category_bool_exp
  id: Int_comparison_exp
  text: String_comparison_exp
  updated_at: timestamptz_comparison_exp
}

# unique or primary key constraints on table "global_category"
enum global_category_constraint {
  # unique or primary key constraint
  global_category_pkey
}

# input type for incrementing integer column in table "global_category"
input global_category_inc_input {
  id: Int
}

# input type for inserting data into table "global_category"
input global_category_insert_input {
  color: String
  created_at: timestamptz
  facility_game_global_categories: facility_game_global_category_arr_rel_insert_input
  id: Int
  text: String
  updated_at: timestamptz
}

# aggregate max on columns
type global_category_max_fields {
  color: String
  created_at: timestamptz
  id: Int
  text: String
  updated_at: timestamptz
}

# order by max() on columns of table "global_category"
input global_category_max_order_by {
  color: order_by
  created_at: order_by
  id: order_by
  text: order_by
  updated_at: order_by
}

# aggregate min on columns
type global_category_min_fields {
  color: String
  created_at: timestamptz
  id: Int
  text: String
  updated_at: timestamptz
}

# order by min() on columns of table "global_category"
input global_category_min_order_by {
  color: order_by
  created_at: order_by
  id: order_by
  text: order_by
  updated_at: order_by
}

# response of any mutation on the table "global_category"
type global_category_mutation_response {
  # number of affected rows by the mutation
  affected_rows: Int!

  # data of the affected rows by the mutation
  returning: [global_category!]!
}

# input type for inserting object relation for remote table "global_category"
input global_category_obj_rel_insert_input {
  data: global_category_insert_input!
  on_conflict: global_category_on_conflict
}

# on conflict condition type for table "global_category"
input global_category_on_conflict {
  constraint: global_category_constraint!
  update_columns: [global_category_update_column!]!
  where: global_category_bool_exp
}

# ordering options when selecting data from "global_category"
input global_category_order_by {
  color: order_by
  created_at: order_by
  facility_game_global_categories_aggregate: facility_game_global_category_aggregate_order_by
  id: order_by
  text: order_by
  updated_at: order_by
}

# primary key columns input for table: "global_category"
input global_category_pk_columns_input {
  id: Int!
}

# select columns of table "global_category"
enum global_category_select_column {
  # column name
  color

  # column name
  created_at

  # column name
  id

  # column name
  text

  # column name
  updated_at
}

# input type for updating data in table "global_category"
input global_category_set_input {
  color: String
  created_at: timestamptz
  id: Int
  text: String
  updated_at: timestamptz
}

# aggregate stddev on columns
type global_category_stddev_fields {
  id: Float
}

# order by stddev() on columns of table "global_category"
input global_category_stddev_order_by {
  id: order_by
}

# aggregate stddev_pop on columns
type global_category_stddev_pop_fields {
  id: Float
}

# order by stddev_pop() on columns of table "global_category"
input global_category_stddev_pop_order_by {
  id: order_by
}

# aggregate stddev_samp on columns
type global_category_stddev_samp_fields {
  id: Float
}

# order by stddev_samp() on columns of table "global_category"
input global_category_stddev_samp_order_by {
  id: order_by
}

# aggregate sum on columns
type global_category_sum_fields {
  id: Int
}

# order by sum() on columns of table "global_category"
input global_category_sum_order_by {
  id: order_by
}

# update columns of table "global_category"
enum global_category_update_column {
  # column name
  color

  # column name
  created_at

  # column name
  id

  # column name
  text

  # column name
  updated_at
}

# aggregate var_pop on columns
type global_category_var_pop_fields {
  id: Float
}

# order by var_pop() on columns of table "global_category"
input global_category_var_pop_order_by {
  id: order_by
}

# aggregate var_samp on columns
type global_category_var_samp_fields {
  id: Float
}

# order by var_samp() on columns of table "global_category"
input global_category_var_samp_order_by {
  id: order_by
}

# aggregate variance on columns
type global_category_variance_fields {
  id: Float
}

# order by variance() on columns of table "global_category"
input global_category_variance_order_by {
  id: order_by
}

# The set of operating hours for a facility location. Can contain multiple entries
# for the same day of the week, marking which times are peak hours (for elevated
# pricing) as well.
#
#
# columns and relationships of "hours_of_operation"
#
type hours_of_operation {
  created_at: timestamptz!
  day: weekday_enum!
  id: Int!
  is_peak_hours: Boolean!

  # An object relationship
  location: location!
  location_id: Int!
  time_end: time!
  time_start: time!
  updated_at: timestamptz!

  # An object relationship
  weekday: weekday!
}

# aggregated selection of "hours_of_operation"
type hours_of_operation_aggregate {
  aggregate: hours_of_operation_aggregate_fields
  nodes: [hours_of_operation!]!
}

# aggregate fields of "hours_of_operation"
type hours_of_operation_aggregate_fields {
  avg: hours_of_operation_avg_fields
  count(columns: [hours_of_operation_select_column!], distinct: Boolean): Int
  max: hours_of_operation_max_fields
  min: hours_of_operation_min_fields
  stddev: hours_of_operation_stddev_fields
  stddev_pop: hours_of_operation_stddev_pop_fields
  stddev_samp: hours_of_operation_stddev_samp_fields
  sum: hours_of_operation_sum_fields
  var_pop: hours_of_operation_var_pop_fields
  var_samp: hours_of_operation_var_samp_fields
  variance: hours_of_operation_variance_fields
}

# order by aggregate values of table "hours_of_operation"
input hours_of_operation_aggregate_order_by {
  avg: hours_of_operation_avg_order_by
  count: order_by
  max: hours_of_operation_max_order_by
  min: hours_of_operation_min_order_by
  stddev: hours_of_operation_stddev_order_by
  stddev_pop: hours_of_operation_stddev_pop_order_by
  stddev_samp: hours_of_operation_stddev_samp_order_by
  sum: hours_of_operation_sum_order_by
  var_pop: hours_of_operation_var_pop_order_by
  var_samp: hours_of_operation_var_samp_order_by
  variance: hours_of_operation_variance_order_by
}

# input type for inserting array relation for remote table "hours_of_operation"
input hours_of_operation_arr_rel_insert_input {
  data: [hours_of_operation_insert_input!]!
  on_conflict: hours_of_operation_on_conflict
}

# aggregate avg on columns
type hours_of_operation_avg_fields {
  id: Float
  location_id: Float
}

# order by avg() on columns of table "hours_of_operation"
input hours_of_operation_avg_order_by {
  id: order_by
  location_id: order_by
}

# Boolean expression to filter rows from the table "hours_of_operation". All fields are combined with a logical 'AND'.
input hours_of_operation_bool_exp {
  _and: [hours_of_operation_bool_exp]
  _not: hours_of_operation_bool_exp
  _or: [hours_of_operation_bool_exp]
  created_at: timestamptz_comparison_exp
  day: weekday_enum_comparison_exp
  id: Int_comparison_exp
  is_peak_hours: Boolean_comparison_exp
  location: location_bool_exp
  location_id: Int_comparison_exp
  time_end: time_comparison_exp
  time_start: time_comparison_exp
  updated_at: timestamptz_comparison_exp
  weekday: weekday_bool_exp
}

# unique or primary key constraints on table "hours_of_operation"
enum hours_of_operation_constraint {
  # unique or primary key constraint
  hours_of_operation_pkey
}

# input type for incrementing integer column in table "hours_of_operation"
input hours_of_operation_inc_input {
  id: Int
  location_id: Int
}

# input type for inserting data into table "hours_of_operation"
input hours_of_operation_insert_input {
  created_at: timestamptz
  day: weekday_enum
  id: Int
  is_peak_hours: Boolean
  location: location_obj_rel_insert_input
  location_id: Int
  time_end: time
  time_start: time
  updated_at: timestamptz
  weekday: weekday_obj_rel_insert_input
}

# aggregate max on columns
type hours_of_operation_max_fields {
  created_at: timestamptz
  id: Int
  location_id: Int
  updated_at: timestamptz
}

# order by max() on columns of table "hours_of_operation"
input hours_of_operation_max_order_by {
  created_at: order_by
  id: order_by
  location_id: order_by
  updated_at: order_by
}

# aggregate min on columns
type hours_of_operation_min_fields {
  created_at: timestamptz
  id: Int
  location_id: Int
  updated_at: timestamptz
}

# order by min() on columns of table "hours_of_operation"
input hours_of_operation_min_order_by {
  created_at: order_by
  id: order_by
  location_id: order_by
  updated_at: order_by
}

# response of any mutation on the table "hours_of_operation"
type hours_of_operation_mutation_response {
  # number of affected rows by the mutation
  affected_rows: Int!

  # data of the affected rows by the mutation
  returning: [hours_of_operation!]!
}

# input type for inserting object relation for remote table "hours_of_operation"
input hours_of_operation_obj_rel_insert_input {
  data: hours_of_operation_insert_input!
  on_conflict: hours_of_operation_on_conflict
}

# on conflict condition type for table "hours_of_operation"
input hours_of_operation_on_conflict {
  constraint: hours_of_operation_constraint!
  update_columns: [hours_of_operation_update_column!]!
  where: hours_of_operation_bool_exp
}

# ordering options when selecting data from "hours_of_operation"
input hours_of_operation_order_by {
  created_at: order_by
  day: order_by
  id: order_by
  is_peak_hours: order_by
  location: location_order_by
  location_id: order_by
  time_end: order_by
  time_start: order_by
  updated_at: order_by
  weekday: weekday_order_by
}

# primary key columns input for table: "hours_of_operation"
input hours_of_operation_pk_columns_input {
  id: Int!
}

# select columns of table "hours_of_operation"
enum hours_of_operation_select_column {
  # column name
  created_at

  # column name
  day

  # column name
  id

  # column name
  is_peak_hours

  # column name
  location_id

  # column name
  time_end

  # column name
  time_start

  # column name
  updated_at
}

# input type for updating data in table "hours_of_operation"
input hours_of_operation_set_input {
  created_at: timestamptz
  day: weekday_enum
  id: Int
  is_peak_hours: Boolean
  location_id: Int
  time_end: time
  time_start: time
  updated_at: timestamptz
}

# aggregate stddev on columns
type hours_of_operation_stddev_fields {
  id: Float
  location_id: Float
}

# order by stddev() on columns of table "hours_of_operation"
input hours_of_operation_stddev_order_by {
  id: order_by
  location_id: order_by
}

# aggregate stddev_pop on columns
type hours_of_operation_stddev_pop_fields {
  id: Float
  location_id: Float
}

# order by stddev_pop() on columns of table "hours_of_operation"
input hours_of_operation_stddev_pop_order_by {
  id: order_by
  location_id: order_by
}

# aggregate stddev_samp on columns
type hours_of_operation_stddev_samp_fields {
  id: Float
  location_id: Float
}

# order by stddev_samp() on columns of table "hours_of_operation"
input hours_of_operation_stddev_samp_order_by {
  id: order_by
  location_id: order_by
}

# aggregate sum on columns
type hours_of_operation_sum_fields {
  id: Int
  location_id: Int
}

# order by sum() on columns of table "hours_of_operation"
input hours_of_operation_sum_order_by {
  id: order_by
  location_id: order_by
}

# update columns of table "hours_of_operation"
enum hours_of_operation_update_column {
  # column name
  created_at

  # column name
  day

  # column name
  id

  # column name
  is_peak_hours

  # column name
  location_id

  # column name
  time_end

  # column name
  time_start

  # column name
  updated_at
}

# aggregate var_pop on columns
type hours_of_operation_var_pop_fields {
  id: Float
  location_id: Float
}

# order by var_pop() on columns of table "hours_of_operation"
input hours_of_operation_var_pop_order_by {
  id: order_by
  location_id: order_by
}

# aggregate var_samp on columns
type hours_of_operation_var_samp_fields {
  id: Float
  location_id: Float
}

# order by var_samp() on columns of table "hours_of_operation"
input hours_of_operation_var_samp_order_by {
  id: order_by
  location_id: order_by
}

# aggregate variance on columns
type hours_of_operation_variance_fields {
  id: Float
  location_id: Float
}

# order by variance() on columns of table "hours_of_operation"
input hours_of_operation_variance_order_by {
  id: order_by
  location_id: order_by
}

# expression to compare columns of type Int. All fields are combined with logical 'AND'.
input Int_comparison_exp {
  _eq: Int
  _gt: Int
  _gte: Int
  _in: [Int!]
  _is_null: Boolean
  _lt: Int
  _lte: Int
  _neq: Int
  _nin: [Int!]
}

# A physical location of a soccer facility
#
#
# columns and relationships of "location"
#
type location {
  city: String!
  created_at: timestamptz!

  # An object relationship
  facility: facility!
  facility_id: Int!

  # An array relationship
  field_types(
    # distinct select on columns
    distinct_on: [field_type_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [field_type_order_by!]

    # filter the rows returned
    where: field_type_bool_exp
  ): [field_type!]!

  # An aggregated array relationship
  field_types_aggregate(
    # distinct select on columns
    distinct_on: [field_type_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [field_type_order_by!]

    # filter the rows returned
    where: field_type_bool_exp
  ): field_type_aggregate!

  # An array relationship
  fields(
    # distinct select on columns
    distinct_on: [field_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [field_order_by!]

    # filter the rows returned
    where: field_bool_exp
  ): [field!]!

  # An aggregated array relationship
  fields_aggregate(
    # distinct select on columns
    distinct_on: [field_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [field_order_by!]

    # filter the rows returned
    where: field_bool_exp
  ): field_aggregate!

  # An array relationship
  hours_of_operations(
    # distinct select on columns
    distinct_on: [hours_of_operation_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [hours_of_operation_order_by!]

    # filter the rows returned
    where: hours_of_operation_bool_exp
  ): [hours_of_operation!]!

  # An aggregated array relationship
  hours_of_operations_aggregate(
    # distinct select on columns
    distinct_on: [hours_of_operation_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [hours_of_operation_order_by!]

    # filter the rows returned
    where: hours_of_operation_bool_exp
  ): hours_of_operation_aggregate!
  id: Int!
  manager_email: String
  name: String!
  phone: String
  pos_tax: numeric
  reservation_tax: numeric
  state: String!
  street_address: String!
  updated_at: timestamptz!
  website_url: String
  zipcode: Int!
}

# aggregated selection of "location"
type location_aggregate {
  aggregate: location_aggregate_fields
  nodes: [location!]!
}

# aggregate fields of "location"
type location_aggregate_fields {
  avg: location_avg_fields
  count(columns: [location_select_column!], distinct: Boolean): Int
  max: location_max_fields
  min: location_min_fields
  stddev: location_stddev_fields
  stddev_pop: location_stddev_pop_fields
  stddev_samp: location_stddev_samp_fields
  sum: location_sum_fields
  var_pop: location_var_pop_fields
  var_samp: location_var_samp_fields
  variance: location_variance_fields
}

# order by aggregate values of table "location"
input location_aggregate_order_by {
  avg: location_avg_order_by
  count: order_by
  max: location_max_order_by
  min: location_min_order_by
  stddev: location_stddev_order_by
  stddev_pop: location_stddev_pop_order_by
  stddev_samp: location_stddev_samp_order_by
  sum: location_sum_order_by
  var_pop: location_var_pop_order_by
  var_samp: location_var_samp_order_by
  variance: location_variance_order_by
}

# input type for inserting array relation for remote table "location"
input location_arr_rel_insert_input {
  data: [location_insert_input!]!
  on_conflict: location_on_conflict
}

# aggregate avg on columns
type location_avg_fields {
  facility_id: Float
  id: Float
  pos_tax: Float
  reservation_tax: Float
  zipcode: Float
}

# order by avg() on columns of table "location"
input location_avg_order_by {
  facility_id: order_by
  id: order_by
  pos_tax: order_by
  reservation_tax: order_by
  zipcode: order_by
}

# Boolean expression to filter rows from the table "location". All fields are combined with a logical 'AND'.
input location_bool_exp {
  _and: [location_bool_exp]
  _not: location_bool_exp
  _or: [location_bool_exp]
  city: String_comparison_exp
  created_at: timestamptz_comparison_exp
  facility: facility_bool_exp
  facility_id: Int_comparison_exp
  field_types: field_type_bool_exp
  fields: field_bool_exp
  hours_of_operations: hours_of_operation_bool_exp
  id: Int_comparison_exp
  manager_email: String_comparison_exp
  name: String_comparison_exp
  phone: String_comparison_exp
  pos_tax: numeric_comparison_exp
  reservation_tax: numeric_comparison_exp
  state: String_comparison_exp
  street_address: String_comparison_exp
  updated_at: timestamptz_comparison_exp
  website_url: String_comparison_exp
  zipcode: Int_comparison_exp
}

# unique or primary key constraints on table "location"
enum location_constraint {
  # unique or primary key constraint
  location_pkey
}

# input type for incrementing integer column in table "location"
input location_inc_input {
  facility_id: Int
  id: Int
  pos_tax: numeric
  reservation_tax: numeric
  zipcode: Int
}

# input type for inserting data into table "location"
input location_insert_input {
  city: String
  created_at: timestamptz
  facility: facility_obj_rel_insert_input
  facility_id: Int
  field_types: field_type_arr_rel_insert_input
  fields: field_arr_rel_insert_input
  hours_of_operations: hours_of_operation_arr_rel_insert_input
  id: Int
  manager_email: String
  name: String
  phone: String
  pos_tax: numeric
  reservation_tax: numeric
  state: String
  street_address: String
  updated_at: timestamptz
  website_url: String
  zipcode: Int
}

# aggregate max on columns
type location_max_fields {
  city: String
  created_at: timestamptz
  facility_id: Int
  id: Int
  manager_email: String
  name: String
  phone: String
  pos_tax: numeric
  reservation_tax: numeric
  state: String
  street_address: String
  updated_at: timestamptz
  website_url: String
  zipcode: Int
}

# order by max() on columns of table "location"
input location_max_order_by {
  city: order_by
  created_at: order_by
  facility_id: order_by
  id: order_by
  manager_email: order_by
  name: order_by
  phone: order_by
  pos_tax: order_by
  reservation_tax: order_by
  state: order_by
  street_address: order_by
  updated_at: order_by
  website_url: order_by
  zipcode: order_by
}

# aggregate min on columns
type location_min_fields {
  city: String
  created_at: timestamptz
  facility_id: Int
  id: Int
  manager_email: String
  name: String
  phone: String
  pos_tax: numeric
  reservation_tax: numeric
  state: String
  street_address: String
  updated_at: timestamptz
  website_url: String
  zipcode: Int
}

# order by min() on columns of table "location"
input location_min_order_by {
  city: order_by
  created_at: order_by
  facility_id: order_by
  id: order_by
  manager_email: order_by
  name: order_by
  phone: order_by
  pos_tax: order_by
  reservation_tax: order_by
  state: order_by
  street_address: order_by
  updated_at: order_by
  website_url: order_by
  zipcode: order_by
}

# response of any mutation on the table "location"
type location_mutation_response {
  # number of affected rows by the mutation
  affected_rows: Int!

  # data of the affected rows by the mutation
  returning: [location!]!
}

# input type for inserting object relation for remote table "location"
input location_obj_rel_insert_input {
  data: location_insert_input!
  on_conflict: location_on_conflict
}

# on conflict condition type for table "location"
input location_on_conflict {
  constraint: location_constraint!
  update_columns: [location_update_column!]!
  where: location_bool_exp
}

# ordering options when selecting data from "location"
input location_order_by {
  city: order_by
  created_at: order_by
  facility: facility_order_by
  facility_id: order_by
  field_types_aggregate: field_type_aggregate_order_by
  fields_aggregate: field_aggregate_order_by
  hours_of_operations_aggregate: hours_of_operation_aggregate_order_by
  id: order_by
  manager_email: order_by
  name: order_by
  phone: order_by
  pos_tax: order_by
  reservation_tax: order_by
  state: order_by
  street_address: order_by
  updated_at: order_by
  website_url: order_by
  zipcode: order_by
}

# primary key columns input for table: "location"
input location_pk_columns_input {
  id: Int!
}

# select columns of table "location"
enum location_select_column {
  # column name
  city

  # column name
  created_at

  # column name
  facility_id

  # column name
  id

  # column name
  manager_email

  # column name
  name

  # column name
  phone

  # column name
  pos_tax

  # column name
  reservation_tax

  # column name
  state

  # column name
  street_address

  # column name
  updated_at

  # column name
  website_url

  # column name
  zipcode
}

# input type for updating data in table "location"
input location_set_input {
  city: String
  created_at: timestamptz
  facility_id: Int
  id: Int
  manager_email: String
  name: String
  phone: String
  pos_tax: numeric
  reservation_tax: numeric
  state: String
  street_address: String
  updated_at: timestamptz
  website_url: String
  zipcode: Int
}

# aggregate stddev on columns
type location_stddev_fields {
  facility_id: Float
  id: Float
  pos_tax: Float
  reservation_tax: Float
  zipcode: Float
}

# order by stddev() on columns of table "location"
input location_stddev_order_by {
  facility_id: order_by
  id: order_by
  pos_tax: order_by
  reservation_tax: order_by
  zipcode: order_by
}

# aggregate stddev_pop on columns
type location_stddev_pop_fields {
  facility_id: Float
  id: Float
  pos_tax: Float
  reservation_tax: Float
  zipcode: Float
}

# order by stddev_pop() on columns of table "location"
input location_stddev_pop_order_by {
  facility_id: order_by
  id: order_by
  pos_tax: order_by
  reservation_tax: order_by
  zipcode: order_by
}

# aggregate stddev_samp on columns
type location_stddev_samp_fields {
  facility_id: Float
  id: Float
  pos_tax: Float
  reservation_tax: Float
  zipcode: Float
}

# order by stddev_samp() on columns of table "location"
input location_stddev_samp_order_by {
  facility_id: order_by
  id: order_by
  pos_tax: order_by
  reservation_tax: order_by
  zipcode: order_by
}

# aggregate sum on columns
type location_sum_fields {
  facility_id: Int
  id: Int
  pos_tax: numeric
  reservation_tax: numeric
  zipcode: Int
}

# order by sum() on columns of table "location"
input location_sum_order_by {
  facility_id: order_by
  id: order_by
  pos_tax: order_by
  reservation_tax: order_by
  zipcode: order_by
}

# update columns of table "location"
enum location_update_column {
  # column name
  city

  # column name
  created_at

  # column name
  facility_id

  # column name
  id

  # column name
  manager_email

  # column name
  name

  # column name
  phone

  # column name
  pos_tax

  # column name
  reservation_tax

  # column name
  state

  # column name
  street_address

  # column name
  updated_at

  # column name
  website_url

  # column name
  zipcode
}

# aggregate var_pop on columns
type location_var_pop_fields {
  facility_id: Float
  id: Float
  pos_tax: Float
  reservation_tax: Float
  zipcode: Float
}

# order by var_pop() on columns of table "location"
input location_var_pop_order_by {
  facility_id: order_by
  id: order_by
  pos_tax: order_by
  reservation_tax: order_by
  zipcode: order_by
}

# aggregate var_samp on columns
type location_var_samp_fields {
  facility_id: Float
  id: Float
  pos_tax: Float
  reservation_tax: Float
  zipcode: Float
}

# order by var_samp() on columns of table "location"
input location_var_samp_order_by {
  facility_id: order_by
  id: order_by
  pos_tax: order_by
  reservation_tax: order_by
  zipcode: order_by
}

# aggregate variance on columns
type location_variance_fields {
  facility_id: Float
  id: Float
  pos_tax: Float
  reservation_tax: Float
  zipcode: Float
}

# order by variance() on columns of table "location"
input location_variance_order_by {
  facility_id: order_by
  id: order_by
  pos_tax: order_by
  reservation_tax: order_by
  zipcode: order_by
}

# mutation root
type mutation_root {
  # delete data from the table: "facility"
  delete_facility(
    # filter the rows which have to be deleted
    where: facility_bool_exp!
  ): facility_mutation_response

  # delete single row from the table: "facility"
  delete_facility_by_pk(id: Int!): facility

  # delete data from the table: "facility_category"
  delete_facility_category(
    # filter the rows which have to be deleted
    where: facility_category_bool_exp!
  ): facility_category_mutation_response

  # delete single row from the table: "facility_category"
  delete_facility_category_by_pk(id: Int!): facility_category

  # delete data from the table: "facility_game"
  delete_facility_game(
    # filter the rows which have to be deleted
    where: facility_game_bool_exp!
  ): facility_game_mutation_response

  # delete single row from the table: "facility_game"
  delete_facility_game_by_pk(id: Int!): facility_game

  # delete data from the table: "facility_game_category"
  delete_facility_game_category(
    # filter the rows which have to be deleted
    where: facility_game_category_bool_exp!
  ): facility_game_category_mutation_response

  # delete single row from the table: "facility_game_category"
  delete_facility_game_category_by_pk(id: Int!): facility_game_category

  # delete data from the table: "facility_game_columns"
  delete_facility_game_columns(
    # filter the rows which have to be deleted
    where: facility_game_columns_bool_exp!
  ): facility_game_columns_mutation_response

  # delete single row from the table: "facility_game_columns"
  delete_facility_game_columns_by_pk(id: Int!): facility_game_columns

  # delete data from the table: "facility_game_global_category"
  delete_facility_game_global_category(
    # filter the rows which have to be deleted
    where: facility_game_global_category_bool_exp!
  ): facility_game_global_category_mutation_response

  # delete single row from the table: "facility_game_global_category"
  delete_facility_game_global_category_by_pk(id: Int!): facility_game_global_category

  # delete data from the table: "facility_game_reservation"
  delete_facility_game_reservation(
    # filter the rows which have to be deleted
    where: facility_game_reservation_bool_exp!
  ): facility_game_reservation_mutation_response

  # delete single row from the table: "facility_game_reservation"
  delete_facility_game_reservation_by_pk(id: Int!): facility_game_reservation

  # delete data from the table: "facility_user"
  delete_facility_user(
    # filter the rows which have to be deleted
    where: facility_user_bool_exp!
  ): facility_user_mutation_response

  # delete single row from the table: "facility_user"
  delete_facility_user_by_pk(id: Int!): facility_user

  # delete data from the table: "facility_user_role"
  delete_facility_user_role(
    # filter the rows which have to be deleted
    where: facility_user_role_bool_exp!
  ): facility_user_role_mutation_response

  # delete single row from the table: "facility_user_role"
  delete_facility_user_role_by_pk(value: String!): facility_user_role

  # delete data from the table: "field"
  delete_field(
    # filter the rows which have to be deleted
    where: field_bool_exp!
  ): field_mutation_response

  # delete single row from the table: "field"
  delete_field_by_pk(id: Int!): field

  # delete data from the table: "field_type"
  delete_field_type(
    # filter the rows which have to be deleted
    where: field_type_bool_exp!
  ): field_type_mutation_response

  # delete single row from the table: "field_type"
  delete_field_type_by_pk(id: Int!): field_type

  # delete data from the table: "global_category"
  delete_global_category(
    # filter the rows which have to be deleted
    where: global_category_bool_exp!
  ): global_category_mutation_response

  # delete single row from the table: "global_category"
  delete_global_category_by_pk(id: Int!): global_category

  # delete data from the table: "hours_of_operation"
  delete_hours_of_operation(
    # filter the rows which have to be deleted
    where: hours_of_operation_bool_exp!
  ): hours_of_operation_mutation_response

  # delete single row from the table: "hours_of_operation"
  delete_hours_of_operation_by_pk(id: Int!): hours_of_operation

  # delete data from the table: "location"
  delete_location(
    # filter the rows which have to be deleted
    where: location_bool_exp!
  ): location_mutation_response

  # delete single row from the table: "location"
  delete_location_by_pk(id: Int!): location

  # delete data from the table: "open_game"
  delete_open_game(
    # filter the rows which have to be deleted
    where: open_game_bool_exp!
  ): open_game_mutation_response

  # delete single row from the table: "open_game"
  delete_open_game_by_pk(id: Int!): open_game

  # delete data from the table: "open_game_columns"
  delete_open_game_columns(
    # filter the rows which have to be deleted
    where: open_game_columns_bool_exp!
  ): open_game_columns_mutation_response

  # delete single row from the table: "open_game_columns"
  delete_open_game_columns_by_pk(id: Int!): open_game_columns

  # delete data from the table: "open_game_reservation"
  delete_open_game_reservation(
    # filter the rows which have to be deleted
    where: open_game_reservation_bool_exp!
  ): open_game_reservation_mutation_response

  # delete single row from the table: "open_game_reservation"
  delete_open_game_reservation_by_pk(id: Int!): open_game_reservation

  # delete data from the table: "open_game_template"
  delete_open_game_template(
    # filter the rows which have to be deleted
    where: open_game_template_bool_exp!
  ): open_game_template_mutation_response

  # delete single row from the table: "open_game_template"
  delete_open_game_template_by_pk(id: Int!): open_game_template

  # delete data from the table: "player"
  delete_player(
    # filter the rows which have to be deleted
    where: player_bool_exp!
  ): player_mutation_response

  # delete single row from the table: "player"
  delete_player_by_pk(id: Int!): player

  # delete data from the table: "recurring_facility_game"
  delete_recurring_facility_game(
    # filter the rows which have to be deleted
    where: recurring_facility_game_bool_exp!
  ): recurring_facility_game_mutation_response

  # delete single row from the table: "recurring_facility_game"
  delete_recurring_facility_game_by_pk(id: Int!): recurring_facility_game

  # delete data from the table: "recurring_facility_game_datetime"
  delete_recurring_facility_game_datetime(
    # filter the rows which have to be deleted
    where: recurring_facility_game_datetime_bool_exp!
  ): recurring_facility_game_datetime_mutation_response

  # delete data from the table: "recurring_facility_game_reservation"
  delete_recurring_facility_game_reservation(
    # filter the rows which have to be deleted
    where: recurring_facility_game_reservation_bool_exp!
  ): recurring_facility_game_reservation_mutation_response

  # delete single row from the table: "recurring_facility_game_reservation"
  delete_recurring_facility_game_reservation_by_pk(id: Int!): recurring_facility_game_reservation

  # delete data from the table: "recurring_open_game"
  delete_recurring_open_game(
    # filter the rows which have to be deleted
    where: recurring_open_game_bool_exp!
  ): recurring_open_game_mutation_response

  # delete single row from the table: "recurring_open_game"
  delete_recurring_open_game_by_pk(id: Int!): recurring_open_game

  # delete data from the table: "recurring_open_game_datetime"
  delete_recurring_open_game_datetime(
    # filter the rows which have to be deleted
    where: recurring_open_game_datetime_bool_exp!
  ): recurring_open_game_datetime_mutation_response

  # delete data from the table: "recurring_open_game_reservation"
  delete_recurring_open_game_reservation(
    # filter the rows which have to be deleted
    where: recurring_open_game_reservation_bool_exp!
  ): recurring_open_game_reservation_mutation_response

  # delete single row from the table: "recurring_open_game_reservation"
  delete_recurring_open_game_reservation_by_pk(id: Int!): recurring_open_game_reservation

  # delete data from the table: "region"
  delete_region(
    # filter the rows which have to be deleted
    where: region_bool_exp!
  ): region_mutation_response

  # delete single row from the table: "region"
  delete_region_by_pk(id: Int!): region

  # delete data from the table: "submerchant_bank_information"
  delete_submerchant_bank_information(
    # filter the rows which have to be deleted
    where: submerchant_bank_information_bool_exp!
  ): submerchant_bank_information_mutation_response

  # delete single row from the table: "submerchant_bank_information"
  delete_submerchant_bank_information_by_pk(id: Int!): submerchant_bank_information

  # delete data from the table: "subregion"
  delete_subregion(
    # filter the rows which have to be deleted
    where: subregion_bool_exp!
  ): subregion_mutation_response

  # delete single row from the table: "subregion"
  delete_subregion_by_pk(id: Int!): subregion

  # delete data from the table: "weekday"
  delete_weekday(
    # filter the rows which have to be deleted
    where: weekday_bool_exp!
  ): weekday_mutation_response

  # delete single row from the table: "weekday"
  delete_weekday_by_pk(value: String!): weekday

  # insert data into the table: "facility"
  insert_facility(
    # the rows to be inserted
    objects: [facility_insert_input!]!

    # on conflict condition
    on_conflict: facility_on_conflict
  ): facility_mutation_response

  # insert data into the table: "facility_category"
  insert_facility_category(
    # the rows to be inserted
    objects: [facility_category_insert_input!]!

    # on conflict condition
    on_conflict: facility_category_on_conflict
  ): facility_category_mutation_response

  # insert a single row into the table: "facility_category"
  insert_facility_category_one(
    # the row to be inserted
    object: facility_category_insert_input!

    # on conflict condition
    on_conflict: facility_category_on_conflict
  ): facility_category

  # insert data into the table: "facility_game"
  insert_facility_game(
    # the rows to be inserted
    objects: [facility_game_insert_input!]!

    # on conflict condition
    on_conflict: facility_game_on_conflict
  ): facility_game_mutation_response

  # insert data into the table: "facility_game_category"
  insert_facility_game_category(
    # the rows to be inserted
    objects: [facility_game_category_insert_input!]!

    # on conflict condition
    on_conflict: facility_game_category_on_conflict
  ): facility_game_category_mutation_response

  # insert a single row into the table: "facility_game_category"
  insert_facility_game_category_one(
    # the row to be inserted
    object: facility_game_category_insert_input!

    # on conflict condition
    on_conflict: facility_game_category_on_conflict
  ): facility_game_category

  # insert data into the table: "facility_game_columns"
  insert_facility_game_columns(
    # the rows to be inserted
    objects: [facility_game_columns_insert_input!]!

    # on conflict condition
    on_conflict: facility_game_columns_on_conflict
  ): facility_game_columns_mutation_response

  # insert a single row into the table: "facility_game_columns"
  insert_facility_game_columns_one(
    # the row to be inserted
    object: facility_game_columns_insert_input!

    # on conflict condition
    on_conflict: facility_game_columns_on_conflict
  ): facility_game_columns

  # insert data into the table: "facility_game_global_category"
  insert_facility_game_global_category(
    # the rows to be inserted
    objects: [facility_game_global_category_insert_input!]!

    # on conflict condition
    on_conflict: facility_game_global_category_on_conflict
  ): facility_game_global_category_mutation_response

  # insert a single row into the table: "facility_game_global_category"
  insert_facility_game_global_category_one(
    # the row to be inserted
    object: facility_game_global_category_insert_input!

    # on conflict condition
    on_conflict: facility_game_global_category_on_conflict
  ): facility_game_global_category

  # insert a single row into the table: "facility_game"
  insert_facility_game_one(
    # the row to be inserted
    object: facility_game_insert_input!

    # on conflict condition
    on_conflict: facility_game_on_conflict
  ): facility_game

  # insert data into the table: "facility_game_reservation"
  insert_facility_game_reservation(
    # the rows to be inserted
    objects: [facility_game_reservation_insert_input!]!

    # on conflict condition
    on_conflict: facility_game_reservation_on_conflict
  ): facility_game_reservation_mutation_response

  # insert a single row into the table: "facility_game_reservation"
  insert_facility_game_reservation_one(
    # the row to be inserted
    object: facility_game_reservation_insert_input!

    # on conflict condition
    on_conflict: facility_game_reservation_on_conflict
  ): facility_game_reservation

  # insert a single row into the table: "facility"
  insert_facility_one(
    # the row to be inserted
    object: facility_insert_input!

    # on conflict condition
    on_conflict: facility_on_conflict
  ): facility

  # insert data into the table: "facility_user"
  insert_facility_user(
    # the rows to be inserted
    objects: [facility_user_insert_input!]!

    # on conflict condition
    on_conflict: facility_user_on_conflict
  ): facility_user_mutation_response

  # insert a single row into the table: "facility_user"
  insert_facility_user_one(
    # the row to be inserted
    object: facility_user_insert_input!

    # on conflict condition
    on_conflict: facility_user_on_conflict
  ): facility_user

  # insert data into the table: "facility_user_role"
  insert_facility_user_role(
    # the rows to be inserted
    objects: [facility_user_role_insert_input!]!

    # on conflict condition
    on_conflict: facility_user_role_on_conflict
  ): facility_user_role_mutation_response

  # insert a single row into the table: "facility_user_role"
  insert_facility_user_role_one(
    # the row to be inserted
    object: facility_user_role_insert_input!

    # on conflict condition
    on_conflict: facility_user_role_on_conflict
  ): facility_user_role

  # insert data into the table: "field"
  insert_field(
    # the rows to be inserted
    objects: [field_insert_input!]!

    # on conflict condition
    on_conflict: field_on_conflict
  ): field_mutation_response

  # insert a single row into the table: "field"
  insert_field_one(
    # the row to be inserted
    object: field_insert_input!

    # on conflict condition
    on_conflict: field_on_conflict
  ): field

  # insert data into the table: "field_type"
  insert_field_type(
    # the rows to be inserted
    objects: [field_type_insert_input!]!

    # on conflict condition
    on_conflict: field_type_on_conflict
  ): field_type_mutation_response

  # insert a single row into the table: "field_type"
  insert_field_type_one(
    # the row to be inserted
    object: field_type_insert_input!

    # on conflict condition
    on_conflict: field_type_on_conflict
  ): field_type

  # insert data into the table: "global_category"
  insert_global_category(
    # the rows to be inserted
    objects: [global_category_insert_input!]!

    # on conflict condition
    on_conflict: global_category_on_conflict
  ): global_category_mutation_response

  # insert a single row into the table: "global_category"
  insert_global_category_one(
    # the row to be inserted
    object: global_category_insert_input!

    # on conflict condition
    on_conflict: global_category_on_conflict
  ): global_category

  # insert data into the table: "hours_of_operation"
  insert_hours_of_operation(
    # the rows to be inserted
    objects: [hours_of_operation_insert_input!]!

    # on conflict condition
    on_conflict: hours_of_operation_on_conflict
  ): hours_of_operation_mutation_response

  # insert a single row into the table: "hours_of_operation"
  insert_hours_of_operation_one(
    # the row to be inserted
    object: hours_of_operation_insert_input!

    # on conflict condition
    on_conflict: hours_of_operation_on_conflict
  ): hours_of_operation

  # insert data into the table: "location"
  insert_location(
    # the rows to be inserted
    objects: [location_insert_input!]!

    # on conflict condition
    on_conflict: location_on_conflict
  ): location_mutation_response

  # insert a single row into the table: "location"
  insert_location_one(
    # the row to be inserted
    object: location_insert_input!

    # on conflict condition
    on_conflict: location_on_conflict
  ): location

  # insert data into the table: "open_game"
  insert_open_game(
    # the rows to be inserted
    objects: [open_game_insert_input!]!

    # on conflict condition
    on_conflict: open_game_on_conflict
  ): open_game_mutation_response

  # insert data into the table: "open_game_columns"
  insert_open_game_columns(
    # the rows to be inserted
    objects: [open_game_columns_insert_input!]!

    # on conflict condition
    on_conflict: open_game_columns_on_conflict
  ): open_game_columns_mutation_response

  # insert a single row into the table: "open_game_columns"
  insert_open_game_columns_one(
    # the row to be inserted
    object: open_game_columns_insert_input!

    # on conflict condition
    on_conflict: open_game_columns_on_conflict
  ): open_game_columns

  # insert a single row into the table: "open_game"
  insert_open_game_one(
    # the row to be inserted
    object: open_game_insert_input!

    # on conflict condition
    on_conflict: open_game_on_conflict
  ): open_game

  # insert data into the table: "open_game_reservation"
  insert_open_game_reservation(
    # the rows to be inserted
    objects: [open_game_reservation_insert_input!]!

    # on conflict condition
    on_conflict: open_game_reservation_on_conflict
  ): open_game_reservation_mutation_response

  # insert a single row into the table: "open_game_reservation"
  insert_open_game_reservation_one(
    # the row to be inserted
    object: open_game_reservation_insert_input!

    # on conflict condition
    on_conflict: open_game_reservation_on_conflict
  ): open_game_reservation

  # insert data into the table: "open_game_template"
  insert_open_game_template(
    # the rows to be inserted
    objects: [open_game_template_insert_input!]!

    # on conflict condition
    on_conflict: open_game_template_on_conflict
  ): open_game_template_mutation_response

  # insert a single row into the table: "open_game_template"
  insert_open_game_template_one(
    # the row to be inserted
    object: open_game_template_insert_input!

    # on conflict condition
    on_conflict: open_game_template_on_conflict
  ): open_game_template

  # insert data into the table: "player"
  insert_player(
    # the rows to be inserted
    objects: [player_insert_input!]!

    # on conflict condition
    on_conflict: player_on_conflict
  ): player_mutation_response

  # insert a single row into the table: "player"
  insert_player_one(
    # the row to be inserted
    object: player_insert_input!

    # on conflict condition
    on_conflict: player_on_conflict
  ): player

  # insert data into the table: "recurring_facility_game"
  insert_recurring_facility_game(
    # the rows to be inserted
    objects: [recurring_facility_game_insert_input!]!

    # on conflict condition
    on_conflict: recurring_facility_game_on_conflict
  ): recurring_facility_game_mutation_response

  # insert data into the table: "recurring_facility_game_datetime"
  insert_recurring_facility_game_datetime(
    # the rows to be inserted
    objects: [recurring_facility_game_datetime_insert_input!]!
  ): recurring_facility_game_datetime_mutation_response

  # insert a single row into the table: "recurring_facility_game_datetime"
  insert_recurring_facility_game_datetime_one(
    # the row to be inserted
    object: recurring_facility_game_datetime_insert_input!
  ): recurring_facility_game_datetime

  # insert a single row into the table: "recurring_facility_game"
  insert_recurring_facility_game_one(
    # the row to be inserted
    object: recurring_facility_game_insert_input!

    # on conflict condition
    on_conflict: recurring_facility_game_on_conflict
  ): recurring_facility_game

  # insert data into the table: "recurring_facility_game_reservation"
  insert_recurring_facility_game_reservation(
    # the rows to be inserted
    objects: [recurring_facility_game_reservation_insert_input!]!

    # on conflict condition
    on_conflict: recurring_facility_game_reservation_on_conflict
  ): recurring_facility_game_reservation_mutation_response

  # insert a single row into the table: "recurring_facility_game_reservation"
  insert_recurring_facility_game_reservation_one(
    # the row to be inserted
    object: recurring_facility_game_reservation_insert_input!

    # on conflict condition
    on_conflict: recurring_facility_game_reservation_on_conflict
  ): recurring_facility_game_reservation

  # insert data into the table: "recurring_open_game"
  insert_recurring_open_game(
    # the rows to be inserted
    objects: [recurring_open_game_insert_input!]!

    # on conflict condition
    on_conflict: recurring_open_game_on_conflict
  ): recurring_open_game_mutation_response

  # insert data into the table: "recurring_open_game_datetime"
  insert_recurring_open_game_datetime(
    # the rows to be inserted
    objects: [recurring_open_game_datetime_insert_input!]!
  ): recurring_open_game_datetime_mutation_response

  # insert a single row into the table: "recurring_open_game_datetime"
  insert_recurring_open_game_datetime_one(
    # the row to be inserted
    object: recurring_open_game_datetime_insert_input!
  ): recurring_open_game_datetime

  # insert a single row into the table: "recurring_open_game"
  insert_recurring_open_game_one(
    # the row to be inserted
    object: recurring_open_game_insert_input!

    # on conflict condition
    on_conflict: recurring_open_game_on_conflict
  ): recurring_open_game

  # insert data into the table: "recurring_open_game_reservation"
  insert_recurring_open_game_reservation(
    # the rows to be inserted
    objects: [recurring_open_game_reservation_insert_input!]!

    # on conflict condition
    on_conflict: recurring_open_game_reservation_on_conflict
  ): recurring_open_game_reservation_mutation_response

  # insert a single row into the table: "recurring_open_game_reservation"
  insert_recurring_open_game_reservation_one(
    # the row to be inserted
    object: recurring_open_game_reservation_insert_input!

    # on conflict condition
    on_conflict: recurring_open_game_reservation_on_conflict
  ): recurring_open_game_reservation

  # insert data into the table: "region"
  insert_region(
    # the rows to be inserted
    objects: [region_insert_input!]!

    # on conflict condition
    on_conflict: region_on_conflict
  ): region_mutation_response

  # insert a single row into the table: "region"
  insert_region_one(
    # the row to be inserted
    object: region_insert_input!

    # on conflict condition
    on_conflict: region_on_conflict
  ): region

  # insert data into the table: "submerchant_bank_information"
  insert_submerchant_bank_information(
    # the rows to be inserted
    objects: [submerchant_bank_information_insert_input!]!

    # on conflict condition
    on_conflict: submerchant_bank_information_on_conflict
  ): submerchant_bank_information_mutation_response

  # insert a single row into the table: "submerchant_bank_information"
  insert_submerchant_bank_information_one(
    # the row to be inserted
    object: submerchant_bank_information_insert_input!

    # on conflict condition
    on_conflict: submerchant_bank_information_on_conflict
  ): submerchant_bank_information

  # insert data into the table: "subregion"
  insert_subregion(
    # the rows to be inserted
    objects: [subregion_insert_input!]!

    # on conflict condition
    on_conflict: subregion_on_conflict
  ): subregion_mutation_response

  # insert a single row into the table: "subregion"
  insert_subregion_one(
    # the row to be inserted
    object: subregion_insert_input!

    # on conflict condition
    on_conflict: subregion_on_conflict
  ): subregion

  # insert data into the table: "weekday"
  insert_weekday(
    # the rows to be inserted
    objects: [weekday_insert_input!]!

    # on conflict condition
    on_conflict: weekday_on_conflict
  ): weekday_mutation_response

  # insert a single row into the table: "weekday"
  insert_weekday_one(
    # the row to be inserted
    object: weekday_insert_input!

    # on conflict condition
    on_conflict: weekday_on_conflict
  ): weekday

  # update data of the table: "facility"
  update_facility(
    # increments the integer columns with given value of the filtered values
    _inc: facility_inc_input

    # sets the columns of the filtered rows to the given values
    _set: facility_set_input

    # filter the rows which have to be updated
    where: facility_bool_exp!
  ): facility_mutation_response

  # update single row of the table: "facility"
  update_facility_by_pk(
    # increments the integer columns with given value of the filtered values
    _inc: facility_inc_input

    # sets the columns of the filtered rows to the given values
    _set: facility_set_input
    pk_columns: facility_pk_columns_input!
  ): facility

  # update data of the table: "facility_category"
  update_facility_category(
    # increments the integer columns with given value of the filtered values
    _inc: facility_category_inc_input

    # sets the columns of the filtered rows to the given values
    _set: facility_category_set_input

    # filter the rows which have to be updated
    where: facility_category_bool_exp!
  ): facility_category_mutation_response

  # update single row of the table: "facility_category"
  update_facility_category_by_pk(
    # increments the integer columns with given value of the filtered values
    _inc: facility_category_inc_input

    # sets the columns of the filtered rows to the given values
    _set: facility_category_set_input
    pk_columns: facility_category_pk_columns_input!
  ): facility_category

  # update data of the table: "facility_game"
  update_facility_game(
    # increments the integer columns with given value of the filtered values
    _inc: facility_game_inc_input

    # sets the columns of the filtered rows to the given values
    _set: facility_game_set_input

    # filter the rows which have to be updated
    where: facility_game_bool_exp!
  ): facility_game_mutation_response

  # update single row of the table: "facility_game"
  update_facility_game_by_pk(
    # increments the integer columns with given value of the filtered values
    _inc: facility_game_inc_input

    # sets the columns of the filtered rows to the given values
    _set: facility_game_set_input
    pk_columns: facility_game_pk_columns_input!
  ): facility_game

  # update data of the table: "facility_game_category"
  update_facility_game_category(
    # increments the integer columns with given value of the filtered values
    _inc: facility_game_category_inc_input

    # sets the columns of the filtered rows to the given values
    _set: facility_game_category_set_input

    # filter the rows which have to be updated
    where: facility_game_category_bool_exp!
  ): facility_game_category_mutation_response

  # update single row of the table: "facility_game_category"
  update_facility_game_category_by_pk(
    # increments the integer columns with given value of the filtered values
    _inc: facility_game_category_inc_input

    # sets the columns of the filtered rows to the given values
    _set: facility_game_category_set_input
    pk_columns: facility_game_category_pk_columns_input!
  ): facility_game_category

  # update data of the table: "facility_game_columns"
  update_facility_game_columns(
    # increments the integer columns with given value of the filtered values
    _inc: facility_game_columns_inc_input

    # sets the columns of the filtered rows to the given values
    _set: facility_game_columns_set_input

    # filter the rows which have to be updated
    where: facility_game_columns_bool_exp!
  ): facility_game_columns_mutation_response

  # update single row of the table: "facility_game_columns"
  update_facility_game_columns_by_pk(
    # increments the integer columns with given value of the filtered values
    _inc: facility_game_columns_inc_input

    # sets the columns of the filtered rows to the given values
    _set: facility_game_columns_set_input
    pk_columns: facility_game_columns_pk_columns_input!
  ): facility_game_columns

  # update data of the table: "facility_game_global_category"
  update_facility_game_global_category(
    # increments the integer columns with given value of the filtered values
    _inc: facility_game_global_category_inc_input

    # sets the columns of the filtered rows to the given values
    _set: facility_game_global_category_set_input

    # filter the rows which have to be updated
    where: facility_game_global_category_bool_exp!
  ): facility_game_global_category_mutation_response

  # update single row of the table: "facility_game_global_category"
  update_facility_game_global_category_by_pk(
    # increments the integer columns with given value of the filtered values
    _inc: facility_game_global_category_inc_input

    # sets the columns of the filtered rows to the given values
    _set: facility_game_global_category_set_input
    pk_columns: facility_game_global_category_pk_columns_input!
  ): facility_game_global_category

  # update data of the table: "facility_game_reservation"
  update_facility_game_reservation(
    # increments the integer columns with given value of the filtered values
    _inc: facility_game_reservation_inc_input

    # sets the columns of the filtered rows to the given values
    _set: facility_game_reservation_set_input

    # filter the rows which have to be updated
    where: facility_game_reservation_bool_exp!
  ): facility_game_reservation_mutation_response

  # update single row of the table: "facility_game_reservation"
  update_facility_game_reservation_by_pk(
    # increments the integer columns with given value of the filtered values
    _inc: facility_game_reservation_inc_input

    # sets the columns of the filtered rows to the given values
    _set: facility_game_reservation_set_input
    pk_columns: facility_game_reservation_pk_columns_input!
  ): facility_game_reservation

  # update data of the table: "facility_user"
  update_facility_user(
    # increments the integer columns with given value of the filtered values
    _inc: facility_user_inc_input

    # sets the columns of the filtered rows to the given values
    _set: facility_user_set_input

    # filter the rows which have to be updated
    where: facility_user_bool_exp!
  ): facility_user_mutation_response

  # update single row of the table: "facility_user"
  update_facility_user_by_pk(
    # increments the integer columns with given value of the filtered values
    _inc: facility_user_inc_input

    # sets the columns of the filtered rows to the given values
    _set: facility_user_set_input
    pk_columns: facility_user_pk_columns_input!
  ): facility_user

  # update data of the table: "facility_user_role"
  update_facility_user_role(
    # sets the columns of the filtered rows to the given values
    _set: facility_user_role_set_input

    # filter the rows which have to be updated
    where: facility_user_role_bool_exp!
  ): facility_user_role_mutation_response

  # update single row of the table: "facility_user_role"
  update_facility_user_role_by_pk(
    # sets the columns of the filtered rows to the given values
    _set: facility_user_role_set_input
    pk_columns: facility_user_role_pk_columns_input!
  ): facility_user_role

  # update data of the table: "field"
  update_field(
    # increments the integer columns with given value of the filtered values
    _inc: field_inc_input

    # sets the columns of the filtered rows to the given values
    _set: field_set_input

    # filter the rows which have to be updated
    where: field_bool_exp!
  ): field_mutation_response

  # update single row of the table: "field"
  update_field_by_pk(
    # increments the integer columns with given value of the filtered values
    _inc: field_inc_input

    # sets the columns of the filtered rows to the given values
    _set: field_set_input
    pk_columns: field_pk_columns_input!
  ): field

  # update data of the table: "field_type"
  update_field_type(
    # increments the integer columns with given value of the filtered values
    _inc: field_type_inc_input

    # sets the columns of the filtered rows to the given values
    _set: field_type_set_input

    # filter the rows which have to be updated
    where: field_type_bool_exp!
  ): field_type_mutation_response

  # update single row of the table: "field_type"
  update_field_type_by_pk(
    # increments the integer columns with given value of the filtered values
    _inc: field_type_inc_input

    # sets the columns of the filtered rows to the given values
    _set: field_type_set_input
    pk_columns: field_type_pk_columns_input!
  ): field_type

  # update data of the table: "global_category"
  update_global_category(
    # increments the integer columns with given value of the filtered values
    _inc: global_category_inc_input

    # sets the columns of the filtered rows to the given values
    _set: global_category_set_input

    # filter the rows which have to be updated
    where: global_category_bool_exp!
  ): global_category_mutation_response

  # update single row of the table: "global_category"
  update_global_category_by_pk(
    # increments the integer columns with given value of the filtered values
    _inc: global_category_inc_input

    # sets the columns of the filtered rows to the given values
    _set: global_category_set_input
    pk_columns: global_category_pk_columns_input!
  ): global_category

  # update data of the table: "hours_of_operation"
  update_hours_of_operation(
    # increments the integer columns with given value of the filtered values
    _inc: hours_of_operation_inc_input

    # sets the columns of the filtered rows to the given values
    _set: hours_of_operation_set_input

    # filter the rows which have to be updated
    where: hours_of_operation_bool_exp!
  ): hours_of_operation_mutation_response

  # update single row of the table: "hours_of_operation"
  update_hours_of_operation_by_pk(
    # increments the integer columns with given value of the filtered values
    _inc: hours_of_operation_inc_input

    # sets the columns of the filtered rows to the given values
    _set: hours_of_operation_set_input
    pk_columns: hours_of_operation_pk_columns_input!
  ): hours_of_operation

  # update data of the table: "location"
  update_location(
    # increments the integer columns with given value of the filtered values
    _inc: location_inc_input

    # sets the columns of the filtered rows to the given values
    _set: location_set_input

    # filter the rows which have to be updated
    where: location_bool_exp!
  ): location_mutation_response

  # update single row of the table: "location"
  update_location_by_pk(
    # increments the integer columns with given value of the filtered values
    _inc: location_inc_input

    # sets the columns of the filtered rows to the given values
    _set: location_set_input
    pk_columns: location_pk_columns_input!
  ): location

  # update data of the table: "open_game"
  update_open_game(
    # increments the integer columns with given value of the filtered values
    _inc: open_game_inc_input

    # sets the columns of the filtered rows to the given values
    _set: open_game_set_input

    # filter the rows which have to be updated
    where: open_game_bool_exp!
  ): open_game_mutation_response

  # update single row of the table: "open_game"
  update_open_game_by_pk(
    # increments the integer columns with given value of the filtered values
    _inc: open_game_inc_input

    # sets the columns of the filtered rows to the given values
    _set: open_game_set_input
    pk_columns: open_game_pk_columns_input!
  ): open_game

  # update data of the table: "open_game_columns"
  update_open_game_columns(
    # increments the integer columns with given value of the filtered values
    _inc: open_game_columns_inc_input

    # sets the columns of the filtered rows to the given values
    _set: open_game_columns_set_input

    # filter the rows which have to be updated
    where: open_game_columns_bool_exp!
  ): open_game_columns_mutation_response

  # update single row of the table: "open_game_columns"
  update_open_game_columns_by_pk(
    # increments the integer columns with given value of the filtered values
    _inc: open_game_columns_inc_input

    # sets the columns of the filtered rows to the given values
    _set: open_game_columns_set_input
    pk_columns: open_game_columns_pk_columns_input!
  ): open_game_columns

  # update data of the table: "open_game_reservation"
  update_open_game_reservation(
    # increments the integer columns with given value of the filtered values
    _inc: open_game_reservation_inc_input

    # sets the columns of the filtered rows to the given values
    _set: open_game_reservation_set_input

    # filter the rows which have to be updated
    where: open_game_reservation_bool_exp!
  ): open_game_reservation_mutation_response

  # update single row of the table: "open_game_reservation"
  update_open_game_reservation_by_pk(
    # increments the integer columns with given value of the filtered values
    _inc: open_game_reservation_inc_input

    # sets the columns of the filtered rows to the given values
    _set: open_game_reservation_set_input
    pk_columns: open_game_reservation_pk_columns_input!
  ): open_game_reservation

  # update data of the table: "open_game_template"
  update_open_game_template(
    # increments the integer columns with given value of the filtered values
    _inc: open_game_template_inc_input

    # sets the columns of the filtered rows to the given values
    _set: open_game_template_set_input

    # filter the rows which have to be updated
    where: open_game_template_bool_exp!
  ): open_game_template_mutation_response

  # update single row of the table: "open_game_template"
  update_open_game_template_by_pk(
    # increments the integer columns with given value of the filtered values
    _inc: open_game_template_inc_input

    # sets the columns of the filtered rows to the given values
    _set: open_game_template_set_input
    pk_columns: open_game_template_pk_columns_input!
  ): open_game_template

  # update data of the table: "player"
  update_player(
    # increments the integer columns with given value of the filtered values
    _inc: player_inc_input

    # sets the columns of the filtered rows to the given values
    _set: player_set_input

    # filter the rows which have to be updated
    where: player_bool_exp!
  ): player_mutation_response

  # update single row of the table: "player"
  update_player_by_pk(
    # increments the integer columns with given value of the filtered values
    _inc: player_inc_input

    # sets the columns of the filtered rows to the given values
    _set: player_set_input
    pk_columns: player_pk_columns_input!
  ): player

  # update data of the table: "recurring_facility_game"
  update_recurring_facility_game(
    # increments the integer columns with given value of the filtered values
    _inc: recurring_facility_game_inc_input

    # sets the columns of the filtered rows to the given values
    _set: recurring_facility_game_set_input

    # filter the rows which have to be updated
    where: recurring_facility_game_bool_exp!
  ): recurring_facility_game_mutation_response

  # update single row of the table: "recurring_facility_game"
  update_recurring_facility_game_by_pk(
    # increments the integer columns with given value of the filtered values
    _inc: recurring_facility_game_inc_input

    # sets the columns of the filtered rows to the given values
    _set: recurring_facility_game_set_input
    pk_columns: recurring_facility_game_pk_columns_input!
  ): recurring_facility_game

  # update data of the table: "recurring_facility_game_datetime"
  update_recurring_facility_game_datetime(
    # increments the integer columns with given value of the filtered values
    _inc: recurring_facility_game_datetime_inc_input

    # sets the columns of the filtered rows to the given values
    _set: recurring_facility_game_datetime_set_input

    # filter the rows which have to be updated
    where: recurring_facility_game_datetime_bool_exp!
  ): recurring_facility_game_datetime_mutation_response

  # update data of the table: "recurring_facility_game_reservation"
  update_recurring_facility_game_reservation(
    # increments the integer columns with given value of the filtered values
    _inc: recurring_facility_game_reservation_inc_input

    # sets the columns of the filtered rows to the given values
    _set: recurring_facility_game_reservation_set_input

    # filter the rows which have to be updated
    where: recurring_facility_game_reservation_bool_exp!
  ): recurring_facility_game_reservation_mutation_response

  # update single row of the table: "recurring_facility_game_reservation"
  update_recurring_facility_game_reservation_by_pk(
    # increments the integer columns with given value of the filtered values
    _inc: recurring_facility_game_reservation_inc_input

    # sets the columns of the filtered rows to the given values
    _set: recurring_facility_game_reservation_set_input
    pk_columns: recurring_facility_game_reservation_pk_columns_input!
  ): recurring_facility_game_reservation

  # update data of the table: "recurring_open_game"
  update_recurring_open_game(
    # increments the integer columns with given value of the filtered values
    _inc: recurring_open_game_inc_input

    # sets the columns of the filtered rows to the given values
    _set: recurring_open_game_set_input

    # filter the rows which have to be updated
    where: recurring_open_game_bool_exp!
  ): recurring_open_game_mutation_response

  # update single row of the table: "recurring_open_game"
  update_recurring_open_game_by_pk(
    # increments the integer columns with given value of the filtered values
    _inc: recurring_open_game_inc_input

    # sets the columns of the filtered rows to the given values
    _set: recurring_open_game_set_input
    pk_columns: recurring_open_game_pk_columns_input!
  ): recurring_open_game

  # update data of the table: "recurring_open_game_datetime"
  update_recurring_open_game_datetime(
    # increments the integer columns with given value of the filtered values
    _inc: recurring_open_game_datetime_inc_input

    # sets the columns of the filtered rows to the given values
    _set: recurring_open_game_datetime_set_input

    # filter the rows which have to be updated
    where: recurring_open_game_datetime_bool_exp!
  ): recurring_open_game_datetime_mutation_response

  # update data of the table: "recurring_open_game_reservation"
  update_recurring_open_game_reservation(
    # increments the integer columns with given value of the filtered values
    _inc: recurring_open_game_reservation_inc_input

    # sets the columns of the filtered rows to the given values
    _set: recurring_open_game_reservation_set_input

    # filter the rows which have to be updated
    where: recurring_open_game_reservation_bool_exp!
  ): recurring_open_game_reservation_mutation_response

  # update single row of the table: "recurring_open_game_reservation"
  update_recurring_open_game_reservation_by_pk(
    # increments the integer columns with given value of the filtered values
    _inc: recurring_open_game_reservation_inc_input

    # sets the columns of the filtered rows to the given values
    _set: recurring_open_game_reservation_set_input
    pk_columns: recurring_open_game_reservation_pk_columns_input!
  ): recurring_open_game_reservation

  # update data of the table: "region"
  update_region(
    # increments the integer columns with given value of the filtered values
    _inc: region_inc_input

    # sets the columns of the filtered rows to the given values
    _set: region_set_input

    # filter the rows which have to be updated
    where: region_bool_exp!
  ): region_mutation_response

  # update single row of the table: "region"
  update_region_by_pk(
    # increments the integer columns with given value of the filtered values
    _inc: region_inc_input

    # sets the columns of the filtered rows to the given values
    _set: region_set_input
    pk_columns: region_pk_columns_input!
  ): region

  # update data of the table: "submerchant_bank_information"
  update_submerchant_bank_information(
    # increments the integer columns with given value of the filtered values
    _inc: submerchant_bank_information_inc_input

    # sets the columns of the filtered rows to the given values
    _set: submerchant_bank_information_set_input

    # filter the rows which have to be updated
    where: submerchant_bank_information_bool_exp!
  ): submerchant_bank_information_mutation_response

  # update single row of the table: "submerchant_bank_information"
  update_submerchant_bank_information_by_pk(
    # increments the integer columns with given value of the filtered values
    _inc: submerchant_bank_information_inc_input

    # sets the columns of the filtered rows to the given values
    _set: submerchant_bank_information_set_input
    pk_columns: submerchant_bank_information_pk_columns_input!
  ): submerchant_bank_information

  # update data of the table: "subregion"
  update_subregion(
    # increments the integer columns with given value of the filtered values
    _inc: subregion_inc_input

    # sets the columns of the filtered rows to the given values
    _set: subregion_set_input

    # filter the rows which have to be updated
    where: subregion_bool_exp!
  ): subregion_mutation_response

  # update single row of the table: "subregion"
  update_subregion_by_pk(
    # increments the integer columns with given value of the filtered values
    _inc: subregion_inc_input

    # sets the columns of the filtered rows to the given values
    _set: subregion_set_input
    pk_columns: subregion_pk_columns_input!
  ): subregion

  # update data of the table: "weekday"
  update_weekday(
    # sets the columns of the filtered rows to the given values
    _set: weekday_set_input

    # filter the rows which have to be updated
    where: weekday_bool_exp!
  ): weekday_mutation_response

  # update single row of the table: "weekday"
  update_weekday_by_pk(
    # sets the columns of the filtered rows to the given values
    _set: weekday_set_input
    pk_columns: weekday_pk_columns_input!
  ): weekday
}

scalar numeric

# expression to compare columns of type numeric. All fields are combined with logical 'AND'.
input numeric_comparison_exp {
  _eq: numeric
  _gt: numeric
  _gte: numeric
  _in: [numeric!]
  _is_null: Boolean
  _lt: numeric
  _lte: numeric
  _neq: numeric
  _nin: [numeric!]
}

# A Plei App game booked at a facility, to be listed on mobile app for players to join
#
#
# columns and relationships of "open_game"
#
type open_game {
  created_at: timestamptz!
  datetime: timestamptz!
  id: Int!

  # An object relationship
  open_game_column: open_game_columns!
  open_game_columns_id: Int!

  # An array relationship
  open_game_reservations(
    # distinct select on columns
    distinct_on: [open_game_reservation_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [open_game_reservation_order_by!]

    # filter the rows returned
    where: open_game_reservation_bool_exp
  ): [open_game_reservation!]!

  # An aggregated array relationship
  open_game_reservations_aggregate(
    # distinct select on columns
    distinct_on: [open_game_reservation_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [open_game_reservation_order_by!]

    # filter the rows returned
    where: open_game_reservation_bool_exp
  ): open_game_reservation_aggregate!

  # An object relationship
  recurring_open_game: recurring_open_game
  recurring_open_game_id: Int
  updated_at: timestamptz!
}

# aggregated selection of "open_game"
type open_game_aggregate {
  aggregate: open_game_aggregate_fields
  nodes: [open_game!]!
}

# aggregate fields of "open_game"
type open_game_aggregate_fields {
  avg: open_game_avg_fields
  count(columns: [open_game_select_column!], distinct: Boolean): Int
  max: open_game_max_fields
  min: open_game_min_fields
  stddev: open_game_stddev_fields
  stddev_pop: open_game_stddev_pop_fields
  stddev_samp: open_game_stddev_samp_fields
  sum: open_game_sum_fields
  var_pop: open_game_var_pop_fields
  var_samp: open_game_var_samp_fields
  variance: open_game_variance_fields
}

# order by aggregate values of table "open_game"
input open_game_aggregate_order_by {
  avg: open_game_avg_order_by
  count: order_by
  max: open_game_max_order_by
  min: open_game_min_order_by
  stddev: open_game_stddev_order_by
  stddev_pop: open_game_stddev_pop_order_by
  stddev_samp: open_game_stddev_samp_order_by
  sum: open_game_sum_order_by
  var_pop: open_game_var_pop_order_by
  var_samp: open_game_var_samp_order_by
  variance: open_game_variance_order_by
}

# input type for inserting array relation for remote table "open_game"
input open_game_arr_rel_insert_input {
  data: [open_game_insert_input!]!
  on_conflict: open_game_on_conflict
}

# aggregate avg on columns
type open_game_avg_fields {
  id: Float
  open_game_columns_id: Float
  recurring_open_game_id: Float
}

# order by avg() on columns of table "open_game"
input open_game_avg_order_by {
  id: order_by
  open_game_columns_id: order_by
  recurring_open_game_id: order_by
}

# Boolean expression to filter rows from the table "open_game". All fields are combined with a logical 'AND'.
input open_game_bool_exp {
  _and: [open_game_bool_exp]
  _not: open_game_bool_exp
  _or: [open_game_bool_exp]
  created_at: timestamptz_comparison_exp
  datetime: timestamptz_comparison_exp
  id: Int_comparison_exp
  open_game_column: open_game_columns_bool_exp
  open_game_columns_id: Int_comparison_exp
  open_game_reservations: open_game_reservation_bool_exp
  recurring_open_game: recurring_open_game_bool_exp
  recurring_open_game_id: Int_comparison_exp
  updated_at: timestamptz_comparison_exp
}

# The columns for a Plei App game, used for open_game and open_game_template
#
#
# columns and relationships of "open_game_columns"
#
type open_game_columns {
  auto_cancel: Boolean
  auto_process_payment: Boolean
  cost: Int
  created_at: timestamptz!
  description: String
  duration: Int!
  females_only: Boolean

  # An object relationship
  field: field!
  field_id: Int!
  id: Int!
  include_fakes: Boolean
  males_only: Boolean
  max_number_of_players: Int
  min_number_of_players: Int
  notes: String
  number_of_teams: Int

  # An array relationship
  open_game_templates(
    # distinct select on columns
    distinct_on: [open_game_template_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [open_game_template_order_by!]

    # filter the rows returned
    where: open_game_template_bool_exp
  ): [open_game_template!]!

  # An aggregated array relationship
  open_game_templates_aggregate(
    # distinct select on columns
    distinct_on: [open_game_template_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [open_game_template_order_by!]

    # filter the rows returned
    where: open_game_template_bool_exp
  ): open_game_template_aggregate!

  # An array relationship
  open_games(
    # distinct select on columns
    distinct_on: [open_game_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [open_game_order_by!]

    # filter the rows returned
    where: open_game_bool_exp
  ): [open_game!]!

  # An aggregated array relationship
  open_games_aggregate(
    # distinct select on columns
    distinct_on: [open_game_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [open_game_order_by!]

    # filter the rows returned
    where: open_game_bool_exp
  ): open_game_aggregate!
  photo_url: String
  price: Int!

  # An array relationship
  recurring_open_games(
    # distinct select on columns
    distinct_on: [recurring_open_game_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [recurring_open_game_order_by!]

    # filter the rows returned
    where: recurring_open_game_bool_exp
  ): [recurring_open_game!]!

  # An aggregated array relationship
  recurring_open_games_aggregate(
    # distinct select on columns
    distinct_on: [recurring_open_game_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [recurring_open_game_order_by!]

    # filter the rows returned
    where: recurring_open_game_bool_exp
  ): recurring_open_game_aggregate!
  skill_level: String
  status: String
  title: String!
  updated_at: timestamptz!
}

# aggregated selection of "open_game_columns"
type open_game_columns_aggregate {
  aggregate: open_game_columns_aggregate_fields
  nodes: [open_game_columns!]!
}

# aggregate fields of "open_game_columns"
type open_game_columns_aggregate_fields {
  avg: open_game_columns_avg_fields
  count(columns: [open_game_columns_select_column!], distinct: Boolean): Int
  max: open_game_columns_max_fields
  min: open_game_columns_min_fields
  stddev: open_game_columns_stddev_fields
  stddev_pop: open_game_columns_stddev_pop_fields
  stddev_samp: open_game_columns_stddev_samp_fields
  sum: open_game_columns_sum_fields
  var_pop: open_game_columns_var_pop_fields
  var_samp: open_game_columns_var_samp_fields
  variance: open_game_columns_variance_fields
}

# order by aggregate values of table "open_game_columns"
input open_game_columns_aggregate_order_by {
  avg: open_game_columns_avg_order_by
  count: order_by
  max: open_game_columns_max_order_by
  min: open_game_columns_min_order_by
  stddev: open_game_columns_stddev_order_by
  stddev_pop: open_game_columns_stddev_pop_order_by
  stddev_samp: open_game_columns_stddev_samp_order_by
  sum: open_game_columns_sum_order_by
  var_pop: open_game_columns_var_pop_order_by
  var_samp: open_game_columns_var_samp_order_by
  variance: open_game_columns_variance_order_by
}

# input type for inserting array relation for remote table "open_game_columns"
input open_game_columns_arr_rel_insert_input {
  data: [open_game_columns_insert_input!]!
  on_conflict: open_game_columns_on_conflict
}

# aggregate avg on columns
type open_game_columns_avg_fields {
  cost: Float
  duration: Float
  field_id: Float
  id: Float
  max_number_of_players: Float
  min_number_of_players: Float
  number_of_teams: Float
  price: Float
}

# order by avg() on columns of table "open_game_columns"
input open_game_columns_avg_order_by {
  cost: order_by
  duration: order_by
  field_id: order_by
  id: order_by
  max_number_of_players: order_by
  min_number_of_players: order_by
  number_of_teams: order_by
  price: order_by
}

# Boolean expression to filter rows from the table "open_game_columns". All fields are combined with a logical 'AND'.
input open_game_columns_bool_exp {
  _and: [open_game_columns_bool_exp]
  _not: open_game_columns_bool_exp
  _or: [open_game_columns_bool_exp]
  auto_cancel: Boolean_comparison_exp
  auto_process_payment: Boolean_comparison_exp
  cost: Int_comparison_exp
  created_at: timestamptz_comparison_exp
  description: String_comparison_exp
  duration: Int_comparison_exp
  females_only: Boolean_comparison_exp
  field: field_bool_exp
  field_id: Int_comparison_exp
  id: Int_comparison_exp
  include_fakes: Boolean_comparison_exp
  males_only: Boolean_comparison_exp
  max_number_of_players: Int_comparison_exp
  min_number_of_players: Int_comparison_exp
  notes: String_comparison_exp
  number_of_teams: Int_comparison_exp
  open_game_templates: open_game_template_bool_exp
  open_games: open_game_bool_exp
  photo_url: String_comparison_exp
  price: Int_comparison_exp
  recurring_open_games: recurring_open_game_bool_exp
  skill_level: String_comparison_exp
  status: String_comparison_exp
  title: String_comparison_exp
  updated_at: timestamptz_comparison_exp
}

# unique or primary key constraints on table "open_game_columns"
enum open_game_columns_constraint {
  # unique or primary key constraint
  open_game_columns_pkey
}

# input type for incrementing integer column in table "open_game_columns"
input open_game_columns_inc_input {
  cost: Int
  duration: Int
  field_id: Int
  id: Int
  max_number_of_players: Int
  min_number_of_players: Int
  number_of_teams: Int
  price: Int
}

# input type for inserting data into table "open_game_columns"
input open_game_columns_insert_input {
  auto_cancel: Boolean
  auto_process_payment: Boolean
  cost: Int
  created_at: timestamptz
  description: String
  duration: Int
  females_only: Boolean
  field: field_obj_rel_insert_input
  field_id: Int
  id: Int
  include_fakes: Boolean
  males_only: Boolean
  max_number_of_players: Int
  min_number_of_players: Int
  notes: String
  number_of_teams: Int
  open_game_templates: open_game_template_arr_rel_insert_input
  open_games: open_game_arr_rel_insert_input
  photo_url: String
  price: Int
  recurring_open_games: recurring_open_game_arr_rel_insert_input
  skill_level: String
  status: String
  title: String
  updated_at: timestamptz
}

# aggregate max on columns
type open_game_columns_max_fields {
  cost: Int
  created_at: timestamptz
  description: String
  duration: Int
  field_id: Int
  id: Int
  max_number_of_players: Int
  min_number_of_players: Int
  notes: String
  number_of_teams: Int
  photo_url: String
  price: Int
  skill_level: String
  status: String
  title: String
  updated_at: timestamptz
}

# order by max() on columns of table "open_game_columns"
input open_game_columns_max_order_by {
  cost: order_by
  created_at: order_by
  description: order_by
  duration: order_by
  field_id: order_by
  id: order_by
  max_number_of_players: order_by
  min_number_of_players: order_by
  notes: order_by
  number_of_teams: order_by
  photo_url: order_by
  price: order_by
  skill_level: order_by
  status: order_by
  title: order_by
  updated_at: order_by
}

# aggregate min on columns
type open_game_columns_min_fields {
  cost: Int
  created_at: timestamptz
  description: String
  duration: Int
  field_id: Int
  id: Int
  max_number_of_players: Int
  min_number_of_players: Int
  notes: String
  number_of_teams: Int
  photo_url: String
  price: Int
  skill_level: String
  status: String
  title: String
  updated_at: timestamptz
}

# order by min() on columns of table "open_game_columns"
input open_game_columns_min_order_by {
  cost: order_by
  created_at: order_by
  description: order_by
  duration: order_by
  field_id: order_by
  id: order_by
  max_number_of_players: order_by
  min_number_of_players: order_by
  notes: order_by
  number_of_teams: order_by
  photo_url: order_by
  price: order_by
  skill_level: order_by
  status: order_by
  title: order_by
  updated_at: order_by
}

# response of any mutation on the table "open_game_columns"
type open_game_columns_mutation_response {
  # number of affected rows by the mutation
  affected_rows: Int!

  # data of the affected rows by the mutation
  returning: [open_game_columns!]!
}

# input type for inserting object relation for remote table "open_game_columns"
input open_game_columns_obj_rel_insert_input {
  data: open_game_columns_insert_input!
  on_conflict: open_game_columns_on_conflict
}

# on conflict condition type for table "open_game_columns"
input open_game_columns_on_conflict {
  constraint: open_game_columns_constraint!
  update_columns: [open_game_columns_update_column!]!
  where: open_game_columns_bool_exp
}

# ordering options when selecting data from "open_game_columns"
input open_game_columns_order_by {
  auto_cancel: order_by
  auto_process_payment: order_by
  cost: order_by
  created_at: order_by
  description: order_by
  duration: order_by
  females_only: order_by
  field: field_order_by
  field_id: order_by
  id: order_by
  include_fakes: order_by
  males_only: order_by
  max_number_of_players: order_by
  min_number_of_players: order_by
  notes: order_by
  number_of_teams: order_by
  open_game_templates_aggregate: open_game_template_aggregate_order_by
  open_games_aggregate: open_game_aggregate_order_by
  photo_url: order_by
  price: order_by
  recurring_open_games_aggregate: recurring_open_game_aggregate_order_by
  skill_level: order_by
  status: order_by
  title: order_by
  updated_at: order_by
}

# primary key columns input for table: "open_game_columns"
input open_game_columns_pk_columns_input {
  id: Int!
}

# select columns of table "open_game_columns"
enum open_game_columns_select_column {
  # column name
  auto_cancel

  # column name
  auto_process_payment

  # column name
  cost

  # column name
  created_at

  # column name
  description

  # column name
  duration

  # column name
  females_only

  # column name
  field_id

  # column name
  id

  # column name
  include_fakes

  # column name
  males_only

  # column name
  max_number_of_players

  # column name
  min_number_of_players

  # column name
  notes

  # column name
  number_of_teams

  # column name
  photo_url

  # column name
  price

  # column name
  skill_level

  # column name
  status

  # column name
  title

  # column name
  updated_at
}

# input type for updating data in table "open_game_columns"
input open_game_columns_set_input {
  auto_cancel: Boolean
  auto_process_payment: Boolean
  cost: Int
  created_at: timestamptz
  description: String
  duration: Int
  females_only: Boolean
  field_id: Int
  id: Int
  include_fakes: Boolean
  males_only: Boolean
  max_number_of_players: Int
  min_number_of_players: Int
  notes: String
  number_of_teams: Int
  photo_url: String
  price: Int
  skill_level: String
  status: String
  title: String
  updated_at: timestamptz
}

# aggregate stddev on columns
type open_game_columns_stddev_fields {
  cost: Float
  duration: Float
  field_id: Float
  id: Float
  max_number_of_players: Float
  min_number_of_players: Float
  number_of_teams: Float
  price: Float
}

# order by stddev() on columns of table "open_game_columns"
input open_game_columns_stddev_order_by {
  cost: order_by
  duration: order_by
  field_id: order_by
  id: order_by
  max_number_of_players: order_by
  min_number_of_players: order_by
  number_of_teams: order_by
  price: order_by
}

# aggregate stddev_pop on columns
type open_game_columns_stddev_pop_fields {
  cost: Float
  duration: Float
  field_id: Float
  id: Float
  max_number_of_players: Float
  min_number_of_players: Float
  number_of_teams: Float
  price: Float
}

# order by stddev_pop() on columns of table "open_game_columns"
input open_game_columns_stddev_pop_order_by {
  cost: order_by
  duration: order_by
  field_id: order_by
  id: order_by
  max_number_of_players: order_by
  min_number_of_players: order_by
  number_of_teams: order_by
  price: order_by
}

# aggregate stddev_samp on columns
type open_game_columns_stddev_samp_fields {
  cost: Float
  duration: Float
  field_id: Float
  id: Float
  max_number_of_players: Float
  min_number_of_players: Float
  number_of_teams: Float
  price: Float
}

# order by stddev_samp() on columns of table "open_game_columns"
input open_game_columns_stddev_samp_order_by {
  cost: order_by
  duration: order_by
  field_id: order_by
  id: order_by
  max_number_of_players: order_by
  min_number_of_players: order_by
  number_of_teams: order_by
  price: order_by
}

# aggregate sum on columns
type open_game_columns_sum_fields {
  cost: Int
  duration: Int
  field_id: Int
  id: Int
  max_number_of_players: Int
  min_number_of_players: Int
  number_of_teams: Int
  price: Int
}

# order by sum() on columns of table "open_game_columns"
input open_game_columns_sum_order_by {
  cost: order_by
  duration: order_by
  field_id: order_by
  id: order_by
  max_number_of_players: order_by
  min_number_of_players: order_by
  number_of_teams: order_by
  price: order_by
}

# update columns of table "open_game_columns"
enum open_game_columns_update_column {
  # column name
  auto_cancel

  # column name
  auto_process_payment

  # column name
  cost

  # column name
  created_at

  # column name
  description

  # column name
  duration

  # column name
  females_only

  # column name
  field_id

  # column name
  id

  # column name
  include_fakes

  # column name
  males_only

  # column name
  max_number_of_players

  # column name
  min_number_of_players

  # column name
  notes

  # column name
  number_of_teams

  # column name
  photo_url

  # column name
  price

  # column name
  skill_level

  # column name
  status

  # column name
  title

  # column name
  updated_at
}

# aggregate var_pop on columns
type open_game_columns_var_pop_fields {
  cost: Float
  duration: Float
  field_id: Float
  id: Float
  max_number_of_players: Float
  min_number_of_players: Float
  number_of_teams: Float
  price: Float
}

# order by var_pop() on columns of table "open_game_columns"
input open_game_columns_var_pop_order_by {
  cost: order_by
  duration: order_by
  field_id: order_by
  id: order_by
  max_number_of_players: order_by
  min_number_of_players: order_by
  number_of_teams: order_by
  price: order_by
}

# aggregate var_samp on columns
type open_game_columns_var_samp_fields {
  cost: Float
  duration: Float
  field_id: Float
  id: Float
  max_number_of_players: Float
  min_number_of_players: Float
  number_of_teams: Float
  price: Float
}

# order by var_samp() on columns of table "open_game_columns"
input open_game_columns_var_samp_order_by {
  cost: order_by
  duration: order_by
  field_id: order_by
  id: order_by
  max_number_of_players: order_by
  min_number_of_players: order_by
  number_of_teams: order_by
  price: order_by
}

# aggregate variance on columns
type open_game_columns_variance_fields {
  cost: Float
  duration: Float
  field_id: Float
  id: Float
  max_number_of_players: Float
  min_number_of_players: Float
  number_of_teams: Float
  price: Float
}

# order by variance() on columns of table "open_game_columns"
input open_game_columns_variance_order_by {
  cost: order_by
  duration: order_by
  field_id: order_by
  id: order_by
  max_number_of_players: order_by
  min_number_of_players: order_by
  number_of_teams: order_by
  price: order_by
}

# unique or primary key constraints on table "open_game"
enum open_game_constraint {
  # unique or primary key constraint
  open_game_pkey
}

# input type for incrementing integer column in table "open_game"
input open_game_inc_input {
  id: Int
  open_game_columns_id: Int
  recurring_open_game_id: Int
}

# input type for inserting data into table "open_game"
input open_game_insert_input {
  created_at: timestamptz
  datetime: timestamptz
  id: Int
  open_game_column: open_game_columns_obj_rel_insert_input
  open_game_columns_id: Int
  open_game_reservations: open_game_reservation_arr_rel_insert_input
  recurring_open_game: recurring_open_game_obj_rel_insert_input
  recurring_open_game_id: Int
  updated_at: timestamptz
}

# aggregate max on columns
type open_game_max_fields {
  created_at: timestamptz
  datetime: timestamptz
  id: Int
  open_game_columns_id: Int
  recurring_open_game_id: Int
  updated_at: timestamptz
}

# order by max() on columns of table "open_game"
input open_game_max_order_by {
  created_at: order_by
  datetime: order_by
  id: order_by
  open_game_columns_id: order_by
  recurring_open_game_id: order_by
  updated_at: order_by
}

# aggregate min on columns
type open_game_min_fields {
  created_at: timestamptz
  datetime: timestamptz
  id: Int
  open_game_columns_id: Int
  recurring_open_game_id: Int
  updated_at: timestamptz
}

# order by min() on columns of table "open_game"
input open_game_min_order_by {
  created_at: order_by
  datetime: order_by
  id: order_by
  open_game_columns_id: order_by
  recurring_open_game_id: order_by
  updated_at: order_by
}

# response of any mutation on the table "open_game"
type open_game_mutation_response {
  # number of affected rows by the mutation
  affected_rows: Int!

  # data of the affected rows by the mutation
  returning: [open_game!]!
}

# input type for inserting object relation for remote table "open_game"
input open_game_obj_rel_insert_input {
  data: open_game_insert_input!
  on_conflict: open_game_on_conflict
}

# on conflict condition type for table "open_game"
input open_game_on_conflict {
  constraint: open_game_constraint!
  update_columns: [open_game_update_column!]!
  where: open_game_bool_exp
}

# ordering options when selecting data from "open_game"
input open_game_order_by {
  created_at: order_by
  datetime: order_by
  id: order_by
  open_game_column: open_game_columns_order_by
  open_game_columns_id: order_by
  open_game_reservations_aggregate: open_game_reservation_aggregate_order_by
  recurring_open_game: recurring_open_game_order_by
  recurring_open_game_id: order_by
  updated_at: order_by
}

# primary key columns input for table: "open_game"
input open_game_pk_columns_input {
  id: Int!
}

# A player reservation for a singular open game
#
#
# columns and relationships of "open_game_reservation"
#
type open_game_reservation {
  created_at: timestamptz!
  id: Int!
  number_of_guests: Int!

  # An object relationship
  open_game: open_game!
  open_game_id: Int!

  # An object relationship
  player: player!
  player_id: Int!
  updated_at: timestamptz!
}

# aggregated selection of "open_game_reservation"
type open_game_reservation_aggregate {
  aggregate: open_game_reservation_aggregate_fields
  nodes: [open_game_reservation!]!
}

# aggregate fields of "open_game_reservation"
type open_game_reservation_aggregate_fields {
  avg: open_game_reservation_avg_fields
  count(columns: [open_game_reservation_select_column!], distinct: Boolean): Int
  max: open_game_reservation_max_fields
  min: open_game_reservation_min_fields
  stddev: open_game_reservation_stddev_fields
  stddev_pop: open_game_reservation_stddev_pop_fields
  stddev_samp: open_game_reservation_stddev_samp_fields
  sum: open_game_reservation_sum_fields
  var_pop: open_game_reservation_var_pop_fields
  var_samp: open_game_reservation_var_samp_fields
  variance: open_game_reservation_variance_fields
}

# order by aggregate values of table "open_game_reservation"
input open_game_reservation_aggregate_order_by {
  avg: open_game_reservation_avg_order_by
  count: order_by
  max: open_game_reservation_max_order_by
  min: open_game_reservation_min_order_by
  stddev: open_game_reservation_stddev_order_by
  stddev_pop: open_game_reservation_stddev_pop_order_by
  stddev_samp: open_game_reservation_stddev_samp_order_by
  sum: open_game_reservation_sum_order_by
  var_pop: open_game_reservation_var_pop_order_by
  var_samp: open_game_reservation_var_samp_order_by
  variance: open_game_reservation_variance_order_by
}

# input type for inserting array relation for remote table "open_game_reservation"
input open_game_reservation_arr_rel_insert_input {
  data: [open_game_reservation_insert_input!]!
  on_conflict: open_game_reservation_on_conflict
}

# aggregate avg on columns
type open_game_reservation_avg_fields {
  id: Float
  number_of_guests: Float
  open_game_id: Float
  player_id: Float
}

# order by avg() on columns of table "open_game_reservation"
input open_game_reservation_avg_order_by {
  id: order_by
  number_of_guests: order_by
  open_game_id: order_by
  player_id: order_by
}

# Boolean expression to filter rows from the table "open_game_reservation". All fields are combined with a logical 'AND'.
input open_game_reservation_bool_exp {
  _and: [open_game_reservation_bool_exp]
  _not: open_game_reservation_bool_exp
  _or: [open_game_reservation_bool_exp]
  created_at: timestamptz_comparison_exp
  id: Int_comparison_exp
  number_of_guests: Int_comparison_exp
  open_game: open_game_bool_exp
  open_game_id: Int_comparison_exp
  player: player_bool_exp
  player_id: Int_comparison_exp
  updated_at: timestamptz_comparison_exp
}

# unique or primary key constraints on table "open_game_reservation"
enum open_game_reservation_constraint {
  # unique or primary key constraint
  open_game_reservation_pkey

  # unique or primary key constraint
  unique_players_per_open_game
}

# input type for incrementing integer column in table "open_game_reservation"
input open_game_reservation_inc_input {
  id: Int
  number_of_guests: Int
  open_game_id: Int
  player_id: Int
}

# input type for inserting data into table "open_game_reservation"
input open_game_reservation_insert_input {
  created_at: timestamptz
  id: Int
  number_of_guests: Int
  open_game: open_game_obj_rel_insert_input
  open_game_id: Int
  player: player_obj_rel_insert_input
  player_id: Int
  updated_at: timestamptz
}

# aggregate max on columns
type open_game_reservation_max_fields {
  created_at: timestamptz
  id: Int
  number_of_guests: Int
  open_game_id: Int
  player_id: Int
  updated_at: timestamptz
}

# order by max() on columns of table "open_game_reservation"
input open_game_reservation_max_order_by {
  created_at: order_by
  id: order_by
  number_of_guests: order_by
  open_game_id: order_by
  player_id: order_by
  updated_at: order_by
}

# aggregate min on columns
type open_game_reservation_min_fields {
  created_at: timestamptz
  id: Int
  number_of_guests: Int
  open_game_id: Int
  player_id: Int
  updated_at: timestamptz
}

# order by min() on columns of table "open_game_reservation"
input open_game_reservation_min_order_by {
  created_at: order_by
  id: order_by
  number_of_guests: order_by
  open_game_id: order_by
  player_id: order_by
  updated_at: order_by
}

# response of any mutation on the table "open_game_reservation"
type open_game_reservation_mutation_response {
  # number of affected rows by the mutation
  affected_rows: Int!

  # data of the affected rows by the mutation
  returning: [open_game_reservation!]!
}

# input type for inserting object relation for remote table "open_game_reservation"
input open_game_reservation_obj_rel_insert_input {
  data: open_game_reservation_insert_input!
  on_conflict: open_game_reservation_on_conflict
}

# on conflict condition type for table "open_game_reservation"
input open_game_reservation_on_conflict {
  constraint: open_game_reservation_constraint!
  update_columns: [open_game_reservation_update_column!]!
  where: open_game_reservation_bool_exp
}

# ordering options when selecting data from "open_game_reservation"
input open_game_reservation_order_by {
  created_at: order_by
  id: order_by
  number_of_guests: order_by
  open_game: open_game_order_by
  open_game_id: order_by
  player: player_order_by
  player_id: order_by
  updated_at: order_by
}

# primary key columns input for table: "open_game_reservation"
input open_game_reservation_pk_columns_input {
  id: Int!
}

# select columns of table "open_game_reservation"
enum open_game_reservation_select_column {
  # column name
  created_at

  # column name
  id

  # column name
  number_of_guests

  # column name
  open_game_id

  # column name
  player_id

  # column name
  updated_at
}

# input type for updating data in table "open_game_reservation"
input open_game_reservation_set_input {
  created_at: timestamptz
  id: Int
  number_of_guests: Int
  open_game_id: Int
  player_id: Int
  updated_at: timestamptz
}

# aggregate stddev on columns
type open_game_reservation_stddev_fields {
  id: Float
  number_of_guests: Float
  open_game_id: Float
  player_id: Float
}

# order by stddev() on columns of table "open_game_reservation"
input open_game_reservation_stddev_order_by {
  id: order_by
  number_of_guests: order_by
  open_game_id: order_by
  player_id: order_by
}

# aggregate stddev_pop on columns
type open_game_reservation_stddev_pop_fields {
  id: Float
  number_of_guests: Float
  open_game_id: Float
  player_id: Float
}

# order by stddev_pop() on columns of table "open_game_reservation"
input open_game_reservation_stddev_pop_order_by {
  id: order_by
  number_of_guests: order_by
  open_game_id: order_by
  player_id: order_by
}

# aggregate stddev_samp on columns
type open_game_reservation_stddev_samp_fields {
  id: Float
  number_of_guests: Float
  open_game_id: Float
  player_id: Float
}

# order by stddev_samp() on columns of table "open_game_reservation"
input open_game_reservation_stddev_samp_order_by {
  id: order_by
  number_of_guests: order_by
  open_game_id: order_by
  player_id: order_by
}

# aggregate sum on columns
type open_game_reservation_sum_fields {
  id: Int
  number_of_guests: Int
  open_game_id: Int
  player_id: Int
}

# order by sum() on columns of table "open_game_reservation"
input open_game_reservation_sum_order_by {
  id: order_by
  number_of_guests: order_by
  open_game_id: order_by
  player_id: order_by
}

# update columns of table "open_game_reservation"
enum open_game_reservation_update_column {
  # column name
  created_at

  # column name
  id

  # column name
  number_of_guests

  # column name
  open_game_id

  # column name
  player_id

  # column name
  updated_at
}

# aggregate var_pop on columns
type open_game_reservation_var_pop_fields {
  id: Float
  number_of_guests: Float
  open_game_id: Float
  player_id: Float
}

# order by var_pop() on columns of table "open_game_reservation"
input open_game_reservation_var_pop_order_by {
  id: order_by
  number_of_guests: order_by
  open_game_id: order_by
  player_id: order_by
}

# aggregate var_samp on columns
type open_game_reservation_var_samp_fields {
  id: Float
  number_of_guests: Float
  open_game_id: Float
  player_id: Float
}

# order by var_samp() on columns of table "open_game_reservation"
input open_game_reservation_var_samp_order_by {
  id: order_by
  number_of_guests: order_by
  open_game_id: order_by
  player_id: order_by
}

# aggregate variance on columns
type open_game_reservation_variance_fields {
  id: Float
  number_of_guests: Float
  open_game_id: Float
  player_id: Float
}

# order by variance() on columns of table "open_game_reservation"
input open_game_reservation_variance_order_by {
  id: order_by
  number_of_guests: order_by
  open_game_id: order_by
  player_id: order_by
}

# select columns of table "open_game"
enum open_game_select_column {
  # column name
  created_at

  # column name
  datetime

  # column name
  id

  # column name
  open_game_columns_id

  # column name
  recurring_open_game_id

  # column name
  updated_at
}

# input type for updating data in table "open_game"
input open_game_set_input {
  created_at: timestamptz
  datetime: timestamptz
  id: Int
  open_game_columns_id: Int
  recurring_open_game_id: Int
  updated_at: timestamptz
}

# aggregate stddev on columns
type open_game_stddev_fields {
  id: Float
  open_game_columns_id: Float
  recurring_open_game_id: Float
}

# order by stddev() on columns of table "open_game"
input open_game_stddev_order_by {
  id: order_by
  open_game_columns_id: order_by
  recurring_open_game_id: order_by
}

# aggregate stddev_pop on columns
type open_game_stddev_pop_fields {
  id: Float
  open_game_columns_id: Float
  recurring_open_game_id: Float
}

# order by stddev_pop() on columns of table "open_game"
input open_game_stddev_pop_order_by {
  id: order_by
  open_game_columns_id: order_by
  recurring_open_game_id: order_by
}

# aggregate stddev_samp on columns
type open_game_stddev_samp_fields {
  id: Float
  open_game_columns_id: Float
  recurring_open_game_id: Float
}

# order by stddev_samp() on columns of table "open_game"
input open_game_stddev_samp_order_by {
  id: order_by
  open_game_columns_id: order_by
  recurring_open_game_id: order_by
}

# aggregate sum on columns
type open_game_sum_fields {
  id: Int
  open_game_columns_id: Int
  recurring_open_game_id: Int
}

# order by sum() on columns of table "open_game"
input open_game_sum_order_by {
  id: order_by
  open_game_columns_id: order_by
  recurring_open_game_id: order_by
}

# A saved template for an open game, listed under the UI as "Event Type"
#
#
# columns and relationships of "open_game_template"
#
type open_game_template {
  created_at: timestamptz!
  id: Int!

  # An object relationship
  open_game_column: open_game_columns!
  open_game_columns_id: Int!
  updated_at: timestamptz!
}

# aggregated selection of "open_game_template"
type open_game_template_aggregate {
  aggregate: open_game_template_aggregate_fields
  nodes: [open_game_template!]!
}

# aggregate fields of "open_game_template"
type open_game_template_aggregate_fields {
  avg: open_game_template_avg_fields
  count(columns: [open_game_template_select_column!], distinct: Boolean): Int
  max: open_game_template_max_fields
  min: open_game_template_min_fields
  stddev: open_game_template_stddev_fields
  stddev_pop: open_game_template_stddev_pop_fields
  stddev_samp: open_game_template_stddev_samp_fields
  sum: open_game_template_sum_fields
  var_pop: open_game_template_var_pop_fields
  var_samp: open_game_template_var_samp_fields
  variance: open_game_template_variance_fields
}

# order by aggregate values of table "open_game_template"
input open_game_template_aggregate_order_by {
  avg: open_game_template_avg_order_by
  count: order_by
  max: open_game_template_max_order_by
  min: open_game_template_min_order_by
  stddev: open_game_template_stddev_order_by
  stddev_pop: open_game_template_stddev_pop_order_by
  stddev_samp: open_game_template_stddev_samp_order_by
  sum: open_game_template_sum_order_by
  var_pop: open_game_template_var_pop_order_by
  var_samp: open_game_template_var_samp_order_by
  variance: open_game_template_variance_order_by
}

# input type for inserting array relation for remote table "open_game_template"
input open_game_template_arr_rel_insert_input {
  data: [open_game_template_insert_input!]!
  on_conflict: open_game_template_on_conflict
}

# aggregate avg on columns
type open_game_template_avg_fields {
  id: Float
  open_game_columns_id: Float
}

# order by avg() on columns of table "open_game_template"
input open_game_template_avg_order_by {
  id: order_by
  open_game_columns_id: order_by
}

# Boolean expression to filter rows from the table "open_game_template". All fields are combined with a logical 'AND'.
input open_game_template_bool_exp {
  _and: [open_game_template_bool_exp]
  _not: open_game_template_bool_exp
  _or: [open_game_template_bool_exp]
  created_at: timestamptz_comparison_exp
  id: Int_comparison_exp
  open_game_column: open_game_columns_bool_exp
  open_game_columns_id: Int_comparison_exp
  updated_at: timestamptz_comparison_exp
}

# unique or primary key constraints on table "open_game_template"
enum open_game_template_constraint {
  # unique or primary key constraint
  open_game_template_pkey
}

# input type for incrementing integer column in table "open_game_template"
input open_game_template_inc_input {
  id: Int
  open_game_columns_id: Int
}

# input type for inserting data into table "open_game_template"
input open_game_template_insert_input {
  created_at: timestamptz
  id: Int
  open_game_column: open_game_columns_obj_rel_insert_input
  open_game_columns_id: Int
  updated_at: timestamptz
}

# aggregate max on columns
type open_game_template_max_fields {
  created_at: timestamptz
  id: Int
  open_game_columns_id: Int
  updated_at: timestamptz
}

# order by max() on columns of table "open_game_template"
input open_game_template_max_order_by {
  created_at: order_by
  id: order_by
  open_game_columns_id: order_by
  updated_at: order_by
}

# aggregate min on columns
type open_game_template_min_fields {
  created_at: timestamptz
  id: Int
  open_game_columns_id: Int
  updated_at: timestamptz
}

# order by min() on columns of table "open_game_template"
input open_game_template_min_order_by {
  created_at: order_by
  id: order_by
  open_game_columns_id: order_by
  updated_at: order_by
}

# response of any mutation on the table "open_game_template"
type open_game_template_mutation_response {
  # number of affected rows by the mutation
  affected_rows: Int!

  # data of the affected rows by the mutation
  returning: [open_game_template!]!
}

# input type for inserting object relation for remote table "open_game_template"
input open_game_template_obj_rel_insert_input {
  data: open_game_template_insert_input!
  on_conflict: open_game_template_on_conflict
}

# on conflict condition type for table "open_game_template"
input open_game_template_on_conflict {
  constraint: open_game_template_constraint!
  update_columns: [open_game_template_update_column!]!
  where: open_game_template_bool_exp
}

# ordering options when selecting data from "open_game_template"
input open_game_template_order_by {
  created_at: order_by
  id: order_by
  open_game_column: open_game_columns_order_by
  open_game_columns_id: order_by
  updated_at: order_by
}

# primary key columns input for table: "open_game_template"
input open_game_template_pk_columns_input {
  id: Int!
}

# select columns of table "open_game_template"
enum open_game_template_select_column {
  # column name
  created_at

  # column name
  id

  # column name
  open_game_columns_id

  # column name
  updated_at
}

# input type for updating data in table "open_game_template"
input open_game_template_set_input {
  created_at: timestamptz
  id: Int
  open_game_columns_id: Int
  updated_at: timestamptz
}

# aggregate stddev on columns
type open_game_template_stddev_fields {
  id: Float
  open_game_columns_id: Float
}

# order by stddev() on columns of table "open_game_template"
input open_game_template_stddev_order_by {
  id: order_by
  open_game_columns_id: order_by
}

# aggregate stddev_pop on columns
type open_game_template_stddev_pop_fields {
  id: Float
  open_game_columns_id: Float
}

# order by stddev_pop() on columns of table "open_game_template"
input open_game_template_stddev_pop_order_by {
  id: order_by
  open_game_columns_id: order_by
}

# aggregate stddev_samp on columns
type open_game_template_stddev_samp_fields {
  id: Float
  open_game_columns_id: Float
}

# order by stddev_samp() on columns of table "open_game_template"
input open_game_template_stddev_samp_order_by {
  id: order_by
  open_game_columns_id: order_by
}

# aggregate sum on columns
type open_game_template_sum_fields {
  id: Int
  open_game_columns_id: Int
}

# order by sum() on columns of table "open_game_template"
input open_game_template_sum_order_by {
  id: order_by
  open_game_columns_id: order_by
}

# update columns of table "open_game_template"
enum open_game_template_update_column {
  # column name
  created_at

  # column name
  id

  # column name
  open_game_columns_id

  # column name
  updated_at
}

# aggregate var_pop on columns
type open_game_template_var_pop_fields {
  id: Float
  open_game_columns_id: Float
}

# order by var_pop() on columns of table "open_game_template"
input open_game_template_var_pop_order_by {
  id: order_by
  open_game_columns_id: order_by
}

# aggregate var_samp on columns
type open_game_template_var_samp_fields {
  id: Float
  open_game_columns_id: Float
}

# order by var_samp() on columns of table "open_game_template"
input open_game_template_var_samp_order_by {
  id: order_by
  open_game_columns_id: order_by
}

# aggregate variance on columns
type open_game_template_variance_fields {
  id: Float
  open_game_columns_id: Float
}

# order by variance() on columns of table "open_game_template"
input open_game_template_variance_order_by {
  id: order_by
  open_game_columns_id: order_by
}

# update columns of table "open_game"
enum open_game_update_column {
  # column name
  created_at

  # column name
  datetime

  # column name
  id

  # column name
  open_game_columns_id

  # column name
  recurring_open_game_id

  # column name
  updated_at
}

# aggregate var_pop on columns
type open_game_var_pop_fields {
  id: Float
  open_game_columns_id: Float
  recurring_open_game_id: Float
}

# order by var_pop() on columns of table "open_game"
input open_game_var_pop_order_by {
  id: order_by
  open_game_columns_id: order_by
  recurring_open_game_id: order_by
}

# aggregate var_samp on columns
type open_game_var_samp_fields {
  id: Float
  open_game_columns_id: Float
  recurring_open_game_id: Float
}

# order by var_samp() on columns of table "open_game"
input open_game_var_samp_order_by {
  id: order_by
  open_game_columns_id: order_by
  recurring_open_game_id: order_by
}

# aggregate variance on columns
type open_game_variance_fields {
  id: Float
  open_game_columns_id: Float
  recurring_open_game_id: Float
}

# order by variance() on columns of table "open_game"
input open_game_variance_order_by {
  id: order_by
  open_game_columns_id: order_by
  recurring_open_game_id: order_by
}

# column ordering options
enum order_by {
  # in the ascending order, nulls last
  asc

  # in the ascending order, nulls first
  asc_nulls_first

  # in the ascending order, nulls last
  asc_nulls_last

  # in the descending order, nulls first
  desc

  # in the descending order, nulls first
  desc_nulls_first

  # in the descending order, nulls last
  desc_nulls_last
}

# columns and relationships of "player"
type player {
  auth_token: String
  created_at: timestamptz!
  date_of_birth: date!
  email: String!

  # An array relationship
  facility_game_reservations(
    # distinct select on columns
    distinct_on: [facility_game_reservation_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_game_reservation_order_by!]

    # filter the rows returned
    where: facility_game_reservation_bool_exp
  ): [facility_game_reservation!]!

  # An aggregated array relationship
  facility_game_reservations_aggregate(
    # distinct select on columns
    distinct_on: [facility_game_reservation_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_game_reservation_order_by!]

    # filter the rows returned
    where: facility_game_reservation_bool_exp
  ): facility_game_reservation_aggregate!
  first_name: String!
  gender: String!
  id: Int!
  instagram: String
  last_name: String!
  nationality: String!

  # An array relationship
  open_game_reservations(
    # distinct select on columns
    distinct_on: [open_game_reservation_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [open_game_reservation_order_by!]

    # filter the rows returned
    where: open_game_reservation_bool_exp
  ): [open_game_reservation!]!

  # An aggregated array relationship
  open_game_reservations_aggregate(
    # distinct select on columns
    distinct_on: [open_game_reservation_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [open_game_reservation_order_by!]

    # filter the rows returned
    where: open_game_reservation_bool_exp
  ): open_game_reservation_aggregate!
  phone: String!
  profile_picture: String!

  # An array relationship
  recurring_facility_game_reservations(
    # distinct select on columns
    distinct_on: [recurring_facility_game_reservation_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [recurring_facility_game_reservation_order_by!]

    # filter the rows returned
    where: recurring_facility_game_reservation_bool_exp
  ): [recurring_facility_game_reservation!]!

  # An aggregated array relationship
  recurring_facility_game_reservations_aggregate(
    # distinct select on columns
    distinct_on: [recurring_facility_game_reservation_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [recurring_facility_game_reservation_order_by!]

    # filter the rows returned
    where: recurring_facility_game_reservation_bool_exp
  ): recurring_facility_game_reservation_aggregate!

  # An array relationship
  recurring_open_game_reservations(
    # distinct select on columns
    distinct_on: [recurring_open_game_reservation_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [recurring_open_game_reservation_order_by!]

    # filter the rows returned
    where: recurring_open_game_reservation_bool_exp
  ): [recurring_open_game_reservation!]!

  # An aggregated array relationship
  recurring_open_game_reservations_aggregate(
    # distinct select on columns
    distinct_on: [recurring_open_game_reservation_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [recurring_open_game_reservation_order_by!]

    # filter the rows returned
    where: recurring_open_game_reservation_bool_exp
  ): recurring_open_game_reservation_aggregate!
  skill_level: String!
  sms_token: Int
  stripe_customer_id: String
  updated_at: timestamptz!
}

# aggregated selection of "player"
type player_aggregate {
  aggregate: player_aggregate_fields
  nodes: [player!]!
}

# aggregate fields of "player"
type player_aggregate_fields {
  avg: player_avg_fields
  count(columns: [player_select_column!], distinct: Boolean): Int
  max: player_max_fields
  min: player_min_fields
  stddev: player_stddev_fields
  stddev_pop: player_stddev_pop_fields
  stddev_samp: player_stddev_samp_fields
  sum: player_sum_fields
  var_pop: player_var_pop_fields
  var_samp: player_var_samp_fields
  variance: player_variance_fields
}

# order by aggregate values of table "player"
input player_aggregate_order_by {
  avg: player_avg_order_by
  count: order_by
  max: player_max_order_by
  min: player_min_order_by
  stddev: player_stddev_order_by
  stddev_pop: player_stddev_pop_order_by
  stddev_samp: player_stddev_samp_order_by
  sum: player_sum_order_by
  var_pop: player_var_pop_order_by
  var_samp: player_var_samp_order_by
  variance: player_variance_order_by
}

# input type for inserting array relation for remote table "player"
input player_arr_rel_insert_input {
  data: [player_insert_input!]!
  on_conflict: player_on_conflict
}

# aggregate avg on columns
type player_avg_fields {
  id: Float
  sms_token: Float
}

# order by avg() on columns of table "player"
input player_avg_order_by {
  id: order_by
  sms_token: order_by
}

# Boolean expression to filter rows from the table "player". All fields are combined with a logical 'AND'.
input player_bool_exp {
  _and: [player_bool_exp]
  _not: player_bool_exp
  _or: [player_bool_exp]
  auth_token: String_comparison_exp
  created_at: timestamptz_comparison_exp
  date_of_birth: date_comparison_exp
  email: String_comparison_exp
  facility_game_reservations: facility_game_reservation_bool_exp
  first_name: String_comparison_exp
  gender: String_comparison_exp
  id: Int_comparison_exp
  instagram: String_comparison_exp
  last_name: String_comparison_exp
  nationality: String_comparison_exp
  open_game_reservations: open_game_reservation_bool_exp
  phone: String_comparison_exp
  profile_picture: String_comparison_exp
  recurring_facility_game_reservations: recurring_facility_game_reservation_bool_exp
  recurring_open_game_reservations: recurring_open_game_reservation_bool_exp
  skill_level: String_comparison_exp
  sms_token: Int_comparison_exp
  stripe_customer_id: String_comparison_exp
  updated_at: timestamptz_comparison_exp
}

# unique or primary key constraints on table "player"
enum player_constraint {
  # unique or primary key constraint
  player_pkey
}

# input type for incrementing integer column in table "player"
input player_inc_input {
  id: Int
  sms_token: Int
}

# input type for inserting data into table "player"
input player_insert_input {
  auth_token: String
  created_at: timestamptz
  date_of_birth: date
  email: String
  facility_game_reservations: facility_game_reservation_arr_rel_insert_input
  first_name: String
  gender: String
  id: Int
  instagram: String
  last_name: String
  nationality: String
  open_game_reservations: open_game_reservation_arr_rel_insert_input
  phone: String
  profile_picture: String
  recurring_facility_game_reservations: recurring_facility_game_reservation_arr_rel_insert_input
  recurring_open_game_reservations: recurring_open_game_reservation_arr_rel_insert_input
  skill_level: String
  sms_token: Int
  stripe_customer_id: String
  updated_at: timestamptz
}

# aggregate max on columns
type player_max_fields {
  auth_token: String
  created_at: timestamptz
  date_of_birth: date
  email: String
  first_name: String
  gender: String
  id: Int
  instagram: String
  last_name: String
  nationality: String
  phone: String
  profile_picture: String
  skill_level: String
  sms_token: Int
  stripe_customer_id: String
  updated_at: timestamptz
}

# order by max() on columns of table "player"
input player_max_order_by {
  auth_token: order_by
  created_at: order_by
  date_of_birth: order_by
  email: order_by
  first_name: order_by
  gender: order_by
  id: order_by
  instagram: order_by
  last_name: order_by
  nationality: order_by
  phone: order_by
  profile_picture: order_by
  skill_level: order_by
  sms_token: order_by
  stripe_customer_id: order_by
  updated_at: order_by
}

# aggregate min on columns
type player_min_fields {
  auth_token: String
  created_at: timestamptz
  date_of_birth: date
  email: String
  first_name: String
  gender: String
  id: Int
  instagram: String
  last_name: String
  nationality: String
  phone: String
  profile_picture: String
  skill_level: String
  sms_token: Int
  stripe_customer_id: String
  updated_at: timestamptz
}

# order by min() on columns of table "player"
input player_min_order_by {
  auth_token: order_by
  created_at: order_by
  date_of_birth: order_by
  email: order_by
  first_name: order_by
  gender: order_by
  id: order_by
  instagram: order_by
  last_name: order_by
  nationality: order_by
  phone: order_by
  profile_picture: order_by
  skill_level: order_by
  sms_token: order_by
  stripe_customer_id: order_by
  updated_at: order_by
}

# response of any mutation on the table "player"
type player_mutation_response {
  # number of affected rows by the mutation
  affected_rows: Int!

  # data of the affected rows by the mutation
  returning: [player!]!
}

# input type for inserting object relation for remote table "player"
input player_obj_rel_insert_input {
  data: player_insert_input!
  on_conflict: player_on_conflict
}

# on conflict condition type for table "player"
input player_on_conflict {
  constraint: player_constraint!
  update_columns: [player_update_column!]!
  where: player_bool_exp
}

# ordering options when selecting data from "player"
input player_order_by {
  auth_token: order_by
  created_at: order_by
  date_of_birth: order_by
  email: order_by
  facility_game_reservations_aggregate: facility_game_reservation_aggregate_order_by
  first_name: order_by
  gender: order_by
  id: order_by
  instagram: order_by
  last_name: order_by
  nationality: order_by
  open_game_reservations_aggregate: open_game_reservation_aggregate_order_by
  phone: order_by
  profile_picture: order_by
  recurring_facility_game_reservations_aggregate: recurring_facility_game_reservation_aggregate_order_by
  recurring_open_game_reservations_aggregate: recurring_open_game_reservation_aggregate_order_by
  skill_level: order_by
  sms_token: order_by
  stripe_customer_id: order_by
  updated_at: order_by
}

# primary key columns input for table: "player"
input player_pk_columns_input {
  id: Int!
}

# select columns of table "player"
enum player_select_column {
  # column name
  auth_token

  # column name
  created_at

  # column name
  date_of_birth

  # column name
  email

  # column name
  first_name

  # column name
  gender

  # column name
  id

  # column name
  instagram

  # column name
  last_name

  # column name
  nationality

  # column name
  phone

  # column name
  profile_picture

  # column name
  skill_level

  # column name
  sms_token

  # column name
  stripe_customer_id

  # column name
  updated_at
}

# input type for updating data in table "player"
input player_set_input {
  auth_token: String
  created_at: timestamptz
  date_of_birth: date
  email: String
  first_name: String
  gender: String
  id: Int
  instagram: String
  last_name: String
  nationality: String
  phone: String
  profile_picture: String
  skill_level: String
  sms_token: Int
  stripe_customer_id: String
  updated_at: timestamptz
}

# aggregate stddev on columns
type player_stddev_fields {
  id: Float
  sms_token: Float
}

# order by stddev() on columns of table "player"
input player_stddev_order_by {
  id: order_by
  sms_token: order_by
}

# aggregate stddev_pop on columns
type player_stddev_pop_fields {
  id: Float
  sms_token: Float
}

# order by stddev_pop() on columns of table "player"
input player_stddev_pop_order_by {
  id: order_by
  sms_token: order_by
}

# aggregate stddev_samp on columns
type player_stddev_samp_fields {
  id: Float
  sms_token: Float
}

# order by stddev_samp() on columns of table "player"
input player_stddev_samp_order_by {
  id: order_by
  sms_token: order_by
}

# aggregate sum on columns
type player_sum_fields {
  id: Int
  sms_token: Int
}

# order by sum() on columns of table "player"
input player_sum_order_by {
  id: order_by
  sms_token: order_by
}

# update columns of table "player"
enum player_update_column {
  # column name
  auth_token

  # column name
  created_at

  # column name
  date_of_birth

  # column name
  email

  # column name
  first_name

  # column name
  gender

  # column name
  id

  # column name
  instagram

  # column name
  last_name

  # column name
  nationality

  # column name
  phone

  # column name
  profile_picture

  # column name
  skill_level

  # column name
  sms_token

  # column name
  stripe_customer_id

  # column name
  updated_at
}

# aggregate var_pop on columns
type player_var_pop_fields {
  id: Float
  sms_token: Float
}

# order by var_pop() on columns of table "player"
input player_var_pop_order_by {
  id: order_by
  sms_token: order_by
}

# aggregate var_samp on columns
type player_var_samp_fields {
  id: Float
  sms_token: Float
}

# order by var_samp() on columns of table "player"
input player_var_samp_order_by {
  id: order_by
  sms_token: order_by
}

# aggregate variance on columns
type player_variance_fields {
  id: Float
  sms_token: Float
}

# order by variance() on columns of table "player"
input player_variance_order_by {
  id: order_by
  sms_token: order_by
}

# query root
type query_root {
  # fetch data from the table: "facility"
  facility(
    # distinct select on columns
    distinct_on: [facility_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_order_by!]

    # filter the rows returned
    where: facility_bool_exp
  ): [facility!]!

  # fetch aggregated fields from the table: "facility"
  facility_aggregate(
    # distinct select on columns
    distinct_on: [facility_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_order_by!]

    # filter the rows returned
    where: facility_bool_exp
  ): facility_aggregate!

  # fetch data from the table: "facility" using primary key columns
  facility_by_pk(id: Int!): facility

  # fetch data from the table: "facility_category"
  facility_category(
    # distinct select on columns
    distinct_on: [facility_category_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_category_order_by!]

    # filter the rows returned
    where: facility_category_bool_exp
  ): [facility_category!]!

  # fetch aggregated fields from the table: "facility_category"
  facility_category_aggregate(
    # distinct select on columns
    distinct_on: [facility_category_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_category_order_by!]

    # filter the rows returned
    where: facility_category_bool_exp
  ): facility_category_aggregate!

  # fetch data from the table: "facility_category" using primary key columns
  facility_category_by_pk(id: Int!): facility_category

  # fetch data from the table: "facility_game"
  facility_game(
    # distinct select on columns
    distinct_on: [facility_game_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_game_order_by!]

    # filter the rows returned
    where: facility_game_bool_exp
  ): [facility_game!]!

  # fetch aggregated fields from the table: "facility_game"
  facility_game_aggregate(
    # distinct select on columns
    distinct_on: [facility_game_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_game_order_by!]

    # filter the rows returned
    where: facility_game_bool_exp
  ): facility_game_aggregate!

  # fetch data from the table: "facility_game" using primary key columns
  facility_game_by_pk(id: Int!): facility_game

  # fetch data from the table: "facility_game_category"
  facility_game_category(
    # distinct select on columns
    distinct_on: [facility_game_category_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_game_category_order_by!]

    # filter the rows returned
    where: facility_game_category_bool_exp
  ): [facility_game_category!]!

  # fetch aggregated fields from the table: "facility_game_category"
  facility_game_category_aggregate(
    # distinct select on columns
    distinct_on: [facility_game_category_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_game_category_order_by!]

    # filter the rows returned
    where: facility_game_category_bool_exp
  ): facility_game_category_aggregate!

  # fetch data from the table: "facility_game_category" using primary key columns
  facility_game_category_by_pk(id: Int!): facility_game_category

  # fetch data from the table: "facility_game_columns"
  facility_game_columns(
    # distinct select on columns
    distinct_on: [facility_game_columns_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_game_columns_order_by!]

    # filter the rows returned
    where: facility_game_columns_bool_exp
  ): [facility_game_columns!]!

  # fetch aggregated fields from the table: "facility_game_columns"
  facility_game_columns_aggregate(
    # distinct select on columns
    distinct_on: [facility_game_columns_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_game_columns_order_by!]

    # filter the rows returned
    where: facility_game_columns_bool_exp
  ): facility_game_columns_aggregate!

  # fetch data from the table: "facility_game_columns" using primary key columns
  facility_game_columns_by_pk(id: Int!): facility_game_columns

  # fetch data from the table: "facility_game_global_category"
  facility_game_global_category(
    # distinct select on columns
    distinct_on: [facility_game_global_category_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_game_global_category_order_by!]

    # filter the rows returned
    where: facility_game_global_category_bool_exp
  ): [facility_game_global_category!]!

  # fetch aggregated fields from the table: "facility_game_global_category"
  facility_game_global_category_aggregate(
    # distinct select on columns
    distinct_on: [facility_game_global_category_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_game_global_category_order_by!]

    # filter the rows returned
    where: facility_game_global_category_bool_exp
  ): facility_game_global_category_aggregate!

  # fetch data from the table: "facility_game_global_category" using primary key columns
  facility_game_global_category_by_pk(id: Int!): facility_game_global_category

  # fetch data from the table: "facility_game_reservation"
  facility_game_reservation(
    # distinct select on columns
    distinct_on: [facility_game_reservation_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_game_reservation_order_by!]

    # filter the rows returned
    where: facility_game_reservation_bool_exp
  ): [facility_game_reservation!]!

  # fetch aggregated fields from the table: "facility_game_reservation"
  facility_game_reservation_aggregate(
    # distinct select on columns
    distinct_on: [facility_game_reservation_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_game_reservation_order_by!]

    # filter the rows returned
    where: facility_game_reservation_bool_exp
  ): facility_game_reservation_aggregate!

  # fetch data from the table: "facility_game_reservation" using primary key columns
  facility_game_reservation_by_pk(id: Int!): facility_game_reservation

  # fetch data from the table: "facility_user"
  facility_user(
    # distinct select on columns
    distinct_on: [facility_user_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_user_order_by!]

    # filter the rows returned
    where: facility_user_bool_exp
  ): [facility_user!]!

  # fetch aggregated fields from the table: "facility_user"
  facility_user_aggregate(
    # distinct select on columns
    distinct_on: [facility_user_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_user_order_by!]

    # filter the rows returned
    where: facility_user_bool_exp
  ): facility_user_aggregate!

  # fetch data from the table: "facility_user" using primary key columns
  facility_user_by_pk(id: Int!): facility_user

  # fetch data from the table: "facility_user_role"
  facility_user_role(
    # distinct select on columns
    distinct_on: [facility_user_role_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_user_role_order_by!]

    # filter the rows returned
    where: facility_user_role_bool_exp
  ): [facility_user_role!]!

  # fetch aggregated fields from the table: "facility_user_role"
  facility_user_role_aggregate(
    # distinct select on columns
    distinct_on: [facility_user_role_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_user_role_order_by!]

    # filter the rows returned
    where: facility_user_role_bool_exp
  ): facility_user_role_aggregate!

  # fetch data from the table: "facility_user_role" using primary key columns
  facility_user_role_by_pk(value: String!): facility_user_role

  # fetch data from the table: "field"
  field(
    # distinct select on columns
    distinct_on: [field_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [field_order_by!]

    # filter the rows returned
    where: field_bool_exp
  ): [field!]!

  # fetch aggregated fields from the table: "field"
  field_aggregate(
    # distinct select on columns
    distinct_on: [field_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [field_order_by!]

    # filter the rows returned
    where: field_bool_exp
  ): field_aggregate!

  # fetch data from the table: "field" using primary key columns
  field_by_pk(id: Int!): field

  # fetch data from the table: "field_type"
  field_type(
    # distinct select on columns
    distinct_on: [field_type_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [field_type_order_by!]

    # filter the rows returned
    where: field_type_bool_exp
  ): [field_type!]!

  # fetch aggregated fields from the table: "field_type"
  field_type_aggregate(
    # distinct select on columns
    distinct_on: [field_type_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [field_type_order_by!]

    # filter the rows returned
    where: field_type_bool_exp
  ): field_type_aggregate!

  # fetch data from the table: "field_type" using primary key columns
  field_type_by_pk(id: Int!): field_type

  # fetch data from the table: "global_category"
  global_category(
    # distinct select on columns
    distinct_on: [global_category_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [global_category_order_by!]

    # filter the rows returned
    where: global_category_bool_exp
  ): [global_category!]!

  # fetch aggregated fields from the table: "global_category"
  global_category_aggregate(
    # distinct select on columns
    distinct_on: [global_category_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [global_category_order_by!]

    # filter the rows returned
    where: global_category_bool_exp
  ): global_category_aggregate!

  # fetch data from the table: "global_category" using primary key columns
  global_category_by_pk(id: Int!): global_category

  # fetch data from the table: "hours_of_operation"
  hours_of_operation(
    # distinct select on columns
    distinct_on: [hours_of_operation_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [hours_of_operation_order_by!]

    # filter the rows returned
    where: hours_of_operation_bool_exp
  ): [hours_of_operation!]!

  # fetch aggregated fields from the table: "hours_of_operation"
  hours_of_operation_aggregate(
    # distinct select on columns
    distinct_on: [hours_of_operation_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [hours_of_operation_order_by!]

    # filter the rows returned
    where: hours_of_operation_bool_exp
  ): hours_of_operation_aggregate!

  # fetch data from the table: "hours_of_operation" using primary key columns
  hours_of_operation_by_pk(id: Int!): hours_of_operation

  # fetch data from the table: "location"
  location(
    # distinct select on columns
    distinct_on: [location_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [location_order_by!]

    # filter the rows returned
    where: location_bool_exp
  ): [location!]!

  # fetch aggregated fields from the table: "location"
  location_aggregate(
    # distinct select on columns
    distinct_on: [location_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [location_order_by!]

    # filter the rows returned
    where: location_bool_exp
  ): location_aggregate!

  # fetch data from the table: "location" using primary key columns
  location_by_pk(id: Int!): location

  # fetch data from the table: "open_game"
  open_game(
    # distinct select on columns
    distinct_on: [open_game_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [open_game_order_by!]

    # filter the rows returned
    where: open_game_bool_exp
  ): [open_game!]!

  # fetch aggregated fields from the table: "open_game"
  open_game_aggregate(
    # distinct select on columns
    distinct_on: [open_game_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [open_game_order_by!]

    # filter the rows returned
    where: open_game_bool_exp
  ): open_game_aggregate!

  # fetch data from the table: "open_game" using primary key columns
  open_game_by_pk(id: Int!): open_game

  # fetch data from the table: "open_game_columns"
  open_game_columns(
    # distinct select on columns
    distinct_on: [open_game_columns_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [open_game_columns_order_by!]

    # filter the rows returned
    where: open_game_columns_bool_exp
  ): [open_game_columns!]!

  # fetch aggregated fields from the table: "open_game_columns"
  open_game_columns_aggregate(
    # distinct select on columns
    distinct_on: [open_game_columns_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [open_game_columns_order_by!]

    # filter the rows returned
    where: open_game_columns_bool_exp
  ): open_game_columns_aggregate!

  # fetch data from the table: "open_game_columns" using primary key columns
  open_game_columns_by_pk(id: Int!): open_game_columns

  # fetch data from the table: "open_game_reservation"
  open_game_reservation(
    # distinct select on columns
    distinct_on: [open_game_reservation_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [open_game_reservation_order_by!]

    # filter the rows returned
    where: open_game_reservation_bool_exp
  ): [open_game_reservation!]!

  # fetch aggregated fields from the table: "open_game_reservation"
  open_game_reservation_aggregate(
    # distinct select on columns
    distinct_on: [open_game_reservation_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [open_game_reservation_order_by!]

    # filter the rows returned
    where: open_game_reservation_bool_exp
  ): open_game_reservation_aggregate!

  # fetch data from the table: "open_game_reservation" using primary key columns
  open_game_reservation_by_pk(id: Int!): open_game_reservation

  # fetch data from the table: "open_game_template"
  open_game_template(
    # distinct select on columns
    distinct_on: [open_game_template_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [open_game_template_order_by!]

    # filter the rows returned
    where: open_game_template_bool_exp
  ): [open_game_template!]!

  # fetch aggregated fields from the table: "open_game_template"
  open_game_template_aggregate(
    # distinct select on columns
    distinct_on: [open_game_template_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [open_game_template_order_by!]

    # filter the rows returned
    where: open_game_template_bool_exp
  ): open_game_template_aggregate!

  # fetch data from the table: "open_game_template" using primary key columns
  open_game_template_by_pk(id: Int!): open_game_template

  # fetch data from the table: "player"
  player(
    # distinct select on columns
    distinct_on: [player_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [player_order_by!]

    # filter the rows returned
    where: player_bool_exp
  ): [player!]!

  # fetch aggregated fields from the table: "player"
  player_aggregate(
    # distinct select on columns
    distinct_on: [player_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [player_order_by!]

    # filter the rows returned
    where: player_bool_exp
  ): player_aggregate!

  # fetch data from the table: "player" using primary key columns
  player_by_pk(id: Int!): player

  # fetch data from the table: "recurring_facility_game"
  recurring_facility_game(
    # distinct select on columns
    distinct_on: [recurring_facility_game_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [recurring_facility_game_order_by!]

    # filter the rows returned
    where: recurring_facility_game_bool_exp
  ): [recurring_facility_game!]!

  # fetch aggregated fields from the table: "recurring_facility_game"
  recurring_facility_game_aggregate(
    # distinct select on columns
    distinct_on: [recurring_facility_game_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [recurring_facility_game_order_by!]

    # filter the rows returned
    where: recurring_facility_game_bool_exp
  ): recurring_facility_game_aggregate!

  # fetch data from the table: "recurring_facility_game" using primary key columns
  recurring_facility_game_by_pk(id: Int!): recurring_facility_game

  # fetch data from the table: "recurring_facility_game_datetime"
  recurring_facility_game_datetime(
    # distinct select on columns
    distinct_on: [recurring_facility_game_datetime_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [recurring_facility_game_datetime_order_by!]

    # filter the rows returned
    where: recurring_facility_game_datetime_bool_exp
  ): [recurring_facility_game_datetime!]!

  # fetch aggregated fields from the table: "recurring_facility_game_datetime"
  recurring_facility_game_datetime_aggregate(
    # distinct select on columns
    distinct_on: [recurring_facility_game_datetime_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [recurring_facility_game_datetime_order_by!]

    # filter the rows returned
    where: recurring_facility_game_datetime_bool_exp
  ): recurring_facility_game_datetime_aggregate!

  # fetch data from the table: "recurring_facility_game_reservation"
  recurring_facility_game_reservation(
    # distinct select on columns
    distinct_on: [recurring_facility_game_reservation_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [recurring_facility_game_reservation_order_by!]

    # filter the rows returned
    where: recurring_facility_game_reservation_bool_exp
  ): [recurring_facility_game_reservation!]!

  # fetch aggregated fields from the table: "recurring_facility_game_reservation"
  recurring_facility_game_reservation_aggregate(
    # distinct select on columns
    distinct_on: [recurring_facility_game_reservation_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [recurring_facility_game_reservation_order_by!]

    # filter the rows returned
    where: recurring_facility_game_reservation_bool_exp
  ): recurring_facility_game_reservation_aggregate!

  # fetch data from the table: "recurring_facility_game_reservation" using primary key columns
  recurring_facility_game_reservation_by_pk(id: Int!): recurring_facility_game_reservation

  # fetch data from the table: "recurring_open_game"
  recurring_open_game(
    # distinct select on columns
    distinct_on: [recurring_open_game_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [recurring_open_game_order_by!]

    # filter the rows returned
    where: recurring_open_game_bool_exp
  ): [recurring_open_game!]!

  # fetch aggregated fields from the table: "recurring_open_game"
  recurring_open_game_aggregate(
    # distinct select on columns
    distinct_on: [recurring_open_game_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [recurring_open_game_order_by!]

    # filter the rows returned
    where: recurring_open_game_bool_exp
  ): recurring_open_game_aggregate!

  # fetch data from the table: "recurring_open_game" using primary key columns
  recurring_open_game_by_pk(id: Int!): recurring_open_game

  # fetch data from the table: "recurring_open_game_datetime"
  recurring_open_game_datetime(
    # distinct select on columns
    distinct_on: [recurring_open_game_datetime_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [recurring_open_game_datetime_order_by!]

    # filter the rows returned
    where: recurring_open_game_datetime_bool_exp
  ): [recurring_open_game_datetime!]!

  # fetch aggregated fields from the table: "recurring_open_game_datetime"
  recurring_open_game_datetime_aggregate(
    # distinct select on columns
    distinct_on: [recurring_open_game_datetime_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [recurring_open_game_datetime_order_by!]

    # filter the rows returned
    where: recurring_open_game_datetime_bool_exp
  ): recurring_open_game_datetime_aggregate!

  # fetch data from the table: "recurring_open_game_reservation"
  recurring_open_game_reservation(
    # distinct select on columns
    distinct_on: [recurring_open_game_reservation_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [recurring_open_game_reservation_order_by!]

    # filter the rows returned
    where: recurring_open_game_reservation_bool_exp
  ): [recurring_open_game_reservation!]!

  # fetch aggregated fields from the table: "recurring_open_game_reservation"
  recurring_open_game_reservation_aggregate(
    # distinct select on columns
    distinct_on: [recurring_open_game_reservation_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [recurring_open_game_reservation_order_by!]

    # filter the rows returned
    where: recurring_open_game_reservation_bool_exp
  ): recurring_open_game_reservation_aggregate!

  # fetch data from the table: "recurring_open_game_reservation" using primary key columns
  recurring_open_game_reservation_by_pk(id: Int!): recurring_open_game_reservation

  # fetch data from the table: "region"
  region(
    # distinct select on columns
    distinct_on: [region_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [region_order_by!]

    # filter the rows returned
    where: region_bool_exp
  ): [region!]!

  # fetch aggregated fields from the table: "region"
  region_aggregate(
    # distinct select on columns
    distinct_on: [region_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [region_order_by!]

    # filter the rows returned
    where: region_bool_exp
  ): region_aggregate!

  # fetch data from the table: "region" using primary key columns
  region_by_pk(id: Int!): region

  # fetch data from the table: "submerchant_bank_information"
  submerchant_bank_information(
    # distinct select on columns
    distinct_on: [submerchant_bank_information_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [submerchant_bank_information_order_by!]

    # filter the rows returned
    where: submerchant_bank_information_bool_exp
  ): [submerchant_bank_information!]!

  # fetch aggregated fields from the table: "submerchant_bank_information"
  submerchant_bank_information_aggregate(
    # distinct select on columns
    distinct_on: [submerchant_bank_information_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [submerchant_bank_information_order_by!]

    # filter the rows returned
    where: submerchant_bank_information_bool_exp
  ): submerchant_bank_information_aggregate!

  # fetch data from the table: "submerchant_bank_information" using primary key columns
  submerchant_bank_information_by_pk(id: Int!): submerchant_bank_information

  # fetch data from the table: "subregion"
  subregion(
    # distinct select on columns
    distinct_on: [subregion_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [subregion_order_by!]

    # filter the rows returned
    where: subregion_bool_exp
  ): [subregion!]!

  # fetch aggregated fields from the table: "subregion"
  subregion_aggregate(
    # distinct select on columns
    distinct_on: [subregion_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [subregion_order_by!]

    # filter the rows returned
    where: subregion_bool_exp
  ): subregion_aggregate!

  # fetch data from the table: "subregion" using primary key columns
  subregion_by_pk(id: Int!): subregion

  # fetch data from the table: "weekday"
  weekday(
    # distinct select on columns
    distinct_on: [weekday_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [weekday_order_by!]

    # filter the rows returned
    where: weekday_bool_exp
  ): [weekday!]!

  # fetch aggregated fields from the table: "weekday"
  weekday_aggregate(
    # distinct select on columns
    distinct_on: [weekday_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [weekday_order_by!]

    # filter the rows returned
    where: weekday_bool_exp
  ): weekday_aggregate!

  # fetch data from the table: "weekday" using primary key columns
  weekday_by_pk(value: String!): weekday
}

# A recurring facility game
#
#
# columns and relationships of "recurring_facility_game"
#
type recurring_facility_game {
  created_at: timestamptz!

  # An object relationship
  facility_game_column: facility_game_columns!
  facility_game_columns_id: Int!

  # An array relationship
  facility_games(
    # distinct select on columns
    distinct_on: [facility_game_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_game_order_by!]

    # filter the rows returned
    where: facility_game_bool_exp
  ): [facility_game!]!

  # An aggregated array relationship
  facility_games_aggregate(
    # distinct select on columns
    distinct_on: [facility_game_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_game_order_by!]

    # filter the rows returned
    where: facility_game_bool_exp
  ): facility_game_aggregate!
  id: Int!

  # An array relationship
  recurring_facility_game_reservations(
    # distinct select on columns
    distinct_on: [recurring_facility_game_reservation_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [recurring_facility_game_reservation_order_by!]

    # filter the rows returned
    where: recurring_facility_game_reservation_bool_exp
  ): [recurring_facility_game_reservation!]!

  # An aggregated array relationship
  recurring_facility_game_reservations_aggregate(
    # distinct select on columns
    distinct_on: [recurring_facility_game_reservation_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [recurring_facility_game_reservation_order_by!]

    # filter the rows returned
    where: recurring_facility_game_reservation_bool_exp
  ): recurring_facility_game_reservation_aggregate!
  rruleset_string: String!
  updated_at: timestamptz!
}

# aggregated selection of "recurring_facility_game"
type recurring_facility_game_aggregate {
  aggregate: recurring_facility_game_aggregate_fields
  nodes: [recurring_facility_game!]!
}

# aggregate fields of "recurring_facility_game"
type recurring_facility_game_aggregate_fields {
  avg: recurring_facility_game_avg_fields
  count(columns: [recurring_facility_game_select_column!], distinct: Boolean): Int
  max: recurring_facility_game_max_fields
  min: recurring_facility_game_min_fields
  stddev: recurring_facility_game_stddev_fields
  stddev_pop: recurring_facility_game_stddev_pop_fields
  stddev_samp: recurring_facility_game_stddev_samp_fields
  sum: recurring_facility_game_sum_fields
  var_pop: recurring_facility_game_var_pop_fields
  var_samp: recurring_facility_game_var_samp_fields
  variance: recurring_facility_game_variance_fields
}

# order by aggregate values of table "recurring_facility_game"
input recurring_facility_game_aggregate_order_by {
  avg: recurring_facility_game_avg_order_by
  count: order_by
  max: recurring_facility_game_max_order_by
  min: recurring_facility_game_min_order_by
  stddev: recurring_facility_game_stddev_order_by
  stddev_pop: recurring_facility_game_stddev_pop_order_by
  stddev_samp: recurring_facility_game_stddev_samp_order_by
  sum: recurring_facility_game_sum_order_by
  var_pop: recurring_facility_game_var_pop_order_by
  var_samp: recurring_facility_game_var_samp_order_by
  variance: recurring_facility_game_variance_order_by
}

# input type for inserting array relation for remote table "recurring_facility_game"
input recurring_facility_game_arr_rel_insert_input {
  data: [recurring_facility_game_insert_input!]!
  on_conflict: recurring_facility_game_on_conflict
}

# aggregate avg on columns
type recurring_facility_game_avg_fields {
  facility_game_columns_id: Float
  id: Float
}

# order by avg() on columns of table "recurring_facility_game"
input recurring_facility_game_avg_order_by {
  facility_game_columns_id: order_by
  id: order_by
}

# Boolean expression to filter rows from the table "recurring_facility_game". All fields are combined with a logical 'AND'.
input recurring_facility_game_bool_exp {
  _and: [recurring_facility_game_bool_exp]
  _not: recurring_facility_game_bool_exp
  _or: [recurring_facility_game_bool_exp]
  created_at: timestamptz_comparison_exp
  facility_game_column: facility_game_columns_bool_exp
  facility_game_columns_id: Int_comparison_exp
  facility_games: facility_game_bool_exp
  id: Int_comparison_exp
  recurring_facility_game_reservations: recurring_facility_game_reservation_bool_exp
  rruleset_string: String_comparison_exp
  updated_at: timestamptz_comparison_exp
}

# unique or primary key constraints on table "recurring_facility_game"
enum recurring_facility_game_constraint {
  # unique or primary key constraint
  recurring_facility_game_pkey
}

# A materialized view which generates the dates for a recurring facility game.
# Auto-updated by triggers when open games are created, updated, or deleted.
#
#
# columns and relationships of "recurring_facility_game_datetime"
#
type recurring_facility_game_datetime {
  datetime: timestamptz
  recurring_facility_game_id: Int
}

# aggregated selection of "recurring_facility_game_datetime"
type recurring_facility_game_datetime_aggregate {
  aggregate: recurring_facility_game_datetime_aggregate_fields
  nodes: [recurring_facility_game_datetime!]!
}

# aggregate fields of "recurring_facility_game_datetime"
type recurring_facility_game_datetime_aggregate_fields {
  avg: recurring_facility_game_datetime_avg_fields
  count(columns: [recurring_facility_game_datetime_select_column!], distinct: Boolean): Int
  max: recurring_facility_game_datetime_max_fields
  min: recurring_facility_game_datetime_min_fields
  stddev: recurring_facility_game_datetime_stddev_fields
  stddev_pop: recurring_facility_game_datetime_stddev_pop_fields
  stddev_samp: recurring_facility_game_datetime_stddev_samp_fields
  sum: recurring_facility_game_datetime_sum_fields
  var_pop: recurring_facility_game_datetime_var_pop_fields
  var_samp: recurring_facility_game_datetime_var_samp_fields
  variance: recurring_facility_game_datetime_variance_fields
}

# order by aggregate values of table "recurring_facility_game_datetime"
input recurring_facility_game_datetime_aggregate_order_by {
  avg: recurring_facility_game_datetime_avg_order_by
  count: order_by
  max: recurring_facility_game_datetime_max_order_by
  min: recurring_facility_game_datetime_min_order_by
  stddev: recurring_facility_game_datetime_stddev_order_by
  stddev_pop: recurring_facility_game_datetime_stddev_pop_order_by
  stddev_samp: recurring_facility_game_datetime_stddev_samp_order_by
  sum: recurring_facility_game_datetime_sum_order_by
  var_pop: recurring_facility_game_datetime_var_pop_order_by
  var_samp: recurring_facility_game_datetime_var_samp_order_by
  variance: recurring_facility_game_datetime_variance_order_by
}

# input type for inserting array relation for remote table "recurring_facility_game_datetime"
input recurring_facility_game_datetime_arr_rel_insert_input {
  data: [recurring_facility_game_datetime_insert_input!]!
}

# aggregate avg on columns
type recurring_facility_game_datetime_avg_fields {
  recurring_facility_game_id: Float
}

# order by avg() on columns of table "recurring_facility_game_datetime"
input recurring_facility_game_datetime_avg_order_by {
  recurring_facility_game_id: order_by
}

# Boolean expression to filter rows from the table
# "recurring_facility_game_datetime". All fields are combined with a logical 'AND'.
input recurring_facility_game_datetime_bool_exp {
  _and: [recurring_facility_game_datetime_bool_exp]
  _not: recurring_facility_game_datetime_bool_exp
  _or: [recurring_facility_game_datetime_bool_exp]
  datetime: timestamptz_comparison_exp
  recurring_facility_game_id: Int_comparison_exp
}

# input type for incrementing integer column in table "recurring_facility_game_datetime"
input recurring_facility_game_datetime_inc_input {
  recurring_facility_game_id: Int
}

# input type for inserting data into table "recurring_facility_game_datetime"
input recurring_facility_game_datetime_insert_input {
  datetime: timestamptz
  recurring_facility_game_id: Int
}

# aggregate max on columns
type recurring_facility_game_datetime_max_fields {
  datetime: timestamptz
  recurring_facility_game_id: Int
}

# order by max() on columns of table "recurring_facility_game_datetime"
input recurring_facility_game_datetime_max_order_by {
  datetime: order_by
  recurring_facility_game_id: order_by
}

# aggregate min on columns
type recurring_facility_game_datetime_min_fields {
  datetime: timestamptz
  recurring_facility_game_id: Int
}

# order by min() on columns of table "recurring_facility_game_datetime"
input recurring_facility_game_datetime_min_order_by {
  datetime: order_by
  recurring_facility_game_id: order_by
}

# response of any mutation on the table "recurring_facility_game_datetime"
type recurring_facility_game_datetime_mutation_response {
  # number of affected rows by the mutation
  affected_rows: Int!

  # data of the affected rows by the mutation
  returning: [recurring_facility_game_datetime!]!
}

# input type for inserting object relation for remote table "recurring_facility_game_datetime"
input recurring_facility_game_datetime_obj_rel_insert_input {
  data: recurring_facility_game_datetime_insert_input!
}

# ordering options when selecting data from "recurring_facility_game_datetime"
input recurring_facility_game_datetime_order_by {
  datetime: order_by
  recurring_facility_game_id: order_by
}

# select columns of table "recurring_facility_game_datetime"
enum recurring_facility_game_datetime_select_column {
  # column name
  datetime

  # column name
  recurring_facility_game_id
}

# input type for updating data in table "recurring_facility_game_datetime"
input recurring_facility_game_datetime_set_input {
  datetime: timestamptz
  recurring_facility_game_id: Int
}

# aggregate stddev on columns
type recurring_facility_game_datetime_stddev_fields {
  recurring_facility_game_id: Float
}

# order by stddev() on columns of table "recurring_facility_game_datetime"
input recurring_facility_game_datetime_stddev_order_by {
  recurring_facility_game_id: order_by
}

# aggregate stddev_pop on columns
type recurring_facility_game_datetime_stddev_pop_fields {
  recurring_facility_game_id: Float
}

# order by stddev_pop() on columns of table "recurring_facility_game_datetime"
input recurring_facility_game_datetime_stddev_pop_order_by {
  recurring_facility_game_id: order_by
}

# aggregate stddev_samp on columns
type recurring_facility_game_datetime_stddev_samp_fields {
  recurring_facility_game_id: Float
}

# order by stddev_samp() on columns of table "recurring_facility_game_datetime"
input recurring_facility_game_datetime_stddev_samp_order_by {
  recurring_facility_game_id: order_by
}

# aggregate sum on columns
type recurring_facility_game_datetime_sum_fields {
  recurring_facility_game_id: Int
}

# order by sum() on columns of table "recurring_facility_game_datetime"
input recurring_facility_game_datetime_sum_order_by {
  recurring_facility_game_id: order_by
}

# aggregate var_pop on columns
type recurring_facility_game_datetime_var_pop_fields {
  recurring_facility_game_id: Float
}

# order by var_pop() on columns of table "recurring_facility_game_datetime"
input recurring_facility_game_datetime_var_pop_order_by {
  recurring_facility_game_id: order_by
}

# aggregate var_samp on columns
type recurring_facility_game_datetime_var_samp_fields {
  recurring_facility_game_id: Float
}

# order by var_samp() on columns of table "recurring_facility_game_datetime"
input recurring_facility_game_datetime_var_samp_order_by {
  recurring_facility_game_id: order_by
}

# aggregate variance on columns
type recurring_facility_game_datetime_variance_fields {
  recurring_facility_game_id: Float
}

# order by variance() on columns of table "recurring_facility_game_datetime"
input recurring_facility_game_datetime_variance_order_by {
  recurring_facility_game_id: order_by
}

# input type for incrementing integer column in table "recurring_facility_game"
input recurring_facility_game_inc_input {
  facility_game_columns_id: Int
  id: Int
}

# input type for inserting data into table "recurring_facility_game"
input recurring_facility_game_insert_input {
  created_at: timestamptz
  facility_game_column: facility_game_columns_obj_rel_insert_input
  facility_game_columns_id: Int
  facility_games: facility_game_arr_rel_insert_input
  id: Int
  recurring_facility_game_reservations: recurring_facility_game_reservation_arr_rel_insert_input
  rruleset_string: String
  updated_at: timestamptz
}

# aggregate max on columns
type recurring_facility_game_max_fields {
  created_at: timestamptz
  facility_game_columns_id: Int
  id: Int
  rruleset_string: String
  updated_at: timestamptz
}

# order by max() on columns of table "recurring_facility_game"
input recurring_facility_game_max_order_by {
  created_at: order_by
  facility_game_columns_id: order_by
  id: order_by
  rruleset_string: order_by
  updated_at: order_by
}

# aggregate min on columns
type recurring_facility_game_min_fields {
  created_at: timestamptz
  facility_game_columns_id: Int
  id: Int
  rruleset_string: String
  updated_at: timestamptz
}

# order by min() on columns of table "recurring_facility_game"
input recurring_facility_game_min_order_by {
  created_at: order_by
  facility_game_columns_id: order_by
  id: order_by
  rruleset_string: order_by
  updated_at: order_by
}

# response of any mutation on the table "recurring_facility_game"
type recurring_facility_game_mutation_response {
  # number of affected rows by the mutation
  affected_rows: Int!

  # data of the affected rows by the mutation
  returning: [recurring_facility_game!]!
}

# input type for inserting object relation for remote table "recurring_facility_game"
input recurring_facility_game_obj_rel_insert_input {
  data: recurring_facility_game_insert_input!
  on_conflict: recurring_facility_game_on_conflict
}

# on conflict condition type for table "recurring_facility_game"
input recurring_facility_game_on_conflict {
  constraint: recurring_facility_game_constraint!
  update_columns: [recurring_facility_game_update_column!]!
  where: recurring_facility_game_bool_exp
}

# ordering options when selecting data from "recurring_facility_game"
input recurring_facility_game_order_by {
  created_at: order_by
  facility_game_column: facility_game_columns_order_by
  facility_game_columns_id: order_by
  facility_games_aggregate: facility_game_aggregate_order_by
  id: order_by
  recurring_facility_game_reservations_aggregate: recurring_facility_game_reservation_aggregate_order_by
  rruleset_string: order_by
  updated_at: order_by
}

# primary key columns input for table: "recurring_facility_game"
input recurring_facility_game_pk_columns_input {
  id: Int!
}

# A player reservation for a recurring facility game
#
#
# columns and relationships of "recurring_facility_game_reservation"
#
type recurring_facility_game_reservation {
  created_at: timestamptz!
  datetime: timestamptz!
  id: Int!

  # An object relationship
  player: player!
  player_id: Int!

  # An object relationship
  recurring_facility_game: recurring_facility_game!
  recurring_facility_game_id: Int!
  updated_at: timestamptz!
}

# aggregated selection of "recurring_facility_game_reservation"
type recurring_facility_game_reservation_aggregate {
  aggregate: recurring_facility_game_reservation_aggregate_fields
  nodes: [recurring_facility_game_reservation!]!
}

# aggregate fields of "recurring_facility_game_reservation"
type recurring_facility_game_reservation_aggregate_fields {
  avg: recurring_facility_game_reservation_avg_fields
  count(columns: [recurring_facility_game_reservation_select_column!], distinct: Boolean): Int
  max: recurring_facility_game_reservation_max_fields
  min: recurring_facility_game_reservation_min_fields
  stddev: recurring_facility_game_reservation_stddev_fields
  stddev_pop: recurring_facility_game_reservation_stddev_pop_fields
  stddev_samp: recurring_facility_game_reservation_stddev_samp_fields
  sum: recurring_facility_game_reservation_sum_fields
  var_pop: recurring_facility_game_reservation_var_pop_fields
  var_samp: recurring_facility_game_reservation_var_samp_fields
  variance: recurring_facility_game_reservation_variance_fields
}

# order by aggregate values of table "recurring_facility_game_reservation"
input recurring_facility_game_reservation_aggregate_order_by {
  avg: recurring_facility_game_reservation_avg_order_by
  count: order_by
  max: recurring_facility_game_reservation_max_order_by
  min: recurring_facility_game_reservation_min_order_by
  stddev: recurring_facility_game_reservation_stddev_order_by
  stddev_pop: recurring_facility_game_reservation_stddev_pop_order_by
  stddev_samp: recurring_facility_game_reservation_stddev_samp_order_by
  sum: recurring_facility_game_reservation_sum_order_by
  var_pop: recurring_facility_game_reservation_var_pop_order_by
  var_samp: recurring_facility_game_reservation_var_samp_order_by
  variance: recurring_facility_game_reservation_variance_order_by
}

# input type for inserting array relation for remote table "recurring_facility_game_reservation"
input recurring_facility_game_reservation_arr_rel_insert_input {
  data: [recurring_facility_game_reservation_insert_input!]!
  on_conflict: recurring_facility_game_reservation_on_conflict
}

# aggregate avg on columns
type recurring_facility_game_reservation_avg_fields {
  id: Float
  player_id: Float
  recurring_facility_game_id: Float
}

# order by avg() on columns of table "recurring_facility_game_reservation"
input recurring_facility_game_reservation_avg_order_by {
  id: order_by
  player_id: order_by
  recurring_facility_game_id: order_by
}

# Boolean expression to filter rows from the table
# "recurring_facility_game_reservation". All fields are combined with a logical 'AND'.
input recurring_facility_game_reservation_bool_exp {
  _and: [recurring_facility_game_reservation_bool_exp]
  _not: recurring_facility_game_reservation_bool_exp
  _or: [recurring_facility_game_reservation_bool_exp]
  created_at: timestamptz_comparison_exp
  datetime: timestamptz_comparison_exp
  id: Int_comparison_exp
  player: player_bool_exp
  player_id: Int_comparison_exp
  recurring_facility_game: recurring_facility_game_bool_exp
  recurring_facility_game_id: Int_comparison_exp
  updated_at: timestamptz_comparison_exp
}

# unique or primary key constraints on table "recurring_facility_game_reservation"
enum recurring_facility_game_reservation_constraint {
  # unique or primary key constraint
  recurring_facility_game_reservation_pkey

  # unique or primary key constraint
  unique_players_per_recurring_facility_game
}

# input type for incrementing integer column in table "recurring_facility_game_reservation"
input recurring_facility_game_reservation_inc_input {
  id: Int
  player_id: Int
  recurring_facility_game_id: Int
}

# input type for inserting data into table "recurring_facility_game_reservation"
input recurring_facility_game_reservation_insert_input {
  created_at: timestamptz
  datetime: timestamptz
  id: Int
  player: player_obj_rel_insert_input
  player_id: Int
  recurring_facility_game: recurring_facility_game_obj_rel_insert_input
  recurring_facility_game_id: Int
  updated_at: timestamptz
}

# aggregate max on columns
type recurring_facility_game_reservation_max_fields {
  created_at: timestamptz
  datetime: timestamptz
  id: Int
  player_id: Int
  recurring_facility_game_id: Int
  updated_at: timestamptz
}

# order by max() on columns of table "recurring_facility_game_reservation"
input recurring_facility_game_reservation_max_order_by {
  created_at: order_by
  datetime: order_by
  id: order_by
  player_id: order_by
  recurring_facility_game_id: order_by
  updated_at: order_by
}

# aggregate min on columns
type recurring_facility_game_reservation_min_fields {
  created_at: timestamptz
  datetime: timestamptz
  id: Int
  player_id: Int
  recurring_facility_game_id: Int
  updated_at: timestamptz
}

# order by min() on columns of table "recurring_facility_game_reservation"
input recurring_facility_game_reservation_min_order_by {
  created_at: order_by
  datetime: order_by
  id: order_by
  player_id: order_by
  recurring_facility_game_id: order_by
  updated_at: order_by
}

# response of any mutation on the table "recurring_facility_game_reservation"
type recurring_facility_game_reservation_mutation_response {
  # number of affected rows by the mutation
  affected_rows: Int!

  # data of the affected rows by the mutation
  returning: [recurring_facility_game_reservation!]!
}

# input type for inserting object relation for remote table "recurring_facility_game_reservation"
input recurring_facility_game_reservation_obj_rel_insert_input {
  data: recurring_facility_game_reservation_insert_input!
  on_conflict: recurring_facility_game_reservation_on_conflict
}

# on conflict condition type for table "recurring_facility_game_reservation"
input recurring_facility_game_reservation_on_conflict {
  constraint: recurring_facility_game_reservation_constraint!
  update_columns: [recurring_facility_game_reservation_update_column!]!
  where: recurring_facility_game_reservation_bool_exp
}

# ordering options when selecting data from "recurring_facility_game_reservation"
input recurring_facility_game_reservation_order_by {
  created_at: order_by
  datetime: order_by
  id: order_by
  player: player_order_by
  player_id: order_by
  recurring_facility_game: recurring_facility_game_order_by
  recurring_facility_game_id: order_by
  updated_at: order_by
}

# primary key columns input for table: "recurring_facility_game_reservation"
input recurring_facility_game_reservation_pk_columns_input {
  id: Int!
}

# select columns of table "recurring_facility_game_reservation"
enum recurring_facility_game_reservation_select_column {
  # column name
  created_at

  # column name
  datetime

  # column name
  id

  # column name
  player_id

  # column name
  recurring_facility_game_id

  # column name
  updated_at
}

# input type for updating data in table "recurring_facility_game_reservation"
input recurring_facility_game_reservation_set_input {
  created_at: timestamptz
  datetime: timestamptz
  id: Int
  player_id: Int
  recurring_facility_game_id: Int
  updated_at: timestamptz
}

# aggregate stddev on columns
type recurring_facility_game_reservation_stddev_fields {
  id: Float
  player_id: Float
  recurring_facility_game_id: Float
}

# order by stddev() on columns of table "recurring_facility_game_reservation"
input recurring_facility_game_reservation_stddev_order_by {
  id: order_by
  player_id: order_by
  recurring_facility_game_id: order_by
}

# aggregate stddev_pop on columns
type recurring_facility_game_reservation_stddev_pop_fields {
  id: Float
  player_id: Float
  recurring_facility_game_id: Float
}

# order by stddev_pop() on columns of table "recurring_facility_game_reservation"
input recurring_facility_game_reservation_stddev_pop_order_by {
  id: order_by
  player_id: order_by
  recurring_facility_game_id: order_by
}

# aggregate stddev_samp on columns
type recurring_facility_game_reservation_stddev_samp_fields {
  id: Float
  player_id: Float
  recurring_facility_game_id: Float
}

# order by stddev_samp() on columns of table "recurring_facility_game_reservation"
input recurring_facility_game_reservation_stddev_samp_order_by {
  id: order_by
  player_id: order_by
  recurring_facility_game_id: order_by
}

# aggregate sum on columns
type recurring_facility_game_reservation_sum_fields {
  id: Int
  player_id: Int
  recurring_facility_game_id: Int
}

# order by sum() on columns of table "recurring_facility_game_reservation"
input recurring_facility_game_reservation_sum_order_by {
  id: order_by
  player_id: order_by
  recurring_facility_game_id: order_by
}

# update columns of table "recurring_facility_game_reservation"
enum recurring_facility_game_reservation_update_column {
  # column name
  created_at

  # column name
  datetime

  # column name
  id

  # column name
  player_id

  # column name
  recurring_facility_game_id

  # column name
  updated_at
}

# aggregate var_pop on columns
type recurring_facility_game_reservation_var_pop_fields {
  id: Float
  player_id: Float
  recurring_facility_game_id: Float
}

# order by var_pop() on columns of table "recurring_facility_game_reservation"
input recurring_facility_game_reservation_var_pop_order_by {
  id: order_by
  player_id: order_by
  recurring_facility_game_id: order_by
}

# aggregate var_samp on columns
type recurring_facility_game_reservation_var_samp_fields {
  id: Float
  player_id: Float
  recurring_facility_game_id: Float
}

# order by var_samp() on columns of table "recurring_facility_game_reservation"
input recurring_facility_game_reservation_var_samp_order_by {
  id: order_by
  player_id: order_by
  recurring_facility_game_id: order_by
}

# aggregate variance on columns
type recurring_facility_game_reservation_variance_fields {
  id: Float
  player_id: Float
  recurring_facility_game_id: Float
}

# order by variance() on columns of table "recurring_facility_game_reservation"
input recurring_facility_game_reservation_variance_order_by {
  id: order_by
  player_id: order_by
  recurring_facility_game_id: order_by
}

# select columns of table "recurring_facility_game"
enum recurring_facility_game_select_column {
  # column name
  created_at

  # column name
  facility_game_columns_id

  # column name
  id

  # column name
  rruleset_string

  # column name
  updated_at
}

# input type for updating data in table "recurring_facility_game"
input recurring_facility_game_set_input {
  created_at: timestamptz
  facility_game_columns_id: Int
  id: Int
  rruleset_string: String
  updated_at: timestamptz
}

# aggregate stddev on columns
type recurring_facility_game_stddev_fields {
  facility_game_columns_id: Float
  id: Float
}

# order by stddev() on columns of table "recurring_facility_game"
input recurring_facility_game_stddev_order_by {
  facility_game_columns_id: order_by
  id: order_by
}

# aggregate stddev_pop on columns
type recurring_facility_game_stddev_pop_fields {
  facility_game_columns_id: Float
  id: Float
}

# order by stddev_pop() on columns of table "recurring_facility_game"
input recurring_facility_game_stddev_pop_order_by {
  facility_game_columns_id: order_by
  id: order_by
}

# aggregate stddev_samp on columns
type recurring_facility_game_stddev_samp_fields {
  facility_game_columns_id: Float
  id: Float
}

# order by stddev_samp() on columns of table "recurring_facility_game"
input recurring_facility_game_stddev_samp_order_by {
  facility_game_columns_id: order_by
  id: order_by
}

# aggregate sum on columns
type recurring_facility_game_sum_fields {
  facility_game_columns_id: Int
  id: Int
}

# order by sum() on columns of table "recurring_facility_game"
input recurring_facility_game_sum_order_by {
  facility_game_columns_id: order_by
  id: order_by
}

# update columns of table "recurring_facility_game"
enum recurring_facility_game_update_column {
  # column name
  created_at

  # column name
  facility_game_columns_id

  # column name
  id

  # column name
  rruleset_string

  # column name
  updated_at
}

# aggregate var_pop on columns
type recurring_facility_game_var_pop_fields {
  facility_game_columns_id: Float
  id: Float
}

# order by var_pop() on columns of table "recurring_facility_game"
input recurring_facility_game_var_pop_order_by {
  facility_game_columns_id: order_by
  id: order_by
}

# aggregate var_samp on columns
type recurring_facility_game_var_samp_fields {
  facility_game_columns_id: Float
  id: Float
}

# order by var_samp() on columns of table "recurring_facility_game"
input recurring_facility_game_var_samp_order_by {
  facility_game_columns_id: order_by
  id: order_by
}

# aggregate variance on columns
type recurring_facility_game_variance_fields {
  facility_game_columns_id: Float
  id: Float
}

# order by variance() on columns of table "recurring_facility_game"
input recurring_facility_game_variance_order_by {
  facility_game_columns_id: order_by
  id: order_by
}

# A recurring open game
#
#
# columns and relationships of "recurring_open_game"
#
type recurring_open_game {
  created_at: timestamptz!
  id: Int!

  # An object relationship
  open_game_column: open_game_columns!
  open_game_columns_id: Int!

  # An array relationship
  open_games(
    # distinct select on columns
    distinct_on: [open_game_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [open_game_order_by!]

    # filter the rows returned
    where: open_game_bool_exp
  ): [open_game!]!

  # An aggregated array relationship
  open_games_aggregate(
    # distinct select on columns
    distinct_on: [open_game_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [open_game_order_by!]

    # filter the rows returned
    where: open_game_bool_exp
  ): open_game_aggregate!

  # An array relationship
  recurring_open_game_reservations(
    # distinct select on columns
    distinct_on: [recurring_open_game_reservation_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [recurring_open_game_reservation_order_by!]

    # filter the rows returned
    where: recurring_open_game_reservation_bool_exp
  ): [recurring_open_game_reservation!]!

  # An aggregated array relationship
  recurring_open_game_reservations_aggregate(
    # distinct select on columns
    distinct_on: [recurring_open_game_reservation_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [recurring_open_game_reservation_order_by!]

    # filter the rows returned
    where: recurring_open_game_reservation_bool_exp
  ): recurring_open_game_reservation_aggregate!
  rruleset_string: String!
  updated_at: timestamptz!
}

# aggregated selection of "recurring_open_game"
type recurring_open_game_aggregate {
  aggregate: recurring_open_game_aggregate_fields
  nodes: [recurring_open_game!]!
}

# aggregate fields of "recurring_open_game"
type recurring_open_game_aggregate_fields {
  avg: recurring_open_game_avg_fields
  count(columns: [recurring_open_game_select_column!], distinct: Boolean): Int
  max: recurring_open_game_max_fields
  min: recurring_open_game_min_fields
  stddev: recurring_open_game_stddev_fields
  stddev_pop: recurring_open_game_stddev_pop_fields
  stddev_samp: recurring_open_game_stddev_samp_fields
  sum: recurring_open_game_sum_fields
  var_pop: recurring_open_game_var_pop_fields
  var_samp: recurring_open_game_var_samp_fields
  variance: recurring_open_game_variance_fields
}

# order by aggregate values of table "recurring_open_game"
input recurring_open_game_aggregate_order_by {
  avg: recurring_open_game_avg_order_by
  count: order_by
  max: recurring_open_game_max_order_by
  min: recurring_open_game_min_order_by
  stddev: recurring_open_game_stddev_order_by
  stddev_pop: recurring_open_game_stddev_pop_order_by
  stddev_samp: recurring_open_game_stddev_samp_order_by
  sum: recurring_open_game_sum_order_by
  var_pop: recurring_open_game_var_pop_order_by
  var_samp: recurring_open_game_var_samp_order_by
  variance: recurring_open_game_variance_order_by
}

# input type for inserting array relation for remote table "recurring_open_game"
input recurring_open_game_arr_rel_insert_input {
  data: [recurring_open_game_insert_input!]!
  on_conflict: recurring_open_game_on_conflict
}

# aggregate avg on columns
type recurring_open_game_avg_fields {
  id: Float
  open_game_columns_id: Float
}

# order by avg() on columns of table "recurring_open_game"
input recurring_open_game_avg_order_by {
  id: order_by
  open_game_columns_id: order_by
}

# Boolean expression to filter rows from the table "recurring_open_game". All fields are combined with a logical 'AND'.
input recurring_open_game_bool_exp {
  _and: [recurring_open_game_bool_exp]
  _not: recurring_open_game_bool_exp
  _or: [recurring_open_game_bool_exp]
  created_at: timestamptz_comparison_exp
  id: Int_comparison_exp
  open_game_column: open_game_columns_bool_exp
  open_game_columns_id: Int_comparison_exp
  open_games: open_game_bool_exp
  recurring_open_game_reservations: recurring_open_game_reservation_bool_exp
  rruleset_string: String_comparison_exp
  updated_at: timestamptz_comparison_exp
}

# unique or primary key constraints on table "recurring_open_game"
enum recurring_open_game_constraint {
  # unique or primary key constraint
  recurring_open_game_pkey
}

# A materialized view which generates the dates for a recurring facility game.
# Auto-updated by triggers when open games are created, updated, or deleted.
#
#
# columns and relationships of "recurring_open_game_datetime"
#
type recurring_open_game_datetime {
  datetime: timestamptz
  recurring_open_game_id: Int
}

# aggregated selection of "recurring_open_game_datetime"
type recurring_open_game_datetime_aggregate {
  aggregate: recurring_open_game_datetime_aggregate_fields
  nodes: [recurring_open_game_datetime!]!
}

# aggregate fields of "recurring_open_game_datetime"
type recurring_open_game_datetime_aggregate_fields {
  avg: recurring_open_game_datetime_avg_fields
  count(columns: [recurring_open_game_datetime_select_column!], distinct: Boolean): Int
  max: recurring_open_game_datetime_max_fields
  min: recurring_open_game_datetime_min_fields
  stddev: recurring_open_game_datetime_stddev_fields
  stddev_pop: recurring_open_game_datetime_stddev_pop_fields
  stddev_samp: recurring_open_game_datetime_stddev_samp_fields
  sum: recurring_open_game_datetime_sum_fields
  var_pop: recurring_open_game_datetime_var_pop_fields
  var_samp: recurring_open_game_datetime_var_samp_fields
  variance: recurring_open_game_datetime_variance_fields
}

# order by aggregate values of table "recurring_open_game_datetime"
input recurring_open_game_datetime_aggregate_order_by {
  avg: recurring_open_game_datetime_avg_order_by
  count: order_by
  max: recurring_open_game_datetime_max_order_by
  min: recurring_open_game_datetime_min_order_by
  stddev: recurring_open_game_datetime_stddev_order_by
  stddev_pop: recurring_open_game_datetime_stddev_pop_order_by
  stddev_samp: recurring_open_game_datetime_stddev_samp_order_by
  sum: recurring_open_game_datetime_sum_order_by
  var_pop: recurring_open_game_datetime_var_pop_order_by
  var_samp: recurring_open_game_datetime_var_samp_order_by
  variance: recurring_open_game_datetime_variance_order_by
}

# input type for inserting array relation for remote table "recurring_open_game_datetime"
input recurring_open_game_datetime_arr_rel_insert_input {
  data: [recurring_open_game_datetime_insert_input!]!
}

# aggregate avg on columns
type recurring_open_game_datetime_avg_fields {
  recurring_open_game_id: Float
}

# order by avg() on columns of table "recurring_open_game_datetime"
input recurring_open_game_datetime_avg_order_by {
  recurring_open_game_id: order_by
}

# Boolean expression to filter rows from the table "recurring_open_game_datetime".
# All fields are combined with a logical 'AND'.
input recurring_open_game_datetime_bool_exp {
  _and: [recurring_open_game_datetime_bool_exp]
  _not: recurring_open_game_datetime_bool_exp
  _or: [recurring_open_game_datetime_bool_exp]
  datetime: timestamptz_comparison_exp
  recurring_open_game_id: Int_comparison_exp
}

# input type for incrementing integer column in table "recurring_open_game_datetime"
input recurring_open_game_datetime_inc_input {
  recurring_open_game_id: Int
}

# input type for inserting data into table "recurring_open_game_datetime"
input recurring_open_game_datetime_insert_input {
  datetime: timestamptz
  recurring_open_game_id: Int
}

# aggregate max on columns
type recurring_open_game_datetime_max_fields {
  datetime: timestamptz
  recurring_open_game_id: Int
}

# order by max() on columns of table "recurring_open_game_datetime"
input recurring_open_game_datetime_max_order_by {
  datetime: order_by
  recurring_open_game_id: order_by
}

# aggregate min on columns
type recurring_open_game_datetime_min_fields {
  datetime: timestamptz
  recurring_open_game_id: Int
}

# order by min() on columns of table "recurring_open_game_datetime"
input recurring_open_game_datetime_min_order_by {
  datetime: order_by
  recurring_open_game_id: order_by
}

# response of any mutation on the table "recurring_open_game_datetime"
type recurring_open_game_datetime_mutation_response {
  # number of affected rows by the mutation
  affected_rows: Int!

  # data of the affected rows by the mutation
  returning: [recurring_open_game_datetime!]!
}

# input type for inserting object relation for remote table "recurring_open_game_datetime"
input recurring_open_game_datetime_obj_rel_insert_input {
  data: recurring_open_game_datetime_insert_input!
}

# ordering options when selecting data from "recurring_open_game_datetime"
input recurring_open_game_datetime_order_by {
  datetime: order_by
  recurring_open_game_id: order_by
}

# select columns of table "recurring_open_game_datetime"
enum recurring_open_game_datetime_select_column {
  # column name
  datetime

  # column name
  recurring_open_game_id
}

# input type for updating data in table "recurring_open_game_datetime"
input recurring_open_game_datetime_set_input {
  datetime: timestamptz
  recurring_open_game_id: Int
}

# aggregate stddev on columns
type recurring_open_game_datetime_stddev_fields {
  recurring_open_game_id: Float
}

# order by stddev() on columns of table "recurring_open_game_datetime"
input recurring_open_game_datetime_stddev_order_by {
  recurring_open_game_id: order_by
}

# aggregate stddev_pop on columns
type recurring_open_game_datetime_stddev_pop_fields {
  recurring_open_game_id: Float
}

# order by stddev_pop() on columns of table "recurring_open_game_datetime"
input recurring_open_game_datetime_stddev_pop_order_by {
  recurring_open_game_id: order_by
}

# aggregate stddev_samp on columns
type recurring_open_game_datetime_stddev_samp_fields {
  recurring_open_game_id: Float
}

# order by stddev_samp() on columns of table "recurring_open_game_datetime"
input recurring_open_game_datetime_stddev_samp_order_by {
  recurring_open_game_id: order_by
}

# aggregate sum on columns
type recurring_open_game_datetime_sum_fields {
  recurring_open_game_id: Int
}

# order by sum() on columns of table "recurring_open_game_datetime"
input recurring_open_game_datetime_sum_order_by {
  recurring_open_game_id: order_by
}

# aggregate var_pop on columns
type recurring_open_game_datetime_var_pop_fields {
  recurring_open_game_id: Float
}

# order by var_pop() on columns of table "recurring_open_game_datetime"
input recurring_open_game_datetime_var_pop_order_by {
  recurring_open_game_id: order_by
}

# aggregate var_samp on columns
type recurring_open_game_datetime_var_samp_fields {
  recurring_open_game_id: Float
}

# order by var_samp() on columns of table "recurring_open_game_datetime"
input recurring_open_game_datetime_var_samp_order_by {
  recurring_open_game_id: order_by
}

# aggregate variance on columns
type recurring_open_game_datetime_variance_fields {
  recurring_open_game_id: Float
}

# order by variance() on columns of table "recurring_open_game_datetime"
input recurring_open_game_datetime_variance_order_by {
  recurring_open_game_id: order_by
}

# input type for incrementing integer column in table "recurring_open_game"
input recurring_open_game_inc_input {
  id: Int
  open_game_columns_id: Int
}

# input type for inserting data into table "recurring_open_game"
input recurring_open_game_insert_input {
  created_at: timestamptz
  id: Int
  open_game_column: open_game_columns_obj_rel_insert_input
  open_game_columns_id: Int
  open_games: open_game_arr_rel_insert_input
  recurring_open_game_reservations: recurring_open_game_reservation_arr_rel_insert_input
  rruleset_string: String
  updated_at: timestamptz
}

# aggregate max on columns
type recurring_open_game_max_fields {
  created_at: timestamptz
  id: Int
  open_game_columns_id: Int
  rruleset_string: String
  updated_at: timestamptz
}

# order by max() on columns of table "recurring_open_game"
input recurring_open_game_max_order_by {
  created_at: order_by
  id: order_by
  open_game_columns_id: order_by
  rruleset_string: order_by
  updated_at: order_by
}

# aggregate min on columns
type recurring_open_game_min_fields {
  created_at: timestamptz
  id: Int
  open_game_columns_id: Int
  rruleset_string: String
  updated_at: timestamptz
}

# order by min() on columns of table "recurring_open_game"
input recurring_open_game_min_order_by {
  created_at: order_by
  id: order_by
  open_game_columns_id: order_by
  rruleset_string: order_by
  updated_at: order_by
}

# response of any mutation on the table "recurring_open_game"
type recurring_open_game_mutation_response {
  # number of affected rows by the mutation
  affected_rows: Int!

  # data of the affected rows by the mutation
  returning: [recurring_open_game!]!
}

# input type for inserting object relation for remote table "recurring_open_game"
input recurring_open_game_obj_rel_insert_input {
  data: recurring_open_game_insert_input!
  on_conflict: recurring_open_game_on_conflict
}

# on conflict condition type for table "recurring_open_game"
input recurring_open_game_on_conflict {
  constraint: recurring_open_game_constraint!
  update_columns: [recurring_open_game_update_column!]!
  where: recurring_open_game_bool_exp
}

# ordering options when selecting data from "recurring_open_game"
input recurring_open_game_order_by {
  created_at: order_by
  id: order_by
  open_game_column: open_game_columns_order_by
  open_game_columns_id: order_by
  open_games_aggregate: open_game_aggregate_order_by
  recurring_open_game_reservations_aggregate: recurring_open_game_reservation_aggregate_order_by
  rruleset_string: order_by
  updated_at: order_by
}

# primary key columns input for table: "recurring_open_game"
input recurring_open_game_pk_columns_input {
  id: Int!
}

# A player reservation for a recurring open game
#
#
# columns and relationships of "recurring_open_game_reservation"
#
type recurring_open_game_reservation {
  created_at: timestamptz!
  datetime: timestamptz!
  id: Int!

  # An object relationship
  player: player!
  player_id: Int!

  # An object relationship
  recurring_open_game: recurring_open_game!
  recurring_open_game_id: Int!
  updated_at: timestamptz!
}

# aggregated selection of "recurring_open_game_reservation"
type recurring_open_game_reservation_aggregate {
  aggregate: recurring_open_game_reservation_aggregate_fields
  nodes: [recurring_open_game_reservation!]!
}

# aggregate fields of "recurring_open_game_reservation"
type recurring_open_game_reservation_aggregate_fields {
  avg: recurring_open_game_reservation_avg_fields
  count(columns: [recurring_open_game_reservation_select_column!], distinct: Boolean): Int
  max: recurring_open_game_reservation_max_fields
  min: recurring_open_game_reservation_min_fields
  stddev: recurring_open_game_reservation_stddev_fields
  stddev_pop: recurring_open_game_reservation_stddev_pop_fields
  stddev_samp: recurring_open_game_reservation_stddev_samp_fields
  sum: recurring_open_game_reservation_sum_fields
  var_pop: recurring_open_game_reservation_var_pop_fields
  var_samp: recurring_open_game_reservation_var_samp_fields
  variance: recurring_open_game_reservation_variance_fields
}

# order by aggregate values of table "recurring_open_game_reservation"
input recurring_open_game_reservation_aggregate_order_by {
  avg: recurring_open_game_reservation_avg_order_by
  count: order_by
  max: recurring_open_game_reservation_max_order_by
  min: recurring_open_game_reservation_min_order_by
  stddev: recurring_open_game_reservation_stddev_order_by
  stddev_pop: recurring_open_game_reservation_stddev_pop_order_by
  stddev_samp: recurring_open_game_reservation_stddev_samp_order_by
  sum: recurring_open_game_reservation_sum_order_by
  var_pop: recurring_open_game_reservation_var_pop_order_by
  var_samp: recurring_open_game_reservation_var_samp_order_by
  variance: recurring_open_game_reservation_variance_order_by
}

# input type for inserting array relation for remote table "recurring_open_game_reservation"
input recurring_open_game_reservation_arr_rel_insert_input {
  data: [recurring_open_game_reservation_insert_input!]!
  on_conflict: recurring_open_game_reservation_on_conflict
}

# aggregate avg on columns
type recurring_open_game_reservation_avg_fields {
  id: Float
  player_id: Float
  recurring_open_game_id: Float
}

# order by avg() on columns of table "recurring_open_game_reservation"
input recurring_open_game_reservation_avg_order_by {
  id: order_by
  player_id: order_by
  recurring_open_game_id: order_by
}

# Boolean expression to filter rows from the table
# "recurring_open_game_reservation". All fields are combined with a logical 'AND'.
input recurring_open_game_reservation_bool_exp {
  _and: [recurring_open_game_reservation_bool_exp]
  _not: recurring_open_game_reservation_bool_exp
  _or: [recurring_open_game_reservation_bool_exp]
  created_at: timestamptz_comparison_exp
  datetime: timestamptz_comparison_exp
  id: Int_comparison_exp
  player: player_bool_exp
  player_id: Int_comparison_exp
  recurring_open_game: recurring_open_game_bool_exp
  recurring_open_game_id: Int_comparison_exp
  updated_at: timestamptz_comparison_exp
}

# unique or primary key constraints on table "recurring_open_game_reservation"
enum recurring_open_game_reservation_constraint {
  # unique or primary key constraint
  recurring_open_game_reservation_pkey

  # unique or primary key constraint
  unique_players_per_recurring_open_game
}

# input type for incrementing integer column in table "recurring_open_game_reservation"
input recurring_open_game_reservation_inc_input {
  id: Int
  player_id: Int
  recurring_open_game_id: Int
}

# input type for inserting data into table "recurring_open_game_reservation"
input recurring_open_game_reservation_insert_input {
  created_at: timestamptz
  datetime: timestamptz
  id: Int
  player: player_obj_rel_insert_input
  player_id: Int
  recurring_open_game: recurring_open_game_obj_rel_insert_input
  recurring_open_game_id: Int
  updated_at: timestamptz
}

# aggregate max on columns
type recurring_open_game_reservation_max_fields {
  created_at: timestamptz
  datetime: timestamptz
  id: Int
  player_id: Int
  recurring_open_game_id: Int
  updated_at: timestamptz
}

# order by max() on columns of table "recurring_open_game_reservation"
input recurring_open_game_reservation_max_order_by {
  created_at: order_by
  datetime: order_by
  id: order_by
  player_id: order_by
  recurring_open_game_id: order_by
  updated_at: order_by
}

# aggregate min on columns
type recurring_open_game_reservation_min_fields {
  created_at: timestamptz
  datetime: timestamptz
  id: Int
  player_id: Int
  recurring_open_game_id: Int
  updated_at: timestamptz
}

# order by min() on columns of table "recurring_open_game_reservation"
input recurring_open_game_reservation_min_order_by {
  created_at: order_by
  datetime: order_by
  id: order_by
  player_id: order_by
  recurring_open_game_id: order_by
  updated_at: order_by
}

# response of any mutation on the table "recurring_open_game_reservation"
type recurring_open_game_reservation_mutation_response {
  # number of affected rows by the mutation
  affected_rows: Int!

  # data of the affected rows by the mutation
  returning: [recurring_open_game_reservation!]!
}

# input type for inserting object relation for remote table "recurring_open_game_reservation"
input recurring_open_game_reservation_obj_rel_insert_input {
  data: recurring_open_game_reservation_insert_input!
  on_conflict: recurring_open_game_reservation_on_conflict
}

# on conflict condition type for table "recurring_open_game_reservation"
input recurring_open_game_reservation_on_conflict {
  constraint: recurring_open_game_reservation_constraint!
  update_columns: [recurring_open_game_reservation_update_column!]!
  where: recurring_open_game_reservation_bool_exp
}

# ordering options when selecting data from "recurring_open_game_reservation"
input recurring_open_game_reservation_order_by {
  created_at: order_by
  datetime: order_by
  id: order_by
  player: player_order_by
  player_id: order_by
  recurring_open_game: recurring_open_game_order_by
  recurring_open_game_id: order_by
  updated_at: order_by
}

# primary key columns input for table: "recurring_open_game_reservation"
input recurring_open_game_reservation_pk_columns_input {
  id: Int!
}

# select columns of table "recurring_open_game_reservation"
enum recurring_open_game_reservation_select_column {
  # column name
  created_at

  # column name
  datetime

  # column name
  id

  # column name
  player_id

  # column name
  recurring_open_game_id

  # column name
  updated_at
}

# input type for updating data in table "recurring_open_game_reservation"
input recurring_open_game_reservation_set_input {
  created_at: timestamptz
  datetime: timestamptz
  id: Int
  player_id: Int
  recurring_open_game_id: Int
  updated_at: timestamptz
}

# aggregate stddev on columns
type recurring_open_game_reservation_stddev_fields {
  id: Float
  player_id: Float
  recurring_open_game_id: Float
}

# order by stddev() on columns of table "recurring_open_game_reservation"
input recurring_open_game_reservation_stddev_order_by {
  id: order_by
  player_id: order_by
  recurring_open_game_id: order_by
}

# aggregate stddev_pop on columns
type recurring_open_game_reservation_stddev_pop_fields {
  id: Float
  player_id: Float
  recurring_open_game_id: Float
}

# order by stddev_pop() on columns of table "recurring_open_game_reservation"
input recurring_open_game_reservation_stddev_pop_order_by {
  id: order_by
  player_id: order_by
  recurring_open_game_id: order_by
}

# aggregate stddev_samp on columns
type recurring_open_game_reservation_stddev_samp_fields {
  id: Float
  player_id: Float
  recurring_open_game_id: Float
}

# order by stddev_samp() on columns of table "recurring_open_game_reservation"
input recurring_open_game_reservation_stddev_samp_order_by {
  id: order_by
  player_id: order_by
  recurring_open_game_id: order_by
}

# aggregate sum on columns
type recurring_open_game_reservation_sum_fields {
  id: Int
  player_id: Int
  recurring_open_game_id: Int
}

# order by sum() on columns of table "recurring_open_game_reservation"
input recurring_open_game_reservation_sum_order_by {
  id: order_by
  player_id: order_by
  recurring_open_game_id: order_by
}

# update columns of table "recurring_open_game_reservation"
enum recurring_open_game_reservation_update_column {
  # column name
  created_at

  # column name
  datetime

  # column name
  id

  # column name
  player_id

  # column name
  recurring_open_game_id

  # column name
  updated_at
}

# aggregate var_pop on columns
type recurring_open_game_reservation_var_pop_fields {
  id: Float
  player_id: Float
  recurring_open_game_id: Float
}

# order by var_pop() on columns of table "recurring_open_game_reservation"
input recurring_open_game_reservation_var_pop_order_by {
  id: order_by
  player_id: order_by
  recurring_open_game_id: order_by
}

# aggregate var_samp on columns
type recurring_open_game_reservation_var_samp_fields {
  id: Float
  player_id: Float
  recurring_open_game_id: Float
}

# order by var_samp() on columns of table "recurring_open_game_reservation"
input recurring_open_game_reservation_var_samp_order_by {
  id: order_by
  player_id: order_by
  recurring_open_game_id: order_by
}

# aggregate variance on columns
type recurring_open_game_reservation_variance_fields {
  id: Float
  player_id: Float
  recurring_open_game_id: Float
}

# order by variance() on columns of table "recurring_open_game_reservation"
input recurring_open_game_reservation_variance_order_by {
  id: order_by
  player_id: order_by
  recurring_open_game_id: order_by
}

# select columns of table "recurring_open_game"
enum recurring_open_game_select_column {
  # column name
  created_at

  # column name
  id

  # column name
  open_game_columns_id

  # column name
  rruleset_string

  # column name
  updated_at
}

# input type for updating data in table "recurring_open_game"
input recurring_open_game_set_input {
  created_at: timestamptz
  id: Int
  open_game_columns_id: Int
  rruleset_string: String
  updated_at: timestamptz
}

# aggregate stddev on columns
type recurring_open_game_stddev_fields {
  id: Float
  open_game_columns_id: Float
}

# order by stddev() on columns of table "recurring_open_game"
input recurring_open_game_stddev_order_by {
  id: order_by
  open_game_columns_id: order_by
}

# aggregate stddev_pop on columns
type recurring_open_game_stddev_pop_fields {
  id: Float
  open_game_columns_id: Float
}

# order by stddev_pop() on columns of table "recurring_open_game"
input recurring_open_game_stddev_pop_order_by {
  id: order_by
  open_game_columns_id: order_by
}

# aggregate stddev_samp on columns
type recurring_open_game_stddev_samp_fields {
  id: Float
  open_game_columns_id: Float
}

# order by stddev_samp() on columns of table "recurring_open_game"
input recurring_open_game_stddev_samp_order_by {
  id: order_by
  open_game_columns_id: order_by
}

# aggregate sum on columns
type recurring_open_game_sum_fields {
  id: Int
  open_game_columns_id: Int
}

# order by sum() on columns of table "recurring_open_game"
input recurring_open_game_sum_order_by {
  id: order_by
  open_game_columns_id: order_by
}

# update columns of table "recurring_open_game"
enum recurring_open_game_update_column {
  # column name
  created_at

  # column name
  id

  # column name
  open_game_columns_id

  # column name
  rruleset_string

  # column name
  updated_at
}

# aggregate var_pop on columns
type recurring_open_game_var_pop_fields {
  id: Float
  open_game_columns_id: Float
}

# order by var_pop() on columns of table "recurring_open_game"
input recurring_open_game_var_pop_order_by {
  id: order_by
  open_game_columns_id: order_by
}

# aggregate var_samp on columns
type recurring_open_game_var_samp_fields {
  id: Float
  open_game_columns_id: Float
}

# order by var_samp() on columns of table "recurring_open_game"
input recurring_open_game_var_samp_order_by {
  id: order_by
  open_game_columns_id: order_by
}

# aggregate variance on columns
type recurring_open_game_variance_fields {
  id: Float
  open_game_columns_id: Float
}

# order by variance() on columns of table "recurring_open_game"
input recurring_open_game_variance_order_by {
  id: order_by
  open_game_columns_id: order_by
}

# A geographic region used to assign facilities and locations to an area
#
#
# columns and relationships of "region"
#
type region {
  created_at: timestamptz!

  # An array relationship
  facilities(
    # distinct select on columns
    distinct_on: [facility_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_order_by!]

    # filter the rows returned
    where: facility_bool_exp
  ): [facility!]!

  # An aggregated array relationship
  facilities_aggregate(
    # distinct select on columns
    distinct_on: [facility_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_order_by!]

    # filter the rows returned
    where: facility_bool_exp
  ): facility_aggregate!
  id: Int!
  name: String!

  # An array relationship
  subregions(
    # distinct select on columns
    distinct_on: [subregion_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [subregion_order_by!]

    # filter the rows returned
    where: subregion_bool_exp
  ): [subregion!]!

  # An aggregated array relationship
  subregions_aggregate(
    # distinct select on columns
    distinct_on: [subregion_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [subregion_order_by!]

    # filter the rows returned
    where: subregion_bool_exp
  ): subregion_aggregate!
  updated_at: timestamptz!
}

# aggregated selection of "region"
type region_aggregate {
  aggregate: region_aggregate_fields
  nodes: [region!]!
}

# aggregate fields of "region"
type region_aggregate_fields {
  avg: region_avg_fields
  count(columns: [region_select_column!], distinct: Boolean): Int
  max: region_max_fields
  min: region_min_fields
  stddev: region_stddev_fields
  stddev_pop: region_stddev_pop_fields
  stddev_samp: region_stddev_samp_fields
  sum: region_sum_fields
  var_pop: region_var_pop_fields
  var_samp: region_var_samp_fields
  variance: region_variance_fields
}

# order by aggregate values of table "region"
input region_aggregate_order_by {
  avg: region_avg_order_by
  count: order_by
  max: region_max_order_by
  min: region_min_order_by
  stddev: region_stddev_order_by
  stddev_pop: region_stddev_pop_order_by
  stddev_samp: region_stddev_samp_order_by
  sum: region_sum_order_by
  var_pop: region_var_pop_order_by
  var_samp: region_var_samp_order_by
  variance: region_variance_order_by
}

# input type for inserting array relation for remote table "region"
input region_arr_rel_insert_input {
  data: [region_insert_input!]!
  on_conflict: region_on_conflict
}

# aggregate avg on columns
type region_avg_fields {
  id: Float
}

# order by avg() on columns of table "region"
input region_avg_order_by {
  id: order_by
}

# Boolean expression to filter rows from the table "region". All fields are combined with a logical 'AND'.
input region_bool_exp {
  _and: [region_bool_exp]
  _not: region_bool_exp
  _or: [region_bool_exp]
  created_at: timestamptz_comparison_exp
  facilities: facility_bool_exp
  id: Int_comparison_exp
  name: String_comparison_exp
  subregions: subregion_bool_exp
  updated_at: timestamptz_comparison_exp
}

# unique or primary key constraints on table "region"
enum region_constraint {
  # unique or primary key constraint
  region_pkey

  # unique or primary key constraint
  unique_region_name
}

# input type for incrementing integer column in table "region"
input region_inc_input {
  id: Int
}

# input type for inserting data into table "region"
input region_insert_input {
  created_at: timestamptz
  facilities: facility_arr_rel_insert_input
  id: Int
  name: String
  subregions: subregion_arr_rel_insert_input
  updated_at: timestamptz
}

# aggregate max on columns
type region_max_fields {
  created_at: timestamptz
  id: Int
  name: String
  updated_at: timestamptz
}

# order by max() on columns of table "region"
input region_max_order_by {
  created_at: order_by
  id: order_by
  name: order_by
  updated_at: order_by
}

# aggregate min on columns
type region_min_fields {
  created_at: timestamptz
  id: Int
  name: String
  updated_at: timestamptz
}

# order by min() on columns of table "region"
input region_min_order_by {
  created_at: order_by
  id: order_by
  name: order_by
  updated_at: order_by
}

# response of any mutation on the table "region"
type region_mutation_response {
  # number of affected rows by the mutation
  affected_rows: Int!

  # data of the affected rows by the mutation
  returning: [region!]!
}

# input type for inserting object relation for remote table "region"
input region_obj_rel_insert_input {
  data: region_insert_input!
  on_conflict: region_on_conflict
}

# on conflict condition type for table "region"
input region_on_conflict {
  constraint: region_constraint!
  update_columns: [region_update_column!]!
  where: region_bool_exp
}

# ordering options when selecting data from "region"
input region_order_by {
  created_at: order_by
  facilities_aggregate: facility_aggregate_order_by
  id: order_by
  name: order_by
  subregions_aggregate: subregion_aggregate_order_by
  updated_at: order_by
}

# primary key columns input for table: "region"
input region_pk_columns_input {
  id: Int!
}

# select columns of table "region"
enum region_select_column {
  # column name
  created_at

  # column name
  id

  # column name
  name

  # column name
  updated_at
}

# input type for updating data in table "region"
input region_set_input {
  created_at: timestamptz
  id: Int
  name: String
  updated_at: timestamptz
}

# aggregate stddev on columns
type region_stddev_fields {
  id: Float
}

# order by stddev() on columns of table "region"
input region_stddev_order_by {
  id: order_by
}

# aggregate stddev_pop on columns
type region_stddev_pop_fields {
  id: Float
}

# order by stddev_pop() on columns of table "region"
input region_stddev_pop_order_by {
  id: order_by
}

# aggregate stddev_samp on columns
type region_stddev_samp_fields {
  id: Float
}

# order by stddev_samp() on columns of table "region"
input region_stddev_samp_order_by {
  id: order_by
}

# aggregate sum on columns
type region_sum_fields {
  id: Int
}

# order by sum() on columns of table "region"
input region_sum_order_by {
  id: order_by
}

# update columns of table "region"
enum region_update_column {
  # column name
  created_at

  # column name
  id

  # column name
  name

  # column name
  updated_at
}

# aggregate var_pop on columns
type region_var_pop_fields {
  id: Float
}

# order by var_pop() on columns of table "region"
input region_var_pop_order_by {
  id: order_by
}

# aggregate var_samp on columns
type region_var_samp_fields {
  id: Float
}

# order by var_samp() on columns of table "region"
input region_var_samp_order_by {
  id: order_by
}

# aggregate variance on columns
type region_variance_fields {
  id: Float
}

# order by variance() on columns of table "region"
input region_variance_order_by {
  id: order_by
}

# expression to compare columns of type String. All fields are combined with logical 'AND'.
input String_comparison_exp {
  _eq: String
  _gt: String
  _gte: String
  _ilike: String
  _in: [String!]
  _is_null: Boolean
  _like: String
  _lt: String
  _lte: String
  _neq: String
  _nilike: String
  _nin: [String!]
  _nlike: String
  _nsimilar: String
  _similar: String
}

# Banking information for a facility
#
#
# columns and relationships of "submerchant_bank_information"
#
type submerchant_bank_information {
  bank_account_number: Int!
  bank_routing_number: Int!
  company_legal_name: String!
  created_at: timestamptz!
  id: Int!
  submerchant_id: Int!
  tax_id: Int
  updated_at: timestamptz!
}

# aggregated selection of "submerchant_bank_information"
type submerchant_bank_information_aggregate {
  aggregate: submerchant_bank_information_aggregate_fields
  nodes: [submerchant_bank_information!]!
}

# aggregate fields of "submerchant_bank_information"
type submerchant_bank_information_aggregate_fields {
  avg: submerchant_bank_information_avg_fields
  count(columns: [submerchant_bank_information_select_column!], distinct: Boolean): Int
  max: submerchant_bank_information_max_fields
  min: submerchant_bank_information_min_fields
  stddev: submerchant_bank_information_stddev_fields
  stddev_pop: submerchant_bank_information_stddev_pop_fields
  stddev_samp: submerchant_bank_information_stddev_samp_fields
  sum: submerchant_bank_information_sum_fields
  var_pop: submerchant_bank_information_var_pop_fields
  var_samp: submerchant_bank_information_var_samp_fields
  variance: submerchant_bank_information_variance_fields
}

# order by aggregate values of table "submerchant_bank_information"
input submerchant_bank_information_aggregate_order_by {
  avg: submerchant_bank_information_avg_order_by
  count: order_by
  max: submerchant_bank_information_max_order_by
  min: submerchant_bank_information_min_order_by
  stddev: submerchant_bank_information_stddev_order_by
  stddev_pop: submerchant_bank_information_stddev_pop_order_by
  stddev_samp: submerchant_bank_information_stddev_samp_order_by
  sum: submerchant_bank_information_sum_order_by
  var_pop: submerchant_bank_information_var_pop_order_by
  var_samp: submerchant_bank_information_var_samp_order_by
  variance: submerchant_bank_information_variance_order_by
}

# input type for inserting array relation for remote table "submerchant_bank_information"
input submerchant_bank_information_arr_rel_insert_input {
  data: [submerchant_bank_information_insert_input!]!
  on_conflict: submerchant_bank_information_on_conflict
}

# aggregate avg on columns
type submerchant_bank_information_avg_fields {
  bank_account_number: Float
  bank_routing_number: Float
  id: Float
  submerchant_id: Float
  tax_id: Float
}

# order by avg() on columns of table "submerchant_bank_information"
input submerchant_bank_information_avg_order_by {
  bank_account_number: order_by
  bank_routing_number: order_by
  id: order_by
  submerchant_id: order_by
  tax_id: order_by
}

# Boolean expression to filter rows from the table "submerchant_bank_information".
# All fields are combined with a logical 'AND'.
input submerchant_bank_information_bool_exp {
  _and: [submerchant_bank_information_bool_exp]
  _not: submerchant_bank_information_bool_exp
  _or: [submerchant_bank_information_bool_exp]
  bank_account_number: Int_comparison_exp
  bank_routing_number: Int_comparison_exp
  company_legal_name: String_comparison_exp
  created_at: timestamptz_comparison_exp
  id: Int_comparison_exp
  submerchant_id: Int_comparison_exp
  tax_id: Int_comparison_exp
  updated_at: timestamptz_comparison_exp
}

# unique or primary key constraints on table "submerchant_bank_information"
enum submerchant_bank_information_constraint {
  # unique or primary key constraint
  submerchant_bank_information_pkey
}

# input type for incrementing integer column in table "submerchant_bank_information"
input submerchant_bank_information_inc_input {
  bank_account_number: Int
  bank_routing_number: Int
  id: Int
  submerchant_id: Int
  tax_id: Int
}

# input type for inserting data into table "submerchant_bank_information"
input submerchant_bank_information_insert_input {
  bank_account_number: Int
  bank_routing_number: Int
  company_legal_name: String
  created_at: timestamptz
  id: Int
  submerchant_id: Int
  tax_id: Int
  updated_at: timestamptz
}

# aggregate max on columns
type submerchant_bank_information_max_fields {
  bank_account_number: Int
  bank_routing_number: Int
  company_legal_name: String
  created_at: timestamptz
  id: Int
  submerchant_id: Int
  tax_id: Int
  updated_at: timestamptz
}

# order by max() on columns of table "submerchant_bank_information"
input submerchant_bank_information_max_order_by {
  bank_account_number: order_by
  bank_routing_number: order_by
  company_legal_name: order_by
  created_at: order_by
  id: order_by
  submerchant_id: order_by
  tax_id: order_by
  updated_at: order_by
}

# aggregate min on columns
type submerchant_bank_information_min_fields {
  bank_account_number: Int
  bank_routing_number: Int
  company_legal_name: String
  created_at: timestamptz
  id: Int
  submerchant_id: Int
  tax_id: Int
  updated_at: timestamptz
}

# order by min() on columns of table "submerchant_bank_information"
input submerchant_bank_information_min_order_by {
  bank_account_number: order_by
  bank_routing_number: order_by
  company_legal_name: order_by
  created_at: order_by
  id: order_by
  submerchant_id: order_by
  tax_id: order_by
  updated_at: order_by
}

# response of any mutation on the table "submerchant_bank_information"
type submerchant_bank_information_mutation_response {
  # number of affected rows by the mutation
  affected_rows: Int!

  # data of the affected rows by the mutation
  returning: [submerchant_bank_information!]!
}

# input type for inserting object relation for remote table "submerchant_bank_information"
input submerchant_bank_information_obj_rel_insert_input {
  data: submerchant_bank_information_insert_input!
  on_conflict: submerchant_bank_information_on_conflict
}

# on conflict condition type for table "submerchant_bank_information"
input submerchant_bank_information_on_conflict {
  constraint: submerchant_bank_information_constraint!
  update_columns: [submerchant_bank_information_update_column!]!
  where: submerchant_bank_information_bool_exp
}

# ordering options when selecting data from "submerchant_bank_information"
input submerchant_bank_information_order_by {
  bank_account_number: order_by
  bank_routing_number: order_by
  company_legal_name: order_by
  created_at: order_by
  id: order_by
  submerchant_id: order_by
  tax_id: order_by
  updated_at: order_by
}

# primary key columns input for table: "submerchant_bank_information"
input submerchant_bank_information_pk_columns_input {
  id: Int!
}

# select columns of table "submerchant_bank_information"
enum submerchant_bank_information_select_column {
  # column name
  bank_account_number

  # column name
  bank_routing_number

  # column name
  company_legal_name

  # column name
  created_at

  # column name
  id

  # column name
  submerchant_id

  # column name
  tax_id

  # column name
  updated_at
}

# input type for updating data in table "submerchant_bank_information"
input submerchant_bank_information_set_input {
  bank_account_number: Int
  bank_routing_number: Int
  company_legal_name: String
  created_at: timestamptz
  id: Int
  submerchant_id: Int
  tax_id: Int
  updated_at: timestamptz
}

# aggregate stddev on columns
type submerchant_bank_information_stddev_fields {
  bank_account_number: Float
  bank_routing_number: Float
  id: Float
  submerchant_id: Float
  tax_id: Float
}

# order by stddev() on columns of table "submerchant_bank_information"
input submerchant_bank_information_stddev_order_by {
  bank_account_number: order_by
  bank_routing_number: order_by
  id: order_by
  submerchant_id: order_by
  tax_id: order_by
}

# aggregate stddev_pop on columns
type submerchant_bank_information_stddev_pop_fields {
  bank_account_number: Float
  bank_routing_number: Float
  id: Float
  submerchant_id: Float
  tax_id: Float
}

# order by stddev_pop() on columns of table "submerchant_bank_information"
input submerchant_bank_information_stddev_pop_order_by {
  bank_account_number: order_by
  bank_routing_number: order_by
  id: order_by
  submerchant_id: order_by
  tax_id: order_by
}

# aggregate stddev_samp on columns
type submerchant_bank_information_stddev_samp_fields {
  bank_account_number: Float
  bank_routing_number: Float
  id: Float
  submerchant_id: Float
  tax_id: Float
}

# order by stddev_samp() on columns of table "submerchant_bank_information"
input submerchant_bank_information_stddev_samp_order_by {
  bank_account_number: order_by
  bank_routing_number: order_by
  id: order_by
  submerchant_id: order_by
  tax_id: order_by
}

# aggregate sum on columns
type submerchant_bank_information_sum_fields {
  bank_account_number: Int
  bank_routing_number: Int
  id: Int
  submerchant_id: Int
  tax_id: Int
}

# order by sum() on columns of table "submerchant_bank_information"
input submerchant_bank_information_sum_order_by {
  bank_account_number: order_by
  bank_routing_number: order_by
  id: order_by
  submerchant_id: order_by
  tax_id: order_by
}

# update columns of table "submerchant_bank_information"
enum submerchant_bank_information_update_column {
  # column name
  bank_account_number

  # column name
  bank_routing_number

  # column name
  company_legal_name

  # column name
  created_at

  # column name
  id

  # column name
  submerchant_id

  # column name
  tax_id

  # column name
  updated_at
}

# aggregate var_pop on columns
type submerchant_bank_information_var_pop_fields {
  bank_account_number: Float
  bank_routing_number: Float
  id: Float
  submerchant_id: Float
  tax_id: Float
}

# order by var_pop() on columns of table "submerchant_bank_information"
input submerchant_bank_information_var_pop_order_by {
  bank_account_number: order_by
  bank_routing_number: order_by
  id: order_by
  submerchant_id: order_by
  tax_id: order_by
}

# aggregate var_samp on columns
type submerchant_bank_information_var_samp_fields {
  bank_account_number: Float
  bank_routing_number: Float
  id: Float
  submerchant_id: Float
  tax_id: Float
}

# order by var_samp() on columns of table "submerchant_bank_information"
input submerchant_bank_information_var_samp_order_by {
  bank_account_number: order_by
  bank_routing_number: order_by
  id: order_by
  submerchant_id: order_by
  tax_id: order_by
}

# aggregate variance on columns
type submerchant_bank_information_variance_fields {
  bank_account_number: Float
  bank_routing_number: Float
  id: Float
  submerchant_id: Float
  tax_id: Float
}

# order by variance() on columns of table "submerchant_bank_information"
input submerchant_bank_information_variance_order_by {
  bank_account_number: order_by
  bank_routing_number: order_by
  id: order_by
  submerchant_id: order_by
  tax_id: order_by
}

# A subarea of a region used to assign facilities and locations to a more specific area
#
#
# columns and relationships of "subregion"
#
type subregion {
  created_at: timestamptz!

  # An array relationship
  facilities(
    # distinct select on columns
    distinct_on: [facility_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_order_by!]

    # filter the rows returned
    where: facility_bool_exp
  ): [facility!]!

  # An aggregated array relationship
  facilities_aggregate(
    # distinct select on columns
    distinct_on: [facility_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_order_by!]

    # filter the rows returned
    where: facility_bool_exp
  ): facility_aggregate!
  id: Int!
  name: String!

  # An object relationship
  region: region!
  region_id: Int!
  updated_at: timestamptz!
}

# aggregated selection of "subregion"
type subregion_aggregate {
  aggregate: subregion_aggregate_fields
  nodes: [subregion!]!
}

# aggregate fields of "subregion"
type subregion_aggregate_fields {
  avg: subregion_avg_fields
  count(columns: [subregion_select_column!], distinct: Boolean): Int
  max: subregion_max_fields
  min: subregion_min_fields
  stddev: subregion_stddev_fields
  stddev_pop: subregion_stddev_pop_fields
  stddev_samp: subregion_stddev_samp_fields
  sum: subregion_sum_fields
  var_pop: subregion_var_pop_fields
  var_samp: subregion_var_samp_fields
  variance: subregion_variance_fields
}

# order by aggregate values of table "subregion"
input subregion_aggregate_order_by {
  avg: subregion_avg_order_by
  count: order_by
  max: subregion_max_order_by
  min: subregion_min_order_by
  stddev: subregion_stddev_order_by
  stddev_pop: subregion_stddev_pop_order_by
  stddev_samp: subregion_stddev_samp_order_by
  sum: subregion_sum_order_by
  var_pop: subregion_var_pop_order_by
  var_samp: subregion_var_samp_order_by
  variance: subregion_variance_order_by
}

# input type for inserting array relation for remote table "subregion"
input subregion_arr_rel_insert_input {
  data: [subregion_insert_input!]!
  on_conflict: subregion_on_conflict
}

# aggregate avg on columns
type subregion_avg_fields {
  id: Float
  region_id: Float
}

# order by avg() on columns of table "subregion"
input subregion_avg_order_by {
  id: order_by
  region_id: order_by
}

# Boolean expression to filter rows from the table "subregion". All fields are combined with a logical 'AND'.
input subregion_bool_exp {
  _and: [subregion_bool_exp]
  _not: subregion_bool_exp
  _or: [subregion_bool_exp]
  created_at: timestamptz_comparison_exp
  facilities: facility_bool_exp
  id: Int_comparison_exp
  name: String_comparison_exp
  region: region_bool_exp
  region_id: Int_comparison_exp
  updated_at: timestamptz_comparison_exp
}

# unique or primary key constraints on table "subregion"
enum subregion_constraint {
  # unique or primary key constraint
  subregion_pkey

  # unique or primary key constraint
  unique_subregion_name
}

# input type for incrementing integer column in table "subregion"
input subregion_inc_input {
  id: Int
  region_id: Int
}

# input type for inserting data into table "subregion"
input subregion_insert_input {
  created_at: timestamptz
  facilities: facility_arr_rel_insert_input
  id: Int
  name: String
  region: region_obj_rel_insert_input
  region_id: Int
  updated_at: timestamptz
}

# aggregate max on columns
type subregion_max_fields {
  created_at: timestamptz
  id: Int
  name: String
  region_id: Int
  updated_at: timestamptz
}

# order by max() on columns of table "subregion"
input subregion_max_order_by {
  created_at: order_by
  id: order_by
  name: order_by
  region_id: order_by
  updated_at: order_by
}

# aggregate min on columns
type subregion_min_fields {
  created_at: timestamptz
  id: Int
  name: String
  region_id: Int
  updated_at: timestamptz
}

# order by min() on columns of table "subregion"
input subregion_min_order_by {
  created_at: order_by
  id: order_by
  name: order_by
  region_id: order_by
  updated_at: order_by
}

# response of any mutation on the table "subregion"
type subregion_mutation_response {
  # number of affected rows by the mutation
  affected_rows: Int!

  # data of the affected rows by the mutation
  returning: [subregion!]!
}

# input type for inserting object relation for remote table "subregion"
input subregion_obj_rel_insert_input {
  data: subregion_insert_input!
  on_conflict: subregion_on_conflict
}

# on conflict condition type for table "subregion"
input subregion_on_conflict {
  constraint: subregion_constraint!
  update_columns: [subregion_update_column!]!
  where: subregion_bool_exp
}

# ordering options when selecting data from "subregion"
input subregion_order_by {
  created_at: order_by
  facilities_aggregate: facility_aggregate_order_by
  id: order_by
  name: order_by
  region: region_order_by
  region_id: order_by
  updated_at: order_by
}

# primary key columns input for table: "subregion"
input subregion_pk_columns_input {
  id: Int!
}

# select columns of table "subregion"
enum subregion_select_column {
  # column name
  created_at

  # column name
  id

  # column name
  name

  # column name
  region_id

  # column name
  updated_at
}

# input type for updating data in table "subregion"
input subregion_set_input {
  created_at: timestamptz
  id: Int
  name: String
  region_id: Int
  updated_at: timestamptz
}

# aggregate stddev on columns
type subregion_stddev_fields {
  id: Float
  region_id: Float
}

# order by stddev() on columns of table "subregion"
input subregion_stddev_order_by {
  id: order_by
  region_id: order_by
}

# aggregate stddev_pop on columns
type subregion_stddev_pop_fields {
  id: Float
  region_id: Float
}

# order by stddev_pop() on columns of table "subregion"
input subregion_stddev_pop_order_by {
  id: order_by
  region_id: order_by
}

# aggregate stddev_samp on columns
type subregion_stddev_samp_fields {
  id: Float
  region_id: Float
}

# order by stddev_samp() on columns of table "subregion"
input subregion_stddev_samp_order_by {
  id: order_by
  region_id: order_by
}

# aggregate sum on columns
type subregion_sum_fields {
  id: Int
  region_id: Int
}

# order by sum() on columns of table "subregion"
input subregion_sum_order_by {
  id: order_by
  region_id: order_by
}

# update columns of table "subregion"
enum subregion_update_column {
  # column name
  created_at

  # column name
  id

  # column name
  name

  # column name
  region_id

  # column name
  updated_at
}

# aggregate var_pop on columns
type subregion_var_pop_fields {
  id: Float
  region_id: Float
}

# order by var_pop() on columns of table "subregion"
input subregion_var_pop_order_by {
  id: order_by
  region_id: order_by
}

# aggregate var_samp on columns
type subregion_var_samp_fields {
  id: Float
  region_id: Float
}

# order by var_samp() on columns of table "subregion"
input subregion_var_samp_order_by {
  id: order_by
  region_id: order_by
}

# aggregate variance on columns
type subregion_variance_fields {
  id: Float
  region_id: Float
}

# order by variance() on columns of table "subregion"
input subregion_variance_order_by {
  id: order_by
  region_id: order_by
}

# subscription root
type subscription_root {
  # fetch data from the table: "facility"
  facility(
    # distinct select on columns
    distinct_on: [facility_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_order_by!]

    # filter the rows returned
    where: facility_bool_exp
  ): [facility!]!

  # fetch aggregated fields from the table: "facility"
  facility_aggregate(
    # distinct select on columns
    distinct_on: [facility_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_order_by!]

    # filter the rows returned
    where: facility_bool_exp
  ): facility_aggregate!

  # fetch data from the table: "facility" using primary key columns
  facility_by_pk(id: Int!): facility

  # fetch data from the table: "facility_category"
  facility_category(
    # distinct select on columns
    distinct_on: [facility_category_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_category_order_by!]

    # filter the rows returned
    where: facility_category_bool_exp
  ): [facility_category!]!

  # fetch aggregated fields from the table: "facility_category"
  facility_category_aggregate(
    # distinct select on columns
    distinct_on: [facility_category_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_category_order_by!]

    # filter the rows returned
    where: facility_category_bool_exp
  ): facility_category_aggregate!

  # fetch data from the table: "facility_category" using primary key columns
  facility_category_by_pk(id: Int!): facility_category

  # fetch data from the table: "facility_game"
  facility_game(
    # distinct select on columns
    distinct_on: [facility_game_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_game_order_by!]

    # filter the rows returned
    where: facility_game_bool_exp
  ): [facility_game!]!

  # fetch aggregated fields from the table: "facility_game"
  facility_game_aggregate(
    # distinct select on columns
    distinct_on: [facility_game_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_game_order_by!]

    # filter the rows returned
    where: facility_game_bool_exp
  ): facility_game_aggregate!

  # fetch data from the table: "facility_game" using primary key columns
  facility_game_by_pk(id: Int!): facility_game

  # fetch data from the table: "facility_game_category"
  facility_game_category(
    # distinct select on columns
    distinct_on: [facility_game_category_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_game_category_order_by!]

    # filter the rows returned
    where: facility_game_category_bool_exp
  ): [facility_game_category!]!

  # fetch aggregated fields from the table: "facility_game_category"
  facility_game_category_aggregate(
    # distinct select on columns
    distinct_on: [facility_game_category_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_game_category_order_by!]

    # filter the rows returned
    where: facility_game_category_bool_exp
  ): facility_game_category_aggregate!

  # fetch data from the table: "facility_game_category" using primary key columns
  facility_game_category_by_pk(id: Int!): facility_game_category

  # fetch data from the table: "facility_game_columns"
  facility_game_columns(
    # distinct select on columns
    distinct_on: [facility_game_columns_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_game_columns_order_by!]

    # filter the rows returned
    where: facility_game_columns_bool_exp
  ): [facility_game_columns!]!

  # fetch aggregated fields from the table: "facility_game_columns"
  facility_game_columns_aggregate(
    # distinct select on columns
    distinct_on: [facility_game_columns_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_game_columns_order_by!]

    # filter the rows returned
    where: facility_game_columns_bool_exp
  ): facility_game_columns_aggregate!

  # fetch data from the table: "facility_game_columns" using primary key columns
  facility_game_columns_by_pk(id: Int!): facility_game_columns

  # fetch data from the table: "facility_game_global_category"
  facility_game_global_category(
    # distinct select on columns
    distinct_on: [facility_game_global_category_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_game_global_category_order_by!]

    # filter the rows returned
    where: facility_game_global_category_bool_exp
  ): [facility_game_global_category!]!

  # fetch aggregated fields from the table: "facility_game_global_category"
  facility_game_global_category_aggregate(
    # distinct select on columns
    distinct_on: [facility_game_global_category_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_game_global_category_order_by!]

    # filter the rows returned
    where: facility_game_global_category_bool_exp
  ): facility_game_global_category_aggregate!

  # fetch data from the table: "facility_game_global_category" using primary key columns
  facility_game_global_category_by_pk(id: Int!): facility_game_global_category

  # fetch data from the table: "facility_game_reservation"
  facility_game_reservation(
    # distinct select on columns
    distinct_on: [facility_game_reservation_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_game_reservation_order_by!]

    # filter the rows returned
    where: facility_game_reservation_bool_exp
  ): [facility_game_reservation!]!

  # fetch aggregated fields from the table: "facility_game_reservation"
  facility_game_reservation_aggregate(
    # distinct select on columns
    distinct_on: [facility_game_reservation_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_game_reservation_order_by!]

    # filter the rows returned
    where: facility_game_reservation_bool_exp
  ): facility_game_reservation_aggregate!

  # fetch data from the table: "facility_game_reservation" using primary key columns
  facility_game_reservation_by_pk(id: Int!): facility_game_reservation

  # fetch data from the table: "facility_user"
  facility_user(
    # distinct select on columns
    distinct_on: [facility_user_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_user_order_by!]

    # filter the rows returned
    where: facility_user_bool_exp
  ): [facility_user!]!

  # fetch aggregated fields from the table: "facility_user"
  facility_user_aggregate(
    # distinct select on columns
    distinct_on: [facility_user_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_user_order_by!]

    # filter the rows returned
    where: facility_user_bool_exp
  ): facility_user_aggregate!

  # fetch data from the table: "facility_user" using primary key columns
  facility_user_by_pk(id: Int!): facility_user

  # fetch data from the table: "facility_user_role"
  facility_user_role(
    # distinct select on columns
    distinct_on: [facility_user_role_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_user_role_order_by!]

    # filter the rows returned
    where: facility_user_role_bool_exp
  ): [facility_user_role!]!

  # fetch aggregated fields from the table: "facility_user_role"
  facility_user_role_aggregate(
    # distinct select on columns
    distinct_on: [facility_user_role_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [facility_user_role_order_by!]

    # filter the rows returned
    where: facility_user_role_bool_exp
  ): facility_user_role_aggregate!

  # fetch data from the table: "facility_user_role" using primary key columns
  facility_user_role_by_pk(value: String!): facility_user_role

  # fetch data from the table: "field"
  field(
    # distinct select on columns
    distinct_on: [field_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [field_order_by!]

    # filter the rows returned
    where: field_bool_exp
  ): [field!]!

  # fetch aggregated fields from the table: "field"
  field_aggregate(
    # distinct select on columns
    distinct_on: [field_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [field_order_by!]

    # filter the rows returned
    where: field_bool_exp
  ): field_aggregate!

  # fetch data from the table: "field" using primary key columns
  field_by_pk(id: Int!): field

  # fetch data from the table: "field_type"
  field_type(
    # distinct select on columns
    distinct_on: [field_type_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [field_type_order_by!]

    # filter the rows returned
    where: field_type_bool_exp
  ): [field_type!]!

  # fetch aggregated fields from the table: "field_type"
  field_type_aggregate(
    # distinct select on columns
    distinct_on: [field_type_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [field_type_order_by!]

    # filter the rows returned
    where: field_type_bool_exp
  ): field_type_aggregate!

  # fetch data from the table: "field_type" using primary key columns
  field_type_by_pk(id: Int!): field_type

  # fetch data from the table: "global_category"
  global_category(
    # distinct select on columns
    distinct_on: [global_category_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [global_category_order_by!]

    # filter the rows returned
    where: global_category_bool_exp
  ): [global_category!]!

  # fetch aggregated fields from the table: "global_category"
  global_category_aggregate(
    # distinct select on columns
    distinct_on: [global_category_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [global_category_order_by!]

    # filter the rows returned
    where: global_category_bool_exp
  ): global_category_aggregate!

  # fetch data from the table: "global_category" using primary key columns
  global_category_by_pk(id: Int!): global_category

  # fetch data from the table: "hours_of_operation"
  hours_of_operation(
    # distinct select on columns
    distinct_on: [hours_of_operation_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [hours_of_operation_order_by!]

    # filter the rows returned
    where: hours_of_operation_bool_exp
  ): [hours_of_operation!]!

  # fetch aggregated fields from the table: "hours_of_operation"
  hours_of_operation_aggregate(
    # distinct select on columns
    distinct_on: [hours_of_operation_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [hours_of_operation_order_by!]

    # filter the rows returned
    where: hours_of_operation_bool_exp
  ): hours_of_operation_aggregate!

  # fetch data from the table: "hours_of_operation" using primary key columns
  hours_of_operation_by_pk(id: Int!): hours_of_operation

  # fetch data from the table: "location"
  location(
    # distinct select on columns
    distinct_on: [location_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [location_order_by!]

    # filter the rows returned
    where: location_bool_exp
  ): [location!]!

  # fetch aggregated fields from the table: "location"
  location_aggregate(
    # distinct select on columns
    distinct_on: [location_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [location_order_by!]

    # filter the rows returned
    where: location_bool_exp
  ): location_aggregate!

  # fetch data from the table: "location" using primary key columns
  location_by_pk(id: Int!): location

  # fetch data from the table: "open_game"
  open_game(
    # distinct select on columns
    distinct_on: [open_game_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [open_game_order_by!]

    # filter the rows returned
    where: open_game_bool_exp
  ): [open_game!]!

  # fetch aggregated fields from the table: "open_game"
  open_game_aggregate(
    # distinct select on columns
    distinct_on: [open_game_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [open_game_order_by!]

    # filter the rows returned
    where: open_game_bool_exp
  ): open_game_aggregate!

  # fetch data from the table: "open_game" using primary key columns
  open_game_by_pk(id: Int!): open_game

  # fetch data from the table: "open_game_columns"
  open_game_columns(
    # distinct select on columns
    distinct_on: [open_game_columns_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [open_game_columns_order_by!]

    # filter the rows returned
    where: open_game_columns_bool_exp
  ): [open_game_columns!]!

  # fetch aggregated fields from the table: "open_game_columns"
  open_game_columns_aggregate(
    # distinct select on columns
    distinct_on: [open_game_columns_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [open_game_columns_order_by!]

    # filter the rows returned
    where: open_game_columns_bool_exp
  ): open_game_columns_aggregate!

  # fetch data from the table: "open_game_columns" using primary key columns
  open_game_columns_by_pk(id: Int!): open_game_columns

  # fetch data from the table: "open_game_reservation"
  open_game_reservation(
    # distinct select on columns
    distinct_on: [open_game_reservation_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [open_game_reservation_order_by!]

    # filter the rows returned
    where: open_game_reservation_bool_exp
  ): [open_game_reservation!]!

  # fetch aggregated fields from the table: "open_game_reservation"
  open_game_reservation_aggregate(
    # distinct select on columns
    distinct_on: [open_game_reservation_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [open_game_reservation_order_by!]

    # filter the rows returned
    where: open_game_reservation_bool_exp
  ): open_game_reservation_aggregate!

  # fetch data from the table: "open_game_reservation" using primary key columns
  open_game_reservation_by_pk(id: Int!): open_game_reservation

  # fetch data from the table: "open_game_template"
  open_game_template(
    # distinct select on columns
    distinct_on: [open_game_template_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [open_game_template_order_by!]

    # filter the rows returned
    where: open_game_template_bool_exp
  ): [open_game_template!]!

  # fetch aggregated fields from the table: "open_game_template"
  open_game_template_aggregate(
    # distinct select on columns
    distinct_on: [open_game_template_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [open_game_template_order_by!]

    # filter the rows returned
    where: open_game_template_bool_exp
  ): open_game_template_aggregate!

  # fetch data from the table: "open_game_template" using primary key columns
  open_game_template_by_pk(id: Int!): open_game_template

  # fetch data from the table: "player"
  player(
    # distinct select on columns
    distinct_on: [player_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [player_order_by!]

    # filter the rows returned
    where: player_bool_exp
  ): [player!]!

  # fetch aggregated fields from the table: "player"
  player_aggregate(
    # distinct select on columns
    distinct_on: [player_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [player_order_by!]

    # filter the rows returned
    where: player_bool_exp
  ): player_aggregate!

  # fetch data from the table: "player" using primary key columns
  player_by_pk(id: Int!): player

  # fetch data from the table: "recurring_facility_game"
  recurring_facility_game(
    # distinct select on columns
    distinct_on: [recurring_facility_game_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [recurring_facility_game_order_by!]

    # filter the rows returned
    where: recurring_facility_game_bool_exp
  ): [recurring_facility_game!]!

  # fetch aggregated fields from the table: "recurring_facility_game"
  recurring_facility_game_aggregate(
    # distinct select on columns
    distinct_on: [recurring_facility_game_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [recurring_facility_game_order_by!]

    # filter the rows returned
    where: recurring_facility_game_bool_exp
  ): recurring_facility_game_aggregate!

  # fetch data from the table: "recurring_facility_game" using primary key columns
  recurring_facility_game_by_pk(id: Int!): recurring_facility_game

  # fetch data from the table: "recurring_facility_game_datetime"
  recurring_facility_game_datetime(
    # distinct select on columns
    distinct_on: [recurring_facility_game_datetime_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [recurring_facility_game_datetime_order_by!]

    # filter the rows returned
    where: recurring_facility_game_datetime_bool_exp
  ): [recurring_facility_game_datetime!]!

  # fetch aggregated fields from the table: "recurring_facility_game_datetime"
  recurring_facility_game_datetime_aggregate(
    # distinct select on columns
    distinct_on: [recurring_facility_game_datetime_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [recurring_facility_game_datetime_order_by!]

    # filter the rows returned
    where: recurring_facility_game_datetime_bool_exp
  ): recurring_facility_game_datetime_aggregate!

  # fetch data from the table: "recurring_facility_game_reservation"
  recurring_facility_game_reservation(
    # distinct select on columns
    distinct_on: [recurring_facility_game_reservation_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [recurring_facility_game_reservation_order_by!]

    # filter the rows returned
    where: recurring_facility_game_reservation_bool_exp
  ): [recurring_facility_game_reservation!]!

  # fetch aggregated fields from the table: "recurring_facility_game_reservation"
  recurring_facility_game_reservation_aggregate(
    # distinct select on columns
    distinct_on: [recurring_facility_game_reservation_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [recurring_facility_game_reservation_order_by!]

    # filter the rows returned
    where: recurring_facility_game_reservation_bool_exp
  ): recurring_facility_game_reservation_aggregate!

  # fetch data from the table: "recurring_facility_game_reservation" using primary key columns
  recurring_facility_game_reservation_by_pk(id: Int!): recurring_facility_game_reservation

  # fetch data from the table: "recurring_open_game"
  recurring_open_game(
    # distinct select on columns
    distinct_on: [recurring_open_game_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [recurring_open_game_order_by!]

    # filter the rows returned
    where: recurring_open_game_bool_exp
  ): [recurring_open_game!]!

  # fetch aggregated fields from the table: "recurring_open_game"
  recurring_open_game_aggregate(
    # distinct select on columns
    distinct_on: [recurring_open_game_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [recurring_open_game_order_by!]

    # filter the rows returned
    where: recurring_open_game_bool_exp
  ): recurring_open_game_aggregate!

  # fetch data from the table: "recurring_open_game" using primary key columns
  recurring_open_game_by_pk(id: Int!): recurring_open_game

  # fetch data from the table: "recurring_open_game_datetime"
  recurring_open_game_datetime(
    # distinct select on columns
    distinct_on: [recurring_open_game_datetime_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [recurring_open_game_datetime_order_by!]

    # filter the rows returned
    where: recurring_open_game_datetime_bool_exp
  ): [recurring_open_game_datetime!]!

  # fetch aggregated fields from the table: "recurring_open_game_datetime"
  recurring_open_game_datetime_aggregate(
    # distinct select on columns
    distinct_on: [recurring_open_game_datetime_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [recurring_open_game_datetime_order_by!]

    # filter the rows returned
    where: recurring_open_game_datetime_bool_exp
  ): recurring_open_game_datetime_aggregate!

  # fetch data from the table: "recurring_open_game_reservation"
  recurring_open_game_reservation(
    # distinct select on columns
    distinct_on: [recurring_open_game_reservation_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [recurring_open_game_reservation_order_by!]

    # filter the rows returned
    where: recurring_open_game_reservation_bool_exp
  ): [recurring_open_game_reservation!]!

  # fetch aggregated fields from the table: "recurring_open_game_reservation"
  recurring_open_game_reservation_aggregate(
    # distinct select on columns
    distinct_on: [recurring_open_game_reservation_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [recurring_open_game_reservation_order_by!]

    # filter the rows returned
    where: recurring_open_game_reservation_bool_exp
  ): recurring_open_game_reservation_aggregate!

  # fetch data from the table: "recurring_open_game_reservation" using primary key columns
  recurring_open_game_reservation_by_pk(id: Int!): recurring_open_game_reservation

  # fetch data from the table: "region"
  region(
    # distinct select on columns
    distinct_on: [region_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [region_order_by!]

    # filter the rows returned
    where: region_bool_exp
  ): [region!]!

  # fetch aggregated fields from the table: "region"
  region_aggregate(
    # distinct select on columns
    distinct_on: [region_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [region_order_by!]

    # filter the rows returned
    where: region_bool_exp
  ): region_aggregate!

  # fetch data from the table: "region" using primary key columns
  region_by_pk(id: Int!): region

  # fetch data from the table: "submerchant_bank_information"
  submerchant_bank_information(
    # distinct select on columns
    distinct_on: [submerchant_bank_information_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [submerchant_bank_information_order_by!]

    # filter the rows returned
    where: submerchant_bank_information_bool_exp
  ): [submerchant_bank_information!]!

  # fetch aggregated fields from the table: "submerchant_bank_information"
  submerchant_bank_information_aggregate(
    # distinct select on columns
    distinct_on: [submerchant_bank_information_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [submerchant_bank_information_order_by!]

    # filter the rows returned
    where: submerchant_bank_information_bool_exp
  ): submerchant_bank_information_aggregate!

  # fetch data from the table: "submerchant_bank_information" using primary key columns
  submerchant_bank_information_by_pk(id: Int!): submerchant_bank_information

  # fetch data from the table: "subregion"
  subregion(
    # distinct select on columns
    distinct_on: [subregion_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [subregion_order_by!]

    # filter the rows returned
    where: subregion_bool_exp
  ): [subregion!]!

  # fetch aggregated fields from the table: "subregion"
  subregion_aggregate(
    # distinct select on columns
    distinct_on: [subregion_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [subregion_order_by!]

    # filter the rows returned
    where: subregion_bool_exp
  ): subregion_aggregate!

  # fetch data from the table: "subregion" using primary key columns
  subregion_by_pk(id: Int!): subregion

  # fetch data from the table: "weekday"
  weekday(
    # distinct select on columns
    distinct_on: [weekday_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [weekday_order_by!]

    # filter the rows returned
    where: weekday_bool_exp
  ): [weekday!]!

  # fetch aggregated fields from the table: "weekday"
  weekday_aggregate(
    # distinct select on columns
    distinct_on: [weekday_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [weekday_order_by!]

    # filter the rows returned
    where: weekday_bool_exp
  ): weekday_aggregate!

  # fetch data from the table: "weekday" using primary key columns
  weekday_by_pk(value: String!): weekday
}

scalar time

# expression to compare columns of type time. All fields are combined with logical 'AND'.
input time_comparison_exp {
  _eq: time
  _gt: time
  _gte: time
  _in: [time!]
  _is_null: Boolean
  _lt: time
  _lte: time
  _neq: time
  _nin: [time!]
}

scalar timestamptz

# expression to compare columns of type timestamptz. All fields are combined with logical 'AND'.
input timestamptz_comparison_exp {
  _eq: timestamptz
  _gt: timestamptz
  _gte: timestamptz
  _in: [timestamptz!]
  _is_null: Boolean
  _lt: timestamptz
  _lte: timestamptz
  _neq: timestamptz
  _nin: [timestamptz!]
}

# columns and relationships of "weekday"
type weekday {
  # An array relationship
  hours_of_operations(
    # distinct select on columns
    distinct_on: [hours_of_operation_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [hours_of_operation_order_by!]

    # filter the rows returned
    where: hours_of_operation_bool_exp
  ): [hours_of_operation!]!

  # An aggregated array relationship
  hours_of_operations_aggregate(
    # distinct select on columns
    distinct_on: [hours_of_operation_select_column!]

    # limit the number of rows returned
    limit: Int

    # skip the first n rows. Use only with order_by
    offset: Int

    # sort the rows by one or more columns
    order_by: [hours_of_operation_order_by!]

    # filter the rows returned
    where: hours_of_operation_bool_exp
  ): hours_of_operation_aggregate!
  value: String!
}

# aggregated selection of "weekday"
type weekday_aggregate {
  aggregate: weekday_aggregate_fields
  nodes: [weekday!]!
}

# aggregate fields of "weekday"
type weekday_aggregate_fields {
  count(columns: [weekday_select_column!], distinct: Boolean): Int
  max: weekday_max_fields
  min: weekday_min_fields
}

# order by aggregate values of table "weekday"
input weekday_aggregate_order_by {
  count: order_by
  max: weekday_max_order_by
  min: weekday_min_order_by
}

# input type for inserting array relation for remote table "weekday"
input weekday_arr_rel_insert_input {
  data: [weekday_insert_input!]!
  on_conflict: weekday_on_conflict
}

# Boolean expression to filter rows from the table "weekday". All fields are combined with a logical 'AND'.
input weekday_bool_exp {
  _and: [weekday_bool_exp]
  _not: weekday_bool_exp
  _or: [weekday_bool_exp]
  hours_of_operations: hours_of_operation_bool_exp
  value: String_comparison_exp
}

# unique or primary key constraints on table "weekday"
enum weekday_constraint {
  # unique or primary key constraint
  weekday_pkey
}

enum weekday_enum {
  FRIDAY
  MONDAY
  SATURDAY
  SUNDAY
  THURSDAY
  TUESDAY
  WEDNESDAY
}

# expression to compare columns of type weekday_enum. All fields are combined with logical 'AND'.
input weekday_enum_comparison_exp {
  _eq: weekday_enum
  _in: [weekday_enum!]
  _is_null: Boolean
  _neq: weekday_enum
  _nin: [weekday_enum!]
}

# input type for inserting data into table "weekday"
input weekday_insert_input {
  hours_of_operations: hours_of_operation_arr_rel_insert_input
  value: String
}

# aggregate max on columns
type weekday_max_fields {
  value: String
}

# order by max() on columns of table "weekday"
input weekday_max_order_by {
  value: order_by
}

# aggregate min on columns
type weekday_min_fields {
  value: String
}

# order by min() on columns of table "weekday"
input weekday_min_order_by {
  value: order_by
}

# response of any mutation on the table "weekday"
type weekday_mutation_response {
  # number of affected rows by the mutation
  affected_rows: Int!

  # data of the affected rows by the mutation
  returning: [weekday!]!
}

# input type for inserting object relation for remote table "weekday"
input weekday_obj_rel_insert_input {
  data: weekday_insert_input!
  on_conflict: weekday_on_conflict
}

# on conflict condition type for table "weekday"
input weekday_on_conflict {
  constraint: weekday_constraint!
  update_columns: [weekday_update_column!]!
  where: weekday_bool_exp
}

# ordering options when selecting data from "weekday"
input weekday_order_by {
  hours_of_operations_aggregate: hours_of_operation_aggregate_order_by
  value: order_by
}

# primary key columns input for table: "weekday"
input weekday_pk_columns_input {
  value: String!
}

# select columns of table "weekday"
enum weekday_select_column {
  # column name
  value
}

# input type for updating data in table "weekday"
input weekday_set_input {
  value: String
}

# update columns of table "weekday"
enum weekday_update_column {
  # column name
  value
}

`
