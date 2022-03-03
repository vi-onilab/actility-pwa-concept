import { gql } from 'graphql-tag'

const customerOrdersQuery = gql`
    query Customer ($pageSize: Int, $currentPage: Int, $id: String) {
        customer {
            orders(pageSize: $pageSize, currentPage: $currentPage, filter: { number: { eq: $id } } ) {
                items {
#                    id
                    order_number
                    status
                    order_date
                    shipping_address {
                        firstname
                        lastname
                        telephone
                        city
                        company
                        street
                        country_code
                        postcode
                    }
                    billing_address {
                        firstname
                        lastname
                        telephone
                        city
                        company
                        street
                        country_code
                        postcode
                    }
                    shipping_method
                    payment_methods {
                        name
                        type
                    }
                    total {
                        subtotal {
                            value
                        }
                        total_shipping {
                            value
                        }
                        grand_total {
                            value
                        }
                        taxes {
                            rate
                            title
                            amount {
                                value
                            }
                        }
                        discounts {
                            label
                            amount {
                                value
                            }
                        }
                    }
                    items {
                        id
                        product_url_key
                        product_name
                        discounts {
                            amount {
                                value
                            }
                        }
                        status
                        selected_options {
                            value
                            label
                        }
                    }
                }
                page_info {
                    current_page
                    page_size
                    total_pages
                }
                total_count
            }
        }
    }
`

export default customerOrdersQuery
