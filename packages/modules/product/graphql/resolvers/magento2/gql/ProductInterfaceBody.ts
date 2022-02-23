const ProductInterfaceBody = `
    id
    name

    media_gallery {
        url
        label
    }

    manufacturer_name
    
    stock_status

    image {
        url
        label
    }

    categories {
        id
        name
        level
        category_widget_svg_icon
    }

    price_range {
        maximum_price {
            discount {
                percent_off
            }
            final_price {
                currency
                value
            }
            regular_price {
                currency
                value
            }
        }

        minimum_price {
            discount {
                percent_off
            }
            final_price {
                currency
                value
            }
            regular_price {
                currency
                value
            }
        }
    }
`

export default ProductInterfaceBody
