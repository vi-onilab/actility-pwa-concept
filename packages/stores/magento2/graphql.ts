/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 * USE `yarn build:schema-types` or `yarn build`.
 */

/* eslint-disable */
/* tslint:disable */
/* @ts-nocheck */

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddBundleProductsToCartInput = {
  cart_id: Scalars['String'];
  cart_items: Array<InputMaybe<BundleProductCartItemInput>>;
};

export type AddBundleProductsToCartOutput = {
  __typename?: 'AddBundleProductsToCartOutput';
  cart: Cart;
};

export type AddConfigurableProductsToCartInput = {
  cart_id: Scalars['String'];
  cart_items: Array<InputMaybe<ConfigurableProductCartItemInput>>;
};

export type AddConfigurableProductsToCartOutput = {
  __typename?: 'AddConfigurableProductsToCartOutput';
  cart: Cart;
};

export type AddDownloadableProductsToCartInput = {
  cart_id: Scalars['String'];
  cart_items: Array<InputMaybe<DownloadableProductCartItemInput>>;
};

export type AddDownloadableProductsToCartOutput = {
  __typename?: 'AddDownloadableProductsToCartOutput';
  cart: Cart;
};

export type AddGiftRegistryItemInput = {
  /** An array of options the customer has entered */
  entered_options?: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>;
  /** A brief note about the item */
  note?: InputMaybe<Scalars['String']>;
  /** For complex product types, the SKU of the parent product */
  parent_sku?: InputMaybe<Scalars['String']>;
  /** The quantity of the product to add */
  quantity: Scalars['Float'];
  /** An array of strings corresponding to options the customer has selected */
  selected_options?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** The SKU of the product to add to the gift registry */
  sku: Scalars['String'];
};

export type AddGiftRegistryRegistrantInput = {
  /** Additional attributes specified as a code-value pair. */
  dynamic_attributes?: InputMaybe<Array<InputMaybe<GiftRegistryDynamicAttributeInput>>>;
  /** The email address of the registrant */
  email: Scalars['String'];
  /** The first name of the registrant */
  firstname: Scalars['String'];
  /** The last name of the registrant */
  lastname: Scalars['String'];
};

export type AddGiftRegistryRegistrantsOutput = {
  __typename?: 'AddGiftRegistryRegistrantsOutput';
  /** The gift registry after adding registrants */
  gift_registry?: Maybe<GiftRegistry>;
};

export type AddProductsToCartOutput = {
  __typename?: 'AddProductsToCartOutput';
  /** The cart after products have been added */
  cart: Cart;
  /** An error encountered while adding an item to the cart. */
  user_errors: Array<Maybe<CartUserInputError>>;
};

export type AddProductsToCompareListInput = {
  /** An array of product IDs to add to the compare list */
  products: Array<InputMaybe<Scalars['ID']>>;
  /** The unique identifier of the compare list to modify */
  uid: Scalars['ID'];
};

/** Contains the customer's wish list and any errors encountered */
export type AddProductsToWishlistOutput = {
  __typename?: 'AddProductsToWishlistOutput';
  /** An array of errors encountered while adding products to a wish list */
  user_errors: Array<Maybe<WishListUserInputError>>;
  /** Contains the wish list with all items that were successfully added */
  wishlist: Wishlist;
};

export type AddReturnCommentInput = {
  /** The text added to the return request */
  comment_text: Scalars['String'];
  /** The unique ID for a `Return` object */
  return_uid: Scalars['ID'];
};

export type AddReturnCommentOutput = {
  __typename?: 'AddReturnCommentOutput';
  /** Contains details about the modified return */
  return?: Maybe<Return>;
};

export type AddReturnTrackingInput = {
  /** The unique ID for a `ReturnShippingCarrier` object */
  carrier_uid: Scalars['ID'];
  /** The unique ID for a `Returns` object */
  return_uid: Scalars['ID'];
  /** The shipping tracking number for this return request */
  tracking_number: Scalars['String'];
};

export type AddReturnTrackingOutput = {
  __typename?: 'AddReturnTrackingOutput';
  /** Contains details about the modified return */
  return?: Maybe<Return>;
  /** Contains details about shipping for a return */
  return_shipping_tracking?: Maybe<ReturnShippingTracking>;
};

export type AddSimpleProductsToCartInput = {
  cart_id: Scalars['String'];
  cart_items: Array<InputMaybe<SimpleProductCartItemInput>>;
};

export type AddSimpleProductsToCartOutput = {
  __typename?: 'AddSimpleProductsToCartOutput';
  cart: Cart;
};

export type AddVirtualProductsToCartInput = {
  cart_id: Scalars['String'];
  cart_items: Array<InputMaybe<VirtualProductCartItemInput>>;
};

export type AddVirtualProductsToCartOutput = {
  __typename?: 'AddVirtualProductsToCartOutput';
  cart: Cart;
};

export type AddWishlistItemsToCartOutput = {
  __typename?: 'AddWishlistItemsToCartOutput';
  /** An array of errors encountered while adding products to the customer's cart */
  add_wishlist_items_to_cart_user_errors: Array<Maybe<WishlistCartUserInputError>>;
  /** Indicates whether the attempt to add items to the customer's cart was successful */
  status: Scalars['Boolean'];
  /** Contains the wish list with all items that were successfully added */
  wishlist: Wishlist;
};

/** A bucket that contains information for each filterable option (such as price, category `UID`, and custom attributes). */
export type Aggregation = {
  __typename?: 'Aggregation';
  /** Attribute code of the aggregation group. */
  attribute_code: Scalars['String'];
  /** The number of options in the aggregation group. */
  count?: Maybe<Scalars['Int']>;
  /** The aggregation display name. */
  label?: Maybe<Scalars['String']>;
  /** Array of options for the aggregation. */
  options?: Maybe<Array<Maybe<AggregationOption>>>;
  /** The relative position of the attribute in a layered navigation block */
  position?: Maybe<Scalars['Int']>;
};

export type AggregationOption = AggregationOptionInterface & {
  __typename?: 'AggregationOption';
  /** The number of items that match the aggregation option. */
  count?: Maybe<Scalars['Int']>;
  /** Aggregation option display label. */
  label?: Maybe<Scalars['String']>;
  /** The internal ID that represents the value of the option. */
  value: Scalars['String'];
};

export type AggregationOptionInterface = {
  /** The number of items that match the aggregation option. */
  count?: Maybe<Scalars['Int']>;
  /** Aggregation option display label. */
  label?: Maybe<Scalars['String']>;
  /** The internal ID that represents the value of the option. */
  value: Scalars['String'];
};

export type AppliedCoupon = {
  __typename?: 'AppliedCoupon';
  code: Scalars['String'];
};

/** Contains the applied gift card with applied and remaining balance */
export type AppliedGiftCard = {
  __typename?: 'AppliedGiftCard';
  /** Applied balance to the current cart */
  applied_balance?: Maybe<Money>;
  /** Gift card account code */
  code?: Maybe<Scalars['String']>;
  /** Current balance remaining on gift card */
  current_balance?: Maybe<Money>;
  /** Gift card expiration date */
  expiration_date?: Maybe<Scalars['String']>;
};

/** Applied and current balance */
export type AppliedStoreCredit = {
  __typename?: 'AppliedStoreCredit';
  /** Applied store credit balance to the current cart */
  applied_balance?: Maybe<Money>;
  /** Current balance remaining on store credit */
  current_balance?: Maybe<Money>;
  /** Indicates whether store credits are enabled. If the feature is disabled, then the current balance will not be returned */
  enabled?: Maybe<Scalars['Boolean']>;
};

export type ApplyCouponToCartInput = {
  cart_id: Scalars['String'];
  coupon_code: Scalars['String'];
};

export type ApplyCouponToCartOutput = {
  __typename?: 'ApplyCouponToCartOutput';
  cart: Cart;
};

/** Defines the input required to run the applyGiftCardToCart mutation */
export type ApplyGiftCardToCartInput = {
  /** The unique ID that identifies the customer's cart */
  cart_id: Scalars['String'];
  /** The gift card code to be applied to the cart */
  gift_card_code: Scalars['String'];
};

/** Defines the possible output for the applyGiftCardToCart mutation */
export type ApplyGiftCardToCartOutput = {
  __typename?: 'ApplyGiftCardToCartOutput';
  /** Describes the contents of the specified shopping cart */
  cart: Cart;
};

export type ApplyRewardPointsToCartOutput = {
  __typename?: 'ApplyRewardPointsToCartOutput';
  /** The customer cart after reward points are applied */
  cart: Cart;
};

/** Defines the input required to run the applyStoreCreditToCart mutation */
export type ApplyStoreCreditToCartInput = {
  /** The unique ID that identifies the customer's cart */
  cart_id: Scalars['String'];
};

/** Defines the possible output for the applyStoreCreditToCart mutation */
export type ApplyStoreCreditToCartOutput = {
  __typename?: 'ApplyStoreCreditToCartOutput';
  /** Describes the contents of the specified shopping cart */
  cart: Cart;
};

/** AreaInput defines the parameters which will be used for filter by specified location. */
export type AreaInput = {
  /** The radius for the search in KM. */
  radius: Scalars['Int'];
  /** The country code where search must be performed. Required parameter together with region, city or postcode. */
  search_term: Scalars['String'];
};

export type Assets = {
  __typename?: 'Assets';
  /** The payment method logo url (descriptive) */
  descriptive?: Maybe<Scalars['String']>;
  /** The payment method logo url (standard) */
  standard?: Maybe<Scalars['String']>;
};

export type AssignCompareListToCustomerOutput = {
  __typename?: 'AssignCompareListToCustomerOutput';
  /** The contents of the customer's compare list */
  compare_list?: Maybe<CompareList>;
  result: Scalars['Boolean'];
};

/** Attribute contains the attribute_type of the specified attribute_code and entity_type */
export type Attribute = {
  __typename?: 'Attribute';
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  attribute_code?: Maybe<Scalars['String']>;
  /** Attribute options list. */
  attribute_options?: Maybe<Array<Maybe<AttributeOption>>>;
  /** The data type of the attribute */
  attribute_type?: Maybe<Scalars['String']>;
  /** The type of entity that defines the attribute */
  entity_type?: Maybe<Scalars['String']>;
  /** The frontend input type of the attribute */
  input_type?: Maybe<Scalars['String']>;
  /** Contains details about the storefront properties configured for the attribute */
  storefront_properties?: Maybe<StorefrontProperties>;
};

export enum AttributeEntityTypeEnum {
  Product = 'PRODUCT'
}

/** AttributeInput specifies the attribute_code and entity_type to search */
export type AttributeInput = {
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  attribute_code?: InputMaybe<Scalars['String']>;
  /** The type of entity that defines the attribute */
  entity_type?: InputMaybe<Scalars['String']>;
};

/** An interface containing fields that define attributes. */
export type AttributeMetadataInterface = {
  /** An array of attribute labels defined for the current store. */
  attribute_labels?: Maybe<Array<Maybe<StoreLabels>>>;
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  code?: Maybe<Scalars['String']>;
  /** The data type of the attribute. */
  data_type?: Maybe<ObjectDataTypeEnum>;
  /** The type of entity that defines the attribute. */
  entity_type?: Maybe<AttributeEntityTypeEnum>;
  /** Indicates whether the attribute is a system attribute. */
  is_system?: Maybe<Scalars['Boolean']>;
  /** The label assigned to the attribute. */
  label?: Maybe<Scalars['String']>;
  /** The relative position of the attribute. */
  sort_order?: Maybe<Scalars['Int']>;
  /** Frontend UI properties of the attribute. */
  ui_input?: Maybe<UiInputTypeInterface>;
  /** The unique ID of an attribute. */
  uid?: Maybe<Scalars['ID']>;
};

/** Attribute option. */
export type AttributeOption = AttributeOptionInterface & {
  __typename?: 'AttributeOption';
  /** Indicates if option is set to be used as default value. */
  is_default?: Maybe<Scalars['Boolean']>;
  /** Attribute option label. */
  label?: Maybe<Scalars['String']>;
  /** The unique ID of an attribute option. */
  uid: Scalars['ID'];
  /** Attribute option value. */
  value?: Maybe<Scalars['String']>;
};

/** Defines attribute options. */
export type AttributeOptionInterface = {
  /** Indicates if option is set to be used as default value. */
  is_default?: Maybe<Scalars['Boolean']>;
  /** The label assigned to the attribute option. */
  label?: Maybe<Scalars['String']>;
  /** The unique ID of an attribute option. */
  uid: Scalars['ID'];
};

export type AttributeOptions = AttributeOptionsInterface & {
  __typename?: 'AttributeOptions';
  /** An array of attribute options. */
  attribute_options?: Maybe<Array<Maybe<AttributeOptionInterface>>>;
};

/** Defines attribute options. */
export type AttributeOptionsInterface = {
  /** An array of attribute options. */
  attribute_options?: Maybe<Array<Maybe<AttributeOptionInterface>>>;
};

/** Contains an array of custom and system attributes. */
export type AttributesMetadata = {
  __typename?: 'AttributesMetadata';
  /** An array of attributes. */
  items?: Maybe<Array<Maybe<AttributeMetadataInterface>>>;
};

export type AvailablePaymentMethod = {
  __typename?: 'AvailablePaymentMethod';
  /** The payment method code */
  code: Scalars['String'];
  /** The payment method title. */
  title: Scalars['String'];
};

export type AvailableShippingMethod = {
  __typename?: 'AvailableShippingMethod';
  amount: Money;
  available: Scalars['Boolean'];
  /** @deprecated The field should not be used on the storefront */
  base_amount?: Maybe<Money>;
  carrier_code: Scalars['String'];
  carrier_title: Scalars['String'];
  error_message?: Maybe<Scalars['String']>;
  /** Could be null if method is not available */
  method_code?: Maybe<Scalars['String']>;
  /** Could be null if method is not available */
  method_title?: Maybe<Scalars['String']>;
  price_excl_tax: Money;
  price_incl_tax: Money;
};

export type BillingAddressInput = {
  address?: InputMaybe<CartAddressInput>;
  customer_address_id?: InputMaybe<Scalars['Int']>;
  /** Set billing address same as shipping */
  same_as_shipping?: InputMaybe<Scalars['Boolean']>;
  /** Deprecated: use `same_as_shipping` field instead */
  use_for_shipping?: InputMaybe<Scalars['Boolean']>;
};

export type BillingCartAddress = CartAddressInterface & {
  __typename?: 'BillingCartAddress';
  city: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  country: CartAddressCountry;
  /** @deprecated The field is used only in shipping address */
  customer_notes?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  postcode?: Maybe<Scalars['String']>;
  region?: Maybe<CartAddressRegion>;
  street: Array<Maybe<Scalars['String']>>;
  telephone: Scalars['String'];
};

export type BraintreeCcVaultInput = {
  device_data?: InputMaybe<Scalars['String']>;
  public_hash: Scalars['String'];
};

export type BraintreeInput = {
  /**
   * Contains a fingerprint provided by Braintree JS SDK and should be sent with
   * sale transaction details to the Braintree payment gateway. Should be specified
   * only in a case if Kount (advanced fraud protection) is enabled for Braintree
   * payment integration.
   */
  device_data?: InputMaybe<Scalars['String']>;
  /**
   * States whether an entered by a customer credit/debit card should be tokenized
   * for later usage. Required only if Vault is enabled for Braintree payment integration.
   */
  is_active_payment_token_enabler: Scalars['Boolean'];
  /**
   * The one-time payment token generated by Braintree payment gateway based on
   * card details. Required field to make sale transaction.
   */
  payment_method_nonce: Scalars['String'];
};

/** Breadcrumb item. */
export type Breadcrumb = {
  __typename?: 'Breadcrumb';
  /**
   * Category ID.
   * @deprecated Use the `category_uid` argument instead.
   */
  category_id?: Maybe<Scalars['Int']>;
  /** Category level. */
  category_level?: Maybe<Scalars['Int']>;
  /** Category name. */
  category_name?: Maybe<Scalars['String']>;
  /** The unique ID for a `Breadcrumb` object. */
  category_uid: Scalars['ID'];
  /** Category URL key. */
  category_url_key?: Maybe<Scalars['String']>;
  /** Category URL path. */
  category_url_path?: Maybe<Scalars['String']>;
};

export type BundleCartItem = CartItemInterface & {
  __typename?: 'BundleCartItem';
  /** The list of available gift wrapping options for the cart item */
  available_gift_wrapping: Array<Maybe<GiftWrapping>>;
  bundle_options: Array<Maybe<SelectedBundleOption>>;
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<CartItemError>>>;
  /** The entered gift message for the cart item */
  gift_message?: Maybe<GiftMessage>;
  /** The selected gift wrapping for the cart item */
  gift_wrapping?: Maybe<GiftWrapping>;
  /** @deprecated Use `uid` instead */
  id: Scalars['String'];
  prices?: Maybe<CartItemPrices>;
  product: ProductInterface;
  quantity: Scalars['Float'];
  /** The unique ID for a `CartItemInterface` object */
  uid: Scalars['ID'];
};

export type BundleCreditMemoItem = CreditMemoItemInterface & {
  __typename?: 'BundleCreditMemoItem';
  /** A list of bundle options that are assigned to the bundle product */
  bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for a `CreditMemoItemInterface` object */
  id: Scalars['ID'];
  /** The order item the credit memo is applied to */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product, including selected options */
  product_sale_price: Money;
  /** SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of refunded items */
  quantity_refunded?: Maybe<Scalars['Float']>;
};

export type BundleInvoiceItem = InvoiceItemInterface & {
  __typename?: 'BundleInvoiceItem';
  /** A list of bundle options that are assigned to the bundle product */
  bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for a `InvoiceItemInterface` object */
  id: Scalars['ID'];
  /** Contains details about an individual order item */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product including selected options */
  product_sale_price: Money;
  /** The SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of invoiced items */
  quantity_invoiced?: Maybe<Scalars['Float']>;
};

/** BundleItem defines an individual item in a bundle product. */
export type BundleItem = {
  __typename?: 'BundleItem';
  /**
   * An ID assigned to each type of item in a bundle product.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>;
  /** An array of additional options for this bundle item. */
  options?: Maybe<Array<Maybe<BundleItemOption>>>;
  /** he relative position of this item compared to the other bundle items. */
  position?: Maybe<Scalars['Int']>;
  /** Indicates whether the item must be included in the bundle. */
  required?: Maybe<Scalars['Boolean']>;
  /** The SKU of the bundle product. */
  sku?: Maybe<Scalars['String']>;
  /** The display name of the item. */
  title?: Maybe<Scalars['String']>;
  /** The input type that the customer uses to select the item. Examples include radio button and checkbox. */
  type?: Maybe<Scalars['String']>;
  /** The unique ID for a `BundleItem` object. */
  uid?: Maybe<Scalars['ID']>;
};

/** BundleItemOption defines characteristics and options for a specific bundle item. */
export type BundleItemOption = {
  __typename?: 'BundleItemOption';
  /** Indicates whether the customer can change the number of items for this option. */
  can_change_quantity?: Maybe<Scalars['Boolean']>;
  /**
   * The ID assigned to the bundled item option.
   * @deprecated Use `uid` instead
   */
  id?: Maybe<Scalars['Int']>;
  /** Indicates whether this option is the default option. */
  is_default?: Maybe<Scalars['Boolean']>;
  /** The text that identifies the bundled item option. */
  label?: Maybe<Scalars['String']>;
  /** When a bundle item contains multiple options, the relative position of this option compared to the other options. */
  position?: Maybe<Scalars['Int']>;
  /** The price of the selected option. */
  price?: Maybe<Scalars['Float']>;
  /** One of FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** Contains details about this product option. */
  product?: Maybe<ProductInterface>;
  /**
   * Indicates the quantity of this specific bundle item.
   * @deprecated The `qty` is deprecated. Use `quantity` instead.
   */
  qty?: Maybe<Scalars['Float']>;
  /** Indicates the quantity of this specific bundle item. */
  quantity?: Maybe<Scalars['Float']>;
  /** The unique ID for a `BundleItemOption` object. */
  uid: Scalars['ID'];
};

export type BundleOptionInput = {
  id: Scalars['Int'];
  quantity: Scalars['Float'];
  value: Array<InputMaybe<Scalars['String']>>;
};

export type BundleOrderItem = OrderItemInterface & {
  __typename?: 'BundleOrderItem';
  /** A list of bundle options that are assigned to the bundle product */
  bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
  /** The final discount information for the product */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** Indicates whether the order item is eligible is eligible to be in a return request */
  eligible_for_return?: Maybe<Scalars['Boolean']>;
  /** The entered option for the base product, such as a logo or image */
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The selected gift wrapping for the order item */
  gift_wrapping?: Maybe<GiftWrapping>;
  /** The unique ID for a `OrderItemInterface` object */
  id: Scalars['ID'];
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price of the base product, including selected options */
  product_sale_price: Money;
  /** The SKU of the base product */
  product_sku: Scalars['String'];
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']>;
  /** URL key of the base product */
  product_url_key?: Maybe<Scalars['String']>;
  /** The number of canceled items */
  quantity_canceled?: Maybe<Scalars['Float']>;
  /** The number of invoiced items */
  quantity_invoiced?: Maybe<Scalars['Float']>;
  /** The number of units ordered for this item */
  quantity_ordered?: Maybe<Scalars['Float']>;
  /** The number of refunded items */
  quantity_refunded?: Maybe<Scalars['Float']>;
  /** The number of returned items */
  quantity_returned?: Maybe<Scalars['Float']>;
  /** The number of shipped items */
  quantity_shipped?: Maybe<Scalars['Float']>;
  /** The selected options for the base product, such as color or size */
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item */
  status?: Maybe<Scalars['String']>;
};

/** Defines basic features of a bundle product and contains multiple BundleItems */
export type BundleProduct = CustomizableProductInterface & PhysicalProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'BundleProduct';
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']>;
  /**
   * Relative canonical URL. This value is returned only if the system setting 'Use
   * Canonical Link Meta Tag For Products' is enabled
   */
  canonical_url?: Maybe<Scalars['String']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  color?: Maybe<Scalars['Int']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** List of product custom attributes details. */
  custom_attributes: Array<Maybe<CustomAttribute>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** Indicates whether the bundle product has a dynamic price. */
  dynamic_price?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the bundle product has a dynamic SK. */
  dynamic_sku?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the bundle product has a dynamically calculated weight. */
  dynamic_weight?: Maybe<Scalars['Boolean']>;
  fashion_color?: Maybe<Scalars['Int']>;
  fashion_material?: Maybe<Scalars['String']>;
  fashion_size?: Maybe<Scalars['Int']>;
  fashion_style?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['Int']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']>;
  has_video?: Maybe<Scalars['Int']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** Indicates whether the product can be returned */
  is_returnable?: Maybe<Scalars['String']>;
  /** An array containing information about individual bundle items. */
  items?: Maybe<Array<Maybe<BundleItem>>>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']>;
  /** An array of Media Gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use product's `media_gallery` instead
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']>;
  /**
   * The beginning date for new product listings, and determines if the product is featured as a new product.
   * @deprecated The field should not be used on the storefront.
   */
  new_from_date?: Maybe<Scalars['String']>;
  /**
   * The end date for new product listings.
   * @deprecated The field should not be used on the storefront.
   */
  new_to_date?: Maybe<Scalars['String']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  /**
   * A ProductPrices object, indicating the price of an item.
   * @deprecated Use price_range for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** A PriceRange object, indicating the range of prices for the product */
  price_range: PriceRange;
  /** An array of TierPrice objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** One of PRICE_RANGE or AS_LOW_AS. */
  price_view?: Maybe<PriceViewEnum>;
  /** An array of ProductLinks objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /**
   * Contains 0 when there is no redirect error. A value of 301 indicates the URL
   * of the requested resource has been changed permanently, while a value of 302
   * indicates a temporary redirect
   */
  redirect_code: Scalars['Int'];
  /** Related Products */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original */
  relative_url?: Maybe<Scalars['String']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** Indicates whether to ship bundle items together or individually. */
  ship_bundle_items?: Maybe<ShipBundleItemsEnum>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']>;
  /** The end date that a product has a special price. */
  special_to_date?: Maybe<Scalars['String']>;
  staged: Scalars['Boolean'];
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** The file name of a swatch image */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use __typename instead.
   */
  type_id?: Maybe<Scalars['String']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  video_file?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']>;
};


/** Defines basic features of a bundle product and contains multiple BundleItems */
export type BundleProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type BundleProductCartItemInput = {
  bundle_options: Array<InputMaybe<BundleOptionInput>>;
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  data: CartItemInput;
};

export type BundleShipmentItem = ShipmentItemInterface & {
  __typename?: 'BundleShipmentItem';
  /** A list of bundle options that are assigned to the bundle product */
  bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
  /** The unique ID for a `ShipmentItemInterface` object */
  id: Scalars['ID'];
  /** Associated order item */
  order_item?: Maybe<OrderItemInterface>;
  /** Name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** Sale price for the base product */
  product_sale_price: Money;
  /** SKU of the base product */
  product_sku: Scalars['String'];
  /** Number of shipped items */
  quantity_shipped: Scalars['Float'];
};

export type BundleWishlistItem = WishlistItemInterface & {
  __typename?: 'BundleWishlistItem';
  /** The date and time the item was added to the wish list */
  added_at: Scalars['String'];
  /** An array containing information about the selected bundle items */
  bundle_options?: Maybe<Array<Maybe<SelectedBundleOption>>>;
  /** Custom options selected for the wish list item */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item */
  description?: Maybe<Scalars['String']>;
  /** The unique ID for a `WishlistItemInterface` object */
  id: Scalars['ID'];
  /** Product details of the wish list item */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item */
  quantity: Scalars['Float'];
};

export type Cart = {
  __typename?: 'Cart';
  /**
   * An array of coupons that have been applied to the cart
   * @deprecated Use applied_coupons instead
   */
  applied_coupon?: Maybe<AppliedCoupon>;
  /** An array of `AppliedCoupon` objects. Each object contains the `code` text attribute, which specifies the coupon code */
  applied_coupons?: Maybe<Array<Maybe<AppliedCoupon>>>;
  /** Contains the code attribute, which specifies the applied gift card codes */
  applied_gift_cards?: Maybe<Array<Maybe<AppliedGiftCard>>>;
  /** The amount of reward points applied to the cart */
  applied_reward_points?: Maybe<RewardPointsAmount>;
  /** Contains store credit information applied on the cart */
  applied_store_credit?: Maybe<AppliedStoreCredit>;
  /** The list of available gift wrapping options for the cart */
  available_gift_wrappings: Array<Maybe<GiftWrapping>>;
  /** Available payment methods */
  available_payment_methods?: Maybe<Array<Maybe<AvailablePaymentMethod>>>;
  billing_address?: Maybe<BillingCartAddress>;
  email?: Maybe<Scalars['String']>;
  /** The entered gift message for the cart */
  gift_message?: Maybe<GiftMessage>;
  /** Wether customer requested gift receipt for the cart */
  gift_receipt_included: Scalars['Boolean'];
  /** The selected gift wrapping for the cart */
  gift_wrapping?: Maybe<GiftWrapping>;
  /** The unique ID for a `Cart` object */
  id: Scalars['ID'];
  is_virtual: Scalars['Boolean'];
  items?: Maybe<Array<Maybe<CartItemInterface>>>;
  prices?: Maybe<CartPrices>;
  /** Wether customer requested printed card for the cart */
  printed_card_included: Scalars['Boolean'];
  selected_payment_method?: Maybe<SelectedPaymentMethod>;
  shipping_addresses: Array<Maybe<ShippingCartAddress>>;
  total_quantity: Scalars['Float'];
};

export type CartAddressCountry = {
  __typename?: 'CartAddressCountry';
  code: Scalars['String'];
  label: Scalars['String'];
};

export type CartAddressInput = {
  city: Scalars['String'];
  company?: InputMaybe<Scalars['String']>;
  country_code: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  postcode?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  region_id?: InputMaybe<Scalars['Int']>;
  /** Determines whether to save the address in the customer's address book. The default value is true */
  save_in_address_book?: InputMaybe<Scalars['Boolean']>;
  street: Array<InputMaybe<Scalars['String']>>;
  telephone: Scalars['String'];
};

export type CartAddressInterface = {
  city: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  country: CartAddressCountry;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  postcode?: Maybe<Scalars['String']>;
  region?: Maybe<CartAddressRegion>;
  street: Array<Maybe<Scalars['String']>>;
  telephone: Scalars['String'];
};

export type CartAddressRegion = {
  __typename?: 'CartAddressRegion';
  code?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  region_id?: Maybe<Scalars['Int']>;
};

export type CartDiscount = {
  __typename?: 'CartDiscount';
  amount: Money;
  label: Array<Maybe<Scalars['String']>>;
};

export type CartItemError = {
  __typename?: 'CartItemError';
  /** An error code that describes the error encountered */
  code: CartItemErrorType;
  /** A localized error message */
  message: Scalars['String'];
};

export enum CartItemErrorType {
  ItemIncrements = 'ITEM_INCREMENTS',
  ItemQty = 'ITEM_QTY',
  Undefined = 'UNDEFINED'
}

export type CartItemInput = {
  /** An array of entered options for the base product, such as personalization text */
  entered_options?: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>;
  /** For child products, the SKU of its parent product */
  parent_sku?: InputMaybe<Scalars['String']>;
  quantity: Scalars['Float'];
  /**
   * The selected options for the base product, such as color or size with  unique
   * ID for a `CustomizableRadioOption`, `CustomizableDropDownOption`,
   * `ConfigurableProductOptionsValues`, etc. objects
   */
  selected_options?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  sku: Scalars['String'];
};

export type CartItemInterface = {
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<CartItemError>>>;
  /** @deprecated Use `uid` instead */
  id: Scalars['String'];
  prices?: Maybe<CartItemPrices>;
  product: ProductInterface;
  quantity: Scalars['Float'];
  /** The unique ID for a `CartItemInterface` object */
  uid: Scalars['ID'];
};

export type CartItemPrices = {
  __typename?: 'CartItemPrices';
  /** An array of discounts to be applied to the cart item */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** Applied FPT to the cart item. */
  fixed_product_taxes?: Maybe<Array<Maybe<FixedProductTax>>>;
  price: Money;
  row_total: Money;
  row_total_including_tax: Money;
  /** The total of all discounts applied to the item */
  total_item_discount?: Maybe<Money>;
};

/** Deprecated: `cart_items` field of `ShippingCartAddress` returns now  `CartItemInterface` instead of `CartItemQuantity` */
export type CartItemQuantity = {
  __typename?: 'CartItemQuantity';
  /** @deprecated `cart_items` field of `ShippingCartAddress` returns now `CartItemInterface` instead of `CartItemQuantity` */
  cart_item_id: Scalars['Int'];
  /** @deprecated `cart_items` field of `ShippingCartAddress` returns now `CartItemInterface` instead of `CartItemQuantity` */
  quantity: Scalars['Float'];
};

export type CartItemSelectedOptionValuePrice = {
  __typename?: 'CartItemSelectedOptionValuePrice';
  type: PriceTypeEnum;
  units: Scalars['String'];
  value: Scalars['Float'];
};

export type CartItemUpdateInput = {
  /** Deprecated. Use `cart_item_uid` instead. */
  cart_item_id?: InputMaybe<Scalars['Int']>;
  /** The unique ID for a `CartItemInterface` object */
  cart_item_uid?: InputMaybe<Scalars['ID']>;
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** Gift message details for the cart item */
  gift_message?: InputMaybe<GiftMessageInput>;
  /** The unique ID for a `GiftWrapping` object to be used for the cart item */
  gift_wrapping_id?: InputMaybe<Scalars['ID']>;
  quantity?: InputMaybe<Scalars['Float']>;
};

export type CartPrices = {
  __typename?: 'CartPrices';
  applied_taxes?: Maybe<Array<Maybe<CartTaxItem>>>;
  /** @deprecated Use discounts instead  */
  discount?: Maybe<CartDiscount>;
  /** An array of applied discounts */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The list of prices for the selected gift options */
  gift_options?: Maybe<GiftOptionsPrices>;
  grand_total?: Maybe<Money>;
  subtotal_excluding_tax?: Maybe<Money>;
  subtotal_including_tax?: Maybe<Money>;
  subtotal_with_discount_excluding_tax?: Maybe<Money>;
};

export type CartTaxItem = {
  __typename?: 'CartTaxItem';
  amount: Money;
  label: Scalars['String'];
};

/** An error encountered while adding an item to the the cart. */
export type CartUserInputError = {
  __typename?: 'CartUserInputError';
  /** Cart-specific error code */
  code: CartUserInputErrorType;
  /** A localized error message */
  message: Scalars['String'];
};

export enum CartUserInputErrorType {
  InsufficientStock = 'INSUFFICIENT_STOCK',
  NotSalable = 'NOT_SALABLE',
  ProductNotFound = 'PRODUCT_NOT_FOUND',
  Undefined = 'UNDEFINED'
}

export type Categories = {
  __typename?: 'Categories';
  /** The payment method assets */
  asset_urls?: Maybe<Array<Maybe<Assets>>>;
  /** The payment method identifier */
  identifier: Scalars['String'];
  /** The payment method name */
  name: Scalars['String'];
};

/**
 * CategoryFilterInput defines the filters to be used in the search. A filter
 * contains at least one attribute, a comparison operator, and the value that is
 * being searched for.
 */
export type CategoryFilterInput = {
  /** Filter by the unique category ID for a `CategoryInterface` object. */
  category_uid?: InputMaybe<FilterEqualTypeInput>;
  /** Deprecated: use 'category_uid' to filter uniquely identifiers of categories. */
  ids?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the display name of the category. */
  name?: InputMaybe<FilterMatchTypeInput>;
  /** Filter by the unique parent category ID for a `CategoryInterface` object. */
  parent_category_uid?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the unique parent category ID for a `CategoryInterface` object. */
  parent_id?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the part of the URL that identifies the category. */
  url_key?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the URL path for the category. */
  url_path?: InputMaybe<FilterEqualTypeInput>;
};

/** CategoryInterface contains the full set of attributes that can be returned in a category search. */
export type CategoryInterface = {
  automatic_sorting?: Maybe<Scalars['String']>;
  available_sort_by?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Breadcrumbs, parent categories info. */
  breadcrumbs?: Maybe<Array<Maybe<Breadcrumb>>>;
  /**
   * Relative canonical URL. This value is returned only if the system setting 'Use
   * Canonical Link Meta Tag For Categories' is enabled
   */
  canonical_url?: Maybe<Scalars['String']>;
  children_count?: Maybe<Scalars['String']>;
  /** Category CMS Block. */
  cms_block?: Maybe<CmsBlock>;
  /**
   * Timestamp indicating when the category was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  custom_layout_update_file?: Maybe<Scalars['String']>;
  /** The attribute to use for sorting. */
  default_sort_by?: Maybe<Scalars['String']>;
  /** An optional description of the category. */
  description?: Maybe<Scalars['String']>;
  display_mode?: Maybe<Scalars['String']>;
  filter_price_range?: Maybe<Scalars['Float']>;
  /**
   * An ID that uniquely identifies the category.
   * @deprecated Use the `uid` argument instead.
   */
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  include_in_menu?: Maybe<Scalars['Int']>;
  is_anchor?: Maybe<Scalars['Int']>;
  landing_page?: Maybe<Scalars['Int']>;
  /** Indicates the depth of the category within the tree. */
  level?: Maybe<Scalars['Int']>;
  meta_description?: Maybe<Scalars['String']>;
  meta_keywords?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  /** The display name of the category. */
  name?: Maybe<Scalars['String']>;
  /** Category Path. */
  path?: Maybe<Scalars['String']>;
  /** Category path in store. */
  path_in_store?: Maybe<Scalars['String']>;
  /** The position of the category relative to other categories at the same level in tree. */
  position?: Maybe<Scalars['Int']>;
  /**
   * The number of products in the category that are marked as visible. By default,
   * in complex products, parent products are visible, but their child products are not.
   */
  product_count?: Maybe<Scalars['Int']>;
  /** The list of products assigned to the category. */
  products?: Maybe<CategoryProducts>;
  staged: Scalars['Boolean'];
  /** The unique ID for a `CategoryInterface` object. */
  uid: Scalars['ID'];
  /**
   * Timestamp indicating when the category was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']>;
  /** The url key assigned to the category. */
  url_key?: Maybe<Scalars['String']>;
  /** The url path assigned to the category. */
  url_path?: Maybe<Scalars['String']>;
  /** The part of the category URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
};


/** CategoryInterface contains the full set of attributes that can be returned in a category search. */
export type CategoryInterfaceProductsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ProductAttributeSortInput>;
};

/** The category products object returned in the Category query. */
export type CategoryProducts = {
  __typename?: 'CategoryProducts';
  /** An array of products that are assigned to the category. */
  items?: Maybe<Array<Maybe<ProductInterface>>>;
  /** An object that includes the page_info and currentPage values specified in the query. */
  page_info?: Maybe<SearchResultPageInfo>;
  /**
   * The number of products in the category that are marked as visible. By default,
   * in complex products, parent products are visible, but their child products are not.
   */
  total_count?: Maybe<Scalars['Int']>;
};

/** A collection of CategoryTree objects and pagination information. */
export type CategoryResult = {
  __typename?: 'CategoryResult';
  /** A list of categories that match the filter criteria. */
  items?: Maybe<Array<Maybe<CategoryTree>>>;
  /** An object that includes the page_info and currentPage values specified in the query. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The total number of categories that match the criteria. */
  total_count?: Maybe<Scalars['Int']>;
};

/** Category tree implementation */
export type CategoryTree = CategoryInterface & RoutableInterface & {
  __typename?: 'CategoryTree';
  automatic_sorting?: Maybe<Scalars['String']>;
  available_sort_by?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Breadcrumbs, parent categories info. */
  breadcrumbs?: Maybe<Array<Maybe<Breadcrumb>>>;
  /**
   * Relative canonical URL. This value is returned only if the system setting 'Use
   * Canonical Link Meta Tag For Categories' is enabled
   */
  canonical_url?: Maybe<Scalars['String']>;
  /** Child categories tree. */
  children?: Maybe<Array<Maybe<CategoryTree>>>;
  children_count?: Maybe<Scalars['String']>;
  /** Category CMS Block. */
  cms_block?: Maybe<CmsBlock>;
  /**
   * Timestamp indicating when the category was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  custom_layout_update_file?: Maybe<Scalars['String']>;
  /** The attribute to use for sorting. */
  default_sort_by?: Maybe<Scalars['String']>;
  /** An optional description of the category. */
  description?: Maybe<Scalars['String']>;
  display_mode?: Maybe<Scalars['String']>;
  filter_price_range?: Maybe<Scalars['Float']>;
  /**
   * An ID that uniquely identifies the category.
   * @deprecated Use the `uid` argument instead.
   */
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  include_in_menu?: Maybe<Scalars['Int']>;
  is_anchor?: Maybe<Scalars['Int']>;
  landing_page?: Maybe<Scalars['Int']>;
  /** Indicates the depth of the category within the tree. */
  level?: Maybe<Scalars['Int']>;
  meta_description?: Maybe<Scalars['String']>;
  meta_keywords?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  /** The display name of the category. */
  name?: Maybe<Scalars['String']>;
  /** Category Path. */
  path?: Maybe<Scalars['String']>;
  /** Category path in store. */
  path_in_store?: Maybe<Scalars['String']>;
  /** The position of the category relative to other categories at the same level in tree. */
  position?: Maybe<Scalars['Int']>;
  /**
   * The number of products in the category that are marked as visible. By default,
   * in complex products, parent products are visible, but their child products are not.
   */
  product_count?: Maybe<Scalars['Int']>;
  /** The list of products assigned to the category. */
  products?: Maybe<CategoryProducts>;
  /**
   * Contains 0 when there is no redirect error. A value of 301 indicates the URL
   * of the requested resource has been changed permanently, while a value of 302
   * indicates a temporary redirect
   */
  redirect_code: Scalars['Int'];
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original */
  relative_url?: Maybe<Scalars['String']>;
  staged: Scalars['Boolean'];
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /** The unique ID for a `CategoryInterface` object. */
  uid: Scalars['ID'];
  /**
   * Timestamp indicating when the category was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']>;
  /** The url key assigned to the category. */
  url_key?: Maybe<Scalars['String']>;
  /** The url path assigned to the category. */
  url_path?: Maybe<Scalars['String']>;
  /** The part of the category URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
};


/** Category tree implementation */
export type CategoryTreeProductsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ProductAttributeSortInput>;
};

export type ChatData = {
  __typename?: 'ChatData';
  /** API space id */
  api_space_id?: Maybe<Scalars['String']>;
  /** Cookie name */
  cookie_name?: Maybe<Scalars['String']>;
  /** Is chat enabled */
  is_enabled?: Maybe<Scalars['Boolean']>;
};

/** Defines all Checkout Agreement information */
export type CheckoutAgreement = {
  __typename?: 'CheckoutAgreement';
  /** Checkout Agreement identifier */
  agreement_id: Scalars['Int'];
  /** Checkout Agreement checkbox text */
  checkbox_text: Scalars['String'];
  /** Checkout Agreement content */
  content: Scalars['String'];
  /** Checkout Agreement content height */
  content_height?: Maybe<Scalars['String']>;
  /** Is Checkout Agreement content in HTML format */
  is_html: Scalars['Boolean'];
  mode: CheckoutAgreementMode;
  /** Checkout Agreement name */
  name: Scalars['String'];
};

export enum CheckoutAgreementMode {
  Auto = 'AUTO',
  Manual = 'MANUAL'
}

/** An error encountered while adding an item the the cart. */
export type CheckoutUserInputError = {
  __typename?: 'CheckoutUserInputError';
  /** Checkout-specific error code */
  code: CheckoutUserInputErrorCodes;
  /** Localized error message */
  message: Scalars['String'];
  /**
   * Path to the input field that caused an error. See the GraphQL specification
   * about path errors for details: http://spec.graphql.org/draft/#sec-Errors
   */
  path: Array<Maybe<Scalars['String']>>;
};

export enum CheckoutUserInputErrorCodes {
  InsufficientStock = 'INSUFFICIENT_STOCK',
  NotSalable = 'NOT_SALABLE',
  ProductNotFound = 'PRODUCT_NOT_FOUND',
  ReorderNotAvailable = 'REORDER_NOT_AVAILABLE',
  Undefined = 'UNDEFINED'
}

/** CMS block defines all CMS block information */
export type CmsBlock = {
  __typename?: 'CmsBlock';
  /** CMS block content */
  content?: Maybe<Scalars['String']>;
  /** CMS block identifier */
  identifier?: Maybe<Scalars['String']>;
  /** CMS block title */
  title?: Maybe<Scalars['String']>;
};

/** CMS blocks information */
export type CmsBlocks = {
  __typename?: 'CmsBlocks';
  /** An array of CMS blocks */
  items?: Maybe<Array<Maybe<CmsBlock>>>;
};

/** CMS page defines all CMS page information */
export type CmsPage = RoutableInterface & {
  __typename?: 'CmsPage';
  /** CMS page content */
  content?: Maybe<Scalars['String']>;
  /** CMS page content heading */
  content_heading?: Maybe<Scalars['String']>;
  /** Identifier of the CMS page */
  identifier?: Maybe<Scalars['String']>;
  /** CMS page meta description */
  meta_description?: Maybe<Scalars['String']>;
  /** CMS page meta keywords */
  meta_keywords?: Maybe<Scalars['String']>;
  /** CMS page meta title */
  meta_title?: Maybe<Scalars['String']>;
  /** CMS page content heading */
  page_layout?: Maybe<Scalars['String']>;
  /**
   * Contains 0 when there is no redirect error. A value of 301 indicates the URL
   * of the requested resource has been changed permanently, while a value of 302
   * indicates a temporary redirect
   */
  redirect_code: Scalars['Int'];
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original */
  relative_url?: Maybe<Scalars['String']>;
  /** CMS page title */
  title?: Maybe<Scalars['String']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /** URL key of CMS page */
  url_key?: Maybe<Scalars['String']>;
};

export type ColorSwatchData = SwatchDataInterface & {
  __typename?: 'ColorSwatchData';
  /** Value of swatch item (HEX color code, image link or textual value) */
  value?: Maybe<Scalars['String']>;
};

export type ComparableAttribute = {
  __typename?: 'ComparableAttribute';
  /** An attribute code that is enabled for product comparisons */
  code: Scalars['String'];
  /** The label of the attribute code */
  label: Scalars['String'];
};

export type ComparableItem = {
  __typename?: 'ComparableItem';
  /** An array of product attributes that can be used to compare products */
  attributes: Array<Maybe<ProductAttribute>>;
  /** Contains details about a product in a compare list */
  product: ProductInterface;
  /** The unique ID of an item in a compare list */
  uid: Scalars['ID'];
};

export type CompareList = {
  __typename?: 'CompareList';
  /** An array of attributes that can be used for comparing products */
  attributes?: Maybe<Array<Maybe<ComparableAttribute>>>;
  /** The number of items in the compare list */
  item_count: Scalars['Int'];
  /** An array of products to compare */
  items?: Maybe<Array<Maybe<ComparableItem>>>;
  /** The unique ID assigned to the compare list */
  uid: Scalars['ID'];
};

export type ComplexTextValue = {
  __typename?: 'ComplexTextValue';
  /** HTML format */
  html: Scalars['String'];
};

/**
 * ConfigurableAttributeOption contains the value_index (and other related
 * information) assigned to a configurable product option
 */
export type ConfigurableAttributeOption = {
  __typename?: 'ConfigurableAttributeOption';
  /** The ID assigned to the attribute */
  code?: Maybe<Scalars['String']>;
  /** A string that describes the configurable attribute option */
  label?: Maybe<Scalars['String']>;
  /** The unique ID for a `ConfigurableAttributeOption` object */
  uid: Scalars['ID'];
  /** A unique index number assigned to the configurable product option */
  value_index?: Maybe<Scalars['Int']>;
};

export type ConfigurableCartItem = CartItemInterface & {
  __typename?: 'ConfigurableCartItem';
  /** The list of available gift wrapping options for the cart item */
  available_gift_wrapping: Array<Maybe<GiftWrapping>>;
  configurable_options: Array<Maybe<SelectedConfigurableOption>>;
  /** Product details of the cart item */
  configured_variant: ProductInterface;
  customizable_options?: Maybe<Array<Maybe<SelectedCustomizableOption>>>;
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<CartItemError>>>;
  /** The entered gift message for the cart item */
  gift_message?: Maybe<GiftMessage>;
  /** The selected gift wrapping for the cart item */
  gift_wrapping?: Maybe<GiftWrapping>;
  /** @deprecated Use `uid` instead */
  id: Scalars['String'];
  prices?: Maybe<CartItemPrices>;
  product: ProductInterface;
  quantity: Scalars['Float'];
  /** The unique ID for a `CartItemInterface` object */
  uid: Scalars['ID'];
};

/** Configurable option available for further selection based on current selection. */
export type ConfigurableOptionAvailableForSelection = {
  __typename?: 'ConfigurableOptionAvailableForSelection';
  /** Attribute code that uniquely identifies configurable option. */
  attribute_code: Scalars['String'];
  /** Configurable option values available for further selection. */
  option_value_uids: Array<Maybe<Scalars['ID']>>;
};

/** ConfigurableProduct defines basic features of a configurable product and its simple product variants */
export type ConfigurableProduct = CustomizableProductInterface & PhysicalProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'ConfigurableProduct';
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']>;
  /**
   * Relative canonical URL. This value is returned only if the system setting 'Use
   * Canonical Link Meta Tag For Products' is enabled
   */
  canonical_url?: Maybe<Scalars['String']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  color?: Maybe<Scalars['Int']>;
  /** An array of linked simple product items */
  configurable_options?: Maybe<Array<Maybe<ConfigurableProductOptions>>>;
  /** Specified configurable product options selection */
  configurable_product_options_selection?: Maybe<ConfigurableProductOptionsSelection>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** List of product custom attributes details. */
  custom_attributes: Array<Maybe<CustomAttribute>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  fashion_color?: Maybe<Scalars['Int']>;
  fashion_material?: Maybe<Scalars['String']>;
  fashion_size?: Maybe<Scalars['Int']>;
  fashion_style?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['Int']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']>;
  has_video?: Maybe<Scalars['Int']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** Indicates whether the product can be returned */
  is_returnable?: Maybe<Scalars['String']>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']>;
  /** An array of Media Gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use product's `media_gallery` instead
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']>;
  /**
   * The beginning date for new product listings, and determines if the product is featured as a new product.
   * @deprecated The field should not be used on the storefront.
   */
  new_from_date?: Maybe<Scalars['String']>;
  /**
   * The end date for new product listings.
   * @deprecated The field should not be used on the storefront.
   */
  new_to_date?: Maybe<Scalars['String']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  /**
   * A ProductPrices object, indicating the price of an item.
   * @deprecated Use price_range for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** A PriceRange object, indicating the range of prices for the product */
  price_range: PriceRange;
  /** An array of TierPrice objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** An array of ProductLinks objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /**
   * Contains 0 when there is no redirect error. A value of 301 indicates the URL
   * of the requested resource has been changed permanently, while a value of 302
   * indicates a temporary redirect
   */
  redirect_code: Scalars['Int'];
  /** Related Products */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original */
  relative_url?: Maybe<Scalars['String']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']>;
  /** The end date that a product has a special price. */
  special_to_date?: Maybe<Scalars['String']>;
  staged: Scalars['Boolean'];
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** The file name of a swatch image */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use __typename instead.
   */
  type_id?: Maybe<Scalars['String']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  /** An array of variants of products */
  variants?: Maybe<Array<Maybe<ConfigurableVariant>>>;
  video_file?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']>;
};


/** ConfigurableProduct defines basic features of a configurable product and its simple product variants */
export type ConfigurableProductConfigurable_Product_Options_SelectionArgs = {
  configurableOptionValueUids?: InputMaybe<Array<Scalars['ID']>>;
};


/** ConfigurableProduct defines basic features of a configurable product and its simple product variants */
export type ConfigurableProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type ConfigurableProductCartItemInput = {
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  data: CartItemInput;
  /** Configurable product SKU. */
  parent_sku?: InputMaybe<Scalars['String']>;
  /** Deprecated. Use CartItemInput.sku instead. */
  variant_sku?: InputMaybe<Scalars['String']>;
};

export type ConfigurableProductOption = {
  __typename?: 'ConfigurableProductOption';
  attribute_code: Scalars['String'];
  label: Scalars['String'];
  uid: Scalars['ID'];
  values?: Maybe<Array<Maybe<ConfigurableProductOptionValue>>>;
};

export type ConfigurableProductOptionValue = {
  __typename?: 'ConfigurableProductOptionValue';
  is_available: Scalars['Boolean'];
  is_use_default: Scalars['Boolean'];
  label: Scalars['String'];
  swatch?: Maybe<SwatchDataInterface>;
  uid: Scalars['ID'];
};

/** ConfigurableProductOptions defines configurable attributes for the specified product */
export type ConfigurableProductOptions = {
  __typename?: 'ConfigurableProductOptions';
  /** A string that identifies the attribute */
  attribute_code?: Maybe<Scalars['String']>;
  /**
   * The ID assigned to the attribute
   * @deprecated Use attribute_uid instead
   */
  attribute_id?: Maybe<Scalars['String']>;
  /**
   * The ID assigned to the attribute
   * @deprecated Use attribute_uid instead
   */
  attribute_id_v2?: Maybe<Scalars['Int']>;
  /** The unique ID for a `Attribute` object */
  attribute_uid: Scalars['ID'];
  /**
   * The configurable option ID number assigned by the system
   * @deprecated Use uid instead
   */
  id?: Maybe<Scalars['Int']>;
  /** A string that describes the configurable product option, which is displayed on the UI */
  label?: Maybe<Scalars['String']>;
  /** A number that indicates the order in which the attribute is displayed */
  position?: Maybe<Scalars['Int']>;
  /**
   * This is the same as a product's id field
   * @deprecated `product_id` is not needed and can be obtained from it's parent
   */
  product_id?: Maybe<Scalars['Int']>;
  /** The unique ID for a `ConfigurableProductOptions` object */
  uid: Scalars['ID'];
  /** Indicates whether the option is the default */
  use_default?: Maybe<Scalars['Boolean']>;
  /** An array that defines the value_index codes assigned to the configurable product */
  values?: Maybe<Array<Maybe<ConfigurableProductOptionsValues>>>;
};

/** Metadata corresponding to the configurable options selection. */
export type ConfigurableProductOptionsSelection = {
  __typename?: 'ConfigurableProductOptionsSelection';
  /** Configurable options available for further selection based on current selection. */
  configurable_options?: Maybe<Array<Maybe<ConfigurableProductOption>>>;
  /** Product images and videos corresponding to the specified configurable options selection. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /** Configurable options available for further selection based on current selection. */
  options_available_for_selection?: Maybe<Array<Maybe<ConfigurableOptionAvailableForSelection>>>;
  /**
   * Variant represented by the specified configurable options selection. It is
   * expected to be null, until selections are made for each configurable option.
   */
  variant?: Maybe<SimpleProduct>;
};

/** ConfigurableProductOptionsValues contains the index number assigned to a configurable product option */
export type ConfigurableProductOptionsValues = {
  __typename?: 'ConfigurableProductOptionsValues';
  /** The label of the product on the default store */
  default_label?: Maybe<Scalars['String']>;
  /** The label of the product */
  label?: Maybe<Scalars['String']>;
  /** The label of the product on the current store */
  store_label?: Maybe<Scalars['String']>;
  /** Swatch data for configurable product option */
  swatch_data?: Maybe<SwatchDataInterface>;
  /** The unique ID for a `ConfigurableProductOptionsValues` object */
  uid?: Maybe<Scalars['ID']>;
  /** Indicates whether to use the default_label */
  use_default_value?: Maybe<Scalars['Boolean']>;
  /**
   * A unique index number assigned to the configurable product option
   * @deprecated Use `uid` instead
   */
  value_index?: Maybe<Scalars['Int']>;
};

/** An array containing all the simple product variants of a configurable product */
export type ConfigurableVariant = {
  __typename?: 'ConfigurableVariant';
  attributes?: Maybe<Array<Maybe<ConfigurableAttributeOption>>>;
  product?: Maybe<SimpleProduct>;
};

/** A configurable product wish list item */
export type ConfigurableWishlistItem = WishlistItemInterface & {
  __typename?: 'ConfigurableWishlistItem';
  /** The date and time the item was added to the wish list */
  added_at: Scalars['String'];
  /** The SKU of the simple product corresponding to a set of selected configurable options */
  child_sku: Scalars['String'];
  /** An array of selected configurable options */
  configurable_options?: Maybe<Array<Maybe<SelectedConfigurableOption>>>;
  /** Custom options selected for the wish list item */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item */
  description?: Maybe<Scalars['String']>;
  /** The unique ID for a `WishlistItemInterface` object */
  id: Scalars['ID'];
  /** Product details of the wish list item */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item */
  quantity: Scalars['Float'];
};

export type ContactUsInput = {
  /** The shopper's comment to the merchant. */
  comment: Scalars['String'];
  /** The email address of the shopper. */
  email: Scalars['String'];
  /** The full name of the shopper. */
  name: Scalars['String'];
  /** The shopper's telephone number. */
  telephone?: InputMaybe<Scalars['String']>;
};

/** Contains the status of the request. */
export type ContactUsOutput = {
  __typename?: 'ContactUsOutput';
  /** Indicates whether the request was successful. */
  status: Scalars['Boolean'];
};

export type CopyProductsBetweenWishlistsOutput = {
  __typename?: 'CopyProductsBetweenWishlistsOutput';
  /** The destination wish list containing the copied products */
  destination_wishlist: Wishlist;
  /** The wish list that the products were copied from */
  source_wishlist: Wishlist;
  /** An array of errors encountered while copying products in a wish list */
  user_errors: Array<Maybe<WishListUserInputError>>;
};

export type Country = {
  __typename?: 'Country';
  available_regions?: Maybe<Array<Maybe<Region>>>;
  full_name_english?: Maybe<Scalars['String']>;
  full_name_locale?: Maybe<Scalars['String']>;
  /** The unique ID for a `Country` object. */
  id?: Maybe<Scalars['String']>;
  three_letter_abbreviation?: Maybe<Scalars['String']>;
  two_letter_abbreviation?: Maybe<Scalars['String']>;
};

/** The list of countries codes */
export enum CountryCodeEnum {
  /** Andorra */
  Ad = 'AD',
  /** United Arab Emirates */
  Ae = 'AE',
  /** Afghanistan */
  Af = 'AF',
  /** Antigua & Barbuda */
  Ag = 'AG',
  /** Anguilla */
  Ai = 'AI',
  /** Albania */
  Al = 'AL',
  /** Armenia */
  Am = 'AM',
  /** Netherlands Antilles */
  An = 'AN',
  /** Angola */
  Ao = 'AO',
  /** Antarctica */
  Aq = 'AQ',
  /** Argentina */
  Ar = 'AR',
  /** American Samoa */
  As = 'AS',
  /** Austria */
  At = 'AT',
  /** Australia */
  Au = 'AU',
  /** Aruba */
  Aw = 'AW',
  /** Åland Islands */
  Ax = 'AX',
  /** Azerbaijan */
  Az = 'AZ',
  /** Bosnia & Herzegovina */
  Ba = 'BA',
  /** Barbados */
  Bb = 'BB',
  /** Bangladesh */
  Bd = 'BD',
  /** Belgium */
  Be = 'BE',
  /** Burkina Faso */
  Bf = 'BF',
  /** Bulgaria */
  Bg = 'BG',
  /** Bahrain */
  Bh = 'BH',
  /** Burundi */
  Bi = 'BI',
  /** Benin */
  Bj = 'BJ',
  /** St. Barthélemy */
  Bl = 'BL',
  /** Bermuda */
  Bm = 'BM',
  /** Brunei */
  Bn = 'BN',
  /** Bolivia */
  Bo = 'BO',
  /** Brazil */
  Br = 'BR',
  /** Bahamas */
  Bs = 'BS',
  /** Bhutan */
  Bt = 'BT',
  /** Bouvet Island */
  Bv = 'BV',
  /** Botswana */
  Bw = 'BW',
  /** Belarus */
  By = 'BY',
  /** Belize */
  Bz = 'BZ',
  /** Canada */
  Ca = 'CA',
  /** Cocos (Keeling) Islands */
  Cc = 'CC',
  /** Congo-Kinshasa */
  Cd = 'CD',
  /** Central African Republic */
  Cf = 'CF',
  /** Congo-Brazzaville */
  Cg = 'CG',
  /** Switzerland */
  Ch = 'CH',
  /** Côte d’Ivoire */
  Ci = 'CI',
  /** Cook Islands */
  Ck = 'CK',
  /** Chile */
  Cl = 'CL',
  /** Cameroon */
  Cm = 'CM',
  /** China */
  Cn = 'CN',
  /** Colombia */
  Co = 'CO',
  /** Costa Rica */
  Cr = 'CR',
  /** Cuba */
  Cu = 'CU',
  /** Cape Verde */
  Cv = 'CV',
  /** Christmas Island */
  Cx = 'CX',
  /** Cyprus */
  Cy = 'CY',
  /** Czech Republic */
  Cz = 'CZ',
  /** Germany */
  De = 'DE',
  /** Djibouti */
  Dj = 'DJ',
  /** Denmark */
  Dk = 'DK',
  /** Dominica */
  Dm = 'DM',
  /** Dominican Republic */
  Do = 'DO',
  /** Algeria */
  Dz = 'DZ',
  /** Ecuador */
  Ec = 'EC',
  /** Estonia */
  Ee = 'EE',
  /** Egypt */
  Eg = 'EG',
  /** Western Sahara */
  Eh = 'EH',
  /** Eritrea */
  Er = 'ER',
  /** Spain */
  Es = 'ES',
  /** Ethiopia */
  Et = 'ET',
  /** Finland */
  Fi = 'FI',
  /** Fiji */
  Fj = 'FJ',
  /** Falkland Islands */
  Fk = 'FK',
  /** Micronesia */
  Fm = 'FM',
  /** Faroe Islands */
  Fo = 'FO',
  /** France */
  Fr = 'FR',
  /** Gabon */
  Ga = 'GA',
  /** United Kingdom */
  Gb = 'GB',
  /** Grenada */
  Gd = 'GD',
  /** Georgia */
  Ge = 'GE',
  /** French Guiana */
  Gf = 'GF',
  /** Guernsey */
  Gg = 'GG',
  /** Ghana */
  Gh = 'GH',
  /** Gibraltar */
  Gi = 'GI',
  /** Greenland */
  Gl = 'GL',
  /** Gambia */
  Gm = 'GM',
  /** Guinea */
  Gn = 'GN',
  /** Guadeloupe */
  Gp = 'GP',
  /** Equatorial Guinea */
  Gq = 'GQ',
  /** Greece */
  Gr = 'GR',
  /** South Georgia & South Sandwich Islands */
  Gs = 'GS',
  /** Guatemala */
  Gt = 'GT',
  /** Guam */
  Gu = 'GU',
  /** Guinea-Bissau */
  Gw = 'GW',
  /** Guyana */
  Gy = 'GY',
  /** Hong Kong SAR China */
  Hk = 'HK',
  /** Heard &amp; McDonald Islands */
  Hm = 'HM',
  /** Honduras */
  Hn = 'HN',
  /** Croatia */
  Hr = 'HR',
  /** Haiti */
  Ht = 'HT',
  /** Hungary */
  Hu = 'HU',
  /** Indonesia */
  Id = 'ID',
  /** Ireland */
  Ie = 'IE',
  /** Israel */
  Il = 'IL',
  /** Isle of Man */
  Im = 'IM',
  /** India */
  In = 'IN',
  /** British Indian Ocean Territory */
  Io = 'IO',
  /** Iraq */
  Iq = 'IQ',
  /** Iran */
  Ir = 'IR',
  /** Iceland */
  Is = 'IS',
  /** Italy */
  It = 'IT',
  /** Jersey */
  Je = 'JE',
  /** Jamaica */
  Jm = 'JM',
  /** Jordan */
  Jo = 'JO',
  /** Japan */
  Jp = 'JP',
  /** Kenya */
  Ke = 'KE',
  /** Kyrgyzstan */
  Kg = 'KG',
  /** Cambodia */
  Kh = 'KH',
  /** Kiribati */
  Ki = 'KI',
  /** Comoros */
  Km = 'KM',
  /** St. Kitts & Nevis */
  Kn = 'KN',
  /** North Korea */
  Kp = 'KP',
  /** South Korea */
  Kr = 'KR',
  /** Kuwait */
  Kw = 'KW',
  /** Cayman Islands */
  Ky = 'KY',
  /** Kazakhstan */
  Kz = 'KZ',
  /** Laos */
  La = 'LA',
  /** Lebanon */
  Lb = 'LB',
  /** St. Lucia */
  Lc = 'LC',
  /** Liechtenstein */
  Li = 'LI',
  /** Sri Lanka */
  Lk = 'LK',
  /** Liberia */
  Lr = 'LR',
  /** Lesotho */
  Ls = 'LS',
  /** Lithuania */
  Lt = 'LT',
  /** Luxembourg */
  Lu = 'LU',
  /** Latvia */
  Lv = 'LV',
  /** Libya */
  Ly = 'LY',
  /** Morocco */
  Ma = 'MA',
  /** Monaco */
  Mc = 'MC',
  /** Moldova */
  Md = 'MD',
  /** Montenegro */
  Me = 'ME',
  /** St. Martin */
  Mf = 'MF',
  /** Madagascar */
  Mg = 'MG',
  /** Marshall Islands */
  Mh = 'MH',
  /** Macedonia */
  Mk = 'MK',
  /** Mali */
  Ml = 'ML',
  /** Myanmar (Burma) */
  Mm = 'MM',
  /** Mongolia */
  Mn = 'MN',
  /** Macau SAR China */
  Mo = 'MO',
  /** Northern Mariana Islands */
  Mp = 'MP',
  /** Martinique */
  Mq = 'MQ',
  /** Mauritania */
  Mr = 'MR',
  /** Montserrat */
  Ms = 'MS',
  /** Malta */
  Mt = 'MT',
  /** Mauritius */
  Mu = 'MU',
  /** Maldives */
  Mv = 'MV',
  /** Malawi */
  Mw = 'MW',
  /** Mexico */
  Mx = 'MX',
  /** Malaysia */
  My = 'MY',
  /** Mozambique */
  Mz = 'MZ',
  /** Namibia */
  Na = 'NA',
  /** New Caledonia */
  Nc = 'NC',
  /** Niger */
  Ne = 'NE',
  /** Norfolk Island */
  Nf = 'NF',
  /** Nigeria */
  Ng = 'NG',
  /** Nicaragua */
  Ni = 'NI',
  /** Netherlands */
  Nl = 'NL',
  /** Norway */
  No = 'NO',
  /** Nepal */
  Np = 'NP',
  /** Nauru */
  Nr = 'NR',
  /** Niue */
  Nu = 'NU',
  /** New Zealand */
  Nz = 'NZ',
  /** Oman */
  Om = 'OM',
  /** Panama */
  Pa = 'PA',
  /** Peru */
  Pe = 'PE',
  /** French Polynesia */
  Pf = 'PF',
  /** Papua New Guinea */
  Pg = 'PG',
  /** Philippines */
  Ph = 'PH',
  /** Pakistan */
  Pk = 'PK',
  /** Poland */
  Pl = 'PL',
  /** St. Pierre & Miquelon */
  Pm = 'PM',
  /** Pitcairn Islands */
  Pn = 'PN',
  /** Palestinian Territories */
  Ps = 'PS',
  /** Portugal */
  Pt = 'PT',
  /** Palau */
  Pw = 'PW',
  /** Paraguay */
  Py = 'PY',
  /** Qatar */
  Qa = 'QA',
  /** Réunion */
  Re = 'RE',
  /** Romania */
  Ro = 'RO',
  /** Serbia */
  Rs = 'RS',
  /** Russia */
  Ru = 'RU',
  /** Rwanda */
  Rw = 'RW',
  /** Saudi Arabia */
  Sa = 'SA',
  /** Solomon Islands */
  Sb = 'SB',
  /** Seychelles */
  Sc = 'SC',
  /** Sudan */
  Sd = 'SD',
  /** Sweden */
  Se = 'SE',
  /** Singapore */
  Sg = 'SG',
  /** St. Helena */
  Sh = 'SH',
  /** Slovenia */
  Si = 'SI',
  /** Svalbard & Jan Mayen */
  Sj = 'SJ',
  /** Slovakia */
  Sk = 'SK',
  /** Sierra Leone */
  Sl = 'SL',
  /** San Marino */
  Sm = 'SM',
  /** Senegal */
  Sn = 'SN',
  /** Somalia */
  So = 'SO',
  /** Suriname */
  Sr = 'SR',
  /** São Tomé & Príncipe */
  St = 'ST',
  /** El Salvador */
  Sv = 'SV',
  /** Syria */
  Sy = 'SY',
  /** Swaziland */
  Sz = 'SZ',
  /** Turks & Caicos Islands */
  Tc = 'TC',
  /** Chad */
  Td = 'TD',
  /** French Southern Territories */
  Tf = 'TF',
  /** Togo */
  Tg = 'TG',
  /** Thailand */
  Th = 'TH',
  /** Tajikistan */
  Tj = 'TJ',
  /** Tokelau */
  Tk = 'TK',
  /** Timor-Leste */
  Tl = 'TL',
  /** Turkmenistan */
  Tm = 'TM',
  /** Tunisia */
  Tn = 'TN',
  /** Tonga */
  To = 'TO',
  /** Turkey */
  Tr = 'TR',
  /** Trinidad & Tobago */
  Tt = 'TT',
  /** Tuvalu */
  Tv = 'TV',
  /** Taiwan */
  Tw = 'TW',
  /** Tanzania */
  Tz = 'TZ',
  /** Ukraine */
  Ua = 'UA',
  /** Uganda */
  Ug = 'UG',
  /** U.S. Outlying Islands */
  Um = 'UM',
  /** United States */
  Us = 'US',
  /** Uruguay */
  Uy = 'UY',
  /** Uzbekistan */
  Uz = 'UZ',
  /** Vatican City */
  Va = 'VA',
  /** St. Vincent & Grenadines */
  Vc = 'VC',
  /** Venezuela */
  Ve = 'VE',
  /** British Virgin Islands */
  Vg = 'VG',
  /** U.S. Virgin Islands */
  Vi = 'VI',
  /** Vietnam */
  Vn = 'VN',
  /** Vanuatu */
  Vu = 'VU',
  /** Wallis & Futuna */
  Wf = 'WF',
  /** Samoa */
  Ws = 'WS',
  /** Yemen */
  Ye = 'YE',
  /** Mayotte */
  Yt = 'YT',
  /** South Africa */
  Za = 'ZA',
  /** Zambia */
  Zm = 'ZM',
  /** Zimbabwe */
  Zw = 'ZW'
}

export type CreateCompareListInput = {
  /** An array of product IDs to add to the compare list */
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type CreateGiftRegistryInput = {
  /** Additional attributes specified as a code-value pair */
  dynamic_attributes?: InputMaybe<Array<InputMaybe<GiftRegistryDynamicAttributeInput>>>;
  /** The name of the event */
  event_name: Scalars['String'];
  /** The ID of the selected event type */
  gift_registry_type_uid: Scalars['ID'];
  /** A message describing the event */
  message: Scalars['String'];
  /** Indicates whether the registry is PRIVATE or PUBLIC */
  privacy_settings: GiftRegistryPrivacySettings;
  /** The list of people who receive notifications about the registry */
  registrants: Array<InputMaybe<AddGiftRegistryRegistrantInput>>;
  /** The shipping address for all gift registry items */
  shipping_address?: InputMaybe<GiftRegistryShippingAddressInput>;
  /** Indicates whether the registry is ACTIVE or INACTIVE */
  status: GiftRegistryStatus;
};

export type CreateGiftRegistryOutput = {
  __typename?: 'CreateGiftRegistryOutput';
  /** The newly-created gift registry */
  gift_registry?: Maybe<GiftRegistry>;
};

/** Contains the secure information used to authorize transaction. Applies to Payflow Pro and Payments Pro payment methods. */
export type CreatePayflowProTokenOutput = {
  __typename?: 'CreatePayflowProTokenOutput';
  response_message: Scalars['String'];
  result: Scalars['Int'];
  result_code: Scalars['Int'];
  secure_token: Scalars['String'];
  secure_token_id: Scalars['String'];
};

export type CreateProductReviewInput = {
  /** The customer's nickname. Defaults to the customer name, if logged in */
  nickname: Scalars['String'];
  /** Ratings details by category. e.g price: 5, quality: 4 etc */
  ratings: Array<InputMaybe<ProductReviewRatingInput>>;
  /** The SKU of the reviewed product */
  sku: Scalars['String'];
  /** The summary (title) of the review */
  summary: Scalars['String'];
  /** The review text. */
  text: Scalars['String'];
};

export type CreateProductReviewOutput = {
  __typename?: 'CreateProductReviewOutput';
  /** Contains the completed product review */
  review: ProductReview;
};

export type CreateWishlistInput = {
  /** The name of the new wish list */
  name: Scalars['String'];
  /** Indicates whether the wish list is public or private */
  visibility: WishlistVisibilityEnum;
};

export type CreateWishlistOutput = {
  __typename?: 'CreateWishlistOutput';
  /** The newly-created wish list */
  wishlist: Wishlist;
};

/** Required fields for Payflow Pro and Payments Pro credit card payments */
export type CreditCardDetailsInput = {
  /** Credit card expiration month */
  cc_exp_month: Scalars['Int'];
  /** Credit card expiration year */
  cc_exp_year: Scalars['Int'];
  /** Last 4 digits of the credit card */
  cc_last_4: Scalars['Int'];
  /** Credit card type */
  cc_type: Scalars['String'];
};

/** Credit memo details */
export type CreditMemo = {
  __typename?: 'CreditMemo';
  /** Comments on the credit memo */
  comments?: Maybe<Array<Maybe<SalesCommentItem>>>;
  /** The unique ID for a `CreditMemo` object */
  id: Scalars['ID'];
  /** An array containing details about refunded items */
  items?: Maybe<Array<Maybe<CreditMemoItemInterface>>>;
  /** The sequential credit memo number */
  number: Scalars['String'];
  /** Contains details about the total refunded amount */
  total?: Maybe<CreditMemoTotal>;
};

export type CreditMemoItem = CreditMemoItemInterface & {
  __typename?: 'CreditMemoItem';
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for a `CreditMemoItemInterface` object */
  id: Scalars['ID'];
  /** The order item the credit memo is applied to */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product, including selected options */
  product_sale_price: Money;
  /** SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of refunded items */
  quantity_refunded?: Maybe<Scalars['Float']>;
};

/** Credit memo item details */
export type CreditMemoItemInterface = {
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for a `CreditMemoItemInterface` object */
  id: Scalars['ID'];
  /** The order item the credit memo is applied to */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product, including selected options */
  product_sale_price: Money;
  /** SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of refunded items */
  quantity_refunded?: Maybe<Scalars['Float']>;
};

/** Credit memo price details */
export type CreditMemoTotal = {
  __typename?: 'CreditMemoTotal';
  /** An adjustment manually applied to the order */
  adjustment: Money;
  /** The final base grand total amount in the base currency */
  base_grand_total: Money;
  /** The applied discounts to the credit memo */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The final total amount, including shipping, discounts, and taxes */
  grand_total: Money;
  /** Contains details about the shipping and handling costs for the credit memo */
  shipping_handling?: Maybe<ShippingHandling>;
  /** The subtotal of the invoice, excluding shipping, discounts, and taxes */
  subtotal: Money;
  /** The credit memo tax details */
  taxes?: Maybe<Array<Maybe<TaxItem>>>;
  /** The shipping amount for the credit memo */
  total_shipping: Money;
  /** The amount of tax applied to the credit memo */
  total_tax: Money;
};

export type Currency = {
  __typename?: 'Currency';
  available_currency_codes?: Maybe<Array<Maybe<Scalars['String']>>>;
  base_currency_code?: Maybe<Scalars['String']>;
  base_currency_symbol?: Maybe<Scalars['String']>;
  /** @deprecated Symbol was missed. Use `default_display_currency_code`. */
  default_display_currecy_code?: Maybe<Scalars['String']>;
  /** @deprecated Symbol was missed. Use `default_display_currency_symbol`. */
  default_display_currecy_symbol?: Maybe<Scalars['String']>;
  default_display_currency_code?: Maybe<Scalars['String']>;
  default_display_currency_symbol?: Maybe<Scalars['String']>;
  exchange_rates?: Maybe<Array<Maybe<ExchangeRate>>>;
};

/** The list of available currency codes */
export enum CurrencyEnum {
  Aed = 'AED',
  Afn = 'AFN',
  All = 'ALL',
  Amd = 'AMD',
  Ang = 'ANG',
  Aoa = 'AOA',
  Ars = 'ARS',
  Aud = 'AUD',
  Awg = 'AWG',
  Azm = 'AZM',
  Azn = 'AZN',
  Bam = 'BAM',
  Bbd = 'BBD',
  Bdt = 'BDT',
  Bgn = 'BGN',
  Bhd = 'BHD',
  Bif = 'BIF',
  Bmd = 'BMD',
  Bnd = 'BND',
  Bob = 'BOB',
  Brl = 'BRL',
  Bsd = 'BSD',
  Btn = 'BTN',
  Buk = 'BUK',
  Bwp = 'BWP',
  Byn = 'BYN',
  Bzd = 'BZD',
  Cad = 'CAD',
  Cdf = 'CDF',
  Che = 'CHE',
  Chf = 'CHF',
  Chw = 'CHW',
  Clp = 'CLP',
  Cny = 'CNY',
  Cop = 'COP',
  Crc = 'CRC',
  Cup = 'CUP',
  Cve = 'CVE',
  Czk = 'CZK',
  Djf = 'DJF',
  Dkk = 'DKK',
  Dop = 'DOP',
  Dzd = 'DZD',
  Eek = 'EEK',
  Egp = 'EGP',
  Ern = 'ERN',
  Etb = 'ETB',
  Eur = 'EUR',
  Fjd = 'FJD',
  Fkp = 'FKP',
  Gbp = 'GBP',
  Gek = 'GEK',
  Gel = 'GEL',
  Ghs = 'GHS',
  Gip = 'GIP',
  Gmd = 'GMD',
  Gnf = 'GNF',
  Gqe = 'GQE',
  Gtq = 'GTQ',
  Gyd = 'GYD',
  Hkd = 'HKD',
  Hnl = 'HNL',
  Hrk = 'HRK',
  Htg = 'HTG',
  Huf = 'HUF',
  Idr = 'IDR',
  Ils = 'ILS',
  Inr = 'INR',
  Iqd = 'IQD',
  Irr = 'IRR',
  Isk = 'ISK',
  Jmd = 'JMD',
  Jod = 'JOD',
  Jpy = 'JPY',
  Kes = 'KES',
  Kgs = 'KGS',
  Khr = 'KHR',
  Kmf = 'KMF',
  Kpw = 'KPW',
  Krw = 'KRW',
  Kwd = 'KWD',
  Kyd = 'KYD',
  Kzt = 'KZT',
  Lak = 'LAK',
  Lbp = 'LBP',
  Lkr = 'LKR',
  Lrd = 'LRD',
  Lsl = 'LSL',
  Lsm = 'LSM',
  Ltl = 'LTL',
  Lvl = 'LVL',
  Lyd = 'LYD',
  Mad = 'MAD',
  Mdl = 'MDL',
  Mga = 'MGA',
  Mkd = 'MKD',
  Mmk = 'MMK',
  Mnt = 'MNT',
  Mop = 'MOP',
  Mro = 'MRO',
  Mur = 'MUR',
  Mvr = 'MVR',
  Mwk = 'MWK',
  Mxn = 'MXN',
  Myr = 'MYR',
  Mzn = 'MZN',
  Nad = 'NAD',
  Ngn = 'NGN',
  Nic = 'NIC',
  Nok = 'NOK',
  Npr = 'NPR',
  Nzd = 'NZD',
  Omr = 'OMR',
  Pab = 'PAB',
  Pen = 'PEN',
  Pgk = 'PGK',
  Php = 'PHP',
  Pkr = 'PKR',
  Pln = 'PLN',
  Pyg = 'PYG',
  Qar = 'QAR',
  Rhd = 'RHD',
  Rol = 'ROL',
  Ron = 'RON',
  Rsd = 'RSD',
  Rub = 'RUB',
  Rwf = 'RWF',
  Sar = 'SAR',
  Sbd = 'SBD',
  Scr = 'SCR',
  Sdg = 'SDG',
  Sek = 'SEK',
  Sgd = 'SGD',
  Shp = 'SHP',
  Skk = 'SKK',
  Sll = 'SLL',
  Sos = 'SOS',
  Srd = 'SRD',
  Std = 'STD',
  Svc = 'SVC',
  Syp = 'SYP',
  Szl = 'SZL',
  Thb = 'THB',
  Tjs = 'TJS',
  Tmm = 'TMM',
  Tnd = 'TND',
  Top = 'TOP',
  Trl = 'TRL',
  Try = 'TRY',
  Ttd = 'TTD',
  Twd = 'TWD',
  Tzs = 'TZS',
  Uah = 'UAH',
  Ugx = 'UGX',
  Usd = 'USD',
  Uyu = 'UYU',
  Uzs = 'UZS',
  Veb = 'VEB',
  Vef = 'VEF',
  Vnd = 'VND',
  Vuv = 'VUV',
  Wst = 'WST',
  Xcd = 'XCD',
  Xof = 'XOF',
  Xpf = 'XPF',
  Yer = 'YER',
  Ytl = 'YTL',
  Zar = 'ZAR',
  Zmk = 'ZMK',
  Zwd = 'ZWD'
}

/** Contains custom attribute value and metadata details. */
export type CustomAttribute = {
  __typename?: 'CustomAttribute';
  /** Attribute metadata details. */
  attribute_metadata?: Maybe<AttributeMetadataInterface>;
  /** Attribute value represented as entered data using input type like text field. */
  entered_attribute_value?: Maybe<EnteredAttributeValue>;
  /** Attribute value represented as selected options using input type like select. */
  selected_attribute_options?: Maybe<SelectedAttributeOption>;
};

/** CustomAttributeMetadata defines an array of attribute_codes and entity_types */
export type CustomAttributeMetadata = {
  __typename?: 'CustomAttributeMetadata';
  /** An array of attributes */
  items?: Maybe<Array<Maybe<Attribute>>>;
};

export enum CustomAttributesListsEnum {
  AdvancedCatalogSearch = 'ADVANCED_CATALOG_SEARCH',
  ProductsCompare = 'PRODUCTS_COMPARE',
  ProductsListing = 'PRODUCTS_LISTING',
  ProductDetailsPage = 'PRODUCT_DETAILS_PAGE',
  ProductFilter = 'PRODUCT_FILTER',
  ProductSearchResultsFilter = 'PRODUCT_SEARCH_RESULTS_FILTER',
  ProductSort = 'PRODUCT_SORT'
}

/** Customer defines the customer name and address and other details */
export type Customer = {
  __typename?: 'Customer';
  /** An array containing the customer's shipping and billing addresses */
  addresses?: Maybe<Array<Maybe<CustomerAddress>>>;
  /** Indicates whether the customer has enabled remote shopping assistance */
  allow_remote_shopping_assistance: Scalars['Boolean'];
  /** The contents of the customer's compare list */
  compare_list?: Maybe<CompareList>;
  /** Timestamp indicating when the account was created */
  created_at?: Maybe<Scalars['String']>;
  /** The customer's date of birth */
  date_of_birth?: Maybe<Scalars['String']>;
  /** The ID assigned to the billing address */
  default_billing?: Maybe<Scalars['String']>;
  /** The ID assigned to the shipping address */
  default_shipping?: Maybe<Scalars['String']>;
  /**
   * The customer's date of birth
   * @deprecated Use `date_of_birth` instead
   */
  dob?: Maybe<Scalars['String']>;
  /** The customer's email address. Required */
  email?: Maybe<Scalars['String']>;
  /** The customer's first name */
  firstname?: Maybe<Scalars['String']>;
  /** The customer's gender (Male - 1, Female - 2) */
  gender?: Maybe<Scalars['Int']>;
  /** Details about all of the customer's gift registries */
  gift_registries?: Maybe<Array<Maybe<GiftRegistry>>>;
  /** Details about a specific gift registry */
  gift_registry?: Maybe<GiftRegistry>;
  /** @deprecated Customer group should not be exposed in the storefront scenarios */
  group_id?: Maybe<Scalars['Int']>;
  /**
   * The ID assigned to the customer
   * @deprecated id is not needed as part of Customer because on server side it can be identified based on customer token used for authentication. There is no need to know customer ID on the client side.
   */
  id?: Maybe<Scalars['Int']>;
  /** Indicates whether the customer is subscribed to the company's newsletter */
  is_subscribed?: Maybe<Scalars['Boolean']>;
  /** The customer's family name */
  lastname?: Maybe<Scalars['String']>;
  /** The customer's middle name */
  middlename?: Maybe<Scalars['String']>;
  orders?: Maybe<CustomerOrders>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']>;
  /** Retrieves details about the specified return request from the unique ID for a `Return` object */
  return?: Maybe<Return>;
  /** Information about the customer's return requests. */
  returns?: Maybe<Returns>;
  /** Contains the customer's product reviews */
  reviews: ProductReviews;
  /** Customer reward points details */
  reward_points?: Maybe<RewardPoints>;
  /** Contains the store credit information applied for the logged in customer */
  store_credit?: Maybe<CustomerStoreCredit>;
  /** A value such as Sr., Jr., or III */
  suffix?: Maybe<Scalars['String']>;
  /** The customer's Value-added tax (VAT) number (for corporate customers) */
  taxvat?: Maybe<Scalars['String']>;
  /**
   * Contains a customer's wish lists
   * @deprecated Use `Customer.wishlists` or `Customer.wishlist_v2`
   */
  wishlist: Wishlist;
  /** Retrieve the specified wish list identified by the unique ID for a `Wishlist` object */
  wishlist_v2?: Maybe<Wishlist>;
  /**
   * An array of wishlists. In Magento Open Source, customers are limited to one
   * wish list. The number of wish lists is configurable for Magento Commerce
   */
  wishlists: Array<Maybe<Wishlist>>;
};


/** Customer defines the customer name and address and other details */
export type CustomerGift_RegistryArgs = {
  giftRegistryUid: Scalars['ID'];
};


/** Customer defines the customer name and address and other details */
export type CustomerOrdersArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<CustomerOrdersFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


/** Customer defines the customer name and address and other details */
export type CustomerReturnArgs = {
  uid: Scalars['ID'];
};


/** Customer defines the customer name and address and other details */
export type CustomerReturnsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


/** Customer defines the customer name and address and other details */
export type CustomerReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


/** Customer defines the customer name and address and other details */
export type CustomerWishlist_V2Args = {
  id: Scalars['ID'];
};


/** Customer defines the customer name and address and other details */
export type CustomerWishlistsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

/** CustomerAddress contains detailed information about a customer's billing and shipping addresses */
export type CustomerAddress = {
  __typename?: 'CustomerAddress';
  /** The city or town */
  city?: Maybe<Scalars['String']>;
  /** The customer's company */
  company?: Maybe<Scalars['String']>;
  /** The customer's country */
  country_code?: Maybe<CountryCodeEnum>;
  /**
   * The customer's country
   * @deprecated Use `country_code` instead.
   */
  country_id?: Maybe<Scalars['String']>;
  /** @deprecated Custom attributes should not be put into container */
  custom_attributes?: Maybe<Array<Maybe<CustomerAddressAttribute>>>;
  /**
   * The customer ID
   * @deprecated customer_id is not needed as part of CustomerAddress, address ID (id) is unique identifier for the addresses.
   */
  customer_id?: Maybe<Scalars['Int']>;
  /** Indicates whether the address is the default billing address */
  default_billing?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the address is the default shipping address */
  default_shipping?: Maybe<Scalars['Boolean']>;
  /** Address extension attributes */
  extension_attributes?: Maybe<Array<Maybe<CustomerAddressAttribute>>>;
  /** The fax number */
  fax?: Maybe<Scalars['String']>;
  /** The first name of the person associated with the shipping/billing address */
  firstname?: Maybe<Scalars['String']>;
  /** The ID assigned to the address object */
  id?: Maybe<Scalars['Int']>;
  /** The family name of the person associated with the shipping/billing address */
  lastname?: Maybe<Scalars['String']>;
  /** The middle name of the person associated with the shipping/billing address */
  middlename?: Maybe<Scalars['String']>;
  /** The customer's ZIP or postal code */
  postcode?: Maybe<Scalars['String']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']>;
  /** An object containing the region name, region code, and region ID */
  region?: Maybe<CustomerAddressRegion>;
  /** The unique ID for a pre-defined region */
  region_id?: Maybe<Scalars['Int']>;
  /** An array of strings that define the street number and name */
  street?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** A value such as Sr., Jr., or III */
  suffix?: Maybe<Scalars['String']>;
  /** The telephone number */
  telephone?: Maybe<Scalars['String']>;
  /** The customer's Value-added tax (VAT) number (for corporate customers) */
  vat_id?: Maybe<Scalars['String']>;
};

export type CustomerAddressAttribute = {
  __typename?: 'CustomerAddressAttribute';
  /** Attribute code */
  attribute_code?: Maybe<Scalars['String']>;
  /** Attribute value */
  value?: Maybe<Scalars['String']>;
};

export type CustomerAddressAttributeInput = {
  /** Attribute code */
  attribute_code: Scalars['String'];
  /** Attribute value */
  value: Scalars['String'];
};

export type CustomerAddressInput = {
  /** The city or town */
  city?: InputMaybe<Scalars['String']>;
  /** The customer's company */
  company?: InputMaybe<Scalars['String']>;
  /** The customer's country */
  country_code?: InputMaybe<CountryCodeEnum>;
  /** Deprecated: use `country_code` instead. */
  country_id?: InputMaybe<CountryCodeEnum>;
  /** Deprecated: Custom attributes should not be put into container. */
  custom_attributes?: InputMaybe<Array<InputMaybe<CustomerAddressAttributeInput>>>;
  /** Indicates whether the address is the default billing address */
  default_billing?: InputMaybe<Scalars['Boolean']>;
  /** Indicates whether the address is the default shipping address */
  default_shipping?: InputMaybe<Scalars['Boolean']>;
  /** The fax number */
  fax?: InputMaybe<Scalars['String']>;
  /** The first name of the person associated with the shipping/billing address */
  firstname?: InputMaybe<Scalars['String']>;
  /** The family name of the person associated with the shipping/billing address */
  lastname?: InputMaybe<Scalars['String']>;
  /** The middle name of the person associated with the shipping/billing address */
  middlename?: InputMaybe<Scalars['String']>;
  /** The customer's ZIP or postal code */
  postcode?: InputMaybe<Scalars['String']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars['String']>;
  /** An object containing the region name, region code, and region ID */
  region?: InputMaybe<CustomerAddressRegionInput>;
  /** An array of strings that define the street number and name */
  street?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** A value such as Sr., Jr., or III */
  suffix?: InputMaybe<Scalars['String']>;
  /** The telephone number */
  telephone?: InputMaybe<Scalars['String']>;
  /** The customer's Tax/VAT number (for corporate customers) */
  vat_id?: InputMaybe<Scalars['String']>;
};

/** CustomerAddressRegion defines the customer's state or province */
export type CustomerAddressRegion = {
  __typename?: 'CustomerAddressRegion';
  /** The state or province name */
  region?: Maybe<Scalars['String']>;
  /** The address region code */
  region_code?: Maybe<Scalars['String']>;
  /** The unique ID for a pre-defined region */
  region_id?: Maybe<Scalars['Int']>;
};

/** CustomerAddressRegionInput defines the customer's state or province */
export type CustomerAddressRegionInput = {
  /** The state or province name */
  region?: InputMaybe<Scalars['String']>;
  /** The address region code */
  region_code?: InputMaybe<Scalars['String']>;
  /** The unique ID for a pre-defined region */
  region_id?: InputMaybe<Scalars['Int']>;
};

export type CustomerCreateInput = {
  /** Indicates whether the customer has enabled remote shopping assistance */
  allow_remote_shopping_assistance?: InputMaybe<Scalars['Boolean']>;
  /** The customer's date of birth */
  date_of_birth?: InputMaybe<Scalars['String']>;
  /** Deprecated: Use `date_of_birth` instead */
  dob?: InputMaybe<Scalars['String']>;
  /** The customer's email address. Required for customer creation */
  email: Scalars['String'];
  /** The customer's first name */
  firstname: Scalars['String'];
  /** The customer's gender (Male - 1, Female - 2) */
  gender?: InputMaybe<Scalars['Int']>;
  /** Indicates whether the customer is subscribed to the company's newsletter */
  is_subscribed?: InputMaybe<Scalars['Boolean']>;
  /** The customer's family name */
  lastname: Scalars['String'];
  /** The customer's middle name */
  middlename?: InputMaybe<Scalars['String']>;
  /** The customer's password */
  password?: InputMaybe<Scalars['String']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars['String']>;
  /** A value such as Sr., Jr., or III */
  suffix?: InputMaybe<Scalars['String']>;
  /** The customer's Tax/VAT number (for corporate customers) */
  taxvat?: InputMaybe<Scalars['String']>;
};

export type CustomerDownloadableProduct = {
  __typename?: 'CustomerDownloadableProduct';
  date?: Maybe<Scalars['String']>;
  download_url?: Maybe<Scalars['String']>;
  order_increment_id?: Maybe<Scalars['String']>;
  remaining_downloads?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type CustomerDownloadableProducts = {
  __typename?: 'CustomerDownloadableProducts';
  /** List of purchased downloadable items */
  items?: Maybe<Array<Maybe<CustomerDownloadableProduct>>>;
};

export type CustomerInput = {
  /** The customer's date of birth */
  date_of_birth?: InputMaybe<Scalars['String']>;
  /** Deprecated: Use `date_of_birth` instead */
  dob?: InputMaybe<Scalars['String']>;
  /** The customer's email address. Required for customer creation */
  email?: InputMaybe<Scalars['String']>;
  /** The customer's first name */
  firstname?: InputMaybe<Scalars['String']>;
  /** The customer's gender (Male - 1, Female - 2) */
  gender?: InputMaybe<Scalars['Int']>;
  /** Indicates whether the customer is subscribed to the company's newsletter */
  is_subscribed?: InputMaybe<Scalars['Boolean']>;
  /** The customer's family name */
  lastname?: InputMaybe<Scalars['String']>;
  /** The customer's middle name */
  middlename?: InputMaybe<Scalars['String']>;
  /** The customer's password */
  password?: InputMaybe<Scalars['String']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars['String']>;
  /** A value such as Sr., Jr., or III */
  suffix?: InputMaybe<Scalars['String']>;
  /** The customer's Tax/VAT number (for corporate customers) */
  taxvat?: InputMaybe<Scalars['String']>;
};

/** Contains details about each of the customer's orders */
export type CustomerOrder = {
  __typename?: 'CustomerOrder';
  /** The billing address for the order */
  billing_address?: Maybe<OrderAddress>;
  /** The shipping carrier for the order delivery */
  carrier?: Maybe<Scalars['String']>;
  /** Comments about the order */
  comments?: Maybe<Array<Maybe<SalesCommentItem>>>;
  /** @deprecated Use the order_date attribute instead */
  created_at?: Maybe<Scalars['String']>;
  /** A list of credit memos */
  credit_memos?: Maybe<Array<Maybe<CreditMemo>>>;
  /** The entered gift message for the order */
  gift_message?: Maybe<GiftMessage>;
  /** Whether customer requested gift receipt for the order */
  gift_receipt_included: Scalars['Boolean'];
  /** The selected gift wrapping for the order */
  gift_wrapping?: Maybe<GiftWrapping>;
  /** @deprecated Use the totals.grand_total attribute instead */
  grand_total?: Maybe<Scalars['Float']>;
  /** The unique ID for a `CustomerOrder` object */
  id: Scalars['ID'];
  /** @deprecated Use the id attribute instead */
  increment_id?: Maybe<Scalars['String']>;
  /** A list of invoices for the order */
  invoices: Array<Maybe<Invoice>>;
  /** An array containing the items purchased in this order */
  items?: Maybe<Array<Maybe<OrderItemInterface>>>;
  /** A list of order items eligible to be in a return request */
  items_eligible_for_return?: Maybe<Array<Maybe<OrderItemInterface>>>;
  /** The order number */
  number: Scalars['String'];
  /** The date the order was placed */
  order_date: Scalars['String'];
  /** @deprecated Use the number attribute instead */
  order_number: Scalars['String'];
  /** Payment details for the order */
  payment_methods?: Maybe<Array<Maybe<OrderPaymentMethod>>>;
  /** Whether customer requested printed card for the order */
  printed_card_included: Scalars['Boolean'];
  /** Return requests associated with this order. */
  returns?: Maybe<Returns>;
  /** A list of shipments for the order */
  shipments?: Maybe<Array<Maybe<OrderShipment>>>;
  /** The shipping address for the order */
  shipping_address?: Maybe<OrderAddress>;
  /** The delivery method for the order */
  shipping_method?: Maybe<Scalars['String']>;
  /** The current status of the order */
  status: Scalars['String'];
  /** Contains details about the calculated totals for this order */
  total?: Maybe<OrderTotal>;
};


/** Contains details about each of the customer's orders */
export type CustomerOrderReturnsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

/** The collection of orders that match the conditions defined in the filter */
export type CustomerOrders = {
  __typename?: 'CustomerOrders';
  /** An array of customer orders */
  items: Array<Maybe<CustomerOrder>>;
  /** An object that includes the current_page, page_info, and page_size values specified in the query */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The total count of customer orders */
  total_count?: Maybe<Scalars['Int']>;
};

/** Identifies the filter to use for filtering orders. */
export type CustomerOrdersFilterInput = {
  /** Filters by order number. */
  number?: InputMaybe<FilterStringTypeInput>;
};

export type CustomerOutput = {
  __typename?: 'CustomerOutput';
  customer: Customer;
};

export type CustomerPaymentTokens = {
  __typename?: 'CustomerPaymentTokens';
  /** An array of payment tokens */
  items: Array<Maybe<PaymentToken>>;
};

/** Contains store credit information with balance and history */
export type CustomerStoreCredit = {
  __typename?: 'CustomerStoreCredit';
  /**
   * Customer Store credit balance history. If the history or store credit feature
   * is disabled, then a null value will be returned.
   */
  balance_history?: Maybe<CustomerStoreCreditHistory>;
  /** Current balance on store credit */
  current_balance?: Maybe<Money>;
  /** Indicates whether store credits are enabled. If the feature is disabled, then the balance will not be returned */
  enabled?: Maybe<Scalars['Boolean']>;
};


/** Contains store credit information with balance and history */
export type CustomerStoreCreditBalance_HistoryArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

/** Lists changes to the amount of store credit available to the customer. */
export type CustomerStoreCreditHistory = {
  __typename?: 'CustomerStoreCreditHistory';
  /** An array containing information about changes to the store credit available to the customer. */
  items?: Maybe<Array<Maybe<CustomerStoreCreditHistoryItem>>>;
  /** An object that includes the current_page page_info and page_size values specified in the query. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The number of items returned. */
  total_count?: Maybe<Scalars['Int']>;
};

/** Defines store credit history information */
export type CustomerStoreCreditHistoryItem = {
  __typename?: 'CustomerStoreCreditHistoryItem';
  /** Action that was made on the store credit */
  action?: Maybe<Scalars['String']>;
  /** The store credit available to the customer as a result of this action.  */
  actual_balance?: Maybe<Money>;
  /** The amount added to or subtracted from the store credit as a result of this action. */
  balance_change?: Maybe<Money>;
  /** Date and time when the store credit change was made */
  date_time_changed?: Maybe<Scalars['String']>;
};

export type CustomerToken = {
  __typename?: 'CustomerToken';
  /** The customer token */
  token?: Maybe<Scalars['String']>;
};

export type CustomerUpdateInput = {
  /** Indicates whether the customer has enabled remote shopping assistance */
  allow_remote_shopping_assistance?: InputMaybe<Scalars['Boolean']>;
  /** The customer's date of birth */
  date_of_birth?: InputMaybe<Scalars['String']>;
  /** Deprecated: Use `date_of_birth` instead */
  dob?: InputMaybe<Scalars['String']>;
  /** The customer's first name */
  firstname?: InputMaybe<Scalars['String']>;
  /** The customer's gender (Male - 1, Female - 2) */
  gender?: InputMaybe<Scalars['Int']>;
  /** Indicates whether the customer is subscribed to the company's newsletter */
  is_subscribed?: InputMaybe<Scalars['Boolean']>;
  /** The customer's family name */
  lastname?: InputMaybe<Scalars['String']>;
  /** The customer's middle name */
  middlename?: InputMaybe<Scalars['String']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars['String']>;
  /** A value such as Sr., Jr., or III */
  suffix?: InputMaybe<Scalars['String']>;
  /** The customer's Tax/VAT number (for corporate customers) */
  taxvat?: InputMaybe<Scalars['String']>;
};

/** CustomizableAreaOption contains information about a text area that is defined as part of a customizable option. */
export type CustomizableAreaOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableAreaOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>;
  /** The Stock Keeping Unit of the base product. */
  product_sku?: Maybe<Scalars['String']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID'];
  /** An object that defines a text area. */
  value?: Maybe<CustomizableAreaValue>;
};

/** CustomizableAreaValue defines the price and sku of a product whose page contains a customized text area. */
export type CustomizableAreaValue = {
  __typename?: 'CustomizableAreaValue';
  /** The maximum number of characters that can be entered for this customizable option. */
  max_characters?: Maybe<Scalars['Int']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableAreaValue` object. */
  uid: Scalars['ID'];
};

/**
 * CustomizableCheckbbixOption contains information about a set of checkbox values
 * that are defined as part of a customizable option.
 */
export type CustomizableCheckboxOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableCheckboxOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID'];
  /** An array that defines a set of checkbox values. */
  value?: Maybe<Array<Maybe<CustomizableCheckboxValue>>>;
};

/** CustomizableCheckboxValue defines the price and sku of a product whose page contains a customized set of checkbox values. */
export type CustomizableCheckboxValue = {
  __typename?: 'CustomizableCheckboxValue';
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** The order in which the checkbox value is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableCheckboxValue` object. */
  uid: Scalars['ID'];
};

/** CustomizableDateOption contains information about a date picker that is defined as part of a customizable option. */
export type CustomizableDateOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableDateOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>;
  /** The Stock Keeping Unit of the base product. */
  product_sku?: Maybe<Scalars['String']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID'];
  /** An object that defines a date field in a customizable option. */
  value?: Maybe<CustomizableDateValue>;
};

/** This enumeration customizable date type. */
export enum CustomizableDateTypeEnum {
  Date = 'DATE',
  DateTime = 'DATE_TIME',
  Time = 'TIME'
}

/** CustomizableDateValue defines the price and sku of a product whose page contains a customized date picker. */
export type CustomizableDateValue = {
  __typename?: 'CustomizableDateValue';
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** DATE, DATE_TIME or TIME */
  type?: Maybe<CustomizableDateTypeEnum>;
  /** The unique ID for a `CustomizableDateValue` object. */
  uid: Scalars['ID'];
};

/** CustomizableDropDownOption contains information about a drop down menu that is defined as part of a customizable option. */
export type CustomizableDropDownOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableDropDownOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID'];
  /** An array that defines the set of options for a drop down menu. */
  value?: Maybe<Array<Maybe<CustomizableDropDownValue>>>;
};

/** CustomizableDropDownValue defines the price and sku of a product whose page contains a customized drop down menu. */
export type CustomizableDropDownValue = {
  __typename?: 'CustomizableDropDownValue';
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableDropDownValue` object. */
  uid: Scalars['ID'];
};

/** CustomizableFieldOption contains information about a text field that is defined as part of a customizable option. */
export type CustomizableFieldOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableFieldOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>;
  /** The Stock Keeping Unit of the base product. */
  product_sku?: Maybe<Scalars['String']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID'];
  /** An object that defines a text field. */
  value?: Maybe<CustomizableFieldValue>;
};

/** CustomizableFieldValue defines the price and sku of a product whose page contains a customized text field. */
export type CustomizableFieldValue = {
  __typename?: 'CustomizableFieldValue';
  /** The maximum number of characters that can be entered for this customizable option. */
  max_characters?: Maybe<Scalars['Int']>;
  /** The price of the custom value. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableFieldValue` object. */
  uid: Scalars['ID'];
};

/** CustomizableFileOption contains information about a file picker that is defined as part of a customizable option. */
export type CustomizableFileOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableFileOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>;
  /** The Stock Keeping Unit of the base product. */
  product_sku?: Maybe<Scalars['String']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID'];
  /** An object that defines a file value. */
  value?: Maybe<CustomizableFileValue>;
};

/** CustomizableFileValue defines the price and sku of a product whose page contains a customized file picker. */
export type CustomizableFileValue = {
  __typename?: 'CustomizableFileValue';
  /** The file extension to accept. */
  file_extension?: Maybe<Scalars['String']>;
  /** The maximum width of an image. */
  image_size_x?: Maybe<Scalars['Int']>;
  /** The maximum height of an image. */
  image_size_y?: Maybe<Scalars['Int']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableFileValue` object. */
  uid: Scalars['ID'];
};

/** CustomizableMultipleOption contains information about a multiselect that is defined as part of a customizable option. */
export type CustomizableMultipleOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableMultipleOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID'];
  /** An array that defines the set of options for a multiselect. */
  value?: Maybe<Array<Maybe<CustomizableMultipleValue>>>;
};

/** CustomizableMultipleValue defines the price and sku of a product whose page contains a customized multiselect. */
export type CustomizableMultipleValue = {
  __typename?: 'CustomizableMultipleValue';
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableMultipleValue` object. */
  uid: Scalars['ID'];
};

export type CustomizableOptionInput = {
  /** The customizable option id of the product */
  id?: InputMaybe<Scalars['Int']>;
  /** The string value of the option */
  value_string: Scalars['String'];
};

/**
 * The CustomizableOptionInterface contains basic information about a customizable
 * option. It can be implemented by several types of configurable options.
 */
export type CustomizableOptionInterface = {
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID'];
};

/** CustomizableProductInterface contains information about customizable product options. */
export type CustomizableProductInterface = {
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
};

/** CustomizableRadioOption contains information about a set of radio buttons that are defined as part of a customizable option. */
export type CustomizableRadioOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableRadioOption';
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID'];
  /** An array that defines a set of radio buttons. */
  value?: Maybe<Array<Maybe<CustomizableRadioValue>>>;
};

/** CustomizableRadioValue defines the price and sku of a product whose page contains a customized set of radio buttons. */
export type CustomizableRadioValue = {
  __typename?: 'CustomizableRadioValue';
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** The order in which the radio button is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableRadioValue` object. */
  uid: Scalars['ID'];
};

export type DeleteCompareListOutput = {
  __typename?: 'DeleteCompareListOutput';
  /** Indicates whether the compare list was successfully deleted */
  result: Scalars['Boolean'];
};

export type DeletePaymentTokenOutput = {
  __typename?: 'DeletePaymentTokenOutput';
  customerPaymentTokens?: Maybe<CustomerPaymentTokens>;
  result: Scalars['Boolean'];
};

export type DeleteWishlistOutput = {
  __typename?: 'DeleteWishlistOutput';
  /** Indicates whether the wish list was deleted */
  status: Scalars['Boolean'];
  /** A list of undeleted wish lists */
  wishlists: Array<Maybe<Wishlist>>;
};

/** Defines an individual discount. A discount can be applied to the cart as a whole or to an item. */
export type Discount = {
  __typename?: 'Discount';
  /** The amount of the discount */
  amount: Money;
  /** A description of the discount */
  label: Scalars['String'];
};

/** Downloadable Cart Item */
export type DownloadableCartItem = CartItemInterface & {
  __typename?: 'DownloadableCartItem';
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<CartItemError>>>;
  /** @deprecated Use `uid` instead */
  id: Scalars['String'];
  /** An array containing information about the links for the added to cart downloadable product */
  links?: Maybe<Array<Maybe<DownloadableProductLinks>>>;
  prices?: Maybe<CartItemPrices>;
  product: ProductInterface;
  quantity: Scalars['Float'];
  /** DownloadableProductSamples defines characteristics of a downloadable product */
  samples?: Maybe<Array<Maybe<DownloadableProductSamples>>>;
  /** The unique ID for a `CartItemInterface` object */
  uid: Scalars['ID'];
};

export type DownloadableCreditMemoItem = CreditMemoItemInterface & {
  __typename?: 'DownloadableCreditMemoItem';
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** A list of downloadable links that are refunded from the downloadable product */
  downloadable_links?: Maybe<Array<Maybe<DownloadableItemsLinks>>>;
  /** The unique ID for a `CreditMemoItemInterface` object */
  id: Scalars['ID'];
  /** The order item the credit memo is applied to */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product, including selected options */
  product_sale_price: Money;
  /** SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of refunded items */
  quantity_refunded?: Maybe<Scalars['Float']>;
};

export enum DownloadableFileTypeEnum {
  File = 'FILE',
  Url = 'URL'
}

export type DownloadableInvoiceItem = InvoiceItemInterface & {
  __typename?: 'DownloadableInvoiceItem';
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** A list of downloadable links that are invoiced from the downloadable product */
  downloadable_links?: Maybe<Array<Maybe<DownloadableItemsLinks>>>;
  /** The unique ID for a `InvoiceItemInterface` object */
  id: Scalars['ID'];
  /** Contains details about an individual order item */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product including selected options */
  product_sale_price: Money;
  /** The SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of invoiced items */
  quantity_invoiced?: Maybe<Scalars['Float']>;
};

/** DownloadableProductLinks defines characteristics of a downloadable product */
export type DownloadableItemsLinks = {
  __typename?: 'DownloadableItemsLinks';
  /** A number indicating the sort order */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name of the link */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `DownloadableItemsLinks` object. */
  uid: Scalars['ID'];
};

export type DownloadableOrderItem = OrderItemInterface & {
  __typename?: 'DownloadableOrderItem';
  /** The final discount information for the product */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** A list of downloadable links that are ordered from the downloadable product */
  downloadable_links?: Maybe<Array<Maybe<DownloadableItemsLinks>>>;
  /** Indicates whether the order item is eligible is eligible to be in a return request */
  eligible_for_return?: Maybe<Scalars['Boolean']>;
  /** The entered option for the base product, such as a logo or image */
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The selected gift wrapping for the order item */
  gift_wrapping?: Maybe<GiftWrapping>;
  /** The unique ID for a `OrderItemInterface` object */
  id: Scalars['ID'];
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price of the base product, including selected options */
  product_sale_price: Money;
  /** The SKU of the base product */
  product_sku: Scalars['String'];
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']>;
  /** URL key of the base product */
  product_url_key?: Maybe<Scalars['String']>;
  /** The number of canceled items */
  quantity_canceled?: Maybe<Scalars['Float']>;
  /** The number of invoiced items */
  quantity_invoiced?: Maybe<Scalars['Float']>;
  /** The number of units ordered for this item */
  quantity_ordered?: Maybe<Scalars['Float']>;
  /** The number of refunded items */
  quantity_refunded?: Maybe<Scalars['Float']>;
  /** The number of returned items */
  quantity_returned?: Maybe<Scalars['Float']>;
  /** The number of shipped items */
  quantity_shipped?: Maybe<Scalars['Float']>;
  /** The selected options for the base product, such as color or size */
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item */
  status?: Maybe<Scalars['String']>;
};

/** DownloadableProduct defines a product that the shopper downloads */
export type DownloadableProduct = CustomizableProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'DownloadableProduct';
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']>;
  /**
   * Relative canonical URL. This value is returned only if the system setting 'Use
   * Canonical Link Meta Tag For Products' is enabled
   */
  canonical_url?: Maybe<Scalars['String']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  color?: Maybe<Scalars['Int']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** List of product custom attributes details. */
  custom_attributes: Array<Maybe<CustomAttribute>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** An array containing information about the links for this downloadable product */
  downloadable_product_links?: Maybe<Array<Maybe<DownloadableProductLinks>>>;
  /** An array containing information about samples of this downloadable product. */
  downloadable_product_samples?: Maybe<Array<Maybe<DownloadableProductSamples>>>;
  fashion_color?: Maybe<Scalars['Int']>;
  fashion_material?: Maybe<Scalars['String']>;
  fashion_size?: Maybe<Scalars['Int']>;
  fashion_style?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['Int']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']>;
  has_video?: Maybe<Scalars['Int']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** Indicates whether the product can be returned */
  is_returnable?: Maybe<Scalars['String']>;
  /** A value of 1 indicates that each link in the array must be purchased separately */
  links_purchased_separately?: Maybe<Scalars['Int']>;
  /** The heading above the list of downloadable products */
  links_title?: Maybe<Scalars['String']>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']>;
  /** An array of Media Gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use product's `media_gallery` instead
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']>;
  /**
   * The beginning date for new product listings, and determines if the product is featured as a new product.
   * @deprecated The field should not be used on the storefront.
   */
  new_from_date?: Maybe<Scalars['String']>;
  /**
   * The end date for new product listings.
   * @deprecated The field should not be used on the storefront.
   */
  new_to_date?: Maybe<Scalars['String']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  /**
   * A ProductPrices object, indicating the price of an item.
   * @deprecated Use price_range for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** A PriceRange object, indicating the range of prices for the product */
  price_range: PriceRange;
  /** An array of TierPrice objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** An array of ProductLinks objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /**
   * Contains 0 when there is no redirect error. A value of 301 indicates the URL
   * of the requested resource has been changed permanently, while a value of 302
   * indicates a temporary redirect
   */
  redirect_code: Scalars['Int'];
  /** Related Products */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original */
  relative_url?: Maybe<Scalars['String']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']>;
  /** The end date that a product has a special price. */
  special_to_date?: Maybe<Scalars['String']>;
  staged: Scalars['Boolean'];
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** The file name of a swatch image */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use __typename instead.
   */
  type_id?: Maybe<Scalars['String']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  video_file?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
};


/** DownloadableProduct defines a product that the shopper downloads */
export type DownloadableProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type DownloadableProductCartItemInput = {
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  data: CartItemInput;
  downloadable_product_links?: InputMaybe<Array<InputMaybe<DownloadableProductLinksInput>>>;
};

/** DownloadableProductLinks defines characteristics of a downloadable product */
export type DownloadableProductLinks = {
  __typename?: 'DownloadableProductLinks';
  /** @deprecated This information should not be exposed on frontend */
  id?: Maybe<Scalars['Int']>;
  /** @deprecated This information should not be exposed on frontend */
  is_shareable?: Maybe<Scalars['Boolean']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  link_type?: Maybe<DownloadableFileTypeEnum>;
  /** @deprecated This information should not be exposed on frontend */
  number_of_downloads?: Maybe<Scalars['Int']>;
  /** The price of the downloadable product */
  price?: Maybe<Scalars['Float']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_file?: Maybe<Scalars['String']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_type?: Maybe<DownloadableFileTypeEnum>;
  /** URL to the downloadable sample */
  sample_url?: Maybe<Scalars['String']>;
  /** A number indicating the sort order */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name of the link */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `DownloadableProductLinks` object. */
  uid: Scalars['ID'];
};

export type DownloadableProductLinksInput = {
  link_id: Scalars['Int'];
};

/** DownloadableProductSamples defines characteristics of a downloadable product */
export type DownloadableProductSamples = {
  __typename?: 'DownloadableProductSamples';
  /** @deprecated This information should not be exposed on frontend */
  id?: Maybe<Scalars['Int']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_file?: Maybe<Scalars['String']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_type?: Maybe<DownloadableFileTypeEnum>;
  /** URL to the downloadable sample */
  sample_url?: Maybe<Scalars['String']>;
  /** A number indicating the sort order */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name of the sample */
  title?: Maybe<Scalars['String']>;
};

/** A downloadable product wish list item */
export type DownloadableWishlistItem = WishlistItemInterface & {
  __typename?: 'DownloadableWishlistItem';
  /** The date and time the item was added to the wish list */
  added_at: Scalars['String'];
  /** Custom options selected for the wish list item */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item */
  description?: Maybe<Scalars['String']>;
  /** The unique ID for a `WishlistItemInterface` object */
  id: Scalars['ID'];
  /** An array containing information about the selected links */
  links_v2?: Maybe<Array<Maybe<DownloadableProductLinks>>>;
  /** Product details of the wish list item */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item */
  quantity: Scalars['Float'];
  /** An array containing information about the selected samples */
  samples?: Maybe<Array<Maybe<DownloadableProductSamples>>>;
};

export type DynamicBlock = {
  __typename?: 'DynamicBlock';
  /** Contains the renderable HTML code of the dynamic block */
  content: ComplexTextValue;
  /** The unique ID of a `DynamicBlock` object */
  uid: Scalars['ID'];
};

export enum DynamicBlockLocationEnum {
  Content = 'CONTENT',
  Footer = 'FOOTER',
  Header = 'HEADER',
  Left = 'LEFT',
  Right = 'RIGHT'
}

export enum DynamicBlockTypeEnum {
  CartPriceRuleRelated = 'CART_PRICE_RULE_RELATED',
  CatalogPriceRuleRelated = 'CATALOG_PRICE_RULE_RELATED',
  Specified = 'SPECIFIED'
}

export type DynamicBlocks = {
  __typename?: 'DynamicBlocks';
  /** An array containing individual dynamic blocks */
  items: Array<Maybe<DynamicBlock>>;
  /** Metadata for pagination rendering */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The number of returned dynamic blocks */
  total_count: Scalars['Int'];
};

export type DynamicBlocksFilterInput = {
  /** An array of dynamic block UIDs to filter on */
  dynamic_block_uids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** An array indicating the locations the dynamic block can be placed */
  locations?: InputMaybe<Array<InputMaybe<DynamicBlockLocationEnum>>>;
  /** A value indicating the type of dynamic block to filter on */
  type: DynamicBlockTypeEnum;
};

export type EnteredAttributeValue = {
  __typename?: 'EnteredAttributeValue';
  /** Attribute value. */
  value?: Maybe<Scalars['String']>;
};

export type EnteredCustomAttributeInput = {
  /** A string that identifies the entered custom attribute */
  attribute_code: Scalars['String'];
  /** The text or other entered value */
  value: Scalars['String'];
};

/** Defines a customer-entered option */
export type EnteredOptionInput = {
  /**
   * The unique ID for a `CustomizableFieldOption`, `CustomizableFileOption`,
   * `CustomizableAreaOption`, etc. of `CustomizableOptionInterface` objects
   */
  uid: Scalars['ID'];
  /** Text the customer entered */
  value: Scalars['String'];
};

/** EntityUrl is an output object containing the `id`, `relative_url`, and `type` attributes */
export type EntityUrl = {
  __typename?: 'EntityUrl';
  /** @deprecated The canonical_url field is deprecated, use relative_url instead. */
  canonical_url?: Maybe<Scalars['String']>;
  /**
   * The unique ID for a `ProductInterface`, `CategoryInterface`, `CmsPage`, etc.
   * object associated with the specified url. This could be a product UID,
   * category UID, or cms page UID.
   */
  entity_uid?: Maybe<Scalars['ID']>;
  /**
   * The ID assigned to the object associated with the specified url. This could be a product ID, category ID, or page ID.
   * @deprecated Use `entity_uid` instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** 301 or 302 HTTP code for url permanent or temporary redirect or 0 for the 200 no redirect */
  redirectCode?: Maybe<Scalars['Int']>;
  /** The internal relative URL. If the specified  url is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
};

export type ExchangeRate = {
  __typename?: 'ExchangeRate';
  currency_to?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['Float']>;
};

/** Defines a filter that matches the input exactly. */
export type FilterEqualTypeInput = {
  /** A string to filter on */
  eq?: InputMaybe<Scalars['String']>;
  /** An array of values to filter on */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Defines a filter that performs a fuzzy search. */
export type FilterMatchTypeInput = {
  /** One or more words to filter on */
  match?: InputMaybe<Scalars['String']>;
};

/** Defines a filter that matches a range of values, such as prices or dates. */
export type FilterRangeTypeInput = {
  /** The beginning of the range */
  from?: InputMaybe<Scalars['String']>;
  /** The end of the range */
  to?: InputMaybe<Scalars['String']>;
};

/** Defines a filter for an input string. */
export type FilterStringTypeInput = {
  /** Filters items that are exactly the same as the specified string. */
  eq?: InputMaybe<Scalars['String']>;
  /** Filters items that are exactly the same as entries specified in an array of strings. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Defines a filter that performs a fuzzy search using the specified string. */
  match?: InputMaybe<Scalars['String']>;
};

/** FilterTypeInput specifies which action will be performed in a query  */
export type FilterTypeInput = {
  /** Equals */
  eq?: InputMaybe<Scalars['String']>;
  finset?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** From. Must be used with 'to' */
  from?: InputMaybe<Scalars['String']>;
  /** Greater than */
  gt?: InputMaybe<Scalars['String']>;
  /** Greater than or equal to */
  gteq?: InputMaybe<Scalars['String']>;
  /** In. The value can contain a set of comma-separated values */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Like. The specified value can contain % (percent signs) to allow matching of 0 or more characters */
  like?: InputMaybe<Scalars['String']>;
  /** Less than */
  lt?: InputMaybe<Scalars['String']>;
  /** Less than or equal to */
  lteq?: InputMaybe<Scalars['String']>;
  /** More than or equal to */
  moreq?: InputMaybe<Scalars['String']>;
  /** Not equal to */
  neq?: InputMaybe<Scalars['String']>;
  /** Not in. The value can contain a set of comma-separated values */
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Not null */
  notnull?: InputMaybe<Scalars['String']>;
  /** Is null */
  null?: InputMaybe<Scalars['String']>;
  /** To. Must be used with 'from' */
  to?: InputMaybe<Scalars['String']>;
};

/** A single FPT that can be applied to a product price. */
export type FixedProductTax = {
  __typename?: 'FixedProductTax';
  /** Amount of the FPT as a money object. */
  amount?: Maybe<Money>;
  /** The label assigned to the FPT to be displayed on the frontend. */
  label?: Maybe<Scalars['String']>;
};

/** This enumeration display settings for the fixed product tax */
export enum FixedProductTaxDisplaySettings {
  /**
   * The displayed price does not include the FPT amount. The values of
   * ProductPrice.fixed_product_taxes and the price including the FPT are displayed
   * separately. This value corresponds to 'Excluding FPT, Including FPT
   * description and final price'
   */
  ExcludeFptAndIncludeWithDetails = 'EXCLUDE_FPT_AND_INCLUDE_WITH_DETAILS',
  /**
   * The displayed price does not include the FPT amount. The values from
   * ProductPrice.fixed_product_taxes are not displayed. This value corresponds to
   * 'Excluding FPT'
   */
  ExcludeFptWithoutDetails = 'EXCLUDE_FPT_WITHOUT_DETAILS',
  /** The FPT feature is not enabled. You can omit  ProductPrice.fixed_product_taxes from your query */
  FptDisabled = 'FPT_DISABLED',
  /**
   * The displayed price includes the FPT amount without displaying the
   * ProductPrice.fixed_product_taxes values. This value corresponds to 'Including FPT only'
   */
  IncludeFptWithoutDetails = 'INCLUDE_FPT_WITHOUT_DETAILS',
  /**
   * The displayed price includes the FPT amount while displaying the values of
   * ProductPrice.fixed_product_taxes separately. This value corresponds to
   * 'Including FPT and FPT description'
   */
  IncludeFptWithDetails = 'INCLUDE_FPT_WITH_DETAILS'
}

export type GenerateCustomerTokenAsAdminInput = {
  /** The email address of the customer requesting remote shopping assistance */
  customer_email: Scalars['String'];
};

export type GenerateCustomerTokenAsAdminOutput = {
  __typename?: 'GenerateCustomerTokenAsAdminOutput';
  /** The generated customer token */
  customer_token: Scalars['String'];
};

/** Contains details about the gift card account */
export type GiftCardAccount = {
  __typename?: 'GiftCardAccount';
  /** Balance remaining on gift card */
  balance?: Maybe<Money>;
  /** Gift card account code */
  code?: Maybe<Scalars['String']>;
  /** Gift card expiration date */
  expiration_date?: Maybe<Scalars['String']>;
};

export type GiftCardAccountInput = {
  /** Defines the input required to identify the gift card account */
  gift_card_code: Scalars['String'];
};

/** GiftCardAmounts contains the value of a gift card, the website that generated the card, and related information */
export type GiftCardAmounts = {
  __typename?: 'GiftCardAmounts';
  /** An internal attribute ID. */
  attribute_id?: Maybe<Scalars['Int']>;
  /** The unique ID for a `GiftCardAmounts` object */
  uid: Scalars['ID'];
  /** The value of the gift card */
  value?: Maybe<Scalars['Float']>;
  /**
   * An ID that is assigned to each unique gift card amount.
   * @deprecated Use `uid` instead
   */
  value_id?: Maybe<Scalars['Int']>;
  /** ID of the website that generated the gift card */
  website_id?: Maybe<Scalars['Int']>;
  /** The value of the gift card */
  website_value?: Maybe<Scalars['Float']>;
};

/** Contains details about a gift card */
export type GiftCardCartItem = CartItemInterface & {
  __typename?: 'GiftCardCartItem';
  /** The amount and currency of the gift card */
  amount: Money;
  /** An array of customizations made to the gift card */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<CartItemError>>>;
  /** @deprecated Use `uid` instead */
  id: Scalars['String'];
  /** A message to the recipient */
  message?: Maybe<Scalars['String']>;
  prices?: Maybe<CartItemPrices>;
  product: ProductInterface;
  quantity: Scalars['Float'];
  /** The email of the person receiving the gift card */
  recipient_email?: Maybe<Scalars['String']>;
  /** The name of the person receiving the gift card */
  recipient_name: Scalars['String'];
  /** The email of the sender */
  sender_email?: Maybe<Scalars['String']>;
  /** The name of the sender */
  sender_name: Scalars['String'];
  /** The unique ID for a `CartItemInterface` object */
  uid: Scalars['ID'];
};

export type GiftCardCreditMemoItem = CreditMemoItemInterface & {
  __typename?: 'GiftCardCreditMemoItem';
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** Selected gift card properties for an credit memo item */
  gift_card?: Maybe<GiftCardItem>;
  /** The unique ID for a `CreditMemoItemInterface` object */
  id: Scalars['ID'];
  /** The order item the credit memo is applied to */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product, including selected options */
  product_sale_price: Money;
  /** SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of refunded items */
  quantity_refunded?: Maybe<Scalars['Float']>;
};

export type GiftCardInvoiceItem = InvoiceItemInterface & {
  __typename?: 'GiftCardInvoiceItem';
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** Selected gift card properties for an invoice item */
  gift_card?: Maybe<GiftCardItem>;
  /** The unique ID for a `InvoiceItemInterface` object */
  id: Scalars['ID'];
  /** Contains details about an individual order item */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product including selected options */
  product_sale_price: Money;
  /** The SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of invoiced items */
  quantity_invoiced?: Maybe<Scalars['Float']>;
};

export type GiftCardItem = {
  __typename?: 'GiftCardItem';
  /** Entered gift card message intended for the recipient */
  message?: Maybe<Scalars['String']>;
  /** Entered gift card recipient email for virtual cards */
  recipient_email?: Maybe<Scalars['String']>;
  /** Entered gift card sender namefor physical and virtual cards */
  recipient_name?: Maybe<Scalars['String']>;
  /** Entered gift card sender email for virtual cards */
  sender_email?: Maybe<Scalars['String']>;
  /** Entered gift card sender name for physical and virtual cards */
  sender_name?: Maybe<Scalars['String']>;
};

export type GiftCardOptions = {
  __typename?: 'GiftCardOptions';
  /** The amount and currency of the gift card */
  amount?: Maybe<Money>;
  /** The custom amount and currency of the gift card */
  custom_giftcard_amount?: Maybe<Money>;
  /** A message to the recipient */
  message?: Maybe<Scalars['String']>;
  /** The email of the person receiving the gift card */
  recipient_email?: Maybe<Scalars['String']>;
  /** The name of the person receiving the gift card */
  recipient_name?: Maybe<Scalars['String']>;
  /** The email of the sender */
  sender_email?: Maybe<Scalars['String']>;
  /** The name of the sender */
  sender_name?: Maybe<Scalars['String']>;
};

export type GiftCardOrderItem = OrderItemInterface & {
  __typename?: 'GiftCardOrderItem';
  /** The final discount information for the product */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** Indicates whether the order item is eligible is eligible to be in a return request */
  eligible_for_return?: Maybe<Scalars['Boolean']>;
  /** The entered option for the base product, such as a logo or image */
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** Selected gift card properties for an order item */
  gift_card?: Maybe<GiftCardItem>;
  /** The selected gift wrapping for the order item */
  gift_wrapping?: Maybe<GiftWrapping>;
  /** The unique ID for a `OrderItemInterface` object */
  id: Scalars['ID'];
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price of the base product, including selected options */
  product_sale_price: Money;
  /** The SKU of the base product */
  product_sku: Scalars['String'];
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']>;
  /** URL key of the base product */
  product_url_key?: Maybe<Scalars['String']>;
  /** The number of canceled items */
  quantity_canceled?: Maybe<Scalars['Float']>;
  /** The number of invoiced items */
  quantity_invoiced?: Maybe<Scalars['Float']>;
  /** The number of units ordered for this item */
  quantity_ordered?: Maybe<Scalars['Float']>;
  /** The number of refunded items */
  quantity_refunded?: Maybe<Scalars['Float']>;
  /** The number of returned items */
  quantity_returned?: Maybe<Scalars['Float']>;
  /** The number of shipped items */
  quantity_shipped?: Maybe<Scalars['Float']>;
  /** The selected options for the base product, such as color or size */
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item */
  status?: Maybe<Scalars['String']>;
};

/**
 * GiftCardProduct defines properties of a gift card, including the minimum and
 * maximum values and an array that contains the current and past values on the
 * specific gift card
 */
export type GiftCardProduct = CustomizableProductInterface & PhysicalProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'GiftCardProduct';
  /** Indicates whether the customer can provide a message to accompany the gift card. */
  allow_message?: Maybe<Scalars['Boolean']>;
  /** Indicates whether customers have the ability to set the value of the gift card. */
  allow_open_amount?: Maybe<Scalars['Boolean']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']>;
  /**
   * Relative canonical URL. This value is returned only if the system setting 'Use
   * Canonical Link Meta Tag For Products' is enabled
   */
  canonical_url?: Maybe<Scalars['String']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  color?: Maybe<Scalars['Int']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** List of product custom attributes details. */
  custom_attributes: Array<Maybe<CustomAttribute>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  fashion_color?: Maybe<Scalars['Int']>;
  fashion_material?: Maybe<Scalars['String']>;
  fashion_size?: Maybe<Scalars['Int']>;
  fashion_style?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['Int']>;
  /** An array of giftcard options. */
  gift_card_options: Array<Maybe<CustomizableOptionInterface>>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']>;
  /** An array that contains information about the values and ID of a gift card. */
  giftcard_amounts?: Maybe<Array<Maybe<GiftCardAmounts>>>;
  /** Either VIRTUAL, PHYSICAL, or COMBINED. */
  giftcard_type?: Maybe<GiftCardTypeEnum>;
  has_video?: Maybe<Scalars['Int']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** Indicates whether the customer can redeem the value on the card for cash. */
  is_redeemable?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the product can be returned */
  is_returnable?: Maybe<Scalars['String']>;
  /** The number of days after purchase until the gift card expires. A null value means there is no limit. */
  lifetime?: Maybe<Scalars['Int']>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']>;
  /** An array of Media Gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use product's `media_gallery` instead
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** Indicates whether the customer can provide a message to accompany the gift card. */
  message_max_length?: Maybe<Scalars['Int']>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']>;
  /**
   * The beginning date for new product listings, and determines if the product is featured as a new product.
   * @deprecated The field should not be used on the storefront.
   */
  new_from_date?: Maybe<Scalars['String']>;
  /**
   * The end date for new product listings.
   * @deprecated The field should not be used on the storefront.
   */
  new_to_date?: Maybe<Scalars['String']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  /** The minimum acceptable value of an open amount gift card. */
  open_amount_max?: Maybe<Scalars['Float']>;
  /** The minimum acceptable value of an open amount gift card. */
  open_amount_min?: Maybe<Scalars['Float']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  /**
   * A ProductPrices object, indicating the price of an item.
   * @deprecated Use price_range for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** A PriceRange object, indicating the range of prices for the product */
  price_range: PriceRange;
  /** An array of TierPrice objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** An array of ProductLinks objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /**
   * Contains 0 when there is no redirect error. A value of 301 indicates the URL
   * of the requested resource has been changed permanently, while a value of 302
   * indicates a temporary redirect
   */
  redirect_code: Scalars['Int'];
  /** Related Products */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original */
  relative_url?: Maybe<Scalars['String']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']>;
  /** The end date that a product has a special price. */
  special_to_date?: Maybe<Scalars['String']>;
  staged: Scalars['Boolean'];
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** The file name of a swatch image */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use __typename instead.
   */
  type_id?: Maybe<Scalars['String']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  video_file?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']>;
};


/**
 * GiftCardProduct defines properties of a gift card, including the minimum and
 * maximum values and an array that contains the current and past values on the
 * specific gift card
 */
export type GiftCardProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type GiftCardShipmentItem = ShipmentItemInterface & {
  __typename?: 'GiftCardShipmentItem';
  /** Selected gift card properties for an shipment item */
  gift_card?: Maybe<GiftCardItem>;
  /** The unique ID for a `ShipmentItemInterface` object */
  id: Scalars['ID'];
  /** Associated order item */
  order_item?: Maybe<OrderItemInterface>;
  /** Name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** Sale price for the base product */
  product_sale_price: Money;
  /** SKU of the base product */
  product_sku: Scalars['String'];
  /** Number of shipped items */
  quantity_shipped: Scalars['Float'];
};

/** This enumeration defines the types of gift cards */
export enum GiftCardTypeEnum {
  Combined = 'COMBINED',
  Physical = 'PHYSICAL',
  Virtual = 'VIRTUAL'
}

/** A gift card product wish list item */
export type GiftCardWishlistItem = WishlistItemInterface & {
  __typename?: 'GiftCardWishlistItem';
  /** The date and time the item was added to the wish list */
  added_at: Scalars['String'];
  /** Custom options selected for the wish list item */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item */
  description?: Maybe<Scalars['String']>;
  gift_card_options: GiftCardOptions;
  /** The unique ID for a `WishlistItemInterface` object */
  id: Scalars['ID'];
  /** Product details of the wish list item */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item */
  quantity: Scalars['Float'];
};

/** Contains the text of a gift message, its sender, and recipient */
export type GiftMessage = {
  __typename?: 'GiftMessage';
  /** Sender name */
  from: Scalars['String'];
  /** Gift message text */
  message: Scalars['String'];
  /** Recipient name */
  to: Scalars['String'];
};

/** Contains the text of a gift message, its sender, and recipient */
export type GiftMessageInput = {
  /** Sender name */
  from: Scalars['String'];
  /** Gift message text */
  message: Scalars['String'];
  /** Recepient name */
  to: Scalars['String'];
};

export type GiftOptionsPrices = {
  __typename?: 'GiftOptionsPrices';
  /** Price of the gift wrapping for all individual order items */
  gift_wrapping_for_items?: Maybe<Money>;
  /** Price of the gift wrapping for the whole order */
  gift_wrapping_for_order?: Maybe<Money>;
  /** Price for the printed card */
  printed_card?: Maybe<Money>;
};

export type GiftRegistry = {
  __typename?: 'GiftRegistry';
  /** The date on which the gift registry was created. Only the registry owner can access this attribute */
  created_at: Scalars['String'];
  /** An array of attributes that define elements of the gift registry. Each attribute is specified as a code-value pair */
  dynamic_attributes?: Maybe<Array<Maybe<GiftRegistryDynamicAttribute>>>;
  /** The name of the event */
  event_name: Scalars['String'];
  /** An array of products added to the gift registry */
  items?: Maybe<Array<Maybe<GiftRegistryItemInterface>>>;
  /** The message text the customer entered to describe the event */
  message: Scalars['String'];
  /** The customer who created the gift registry */
  owner_name: Scalars['String'];
  /** An enum that states whether the gift registry is PRIVATE or PUBLIC. Only the registry owner can access this attribute */
  privacy_settings: GiftRegistryPrivacySettings;
  /** Contains details about each registrant for the event */
  registrants?: Maybe<Array<Maybe<GiftRegistryRegistrant>>>;
  /** Contains the customer's shipping address. Only the registry owner can access this attribute */
  shipping_address?: Maybe<CustomerAddress>;
  /** An enum that states whether the gift registry is ACTIVE or INACTIVE. Only the registry owner can access this attribute */
  status: GiftRegistryStatus;
  /** Contains details about the type of gift registry */
  type?: Maybe<GiftRegistryType>;
  /** The unique ID assigned to the gift registry */
  uid: Scalars['ID'];
};

export type GiftRegistryDynamicAttribute = GiftRegistryDynamicAttributeInterface & {
  __typename?: 'GiftRegistryDynamicAttribute';
  /** The internal ID of the dynamic attribute */
  code: Scalars['ID'];
  /** Indicates which group the dynamic attribute is a member of */
  group: GiftRegistryDynamicAttributeGroup;
  /** The display name of the dynamic attribute */
  label: Scalars['String'];
  /** A corresponding value for the code */
  value: Scalars['String'];
};

export enum GiftRegistryDynamicAttributeGroup {
  DetailedInformation = 'DETAILED_INFORMATION',
  EventInformation = 'EVENT_INFORMATION',
  GeneralInformation = 'GENERAL_INFORMATION',
  PrivacySettings = 'PRIVACY_SETTINGS',
  Registrant = 'REGISTRANT',
  ShippingAddress = 'SHIPPING_ADDRESS'
}

export type GiftRegistryDynamicAttributeInput = {
  /** A unique key for an additional attribute of the event */
  code: Scalars['ID'];
  /** A string that describes a dynamic attribute */
  value: Scalars['String'];
};

export type GiftRegistryDynamicAttributeInterface = {
  /** The internal ID of the dynamic attribute */
  code: Scalars['ID'];
  /** The display name of the dynamic attribute */
  label: Scalars['String'];
  /** A corresponding value for the code */
  value: Scalars['String'];
};

export type GiftRegistryDynamicAttributeMetadata = GiftRegistryDynamicAttributeMetadataInterface & {
  __typename?: 'GiftRegistryDynamicAttributeMetadata';
  /** Indicates which group the dynamic attribute a member of */
  attribute_group: Scalars['String'];
  /** The internal ID of the dynamic attribute */
  code: Scalars['ID'];
  /** The selected input type for this dynamic attribute. The value can be one of several static or custom types */
  input_type: Scalars['String'];
  /** Indicates whether the dynamic attribute is required */
  is_required: Scalars['Boolean'];
  /** The display name of the dynamic attribute */
  label: Scalars['String'];
  /** The order in which to display the dynamic attribute */
  sort_order?: Maybe<Scalars['Int']>;
};

export type GiftRegistryDynamicAttributeMetadataInterface = {
  /** Indicates which group the dynamic attribute a member of */
  attribute_group: Scalars['String'];
  /** The internal ID of the dynamic attribute */
  code: Scalars['ID'];
  /** The selected input type for this dynamic attribute. The value can be one of several static or custom types */
  input_type: Scalars['String'];
  /** Indicates whether the dynamic attribute is required */
  is_required: Scalars['Boolean'];
  /** The display name of the dynamic attribute */
  label: Scalars['String'];
  /** The order in which to display the dynamic attribute */
  sort_order?: Maybe<Scalars['Int']>;
};

export type GiftRegistryItem = GiftRegistryItemInterface & {
  __typename?: 'GiftRegistryItem';
  /** The date the product was added to the gift registry */
  created_at: Scalars['String'];
  /** A brief message about the gift registry item */
  note?: Maybe<Scalars['String']>;
  product?: Maybe<ProductInterface>;
  /** The requested quantity of the product */
  quantity: Scalars['Float'];
  /** The fulfilled quantity of the product */
  quantity_fulfilled: Scalars['Float'];
  /** The unique ID of a gift registry item */
  uid: Scalars['ID'];
};

export type GiftRegistryItemInterface = {
  /** The date the product was added to the gift registry */
  created_at: Scalars['String'];
  /** A brief message about the gift registry item */
  note?: Maybe<Scalars['String']>;
  product?: Maybe<ProductInterface>;
  /** The requested quantity of the product */
  quantity: Scalars['Float'];
  /** The fulfilled quantity of the product */
  quantity_fulfilled: Scalars['Float'];
  /** The unique ID of a gift registry item */
  uid: Scalars['ID'];
};

/** Contains the status and any errors that encountered with the customer's gift register item */
export type GiftRegistryItemUserErrorInterface = {
  /** Indicates whether the attempt to move the cart items to the gift registry was successful */
  status: Scalars['Boolean'];
  /** An array of errors encountered while moving items from the cart to the gift registry */
  user_errors: Array<Maybe<GiftRegistryItemsUserError>>;
};

export type GiftRegistryItemUserErrors = GiftRegistryItemUserErrorInterface & {
  __typename?: 'GiftRegistryItemUserErrors';
  /** Indicates whether the attempt to move the cart items to the gift registry was successful */
  status: Scalars['Boolean'];
  /** An array of errors encountered while moving items from the cart to the gift registry */
  user_errors: Array<Maybe<GiftRegistryItemsUserError>>;
};

export type GiftRegistryItemsUserError = {
  __typename?: 'GiftRegistryItemsUserError';
  /** An error code that describes the error encountered */
  code: GiftRegistryItemsUserErrorType;
  /** The unique ID of the gift registry item containing an error */
  gift_registry_item_uid?: Maybe<Scalars['ID']>;
  /** The unique ID of the `Gift registry` object containing an error */
  gift_registry_uid?: Maybe<Scalars['ID']>;
  /** A localized error message */
  message: Scalars['String'];
  /** The unique ID of the product containing an error */
  product_uid?: Maybe<Scalars['ID']>;
};

export enum GiftRegistryItemsUserErrorType {
  /** Used for exceptions like EntityNotFound */
  NotFound = 'NOT_FOUND',
  /** Used for handling out of stock products */
  OutOfStock = 'OUT_OF_STOCK',
  /** Used for other exceptions, such as database connection failures */
  Undefined = 'UNDEFINED'
}

export type GiftRegistryOutput = GiftRegistryOutputInterface & {
  __typename?: 'GiftRegistryOutput';
  /** The gift registry */
  gift_registry?: Maybe<GiftRegistry>;
};

/** Contains the customer's gift registry */
export type GiftRegistryOutputInterface = {
  /** The gift registry */
  gift_registry?: Maybe<GiftRegistry>;
};

export enum GiftRegistryPrivacySettings {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type GiftRegistryRegistrant = {
  __typename?: 'GiftRegistryRegistrant';
  /** An array of dynamic attributes assigned to the registrant */
  dynamic_attributes?: Maybe<Array<Maybe<GiftRegistryRegistrantDynamicAttribute>>>;
  /** The email address of the registrant. Only the registry owner can access this attribute */
  email: Scalars['String'];
  /** The first name of the registrant */
  firstname: Scalars['String'];
  /** The last name of the registrant */
  lastname: Scalars['String'];
  /** The unique ID assigned to the registrant */
  uid: Scalars['ID'];
};

export type GiftRegistryRegistrantDynamicAttribute = GiftRegistryDynamicAttributeInterface & {
  __typename?: 'GiftRegistryRegistrantDynamicAttribute';
  /** The internal ID of the dynamic attribute */
  code: Scalars['ID'];
  /** The display name of the dynamic attribute */
  label: Scalars['String'];
  /** A corresponding value for the code */
  value: Scalars['String'];
};

export type GiftRegistrySearchResult = {
  __typename?: 'GiftRegistrySearchResult';
  /** The date of the event */
  event_date?: Maybe<Scalars['String']>;
  /** The title given to the event */
  event_title: Scalars['String'];
  /** The URL key of the gift registry */
  gift_registry_uid: Scalars['ID'];
  /** The location of the event */
  location?: Maybe<Scalars['String']>;
  /** The name of the gift registry owner */
  name: Scalars['String'];
  /** The type of event being held */
  type?: Maybe<Scalars['String']>;
};

/** Specify either address_data or the address_id. If both are provided, validation will fail */
export type GiftRegistryShippingAddressInput = {
  /** Defines the shipping address for this gift registry */
  address_data?: InputMaybe<CustomerAddressInput>;
  /** The ID assigned to this customer address */
  address_id?: InputMaybe<Scalars['ID']>;
};

export enum GiftRegistryStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type GiftRegistryType = {
  __typename?: 'GiftRegistryType';
  /** An array of attributes that define elements of the gift registry. Each attribute is specified as a code-value pair */
  dynamic_attributes_metadata?: Maybe<Array<Maybe<GiftRegistryDynamicAttributeMetadataInterface>>>;
  /** The label assigned to the gift registry type on the Admin */
  label: Scalars['String'];
  /** The unique ID assigned to the gift registry type */
  uid: Scalars['ID'];
};

export type GiftWrapping = {
  __typename?: 'GiftWrapping';
  /** Gift wrapping design name */
  design: Scalars['String'];
  /**
   * The unique ID for a `GiftWrapping` object
   * @deprecated Use `uid` instead
   */
  id: Scalars['ID'];
  /** Gift wrapping preview image */
  image?: Maybe<GiftWrappingImage>;
  /** Gift wrapping price */
  price: Money;
  /** The unique ID for a `GiftWrapping` object */
  uid: Scalars['ID'];
};

export type GiftWrappingImage = {
  __typename?: 'GiftWrappingImage';
  /** Gift wrapping preview image label */
  label: Scalars['String'];
  /** Gift wrapping preview image URL */
  url: Scalars['String'];
};

/** A grouped product consists of simple standalone products that are presented as a group */
export type GroupedProduct = PhysicalProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'GroupedProduct';
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']>;
  /**
   * Relative canonical URL. This value is returned only if the system setting 'Use
   * Canonical Link Meta Tag For Products' is enabled
   */
  canonical_url?: Maybe<Scalars['String']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  color?: Maybe<Scalars['Int']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** List of product custom attributes details. */
  custom_attributes: Array<Maybe<CustomAttribute>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  fashion_color?: Maybe<Scalars['Int']>;
  fashion_material?: Maybe<Scalars['String']>;
  fashion_size?: Maybe<Scalars['Int']>;
  fashion_style?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['Int']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']>;
  has_video?: Maybe<Scalars['Int']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** Indicates whether the product can be returned */
  is_returnable?: Maybe<Scalars['String']>;
  /** An array containing grouped product items */
  items?: Maybe<Array<Maybe<GroupedProductItem>>>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']>;
  /** An array of Media Gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use product's `media_gallery` instead
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']>;
  /**
   * The beginning date for new product listings, and determines if the product is featured as a new product.
   * @deprecated The field should not be used on the storefront.
   */
  new_from_date?: Maybe<Scalars['String']>;
  /**
   * The end date for new product listings.
   * @deprecated The field should not be used on the storefront.
   */
  new_to_date?: Maybe<Scalars['String']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  /**
   * A ProductPrices object, indicating the price of an item.
   * @deprecated Use price_range for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** A PriceRange object, indicating the range of prices for the product */
  price_range: PriceRange;
  /** An array of TierPrice objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** An array of ProductLinks objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /**
   * Contains 0 when there is no redirect error. A value of 301 indicates the URL
   * of the requested resource has been changed permanently, while a value of 302
   * indicates a temporary redirect
   */
  redirect_code: Scalars['Int'];
  /** Related Products */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original */
  relative_url?: Maybe<Scalars['String']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']>;
  /** The end date that a product has a special price. */
  special_to_date?: Maybe<Scalars['String']>;
  staged: Scalars['Boolean'];
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** The file name of a swatch image */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use __typename instead.
   */
  type_id?: Maybe<Scalars['String']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  video_file?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']>;
};


/** A grouped product consists of simple standalone products that are presented as a group */
export type GroupedProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

/** GroupedProductItem contains information about an individual grouped product item */
export type GroupedProductItem = {
  __typename?: 'GroupedProductItem';
  /** The relative position of this item compared to the other group items */
  position?: Maybe<Scalars['Int']>;
  /** The ProductInterface object, which contains details about this product option */
  product?: Maybe<ProductInterface>;
  /** The quantity of this grouped product item */
  qty?: Maybe<Scalars['Float']>;
};

/** A grouped product wish list item */
export type GroupedProductWishlistItem = WishlistItemInterface & {
  __typename?: 'GroupedProductWishlistItem';
  /** The date and time the item was added to the wish list */
  added_at: Scalars['String'];
  /** Custom options selected for the wish list item */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item */
  description?: Maybe<Scalars['String']>;
  /** The unique ID for a `WishlistItemInterface` object */
  id: Scalars['ID'];
  /** Product details of the wish list item */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item */
  quantity: Scalars['Float'];
};

/**
 * A set of relative URLs that PayPal will use in response to various actions
 * during the authorization process. Magento prepends the base URL to this value to
 * create a full URL. For example, if the full URL is
 * https://www.example.com/path/to/page.html, the relative URL is
 * path/to/page.html. Use this input for Payments Pro Hosted Solution payment method.
 */
export type HostedProInput = {
  /**
   * The relative URL of the page that PayPal will redirect to when the buyer
   * cancels the transaction in order to choose a different payment method. If the
   * full URL to this page is https://www.example.com/paypal/action/cancel.html,
   * the relative URL is paypal/action/cancel.html.
   */
  cancel_url: Scalars['String'];
  /**
   * The relative URL of the final confirmation page that PayPal will redirect to
   * upon payment success. If the full URL to this page is
   * https://www.example.com/paypal/action/return.html, the relative URL is
   * paypal/action/return.html.
   */
  return_url: Scalars['String'];
};

/** Contains secure URL used for Payments Pro Hosted Solution payment method. */
export type HostedProUrl = {
  __typename?: 'HostedProUrl';
  /** Secure Url generated by PayPal */
  secure_form_url?: Maybe<Scalars['String']>;
};

/** The required input to request the secure URL for Payments Pro Hosted Solution payment. */
export type HostedProUrlInput = {
  /** The unique ID that identifies the customer's cart */
  cart_id: Scalars['String'];
};

/** The object details of target path parameters */
export type HttpQueryParameter = {
  __typename?: 'HttpQueryParameter';
  /** Parameter name */
  name?: Maybe<Scalars['String']>;
  /** Parameter value */
  value?: Maybe<Scalars['String']>;
};

export type ImageSwatchData = SwatchDataInterface & {
  __typename?: 'ImageSwatchData';
  /** Thumbnail swatch image URL */
  thumbnail?: Maybe<Scalars['String']>;
  /** Value of swatch item (HEX color code, image link or textual value) */
  value?: Maybe<Scalars['String']>;
};

/** Invoice details */
export type Invoice = {
  __typename?: 'Invoice';
  /** Comments on the invoice */
  comments?: Maybe<Array<Maybe<SalesCommentItem>>>;
  /** The unique ID for a `Invoice` object */
  id: Scalars['ID'];
  /** Invoiced product details */
  items?: Maybe<Array<Maybe<InvoiceItemInterface>>>;
  /** Sequential invoice number */
  number: Scalars['String'];
  /** Invoice total amount details */
  total?: Maybe<InvoiceTotal>;
};

export type InvoiceItem = InvoiceItemInterface & {
  __typename?: 'InvoiceItem';
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for a `InvoiceItemInterface` object */
  id: Scalars['ID'];
  /** Contains details about an individual order item */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product including selected options */
  product_sale_price: Money;
  /** The SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of invoiced items */
  quantity_invoiced?: Maybe<Scalars['Float']>;
};

/** Invoice item details */
export type InvoiceItemInterface = {
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for a `InvoiceItemInterface` object */
  id: Scalars['ID'];
  /** Contains details about an individual order item */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product including selected options */
  product_sale_price: Money;
  /** The SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of invoiced items */
  quantity_invoiced?: Maybe<Scalars['Float']>;
};

/** Contains price details from an invoice */
export type InvoiceTotal = {
  __typename?: 'InvoiceTotal';
  /** The final base grand total amount in the base currency */
  base_grand_total: Money;
  /** The applied discounts to the invoice */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The final total amount, including shipping, discounts, and taxes */
  grand_total: Money;
  /** Contains details about the shipping and handling costs for the invoice */
  shipping_handling?: Maybe<ShippingHandling>;
  /** The subtotal of the invoice, excluding shipping, discounts, and taxes */
  subtotal: Money;
  /** The invoice tax details */
  taxes?: Maybe<Array<Maybe<TaxItem>>>;
  /** The shipping amount for the invoice */
  total_shipping: Money;
  /** The amount of tax applied to the invoice */
  total_tax: Money;
};

export type IsConfigSettingEnabledOutput = {
  __typename?: 'IsConfigSettingEnabledOutput';
  /** Is config setting enabled */
  is_enabled?: Maybe<Scalars['Boolean']>;
};

export type IsEmailAvailableOutput = {
  __typename?: 'IsEmailAvailableOutput';
  /** Is email availabel value */
  is_email_available?: Maybe<Scalars['Boolean']>;
};

/** A list of options of the selected bundle product */
export type ItemSelectedBundleOption = {
  __typename?: 'ItemSelectedBundleOption';
  /**
   * The unique ID for a `ItemSelectedBundleOption` object
   * @deprecated Use `uid` instead
   */
  id: Scalars['ID'];
  /** The label of the option */
  label: Scalars['String'];
  /** The unique ID for a `ItemSelectedBundleOption` object */
  uid: Scalars['ID'];
  /** A list of products that represent the values of the parent option */
  values?: Maybe<Array<Maybe<ItemSelectedBundleOptionValue>>>;
};

/** A list of values for the selected bundle product */
export type ItemSelectedBundleOptionValue = {
  __typename?: 'ItemSelectedBundleOptionValue';
  /**
   * The unique ID for a `ItemSelectedBundleOptionValue` object
   * @deprecated Use `uid` instead
   */
  id: Scalars['ID'];
  /** The price of the child bundle product */
  price: Money;
  /** The name of the child bundle product */
  product_name: Scalars['String'];
  /** The SKU of the child bundle product */
  product_sku: Scalars['String'];
  /** Indicates how many of this bundle product were ordered */
  quantity: Scalars['Float'];
  /** The unique ID for a `ItemSelectedBundleOptionValue` object */
  uid: Scalars['ID'];
};

/** The key-value type */
export type KeyValue = {
  __typename?: 'KeyValue';
  /** The name part of the name/value pair */
  name?: Maybe<Scalars['String']>;
  /** The value part of the name/value pair */
  value?: Maybe<Scalars['String']>;
};

export type KlarnaInput = {
  /** The authorization token must be provided to set any Klarna Payments method */
  authorization_token: Scalars['String'];
};

export type LayerFilter = {
  __typename?: 'LayerFilter';
  /**
   * Array of filter items.
   * @deprecated Use Aggregation.options instead.
   */
  filter_items?: Maybe<Array<Maybe<LayerFilterItemInterface>>>;
  /**
   * Count of filter items in filter group.
   * @deprecated Use Aggregation.count instead.
   */
  filter_items_count?: Maybe<Scalars['Int']>;
  /**
   * Layered navigation filter name.
   * @deprecated Use Aggregation.label instead.
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Request variable name for filter query.
   * @deprecated Use Aggregation.attribute_code instead.
   */
  request_var?: Maybe<Scalars['String']>;
};

export type LayerFilterItem = LayerFilterItemInterface & {
  __typename?: 'LayerFilterItem';
  /**
   * Count of items by filter.
   * @deprecated Use AggregationOption.count instead.
   */
  items_count?: Maybe<Scalars['Int']>;
  /**
   * Filter label.
   * @deprecated Use AggregationOption.label instead.
   */
  label?: Maybe<Scalars['String']>;
  /**
   * Value for filter request variable to be used in query.
   * @deprecated Use AggregationOption.value instead.
   */
  value_string?: Maybe<Scalars['String']>;
};

export type LayerFilterItemInterface = {
  /**
   * Count of items by filter.
   * @deprecated Use AggregationOption.count instead.
   */
  items_count?: Maybe<Scalars['Int']>;
  /**
   * Filter label.
   * @deprecated Use AggregationOption.label instead.
   */
  label?: Maybe<Scalars['String']>;
  /**
   * Value for filter request variable to be used in query.
   * @deprecated Use AggregationOption.value instead.
   */
  value_string?: Maybe<Scalars['String']>;
};

/** MediaGalleryEntry defines characteristics about images and videos associated with a specific product. */
export type MediaGalleryEntry = {
  __typename?: 'MediaGalleryEntry';
  /** Contains a ProductMediaGalleryEntriesContent object. */
  content?: Maybe<ProductMediaGalleryEntriesContent>;
  /** Whether the image is hidden from view. */
  disabled?: Maybe<Scalars['Boolean']>;
  /** The path of the image on the server. */
  file?: Maybe<Scalars['String']>;
  /**
   * The identifier assigned to the object.
   * @deprecated Use `uid` instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** The alt text displayed on the UI when the user points to the image. */
  label?: Maybe<Scalars['String']>;
  /** image or video. */
  media_type?: Maybe<Scalars['String']>;
  /** The media item's position after it has been sorted. */
  position?: Maybe<Scalars['Int']>;
  /** Array of image types. It can have the following values: image, small_image, thumbnail. */
  types?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The unique ID for a `MediaGalleryEntry` object. */
  uid: Scalars['ID'];
  /** Contains a ProductMediaGalleryEntriesVideoContent object. */
  video_content?: Maybe<ProductMediaGalleryEntriesVideoContent>;
};

/** Contains basic information about a product image or video. */
export type MediaGalleryInterface = {
  /** Whether the image is hidden from view. */
  disabled?: Maybe<Scalars['Boolean']>;
  /** The label of the product image or video. */
  label?: Maybe<Scalars['String']>;
  /** The media item's position after it has been sorted. */
  position?: Maybe<Scalars['Int']>;
  /** The URL of the product image or video. */
  url?: Maybe<Scalars['String']>;
};

/** A Money object defines a monetary value, including a numeric value and a currency code. */
export type Money = {
  __typename?: 'Money';
  /** A three-letter currency code, such as USD or EUR */
  currency?: Maybe<CurrencyEnum>;
  /** A number expressing a monetary value */
  value?: Maybe<Scalars['Float']>;
};

/** Contains the customer's gift registry and any errors encountered */
export type MoveCartItemsToGiftRegistryOutput = GiftRegistryItemUserErrorInterface & GiftRegistryOutputInterface & {
  __typename?: 'MoveCartItemsToGiftRegistryOutput';
  /** The gift registry */
  gift_registry?: Maybe<GiftRegistry>;
  /** Indicates whether the attempt to move the cart items to the gift registry was successful */
  status: Scalars['Boolean'];
  /** An array of errors encountered while moving items from the cart to the gift registry */
  user_errors: Array<Maybe<GiftRegistryItemsUserError>>;
};

export type MoveProductsBetweenWishlistsOutput = {
  __typename?: 'MoveProductsBetweenWishlistsOutput';
  /** The destination wish list after receiving products move from the source wish list */
  destination_wishlist: Wishlist;
  /** The source wish list after moving products from it */
  source_wishlist: Wishlist;
  /** An array of errors encountered while moving products in a wish list */
  user_errors: Array<Maybe<WishListUserInputError>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBundleProductsToCart?: Maybe<AddBundleProductsToCartOutput>;
  addConfigurableProductsToCart?: Maybe<AddConfigurableProductsToCartOutput>;
  addDownloadableProductsToCart?: Maybe<AddDownloadableProductsToCartOutput>;
  /** Add registrants to the specified gift registry */
  addGiftRegistryRegistrants?: Maybe<AddGiftRegistryRegistrantsOutput>;
  /** Add any type of product to the cart */
  addProductsToCart?: Maybe<AddProductsToCartOutput>;
  /** Add products to the specified compare list */
  addProductsToCompareList?: Maybe<CompareList>;
  /** Adds one or more products to the specified wish list. This mutation supports all product types */
  addProductsToWishlist?: Maybe<AddProductsToWishlistOutput>;
  /** Add a comment to an existing return */
  addReturnComment?: Maybe<AddReturnCommentOutput>;
  /** Add tracking information to the return */
  addReturnTracking?: Maybe<AddReturnTrackingOutput>;
  addSimpleProductsToCart?: Maybe<AddSimpleProductsToCartOutput>;
  addVirtualProductsToCart?: Maybe<AddVirtualProductsToCartOutput>;
  /** Add items in the specified wishlist to the customer's cart */
  addWishlistItemsToCart?: Maybe<AddWishlistItemsToCartOutput>;
  applyCouponToCart?: Maybe<ApplyCouponToCartOutput>;
  /** Apply a pre-defined gift card code to the specified cart. */
  applyGiftCardToCart?: Maybe<ApplyGiftCardToCartOutput>;
  /** Apply all available points, up to the cart total. Partial redemption is not available */
  applyRewardPointsToCart?: Maybe<ApplyRewardPointsToCartOutput>;
  /** Apply store credit to the specified cart. */
  applyStoreCreditToCart?: Maybe<ApplyStoreCreditToCartOutput>;
  /** Assign the specified compare list to the logged in customer */
  assignCompareListToCustomer?: Maybe<AssignCompareListToCustomerOutput>;
  /** Changes the password for the logged-in customer */
  changeCustomerPassword?: Maybe<Customer>;
  /** Send a 'Contact Us' email to the merchant. */
  contactUs?: Maybe<ContactUsOutput>;
  /** Copy products from one wish list to another */
  copyProductsBetweenWishlists?: Maybe<CopyProductsBetweenWishlistsOutput>;
  /** Creates Client Token for Braintree Javascript SDK initialization. */
  createBraintreeClientToken: Scalars['String'];
  /** Creates a new compare list. The compare list is saved for logged in customers */
  createCompareList?: Maybe<CompareList>;
  /** Create customer account */
  createCustomer?: Maybe<CustomerOutput>;
  /** Create customer address */
  createCustomerAddress?: Maybe<CustomerAddress>;
  /** Create customer account */
  createCustomerV2?: Maybe<CustomerOutput>;
  /** Creates an empty shopping cart for a guest or logged in user */
  createEmptyCart?: Maybe<Scalars['String']>;
  /** Create a gift registry on behalf of the customer */
  createGiftRegistry?: Maybe<CreateGiftRegistryOutput>;
  /** Creates a Klarna Payments Session. */
  createKlarnaPaymentsSession?: Maybe<CreateKlarnaPaymentsSessionOutput>;
  /** Initiates a transaction and receives a token. Use this mutation for Payflow Pro and Payments Pro payment methods */
  createPayflowProToken?: Maybe<CreatePayflowProTokenOutput>;
  /**
   * Initiates an Express Checkout transaction and receives a token. Use this
   * mutation for Express Checkout and Payments Standard payment methods.
   */
  createPaypalExpressToken?: Maybe<PaypalExpressTokenOutput>;
  /** Creates a product review for the specified SKU */
  createProductReview: CreateProductReviewOutput;
  /** Create a new wish list */
  createWishlist?: Maybe<CreateWishlistOutput>;
  /** Delete the specified compare list */
  deleteCompareList?: Maybe<DeleteCompareListOutput>;
  /** Delete customer address */
  deleteCustomerAddress?: Maybe<Scalars['Boolean']>;
  /** Delete a customer payment token */
  deletePaymentToken?: Maybe<DeletePaymentTokenOutput>;
  /** Delete the specified wish list filtered by the unique ID for a `Wishlist` object */
  deleteWishlist?: Maybe<DeleteWishlistOutput>;
  /** Retrieve the customer token */
  generateCustomerToken?: Maybe<CustomerToken>;
  /** Request a customer token so that an administrator can perform remote shopping assistance */
  generateCustomerTokenAsAdmin?: Maybe<GenerateCustomerTokenAsAdminOutput>;
  /** Handles payment response and saves payment in Quote. Use this mutations for Payflow Pro and Payments Pro payment methods. */
  handlePayflowProResponse?: Maybe<PayflowProResponseOutput>;
  /** Merges the source cart into the destination cart */
  mergeCarts: Cart;
  /** Moves all items from the cart to a gift registry */
  moveCartItemsToGiftRegistry?: Maybe<MoveCartItemsToGiftRegistryOutput>;
  /** Move products from one wish list to another */
  moveProductsBetweenWishlists?: Maybe<MoveProductsBetweenWishlistsOutput>;
  placeOrder?: Maybe<PlaceOrderOutput>;
  /** Redeem gift card for store credit. */
  redeemGiftCardBalanceAsStoreCredit?: Maybe<GiftCardAccount>;
  removeCouponFromCart?: Maybe<RemoveCouponFromCartOutput>;
  removeGiftCardFromCart?: Maybe<RemoveGiftCardFromCartOutput>;
  /** Delete the specified gift registry */
  removeGiftRegistry?: Maybe<RemoveGiftRegistryOutput>;
  /** Delete the specified items from a gift registry */
  removeGiftRegistryItems?: Maybe<RemoveGiftRegistryItemsOutput>;
  /** Removes registrants from a gift registry */
  removeGiftRegistryRegistrants?: Maybe<RemoveGiftRegistryRegistrantsOutput>;
  removeItemFromCart?: Maybe<RemoveItemFromCartOutput>;
  /** Remove products from the specified compare list */
  removeProductsFromCompareList?: Maybe<CompareList>;
  /** Removes one or more products from the specified wish list */
  removeProductsFromWishlist?: Maybe<RemoveProductsFromWishlistOutput>;
  /** Remove a tracked shipment from a return */
  removeReturnTracking?: Maybe<RemoveReturnTrackingOutput>;
  /** Cancel the application of reward points to the cart */
  removeRewardPointsFromCart?: Maybe<RemoveRewardPointsFromCartOutput>;
  /** Remove applied store credit from the specified cart. */
  removeStoreCreditFromCart?: Maybe<RemoveStoreCreditFromCartOutput>;
  /** Adds all products from a customer's previous order to the cart. */
  reorderItems?: Maybe<ReorderItemsOutput>;
  /** Request an email with a reset password token for the registered customer identified by the specified email. */
  requestPasswordResetEmail?: Maybe<Scalars['Boolean']>;
  /** Initiates a buyer's  request to return an item for replacement or refund */
  requestReturn?: Maybe<RequestReturnOutput>;
  /**
   * Reset a customer's password using the reset password token that the customer
   * received in an email after requesting it using requestPasswordResetEmail.
   */
  resetPassword?: Maybe<Scalars['Boolean']>;
  /** Revoke the customer token */
  revokeCustomerToken?: Maybe<RevokeCustomerTokenOutput>;
  /** Recommends Product by Sending Single/Multiple Email */
  sendEmailToFriend?: Maybe<SendEmailToFriendOutput>;
  setBillingAddressOnCart?: Maybe<SetBillingAddressOnCartOutput>;
  /** Set gift options like gift wrapping or gift message for the entire cart */
  setGiftOptionsOnCart?: Maybe<SetGiftOptionsOnCartOutput>;
  setGuestEmailOnCart?: Maybe<SetGuestEmailOnCartOutput>;
  /** @deprecated Should use setPaymentMethodOnCart and placeOrder mutations in single request. */
  setPaymentMethodAndPlaceOrder?: Maybe<PlaceOrderOutput>;
  setPaymentMethodOnCart?: Maybe<SetPaymentMethodOnCartOutput>;
  setShippingAddressesOnCart?: Maybe<SetShippingAddressesOnCartOutput>;
  setShippingMethodsOnCart?: Maybe<SetShippingMethodsOnCartOutput>;
  /** Send an email about the gift registry to a list of invitees */
  shareGiftRegistry?: Maybe<ShareGiftRegistryOutput>;
  /** Subscribes the specified email to a newsletter */
  subscribeEmailToNewsletter?: Maybe<SubscribeEmailToNewsletterOutput>;
  updateCartItems?: Maybe<UpdateCartItemsOutput>;
  /** Sends chat profile data to Engagement Cloud. */
  updateChatProfile?: Maybe<Scalars['Boolean']>;
  /** Deprecated. Use UpdateCustomerV2 instead. */
  updateCustomer?: Maybe<CustomerOutput>;
  /** Update customer address */
  updateCustomerAddress?: Maybe<CustomerAddress>;
  updateCustomerEmail?: Maybe<CustomerOutput>;
  /** Update the customer's personal information */
  updateCustomerV2?: Maybe<CustomerOutput>;
  /** Update the specified gift registry */
  updateGiftRegistry?: Maybe<UpdateGiftRegistryOutput>;
  /** Update the specified items in the gift registry */
  updateGiftRegistryItems?: Maybe<UpdateGiftRegistryItemsOutput>;
  /** Modify the properties of one or more gift registry registrants */
  updateGiftRegistryRegistrants?: Maybe<UpdateGiftRegistryRegistrantsOutput>;
  /** Updates one or more products in the specified wish list */
  updateProductsInWishlist?: Maybe<UpdateProductsInWishlistOutput>;
  /** Updates the email address of a quote. */
  updateQuoteEmail?: Maybe<Scalars['Boolean']>;
  /** Change the name and visibility of the specified wish list */
  updateWishlist?: Maybe<UpdateWishlistOutput>;
};


export type MutationAddBundleProductsToCartArgs = {
  input?: InputMaybe<AddBundleProductsToCartInput>;
};


export type MutationAddConfigurableProductsToCartArgs = {
  input?: InputMaybe<AddConfigurableProductsToCartInput>;
};


export type MutationAddDownloadableProductsToCartArgs = {
  input?: InputMaybe<AddDownloadableProductsToCartInput>;
};


export type MutationAddGiftRegistryRegistrantsArgs = {
  giftRegistryUid: Scalars['ID'];
  registrants: Array<AddGiftRegistryRegistrantInput>;
};


export type MutationAddProductsToCartArgs = {
  cartId: Scalars['String'];
  cartItems: Array<CartItemInput>;
};


export type MutationAddProductsToCompareListArgs = {
  input?: InputMaybe<AddProductsToCompareListInput>;
};


export type MutationAddProductsToWishlistArgs = {
  wishlistId: Scalars['ID'];
  wishlistItems: Array<WishlistItemInput>;
};


export type MutationAddReturnCommentArgs = {
  input: AddReturnCommentInput;
};


export type MutationAddReturnTrackingArgs = {
  input: AddReturnTrackingInput;
};


export type MutationAddSimpleProductsToCartArgs = {
  input?: InputMaybe<AddSimpleProductsToCartInput>;
};


export type MutationAddVirtualProductsToCartArgs = {
  input?: InputMaybe<AddVirtualProductsToCartInput>;
};


export type MutationAddWishlistItemsToCartArgs = {
  wishlistId: Scalars['ID'];
  wishlistItemIds?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationApplyCouponToCartArgs = {
  input?: InputMaybe<ApplyCouponToCartInput>;
};


export type MutationApplyGiftCardToCartArgs = {
  input?: InputMaybe<ApplyGiftCardToCartInput>;
};


export type MutationApplyRewardPointsToCartArgs = {
  cartId: Scalars['ID'];
};


export type MutationApplyStoreCreditToCartArgs = {
  input: ApplyStoreCreditToCartInput;
};


export type MutationAssignCompareListToCustomerArgs = {
  uid: Scalars['ID'];
};


export type MutationChangeCustomerPasswordArgs = {
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
};


export type MutationContactUsArgs = {
  input: ContactUsInput;
};


export type MutationCopyProductsBetweenWishlistsArgs = {
  destinationWishlistUid: Scalars['ID'];
  sourceWishlistUid: Scalars['ID'];
  wishlistItems: Array<WishlistItemCopyInput>;
};


export type MutationCreateCompareListArgs = {
  input?: InputMaybe<CreateCompareListInput>;
};


export type MutationCreateCustomerArgs = {
  input: CustomerInput;
};


export type MutationCreateCustomerAddressArgs = {
  input: CustomerAddressInput;
};


export type MutationCreateCustomerV2Args = {
  input: CustomerCreateInput;
};


export type MutationCreateEmptyCartArgs = {
  input?: InputMaybe<CreateEmptyCartInput>;
};


export type MutationCreateGiftRegistryArgs = {
  giftRegistry: CreateGiftRegistryInput;
};


export type MutationCreateKlarnaPaymentsSessionArgs = {
  input?: InputMaybe<CreateKlarnaPaymentsSessionInput>;
};


export type MutationCreatePayflowProTokenArgs = {
  input: PayflowProTokenInput;
};


export type MutationCreatePaypalExpressTokenArgs = {
  input: PaypalExpressTokenInput;
};


export type MutationCreateProductReviewArgs = {
  input: CreateProductReviewInput;
};


export type MutationCreateWishlistArgs = {
  input: CreateWishlistInput;
};


export type MutationDeleteCompareListArgs = {
  uid: Scalars['ID'];
};


export type MutationDeleteCustomerAddressArgs = {
  id: Scalars['Int'];
};


export type MutationDeletePaymentTokenArgs = {
  public_hash: Scalars['String'];
};


export type MutationDeleteWishlistArgs = {
  wishlistId: Scalars['ID'];
};


export type MutationGenerateCustomerTokenArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationGenerateCustomerTokenAsAdminArgs = {
  input: GenerateCustomerTokenAsAdminInput;
};


export type MutationHandlePayflowProResponseArgs = {
  input: PayflowProResponseInput;
};


export type MutationMergeCartsArgs = {
  destination_cart_id?: InputMaybe<Scalars['String']>;
  source_cart_id: Scalars['String'];
};


export type MutationMoveCartItemsToGiftRegistryArgs = {
  cartUid: Scalars['ID'];
  giftRegistryUid: Scalars['ID'];
};


export type MutationMoveProductsBetweenWishlistsArgs = {
  destinationWishlistUid: Scalars['ID'];
  sourceWishlistUid: Scalars['ID'];
  wishlistItems: Array<WishlistItemMoveInput>;
};


export type MutationPlaceOrderArgs = {
  input?: InputMaybe<PlaceOrderInput>;
};


export type MutationRedeemGiftCardBalanceAsStoreCreditArgs = {
  input: GiftCardAccountInput;
};


export type MutationRemoveCouponFromCartArgs = {
  input?: InputMaybe<RemoveCouponFromCartInput>;
};


export type MutationRemoveGiftCardFromCartArgs = {
  input?: InputMaybe<RemoveGiftCardFromCartInput>;
};


export type MutationRemoveGiftRegistryArgs = {
  giftRegistryUid: Scalars['ID'];
};


export type MutationRemoveGiftRegistryItemsArgs = {
  giftRegistryUid: Scalars['ID'];
  itemsUid: Array<Scalars['ID']>;
};


export type MutationRemoveGiftRegistryRegistrantsArgs = {
  giftRegistryUid: Scalars['ID'];
  registrantsUid: Array<Scalars['ID']>;
};


export type MutationRemoveItemFromCartArgs = {
  input?: InputMaybe<RemoveItemFromCartInput>;
};


export type MutationRemoveProductsFromCompareListArgs = {
  input?: InputMaybe<RemoveProductsFromCompareListInput>;
};


export type MutationRemoveProductsFromWishlistArgs = {
  wishlistId: Scalars['ID'];
  wishlistItemsIds: Array<Scalars['ID']>;
};


export type MutationRemoveReturnTrackingArgs = {
  input: RemoveReturnTrackingInput;
};


export type MutationRemoveRewardPointsFromCartArgs = {
  cartId: Scalars['ID'];
};


export type MutationRemoveStoreCreditFromCartArgs = {
  input: RemoveStoreCreditFromCartInput;
};


export type MutationReorderItemsArgs = {
  orderNumber: Scalars['String'];
};


export type MutationRequestPasswordResetEmailArgs = {
  email: Scalars['String'];
};


export type MutationRequestReturnArgs = {
  input: RequestReturnInput;
};


export type MutationResetPasswordArgs = {
  email: Scalars['String'];
  newPassword: Scalars['String'];
  resetPasswordToken: Scalars['String'];
};


export type MutationSendEmailToFriendArgs = {
  input?: InputMaybe<SendEmailToFriendInput>;
};


export type MutationSetBillingAddressOnCartArgs = {
  input?: InputMaybe<SetBillingAddressOnCartInput>;
};


export type MutationSetGiftOptionsOnCartArgs = {
  input?: InputMaybe<SetGiftOptionsOnCartInput>;
};


export type MutationSetGuestEmailOnCartArgs = {
  input?: InputMaybe<SetGuestEmailOnCartInput>;
};


export type MutationSetPaymentMethodAndPlaceOrderArgs = {
  input?: InputMaybe<SetPaymentMethodAndPlaceOrderInput>;
};


export type MutationSetPaymentMethodOnCartArgs = {
  input?: InputMaybe<SetPaymentMethodOnCartInput>;
};


export type MutationSetShippingAddressesOnCartArgs = {
  input?: InputMaybe<SetShippingAddressesOnCartInput>;
};


export type MutationSetShippingMethodsOnCartArgs = {
  input?: InputMaybe<SetShippingMethodsOnCartInput>;
};


export type MutationShareGiftRegistryArgs = {
  giftRegistryUid: Scalars['ID'];
  invitees: Array<ShareGiftRegistryInviteeInput>;
  sender: ShareGiftRegistrySenderInput;
};


export type MutationSubscribeEmailToNewsletterArgs = {
  email: Scalars['String'];
};


export type MutationUpdateCartItemsArgs = {
  input?: InputMaybe<UpdateCartItemsInput>;
};


export type MutationUpdateChatProfileArgs = {
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  profileId: Scalars['String'];
};


export type MutationUpdateCustomerArgs = {
  input: CustomerInput;
};


export type MutationUpdateCustomerAddressArgs = {
  id: Scalars['Int'];
  input?: InputMaybe<CustomerAddressInput>;
};


export type MutationUpdateCustomerEmailArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdateCustomerV2Args = {
  input: CustomerUpdateInput;
};


export type MutationUpdateGiftRegistryArgs = {
  giftRegistry: UpdateGiftRegistryInput;
  giftRegistryUid: Scalars['ID'];
};


export type MutationUpdateGiftRegistryItemsArgs = {
  giftRegistryUid: Scalars['ID'];
  items: Array<UpdateGiftRegistryItemInput>;
};


export type MutationUpdateGiftRegistryRegistrantsArgs = {
  giftRegistryUid: Scalars['ID'];
  registrants: Array<UpdateGiftRegistryRegistrantInput>;
};


export type MutationUpdateProductsInWishlistArgs = {
  wishlistId: Scalars['ID'];
  wishlistItems: Array<WishlistItemUpdateInput>;
};


export type MutationUpdateQuoteEmailArgs = {
  cartId: Scalars['String'];
  email: Scalars['String'];
};


export type MutationUpdateWishlistArgs = {
  name?: InputMaybe<Scalars['String']>;
  visibility?: InputMaybe<WishlistVisibilityEnum>;
  wishlistId: Scalars['ID'];
};

export enum ObjectDataTypeEnum {
  Boolean = 'BOOLEAN',
  Complex = 'COMPLEX',
  Float = 'FLOAT',
  Int = 'INT',
  String = 'STRING'
}

/** Contains details about the requested order */
export type Order = {
  __typename?: 'Order';
  /** An array containing the items purchased in this order */
  items?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** @deprecated The order_id field is deprecated, use order_number instead. */
  order_id?: Maybe<Scalars['String']>;
  /** The unique ID for a `Order` object. */
  order_number: Scalars['String'];
  /** Contains the calculated total for this order */
  total?: Maybe<Scalars['String']>;
};

/** OrderAddress contains detailed information about an order's billing and shipping addresses */
export type OrderAddress = {
  __typename?: 'OrderAddress';
  /** The city or town */
  city: Scalars['String'];
  /** The customer's company */
  company?: Maybe<Scalars['String']>;
  /** The customer's country */
  country_code?: Maybe<CountryCodeEnum>;
  /** The fax number */
  fax?: Maybe<Scalars['String']>;
  /** The first name of the person associated with the shipping/billing address */
  firstname: Scalars['String'];
  /** The family name of the person associated with the shipping/billing address */
  lastname: Scalars['String'];
  /** The middle name of the person associated with the shipping/billing address */
  middlename?: Maybe<Scalars['String']>;
  /** The customer's order ZIP or postal code */
  postcode?: Maybe<Scalars['String']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']>;
  /** The state or province name */
  region?: Maybe<Scalars['String']>;
  /** The unique ID for a `Region` object of a pre-defined region */
  region_id?: Maybe<Scalars['ID']>;
  /** An array of strings that define the street number and name */
  street: Array<Maybe<Scalars['String']>>;
  /** A value such as Sr., Jr., or III */
  suffix?: Maybe<Scalars['String']>;
  /** The telephone number */
  telephone: Scalars['String'];
  /** The customer's Value-added tax (VAT) number (for corporate customers) */
  vat_id?: Maybe<Scalars['String']>;
};

export type OrderItem = OrderItemInterface & {
  __typename?: 'OrderItem';
  /** The final discount information for the product */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** Indicates whether the order item is eligible is eligible to be in a return request */
  eligible_for_return?: Maybe<Scalars['Boolean']>;
  /** The entered option for the base product, such as a logo or image */
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The selected gift wrapping for the order item */
  gift_wrapping?: Maybe<GiftWrapping>;
  /** The unique ID for a `OrderItemInterface` object */
  id: Scalars['ID'];
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price of the base product, including selected options */
  product_sale_price: Money;
  /** The SKU of the base product */
  product_sku: Scalars['String'];
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']>;
  /** URL key of the base product */
  product_url_key?: Maybe<Scalars['String']>;
  /** The number of canceled items */
  quantity_canceled?: Maybe<Scalars['Float']>;
  /** The number of invoiced items */
  quantity_invoiced?: Maybe<Scalars['Float']>;
  /** The number of units ordered for this item */
  quantity_ordered?: Maybe<Scalars['Float']>;
  /** The number of refunded items */
  quantity_refunded?: Maybe<Scalars['Float']>;
  /** The number of returned items */
  quantity_returned?: Maybe<Scalars['Float']>;
  /** The number of shipped items */
  quantity_shipped?: Maybe<Scalars['Float']>;
  /** The selected options for the base product, such as color or size */
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item */
  status?: Maybe<Scalars['String']>;
};

/** Order item details */
export type OrderItemInterface = {
  /** The final discount information for the product */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** Indicates whether the order item is eligible is eligible to be in a return request */
  eligible_for_return?: Maybe<Scalars['Boolean']>;
  /** The entered option for the base product, such as a logo or image */
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The selected gift wrapping for the order item */
  gift_wrapping?: Maybe<GiftWrapping>;
  /** The unique ID for a `OrderItemInterface` object */
  id: Scalars['ID'];
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price of the base product, including selected options */
  product_sale_price: Money;
  /** The SKU of the base product */
  product_sku: Scalars['String'];
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']>;
  /** URL key of the base product */
  product_url_key?: Maybe<Scalars['String']>;
  /** The number of canceled items */
  quantity_canceled?: Maybe<Scalars['Float']>;
  /** The number of invoiced items */
  quantity_invoiced?: Maybe<Scalars['Float']>;
  /** The number of units ordered for this item */
  quantity_ordered?: Maybe<Scalars['Float']>;
  /** The number of refunded items */
  quantity_refunded?: Maybe<Scalars['Float']>;
  /** The number of returned items */
  quantity_returned?: Maybe<Scalars['Float']>;
  /** The number of shipped items */
  quantity_shipped?: Maybe<Scalars['Float']>;
  /** The selected options for the base product, such as color or size */
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item */
  status?: Maybe<Scalars['String']>;
};

/** Represents order item options like selected or entered */
export type OrderItemOption = {
  __typename?: 'OrderItemOption';
  /** The name of the option */
  label: Scalars['String'];
  /** The value of the option */
  value: Scalars['String'];
};

/** Contains details about the payment method used to pay for the order */
export type OrderPaymentMethod = {
  __typename?: 'OrderPaymentMethod';
  /** Additional data per payment method type */
  additional_data?: Maybe<Array<Maybe<KeyValue>>>;
  /** The label that describes the payment method */
  name: Scalars['String'];
  /** The payment method code that indicates how the order was paid for */
  type: Scalars['String'];
};

/** Order shipment details */
export type OrderShipment = {
  __typename?: 'OrderShipment';
  /** Comments added to the shipment */
  comments?: Maybe<Array<Maybe<SalesCommentItem>>>;
  /** The unique ID for a `OrderShipment` object */
  id: Scalars['ID'];
  /** Contains items included in the shipment */
  items?: Maybe<Array<Maybe<ShipmentItemInterface>>>;
  /** The sequential credit shipment number */
  number: Scalars['String'];
  /** Contains shipment tracking details */
  tracking?: Maybe<Array<Maybe<ShipmentTracking>>>;
};

/** Contains details about the sales total amounts used to calculate the final price */
export type OrderTotal = {
  __typename?: 'OrderTotal';
  /** The final base grand total amount in the base currency */
  base_grand_total: Money;
  /** The applied discounts to the order */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The final total amount, including shipping, discounts, and taxes */
  grand_total: Money;
  /** Contains details about the shipping and handling costs for the order */
  shipping_handling?: Maybe<ShippingHandling>;
  /** The subtotal of the order, excluding shipping, discounts, and taxes */
  subtotal: Money;
  /** The order tax details */
  taxes?: Maybe<Array<Maybe<TaxItem>>>;
  /** The gift card balance applied to the order */
  total_giftcard?: Maybe<Money>;
  /** The shipping amount for the order */
  total_shipping: Money;
  /** The amount of tax applied to the order */
  total_tax: Money;
};

/** Required input for Payflow Express Checkout payments */
export type PayflowExpressInput = {
  /** The unique ID of the PayPal user */
  payer_id: Scalars['String'];
  /** The token returned by the createPaypalExpressToken mutation */
  token: Scalars['String'];
};

/**
 * A set of relative URLs that PayPal will use in response to various actions
 * during the authorization process. Magento prepends the base URL to this value to
 * create a full URL. For example, if the full URL is
 * https://www.example.com/path/to/page.html, the relative URL is
 * path/to/page.html. Use this input for Payflow Link and Payments Advanced payment methods.
 */
export type PayflowLinkInput = {
  /**
   * The relative URL of the page that PayPal will redirect to when the buyer
   * cancels the transaction in order to choose a different payment method. If the
   * full URL to this page is https://www.example.com/paypal/action/cancel.html,
   * the relative URL is paypal/action/cancel.html.
   */
  cancel_url: Scalars['String'];
  /**
   * The relative URL of the transaction error page that PayPal will redirect to
   * upon payment error. If the full URL to this page is
   * https://www.example.com/paypal/action/error.html, the relative URL is
   * paypal/action/error.html.
   */
  error_url: Scalars['String'];
  /**
   * The relative URL of the order confirmation page that PayPal will redirect to
   * when the payment is successful and additional confirmation is not needed. If
   * the full URL to this page is
   * https://www.example.com/paypal/action/return.html, the relative URL is
   * paypal/action/return.html.
   */
  return_url: Scalars['String'];
};

/** Mode for payment: TEST or LIVE. Applies to Payflow Link and Payments Advanced payment methods. */
export enum PayflowLinkMode {
  Live = 'LIVE',
  Test = 'TEST'
}

/**
 * Contains information used to generate PayPal iframe for transaction. Applies to
 * Payflow Link and Payments Advanced payment methods.
 */
export type PayflowLinkToken = {
  __typename?: 'PayflowLinkToken';
  /** Mode for Payflow transaction */
  mode?: Maybe<PayflowLinkMode>;
  /** PayPal URL used for requesting Payflow form */
  paypal_url?: Maybe<Scalars['String']>;
  /** Secure token generated by PayPal */
  secure_token?: Maybe<Scalars['String']>;
  /** Secure token ID generated by PayPal */
  secure_token_id?: Maybe<Scalars['String']>;
};

/** Input required to fetch payment token information for Payflow Link and Payments Advanced payment methods. */
export type PayflowLinkTokenInput = {
  /** The unique ID that identifies the customer's cart */
  cart_id: Scalars['String'];
};

/** Required input for Payflow Pro and Payments Pro payment methods. */
export type PayflowProInput = {
  /** Required input for credit card related information */
  cc_details: CreditCardDetailsInput;
  /**
   * States whether details about the customer's credit/debit card should be
   * tokenized for later usage. Required only if Vault is enabled for PayPal
   * Payflow Pro payment integration.
   */
  is_active_payment_token_enabler?: InputMaybe<Scalars['Boolean']>;
};

/** Input required to complete payment. Applies to Payflow Pro and Payments Pro payment methods. */
export type PayflowProResponseInput = {
  cart_id: Scalars['String'];
  paypal_payload: Scalars['String'];
};

export type PayflowProResponseOutput = {
  __typename?: 'PayflowProResponseOutput';
  cart: Cart;
};

/** Contains the secure information used to authorize transaction. Applies to Payflow Pro and Payments Pro payment methods. */
export type PayflowProToken = {
  __typename?: 'PayflowProToken';
  response_message: Scalars['String'];
  result: Scalars['Int'];
  result_code: Scalars['Int'];
  secure_token: Scalars['String'];
  secure_token_id: Scalars['String'];
};

/** Input required to fetch payment token information for Payflow Pro and Payments Pro payment methods. */
export type PayflowProTokenInput = {
  /** The unique ID that identifies the customer's cart */
  cart_id: Scalars['String'];
  /** A set of relative URLs that PayPal uses for callback. */
  urls: PayflowProUrlInput;
};

/**
 * A set of relative URLs that PayPal will use in response to various actions
 * during the authorization process. Magento prepends the base URL to this value to
 * create a full URL. For example, if the full URL is
 * https://www.example.com/path/to/page.html, the relative URL is
 * path/to/page.html. Use this input for Payflow Pro and Payment Pro payment methods.
 */
export type PayflowProUrlInput = {
  /**
   * The relative URL of the page that PayPal will redirect to when the buyer
   * cancels the transaction in order to choose a different payment method. If the
   * full URL to this page is https://www.example.com/paypal/action/cancel.html,
   * the relative URL is paypal/action/cancel.html.
   */
  cancel_url: Scalars['String'];
  /**
   * The relative URL of the transaction error page that PayPal will redirect to
   * upon payment error. If the full URL to this page is
   * https://www.example.com/paypal/action/error.html, the relative URL is
   * paypal/action/error.html.
   */
  error_url: Scalars['String'];
  /**
   * The relative URL of the final confirmation page that PayPal will redirect to
   * upon payment success. If the full URL to this page is
   * https://www.example.com/paypal/action/return.html, the relative URL is
   * paypal/action/return.html.
   */
  return_url: Scalars['String'];
};

export type PaymentMethodInput = {
  braintree?: InputMaybe<BraintreeInput>;
  braintree_cc_vault?: InputMaybe<BraintreeCcVaultInput>;
  /** Payment method code */
  code: Scalars['String'];
  /** Required input for PayPal Hosted pro payments */
  hosted_pro?: InputMaybe<HostedProInput>;
  klarna?: InputMaybe<KlarnaInput>;
  /** Required input for Payflow Express Checkout payments */
  payflow_express?: InputMaybe<PayflowExpressInput>;
  /** Required input for PayPal Payflow Link and Payments Advanced payments */
  payflow_link?: InputMaybe<PayflowLinkInput>;
  /** Required input type for PayPal Payflow Pro and Payment Pro payments */
  payflowpro?: InputMaybe<PayflowProInput>;
  /** Required input type for PayPal Payflow Pro vault payments */
  payflowpro_cc_vault?: InputMaybe<VaultTokenInput>;
  /** Required input for Express Checkout and Payments Standard payments */
  paypal_express?: InputMaybe<PaypalExpressInput>;
  /** Purchase order number */
  purchase_order_number?: InputMaybe<Scalars['String']>;
};

/** The stored payment method available to the customer */
export type PaymentToken = {
  __typename?: 'PaymentToken';
  /** Stored account details */
  details?: Maybe<Scalars['String']>;
  /** The payment method code associated with the token */
  payment_method_code: Scalars['String'];
  /** The public hash of the token */
  public_hash: Scalars['String'];
  type: PaymentTokenTypeEnum;
};

/** The list of available payment token types */
export enum PaymentTokenTypeEnum {
  Account = 'account',
  Card = 'card'
}

/** Required input for Express Checkout and Payments Standard payments */
export type PaypalExpressInput = {
  /** The unique ID of the PayPal user */
  payer_id: Scalars['String'];
  /** The token returned by the createPaypalExpressToken mutation */
  token: Scalars['String'];
};

/** Deprecated: use type `PaypalExpressTokenOutput` instead */
export type PaypalExpressToken = {
  __typename?: 'PaypalExpressToken';
  /**
   * A set of URLs that allow the buyer to authorize payment and adjust checkout details
   * @deprecated Use field `paypal_urls` of type `PaypalExpressTokenOutput` instead
   */
  paypal_urls?: Maybe<PaypalExpressUrlList>;
  /**
   * The token returned by PayPal
   * @deprecated Use field `token` of type `PaypalExpressTokenOutput` instead
   */
  token?: Maybe<Scalars['String']>;
};

/** Defines the attributes required to receive a payment token for Express Checkout and Payments Standard payment methods. */
export type PaypalExpressTokenInput = {
  /** The unique ID that identifies the customer's cart */
  cart_id: Scalars['String'];
  /** Payment method code */
  code: Scalars['String'];
  /** Indicates whether the buyer selected the quick checkout button. The default value is false */
  express_button?: InputMaybe<Scalars['Boolean']>;
  /** A set of relative URLs that PayPal uses in response to various actions during the authorization process */
  urls: PaypalExpressUrlsInput;
  /** Indicates whether the buyer clicked the PayPal credit button. The default value is false */
  use_paypal_credit?: InputMaybe<Scalars['Boolean']>;
};

/**
 * Contains the token returned by PayPal and a set of URLs that allow the buyer to
 * authorize payment and adjust checkout details. Applies to Express Checkout and
 * Payments Standard payment methods.
 */
export type PaypalExpressTokenOutput = {
  __typename?: 'PaypalExpressTokenOutput';
  /** A set of URLs that allow the buyer to authorize payment and adjust checkout details */
  paypal_urls?: Maybe<PaypalExpressUrlList>;
  /** The token returned by PayPal */
  token?: Maybe<Scalars['String']>;
};

/**
 * A set of URLs that allow the buyer to authorize payment and adjust checkout
 * details for Express Checkout and Payments Standard transactions.
 */
export type PaypalExpressUrlList = {
  __typename?: 'PaypalExpressUrlList';
  /** The PayPal URL that allows the buyer to edit their checkout details */
  edit?: Maybe<Scalars['String']>;
  /** The URL to the PayPal login page */
  start?: Maybe<Scalars['String']>;
};

/**
 * A set of relative URLs that PayPal will use in response to various actions
 * during the authorization process. Magento prepends the base URL to this value to
 * create a full URL. For example, if the full URL is
 * https://www.example.com/path/to/page.html, the relative URL is
 * path/to/page.html. Use this input for Express Checkout and Payments Standard
 * payment methods.
 */
export type PaypalExpressUrlsInput = {
  /**
   * The relative URL of the page that PayPal will redirect to when the buyer
   * cancels the transaction in order to choose a different payment method. If the
   * full URL to this page is https://www.example.com/paypal/action/cancel.html,
   * the relative URL is paypal/action/cancel.html.
   */
  cancel_url: Scalars['String'];
  /**
   * The relative URL of the page that PayPal will redirect to when the payment has
   * been put on hold for additional review. This condition mostly applies to ACH
   * transactions, and is not applicable to most PayPal solutions. If the full URL
   * to this page is https://www.example.com/paypal/action/success_pending.html,
   * the relative URL is paypal/action/success_pending.html.
   */
  pending_url?: InputMaybe<Scalars['String']>;
  /**
   * The relative URL of the final confirmation page that PayPal will redirect to
   * upon payment success. If the full URL to this page is
   * https://www.example.com/paypal/action/return.html, the relative URL is
   * paypal/action/return.html.
   */
  return_url: Scalars['String'];
  /**
   * The relative URL of the order confirmation page that PayPal will redirect to
   * when the payment is successful and additional confirmation is not needed. Not
   * applicable to most PayPal solutions. If the full URL to this page is
   * https://www.example.com/paypal/action/success.html, the relative URL is
   * paypal/action/success.html.
   */
  success_url?: InputMaybe<Scalars['String']>;
};

/** PhysicalProductInterface contains attributes specific to tangible products. */
export type PhysicalProductInterface = {
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']>;
};

/** Defines Pickup Location information. */
export type PickupLocation = {
  __typename?: 'PickupLocation';
  city?: Maybe<Scalars['String']>;
  contact_name?: Maybe<Scalars['String']>;
  country_id?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  pickup_location_code?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  region_id?: Maybe<Scalars['Int']>;
  street?: Maybe<Scalars['String']>;
};

/** PickupLocationFilterInput defines the list of attributes and filters for the search. */
export type PickupLocationFilterInput = {
  /** Filter by city. */
  city?: InputMaybe<FilterTypeInput>;
  /** Filter by country. */
  country_id?: InputMaybe<FilterTypeInput>;
  /** Filter by pickup location name. */
  name?: InputMaybe<FilterTypeInput>;
  /** Filter by pickup location code. */
  pickup_location_code?: InputMaybe<FilterTypeInput>;
  /** Filter by postcode. */
  postcode?: InputMaybe<FilterTypeInput>;
  /** Filter by region. */
  region?: InputMaybe<FilterTypeInput>;
  /** Filter by region id. */
  region_id?: InputMaybe<FilterTypeInput>;
  /** Filter by street. */
  street?: InputMaybe<FilterTypeInput>;
};

/**
 * PickupLocationSortInput specifies attribute to use for sorting search results
 * and indicates whether the results are sorted in ascending or descending order.
 */
export type PickupLocationSortInput = {
  /** City where pickup location is placed. */
  city?: InputMaybe<SortEnum>;
  /** Name of the contact person. */
  contact_name?: InputMaybe<SortEnum>;
  /** Id of the country in two letters. */
  country_id?: InputMaybe<SortEnum>;
  /** Description of the pickup location. */
  description?: InputMaybe<SortEnum>;
  /**
   * Distance to the address, requested by distance filter. Applicable only with
   * distance filter. If distance sort order is present, all other sort orders will be ignored.
   */
  distance?: InputMaybe<SortEnum>;
  /** Contact email of the pickup location. */
  email?: InputMaybe<SortEnum>;
  /** Contact fax of the pickup location. */
  fax?: InputMaybe<SortEnum>;
  /** Geographic latitude where pickup location is placed. */
  latitude?: InputMaybe<SortEnum>;
  /** Geographic longitude where pickup location is placed. */
  longitude?: InputMaybe<SortEnum>;
  /** The pickup location name. Customer use this to identify the pickup location. */
  name?: InputMaybe<SortEnum>;
  /** Contact phone number of the pickup location. */
  phone?: InputMaybe<SortEnum>;
  /** A code assigned to pickup location to identify the source. */
  pickup_location_code?: InputMaybe<SortEnum>;
  /** Postcode where pickup location is placed. */
  postcode?: InputMaybe<SortEnum>;
  /** Name of the region. */
  region?: InputMaybe<SortEnum>;
  /** Id of the region. */
  region_id?: InputMaybe<SortEnum>;
  /** Street where pickup location is placed. */
  street?: InputMaybe<SortEnum>;
};

/** Top level object returned in a pickup locations search. */
export type PickupLocations = {
  __typename?: 'PickupLocations';
  /** An array of pickup locations that match the specific search request. */
  items?: Maybe<Array<Maybe<PickupLocation>>>;
  /** An object that includes the page_info and currentPage values specified in the query. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The number of products returned. */
  total_count?: Maybe<Scalars['Int']>;
};

export type PlaceOrderInput = {
  cart_id: Scalars['String'];
};

export type PlaceOrderOutput = {
  __typename?: 'PlaceOrderOutput';
  order: Order;
};

/**
 * Price is deprecated, replaced by ProductPrice. The Price object defines the
 * price of a product as well as any tax-related adjustments.
 */
export type Price = {
  __typename?: 'Price';
  /**
   * An array that provides information about tax, weee, or weee_tax adjustments.
   * @deprecated Price is deprecated, use ProductPrice.
   */
  adjustments?: Maybe<Array<Maybe<PriceAdjustment>>>;
  /**
   * The price of a product plus a three-letter currency code.
   * @deprecated Price is deprecated, use ProductPrice.
   */
  amount?: Maybe<Money>;
};

/**
 * PriceAdjustment is deprecated. Taxes will be included or excluded in the price.
 * The PricedAdjustment object defines the amount of money to apply as an
 * adjustment, the type of adjustment to apply, and whether the item is included or
 * excluded from the adjustment.
 */
export type PriceAdjustment = {
  __typename?: 'PriceAdjustment';
  /** The amount of the price adjustment and its currency code. */
  amount?: Maybe<Money>;
  /**
   * Indicates whether the adjustment involves tax, weee, or weee_tax.
   * @deprecated PriceAdjustment is deprecated.
   */
  code?: Maybe<PriceAdjustmentCodesEnum>;
  /**
   * Indicates whether the entity described by the code attribute is included or excluded from the adjustment.
   * @deprecated PriceAdjustment is deprecated.
   */
  description?: Maybe<PriceAdjustmentDescriptionEnum>;
};

/** PriceAdjustment.code is deprecated. This enumeration contains values defined in modules other than the Catalog module. */
export enum PriceAdjustmentCodesEnum {
  Tax = 'TAX',
  Weee = 'WEEE',
  WeeeTax = 'WEEE_TAX'
}

/** PriceAdjustmentDescriptionEnum is deprecated. This enumeration states whether a price adjustment is included or excluded. */
export enum PriceAdjustmentDescriptionEnum {
  Excluded = 'EXCLUDED',
  Included = 'INCLUDED'
}

/** Price range for a product. If the product has a single price, the minimum and maximum price will be the same. */
export type PriceRange = {
  __typename?: 'PriceRange';
  /** The highest possible price for the product. */
  maximum_price?: Maybe<ProductPrice>;
  /** The lowest possible price for the product. */
  minimum_price: ProductPrice;
};

/** This enumeration the price type. */
export enum PriceTypeEnum {
  Dynamic = 'DYNAMIC',
  Fixed = 'FIXED',
  Percent = 'PERCENT'
}

/** This enumeration defines whether a bundle product's price is displayed as the lowest possible value or as a range. */
export enum PriceViewEnum {
  AsLowAs = 'AS_LOW_AS',
  PriceRange = 'PRICE_RANGE'
}

export type ProductAttribute = {
  __typename?: 'ProductAttribute';
  /** The unique identifier for a product attribute code. */
  code: Scalars['String'];
  /** The display value of the attribute */
  value: Scalars['String'];
};

/**
 * ProductAttributeFilterInput defines the filters to be used in the search. A
 * filter contains at least one attribute, a comparison operator, and the value
 * that is being searched for.
 */
export type ProductAttributeFilterInput = {
  /** Deprecated: use `category_uid` to filter product by category id. */
  category_id?: InputMaybe<FilterEqualTypeInput>;
  /** Filter product by the unique ID for a `CategoryInterface` object. */
  category_uid?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Description */
  description?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: Color */
  fashion_color?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Material */
  fashion_material?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Size */
  fashion_size?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Style */
  fashion_style?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Format */
  format?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Has Video */
  has_video?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Product Name */
  name?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: Price */
  price?: InputMaybe<FilterRangeTypeInput>;
  /** Attribute label: Short Description */
  short_description?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: SKU */
  sku?: InputMaybe<FilterEqualTypeInput>;
  /** The part of the URL that identifies the product */
  url_key?: InputMaybe<FilterEqualTypeInput>;
};

export type ProductAttributeMetadata = AttributeMetadataInterface & {
  __typename?: 'ProductAttributeMetadata';
  /** An array of attribute labels defined for the current store. */
  attribute_labels?: Maybe<Array<Maybe<StoreLabels>>>;
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  code?: Maybe<Scalars['String']>;
  /** The data type of the attribute. */
  data_type?: Maybe<ObjectDataTypeEnum>;
  /** The type of entity that defines the attribute. */
  entity_type?: Maybe<AttributeEntityTypeEnum>;
  /** Indicates whether the attribute is a system attribute. */
  is_system?: Maybe<Scalars['Boolean']>;
  /** The label assigned to the attribute. */
  label?: Maybe<Scalars['String']>;
  /** The relative position of the attribute. */
  sort_order?: Maybe<Scalars['Int']>;
  /** Frontend UI properties of the attribute. */
  ui_input?: Maybe<UiInputTypeInterface>;
  /** The unique ID of an attribute. */
  uid?: Maybe<Scalars['ID']>;
  /** Places in the store front where the attribute is used. */
  used_in_components?: Maybe<Array<Maybe<CustomAttributesListsEnum>>>;
};

/**
 * ProductAttributeSortInput specifies the attribute to use for sorting search
 * results and indicates whether the results are sorted in ascending or descending
 * order. It's possible to sort products using searchable attributes with enabled
 * 'Use in Filter Options' option
 */
export type ProductAttributeSortInput = {
  /** Attribute label: Product Name */
  name?: InputMaybe<SortEnum>;
  /** Sort by the position assigned to each product. */
  position?: InputMaybe<SortEnum>;
  /** Attribute label: Price */
  price?: InputMaybe<SortEnum>;
  /** Sort by the search relevance score (default). */
  relevance?: InputMaybe<SortEnum>;
};

/** A discount applied to a product price. */
export type ProductDiscount = {
  __typename?: 'ProductDiscount';
  /** The actual value of the discount. */
  amount_off?: Maybe<Scalars['Float']>;
  /** The discount expressed a percentage. */
  percent_off?: Maybe<Scalars['Float']>;
};

/**
 * ProductFilterInput is deprecated, use @ProductAttributeFilterInput instead.
 * ProductFilterInput defines the filters to be used in the search. A filter
 * contains at least one attribute, a comparison operator, and the value that is
 * being searched for.
 */
export type ProductFilterInput = {
  /** Category ID the product belongs to. */
  category_id?: InputMaybe<FilterTypeInput>;
  /** The product's country of origin. */
  country_of_manufacture?: InputMaybe<FilterTypeInput>;
  /** Timestamp indicating when the product was created. */
  created_at?: InputMaybe<FilterTypeInput>;
  /** The name of a custom layout. */
  custom_layout?: InputMaybe<FilterTypeInput>;
  /** XML code that is applied as a layout update to the product page. */
  custom_layout_update?: InputMaybe<FilterTypeInput>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: InputMaybe<FilterTypeInput>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: InputMaybe<FilterTypeInput>;
  /** Indicates whether additional attributes have been created for the product. */
  has_options?: InputMaybe<FilterTypeInput>;
  /** The relative path to the main image on the product page. */
  image?: InputMaybe<FilterTypeInput>;
  /** The label assigned to a product image. */
  image_label?: InputMaybe<FilterTypeInput>;
  /** Indicates whether the product can be returned */
  is_returnable?: InputMaybe<FilterTypeInput>;
  /** A number representing the product's manufacturer. */
  manufacturer?: InputMaybe<FilterTypeInput>;
  /** The numeric maximal price of the product. Do not include the currency code. */
  max_price?: InputMaybe<FilterTypeInput>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: InputMaybe<FilterTypeInput>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: InputMaybe<FilterTypeInput>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: InputMaybe<FilterTypeInput>;
  /** The numeric minimal price of the product. Do not include the currency code. */
  min_price?: InputMaybe<FilterTypeInput>;
  /** The product name. Customers use this name to identify the product. */
  name?: InputMaybe<FilterTypeInput>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  news_from_date?: InputMaybe<FilterTypeInput>;
  /** The end date for new product listings. */
  news_to_date?: InputMaybe<FilterTypeInput>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: InputMaybe<FilterTypeInput>;
  /** The keyword required to perform a logical OR comparison. */
  or?: InputMaybe<ProductFilterInput>;
  /** The price of an item. */
  price?: InputMaybe<FilterTypeInput>;
  /** Indicates whether the product has required options. */
  required_options?: InputMaybe<FilterTypeInput>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: InputMaybe<FilterTypeInput>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: InputMaybe<FilterTypeInput>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: InputMaybe<FilterTypeInput>;
  /** The label assigned to a product's small image. */
  small_image_label?: InputMaybe<FilterTypeInput>;
  /** The beginning date that a product has a special price. */
  special_from_date?: InputMaybe<FilterTypeInput>;
  /** The discounted price of the product. Do not include the currency code. */
  special_price?: InputMaybe<FilterTypeInput>;
  /** The end date that a product has a special price. */
  special_to_date?: InputMaybe<FilterTypeInput>;
  /** The file name of a swatch image */
  swatch_image?: InputMaybe<FilterTypeInput>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: InputMaybe<FilterTypeInput>;
  /** The label assigned to a product's thumbnail image. */
  thumbnail_label?: InputMaybe<FilterTypeInput>;
  /** The price when tier pricing is in effect and the items purchased threshold has been reached. */
  tier_price?: InputMaybe<FilterTypeInput>;
  /** Timestamp indicating when the product was updated. */
  updated_at?: InputMaybe<FilterTypeInput>;
  /** The part of the URL that identifies the product */
  url_key?: InputMaybe<FilterTypeInput>;
  url_path?: InputMaybe<FilterTypeInput>;
  /** The weight of the item, in units defined by the store. */
  weight?: InputMaybe<FilterTypeInput>;
};

/** Product image information. Contains the image URL and label. */
export type ProductImage = MediaGalleryInterface & {
  __typename?: 'ProductImage';
  /** Whether the image is hidden from view. */
  disabled?: Maybe<Scalars['Boolean']>;
  /** The label of the product image or video. */
  label?: Maybe<Scalars['String']>;
  /** The media item's position after it has been sorted. */
  position?: Maybe<Scalars['Int']>;
  /** The URL of the product image or video. */
  url?: Maybe<Scalars['String']>;
};

/** Product Information used for Pickup Locations search. */
export type ProductInfoInput = {
  /** Product SKU. */
  sku: Scalars['String'];
};

/**
 * The ProductInterface contains attributes that are common to all types of
 * products. Note that descriptions may not be available for custom and EAV attributes.
 */
export type ProductInterface = {
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']>;
  /**
   * Relative canonical URL. This value is returned only if the system setting 'Use
   * Canonical Link Meta Tag For Products' is enabled
   */
  canonical_url?: Maybe<Scalars['String']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  color?: Maybe<Scalars['Int']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** List of product custom attributes details. */
  custom_attributes: Array<Maybe<CustomAttribute>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  fashion_color?: Maybe<Scalars['Int']>;
  fashion_material?: Maybe<Scalars['String']>;
  fashion_size?: Maybe<Scalars['Int']>;
  fashion_style?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['Int']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']>;
  has_video?: Maybe<Scalars['Int']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** Indicates whether the product can be returned */
  is_returnable?: Maybe<Scalars['String']>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']>;
  /** An array of Media Gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use product's `media_gallery` instead
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']>;
  /**
   * The beginning date for new product listings, and determines if the product is featured as a new product.
   * @deprecated The field should not be used on the storefront.
   */
  new_from_date?: Maybe<Scalars['String']>;
  /**
   * The end date for new product listings.
   * @deprecated The field should not be used on the storefront.
   */
  new_to_date?: Maybe<Scalars['String']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  /**
   * A ProductPrices object, indicating the price of an item.
   * @deprecated Use price_range for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** A PriceRange object, indicating the range of prices for the product */
  price_range: PriceRange;
  /** An array of TierPrice objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** An array of ProductLinks objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /** Related Products */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']>;
  /** The end date that a product has a special price. */
  special_to_date?: Maybe<Scalars['String']>;
  staged: Scalars['Boolean'];
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** The file name of a swatch image */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use __typename instead.
   */
  type_id?: Maybe<Scalars['String']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  video_file?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
};


/**
 * The ProductInterface contains attributes that are common to all types of
 * products. Note that descriptions may not be available for custom and EAV attributes.
 */
export type ProductInterfaceReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

/** ProductLinks is an implementation of ProductLinksInterface. */
export type ProductLinks = ProductLinksInterface & {
  __typename?: 'ProductLinks';
  /** One of related, associated, upsell, or crosssell. */
  link_type?: Maybe<Scalars['String']>;
  /** The SKU of the linked product. */
  linked_product_sku?: Maybe<Scalars['String']>;
  /** The type of linked product (simple, virtual, bundle, downloadable, grouped, configurable). */
  linked_product_type?: Maybe<Scalars['String']>;
  /** The position within the list of product links. */
  position?: Maybe<Scalars['Int']>;
  /** The identifier of the linked product. */
  sku?: Maybe<Scalars['String']>;
};

/** ProductLinks contains information about linked products, including the link type and product type of each item. */
export type ProductLinksInterface = {
  /** One of related, associated, upsell, or crosssell. */
  link_type?: Maybe<Scalars['String']>;
  /** The SKU of the linked product. */
  linked_product_sku?: Maybe<Scalars['String']>;
  /** The type of linked product (simple, virtual, bundle, downloadable, grouped, configurable). */
  linked_product_type?: Maybe<Scalars['String']>;
  /** The position within the list of product links. */
  position?: Maybe<Scalars['Int']>;
  /** The identifier of the linked product. */
  sku?: Maybe<Scalars['String']>;
};

/** ProductMediaGalleryEntriesContent contains an image in base64 format and basic information about the image. */
export type ProductMediaGalleryEntriesContent = {
  __typename?: 'ProductMediaGalleryEntriesContent';
  /** The image in base64 format. */
  base64_encoded_data?: Maybe<Scalars['String']>;
  /** The file name of the image. */
  name?: Maybe<Scalars['String']>;
  /** The MIME type of the file, such as image/png. */
  type?: Maybe<Scalars['String']>;
};

/** ProductMediaGalleryEntriesVideoContent contains a link to a video file and basic information about the video. */
export type ProductMediaGalleryEntriesVideoContent = {
  __typename?: 'ProductMediaGalleryEntriesVideoContent';
  /** Must be external-video. */
  media_type?: Maybe<Scalars['String']>;
  /** A description of the video. */
  video_description?: Maybe<Scalars['String']>;
  /** Optional data about the video. */
  video_metadata?: Maybe<Scalars['String']>;
  /** Describes the video source. */
  video_provider?: Maybe<Scalars['String']>;
  /** The title of the video. */
  video_title?: Maybe<Scalars['String']>;
  /** The URL to the video. */
  video_url?: Maybe<Scalars['String']>;
};

/** Represents a product price. */
export type ProductPrice = {
  __typename?: 'ProductPrice';
  /** The price discount. Represents the difference between the regular and final price. */
  discount?: Maybe<ProductDiscount>;
  /** The final price of the product after discounts applied. */
  final_price: Money;
  /** The multiple FPTs that can be applied to a product price. */
  fixed_product_taxes?: Maybe<Array<Maybe<FixedProductTax>>>;
  /** The regular price of the product. */
  regular_price: Money;
};

/**
 * ProductPrices is deprecated, replaced by PriceRange. The ProductPrices object
 * contains the regular price of an item, as well as its minimum and maximum
 * prices. Only composite products, which include bundle, configurable, and grouped
 * products, can contain a minimum and maximum price.
 */
export type ProductPrices = {
  __typename?: 'ProductPrices';
  /**
   * The highest possible final price for all the options defined within a
   * composite product. If you are specifying a price range, this would be the to value.
   * @deprecated Use PriceRange.maximum_price.
   */
  maximalPrice?: Maybe<Price>;
  /**
   * The lowest possible final price for all the options defined within a composite
   * product. If you are specifying a price range, this would be the from value.
   * @deprecated Use PriceRange.minimum_price.
   */
  minimalPrice?: Maybe<Price>;
  /**
   * The base price of a product.
   * @deprecated Use regular_price from PriceRange.minimum_price or PriceRange.maximum_price.
   */
  regularPrice?: Maybe<Price>;
};

/** Details of a product review */
export type ProductReview = {
  __typename?: 'ProductReview';
  /** The average rating for product review. */
  average_rating: Scalars['Float'];
  /** Date indicating when the review was created. */
  created_at: Scalars['String'];
  /** The customer's nickname. Defaults to the customer name, if logged in */
  nickname: Scalars['String'];
  /** Contains details about the reviewed product */
  product: ProductInterface;
  /** An array of ratings by rating category, such as quality, price, and value */
  ratings_breakdown: Array<Maybe<ProductReviewRating>>;
  /** The summary (title) of the review */
  summary: Scalars['String'];
  /** The review text. */
  text: Scalars['String'];
};

export type ProductReviewRating = {
  __typename?: 'ProductReviewRating';
  /** The label assigned to an aspect of a product that is being rated, such as quality or price */
  name: Scalars['String'];
  /** The rating value given by customer. By default, possible values range from 1 to 5. */
  value: Scalars['String'];
};

export type ProductReviewRatingInput = {
  /** An encoded rating ID. */
  id: Scalars['String'];
  /** An encoded rating value id. */
  value_id: Scalars['String'];
};

export type ProductReviewRatingMetadata = {
  __typename?: 'ProductReviewRatingMetadata';
  /** An encoded rating ID. */
  id: Scalars['String'];
  /** The label assigned to an aspect of a product that is being rated, such as quality or price */
  name: Scalars['String'];
  /** List of product review ratings sorted by position. */
  values: Array<Maybe<ProductReviewRatingValueMetadata>>;
};

export type ProductReviewRatingValueMetadata = {
  __typename?: 'ProductReviewRatingValueMetadata';
  /** A ratings scale, such as the number of stars awarded */
  value: Scalars['String'];
  /** An encoded rating value id. */
  value_id: Scalars['String'];
};

export type ProductReviewRatingsMetadata = {
  __typename?: 'ProductReviewRatingsMetadata';
  /** List of product reviews sorted by position */
  items: Array<Maybe<ProductReviewRatingMetadata>>;
};

export type ProductReviews = {
  __typename?: 'ProductReviews';
  /** An array of product reviews. */
  items: Array<Maybe<ProductReview>>;
  /** Metadata for pagination rendering. */
  page_info: SearchResultPageInfo;
};

/**
 * ProductSortInput is deprecated, use @ProductAttributeSortInput instead.
 * ProductSortInput specifies the attribute to use for sorting search results and
 * indicates whether the results are sorted in ascending or descending order.
 */
export type ProductSortInput = {
  /** The product's country of origin. */
  country_of_manufacture?: InputMaybe<SortEnum>;
  /** Timestamp indicating when the product was created. */
  created_at?: InputMaybe<SortEnum>;
  /** The name of a custom layout. */
  custom_layout?: InputMaybe<SortEnum>;
  /** XML code that is applied as a layout update to the product page. */
  custom_layout_update?: InputMaybe<SortEnum>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: InputMaybe<SortEnum>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: InputMaybe<SortEnum>;
  /** Indicates whether additional attributes have been created for the product. */
  has_options?: InputMaybe<SortEnum>;
  /** The relative path to the main image on the product page. */
  image?: InputMaybe<SortEnum>;
  /** The label assigned to a product image. */
  image_label?: InputMaybe<SortEnum>;
  /** Indicates whether the product can be returned */
  is_returnable?: InputMaybe<SortEnum>;
  /** A number representing the product's manufacturer. */
  manufacturer?: InputMaybe<SortEnum>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: InputMaybe<SortEnum>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: InputMaybe<SortEnum>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: InputMaybe<SortEnum>;
  /** The product name. Customers use this name to identify the product. */
  name?: InputMaybe<SortEnum>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  news_from_date?: InputMaybe<SortEnum>;
  /** The end date for new product listings. */
  news_to_date?: InputMaybe<SortEnum>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: InputMaybe<SortEnum>;
  /** The price of the item. */
  price?: InputMaybe<SortEnum>;
  /** Indicates whether the product has required options. */
  required_options?: InputMaybe<SortEnum>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: InputMaybe<SortEnum>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: InputMaybe<SortEnum>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: InputMaybe<SortEnum>;
  /** The label assigned to a product's small image. */
  small_image_label?: InputMaybe<SortEnum>;
  /** The beginning date that a product has a special price. */
  special_from_date?: InputMaybe<SortEnum>;
  /** The discounted price of the product. */
  special_price?: InputMaybe<SortEnum>;
  /** The end date that a product has a special price. */
  special_to_date?: InputMaybe<SortEnum>;
  /** The file name of a swatch image */
  swatch_image?: InputMaybe<SortEnum>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: InputMaybe<SortEnum>;
  /** The label assigned to a product's thumbnail image. */
  thumbnail_label?: InputMaybe<SortEnum>;
  /** The price when tier pricing is in effect and the items purchased threshold has been reached. */
  tier_price?: InputMaybe<SortEnum>;
  /** Timestamp indicating when the product was updated. */
  updated_at?: InputMaybe<SortEnum>;
  /** The part of the URL that identifies the product */
  url_key?: InputMaybe<SortEnum>;
  url_path?: InputMaybe<SortEnum>;
  /** The weight of the item, in units defined by the store. */
  weight?: InputMaybe<SortEnum>;
};

/** This enumeration states whether a product stock status is in stock or out of stock */
export enum ProductStockStatus {
  InStock = 'IN_STOCK',
  OutOfStock = 'OUT_OF_STOCK'
}

/**
 * ProductTierPrices is deprecated and has been replaced by TierPrice. The
 * ProductTierPrices object defines a tier price, which is a quantity discount
 * offered to a specific customer group.
 */
export type ProductTierPrices = {
  __typename?: 'ProductTierPrices';
  /**
   * The ID of the customer group.
   * @deprecated customer_group_id is not relevant for storefront.
   */
  customer_group_id?: Maybe<Scalars['String']>;
  /**
   * The percentage discount of the item.
   * @deprecated ProductTierPrices is deprecated. Use TierPrice.discount.
   */
  percentage_value?: Maybe<Scalars['Float']>;
  /**
   * The number of items that must be purchased to qualify for tier pricing.
   * @deprecated ProductTierPrices is deprecated, use TierPrice.quantity.
   */
  qty?: Maybe<Scalars['Float']>;
  /**
   * The price of the fixed price item.
   * @deprecated ProductTierPrices is deprecated. Use TierPrice.final_price
   */
  value?: Maybe<Scalars['Float']>;
  /**
   * The ID assigned to the website.
   * @deprecated website_id is not relevant for storefront.
   */
  website_id?: Maybe<Scalars['Float']>;
};

/** Contains information about a product video. */
export type ProductVideo = MediaGalleryInterface & {
  __typename?: 'ProductVideo';
  /** Whether the image is hidden from view. */
  disabled?: Maybe<Scalars['Boolean']>;
  /** The label of the product image or video. */
  label?: Maybe<Scalars['String']>;
  /** The media item's position after it has been sorted. */
  position?: Maybe<Scalars['Int']>;
  /** The URL of the product image or video. */
  url?: Maybe<Scalars['String']>;
  /** Contains a ProductMediaGalleryEntriesVideoContent object. */
  video_content?: Maybe<ProductMediaGalleryEntriesVideoContent>;
};

/** The Products object is the top-level object returned in a product search. */
export type Products = {
  __typename?: 'Products';
  /** Layered navigation aggregations. */
  aggregations?: Maybe<Array<Maybe<Aggregation>>>;
  /**
   * Layered navigation filters array.
   * @deprecated Use aggregations instead
   */
  filters?: Maybe<Array<Maybe<LayerFilter>>>;
  /** An array of products that match the specified search criteria. */
  items?: Maybe<Array<Maybe<ProductInterface>>>;
  /** An object that includes the page_info and currentPage values specified in the query. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** An object that includes the default sort field and all available sort fields. */
  sort_fields?: Maybe<SortFields>;
  /**
   * The number of products that are marked as visible. By default, in complex
   * products, parent products are visible, but their child products are not.
   */
  total_count?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  /** Return details about custom EAV attributes, and optionally, system attributes. */
  attributesMetadata?: Maybe<AttributesMetadata>;
  /** Get a list of available store views and their config information. */
  availableStores?: Maybe<Array<Maybe<StoreConfig>>>;
  /** Returns information about shopping cart */
  cart?: Maybe<Cart>;
  categories?: Maybe<CategoryResult>;
  /**
   * The category query searches for categories that match the criteria specified in the search and filter attributes.
   * @deprecated Use 'categoryList' query instead of 'category' query
   */
  category?: Maybe<CategoryTree>;
  /** Returns an array of categories based on the specified filters. */
  categoryList?: Maybe<Array<Maybe<CategoryTree>>>;
  /** Retrieves an array of configuration data for the chat widget. */
  chatData?: Maybe<ChatData>;
  /** The Checkout Agreements information */
  checkoutAgreements?: Maybe<Array<Maybe<CheckoutAgreement>>>;
  /** The CMS block query returns information about CMS blocks */
  cmsBlocks?: Maybe<CmsBlocks>;
  /** The CMS page query returns information about a CMS page */
  cmsPage?: Maybe<CmsPage>;
  /** Return products that have been added to the specified compare list */
  compareList?: Maybe<CompareList>;
  /** The countries query provides information for all countries. */
  countries?: Maybe<Array<Maybe<Country>>>;
  /** The countries query provides information for a single country. */
  country?: Maybe<Country>;
  /** The currency query returns information about store currency. */
  currency?: Maybe<Currency>;
  /** The customAttributeMetadata query returns the attribute type, given an attribute code and entity type */
  customAttributeMetadata?: Maybe<CustomAttributeMetadata>;
  /** The customer query returns information about a customer account */
  customer?: Maybe<Customer>;
  /** Returns information about the customer shopping cart */
  customerCart: Cart;
  /** The query returns the contents of a customer's downloadable products */
  customerDownloadableProducts?: Maybe<CustomerDownloadableProducts>;
  /** @deprecated Use orders from customer instead */
  customerOrders?: Maybe<CustomerOrders>;
  /** Return a list of customer payment tokens */
  customerPaymentTokens?: Maybe<CustomerPaymentTokens>;
  /** Return a list of dynamic blocks filtered by type, location, or UIDs */
  dynamicBlocks: DynamicBlocks;
  /** Returns status of Easy Email Capture for Checkout. */
  emailCaptureCheckout?: Maybe<IsConfigSettingEnabledOutput>;
  /** Returns status of Easy Email Capture for Newsletter. */
  emailCaptureNewsletter?: Maybe<IsConfigSettingEnabledOutput>;
  /** Retrieve secure PayPal url for Payments Pro Hosted Solution transaction. */
  getHostedProUrl?: Maybe<HostedProUrl>;
  /** Retrieve payment credentials for transaction. Use this query for Payflow Link and Payments Advanced payment methods. */
  getPayflowLinkToken?: Maybe<PayflowLinkToken>;
  /** Get information for gift card account by code */
  giftCardAccount?: Maybe<GiftCardAccount>;
  /** Return the specified gift registry. Some details will not be available to guests. */
  giftRegistry?: Maybe<GiftRegistry>;
  /** Search for gift registries by specifying a registrant email address */
  giftRegistryEmailSearch?: Maybe<Array<Maybe<GiftRegistrySearchResult>>>;
  /** Search for gift registries by specifying a registry URL key */
  giftRegistryIdSearch?: Maybe<Array<Maybe<GiftRegistrySearchResult>>>;
  /** Search for gift registries by specifying the registrant name and registry type ID */
  giftRegistryTypeSearch?: Maybe<Array<Maybe<GiftRegistrySearchResult>>>;
  /** Get a list of available gift registry types */
  giftRegistryTypes?: Maybe<Array<Maybe<GiftRegistryType>>>;
  isEmailAvailable?: Maybe<IsEmailAvailableOutput>;
  /** Retrieves information about an order by order id. */
  orderData?: Maybe<Order>;
  /** The pickup locations query searches for locations that match the search request requirements. */
  pickupLocations?: Maybe<PickupLocations>;
  /** Retrieves metadata required by clients to render the Reviews section. */
  productReviewRatingsMetadata: ProductReviewRatingsMetadata;
  /** The products query searches for products that match the criteria specified in the search and filter attributes. */
  products?: Maybe<Products>;
  /** Returns details about Google reCAPTCHA V3-Invisible configuration. */
  recaptchaV3Config?: Maybe<ReCaptchaConfigurationV3>;
  /**
   * Return the full details for a specified product, category, or CMS page given
   * the specified url_key, appended by the url_suffix, if one exists
   */
  route?: Maybe<RoutableInterface>;
  /** The store config query */
  storeConfig?: Maybe<StoreConfig>;
  /** Retrieves an array of configuration data for different types of tracking. */
  trackingData?: Maybe<TrackingData>;
  /**
   * The urlResolver query returns the relative URL for a specified product,
   * category or CMS page, using as input a url_key appended by the url_suffix, if one exists
   * @deprecated Use the 'route' query instead
   */
  urlResolver?: Maybe<EntityUrl>;
  /**
   * The wishlist query returns the contents of a customer's wish list
   * @deprecated Moved under `Customer` `wishlist`
   */
  wishlist?: Maybe<WishlistOutput>;
};


export type QueryAttributesMetadataArgs = {
  attributeUids?: InputMaybe<Array<Scalars['ID']>>;
  entityType: AttributeEntityTypeEnum;
  showSystemAttributes?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAvailableStoresArgs = {
  useCurrentGroup?: InputMaybe<Scalars['Boolean']>;
};


export type QueryCartArgs = {
  cart_id: Scalars['String'];
};


export type QueryCategoriesArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  filters?: InputMaybe<CategoryFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type QueryCategoryListArgs = {
  filters?: InputMaybe<CategoryFilterInput>;
};


export type QueryCmsBlocksArgs = {
  identifiers?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCmsPageArgs = {
  id?: InputMaybe<Scalars['Int']>;
  identifier?: InputMaybe<Scalars['String']>;
};


export type QueryCompareListArgs = {
  uid: Scalars['ID'];
};


export type QueryCountryArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryCustomAttributeMetadataArgs = {
  attributes: Array<AttributeInput>;
};


export type QueryDynamicBlocksArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<DynamicBlocksFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type QueryGetHostedProUrlArgs = {
  input: HostedProUrlInput;
};


export type QueryGetPayflowLinkTokenArgs = {
  input: PayflowLinkTokenInput;
};


export type QueryGiftCardAccountArgs = {
  input: GiftCardAccountInput;
};


export type QueryGiftRegistryArgs = {
  giftRegistryUid: Scalars['ID'];
};


export type QueryGiftRegistryEmailSearchArgs = {
  email: Scalars['String'];
};


export type QueryGiftRegistryIdSearchArgs = {
  giftRegistryUid: Scalars['ID'];
};


export type QueryGiftRegistryTypeSearchArgs = {
  firstName: Scalars['String'];
  giftRegistryTypeUid?: InputMaybe<Scalars['ID']>;
  lastName: Scalars['String'];
};


export type QueryIsEmailAvailableArgs = {
  email: Scalars['String'];
};


export type QueryOrderDataArgs = {
  orderId: Scalars['String'];
};


export type QueryPickupLocationsArgs = {
  area?: InputMaybe<AreaInput>;
  currentPage?: InputMaybe<Scalars['Int']>;
  filters?: InputMaybe<PickupLocationFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']>;
  productsInfo?: InputMaybe<Array<InputMaybe<ProductInfoInput>>>;
  sort?: InputMaybe<PickupLocationSortInput>;
};


export type QueryProductsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<ProductAttributeFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ProductAttributeSortInput>;
};


export type QueryRouteArgs = {
  url: Scalars['String'];
};


export type QueryUrlResolverArgs = {
  url: Scalars['String'];
};

/** Contains reCAPTCHA V3-Invisible configuration details. */
export type ReCaptchaConfigurationV3 = {
  __typename?: 'ReCaptchaConfigurationV3';
  /** The position of the invisible reCAPTCHA badge on each page. */
  badge_position: Scalars['String'];
  /** The message that appears to the user if validation fails. */
  failure_message: Scalars['String'];
  /** A list of forms on the storefront that have been configured to use reCAPTCHA V3. */
  forms: Array<Maybe<ReCaptchaFormEnum>>;
  /** A two-character code that specifies the language that is used for Google reCAPTCHA text and messaging. */
  language_code?: Maybe<Scalars['String']>;
  /** The minimum score that identifies a user interaction as a potential risk. */
  minimum_score: Scalars['Float'];
  /** The website key generated when the Google reCAPTCHA account was registered. */
  website_key: Scalars['String'];
};

export enum ReCaptchaFormEnum {
  Braintree = 'BRAINTREE',
  Contact = 'CONTACT',
  CustomerCreate = 'CUSTOMER_CREATE',
  CustomerEdit = 'CUSTOMER_EDIT',
  CustomerForgotPassword = 'CUSTOMER_FORGOT_PASSWORD',
  CustomerLogin = 'CUSTOMER_LOGIN',
  Newsletter = 'NEWSLETTER',
  PlaceOrder = 'PLACE_ORDER',
  ProductReview = 'PRODUCT_REVIEW',
  Sendfriend = 'SENDFRIEND'
}

export type Region = {
  __typename?: 'Region';
  code?: Maybe<Scalars['String']>;
  /** The unique ID for a `Region` object. */
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type RemoveCouponFromCartInput = {
  cart_id: Scalars['String'];
};

export type RemoveCouponFromCartOutput = {
  __typename?: 'RemoveCouponFromCartOutput';
  cart?: Maybe<Cart>;
};

/** Defines the input required to run the removeGiftCardFromCart mutation */
export type RemoveGiftCardFromCartInput = {
  /** The unique ID that identifies the customer's cart */
  cart_id: Scalars['String'];
  /** The gift card code to be removed to the cart */
  gift_card_code: Scalars['String'];
};

/** Defines the possible output for the removeGiftCardFromCart mutation */
export type RemoveGiftCardFromCartOutput = {
  __typename?: 'RemoveGiftCardFromCartOutput';
  /** Describes the contents of the specified shopping cart */
  cart: Cart;
};

export type RemoveGiftRegistryItemsOutput = {
  __typename?: 'RemoveGiftRegistryItemsOutput';
  /** The gift registry after removing items */
  gift_registry?: Maybe<GiftRegistry>;
};

export type RemoveGiftRegistryOutput = {
  __typename?: 'RemoveGiftRegistryOutput';
  /** Indicates whether the gift registry was successfully deleted */
  success: Scalars['Boolean'];
};

export type RemoveGiftRegistryRegistrantsOutput = {
  __typename?: 'RemoveGiftRegistryRegistrantsOutput';
  /** The gift registry after deleting registrants */
  gift_registry?: Maybe<GiftRegistry>;
};

export type RemoveItemFromCartInput = {
  cart_id: Scalars['String'];
  /** Deprecated. Use `cart_item_uid` instead. */
  cart_item_id?: InputMaybe<Scalars['Int']>;
  /** Required field. The unique ID for a `CartItemInterface` object */
  cart_item_uid?: InputMaybe<Scalars['ID']>;
};

export type RemoveItemFromCartOutput = {
  __typename?: 'RemoveItemFromCartOutput';
  cart: Cart;
};

export type RemoveProductsFromCompareListInput = {
  /** An array of product IDs to remove from the compare list */
  products: Array<InputMaybe<Scalars['ID']>>;
  /** The unique identifier of the compare list to modify */
  uid: Scalars['ID'];
};

/** Contains the customer's wish list and any errors encountered */
export type RemoveProductsFromWishlistOutput = {
  __typename?: 'RemoveProductsFromWishlistOutput';
  /** An array of errors encountered while deleting products from a wish list */
  user_errors: Array<Maybe<WishListUserInputError>>;
  /** Contains the wish list with after items were successfully deleted */
  wishlist: Wishlist;
};

export type RemoveReturnTrackingInput = {
  /** The unique ID for a `ReturnShippingTracking` object */
  return_shipping_tracking_uid: Scalars['ID'];
};

export type RemoveReturnTrackingOutput = {
  __typename?: 'RemoveReturnTrackingOutput';
  /** Contains details about the modified return */
  return?: Maybe<Return>;
};

export type RemoveRewardPointsFromCartOutput = {
  __typename?: 'RemoveRewardPointsFromCartOutput';
  /** The customer cart after reward points are removed */
  cart: Cart;
};

/** Defines the input required to run the removeStoreCreditFromCart mutation */
export type RemoveStoreCreditFromCartInput = {
  /** The unique ID that identifies the customer's cart */
  cart_id: Scalars['String'];
};

/** Defines the possible output for the removeStoreCreditFromCart mutation */
export type RemoveStoreCreditFromCartOutput = {
  __typename?: 'RemoveStoreCreditFromCartOutput';
  /** Describes the contents of the specified shopping cart */
  cart: Cart;
};

export type ReorderItemsOutput = {
  __typename?: 'ReorderItemsOutput';
  /** Contains detailed information about the customer's cart. */
  cart: Cart;
  /** An array of reordering errors. */
  userInputErrors: Array<Maybe<CheckoutUserInputError>>;
};

export type RequestReturnInput = {
  /** Text the buyer entered that describes the reason for the refund request */
  comment_text?: InputMaybe<Scalars['String']>;
  /** An email address the buyer enters to receive notifications about the status of the return */
  contact_email?: InputMaybe<Scalars['String']>;
  /** An array of items to be returned */
  items: Array<InputMaybe<RequestReturnItemInput>>;
  /** The unique ID for a `Order` object */
  order_uid: Scalars['ID'];
};

export type RequestReturnItemInput = {
  /** Contains details about a custom attribute that was entered, such as text or a file */
  entered_custom_attributes?: InputMaybe<Array<InputMaybe<EnteredCustomAttributeInput>>>;
  /** The unique ID for a `OrderItemInterface` object */
  order_item_uid: Scalars['ID'];
  /** The quantity of the item to be returned */
  quantity_to_return: Scalars['Float'];
  /**
   * An array of selected custom option IDs associated with the item to be
   * returned. For example, the IDs for the selected color and size of a
   * configurable product
   */
  selected_custom_attributes?: InputMaybe<Array<InputMaybe<SelectedCustomAttributeInput>>>;
};

export type RequestReturnOutput = {
  __typename?: 'RequestReturnOutput';
  /** Contains details about a single return request */
  return?: Maybe<Return>;
  /** Contains an array of return requests */
  returns?: Maybe<Returns>;
};


export type RequestReturnOutputReturnsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

/** Customer return */
export type Return = {
  __typename?: 'Return';
  /** A list of shipping carriers available for returns */
  available_shipping_carriers?: Maybe<Array<Maybe<ReturnShippingCarrier>>>;
  /** A list of comments posted for the return request */
  comments?: Maybe<Array<Maybe<ReturnComment>>>;
  /** The date the return was requested */
  created_at: Scalars['String'];
  /** The data from customer who created the return request */
  customer: ReturnCustomer;
  /** A list of items being returned */
  items?: Maybe<Array<Maybe<ReturnItem>>>;
  /** Human-readable return number */
  number: Scalars['String'];
  /** The order associated with the return */
  order?: Maybe<CustomerOrder>;
  /** Shipping information for the return */
  shipping?: Maybe<ReturnShipping>;
  /** The status of the return request */
  status?: Maybe<ReturnStatus>;
  /** The unique ID for a `Return` object */
  uid: Scalars['ID'];
};

export type ReturnComment = {
  __typename?: 'ReturnComment';
  /** The name or author who posted the comment */
  author_name: Scalars['String'];
  /** The date and time the comment was posted */
  created_at: Scalars['String'];
  /** The contents of the comment */
  text: Scalars['String'];
  /** The unique ID for a `ReturnComment` object */
  uid: Scalars['ID'];
};

export type ReturnCustomAttribute = {
  __typename?: 'ReturnCustomAttribute';
  /** A description of the attribute */
  label: Scalars['String'];
  /** The unique ID for a `ReturnCustomAttribute` object */
  uid: Scalars['ID'];
  /** A JSON-encoded value of the attribute */
  value: Scalars['String'];
};

/** The Customer information for the return. */
export type ReturnCustomer = {
  __typename?: 'ReturnCustomer';
  /** Customer email address. */
  email: Scalars['String'];
  /** Customer first name. */
  firstname?: Maybe<Scalars['String']>;
  /** Customer last name. */
  lastname?: Maybe<Scalars['String']>;
};

export type ReturnItem = {
  __typename?: 'ReturnItem';
  /** Return item custom attributes that are visible on the storefront */
  custom_attributes?: Maybe<Array<Maybe<ReturnCustomAttribute>>>;
  /** Provides access to the product being returned, including information about selected and entered options */
  order_item: OrderItemInterface;
  /** The quantity of the item the merchant authorized to be returned */
  quantity: Scalars['Float'];
  /** The quantity of the item requested to be returned */
  request_quantity: Scalars['Float'];
  /** The return status of the item */
  status: ReturnItemStatus;
  /** The unique ID for a `ReturnItem` object */
  uid: Scalars['ID'];
};

export enum ReturnItemStatus {
  Approved = 'APPROVED',
  Authorized = 'AUTHORIZED',
  Denied = 'DENIED',
  Pending = 'PENDING',
  Received = 'RECEIVED',
  Rejected = 'REJECTED'
}

export type ReturnShipping = {
  __typename?: 'ReturnShipping';
  /** The merchant-defined return shipping address */
  address?: Maybe<ReturnShippingAddress>;
  /**
   * The unique ID for a `ReturnShippingTracking` object. If a single UID is
   * specified, contains a single tracking record. Otherwise, contains all tracking information
   */
  tracking?: Maybe<Array<Maybe<ReturnShippingTracking>>>;
};


export type ReturnShippingTrackingArgs = {
  uid?: InputMaybe<Scalars['ID']>;
};

export type ReturnShippingAddress = {
  __typename?: 'ReturnShippingAddress';
  /** The city for product returns */
  city: Scalars['String'];
  /** The merchant's contact person */
  contact_name?: Maybe<Scalars['String']>;
  /** An object that defines the country for product returns */
  country: Country;
  /** The postal code for product returns */
  postcode: Scalars['String'];
  /** An object that defines the state or province for product returns */
  region: Region;
  /** The street address for product returns */
  street: Array<Maybe<Scalars['String']>>;
  /** The telephone number for product returns */
  telephone?: Maybe<Scalars['String']>;
};

export type ReturnShippingCarrier = {
  __typename?: 'ReturnShippingCarrier';
  /** A description of the shipping carrier */
  label: Scalars['String'];
  /** The unique ID for a `ReturnShippingCarrier` object assigned to the shipping carrier */
  uid: Scalars['ID'];
};

export type ReturnShippingTracking = {
  __typename?: 'ReturnShippingTracking';
  /** Contains details of a shipping carrier */
  carrier: ReturnShippingCarrier;
  /** Contains details about the status of a shipment */
  status?: Maybe<ReturnShippingTrackingStatus>;
  /** A tracking number assigned by the carrier */
  tracking_number: Scalars['String'];
  /** The unique ID for a `ReturnShippingTracking` object assigned to the tracking item */
  uid: Scalars['ID'];
};

export type ReturnShippingTrackingStatus = {
  __typename?: 'ReturnShippingTrackingStatus';
  /** Text that describes the status */
  text: Scalars['String'];
  /** Indicates whether the status type is informational or an error */
  type: ReturnShippingTrackingStatusType;
};

export enum ReturnShippingTrackingStatusType {
  Error = 'ERROR',
  Information = 'INFORMATION'
}

export enum ReturnStatus {
  Approved = 'APPROVED',
  Authorized = 'AUTHORIZED',
  Closed = 'CLOSED',
  Denied = 'DENIED',
  PartiallyApproved = 'PARTIALLY_APPROVED',
  PartiallyAuthorized = 'PARTIALLY_AUTHORIZED',
  PartiallyReceived = 'PARTIALLY_RECEIVED',
  PartiallyRejected = 'PARTIALLY_REJECTED',
  Pending = 'PENDING',
  ProcessedAndClosed = 'PROCESSED_AND_CLOSED',
  Received = 'RECEIVED',
  Rejected = 'REJECTED'
}

export type Returns = {
  __typename?: 'Returns';
  /** A list of return requests */
  items?: Maybe<Array<Maybe<Return>>>;
  /** Pagination metadata */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The total number of return requests */
  total_count?: Maybe<Scalars['Int']>;
};

export type RevokeCustomerTokenOutput = {
  __typename?: 'RevokeCustomerTokenOutput';
  result: Scalars['Boolean'];
};

export type RewardPoints = {
  __typename?: 'RewardPoints';
  /** The current balance of reward points */
  balance?: Maybe<RewardPointsAmount>;
  /**
   * The balance history of reward points. If the ability for customers to view the
   * balance history has been disabled in the Admin, this field will be set to null
   */
  balance_history?: Maybe<Array<Maybe<RewardPointsBalanceHistoryItem>>>;
  /** The current exchange rates for reward points */
  exchange_rates?: Maybe<RewardPointsExchangeRates>;
  /** The subscription status of emails related to reward points */
  subscription_status?: Maybe<RewardPointsSubscriptionStatus>;
};

export type RewardPointsAmount = {
  __typename?: 'RewardPointsAmount';
  /** Reward points amount in store currency */
  money: Money;
  /** Reward points amount in points */
  points: Scalars['Float'];
};

export type RewardPointsBalanceHistoryItem = {
  __typename?: 'RewardPointsBalanceHistoryItem';
  /** Reward points balance after the completion of the transaction */
  balance?: Maybe<RewardPointsAmount>;
  /** The reason the balance changed */
  change_reason: Scalars['String'];
  /** Transaction date */
  date: Scalars['String'];
  /** The number of points added or deducted in the transaction */
  points_change: Scalars['Float'];
};

/** Exchange rates depend on the customer group */
export type RewardPointsExchangeRates = {
  __typename?: 'RewardPointsExchangeRates';
  /** How many points are earned for a given amount spent */
  earning?: Maybe<RewardPointsRate>;
  /** How many points must be redeemed to get a given amount of currency discount at the checkout */
  redemption?: Maybe<RewardPointsRate>;
};

export type RewardPointsRate = {
  __typename?: 'RewardPointsRate';
  /**
   * The money value for exchange rate. For earnings this is amount spent to earn
   * the specified points. For redemption this is the amount of money the number of
   * points represents.
   */
  currency_amount: Scalars['Float'];
  /**
   * The number of points for exchange rate. For earnings this is the number of
   * points earned. For redemption this is the number of points needed for redemption.
   */
  points: Scalars['Float'];
};

export type RewardPointsSubscriptionStatus = {
  __typename?: 'RewardPointsSubscriptionStatus';
  /** Customer subscription status to 'Reward points balance updates' emails */
  balance_updates: RewardPointsSubscriptionStatusesEnum;
  /** Customer subscription status to 'Reward points expiration notifications' emails */
  points_expiration_notifications: RewardPointsSubscriptionStatusesEnum;
};

export enum RewardPointsSubscriptionStatusesEnum {
  NotSubscribed = 'NOT_SUBSCRIBED',
  Subscribed = 'SUBSCRIBED'
}

/** Routable entities serve as the model for a rendered page */
export type RoutableInterface = {
  /**
   * Contains 0 when there is no redirect error. A value of 301 indicates the URL
   * of the requested resource has been changed permanently, while a value of 302
   * indicates a temporary redirect
   */
  redirect_code: Scalars['Int'];
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original */
  relative_url?: Maybe<Scalars['String']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
};

/** Comment item details */
export type SalesCommentItem = {
  __typename?: 'SalesCommentItem';
  /** The text of the message */
  message: Scalars['String'];
  /** The timestamp of the comment */
  timestamp: Scalars['String'];
};

export type SalesItemInterface = {
  __typename?: 'SalesItemInterface';
  /** The entered gift message for the order item */
  gift_message?: Maybe<GiftMessage>;
};

/** SearchResultPageInfo provides navigation for the query response */
export type SearchResultPageInfo = {
  __typename?: 'SearchResultPageInfo';
  /** Specifies which page of results to return */
  current_page?: Maybe<Scalars['Int']>;
  /** Specifies the maximum number of items to return */
  page_size?: Maybe<Scalars['Int']>;
  /** Total pages */
  total_pages?: Maybe<Scalars['Int']>;
};

/** Defines selectable input types of the attribute. */
export type SelectableInputTypeInterface = {
  /** An array of attribute options. */
  attribute_options?: Maybe<Array<Maybe<AttributeOptionInterface>>>;
};

export type SelectedAttributeOption = {
  __typename?: 'SelectedAttributeOption';
  /** Selected attribute option details. */
  attribute_option?: Maybe<Array<Maybe<AttributeOptionInterface>>>;
};

export type SelectedBundleOption = {
  __typename?: 'SelectedBundleOption';
  /** @deprecated Use `uid` instead */
  id: Scalars['Int'];
  label: Scalars['String'];
  type: Scalars['String'];
  /** The unique ID for a `SelectedBundleOption` object */
  uid: Scalars['ID'];
  values: Array<Maybe<SelectedBundleOptionValue>>;
};

export type SelectedBundleOptionValue = {
  __typename?: 'SelectedBundleOptionValue';
  /** Use `uid` instead */
  id: Scalars['Int'];
  label: Scalars['String'];
  price: Scalars['Float'];
  quantity: Scalars['Float'];
  /** The unique ID for a `SelectedBundleOptionValue` object */
  uid: Scalars['ID'];
};

export type SelectedConfigurableOption = {
  __typename?: 'SelectedConfigurableOption';
  /** The unique ID for a `ConfigurableProductOptions` object */
  configurable_product_option_uid: Scalars['ID'];
  /** The unique ID for a `ConfigurableProductOptionsValues` object */
  configurable_product_option_value_uid: Scalars['ID'];
  /** @deprecated Use SelectedConfigurableOption.configurable_product_option_uid instead */
  id: Scalars['Int'];
  option_label: Scalars['String'];
  /** @deprecated Use SelectedConfigurableOption.configurable_product_option_value_uid instead */
  value_id: Scalars['Int'];
  value_label: Scalars['String'];
};

export type SelectedCustomAttributeInput = {
  /** A string that identifies the selected attribute */
  attribute_code: Scalars['String'];
  /** The unique ID for a `CustomAttribute` object of a selected custom attribute */
  value: Scalars['ID'];
};

export type SelectedCustomizableOption = {
  __typename?: 'SelectedCustomizableOption';
  /**
   * The unique ID for a `CustomizableRadioOption`, `CustomizableDropDownOption`,
   * `CustomizableMultipleOption`, etc. of `CustomizableOptionInterface` objects
   */
  customizable_option_uid: Scalars['ID'];
  /** @deprecated Use SelectedCustomizableOption.customizable_option_uid instead */
  id: Scalars['Int'];
  is_required: Scalars['Boolean'];
  label: Scalars['String'];
  sort_order: Scalars['Int'];
  type: Scalars['String'];
  values: Array<Maybe<SelectedCustomizableOptionValue>>;
};

export type SelectedCustomizableOptionValue = {
  __typename?: 'SelectedCustomizableOptionValue';
  /**
   * The unique ID for a `CustomizableMultipleValue`, `CustomizableRadioValue`,
   * `CustomizableCheckboxValue`, `CustomizableDropDownValue`, etc. objects
   */
  customizable_option_value_uid: Scalars['ID'];
  /** @deprecated Use SelectedCustomizableOptionValue.customizable_option_value_uid instead */
  id: Scalars['Int'];
  label: Scalars['String'];
  price: CartItemSelectedOptionValuePrice;
  value: Scalars['String'];
};

export type SelectedPaymentMethod = {
  __typename?: 'SelectedPaymentMethod';
  /** The payment method code */
  code: Scalars['String'];
  /** The purchase order number. */
  purchase_order_number?: Maybe<Scalars['String']>;
  /** The payment method title. */
  title: Scalars['String'];
};

export type SelectedShippingMethod = {
  __typename?: 'SelectedShippingMethod';
  amount: Money;
  /** @deprecated The field should not be used on the storefront */
  base_amount?: Maybe<Money>;
  carrier_code: Scalars['String'];
  carrier_title: Scalars['String'];
  method_code: Scalars['String'];
  method_title: Scalars['String'];
};

export type SendEmailToFriendInput = {
  product_id: Scalars['Int'];
  recipients: Array<InputMaybe<SendEmailToFriendRecipientInput>>;
  sender: SendEmailToFriendSenderInput;
};

export type SendEmailToFriendOutput = {
  __typename?: 'SendEmailToFriendOutput';
  recipients?: Maybe<Array<Maybe<SendEmailToFriendRecipient>>>;
  sender?: Maybe<SendEmailToFriendSender>;
};

export type SendEmailToFriendRecipient = {
  __typename?: 'SendEmailToFriendRecipient';
  email: Scalars['String'];
  name: Scalars['String'];
};

export type SendEmailToFriendRecipientInput = {
  email: Scalars['String'];
  name: Scalars['String'];
};

export type SendEmailToFriendSender = {
  __typename?: 'SendEmailToFriendSender';
  email: Scalars['String'];
  message: Scalars['String'];
  name: Scalars['String'];
};

export type SendEmailToFriendSenderInput = {
  email: Scalars['String'];
  message: Scalars['String'];
  name: Scalars['String'];
};

export type SendFriendConfiguration = {
  __typename?: 'SendFriendConfiguration';
  /** Indicates whether the Email to a Friend feature is enabled. */
  enabled_for_customers: Scalars['Boolean'];
  /** Indicates whether the Email to a Friend feature is enabled for guests. */
  enabled_for_guests: Scalars['Boolean'];
};

export type SetBillingAddressOnCartInput = {
  billing_address: BillingAddressInput;
  cart_id: Scalars['String'];
};

export type SetBillingAddressOnCartOutput = {
  __typename?: 'SetBillingAddressOnCartOutput';
  cart: Cart;
};

export type SetGiftOptionsOnCartInput = {
  /** The unique ID that identifies the shopper's cart */
  cart_id: Scalars['String'];
  /** Gift message details for the cart */
  gift_message?: InputMaybe<GiftMessageInput>;
  /** Whether customer requested gift receipt for the cart */
  gift_receipt_included: Scalars['Boolean'];
  /** The unique ID for a `GiftWrapping` object to be used for the cart */
  gift_wrapping_id?: InputMaybe<Scalars['ID']>;
  /** Whether customer requested printed card for the cart */
  printed_card_included: Scalars['Boolean'];
};

export type SetGiftOptionsOnCartOutput = {
  __typename?: 'SetGiftOptionsOnCartOutput';
  /** The modified cart object */
  cart: Cart;
};

export type SetGuestEmailOnCartInput = {
  cart_id: Scalars['String'];
  email: Scalars['String'];
};

export type SetGuestEmailOnCartOutput = {
  __typename?: 'SetGuestEmailOnCartOutput';
  cart: Cart;
};

export type SetPaymentMethodAndPlaceOrderInput = {
  cart_id: Scalars['String'];
  payment_method: PaymentMethodInput;
};

export type SetPaymentMethodOnCartInput = {
  cart_id: Scalars['String'];
  payment_method: PaymentMethodInput;
};

export type SetPaymentMethodOnCartOutput = {
  __typename?: 'SetPaymentMethodOnCartOutput';
  cart: Cart;
};

export type SetShippingAddressesOnCartInput = {
  cart_id: Scalars['String'];
  shipping_addresses: Array<InputMaybe<ShippingAddressInput>>;
};

export type SetShippingAddressesOnCartOutput = {
  __typename?: 'SetShippingAddressesOnCartOutput';
  cart: Cart;
};

export type SetShippingMethodsOnCartInput = {
  cart_id: Scalars['String'];
  shipping_methods: Array<InputMaybe<ShippingMethodInput>>;
};

export type SetShippingMethodsOnCartOutput = {
  __typename?: 'SetShippingMethodsOnCartOutput';
  cart: Cart;
};

export type ShareGiftRegistryInviteeInput = {
  /** The email address of the gift registry invitee */
  email: Scalars['String'];
  /** The name of the gift registry invitee */
  name: Scalars['String'];
};

export type ShareGiftRegistryOutput = {
  __typename?: 'ShareGiftRegistryOutput';
  /** Indicates whether the gift registry was successfully shared */
  is_shared: Scalars['Boolean'];
};

export type ShareGiftRegistrySenderInput = {
  /** A brief message from the sender */
  message: Scalars['String'];
  /** The sender of the gift registry invitation */
  name: Scalars['String'];
};

/** This enumeration defines whether bundle items must be shipped together. */
export enum ShipBundleItemsEnum {
  Separately = 'SEPARATELY',
  Together = 'TOGETHER'
}

export type ShipmentItem = ShipmentItemInterface & {
  __typename?: 'ShipmentItem';
  /** The unique ID for a `ShipmentItemInterface` object */
  id: Scalars['ID'];
  /** Associated order item */
  order_item?: Maybe<OrderItemInterface>;
  /** Name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** Sale price for the base product */
  product_sale_price: Money;
  /** SKU of the base product */
  product_sku: Scalars['String'];
  /** Number of shipped items */
  quantity_shipped: Scalars['Float'];
};

/** Order shipment item details */
export type ShipmentItemInterface = {
  /** The unique ID for a `ShipmentItemInterface` object */
  id: Scalars['ID'];
  /** Associated order item */
  order_item?: Maybe<OrderItemInterface>;
  /** Name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** Sale price for the base product */
  product_sale_price: Money;
  /** SKU of the base product */
  product_sku: Scalars['String'];
  /** Number of shipped items */
  quantity_shipped: Scalars['Float'];
};

/** Order shipment tracking details */
export type ShipmentTracking = {
  __typename?: 'ShipmentTracking';
  /** The shipping carrier for the order delivery */
  carrier: Scalars['String'];
  /** The tracking number of the order shipment */
  number?: Maybe<Scalars['String']>;
  /** The shipment tracking title */
  title: Scalars['String'];
};

export type ShippingAddressInput = {
  address?: InputMaybe<CartAddressInput>;
  customer_address_id?: InputMaybe<Scalars['Int']>;
  customer_notes?: InputMaybe<Scalars['String']>;
  /** The code of Pickup Location which will be used for In-Store Pickup. */
  pickup_location_code?: InputMaybe<Scalars['String']>;
};

export type ShippingCartAddress = CartAddressInterface & {
  __typename?: 'ShippingCartAddress';
  available_shipping_methods?: Maybe<Array<Maybe<AvailableShippingMethod>>>;
  /** @deprecated `cart_items_v2` should be used instead */
  cart_items?: Maybe<Array<Maybe<CartItemQuantity>>>;
  cart_items_v2?: Maybe<Array<Maybe<CartItemInterface>>>;
  city: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  country: CartAddressCountry;
  customer_notes?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  /** @deprecated This information shoud not be exposed on frontend */
  items_weight?: Maybe<Scalars['Float']>;
  lastname: Scalars['String'];
  pickup_location_code?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  region?: Maybe<CartAddressRegion>;
  selected_shipping_method?: Maybe<SelectedShippingMethod>;
  street: Array<Maybe<Scalars['String']>>;
  telephone: Scalars['String'];
};

/** Defines an individual shipping discount. This discount can be applied to shipping. */
export type ShippingDiscount = {
  __typename?: 'ShippingDiscount';
  /** The amount of the discount */
  amount: Money;
};

/** The Shipping handling details */
export type ShippingHandling = {
  __typename?: 'ShippingHandling';
  /** The shipping amount, excluding tax */
  amount_excluding_tax?: Maybe<Money>;
  /** The shipping amount, including tax */
  amount_including_tax?: Maybe<Money>;
  /** The applied discounts to the shipping */
  discounts?: Maybe<Array<Maybe<ShippingDiscount>>>;
  /** Contains details about taxes applied for shipping */
  taxes?: Maybe<Array<Maybe<TaxItem>>>;
  /** The total amount for shipping */
  total_amount: Money;
};

export type ShippingMethodInput = {
  carrier_code: Scalars['String'];
  method_code: Scalars['String'];
};

/** Simple Cart Item */
export type SimpleCartItem = CartItemInterface & {
  __typename?: 'SimpleCartItem';
  /** The list of available gift wrapping options for the cart item */
  available_gift_wrapping: Array<Maybe<GiftWrapping>>;
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<CartItemError>>>;
  /** The entered gift message for the cart item */
  gift_message?: Maybe<GiftMessage>;
  /** The selected gift wrapping for the cart item */
  gift_wrapping?: Maybe<GiftWrapping>;
  /** @deprecated Use `uid` instead */
  id: Scalars['String'];
  prices?: Maybe<CartItemPrices>;
  product: ProductInterface;
  quantity: Scalars['Float'];
  /** The unique ID for a `CartItemInterface` object */
  uid: Scalars['ID'];
};

/** A simple product is tangible and is usually sold in single units or in fixed quantities */
export type SimpleProduct = CustomizableProductInterface & PhysicalProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'SimpleProduct';
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']>;
  /**
   * Relative canonical URL. This value is returned only if the system setting 'Use
   * Canonical Link Meta Tag For Products' is enabled
   */
  canonical_url?: Maybe<Scalars['String']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  color?: Maybe<Scalars['Int']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** List of product custom attributes details. */
  custom_attributes: Array<Maybe<CustomAttribute>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  fashion_color?: Maybe<Scalars['Int']>;
  fashion_material?: Maybe<Scalars['String']>;
  fashion_size?: Maybe<Scalars['Int']>;
  fashion_style?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['Int']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']>;
  has_video?: Maybe<Scalars['Int']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** Indicates whether the product can be returned */
  is_returnable?: Maybe<Scalars['String']>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']>;
  /** An array of Media Gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use product's `media_gallery` instead
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']>;
  /**
   * The beginning date for new product listings, and determines if the product is featured as a new product.
   * @deprecated The field should not be used on the storefront.
   */
  new_from_date?: Maybe<Scalars['String']>;
  /**
   * The end date for new product listings.
   * @deprecated The field should not be used on the storefront.
   */
  new_to_date?: Maybe<Scalars['String']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  /**
   * A ProductPrices object, indicating the price of an item.
   * @deprecated Use price_range for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** A PriceRange object, indicating the range of prices for the product */
  price_range: PriceRange;
  /** An array of TierPrice objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** An array of ProductLinks objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /**
   * Contains 0 when there is no redirect error. A value of 301 indicates the URL
   * of the requested resource has been changed permanently, while a value of 302
   * indicates a temporary redirect
   */
  redirect_code: Scalars['Int'];
  /** Related Products */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original */
  relative_url?: Maybe<Scalars['String']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']>;
  /** The end date that a product has a special price. */
  special_to_date?: Maybe<Scalars['String']>;
  staged: Scalars['Boolean'];
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** The file name of a swatch image */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use __typename instead.
   */
  type_id?: Maybe<Scalars['String']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  video_file?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']>;
};


/** A simple product is tangible and is usually sold in single units or in fixed quantities */
export type SimpleProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type SimpleProductCartItemInput = {
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  data: CartItemInput;
};

/** A simple product wish list Item */
export type SimpleWishlistItem = WishlistItemInterface & {
  __typename?: 'SimpleWishlistItem';
  /** The date and time the item was added to the wish list */
  added_at: Scalars['String'];
  /** Custom options selected for the wish list item */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item */
  description?: Maybe<Scalars['String']>;
  /** The unique ID for a `WishlistItemInterface` object */
  id: Scalars['ID'];
  /** Product details of the wish list item */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item */
  quantity: Scalars['Float'];
};

/** This enumeration indicates whether to return results in ascending or descending order */
export enum SortEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type SortField = {
  __typename?: 'SortField';
  /** Label of sort field. */
  label?: Maybe<Scalars['String']>;
  /** Attribute code of sort field. */
  value?: Maybe<Scalars['String']>;
};

/** SortFields contains a default value for sort fields and all available sort fields. */
export type SortFields = {
  __typename?: 'SortFields';
  /** Default value of sort fields. */
  default?: Maybe<Scalars['String']>;
  /** Available sort fields. */
  options?: Maybe<Array<Maybe<SortField>>>;
};

/** The type contains information about a store config */
export type StoreConfig = {
  __typename?: 'StoreConfig';
  /** Footer Miscellaneous HTML */
  absolute_footer?: Maybe<Scalars['String']>;
  /** Allow Gift Receipt */
  allow_gift_receipt?: Maybe<Scalars['String']>;
  /** Allow Gift Wrapping on Order Level */
  allow_gift_wrapping_on_order?: Maybe<Scalars['String']>;
  /** Allow Gift Wrapping for Order Items */
  allow_gift_wrapping_on_order_items?: Maybe<Scalars['String']>;
  /** Indicates whether guest users can write product reviews. Possible values: 1 (Yes) and 0 (No) */
  allow_guests_to_write_product_reviews?: Maybe<Scalars['String']>;
  /** The value of the Allow Gift Messages for Order Items option */
  allow_items?: Maybe<Scalars['String']>;
  /** The value of the Allow Gift Messages on Order Level option */
  allow_order?: Maybe<Scalars['String']>;
  /** Allow Printed Card */
  allow_printed_card?: Maybe<Scalars['String']>;
  /** Enable autocomplete on login and forgot password forms */
  autocomplete_on_storefront?: Maybe<Scalars['Boolean']>;
  /** Base currency code */
  base_currency_code?: Maybe<Scalars['String']>;
  /** Base link URL for the store */
  base_link_url?: Maybe<Scalars['String']>;
  /** Base media URL for the store */
  base_media_url?: Maybe<Scalars['String']>;
  /** Base static URL for the store */
  base_static_url?: Maybe<Scalars['String']>;
  /** Base URL for the store */
  base_url?: Maybe<Scalars['String']>;
  /** Braintree cc vault status. */
  braintree_cc_vault_active?: Maybe<Scalars['String']>;
  /** Display Gift Wrapping Prices */
  cart_gift_wrapping?: Maybe<Scalars['String']>;
  /** Display Printed Card Prices */
  cart_printed_card?: Maybe<Scalars['String']>;
  /** Default Sort By. */
  catalog_default_sort_by?: Maybe<Scalars['String']>;
  /**
   * Corresponds to the 'Display Prices In Product Lists' field. It indicates how
   * FPT information is displayed on category pages
   */
  category_fixed_product_tax_display_setting?: Maybe<FixedProductTaxDisplaySettings>;
  /** Category URL Suffix. */
  category_url_suffix?: Maybe<Scalars['String']>;
  /** CMS Home Page */
  cms_home_page?: Maybe<Scalars['String']>;
  /** CMS No Cookies Page */
  cms_no_cookies?: Maybe<Scalars['String']>;
  /** CMS No Route Page */
  cms_no_route?: Maybe<Scalars['String']>;
  /**
   * A code assigned to the store to identify it
   * @deprecated Use `store_code` instead.
   */
  code?: Maybe<Scalars['String']>;
  /** The configuration setting determines which thumbnail should be used in the cart for configurable products. */
  configurable_thumbnail_source?: Maybe<Scalars['String']>;
  /** Indicates whether the Contact Us form in enabled. */
  contact_enabled: Scalars['Boolean'];
  /** Copyright */
  copyright?: Maybe<Scalars['String']>;
  /** Default Meta Description */
  default_description?: Maybe<Scalars['String']>;
  /** Default display currency code */
  default_display_currency_code?: Maybe<Scalars['String']>;
  /** Default Meta Keywords */
  default_keywords?: Maybe<Scalars['String']>;
  /** Default Page Title */
  default_title?: Maybe<Scalars['String']>;
  /** Display Demo Store Notice */
  demonotice?: Maybe<Scalars['Int']>;
  /** Indicates whether customers can have multiple wish lists. Possible values: 1 (Yes) and 0 (No) */
  enable_multiple_wishlists?: Maybe<Scalars['String']>;
  /** Default Web URL */
  front?: Maybe<Scalars['String']>;
  /** Products per Page on Grid Default Value. */
  grid_per_page?: Maybe<Scalars['Int']>;
  /** Products per Page on Grid Allowed Values. */
  grid_per_page_values?: Maybe<Scalars['String']>;
  /** Scripts and Style Sheets */
  head_includes?: Maybe<Scalars['String']>;
  /** Favicon Icon */
  head_shortcut_icon?: Maybe<Scalars['String']>;
  /** Logo Image */
  header_logo_src?: Maybe<Scalars['String']>;
  /**
   * The ID number assigned to the store
   * @deprecated Use `store_code` instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** Indicates whether the store view has been designated as the default within the store group */
  is_default_store?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the store group has been designated as the default within the website */
  is_default_store_group?: Maybe<Scalars['Boolean']>;
  /** List Mode. */
  list_mode?: Maybe<Scalars['String']>;
  /** Products per Page on List Default Value. */
  list_per_page?: Maybe<Scalars['Int']>;
  /** Products per Page on List Allowed Values. */
  list_per_page_values?: Maybe<Scalars['String']>;
  /** Store locale */
  locale?: Maybe<Scalars['String']>;
  /** Logo Image Alt */
  logo_alt?: Maybe<Scalars['String']>;
  /** Logo Attribute Height */
  logo_height?: Maybe<Scalars['Int']>;
  /** Logo Attribute Width */
  logo_width?: Maybe<Scalars['Int']>;
  /** Reward points functionality status: enabled/disabled */
  magento_reward_general_is_enabled?: Maybe<Scalars['String']>;
  /** Reward points functionality status on the storefront: enabled/disabled */
  magento_reward_general_is_enabled_on_front?: Maybe<Scalars['String']>;
  /** Reward points redemption minimum threshold */
  magento_reward_general_min_points_balance?: Maybe<Scalars['String']>;
  /** Enable reward points history for the customer */
  magento_reward_general_publish_history?: Maybe<Scalars['String']>;
  /** Number of points for referral, when invitee registers on the site */
  magento_reward_points_invitation_customer?: Maybe<Scalars['String']>;
  /** Maximum number of registration referrals that will qualify for rewards */
  magento_reward_points_invitation_customer_limit?: Maybe<Scalars['String']>;
  /** Number of points for referral, when invitee places an initial order on the site */
  magento_reward_points_invitation_order?: Maybe<Scalars['String']>;
  /** Maximum number of order placements by invitees that will qualify for rewards */
  magento_reward_points_invitation_order_limit?: Maybe<Scalars['String']>;
  /** Number of points for newsletter subscription */
  magento_reward_points_newsletter?: Maybe<Scalars['String']>;
  /**
   * Whether customer earns points for shopping according to the reward point
   * exchange rate. In Luma this also controls whether to show a message in
   * shopping cart about the rewards points earned for the purchase, as well as the
   * customer’s current reward point balance
   */
  magento_reward_points_order?: Maybe<Scalars['String']>;
  /** Number of points customer gets for registration */
  magento_reward_points_register?: Maybe<Scalars['String']>;
  /** Number of points for writing a review */
  magento_reward_points_review?: Maybe<Scalars['String']>;
  /** Maximum number of reviews that will qualify for the rewards */
  magento_reward_points_review_limit?: Maybe<Scalars['String']>;
  /** Indicates whether wishlists are enabled (1) or disabled (0) */
  magento_wishlist_general_is_enabled?: Maybe<Scalars['String']>;
  /** If multiple wish lists are enabled, the maximum number of wish lists the customer can have */
  maximum_number_of_wishlists?: Maybe<Scalars['String']>;
  /** The minimum number of characters required for a valid password. */
  minimum_password_length?: Maybe<Scalars['String']>;
  /** Indicates whether newsletters are enabled. */
  newsletter_enabled: Scalars['Boolean'];
  /** Default No-route URL */
  no_route?: Maybe<Scalars['String']>;
  /** Payflow Pro vault status. */
  payment_payflowpro_cc_vault_active?: Maybe<Scalars['String']>;
  /** Default Price for Printed Card */
  printed_card_price?: Maybe<Scalars['String']>;
  /**
   * Corresponds to the 'Display Prices On Product View Page' field. It indicates
   * how FPT information is displayed on product pages
   */
  product_fixed_product_tax_display_setting?: Maybe<FixedProductTaxDisplaySettings>;
  /** Indicates whether product reviews are enabled. Possible values: 1 (Yes) and 0 (No) */
  product_reviews_enabled?: Maybe<Scalars['String']>;
  /** Product URL Suffix. */
  product_url_suffix?: Maybe<Scalars['String']>;
  /** The number of different character classes required in a password (lowercase, uppercase, digits, special characters). */
  required_character_classes_number?: Maybe<Scalars['String']>;
  /** Indicates whether RMA is enabled on the storefront. Possible values: enabled/disabled */
  returns_enabled: Scalars['String'];
  /**
   * The ID of the root category
   * @deprecated Use `root_category_uid` instead
   */
  root_category_id?: Maybe<Scalars['Int']>;
  /** The unique ID for a `CategoryInterface` object. */
  root_category_uid?: Maybe<Scalars['ID']>;
  /**
   * Corresponds to the 'Display Prices In Sales Modules' field. It indicates how
   * FPT information is displayed on cart, checkout, and order pages
   */
  sales_fixed_product_tax_display_setting?: Maybe<FixedProductTaxDisplaySettings>;
  /** Display Gift Wrapping Prices */
  sales_gift_wrapping?: Maybe<Scalars['String']>;
  /** Display Printed Card Prices */
  sales_printed_card?: Maybe<Scalars['String']>;
  /** Secure base link URL for the store */
  secure_base_link_url?: Maybe<Scalars['String']>;
  /** Secure base media URL for the store */
  secure_base_media_url?: Maybe<Scalars['String']>;
  /** Secure base static URL for the store */
  secure_base_static_url?: Maybe<Scalars['String']>;
  /** Secure base URL for the store */
  secure_base_url?: Maybe<Scalars['String']>;
  /** Email to a Friend configuration. */
  send_friend?: Maybe<SendFriendConfiguration>;
  /** Show Breadcrumbs for CMS Pages */
  show_cms_breadcrumbs?: Maybe<Scalars['Int']>;
  /**
   * The unique ID of the store view. In the Admin, this is called the Store View
   * Code. When making a GraphQL call, assign this value to the `Store` header to
   * provide the scope
   */
  store_code?: Maybe<Scalars['ID']>;
  /** The unique ID assigned to the store group. In the Admin, this is called the Store Name */
  store_group_code?: Maybe<Scalars['ID']>;
  /** The label assigned to the store group */
  store_group_name?: Maybe<Scalars['String']>;
  /** The label assigned to the store view */
  store_name?: Maybe<Scalars['String']>;
  /** The store view sort order */
  store_sort_order?: Maybe<Scalars['Int']>;
  /** Timezone of the store */
  timezone?: Maybe<Scalars['String']>;
  /** Page Title Prefix */
  title_prefix?: Maybe<Scalars['String']>;
  /** Page Title Separator. */
  title_separator?: Maybe<Scalars['String']>;
  /** Page Title Suffix */
  title_suffix?: Maybe<Scalars['String']>;
  /** The configuration determines if the store code should be used in the URL */
  use_store_in_url?: Maybe<Scalars['Boolean']>;
  /** The unique ID for the website */
  website_code?: Maybe<Scalars['ID']>;
  /**
   * The ID number assigned to the website store
   * @deprecated The field should not be used on the storefront
   */
  website_id?: Maybe<Scalars['Int']>;
  /** The label assigned to the website */
  website_name?: Maybe<Scalars['String']>;
  /** The unit of weight */
  weight_unit?: Maybe<Scalars['String']>;
  /** Welcome Text */
  welcome?: Maybe<Scalars['String']>;
};

/** Contains the store code and label of an attribute. */
export type StoreLabels = {
  __typename?: 'StoreLabels';
  /** The label assigned to the attribute. */
  label?: Maybe<Scalars['String']>;
  /** The assigned store code. */
  store_code?: Maybe<Scalars['String']>;
};

export type StorefrontProperties = {
  __typename?: 'StorefrontProperties';
  /** The relative position of the attribute in the layered navigation block */
  position?: Maybe<Scalars['Int']>;
  /** Indicates whether the attribute is filterable with results, without results, or not at all */
  use_in_layered_navigation?: Maybe<UseInLayeredNavigationOptions>;
  /** Indicates whether the attribute is displayed in product listings */
  use_in_product_listing?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the attribute can be used in layered navigation on search results pages */
  use_in_search_results_layered_navigation?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the attribute is displayed on product pages */
  visible_on_catalog_pages?: Maybe<Scalars['Boolean']>;
};

export type SubscribeEmailToNewsletterOutput = {
  __typename?: 'SubscribeEmailToNewsletterOutput';
  /** Returns the status of the subscription request */
  status?: Maybe<SubscriptionStatusesEnum>;
};

export enum SubscriptionStatusesEnum {
  NotActive = 'NOT_ACTIVE',
  Subscribed = 'SUBSCRIBED',
  Unconfirmed = 'UNCONFIRMED',
  Unsubscribed = 'UNSUBSCRIBED'
}

export type SwatchData = {
  __typename?: 'SwatchData';
  /** Type of swatch filter item: 1 - text, 2 - image */
  type?: Maybe<Scalars['String']>;
  /** Value for swatch item (text or image link) */
  value?: Maybe<Scalars['String']>;
};

export type SwatchDataInterface = {
  /** Value of swatch item (HEX color code, image link or textual value) */
  value?: Maybe<Scalars['String']>;
};

export type SwatchLayerFilterItem = LayerFilterItemInterface & SwatchLayerFilterItemInterface & {
  __typename?: 'SwatchLayerFilterItem';
  /**
   * Count of items by filter.
   * @deprecated Use AggregationOption.count instead.
   */
  items_count?: Maybe<Scalars['Int']>;
  /**
   * Filter label.
   * @deprecated Use AggregationOption.label instead.
   */
  label?: Maybe<Scalars['String']>;
  /** Data required to render swatch filter item */
  swatch_data?: Maybe<SwatchData>;
  /**
   * Value for filter request variable to be used in query.
   * @deprecated Use AggregationOption.value instead.
   */
  value_string?: Maybe<Scalars['String']>;
};

export type SwatchLayerFilterItemInterface = {
  /** Data required to render swatch filter item */
  swatch_data?: Maybe<SwatchData>;
};

/** The tax item details */
export type TaxItem = {
  __typename?: 'TaxItem';
  /** The amount of tax applied to the item */
  amount: Money;
  /** The rate used to calculate the tax */
  rate: Scalars['Float'];
  /** A title that describes the tax */
  title: Scalars['String'];
};

export type TextSwatchData = SwatchDataInterface & {
  __typename?: 'TextSwatchData';
  /** Value of swatch item (HEX color code, image link or textual value) */
  value?: Maybe<Scalars['String']>;
};

/** A price based on the quantity purchased. */
export type TierPrice = {
  __typename?: 'TierPrice';
  /** The price discount that this tier represents. */
  discount?: Maybe<ProductDiscount>;
  final_price?: Maybe<Money>;
  /** The minimum number of items that must be purchased to qualify for this price tier. */
  quantity?: Maybe<Scalars['Float']>;
};

export type TrackingData = {
  __typename?: 'TrackingData';
  /** Is Page Tracking enabled */
  page_tracking_enabled?: Maybe<Scalars['Boolean']>;
  /** dotdigital region prefix */
  region_prefix?: Maybe<Scalars['String']>;
  /** Is ROI Tracking enabled */
  roi_tracking_enabled?: Maybe<Scalars['Boolean']>;
  /** Web Behaviour Tracking profile ID */
  wbt_profile_id?: Maybe<Scalars['String']>;
};

export type UiAttributeTypeAny = UiInputTypeInterface & {
  __typename?: 'UiAttributeTypeAny';
  /** Indicates whether the attribute value allowed to have html content. */
  is_html_allowed?: Maybe<Scalars['Boolean']>;
  /** The frontend input type of the attribute. */
  ui_input_type?: Maybe<UiInputTypeEnum>;
};

export type UiAttributeTypeBoolean = AttributeOptionsInterface & SelectableInputTypeInterface & UiInputTypeInterface & {
  __typename?: 'UiAttributeTypeBoolean';
  /** An array of attribute options. */
  attribute_options?: Maybe<Array<Maybe<AttributeOptionInterface>>>;
  /** Indicates whether the attribute value allowed to have html content. */
  is_html_allowed?: Maybe<Scalars['Boolean']>;
  /** The frontend input type of the attribute. */
  ui_input_type?: Maybe<UiInputTypeEnum>;
};

export type UiAttributeTypeFixedProductTax = UiInputTypeInterface & {
  __typename?: 'UiAttributeTypeFixedProductTax';
  /** Indicates whether the attribute value allowed to have html content. */
  is_html_allowed?: Maybe<Scalars['Boolean']>;
  /** The frontend input type of the attribute. */
  ui_input_type?: Maybe<UiInputTypeEnum>;
};

export type UiAttributeTypeMultiSelect = AttributeOptionsInterface & SelectableInputTypeInterface & UiInputTypeInterface & {
  __typename?: 'UiAttributeTypeMultiSelect';
  /** An array of attribute options. */
  attribute_options?: Maybe<Array<Maybe<AttributeOptionInterface>>>;
  /** Indicates whether the attribute value allowed to have html content. */
  is_html_allowed?: Maybe<Scalars['Boolean']>;
  /** The frontend input type of the attribute. */
  ui_input_type?: Maybe<UiInputTypeEnum>;
};

export type UiAttributeTypeSelect = AttributeOptionsInterface & SelectableInputTypeInterface & UiInputTypeInterface & {
  __typename?: 'UiAttributeTypeSelect';
  /** An array of attribute options. */
  attribute_options?: Maybe<Array<Maybe<AttributeOptionInterface>>>;
  /** Indicates whether the attribute value allowed to have html content. */
  is_html_allowed?: Maybe<Scalars['Boolean']>;
  /** The frontend input type of the attribute. */
  ui_input_type?: Maybe<UiInputTypeEnum>;
};

export enum UiInputTypeEnum {
  Boolean = 'BOOLEAN',
  Date = 'DATE',
  Datetime = 'DATETIME',
  FixedProductTax = 'FIXED_PRODUCT_TAX',
  Gallery = 'GALLERY',
  Image = 'IMAGE',
  MediaImage = 'MEDIA_IMAGE',
  Multiselect = 'MULTISELECT',
  Price = 'PRICE',
  Select = 'SELECT',
  Text = 'TEXT',
  Textarea = 'TEXTAREA',
  Weight = 'WEIGHT'
}

/** Defines frontend UI properties of an attribute. */
export type UiInputTypeInterface = {
  /** Indicates whether the attribute value allowed to have html content. */
  is_html_allowed?: Maybe<Scalars['Boolean']>;
  /** The frontend input type of the attribute. */
  ui_input_type?: Maybe<UiInputTypeEnum>;
};

export type UpdateCartItemsInput = {
  cart_id: Scalars['String'];
  cart_items: Array<InputMaybe<CartItemUpdateInput>>;
};

export type UpdateCartItemsOutput = {
  __typename?: 'UpdateCartItemsOutput';
  cart: Cart;
};

export type UpdateGiftRegistryInput = {
  /** Additional attributes specified as a code-value pair. Unspecified dynamic attributes are not changed */
  dynamic_attributes?: InputMaybe<Array<InputMaybe<GiftRegistryDynamicAttributeInput>>>;
  /** The updated name of the event */
  event_name?: InputMaybe<Scalars['String']>;
  /** The updated message describing the event */
  message?: InputMaybe<Scalars['String']>;
  /** Indicates whether the gift registry is PRIVATE or PUBLIC */
  privacy_settings?: InputMaybe<GiftRegistryPrivacySettings>;
  /** The updated shipping address for all gift registry items */
  shipping_address?: InputMaybe<GiftRegistryShippingAddressInput>;
  /** Indicates whether the gift registry is ACTIVE or INACTIVE */
  status?: InputMaybe<GiftRegistryStatus>;
};

export type UpdateGiftRegistryItemInput = {
  /** The unique ID of a `giftRegistryItem` object */
  gift_registry_item_uid: Scalars['ID'];
  /** The updated description of the item */
  note?: InputMaybe<Scalars['String']>;
  /** The updated quantity of the gift registry item */
  quantity: Scalars['Float'];
};

export type UpdateGiftRegistryItemsOutput = {
  __typename?: 'UpdateGiftRegistryItemsOutput';
  /** The gift registry after updating updating items */
  gift_registry?: Maybe<GiftRegistry>;
};

export type UpdateGiftRegistryOutput = {
  __typename?: 'UpdateGiftRegistryOutput';
  /** The updated gift registry */
  gift_registry?: Maybe<GiftRegistry>;
};

export type UpdateGiftRegistryRegistrantInput = {
  /**
   * As a result of the update, only the values of provided attributes will be
   * affected. If the attribute is missing in the request, its value will not be changed
   */
  dynamic_attributes?: InputMaybe<Array<InputMaybe<GiftRegistryDynamicAttributeInput>>>;
  /** The updated email address of the registrant */
  email?: InputMaybe<Scalars['String']>;
  /** The updated first name of the registrant */
  firstname?: InputMaybe<Scalars['String']>;
  /** The unique ID of a `giftRegistryRegistrant` object */
  gift_registry_registrant_uid: Scalars['ID'];
  /** The updated last name of the registrant */
  lastname?: InputMaybe<Scalars['String']>;
};

export type UpdateGiftRegistryRegistrantsOutput = {
  __typename?: 'UpdateGiftRegistryRegistrantsOutput';
  /** The gift registry after updating registrants */
  gift_registry?: Maybe<GiftRegistry>;
};

/** Contains the customer's wish list and any errors encountered */
export type UpdateProductsInWishlistOutput = {
  __typename?: 'UpdateProductsInWishlistOutput';
  /** An array of errors encountered while updating products in a wish list */
  user_errors: Array<Maybe<WishListUserInputError>>;
  /** Contains the wish list with all items that were successfully updated */
  wishlist: Wishlist;
};

export type UpdateWishlistOutput = {
  __typename?: 'UpdateWishlistOutput';
  /** The wish list name */
  name: Scalars['String'];
  /** The unique ID for a `Wishlist` object */
  uid: Scalars['ID'];
  /** Indicates whether the wish list is public or private */
  visibility: WishlistVisibilityEnum;
};

/** The object contains URL rewrite details */
export type UrlRewrite = {
  __typename?: 'UrlRewrite';
  /** Request parameters */
  parameters?: Maybe<Array<Maybe<HttpQueryParameter>>>;
  /** Request URL */
  url?: Maybe<Scalars['String']>;
};

/** This enumeration defines the entity type. */
export enum UrlRewriteEntityTypeEnum {
  Category = 'CATEGORY',
  CmsPage = 'CMS_PAGE',
  Product = 'PRODUCT'
}

export enum UseInLayeredNavigationOptions {
  FilterableNoResult = 'FILTERABLE_NO_RESULT',
  FilterableWithResults = 'FILTERABLE_WITH_RESULTS',
  No = 'NO'
}

/** Required input for payment methods with Vault support. */
export type VaultTokenInput = {
  /** The public hash of the payment token */
  public_hash: Scalars['String'];
};

/** Virtual Cart Item */
export type VirtualCartItem = CartItemInterface & {
  __typename?: 'VirtualCartItem';
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<CartItemError>>>;
  /** @deprecated Use `uid` instead */
  id: Scalars['String'];
  prices?: Maybe<CartItemPrices>;
  product: ProductInterface;
  quantity: Scalars['Float'];
  /** The unique ID for a `CartItemInterface` object */
  uid: Scalars['ID'];
};

/** A virtual product is a non-tangible product that does not require shipping and is not kept in inventory */
export type VirtualProduct = CustomizableProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'VirtualProduct';
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']>;
  /**
   * Relative canonical URL. This value is returned only if the system setting 'Use
   * Canonical Link Meta Tag For Products' is enabled
   */
  canonical_url?: Maybe<Scalars['String']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  color?: Maybe<Scalars['Int']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** List of product custom attributes details. */
  custom_attributes: Array<Maybe<CustomAttribute>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  fashion_color?: Maybe<Scalars['Int']>;
  fashion_material?: Maybe<Scalars['String']>;
  fashion_size?: Maybe<Scalars['Int']>;
  fashion_style?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['Int']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']>;
  has_video?: Maybe<Scalars['Int']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** Indicates whether the product can be returned */
  is_returnable?: Maybe<Scalars['String']>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']>;
  /** An array of Media Gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use product's `media_gallery` instead
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']>;
  /**
   * The beginning date for new product listings, and determines if the product is featured as a new product.
   * @deprecated The field should not be used on the storefront.
   */
  new_from_date?: Maybe<Scalars['String']>;
  /**
   * The end date for new product listings.
   * @deprecated The field should not be used on the storefront.
   */
  new_to_date?: Maybe<Scalars['String']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  /**
   * A ProductPrices object, indicating the price of an item.
   * @deprecated Use price_range for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** A PriceRange object, indicating the range of prices for the product */
  price_range: PriceRange;
  /** An array of TierPrice objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** An array of ProductLinks objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /**
   * Contains 0 when there is no redirect error. A value of 301 indicates the URL
   * of the requested resource has been changed permanently, while a value of 302
   * indicates a temporary redirect
   */
  redirect_code: Scalars['Int'];
  /** Related Products */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original */
  relative_url?: Maybe<Scalars['String']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']>;
  /** The end date that a product has a special price. */
  special_to_date?: Maybe<Scalars['String']>;
  staged: Scalars['Boolean'];
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  /** The file name of a swatch image */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use __typename instead.
   */
  type_id?: Maybe<Scalars['String']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  video_file?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
};


/** A virtual product is a non-tangible product that does not require shipping and is not kept in inventory */
export type VirtualProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type VirtualProductCartItemInput = {
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  data: CartItemInput;
};

/** A virtual product wish list item */
export type VirtualWishlistItem = WishlistItemInterface & {
  __typename?: 'VirtualWishlistItem';
  /** The date and time the item was added to the wish list */
  added_at: Scalars['String'];
  /** Custom options selected for the wish list item */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item */
  description?: Maybe<Scalars['String']>;
  /** The unique ID for a `WishlistItemInterface` object */
  id: Scalars['ID'];
  /** Product details of the wish list item */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item */
  quantity: Scalars['Float'];
};

/** Website is deprecated because it is should not be used on storefront. The type contains information about a website */
export type Website = {
  __typename?: 'Website';
  /**
   * A code assigned to the website to identify it
   * @deprecated The field should not be used on the storefront.
   */
  code?: Maybe<Scalars['String']>;
  /**
   * The default group ID that the website has
   * @deprecated The field should not be used on the storefront.
   */
  default_group_id?: Maybe<Scalars['String']>;
  /**
   * The ID number assigned to the website
   * @deprecated The field should not be used on the storefront.
   */
  id?: Maybe<Scalars['Int']>;
  /**
   * Specifies if this is the default website
   * @deprecated The field should not be used on the storefront.
   */
  is_default?: Maybe<Scalars['Boolean']>;
  /**
   * The website name. Websites use this name to identify it easier.
   * @deprecated The field should not be used on the storefront.
   */
  name?: Maybe<Scalars['String']>;
  /**
   * The attribute to use for sorting websites
   * @deprecated The field should not be used on the storefront.
   */
  sort_order?: Maybe<Scalars['Int']>;
};

/** An error encountered while performing operations with WishList. */
export type WishListUserInputError = {
  __typename?: 'WishListUserInputError';
  /** Wishlist-specific error code */
  code: WishListUserInputErrorType;
  /** A localized error message */
  message: Scalars['String'];
};

export enum WishListUserInputErrorType {
  ProductNotFound = 'PRODUCT_NOT_FOUND',
  Undefined = 'UNDEFINED'
}

export type Wishlist = {
  __typename?: 'Wishlist';
  /** The unique ID for a `Wishlist` object */
  id?: Maybe<Scalars['ID']>;
  /** @deprecated Use field `items_v2` from type `Wishlist` instead */
  items?: Maybe<Array<Maybe<WishlistItem>>>;
  /** The number of items in the wish list */
  items_count?: Maybe<Scalars['Int']>;
  /** An array of items in the customer's wish list */
  items_v2?: Maybe<WishlistItems>;
  /** The wish list name */
  name?: Maybe<Scalars['String']>;
  /** An encrypted code that Magento uses to link to the wish list */
  sharing_code?: Maybe<Scalars['String']>;
  /** The time of the last modification to the wish list */
  updated_at?: Maybe<Scalars['String']>;
  /** Indicates whether the wish list is public or private */
  visibility: WishlistVisibilityEnum;
};


export type WishlistItems_V2Args = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type WishlistCartUserInputError = {
  __typename?: 'WishlistCartUserInputError';
  /** An error code that describes the error encountered */
  code: WishlistCartUserInputErrorType;
  /** A localized error message */
  message: Scalars['String'];
  /** The unique ID of the `Wishlist` object containing an error */
  wishlistId: Scalars['ID'];
  /** The unique ID of the wish list item containing an error */
  wishlistItemId: Scalars['ID'];
};

export enum WishlistCartUserInputErrorType {
  InsufficientStock = 'INSUFFICIENT_STOCK',
  NotSalable = 'NOT_SALABLE',
  ProductNotFound = 'PRODUCT_NOT_FOUND',
  Undefined = 'UNDEFINED'
}

export type WishlistItem = {
  __typename?: 'WishlistItem';
  /** The time when the customer added the item to the wish list */
  added_at?: Maybe<Scalars['String']>;
  /** The customer's comment about this item */
  description?: Maybe<Scalars['String']>;
  /** The unique ID for a `WishlistItem` object */
  id?: Maybe<Scalars['Int']>;
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item */
  qty?: Maybe<Scalars['Float']>;
};

export type WishlistItemCopyInput = {
  /**
   * The quantity of this item to copy to the destination wish list. This value
   * can't be greater than the quantity in the source wish list.
   */
  quantity?: InputMaybe<Scalars['Float']>;
  /** The unique ID for a `WishlistItemInterface` object to be copied */
  wishlist_item_id: Scalars['ID'];
};

/** Defines the items to add to a wish list */
export type WishlistItemInput = {
  /** An array of options that the customer entered */
  entered_options?: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>;
  /** For complex product types, the SKU of the parent product */
  parent_sku?: InputMaybe<Scalars['String']>;
  /** The amount or number of items to add */
  quantity: Scalars['Float'];
  /** An array of strings corresponding to options the customer selected */
  selected_options?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** The SKU of the product to add. For complex product types, specify the child product SKU */
  sku: Scalars['String'];
};

export type WishlistItemInterface = {
  /** The date and time the item was added to the wish list */
  added_at: Scalars['String'];
  /** Custom options selected for the wish list item */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item */
  description?: Maybe<Scalars['String']>;
  /** The unique ID for a `WishlistItemInterface` object */
  id: Scalars['ID'];
  /** Product details of the wish list item */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item */
  quantity: Scalars['Float'];
};

export type WishlistItemMoveInput = {
  /**
   * The quantity of this item to move to the destination wish list. This value
   * can't be greater than the quantity in the source wish list.
   */
  quantity?: InputMaybe<Scalars['Float']>;
  /** filtered by the unique ID for a `WishlistItemInterface` object to be moved */
  wishlist_item_id: Scalars['ID'];
};

/** Defines updates to items in a wish list */
export type WishlistItemUpdateInput = {
  /** Customer-entered comments about the item */
  description?: InputMaybe<Scalars['String']>;
  /** An array of options that the customer entered */
  entered_options?: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>;
  /** The new amount or number of this item */
  quantity?: InputMaybe<Scalars['Float']>;
  /** An array of strings corresponding to options the customer selected */
  selected_options?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** The unique ID for a `WishlistItemInterface` object */
  wishlist_item_id: Scalars['ID'];
};

export type WishlistItems = {
  __typename?: 'WishlistItems';
  /** A list of items in the wish list */
  items: Array<Maybe<WishlistItemInterface>>;
  /** Contains pagination metadata */
  page_info?: Maybe<SearchResultPageInfo>;
};

/** Deprecated: `Wishlist` type should be used instead */
export type WishlistOutput = {
  __typename?: 'WishlistOutput';
  /**
   * An array of items in the customer's wish list
   * @deprecated Use field `items` from type `Wishlist` instead
   */
  items?: Maybe<Array<Maybe<WishlistItem>>>;
  /**
   * The number of items in the wish list
   * @deprecated Use field `items_count` from type `Wishlist` instead
   */
  items_count?: Maybe<Scalars['Int']>;
  /**
   * When multiple wish lists are enabled, the name the customer assigns to the wishlist
   * @deprecated This field is related to Commerce functionality and is always `null` in Open Source edition
   */
  name?: Maybe<Scalars['String']>;
  /**
   * An encrypted code that Magento uses to link to the wish list
   * @deprecated Use field `sharing_code` from type `Wishlist` instead
   */
  sharing_code?: Maybe<Scalars['String']>;
  /**
   * The time of the last modification to the wish list
   * @deprecated Use field `updated_at` from type `Wishlist` instead
   */
  updated_at?: Maybe<Scalars['String']>;
};

/** This enumeration defines the wish list visibility types */
export enum WishlistVisibilityEnum {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type CreateEmptyCartInput = {
  cart_id?: InputMaybe<Scalars['String']>;
};

export type CreateKlarnaPaymentsSessionInput = {
  cart_id: Scalars['String'];
};

export type CreateKlarnaPaymentsSessionOutput = {
  __typename?: 'createKlarnaPaymentsSessionOutput';
  /** The payment method client token */
  client_token?: Maybe<Scalars['String']>;
  /** The payment method categories */
  payment_method_categories?: Maybe<Array<Maybe<Categories>>>;
};
