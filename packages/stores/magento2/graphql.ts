/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 * USE `yarn build:schema-types` or `yarn build`.
 */

/* eslint-disable */
/* tslint:disable */
/* @ts-nocheck */

import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Magento2AddBundleProductsToCartInput = {
  cart_id: Scalars['String'];
  cart_items: Array<InputMaybe<Magento2BundleProductCartItemInput>>;
};

export type Magento2AddBundleProductsToCartOutput = {
  __typename?: 'AddBundleProductsToCartOutput';
  cart: Magento2Cart;
};

export type Magento2AddConfigurableProductsToCartInput = {
  cart_id: Scalars['String'];
  cart_items: Array<InputMaybe<Magento2ConfigurableProductCartItemInput>>;
};

export type Magento2AddConfigurableProductsToCartOutput = {
  __typename?: 'AddConfigurableProductsToCartOutput';
  cart: Magento2Cart;
};

export type Magento2AddDownloadableProductsToCartInput = {
  cart_id: Scalars['String'];
  cart_items: Array<InputMaybe<Magento2DownloadableProductCartItemInput>>;
};

export type Magento2AddDownloadableProductsToCartOutput = {
  __typename?: 'AddDownloadableProductsToCartOutput';
  cart: Magento2Cart;
};

export type Magento2AddGiftRegistryItemInput = {
  /** An array of options the customer has entered */
  entered_options?: InputMaybe<Array<InputMaybe<Magento2EnteredOptionInput>>>;
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

export type Magento2AddGiftRegistryRegistrantInput = {
  /** Additional attributes specified as a code-value pair. */
  dynamic_attributes?: InputMaybe<Array<InputMaybe<Magento2GiftRegistryDynamicAttributeInput>>>;
  /** The email address of the registrant */
  email: Scalars['String'];
  /** The first name of the registrant */
  firstname: Scalars['String'];
  /** The last name of the registrant */
  lastname: Scalars['String'];
};

export type Magento2AddGiftRegistryRegistrantsOutput = {
  __typename?: 'AddGiftRegistryRegistrantsOutput';
  /** The gift registry after adding registrants */
  gift_registry?: Maybe<Magento2GiftRegistry>;
};

export type Magento2AddProductsToCartOutput = {
  __typename?: 'AddProductsToCartOutput';
  /** The cart after products have been added */
  cart: Magento2Cart;
  /** An error encountered while adding an item to the cart. */
  user_errors: Array<Maybe<Magento2CartUserInputError>>;
};

export type Magento2AddProductsToCompareListInput = {
  /** An array of product IDs to add to the compare list */
  products: Array<InputMaybe<Scalars['ID']>>;
  /** The unique identifier of the compare list to modify */
  uid: Scalars['ID'];
};

/** Contains the customer's wish list and any errors encountered */
export type Magento2AddProductsToWishlistOutput = {
  __typename?: 'AddProductsToWishlistOutput';
  /** An array of errors encountered while adding products to a wish list */
  user_errors: Array<Maybe<Magento2WishListUserInputError>>;
  /** Contains the wish list with all items that were successfully added */
  wishlist: Magento2Wishlist;
};

export type Magento2AddReturnCommentInput = {
  /** The text added to the return request */
  comment_text: Scalars['String'];
  /** The unique ID for a `Return` object */
  return_uid: Scalars['ID'];
};

export type Magento2AddReturnCommentOutput = {
  __typename?: 'AddReturnCommentOutput';
  /** Contains details about the modified return */
  return?: Maybe<Magento2Return>;
};

export type Magento2AddReturnTrackingInput = {
  /** The unique ID for a `ReturnShippingCarrier` object */
  carrier_uid: Scalars['ID'];
  /** The unique ID for a `Returns` object */
  return_uid: Scalars['ID'];
  /** The shipping tracking number for this return request */
  tracking_number: Scalars['String'];
};

export type Magento2AddReturnTrackingOutput = {
  __typename?: 'AddReturnTrackingOutput';
  /** Contains details about the modified return */
  return?: Maybe<Magento2Return>;
  /** Contains details about shipping for a return */
  return_shipping_tracking?: Maybe<Magento2ReturnShippingTracking>;
};

export type Magento2AddSimpleProductsToCartInput = {
  cart_id: Scalars['String'];
  cart_items: Array<InputMaybe<Magento2SimpleProductCartItemInput>>;
};

export type Magento2AddSimpleProductsToCartOutput = {
  __typename?: 'AddSimpleProductsToCartOutput';
  cart: Magento2Cart;
};

export type Magento2AddVirtualProductsToCartInput = {
  cart_id: Scalars['String'];
  cart_items: Array<InputMaybe<Magento2VirtualProductCartItemInput>>;
};

export type Magento2AddVirtualProductsToCartOutput = {
  __typename?: 'AddVirtualProductsToCartOutput';
  cart: Magento2Cart;
};

export type Magento2AddWishlistItemsToCartOutput = {
  __typename?: 'AddWishlistItemsToCartOutput';
  /** An array of errors encountered while adding products to the customer's cart */
  add_wishlist_items_to_cart_user_errors: Array<Maybe<Magento2WishlistCartUserInputError>>;
  /** Indicates whether the attempt to add items to the customer's cart was successful */
  status: Scalars['Boolean'];
  /** Contains the wish list with all items that were successfully added */
  wishlist: Magento2Wishlist;
};

/** A bucket that contains information for each filterable option (such as price, category `UID`, and custom attributes). */
export type Magento2Aggregation = {
  __typename?: 'Aggregation';
  /** Attribute code of the aggregation group. */
  attribute_code: Scalars['String'];
  /** The number of options in the aggregation group. */
  count?: Maybe<Scalars['Int']>;
  /** The aggregation display name. */
  label?: Maybe<Scalars['String']>;
  /** Array of options for the aggregation. */
  options?: Maybe<Array<Maybe<Magento2AggregationOption>>>;
  /** The relative position of the attribute in a layered navigation block */
  position?: Maybe<Scalars['Int']>;
};

export type Magento2AggregationOption = Magento2AggregationOptionInterface & {
  __typename?: 'AggregationOption';
  /** The number of items that match the aggregation option. */
  count?: Maybe<Scalars['Int']>;
  /** Aggregation option display label. */
  label?: Maybe<Scalars['String']>;
  /** The internal ID that represents the value of the option. */
  value: Scalars['String'];
};

export type Magento2AggregationOptionInterface = {
  /** The number of items that match the aggregation option. */
  count?: Maybe<Scalars['Int']>;
  /** Aggregation option display label. */
  label?: Maybe<Scalars['String']>;
  /** The internal ID that represents the value of the option. */
  value: Scalars['String'];
};

export type Magento2AppliedCoupon = {
  __typename?: 'AppliedCoupon';
  code: Scalars['String'];
};

/** Contains the applied gift card with applied and remaining balance */
export type Magento2AppliedGiftCard = {
  __typename?: 'AppliedGiftCard';
  /** Applied balance to the current cart */
  applied_balance?: Maybe<Magento2Money>;
  /** Gift card account code */
  code?: Maybe<Scalars['String']>;
  /** Current balance remaining on gift card */
  current_balance?: Maybe<Magento2Money>;
  /** Gift card expiration date */
  expiration_date?: Maybe<Scalars['String']>;
};

/** Applied and current balance */
export type Magento2AppliedStoreCredit = {
  __typename?: 'AppliedStoreCredit';
  /** Applied store credit balance to the current cart */
  applied_balance?: Maybe<Magento2Money>;
  /** Current balance remaining on store credit */
  current_balance?: Maybe<Magento2Money>;
  /** Indicates whether store credits are enabled. If the feature is disabled, then the current balance will not be returned */
  enabled?: Maybe<Scalars['Boolean']>;
};

export type Magento2ApplyCouponToCartInput = {
  cart_id: Scalars['String'];
  coupon_code: Scalars['String'];
};

export type Magento2ApplyCouponToCartOutput = {
  __typename?: 'ApplyCouponToCartOutput';
  cart: Magento2Cart;
};

/** Defines the input required to run the applyGiftCardToCart mutation */
export type Magento2ApplyGiftCardToCartInput = {
  /** The unique ID that identifies the customer's cart */
  cart_id: Scalars['String'];
  /** The gift card code to be applied to the cart */
  gift_card_code: Scalars['String'];
};

/** Defines the possible output for the applyGiftCardToCart mutation */
export type Magento2ApplyGiftCardToCartOutput = {
  __typename?: 'ApplyGiftCardToCartOutput';
  /** Describes the contents of the specified shopping cart */
  cart: Magento2Cart;
};

export type Magento2ApplyRewardPointsToCartOutput = {
  __typename?: 'ApplyRewardPointsToCartOutput';
  /** The customer cart after reward points are applied */
  cart: Magento2Cart;
};

/** Defines the input required to run the applyStoreCreditToCart mutation */
export type Magento2ApplyStoreCreditToCartInput = {
  /** The unique ID that identifies the customer's cart */
  cart_id: Scalars['String'];
};

/** Defines the possible output for the applyStoreCreditToCart mutation */
export type Magento2ApplyStoreCreditToCartOutput = {
  __typename?: 'ApplyStoreCreditToCartOutput';
  /** Describes the contents of the specified shopping cart */
  cart: Magento2Cart;
};

/** AreaInput defines the parameters which will be used for filter by specified location. */
export type Magento2AreaInput = {
  /** The radius for the search in KM. */
  radius: Scalars['Int'];
  /** The country code where search must be performed. Required parameter together with region, city or postcode. */
  search_term: Scalars['String'];
};

export type Magento2Assets = {
  __typename?: 'Assets';
  /** The payment method logo url (descriptive) */
  descriptive?: Maybe<Scalars['String']>;
  /** The payment method logo url (standard) */
  standard?: Maybe<Scalars['String']>;
};

export type Magento2AssignCompareListToCustomerOutput = {
  __typename?: 'AssignCompareListToCustomerOutput';
  /** The contents of the customer's compare list */
  compare_list?: Maybe<Magento2CompareList>;
  result: Scalars['Boolean'];
};

/** Attribute contains the attribute_type of the specified attribute_code and entity_type */
export type Magento2Attribute = {
  __typename?: 'Attribute';
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  attribute_code?: Maybe<Scalars['String']>;
  /** Attribute options list. */
  attribute_options?: Maybe<Array<Maybe<Magento2AttributeOption>>>;
  /** The data type of the attribute */
  attribute_type?: Maybe<Scalars['String']>;
  /** The type of entity that defines the attribute */
  entity_type?: Maybe<Scalars['String']>;
  /** The frontend input type of the attribute */
  input_type?: Maybe<Scalars['String']>;
  /** Contains details about the storefront properties configured for the attribute */
  storefront_properties?: Maybe<Magento2StorefrontProperties>;
};

export enum Magento2AttributeEntityTypeEnum {
  Product = 'PRODUCT'
}

/** AttributeInput specifies the attribute_code and entity_type to search */
export type Magento2AttributeInput = {
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  attribute_code?: InputMaybe<Scalars['String']>;
  /** The type of entity that defines the attribute */
  entity_type?: InputMaybe<Scalars['String']>;
};

/** An interface containing fields that define attributes. */
export type Magento2AttributeMetadataInterface = {
  /** An array of attribute labels defined for the current store. */
  attribute_labels?: Maybe<Array<Maybe<Magento2StoreLabels>>>;
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  code?: Maybe<Scalars['String']>;
  /** The data type of the attribute. */
  data_type?: Maybe<Magento2ObjectDataTypeEnum>;
  /** The type of entity that defines the attribute. */
  entity_type?: Maybe<Magento2AttributeEntityTypeEnum>;
  /** Indicates whether the attribute is a system attribute. */
  is_system?: Maybe<Scalars['Boolean']>;
  /** The label assigned to the attribute. */
  label?: Maybe<Scalars['String']>;
  /** The relative position of the attribute. */
  sort_order?: Maybe<Scalars['Int']>;
  /** Frontend UI properties of the attribute. */
  ui_input?: Maybe<Magento2UiInputTypeInterface>;
  /** The unique ID of an attribute. */
  uid?: Maybe<Scalars['ID']>;
};

/** Attribute option. */
export type Magento2AttributeOption = Magento2AttributeOptionInterface & {
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
export type Magento2AttributeOptionInterface = {
  /** Indicates if option is set to be used as default value. */
  is_default?: Maybe<Scalars['Boolean']>;
  /** The label assigned to the attribute option. */
  label?: Maybe<Scalars['String']>;
  /** The unique ID of an attribute option. */
  uid: Scalars['ID'];
};

export type Magento2AttributeOptions = Magento2AttributeOptionsInterface & {
  __typename?: 'AttributeOptions';
  /** An array of attribute options. */
  attribute_options?: Maybe<Array<Maybe<Magento2AttributeOptionInterface>>>;
};

/** Defines attribute options. */
export type Magento2AttributeOptionsInterface = {
  /** An array of attribute options. */
  attribute_options?: Maybe<Array<Maybe<Magento2AttributeOptionInterface>>>;
};

/** Contains an array of custom and system attributes. */
export type Magento2AttributesMetadata = {
  __typename?: 'AttributesMetadata';
  /** An array of attributes. */
  items?: Maybe<Array<Maybe<Magento2AttributeMetadataInterface>>>;
};

export type Magento2AvailablePaymentMethod = {
  __typename?: 'AvailablePaymentMethod';
  /** The payment method code */
  code: Scalars['String'];
  /** The payment method title. */
  title: Scalars['String'];
};

export type Magento2AvailableShippingMethod = {
  __typename?: 'AvailableShippingMethod';
  amount: Magento2Money;
  available: Scalars['Boolean'];
  /** @deprecated The field should not be used on the storefront */
  base_amount?: Maybe<Magento2Money>;
  carrier_code: Scalars['String'];
  carrier_title: Scalars['String'];
  error_message?: Maybe<Scalars['String']>;
  /** Could be null if method is not available */
  method_code?: Maybe<Scalars['String']>;
  /** Could be null if method is not available */
  method_title?: Maybe<Scalars['String']>;
  price_excl_tax: Magento2Money;
  price_incl_tax: Magento2Money;
};

export type Magento2BillingAddressInput = {
  address?: InputMaybe<Magento2CartAddressInput>;
  customer_address_id?: InputMaybe<Scalars['Int']>;
  /** Set billing address same as shipping */
  same_as_shipping?: InputMaybe<Scalars['Boolean']>;
  /** Deprecated: use `same_as_shipping` field instead */
  use_for_shipping?: InputMaybe<Scalars['Boolean']>;
};

export type Magento2BillingCartAddress = Magento2CartAddressInterface & {
  __typename?: 'BillingCartAddress';
  city: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  country: Magento2CartAddressCountry;
  /** @deprecated The field is used only in shipping address */
  customer_notes?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  postcode?: Maybe<Scalars['String']>;
  region?: Maybe<Magento2CartAddressRegion>;
  street: Array<Maybe<Scalars['String']>>;
  telephone: Scalars['String'];
};

export type Magento2BraintreeCcVaultInput = {
  device_data?: InputMaybe<Scalars['String']>;
  public_hash: Scalars['String'];
};

export type Magento2BraintreeInput = {
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
export type Magento2Breadcrumb = {
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

export type Magento2BundleCartItem = Magento2CartItemInterface & {
  __typename?: 'BundleCartItem';
  /** The list of available gift wrapping options for the cart item */
  available_gift_wrapping: Array<Maybe<Magento2GiftWrapping>>;
  bundle_options: Array<Maybe<Magento2SelectedBundleOption>>;
  customizable_options: Array<Maybe<Magento2SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<Magento2CartItemError>>>;
  /** The entered gift message for the cart item */
  gift_message?: Maybe<Magento2GiftMessage>;
  /** The selected gift wrapping for the cart item */
  gift_wrapping?: Maybe<Magento2GiftWrapping>;
  /** @deprecated Use `uid` instead */
  id: Scalars['String'];
  prices?: Maybe<Magento2CartItemPrices>;
  product: Magento2ProductInterface;
  quantity: Scalars['Float'];
  /** The unique ID for a `CartItemInterface` object */
  uid: Scalars['ID'];
};

export type Magento2BundleCreditMemoItem = Magento2CreditMemoItemInterface & {
  __typename?: 'BundleCreditMemoItem';
  /** A list of bundle options that are assigned to the bundle product */
  bundle_options?: Maybe<Array<Maybe<Magento2ItemSelectedBundleOption>>>;
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Magento2Discount>>>;
  /** The unique ID for a `CreditMemoItemInterface` object */
  id: Scalars['ID'];
  /** The order item the credit memo is applied to */
  order_item?: Maybe<Magento2OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product, including selected options */
  product_sale_price: Magento2Money;
  /** SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of refunded items */
  quantity_refunded?: Maybe<Scalars['Float']>;
};

export type Magento2BundleInvoiceItem = Magento2InvoiceItemInterface & {
  __typename?: 'BundleInvoiceItem';
  /** A list of bundle options that are assigned to the bundle product */
  bundle_options?: Maybe<Array<Maybe<Magento2ItemSelectedBundleOption>>>;
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Magento2Discount>>>;
  /** The unique ID for a `InvoiceItemInterface` object */
  id: Scalars['ID'];
  /** Contains details about an individual order item */
  order_item?: Maybe<Magento2OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product including selected options */
  product_sale_price: Magento2Money;
  /** The SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of invoiced items */
  quantity_invoiced?: Maybe<Scalars['Float']>;
};

/** BundleItem defines an individual item in a bundle product. */
export type Magento2BundleItem = {
  __typename?: 'BundleItem';
  /**
   * An ID assigned to each type of item in a bundle product.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>;
  /** An array of additional options for this bundle item. */
  options?: Maybe<Array<Maybe<Magento2BundleItemOption>>>;
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
export type Magento2BundleItemOption = {
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
  price_type?: Maybe<Magento2PriceTypeEnum>;
  /** Contains details about this product option. */
  product?: Maybe<Magento2ProductInterface>;
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

export type Magento2BundleOptionInput = {
  id: Scalars['Int'];
  quantity: Scalars['Float'];
  value: Array<InputMaybe<Scalars['String']>>;
};

export type Magento2BundleOrderItem = Magento2OrderItemInterface & {
  __typename?: 'BundleOrderItem';
  /** A list of bundle options that are assigned to the bundle product */
  bundle_options?: Maybe<Array<Maybe<Magento2ItemSelectedBundleOption>>>;
  /** The final discount information for the product */
  discounts?: Maybe<Array<Maybe<Magento2Discount>>>;
  /** Indicates whether the order item is eligible is eligible to be in a return request */
  eligible_for_return?: Maybe<Scalars['Boolean']>;
  /** The entered option for the base product, such as a logo or image */
  entered_options?: Maybe<Array<Maybe<Magento2OrderItemOption>>>;
  /** The selected gift wrapping for the order item */
  gift_wrapping?: Maybe<Magento2GiftWrapping>;
  /** The unique ID for a `OrderItemInterface` object */
  id: Scalars['ID'];
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price of the base product, including selected options */
  product_sale_price: Magento2Money;
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
  selected_options?: Maybe<Array<Maybe<Magento2OrderItemOption>>>;
  /** The status of the order item */
  status?: Maybe<Scalars['String']>;
};

/** Defines basic features of a bundle product and contains multiple BundleItems */
export type Magento2BundleProduct = Magento2CustomizableProductInterface & Magento2PhysicalProductInterface & Magento2ProductInterface & Magento2RoutableInterface & {
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
  categories?: Maybe<Array<Maybe<Magento2CategoryInterface>>>;
  color?: Maybe<Scalars['Int']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<Magento2ProductInterface>>>;
  /** List of product custom attributes details. */
  custom_attributes: Array<Maybe<Magento2CustomAttribute>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<Magento2ComplexTextValue>;
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
  image?: Maybe<Magento2ProductImage>;
  /** Indicates whether the product can be returned */
  is_returnable?: Maybe<Scalars['String']>;
  /** An array containing information about individual bundle items. */
  items?: Maybe<Array<Maybe<Magento2BundleItem>>>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']>;
  /** An array of Media Gallery objects. */
  media_gallery?: Maybe<Array<Maybe<Magento2MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use product's `media_gallery` instead
   */
  media_gallery_entries?: Maybe<Array<Maybe<Magento2MediaGalleryEntry>>>;
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
  options?: Maybe<Array<Maybe<Magento2CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  /**
   * A ProductPrices object, indicating the price of an item.
   * @deprecated Use price_range for product price information.
   */
  price?: Maybe<Magento2ProductPrices>;
  /** A PriceRange object, indicating the range of prices for the product */
  price_range: Magento2PriceRange;
  /** An array of TierPrice objects. */
  price_tiers?: Maybe<Array<Maybe<Magento2TierPrice>>>;
  /** One of PRICE_RANGE or AS_LOW_AS. */
  price_view?: Maybe<Magento2PriceViewEnum>;
  /** An array of ProductLinks objects. */
  product_links?: Maybe<Array<Maybe<Magento2ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /**
   * Contains 0 when there is no redirect error. A value of 301 indicates the URL
   * of the requested resource has been changed permanently, while a value of 302
   * indicates a temporary redirect
   */
  redirect_code: Scalars['Int'];
  /** Related Products */
  related_products?: Maybe<Array<Maybe<Magento2ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original */
  relative_url?: Maybe<Scalars['String']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: Magento2ProductReviews;
  /** Indicates whether to ship bundle items together or individually. */
  ship_bundle_items?: Maybe<Magento2ShipBundleItemsEnum>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<Magento2ComplexTextValue>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<Magento2ProductImage>;
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
  stock_status?: Maybe<Magento2ProductStockStatus>;
  /** The file name of a swatch image */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<Magento2ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<Magento2ProductTierPrices>>>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<Magento2UrlRewriteEntityTypeEnum>;
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
  upsell_products?: Maybe<Array<Maybe<Magento2ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<Magento2UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  video_file?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Magento2Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']>;
};


/** Defines basic features of a bundle product and contains multiple BundleItems */
export type Magento2BundleProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type Magento2BundleProductCartItemInput = {
  bundle_options: Array<InputMaybe<Magento2BundleOptionInput>>;
  customizable_options?: InputMaybe<Array<InputMaybe<Magento2CustomizableOptionInput>>>;
  data: Magento2CartItemInput;
};

export type Magento2BundleShipmentItem = Magento2ShipmentItemInterface & {
  __typename?: 'BundleShipmentItem';
  /** A list of bundle options that are assigned to the bundle product */
  bundle_options?: Maybe<Array<Maybe<Magento2ItemSelectedBundleOption>>>;
  /** The unique ID for a `ShipmentItemInterface` object */
  id: Scalars['ID'];
  /** Associated order item */
  order_item?: Maybe<Magento2OrderItemInterface>;
  /** Name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** Sale price for the base product */
  product_sale_price: Magento2Money;
  /** SKU of the base product */
  product_sku: Scalars['String'];
  /** Number of shipped items */
  quantity_shipped: Scalars['Float'];
};

export type Magento2BundleWishlistItem = Magento2WishlistItemInterface & {
  __typename?: 'BundleWishlistItem';
  /** The date and time the item was added to the wish list */
  added_at: Scalars['String'];
  /** An array containing information about the selected bundle items */
  bundle_options?: Maybe<Array<Maybe<Magento2SelectedBundleOption>>>;
  /** Custom options selected for the wish list item */
  customizable_options: Array<Maybe<Magento2SelectedCustomizableOption>>;
  /** The description of the item */
  description?: Maybe<Scalars['String']>;
  /** The unique ID for a `WishlistItemInterface` object */
  id: Scalars['ID'];
  /** Product details of the wish list item */
  product?: Maybe<Magento2ProductInterface>;
  /** The quantity of this wish list item */
  quantity: Scalars['Float'];
};

export type Magento2Cart = {
  __typename?: 'Cart';
  /**
   * An array of coupons that have been applied to the cart
   * @deprecated Use applied_coupons instead
   */
  applied_coupon?: Maybe<Magento2AppliedCoupon>;
  /** An array of `AppliedCoupon` objects. Each object contains the `code` text attribute, which specifies the coupon code */
  applied_coupons?: Maybe<Array<Maybe<Magento2AppliedCoupon>>>;
  /** Contains the code attribute, which specifies the applied gift card codes */
  applied_gift_cards?: Maybe<Array<Maybe<Magento2AppliedGiftCard>>>;
  /** The amount of reward points applied to the cart */
  applied_reward_points?: Maybe<Magento2RewardPointsAmount>;
  /** Contains store credit information applied on the cart */
  applied_store_credit?: Maybe<Magento2AppliedStoreCredit>;
  /** The list of available gift wrapping options for the cart */
  available_gift_wrappings: Array<Maybe<Magento2GiftWrapping>>;
  /** Available payment methods */
  available_payment_methods?: Maybe<Array<Maybe<Magento2AvailablePaymentMethod>>>;
  billing_address?: Maybe<Magento2BillingCartAddress>;
  email?: Maybe<Scalars['String']>;
  /** The entered gift message for the cart */
  gift_message?: Maybe<Magento2GiftMessage>;
  /** Wether customer requested gift receipt for the cart */
  gift_receipt_included: Scalars['Boolean'];
  /** The selected gift wrapping for the cart */
  gift_wrapping?: Maybe<Magento2GiftWrapping>;
  /** The unique ID for a `Cart` object */
  id: Scalars['ID'];
  is_virtual: Scalars['Boolean'];
  items?: Maybe<Array<Maybe<Magento2CartItemInterface>>>;
  prices?: Maybe<Magento2CartPrices>;
  /** Wether customer requested printed card for the cart */
  printed_card_included: Scalars['Boolean'];
  selected_payment_method?: Maybe<Magento2SelectedPaymentMethod>;
  shipping_addresses: Array<Maybe<Magento2ShippingCartAddress>>;
  total_quantity: Scalars['Float'];
};

export type Magento2CartAddressCountry = {
  __typename?: 'CartAddressCountry';
  code: Scalars['String'];
  label: Scalars['String'];
};

export type Magento2CartAddressInput = {
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

export type Magento2CartAddressInterface = {
  city: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  country: Magento2CartAddressCountry;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  postcode?: Maybe<Scalars['String']>;
  region?: Maybe<Magento2CartAddressRegion>;
  street: Array<Maybe<Scalars['String']>>;
  telephone: Scalars['String'];
};

export type Magento2CartAddressRegion = {
  __typename?: 'CartAddressRegion';
  code?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  region_id?: Maybe<Scalars['Int']>;
};

export type Magento2CartDiscount = {
  __typename?: 'CartDiscount';
  amount: Magento2Money;
  label: Array<Maybe<Scalars['String']>>;
};

export type Magento2CartItemError = {
  __typename?: 'CartItemError';
  /** An error code that describes the error encountered */
  code: Magento2CartItemErrorType;
  /** A localized error message */
  message: Scalars['String'];
};

export enum Magento2CartItemErrorType {
  ItemIncrements = 'ITEM_INCREMENTS',
  ItemQty = 'ITEM_QTY',
  Undefined = 'UNDEFINED'
}

export type Magento2CartItemInput = {
  /** An array of entered options for the base product, such as personalization text */
  entered_options?: InputMaybe<Array<InputMaybe<Magento2EnteredOptionInput>>>;
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

export type Magento2CartItemInterface = {
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<Magento2CartItemError>>>;
  /** @deprecated Use `uid` instead */
  id: Scalars['String'];
  prices?: Maybe<Magento2CartItemPrices>;
  product: Magento2ProductInterface;
  quantity: Scalars['Float'];
  /** The unique ID for a `CartItemInterface` object */
  uid: Scalars['ID'];
};

export type Magento2CartItemPrices = {
  __typename?: 'CartItemPrices';
  /** An array of discounts to be applied to the cart item */
  discounts?: Maybe<Array<Maybe<Magento2Discount>>>;
  /** Applied FPT to the cart item. */
  fixed_product_taxes?: Maybe<Array<Maybe<Magento2FixedProductTax>>>;
  price: Magento2Money;
  row_total: Magento2Money;
  row_total_including_tax: Magento2Money;
  /** The total of all discounts applied to the item */
  total_item_discount?: Maybe<Magento2Money>;
};

/** Deprecated: `cart_items` field of `ShippingCartAddress` returns now  `CartItemInterface` instead of `CartItemQuantity` */
export type Magento2CartItemQuantity = {
  __typename?: 'CartItemQuantity';
  /** @deprecated `cart_items` field of `ShippingCartAddress` returns now `CartItemInterface` instead of `CartItemQuantity` */
  cart_item_id: Scalars['Int'];
  /** @deprecated `cart_items` field of `ShippingCartAddress` returns now `CartItemInterface` instead of `CartItemQuantity` */
  quantity: Scalars['Float'];
};

export type Magento2CartItemSelectedOptionValuePrice = {
  __typename?: 'CartItemSelectedOptionValuePrice';
  type: Magento2PriceTypeEnum;
  units: Scalars['String'];
  value: Scalars['Float'];
};

export type Magento2CartItemUpdateInput = {
  /** Deprecated. Use `cart_item_uid` instead. */
  cart_item_id?: InputMaybe<Scalars['Int']>;
  /** The unique ID for a `CartItemInterface` object */
  cart_item_uid?: InputMaybe<Scalars['ID']>;
  customizable_options?: InputMaybe<Array<InputMaybe<Magento2CustomizableOptionInput>>>;
  /** Gift message details for the cart item */
  gift_message?: InputMaybe<Magento2GiftMessageInput>;
  /** The unique ID for a `GiftWrapping` object to be used for the cart item */
  gift_wrapping_id?: InputMaybe<Scalars['ID']>;
  quantity?: InputMaybe<Scalars['Float']>;
};

export type Magento2CartPrices = {
  __typename?: 'CartPrices';
  applied_taxes?: Maybe<Array<Maybe<Magento2CartTaxItem>>>;
  /** @deprecated Use discounts instead  */
  discount?: Maybe<Magento2CartDiscount>;
  /** An array of applied discounts */
  discounts?: Maybe<Array<Maybe<Magento2Discount>>>;
  /** The list of prices for the selected gift options */
  gift_options?: Maybe<Magento2GiftOptionsPrices>;
  grand_total?: Maybe<Magento2Money>;
  subtotal_excluding_tax?: Maybe<Magento2Money>;
  subtotal_including_tax?: Maybe<Magento2Money>;
  subtotal_with_discount_excluding_tax?: Maybe<Magento2Money>;
};

export type Magento2CartTaxItem = {
  __typename?: 'CartTaxItem';
  amount: Magento2Money;
  label: Scalars['String'];
};

/** An error encountered while adding an item to the the cart. */
export type Magento2CartUserInputError = {
  __typename?: 'CartUserInputError';
  /** Cart-specific error code */
  code: Magento2CartUserInputErrorType;
  /** A localized error message */
  message: Scalars['String'];
};

export enum Magento2CartUserInputErrorType {
  InsufficientStock = 'INSUFFICIENT_STOCK',
  NotSalable = 'NOT_SALABLE',
  ProductNotFound = 'PRODUCT_NOT_FOUND',
  Undefined = 'UNDEFINED'
}

export type Magento2Categories = {
  __typename?: 'Categories';
  /** The payment method assets */
  asset_urls?: Maybe<Array<Maybe<Magento2Assets>>>;
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
export type Magento2CategoryFilterInput = {
  /** Filter by the unique category ID for a `CategoryInterface` object. */
  category_uid?: InputMaybe<Magento2FilterEqualTypeInput>;
  /** Deprecated: use 'category_uid' to filter uniquely identifiers of categories. */
  ids?: InputMaybe<Magento2FilterEqualTypeInput>;
  /** Filter by the display name of the category. */
  name?: InputMaybe<Magento2FilterMatchTypeInput>;
  /** Filter by the unique parent category ID for a `CategoryInterface` object. */
  parent_category_uid?: InputMaybe<Magento2FilterEqualTypeInput>;
  /** Filter by the unique parent category ID for a `CategoryInterface` object. */
  parent_id?: InputMaybe<Magento2FilterEqualTypeInput>;
  /** Filter by the part of the URL that identifies the category. */
  url_key?: InputMaybe<Magento2FilterEqualTypeInput>;
  /** Filter by the URL path for the category. */
  url_path?: InputMaybe<Magento2FilterEqualTypeInput>;
};

/** CategoryInterface contains the full set of attributes that can be returned in a category search. */
export type Magento2CategoryInterface = {
  automatic_sorting?: Maybe<Scalars['String']>;
  available_sort_by?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Breadcrumbs, parent categories info. */
  breadcrumbs?: Maybe<Array<Maybe<Magento2Breadcrumb>>>;
  /**
   * Relative canonical URL. This value is returned only if the system setting 'Use
   * Canonical Link Meta Tag For Categories' is enabled
   */
  canonical_url?: Maybe<Scalars['String']>;
  children_count?: Maybe<Scalars['String']>;
  /** Category CMS Block. */
  cms_block?: Maybe<Magento2CmsBlock>;
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
  products?: Maybe<Magento2CategoryProducts>;
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
export type Magento2CategoryInterfaceProductsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Magento2ProductAttributeSortInput>;
};

/** The category products object returned in the Category query. */
export type Magento2CategoryProducts = {
  __typename?: 'CategoryProducts';
  /** An array of products that are assigned to the category. */
  items?: Maybe<Array<Maybe<Magento2ProductInterface>>>;
  /** An object that includes the page_info and currentPage values specified in the query. */
  page_info?: Maybe<Magento2SearchResultPageInfo>;
  /**
   * The number of products in the category that are marked as visible. By default,
   * in complex products, parent products are visible, but their child products are not.
   */
  total_count?: Maybe<Scalars['Int']>;
};

/** A collection of CategoryTree objects and pagination information. */
export type Magento2CategoryResult = {
  __typename?: 'CategoryResult';
  /** A list of categories that match the filter criteria. */
  items?: Maybe<Array<Maybe<Magento2CategoryTree>>>;
  /** An object that includes the page_info and currentPage values specified in the query. */
  page_info?: Maybe<Magento2SearchResultPageInfo>;
  /** The total number of categories that match the criteria. */
  total_count?: Maybe<Scalars['Int']>;
};

/** Category tree implementation */
export type Magento2CategoryTree = Magento2CategoryInterface & Magento2RoutableInterface & {
  __typename?: 'CategoryTree';
  automatic_sorting?: Maybe<Scalars['String']>;
  available_sort_by?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Breadcrumbs, parent categories info. */
  breadcrumbs?: Maybe<Array<Maybe<Magento2Breadcrumb>>>;
  /**
   * Relative canonical URL. This value is returned only if the system setting 'Use
   * Canonical Link Meta Tag For Categories' is enabled
   */
  canonical_url?: Maybe<Scalars['String']>;
  /** Child categories tree. */
  children?: Maybe<Array<Maybe<Magento2CategoryTree>>>;
  children_count?: Maybe<Scalars['String']>;
  /** Category CMS Block. */
  cms_block?: Maybe<Magento2CmsBlock>;
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
  products?: Maybe<Magento2CategoryProducts>;
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
  type?: Maybe<Magento2UrlRewriteEntityTypeEnum>;
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
export type Magento2CategoryTreeProductsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Magento2ProductAttributeSortInput>;
};

export type Magento2ChatData = {
  __typename?: 'ChatData';
  /** API space id */
  api_space_id?: Maybe<Scalars['String']>;
  /** Cookie name */
  cookie_name?: Maybe<Scalars['String']>;
  /** Is chat enabled */
  is_enabled?: Maybe<Scalars['Boolean']>;
};

/** Defines all Checkout Agreement information */
export type Magento2CheckoutAgreement = {
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
  mode: Magento2CheckoutAgreementMode;
  /** Checkout Agreement name */
  name: Scalars['String'];
};

export enum Magento2CheckoutAgreementMode {
  Auto = 'AUTO',
  Manual = 'MANUAL'
}

/** An error encountered while adding an item the the cart. */
export type Magento2CheckoutUserInputError = {
  __typename?: 'CheckoutUserInputError';
  /** Checkout-specific error code */
  code: Magento2CheckoutUserInputErrorCodes;
  /** Localized error message */
  message: Scalars['String'];
  /**
   * Path to the input field that caused an error. See the GraphQL specification
   * about path errors for details: http://spec.graphql.org/draft/#sec-Errors
   */
  path: Array<Maybe<Scalars['String']>>;
};

export enum Magento2CheckoutUserInputErrorCodes {
  InsufficientStock = 'INSUFFICIENT_STOCK',
  NotSalable = 'NOT_SALABLE',
  ProductNotFound = 'PRODUCT_NOT_FOUND',
  ReorderNotAvailable = 'REORDER_NOT_AVAILABLE',
  Undefined = 'UNDEFINED'
}

/** CMS block defines all CMS block information */
export type Magento2CmsBlock = {
  __typename?: 'CmsBlock';
  /** CMS block content */
  content?: Maybe<Scalars['String']>;
  /** CMS block identifier */
  identifier?: Maybe<Scalars['String']>;
  /** CMS block title */
  title?: Maybe<Scalars['String']>;
};

/** CMS blocks information */
export type Magento2CmsBlocks = {
  __typename?: 'CmsBlocks';
  /** An array of CMS blocks */
  items?: Maybe<Array<Maybe<Magento2CmsBlock>>>;
};

/** CMS page defines all CMS page information */
export type Magento2CmsPage = Magento2RoutableInterface & {
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
  type?: Maybe<Magento2UrlRewriteEntityTypeEnum>;
  /** URL key of CMS page */
  url_key?: Maybe<Scalars['String']>;
};

export type Magento2ColorSwatchData = Magento2SwatchDataInterface & {
  __typename?: 'ColorSwatchData';
  /** Value of swatch item (HEX color code, image link or textual value) */
  value?: Maybe<Scalars['String']>;
};

export type Magento2ComparableAttribute = {
  __typename?: 'ComparableAttribute';
  /** An attribute code that is enabled for product comparisons */
  code: Scalars['String'];
  /** The label of the attribute code */
  label: Scalars['String'];
};

export type Magento2ComparableItem = {
  __typename?: 'ComparableItem';
  /** An array of product attributes that can be used to compare products */
  attributes: Array<Maybe<Magento2ProductAttribute>>;
  /** Contains details about a product in a compare list */
  product: Magento2ProductInterface;
  /** The unique ID of an item in a compare list */
  uid: Scalars['ID'];
};

export type Magento2CompareList = {
  __typename?: 'CompareList';
  /** An array of attributes that can be used for comparing products */
  attributes?: Maybe<Array<Maybe<Magento2ComparableAttribute>>>;
  /** The number of items in the compare list */
  item_count: Scalars['Int'];
  /** An array of products to compare */
  items?: Maybe<Array<Maybe<Magento2ComparableItem>>>;
  /** The unique ID assigned to the compare list */
  uid: Scalars['ID'];
};

export type Magento2ComplexTextValue = {
  __typename?: 'ComplexTextValue';
  /** HTML format */
  html: Scalars['String'];
};

/**
 * ConfigurableAttributeOption contains the value_index (and other related
 * information) assigned to a configurable product option
 */
export type Magento2ConfigurableAttributeOption = {
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

export type Magento2ConfigurableCartItem = Magento2CartItemInterface & {
  __typename?: 'ConfigurableCartItem';
  /** The list of available gift wrapping options for the cart item */
  available_gift_wrapping: Array<Maybe<Magento2GiftWrapping>>;
  configurable_options: Array<Maybe<Magento2SelectedConfigurableOption>>;
  /** Product details of the cart item */
  configured_variant: Magento2ProductInterface;
  customizable_options?: Maybe<Array<Maybe<Magento2SelectedCustomizableOption>>>;
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<Magento2CartItemError>>>;
  /** The entered gift message for the cart item */
  gift_message?: Maybe<Magento2GiftMessage>;
  /** The selected gift wrapping for the cart item */
  gift_wrapping?: Maybe<Magento2GiftWrapping>;
  /** @deprecated Use `uid` instead */
  id: Scalars['String'];
  prices?: Maybe<Magento2CartItemPrices>;
  product: Magento2ProductInterface;
  quantity: Scalars['Float'];
  /** The unique ID for a `CartItemInterface` object */
  uid: Scalars['ID'];
};

/** Configurable option available for further selection based on current selection. */
export type Magento2ConfigurableOptionAvailableForSelection = {
  __typename?: 'ConfigurableOptionAvailableForSelection';
  /** Attribute code that uniquely identifies configurable option. */
  attribute_code: Scalars['String'];
  /** Configurable option values available for further selection. */
  option_value_uids: Array<Maybe<Scalars['ID']>>;
};

/** ConfigurableProduct defines basic features of a configurable product and its simple product variants */
export type Magento2ConfigurableProduct = Magento2CustomizableProductInterface & Magento2PhysicalProductInterface & Magento2ProductInterface & Magento2RoutableInterface & {
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
  categories?: Maybe<Array<Maybe<Magento2CategoryInterface>>>;
  color?: Maybe<Scalars['Int']>;
  /** An array of linked simple product items */
  configurable_options?: Maybe<Array<Maybe<Magento2ConfigurableProductOptions>>>;
  /** Specified configurable product options selection */
  configurable_product_options_selection?: Maybe<Magento2ConfigurableProductOptionsSelection>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<Magento2ProductInterface>>>;
  /** List of product custom attributes details. */
  custom_attributes: Array<Maybe<Magento2CustomAttribute>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<Magento2ComplexTextValue>;
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
  image?: Maybe<Magento2ProductImage>;
  /** Indicates whether the product can be returned */
  is_returnable?: Maybe<Scalars['String']>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']>;
  /** An array of Media Gallery objects. */
  media_gallery?: Maybe<Array<Maybe<Magento2MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use product's `media_gallery` instead
   */
  media_gallery_entries?: Maybe<Array<Maybe<Magento2MediaGalleryEntry>>>;
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
  options?: Maybe<Array<Maybe<Magento2CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  /**
   * A ProductPrices object, indicating the price of an item.
   * @deprecated Use price_range for product price information.
   */
  price?: Maybe<Magento2ProductPrices>;
  /** A PriceRange object, indicating the range of prices for the product */
  price_range: Magento2PriceRange;
  /** An array of TierPrice objects. */
  price_tiers?: Maybe<Array<Maybe<Magento2TierPrice>>>;
  /** An array of ProductLinks objects. */
  product_links?: Maybe<Array<Maybe<Magento2ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /**
   * Contains 0 when there is no redirect error. A value of 301 indicates the URL
   * of the requested resource has been changed permanently, while a value of 302
   * indicates a temporary redirect
   */
  redirect_code: Scalars['Int'];
  /** Related Products */
  related_products?: Maybe<Array<Maybe<Magento2ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original */
  relative_url?: Maybe<Scalars['String']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: Magento2ProductReviews;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<Magento2ComplexTextValue>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<Magento2ProductImage>;
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
  stock_status?: Maybe<Magento2ProductStockStatus>;
  /** The file name of a swatch image */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<Magento2ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<Magento2ProductTierPrices>>>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<Magento2UrlRewriteEntityTypeEnum>;
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
  upsell_products?: Maybe<Array<Maybe<Magento2ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<Magento2UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  /** An array of variants of products */
  variants?: Maybe<Array<Maybe<Magento2ConfigurableVariant>>>;
  video_file?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Magento2Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']>;
};


/** ConfigurableProduct defines basic features of a configurable product and its simple product variants */
export type Magento2ConfigurableProductConfigurable_Product_Options_SelectionArgs = {
  configurableOptionValueUids?: InputMaybe<Array<Scalars['ID']>>;
};


/** ConfigurableProduct defines basic features of a configurable product and its simple product variants */
export type Magento2ConfigurableProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type Magento2ConfigurableProductCartItemInput = {
  customizable_options?: InputMaybe<Array<InputMaybe<Magento2CustomizableOptionInput>>>;
  data: Magento2CartItemInput;
  /** Configurable product SKU. */
  parent_sku?: InputMaybe<Scalars['String']>;
  /** Deprecated. Use CartItemInput.sku instead. */
  variant_sku?: InputMaybe<Scalars['String']>;
};

export type Magento2ConfigurableProductOption = {
  __typename?: 'ConfigurableProductOption';
  attribute_code: Scalars['String'];
  label: Scalars['String'];
  uid: Scalars['ID'];
  values?: Maybe<Array<Maybe<Magento2ConfigurableProductOptionValue>>>;
};

export type Magento2ConfigurableProductOptionValue = {
  __typename?: 'ConfigurableProductOptionValue';
  is_available: Scalars['Boolean'];
  is_use_default: Scalars['Boolean'];
  label: Scalars['String'];
  swatch?: Maybe<Magento2SwatchDataInterface>;
  uid: Scalars['ID'];
};

/** ConfigurableProductOptions defines configurable attributes for the specified product */
export type Magento2ConfigurableProductOptions = {
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
  values?: Maybe<Array<Maybe<Magento2ConfigurableProductOptionsValues>>>;
};

/** Metadata corresponding to the configurable options selection. */
export type Magento2ConfigurableProductOptionsSelection = {
  __typename?: 'ConfigurableProductOptionsSelection';
  /** Configurable options available for further selection based on current selection. */
  configurable_options?: Maybe<Array<Maybe<Magento2ConfigurableProductOption>>>;
  /** Product images and videos corresponding to the specified configurable options selection. */
  media_gallery?: Maybe<Array<Maybe<Magento2MediaGalleryInterface>>>;
  /** Configurable options available for further selection based on current selection. */
  options_available_for_selection?: Maybe<Array<Maybe<Magento2ConfigurableOptionAvailableForSelection>>>;
  /**
   * Variant represented by the specified configurable options selection. It is
   * expected to be null, until selections are made for each configurable option.
   */
  variant?: Maybe<Magento2SimpleProduct>;
};

/** ConfigurableProductOptionsValues contains the index number assigned to a configurable product option */
export type Magento2ConfigurableProductOptionsValues = {
  __typename?: 'ConfigurableProductOptionsValues';
  /** The label of the product on the default store */
  default_label?: Maybe<Scalars['String']>;
  /** The label of the product */
  label?: Maybe<Scalars['String']>;
  /** The label of the product on the current store */
  store_label?: Maybe<Scalars['String']>;
  /** Swatch data for configurable product option */
  swatch_data?: Maybe<Magento2SwatchDataInterface>;
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
export type Magento2ConfigurableVariant = {
  __typename?: 'ConfigurableVariant';
  attributes?: Maybe<Array<Maybe<Magento2ConfigurableAttributeOption>>>;
  product?: Maybe<Magento2SimpleProduct>;
};

/** A configurable product wish list item */
export type Magento2ConfigurableWishlistItem = Magento2WishlistItemInterface & {
  __typename?: 'ConfigurableWishlistItem';
  /** The date and time the item was added to the wish list */
  added_at: Scalars['String'];
  /** The SKU of the simple product corresponding to a set of selected configurable options */
  child_sku: Scalars['String'];
  /** An array of selected configurable options */
  configurable_options?: Maybe<Array<Maybe<Magento2SelectedConfigurableOption>>>;
  /** Custom options selected for the wish list item */
  customizable_options: Array<Maybe<Magento2SelectedCustomizableOption>>;
  /** The description of the item */
  description?: Maybe<Scalars['String']>;
  /** The unique ID for a `WishlistItemInterface` object */
  id: Scalars['ID'];
  /** Product details of the wish list item */
  product?: Maybe<Magento2ProductInterface>;
  /** The quantity of this wish list item */
  quantity: Scalars['Float'];
};

export type Magento2ContactUsInput = {
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
export type Magento2ContactUsOutput = {
  __typename?: 'ContactUsOutput';
  /** Indicates whether the request was successful. */
  status: Scalars['Boolean'];
};

export type Magento2CopyProductsBetweenWishlistsOutput = {
  __typename?: 'CopyProductsBetweenWishlistsOutput';
  /** The destination wish list containing the copied products */
  destination_wishlist: Magento2Wishlist;
  /** The wish list that the products were copied from */
  source_wishlist: Magento2Wishlist;
  /** An array of errors encountered while copying products in a wish list */
  user_errors: Array<Maybe<Magento2WishListUserInputError>>;
};

export type Magento2Country = {
  __typename?: 'Country';
  available_regions?: Maybe<Array<Maybe<Magento2Region>>>;
  full_name_english?: Maybe<Scalars['String']>;
  full_name_locale?: Maybe<Scalars['String']>;
  /** The unique ID for a `Country` object. */
  id?: Maybe<Scalars['String']>;
  three_letter_abbreviation?: Maybe<Scalars['String']>;
  two_letter_abbreviation?: Maybe<Scalars['String']>;
};

/** The list of countries codes */
export enum Magento2CountryCodeEnum {
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

export type Magento2CreateCompareListInput = {
  /** An array of product IDs to add to the compare list */
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type Magento2CreateGiftRegistryInput = {
  /** Additional attributes specified as a code-value pair */
  dynamic_attributes?: InputMaybe<Array<InputMaybe<Magento2GiftRegistryDynamicAttributeInput>>>;
  /** The name of the event */
  event_name: Scalars['String'];
  /** The ID of the selected event type */
  gift_registry_type_uid: Scalars['ID'];
  /** A message describing the event */
  message: Scalars['String'];
  /** Indicates whether the registry is PRIVATE or PUBLIC */
  privacy_settings: Magento2GiftRegistryPrivacySettings;
  /** The list of people who receive notifications about the registry */
  registrants: Array<InputMaybe<Magento2AddGiftRegistryRegistrantInput>>;
  /** The shipping address for all gift registry items */
  shipping_address?: InputMaybe<Magento2GiftRegistryShippingAddressInput>;
  /** Indicates whether the registry is ACTIVE or INACTIVE */
  status: Magento2GiftRegistryStatus;
};

export type Magento2CreateGiftRegistryOutput = {
  __typename?: 'CreateGiftRegistryOutput';
  /** The newly-created gift registry */
  gift_registry?: Maybe<Magento2GiftRegistry>;
};

/** Contains the secure information used to authorize transaction. Applies to Payflow Pro and Payments Pro payment methods. */
export type Magento2CreatePayflowProTokenOutput = {
  __typename?: 'CreatePayflowProTokenOutput';
  response_message: Scalars['String'];
  result: Scalars['Int'];
  result_code: Scalars['Int'];
  secure_token: Scalars['String'];
  secure_token_id: Scalars['String'];
};

export type Magento2CreateProductReviewInput = {
  /** The customer's nickname. Defaults to the customer name, if logged in */
  nickname: Scalars['String'];
  /** Ratings details by category. e.g price: 5, quality: 4 etc */
  ratings: Array<InputMaybe<Magento2ProductReviewRatingInput>>;
  /** The SKU of the reviewed product */
  sku: Scalars['String'];
  /** The summary (title) of the review */
  summary: Scalars['String'];
  /** The review text. */
  text: Scalars['String'];
};

export type Magento2CreateProductReviewOutput = {
  __typename?: 'CreateProductReviewOutput';
  /** Contains the completed product review */
  review: Magento2ProductReview;
};

export type Magento2CreateWishlistInput = {
  /** The name of the new wish list */
  name: Scalars['String'];
  /** Indicates whether the wish list is public or private */
  visibility: Magento2WishlistVisibilityEnum;
};

export type Magento2CreateWishlistOutput = {
  __typename?: 'CreateWishlistOutput';
  /** The newly-created wish list */
  wishlist: Magento2Wishlist;
};

/** Required fields for Payflow Pro and Payments Pro credit card payments */
export type Magento2CreditCardDetailsInput = {
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
export type Magento2CreditMemo = {
  __typename?: 'CreditMemo';
  /** Comments on the credit memo */
  comments?: Maybe<Array<Maybe<Magento2SalesCommentItem>>>;
  /** The unique ID for a `CreditMemo` object */
  id: Scalars['ID'];
  /** An array containing details about refunded items */
  items?: Maybe<Array<Maybe<Magento2CreditMemoItemInterface>>>;
  /** The sequential credit memo number */
  number: Scalars['String'];
  /** Contains details about the total refunded amount */
  total?: Maybe<Magento2CreditMemoTotal>;
};

export type Magento2CreditMemoItem = Magento2CreditMemoItemInterface & {
  __typename?: 'CreditMemoItem';
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Magento2Discount>>>;
  /** The unique ID for a `CreditMemoItemInterface` object */
  id: Scalars['ID'];
  /** The order item the credit memo is applied to */
  order_item?: Maybe<Magento2OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product, including selected options */
  product_sale_price: Magento2Money;
  /** SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of refunded items */
  quantity_refunded?: Maybe<Scalars['Float']>;
};

/** Credit memo item details */
export type Magento2CreditMemoItemInterface = {
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Magento2Discount>>>;
  /** The unique ID for a `CreditMemoItemInterface` object */
  id: Scalars['ID'];
  /** The order item the credit memo is applied to */
  order_item?: Maybe<Magento2OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product, including selected options */
  product_sale_price: Magento2Money;
  /** SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of refunded items */
  quantity_refunded?: Maybe<Scalars['Float']>;
};

/** Credit memo price details */
export type Magento2CreditMemoTotal = {
  __typename?: 'CreditMemoTotal';
  /** An adjustment manually applied to the order */
  adjustment: Magento2Money;
  /** The final base grand total amount in the base currency */
  base_grand_total: Magento2Money;
  /** The applied discounts to the credit memo */
  discounts?: Maybe<Array<Maybe<Magento2Discount>>>;
  /** The final total amount, including shipping, discounts, and taxes */
  grand_total: Magento2Money;
  /** Contains details about the shipping and handling costs for the credit memo */
  shipping_handling?: Maybe<Magento2ShippingHandling>;
  /** The subtotal of the invoice, excluding shipping, discounts, and taxes */
  subtotal: Magento2Money;
  /** The credit memo tax details */
  taxes?: Maybe<Array<Maybe<Magento2TaxItem>>>;
  /** The shipping amount for the credit memo */
  total_shipping: Magento2Money;
  /** The amount of tax applied to the credit memo */
  total_tax: Magento2Money;
};

export type Magento2Currency = {
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
  exchange_rates?: Maybe<Array<Maybe<Magento2ExchangeRate>>>;
};

/** The list of available currency codes */
export enum Magento2CurrencyEnum {
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
export type Magento2CustomAttribute = {
  __typename?: 'CustomAttribute';
  /** Attribute metadata details. */
  attribute_metadata?: Maybe<Magento2AttributeMetadataInterface>;
  /** Attribute value represented as entered data using input type like text field. */
  entered_attribute_value?: Maybe<Magento2EnteredAttributeValue>;
  /** Attribute value represented as selected options using input type like select. */
  selected_attribute_options?: Maybe<Magento2SelectedAttributeOption>;
};

/** CustomAttributeMetadata defines an array of attribute_codes and entity_types */
export type Magento2CustomAttributeMetadata = {
  __typename?: 'CustomAttributeMetadata';
  /** An array of attributes */
  items?: Maybe<Array<Maybe<Magento2Attribute>>>;
};

export enum Magento2CustomAttributesListsEnum {
  AdvancedCatalogSearch = 'ADVANCED_CATALOG_SEARCH',
  ProductsCompare = 'PRODUCTS_COMPARE',
  ProductsListing = 'PRODUCTS_LISTING',
  ProductDetailsPage = 'PRODUCT_DETAILS_PAGE',
  ProductFilter = 'PRODUCT_FILTER',
  ProductSearchResultsFilter = 'PRODUCT_SEARCH_RESULTS_FILTER',
  ProductSort = 'PRODUCT_SORT'
}

/** Customer defines the customer name and address and other details */
export type Magento2Customer = {
  __typename?: 'Customer';
  /** An array containing the customer's shipping and billing addresses */
  addresses?: Maybe<Array<Maybe<Magento2CustomerAddress>>>;
  /** Indicates whether the customer has enabled remote shopping assistance */
  allow_remote_shopping_assistance: Scalars['Boolean'];
  /** The contents of the customer's compare list */
  compare_list?: Maybe<Magento2CompareList>;
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
  gift_registries?: Maybe<Array<Maybe<Magento2GiftRegistry>>>;
  /** Details about a specific gift registry */
  gift_registry?: Maybe<Magento2GiftRegistry>;
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
  orders?: Maybe<Magento2CustomerOrders>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']>;
  /** Retrieves details about the specified return request from the unique ID for a `Return` object */
  return?: Maybe<Magento2Return>;
  /** Information about the customer's return requests. */
  returns?: Maybe<Magento2Returns>;
  /** Contains the customer's product reviews */
  reviews: Magento2ProductReviews;
  /** Customer reward points details */
  reward_points?: Maybe<Magento2RewardPoints>;
  /** Contains the store credit information applied for the logged in customer */
  store_credit?: Maybe<Magento2CustomerStoreCredit>;
  /** A value such as Sr., Jr., or III */
  suffix?: Maybe<Scalars['String']>;
  /** The customer's Value-added tax (VAT) number (for corporate customers) */
  taxvat?: Maybe<Scalars['String']>;
  /**
   * Contains a customer's wish lists
   * @deprecated Use `Customer.wishlists` or `Customer.wishlist_v2`
   */
  wishlist: Magento2Wishlist;
  /** Retrieve the specified wish list identified by the unique ID for a `Wishlist` object */
  wishlist_v2?: Maybe<Magento2Wishlist>;
  /**
   * An array of wishlists. In Magento Open Source, customers are limited to one
   * wish list. The number of wish lists is configurable for Magento Commerce
   */
  wishlists: Array<Maybe<Magento2Wishlist>>;
};


/** Customer defines the customer name and address and other details */
export type Magento2CustomerGift_RegistryArgs = {
  giftRegistryUid: Scalars['ID'];
};


/** Customer defines the customer name and address and other details */
export type Magento2CustomerOrdersArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<Magento2CustomerOrdersFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


/** Customer defines the customer name and address and other details */
export type Magento2CustomerReturnArgs = {
  uid: Scalars['ID'];
};


/** Customer defines the customer name and address and other details */
export type Magento2CustomerReturnsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


/** Customer defines the customer name and address and other details */
export type Magento2CustomerReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


/** Customer defines the customer name and address and other details */
export type Magento2CustomerWishlist_V2Args = {
  id: Scalars['ID'];
};


/** Customer defines the customer name and address and other details */
export type Magento2CustomerWishlistsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

/** CustomerAddress contains detailed information about a customer's billing and shipping addresses */
export type Magento2CustomerAddress = {
  __typename?: 'CustomerAddress';
  /** The city or town */
  city?: Maybe<Scalars['String']>;
  /** The customer's company */
  company?: Maybe<Scalars['String']>;
  /** The customer's country */
  country_code?: Maybe<Magento2CountryCodeEnum>;
  /**
   * The customer's country
   * @deprecated Use `country_code` instead.
   */
  country_id?: Maybe<Scalars['String']>;
  /** @deprecated Custom attributes should not be put into container */
  custom_attributes?: Maybe<Array<Maybe<Magento2CustomerAddressAttribute>>>;
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
  extension_attributes?: Maybe<Array<Maybe<Magento2CustomerAddressAttribute>>>;
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
  region?: Maybe<Magento2CustomerAddressRegion>;
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

export type Magento2CustomerAddressAttribute = {
  __typename?: 'CustomerAddressAttribute';
  /** Attribute code */
  attribute_code?: Maybe<Scalars['String']>;
  /** Attribute value */
  value?: Maybe<Scalars['String']>;
};

export type Magento2CustomerAddressAttributeInput = {
  /** Attribute code */
  attribute_code: Scalars['String'];
  /** Attribute value */
  value: Scalars['String'];
};

export type Magento2CustomerAddressInput = {
  /** The city or town */
  city?: InputMaybe<Scalars['String']>;
  /** The customer's company */
  company?: InputMaybe<Scalars['String']>;
  /** The customer's country */
  country_code?: InputMaybe<Magento2CountryCodeEnum>;
  /** Deprecated: use `country_code` instead. */
  country_id?: InputMaybe<Magento2CountryCodeEnum>;
  /** Deprecated: Custom attributes should not be put into container. */
  custom_attributes?: InputMaybe<Array<InputMaybe<Magento2CustomerAddressAttributeInput>>>;
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
  region?: InputMaybe<Magento2CustomerAddressRegionInput>;
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
export type Magento2CustomerAddressRegion = {
  __typename?: 'CustomerAddressRegion';
  /** The state or province name */
  region?: Maybe<Scalars['String']>;
  /** The address region code */
  region_code?: Maybe<Scalars['String']>;
  /** The unique ID for a pre-defined region */
  region_id?: Maybe<Scalars['Int']>;
};

/** CustomerAddressRegionInput defines the customer's state or province */
export type Magento2CustomerAddressRegionInput = {
  /** The state or province name */
  region?: InputMaybe<Scalars['String']>;
  /** The address region code */
  region_code?: InputMaybe<Scalars['String']>;
  /** The unique ID for a pre-defined region */
  region_id?: InputMaybe<Scalars['Int']>;
};

export type Magento2CustomerCreateInput = {
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

export type Magento2CustomerDownloadableProduct = {
  __typename?: 'CustomerDownloadableProduct';
  date?: Maybe<Scalars['String']>;
  download_url?: Maybe<Scalars['String']>;
  order_increment_id?: Maybe<Scalars['String']>;
  remaining_downloads?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type Magento2CustomerDownloadableProducts = {
  __typename?: 'CustomerDownloadableProducts';
  /** List of purchased downloadable items */
  items?: Maybe<Array<Maybe<Magento2CustomerDownloadableProduct>>>;
};

export type Magento2CustomerInput = {
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
export type Magento2CustomerOrder = {
  __typename?: 'CustomerOrder';
  /** The billing address for the order */
  billing_address?: Maybe<Magento2OrderAddress>;
  /** The shipping carrier for the order delivery */
  carrier?: Maybe<Scalars['String']>;
  /** Comments about the order */
  comments?: Maybe<Array<Maybe<Magento2SalesCommentItem>>>;
  /** @deprecated Use the order_date attribute instead */
  created_at?: Maybe<Scalars['String']>;
  /** A list of credit memos */
  credit_memos?: Maybe<Array<Maybe<Magento2CreditMemo>>>;
  /** The entered gift message for the order */
  gift_message?: Maybe<Magento2GiftMessage>;
  /** Whether customer requested gift receipt for the order */
  gift_receipt_included: Scalars['Boolean'];
  /** The selected gift wrapping for the order */
  gift_wrapping?: Maybe<Magento2GiftWrapping>;
  /** @deprecated Use the totals.grand_total attribute instead */
  grand_total?: Maybe<Scalars['Float']>;
  /** The unique ID for a `CustomerOrder` object */
  id: Scalars['ID'];
  /** @deprecated Use the id attribute instead */
  increment_id?: Maybe<Scalars['String']>;
  /** A list of invoices for the order */
  invoices: Array<Maybe<Magento2Invoice>>;
  /** An array containing the items purchased in this order */
  items?: Maybe<Array<Maybe<Magento2OrderItemInterface>>>;
  /** A list of order items eligible to be in a return request */
  items_eligible_for_return?: Maybe<Array<Maybe<Magento2OrderItemInterface>>>;
  /** The order number */
  number: Scalars['String'];
  /** The date the order was placed */
  order_date: Scalars['String'];
  /** @deprecated Use the number attribute instead */
  order_number: Scalars['String'];
  /** Payment details for the order */
  payment_methods?: Maybe<Array<Maybe<Magento2OrderPaymentMethod>>>;
  /** Whether customer requested printed card for the order */
  printed_card_included: Scalars['Boolean'];
  /** Return requests associated with this order. */
  returns?: Maybe<Magento2Returns>;
  /** A list of shipments for the order */
  shipments?: Maybe<Array<Maybe<Magento2OrderShipment>>>;
  /** The shipping address for the order */
  shipping_address?: Maybe<Magento2OrderAddress>;
  /** The delivery method for the order */
  shipping_method?: Maybe<Scalars['String']>;
  /** The current status of the order */
  status: Scalars['String'];
  /** Contains details about the calculated totals for this order */
  total?: Maybe<Magento2OrderTotal>;
};


/** Contains details about each of the customer's orders */
export type Magento2CustomerOrderReturnsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

/** The collection of orders that match the conditions defined in the filter */
export type Magento2CustomerOrders = {
  __typename?: 'CustomerOrders';
  /** An array of customer orders */
  items: Array<Maybe<Magento2CustomerOrder>>;
  /** An object that includes the current_page, page_info, and page_size values specified in the query */
  page_info?: Maybe<Magento2SearchResultPageInfo>;
  /** The total count of customer orders */
  total_count?: Maybe<Scalars['Int']>;
};

/** Identifies the filter to use for filtering orders. */
export type Magento2CustomerOrdersFilterInput = {
  /** Filters by order number. */
  number?: InputMaybe<Magento2FilterStringTypeInput>;
};

export type Magento2CustomerOutput = {
  __typename?: 'CustomerOutput';
  customer: Magento2Customer;
};

export type Magento2CustomerPaymentTokens = {
  __typename?: 'CustomerPaymentTokens';
  /** An array of payment tokens */
  items: Array<Maybe<Magento2PaymentToken>>;
};

/** Contains store credit information with balance and history */
export type Magento2CustomerStoreCredit = {
  __typename?: 'CustomerStoreCredit';
  /**
   * Customer Store credit balance history. If the history or store credit feature
   * is disabled, then a null value will be returned.
   */
  balance_history?: Maybe<Magento2CustomerStoreCreditHistory>;
  /** Current balance on store credit */
  current_balance?: Maybe<Magento2Money>;
  /** Indicates whether store credits are enabled. If the feature is disabled, then the balance will not be returned */
  enabled?: Maybe<Scalars['Boolean']>;
};


/** Contains store credit information with balance and history */
export type Magento2CustomerStoreCreditBalance_HistoryArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

/** Lists changes to the amount of store credit available to the customer. */
export type Magento2CustomerStoreCreditHistory = {
  __typename?: 'CustomerStoreCreditHistory';
  /** An array containing information about changes to the store credit available to the customer. */
  items?: Maybe<Array<Maybe<Magento2CustomerStoreCreditHistoryItem>>>;
  /** An object that includes the current_page page_info and page_size values specified in the query. */
  page_info?: Maybe<Magento2SearchResultPageInfo>;
  /** The number of items returned. */
  total_count?: Maybe<Scalars['Int']>;
};

/** Defines store credit history information */
export type Magento2CustomerStoreCreditHistoryItem = {
  __typename?: 'CustomerStoreCreditHistoryItem';
  /** Action that was made on the store credit */
  action?: Maybe<Scalars['String']>;
  /** The store credit available to the customer as a result of this action.  */
  actual_balance?: Maybe<Magento2Money>;
  /** The amount added to or subtracted from the store credit as a result of this action. */
  balance_change?: Maybe<Magento2Money>;
  /** Date and time when the store credit change was made */
  date_time_changed?: Maybe<Scalars['String']>;
};

export type Magento2CustomerToken = {
  __typename?: 'CustomerToken';
  /** The customer token */
  token?: Maybe<Scalars['String']>;
};

export type Magento2CustomerUpdateInput = {
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
export type Magento2CustomizableAreaOption = Magento2CustomizableOptionInterface & {
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
  value?: Maybe<Magento2CustomizableAreaValue>;
};

/** CustomizableAreaValue defines the price and sku of a product whose page contains a customized text area. */
export type Magento2CustomizableAreaValue = {
  __typename?: 'CustomizableAreaValue';
  /** The maximum number of characters that can be entered for this customizable option. */
  max_characters?: Maybe<Scalars['Int']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<Magento2PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableAreaValue` object. */
  uid: Scalars['ID'];
};

/**
 * CustomizableCheckbbixOption contains information about a set of checkbox values
 * that are defined as part of a customizable option.
 */
export type Magento2CustomizableCheckboxOption = Magento2CustomizableOptionInterface & {
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
  value?: Maybe<Array<Maybe<Magento2CustomizableCheckboxValue>>>;
};

/** CustomizableCheckboxValue defines the price and sku of a product whose page contains a customized set of checkbox values. */
export type Magento2CustomizableCheckboxValue = {
  __typename?: 'CustomizableCheckboxValue';
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<Magento2PriceTypeEnum>;
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
export type Magento2CustomizableDateOption = Magento2CustomizableOptionInterface & {
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
  value?: Maybe<Magento2CustomizableDateValue>;
};

/** This enumeration customizable date type. */
export enum Magento2CustomizableDateTypeEnum {
  Date = 'DATE',
  DateTime = 'DATE_TIME',
  Time = 'TIME'
}

/** CustomizableDateValue defines the price and sku of a product whose page contains a customized date picker. */
export type Magento2CustomizableDateValue = {
  __typename?: 'CustomizableDateValue';
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<Magento2PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** DATE, DATE_TIME or TIME */
  type?: Maybe<Magento2CustomizableDateTypeEnum>;
  /** The unique ID for a `CustomizableDateValue` object. */
  uid: Scalars['ID'];
};

/** CustomizableDropDownOption contains information about a drop down menu that is defined as part of a customizable option. */
export type Magento2CustomizableDropDownOption = Magento2CustomizableOptionInterface & {
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
  value?: Maybe<Array<Maybe<Magento2CustomizableDropDownValue>>>;
};

/** CustomizableDropDownValue defines the price and sku of a product whose page contains a customized drop down menu. */
export type Magento2CustomizableDropDownValue = {
  __typename?: 'CustomizableDropDownValue';
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<Magento2PriceTypeEnum>;
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
export type Magento2CustomizableFieldOption = Magento2CustomizableOptionInterface & {
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
  value?: Maybe<Magento2CustomizableFieldValue>;
};

/** CustomizableFieldValue defines the price and sku of a product whose page contains a customized text field. */
export type Magento2CustomizableFieldValue = {
  __typename?: 'CustomizableFieldValue';
  /** The maximum number of characters that can be entered for this customizable option. */
  max_characters?: Maybe<Scalars['Int']>;
  /** The price of the custom value. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<Magento2PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableFieldValue` object. */
  uid: Scalars['ID'];
};

/** CustomizableFileOption contains information about a file picker that is defined as part of a customizable option. */
export type Magento2CustomizableFileOption = Magento2CustomizableOptionInterface & {
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
  value?: Maybe<Magento2CustomizableFileValue>;
};

/** CustomizableFileValue defines the price and sku of a product whose page contains a customized file picker. */
export type Magento2CustomizableFileValue = {
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
  price_type?: Maybe<Magento2PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableFileValue` object. */
  uid: Scalars['ID'];
};

/** CustomizableMultipleOption contains information about a multiselect that is defined as part of a customizable option. */
export type Magento2CustomizableMultipleOption = Magento2CustomizableOptionInterface & {
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
  value?: Maybe<Array<Maybe<Magento2CustomizableMultipleValue>>>;
};

/** CustomizableMultipleValue defines the price and sku of a product whose page contains a customized multiselect. */
export type Magento2CustomizableMultipleValue = {
  __typename?: 'CustomizableMultipleValue';
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<Magento2PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableMultipleValue` object. */
  uid: Scalars['ID'];
};

export type Magento2CustomizableOptionInput = {
  /** The customizable option id of the product */
  id?: InputMaybe<Scalars['Int']>;
  /** The string value of the option */
  value_string: Scalars['String'];
};

/**
 * The CustomizableOptionInterface contains basic information about a customizable
 * option. It can be implemented by several types of configurable options.
 */
export type Magento2CustomizableOptionInterface = {
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
export type Magento2CustomizableProductInterface = {
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<Magento2CustomizableOptionInterface>>>;
};

/** CustomizableRadioOption contains information about a set of radio buttons that are defined as part of a customizable option. */
export type Magento2CustomizableRadioOption = Magento2CustomizableOptionInterface & {
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
  value?: Maybe<Array<Maybe<Magento2CustomizableRadioValue>>>;
};

/** CustomizableRadioValue defines the price and sku of a product whose page contains a customized set of radio buttons. */
export type Magento2CustomizableRadioValue = {
  __typename?: 'CustomizableRadioValue';
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<Magento2PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** The order in which the radio button is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableRadioValue` object. */
  uid: Scalars['ID'];
};

export type Magento2DeleteCompareListOutput = {
  __typename?: 'DeleteCompareListOutput';
  /** Indicates whether the compare list was successfully deleted */
  result: Scalars['Boolean'];
};

export type Magento2DeletePaymentTokenOutput = {
  __typename?: 'DeletePaymentTokenOutput';
  customerPaymentTokens?: Maybe<Magento2CustomerPaymentTokens>;
  result: Scalars['Boolean'];
};

export type Magento2DeleteWishlistOutput = {
  __typename?: 'DeleteWishlistOutput';
  /** Indicates whether the wish list was deleted */
  status: Scalars['Boolean'];
  /** A list of undeleted wish lists */
  wishlists: Array<Maybe<Magento2Wishlist>>;
};

/** Defines an individual discount. A discount can be applied to the cart as a whole or to an item. */
export type Magento2Discount = {
  __typename?: 'Discount';
  /** The amount of the discount */
  amount: Magento2Money;
  /** A description of the discount */
  label: Scalars['String'];
};

/** Downloadable Cart Item */
export type Magento2DownloadableCartItem = Magento2CartItemInterface & {
  __typename?: 'DownloadableCartItem';
  customizable_options: Array<Maybe<Magento2SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<Magento2CartItemError>>>;
  /** @deprecated Use `uid` instead */
  id: Scalars['String'];
  /** An array containing information about the links for the added to cart downloadable product */
  links?: Maybe<Array<Maybe<Magento2DownloadableProductLinks>>>;
  prices?: Maybe<Magento2CartItemPrices>;
  product: Magento2ProductInterface;
  quantity: Scalars['Float'];
  /** DownloadableProductSamples defines characteristics of a downloadable product */
  samples?: Maybe<Array<Maybe<Magento2DownloadableProductSamples>>>;
  /** The unique ID for a `CartItemInterface` object */
  uid: Scalars['ID'];
};

export type Magento2DownloadableCreditMemoItem = Magento2CreditMemoItemInterface & {
  __typename?: 'DownloadableCreditMemoItem';
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Magento2Discount>>>;
  /** A list of downloadable links that are refunded from the downloadable product */
  downloadable_links?: Maybe<Array<Maybe<Magento2DownloadableItemsLinks>>>;
  /** The unique ID for a `CreditMemoItemInterface` object */
  id: Scalars['ID'];
  /** The order item the credit memo is applied to */
  order_item?: Maybe<Magento2OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product, including selected options */
  product_sale_price: Magento2Money;
  /** SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of refunded items */
  quantity_refunded?: Maybe<Scalars['Float']>;
};

export enum Magento2DownloadableFileTypeEnum {
  File = 'FILE',
  Url = 'URL'
}

export type Magento2DownloadableInvoiceItem = Magento2InvoiceItemInterface & {
  __typename?: 'DownloadableInvoiceItem';
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Magento2Discount>>>;
  /** A list of downloadable links that are invoiced from the downloadable product */
  downloadable_links?: Maybe<Array<Maybe<Magento2DownloadableItemsLinks>>>;
  /** The unique ID for a `InvoiceItemInterface` object */
  id: Scalars['ID'];
  /** Contains details about an individual order item */
  order_item?: Maybe<Magento2OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product including selected options */
  product_sale_price: Magento2Money;
  /** The SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of invoiced items */
  quantity_invoiced?: Maybe<Scalars['Float']>;
};

/** DownloadableProductLinks defines characteristics of a downloadable product */
export type Magento2DownloadableItemsLinks = {
  __typename?: 'DownloadableItemsLinks';
  /** A number indicating the sort order */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name of the link */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `DownloadableItemsLinks` object. */
  uid: Scalars['ID'];
};

export type Magento2DownloadableOrderItem = Magento2OrderItemInterface & {
  __typename?: 'DownloadableOrderItem';
  /** The final discount information for the product */
  discounts?: Maybe<Array<Maybe<Magento2Discount>>>;
  /** A list of downloadable links that are ordered from the downloadable product */
  downloadable_links?: Maybe<Array<Maybe<Magento2DownloadableItemsLinks>>>;
  /** Indicates whether the order item is eligible is eligible to be in a return request */
  eligible_for_return?: Maybe<Scalars['Boolean']>;
  /** The entered option for the base product, such as a logo or image */
  entered_options?: Maybe<Array<Maybe<Magento2OrderItemOption>>>;
  /** The selected gift wrapping for the order item */
  gift_wrapping?: Maybe<Magento2GiftWrapping>;
  /** The unique ID for a `OrderItemInterface` object */
  id: Scalars['ID'];
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price of the base product, including selected options */
  product_sale_price: Magento2Money;
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
  selected_options?: Maybe<Array<Maybe<Magento2OrderItemOption>>>;
  /** The status of the order item */
  status?: Maybe<Scalars['String']>;
};

/** DownloadableProduct defines a product that the shopper downloads */
export type Magento2DownloadableProduct = Magento2CustomizableProductInterface & Magento2ProductInterface & Magento2RoutableInterface & {
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
  categories?: Maybe<Array<Maybe<Magento2CategoryInterface>>>;
  color?: Maybe<Scalars['Int']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<Magento2ProductInterface>>>;
  /** List of product custom attributes details. */
  custom_attributes: Array<Maybe<Magento2CustomAttribute>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<Magento2ComplexTextValue>;
  /** An array containing information about the links for this downloadable product */
  downloadable_product_links?: Maybe<Array<Maybe<Magento2DownloadableProductLinks>>>;
  /** An array containing information about samples of this downloadable product. */
  downloadable_product_samples?: Maybe<Array<Maybe<Magento2DownloadableProductSamples>>>;
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
  image?: Maybe<Magento2ProductImage>;
  /** Indicates whether the product can be returned */
  is_returnable?: Maybe<Scalars['String']>;
  /** A value of 1 indicates that each link in the array must be purchased separately */
  links_purchased_separately?: Maybe<Scalars['Int']>;
  /** The heading above the list of downloadable products */
  links_title?: Maybe<Scalars['String']>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']>;
  /** An array of Media Gallery objects. */
  media_gallery?: Maybe<Array<Maybe<Magento2MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use product's `media_gallery` instead
   */
  media_gallery_entries?: Maybe<Array<Maybe<Magento2MediaGalleryEntry>>>;
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
  options?: Maybe<Array<Maybe<Magento2CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  /**
   * A ProductPrices object, indicating the price of an item.
   * @deprecated Use price_range for product price information.
   */
  price?: Maybe<Magento2ProductPrices>;
  /** A PriceRange object, indicating the range of prices for the product */
  price_range: Magento2PriceRange;
  /** An array of TierPrice objects. */
  price_tiers?: Maybe<Array<Maybe<Magento2TierPrice>>>;
  /** An array of ProductLinks objects. */
  product_links?: Maybe<Array<Maybe<Magento2ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /**
   * Contains 0 when there is no redirect error. A value of 301 indicates the URL
   * of the requested resource has been changed permanently, while a value of 302
   * indicates a temporary redirect
   */
  redirect_code: Scalars['Int'];
  /** Related Products */
  related_products?: Maybe<Array<Maybe<Magento2ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original */
  relative_url?: Maybe<Scalars['String']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: Magento2ProductReviews;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<Magento2ComplexTextValue>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<Magento2ProductImage>;
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
  stock_status?: Maybe<Magento2ProductStockStatus>;
  /** The file name of a swatch image */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<Magento2ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<Magento2ProductTierPrices>>>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<Magento2UrlRewriteEntityTypeEnum>;
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
  upsell_products?: Maybe<Array<Maybe<Magento2ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<Magento2UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  video_file?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Magento2Website>>>;
};


/** DownloadableProduct defines a product that the shopper downloads */
export type Magento2DownloadableProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type Magento2DownloadableProductCartItemInput = {
  customizable_options?: InputMaybe<Array<InputMaybe<Magento2CustomizableOptionInput>>>;
  data: Magento2CartItemInput;
  downloadable_product_links?: InputMaybe<Array<InputMaybe<Magento2DownloadableProductLinksInput>>>;
};

/** DownloadableProductLinks defines characteristics of a downloadable product */
export type Magento2DownloadableProductLinks = {
  __typename?: 'DownloadableProductLinks';
  /** @deprecated This information should not be exposed on frontend */
  id?: Maybe<Scalars['Int']>;
  /** @deprecated This information should not be exposed on frontend */
  is_shareable?: Maybe<Scalars['Boolean']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  link_type?: Maybe<Magento2DownloadableFileTypeEnum>;
  /** @deprecated This information should not be exposed on frontend */
  number_of_downloads?: Maybe<Scalars['Int']>;
  /** The price of the downloadable product */
  price?: Maybe<Scalars['Float']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_file?: Maybe<Scalars['String']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_type?: Maybe<Magento2DownloadableFileTypeEnum>;
  /** URL to the downloadable sample */
  sample_url?: Maybe<Scalars['String']>;
  /** A number indicating the sort order */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name of the link */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `DownloadableProductLinks` object. */
  uid: Scalars['ID'];
};

export type Magento2DownloadableProductLinksInput = {
  link_id: Scalars['Int'];
};

/** DownloadableProductSamples defines characteristics of a downloadable product */
export type Magento2DownloadableProductSamples = {
  __typename?: 'DownloadableProductSamples';
  /** @deprecated This information should not be exposed on frontend */
  id?: Maybe<Scalars['Int']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_file?: Maybe<Scalars['String']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_type?: Maybe<Magento2DownloadableFileTypeEnum>;
  /** URL to the downloadable sample */
  sample_url?: Maybe<Scalars['String']>;
  /** A number indicating the sort order */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name of the sample */
  title?: Maybe<Scalars['String']>;
};

/** A downloadable product wish list item */
export type Magento2DownloadableWishlistItem = Magento2WishlistItemInterface & {
  __typename?: 'DownloadableWishlistItem';
  /** The date and time the item was added to the wish list */
  added_at: Scalars['String'];
  /** Custom options selected for the wish list item */
  customizable_options: Array<Maybe<Magento2SelectedCustomizableOption>>;
  /** The description of the item */
  description?: Maybe<Scalars['String']>;
  /** The unique ID for a `WishlistItemInterface` object */
  id: Scalars['ID'];
  /** An array containing information about the selected links */
  links_v2?: Maybe<Array<Maybe<Magento2DownloadableProductLinks>>>;
  /** Product details of the wish list item */
  product?: Maybe<Magento2ProductInterface>;
  /** The quantity of this wish list item */
  quantity: Scalars['Float'];
  /** An array containing information about the selected samples */
  samples?: Maybe<Array<Maybe<Magento2DownloadableProductSamples>>>;
};

export type Magento2DynamicBlock = {
  __typename?: 'DynamicBlock';
  /** Contains the renderable HTML code of the dynamic block */
  content: Magento2ComplexTextValue;
  /** The unique ID of a `DynamicBlock` object */
  uid: Scalars['ID'];
};

export enum Magento2DynamicBlockLocationEnum {
  Content = 'CONTENT',
  Footer = 'FOOTER',
  Header = 'HEADER',
  Left = 'LEFT',
  Right = 'RIGHT'
}

export enum Magento2DynamicBlockTypeEnum {
  CartPriceRuleRelated = 'CART_PRICE_RULE_RELATED',
  CatalogPriceRuleRelated = 'CATALOG_PRICE_RULE_RELATED',
  Specified = 'SPECIFIED'
}

export type Magento2DynamicBlocks = {
  __typename?: 'DynamicBlocks';
  /** An array containing individual dynamic blocks */
  items: Array<Maybe<Magento2DynamicBlock>>;
  /** Metadata for pagination rendering */
  page_info?: Maybe<Magento2SearchResultPageInfo>;
  /** The number of returned dynamic blocks */
  total_count: Scalars['Int'];
};

export type Magento2DynamicBlocksFilterInput = {
  /** An array of dynamic block UIDs to filter on */
  dynamic_block_uids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** An array indicating the locations the dynamic block can be placed */
  locations?: InputMaybe<Array<InputMaybe<Magento2DynamicBlockLocationEnum>>>;
  /** A value indicating the type of dynamic block to filter on */
  type: Magento2DynamicBlockTypeEnum;
};

export type Magento2EnteredAttributeValue = {
  __typename?: 'EnteredAttributeValue';
  /** Attribute value. */
  value?: Maybe<Scalars['String']>;
};

export type Magento2EnteredCustomAttributeInput = {
  /** A string that identifies the entered custom attribute */
  attribute_code: Scalars['String'];
  /** The text or other entered value */
  value: Scalars['String'];
};

/** Defines a customer-entered option */
export type Magento2EnteredOptionInput = {
  /**
   * The unique ID for a `CustomizableFieldOption`, `CustomizableFileOption`,
   * `CustomizableAreaOption`, etc. of `CustomizableOptionInterface` objects
   */
  uid: Scalars['ID'];
  /** Text the customer entered */
  value: Scalars['String'];
};

/** EntityUrl is an output object containing the `id`, `relative_url`, and `type` attributes */
export type Magento2EntityUrl = {
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
  type?: Maybe<Magento2UrlRewriteEntityTypeEnum>;
};

export type Magento2ExchangeRate = {
  __typename?: 'ExchangeRate';
  currency_to?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['Float']>;
};

/** Defines a filter that matches the input exactly. */
export type Magento2FilterEqualTypeInput = {
  /** A string to filter on */
  eq?: InputMaybe<Scalars['String']>;
  /** An array of values to filter on */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Defines a filter that performs a fuzzy search. */
export type Magento2FilterMatchTypeInput = {
  /** One or more words to filter on */
  match?: InputMaybe<Scalars['String']>;
};

/** Defines a filter that matches a range of values, such as prices or dates. */
export type Magento2FilterRangeTypeInput = {
  /** The beginning of the range */
  from?: InputMaybe<Scalars['String']>;
  /** The end of the range */
  to?: InputMaybe<Scalars['String']>;
};

/** Defines a filter for an input string. */
export type Magento2FilterStringTypeInput = {
  /** Filters items that are exactly the same as the specified string. */
  eq?: InputMaybe<Scalars['String']>;
  /** Filters items that are exactly the same as entries specified in an array of strings. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Defines a filter that performs a fuzzy search using the specified string. */
  match?: InputMaybe<Scalars['String']>;
};

/** FilterTypeInput specifies which action will be performed in a query  */
export type Magento2FilterTypeInput = {
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
export type Magento2FixedProductTax = {
  __typename?: 'FixedProductTax';
  /** Amount of the FPT as a money object. */
  amount?: Maybe<Magento2Money>;
  /** The label assigned to the FPT to be displayed on the frontend. */
  label?: Maybe<Scalars['String']>;
};

/** This enumeration display settings for the fixed product tax */
export enum Magento2FixedProductTaxDisplaySettings {
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

export type Magento2GenerateCustomerTokenAsAdminInput = {
  /** The email address of the customer requesting remote shopping assistance */
  customer_email: Scalars['String'];
};

export type Magento2GenerateCustomerTokenAsAdminOutput = {
  __typename?: 'GenerateCustomerTokenAsAdminOutput';
  /** The generated customer token */
  customer_token: Scalars['String'];
};

/** Contains details about the gift card account */
export type Magento2GiftCardAccount = {
  __typename?: 'GiftCardAccount';
  /** Balance remaining on gift card */
  balance?: Maybe<Magento2Money>;
  /** Gift card account code */
  code?: Maybe<Scalars['String']>;
  /** Gift card expiration date */
  expiration_date?: Maybe<Scalars['String']>;
};

export type Magento2GiftCardAccountInput = {
  /** Defines the input required to identify the gift card account */
  gift_card_code: Scalars['String'];
};

/** GiftCardAmounts contains the value of a gift card, the website that generated the card, and related information */
export type Magento2GiftCardAmounts = {
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
export type Magento2GiftCardCartItem = Magento2CartItemInterface & {
  __typename?: 'GiftCardCartItem';
  /** The amount and currency of the gift card */
  amount: Magento2Money;
  /** An array of customizations made to the gift card */
  customizable_options: Array<Maybe<Magento2SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<Magento2CartItemError>>>;
  /** @deprecated Use `uid` instead */
  id: Scalars['String'];
  /** A message to the recipient */
  message?: Maybe<Scalars['String']>;
  prices?: Maybe<Magento2CartItemPrices>;
  product: Magento2ProductInterface;
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

export type Magento2GiftCardCreditMemoItem = Magento2CreditMemoItemInterface & {
  __typename?: 'GiftCardCreditMemoItem';
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Magento2Discount>>>;
  /** Selected gift card properties for an credit memo item */
  gift_card?: Maybe<Magento2GiftCardItem>;
  /** The unique ID for a `CreditMemoItemInterface` object */
  id: Scalars['ID'];
  /** The order item the credit memo is applied to */
  order_item?: Maybe<Magento2OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product, including selected options */
  product_sale_price: Magento2Money;
  /** SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of refunded items */
  quantity_refunded?: Maybe<Scalars['Float']>;
};

export type Magento2GiftCardInvoiceItem = Magento2InvoiceItemInterface & {
  __typename?: 'GiftCardInvoiceItem';
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Magento2Discount>>>;
  /** Selected gift card properties for an invoice item */
  gift_card?: Maybe<Magento2GiftCardItem>;
  /** The unique ID for a `InvoiceItemInterface` object */
  id: Scalars['ID'];
  /** Contains details about an individual order item */
  order_item?: Maybe<Magento2OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product including selected options */
  product_sale_price: Magento2Money;
  /** The SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of invoiced items */
  quantity_invoiced?: Maybe<Scalars['Float']>;
};

export type Magento2GiftCardItem = {
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

export type Magento2GiftCardOptions = {
  __typename?: 'GiftCardOptions';
  /** The amount and currency of the gift card */
  amount?: Maybe<Magento2Money>;
  /** The custom amount and currency of the gift card */
  custom_giftcard_amount?: Maybe<Magento2Money>;
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

export type Magento2GiftCardOrderItem = Magento2OrderItemInterface & {
  __typename?: 'GiftCardOrderItem';
  /** The final discount information for the product */
  discounts?: Maybe<Array<Maybe<Magento2Discount>>>;
  /** Indicates whether the order item is eligible is eligible to be in a return request */
  eligible_for_return?: Maybe<Scalars['Boolean']>;
  /** The entered option for the base product, such as a logo or image */
  entered_options?: Maybe<Array<Maybe<Magento2OrderItemOption>>>;
  /** Selected gift card properties for an order item */
  gift_card?: Maybe<Magento2GiftCardItem>;
  /** The selected gift wrapping for the order item */
  gift_wrapping?: Maybe<Magento2GiftWrapping>;
  /** The unique ID for a `OrderItemInterface` object */
  id: Scalars['ID'];
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price of the base product, including selected options */
  product_sale_price: Magento2Money;
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
  selected_options?: Maybe<Array<Maybe<Magento2OrderItemOption>>>;
  /** The status of the order item */
  status?: Maybe<Scalars['String']>;
};

/**
 * GiftCardProduct defines properties of a gift card, including the minimum and
 * maximum values and an array that contains the current and past values on the
 * specific gift card
 */
export type Magento2GiftCardProduct = Magento2CustomizableProductInterface & Magento2PhysicalProductInterface & Magento2ProductInterface & Magento2RoutableInterface & {
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
  categories?: Maybe<Array<Maybe<Magento2CategoryInterface>>>;
  color?: Maybe<Scalars['Int']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<Magento2ProductInterface>>>;
  /** List of product custom attributes details. */
  custom_attributes: Array<Maybe<Magento2CustomAttribute>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<Magento2ComplexTextValue>;
  fashion_color?: Maybe<Scalars['Int']>;
  fashion_material?: Maybe<Scalars['String']>;
  fashion_size?: Maybe<Scalars['Int']>;
  fashion_style?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['Int']>;
  /** An array of giftcard options. */
  gift_card_options: Array<Maybe<Magento2CustomizableOptionInterface>>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']>;
  /** An array that contains information about the values and ID of a gift card. */
  giftcard_amounts?: Maybe<Array<Maybe<Magento2GiftCardAmounts>>>;
  /** Either VIRTUAL, PHYSICAL, or COMBINED. */
  giftcard_type?: Maybe<Magento2GiftCardTypeEnum>;
  has_video?: Maybe<Scalars['Int']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<Magento2ProductImage>;
  /** Indicates whether the customer can redeem the value on the card for cash. */
  is_redeemable?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the product can be returned */
  is_returnable?: Maybe<Scalars['String']>;
  /** The number of days after purchase until the gift card expires. A null value means there is no limit. */
  lifetime?: Maybe<Scalars['Int']>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']>;
  /** An array of Media Gallery objects. */
  media_gallery?: Maybe<Array<Maybe<Magento2MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use product's `media_gallery` instead
   */
  media_gallery_entries?: Maybe<Array<Maybe<Magento2MediaGalleryEntry>>>;
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
  options?: Maybe<Array<Maybe<Magento2CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  /**
   * A ProductPrices object, indicating the price of an item.
   * @deprecated Use price_range for product price information.
   */
  price?: Maybe<Magento2ProductPrices>;
  /** A PriceRange object, indicating the range of prices for the product */
  price_range: Magento2PriceRange;
  /** An array of TierPrice objects. */
  price_tiers?: Maybe<Array<Maybe<Magento2TierPrice>>>;
  /** An array of ProductLinks objects. */
  product_links?: Maybe<Array<Maybe<Magento2ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /**
   * Contains 0 when there is no redirect error. A value of 301 indicates the URL
   * of the requested resource has been changed permanently, while a value of 302
   * indicates a temporary redirect
   */
  redirect_code: Scalars['Int'];
  /** Related Products */
  related_products?: Maybe<Array<Maybe<Magento2ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original */
  relative_url?: Maybe<Scalars['String']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: Magento2ProductReviews;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<Magento2ComplexTextValue>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<Magento2ProductImage>;
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
  stock_status?: Maybe<Magento2ProductStockStatus>;
  /** The file name of a swatch image */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<Magento2ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<Magento2ProductTierPrices>>>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<Magento2UrlRewriteEntityTypeEnum>;
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
  upsell_products?: Maybe<Array<Maybe<Magento2ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<Magento2UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  video_file?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Magento2Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']>;
};


/**
 * GiftCardProduct defines properties of a gift card, including the minimum and
 * maximum values and an array that contains the current and past values on the
 * specific gift card
 */
export type Magento2GiftCardProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type Magento2GiftCardShipmentItem = Magento2ShipmentItemInterface & {
  __typename?: 'GiftCardShipmentItem';
  /** Selected gift card properties for an shipment item */
  gift_card?: Maybe<Magento2GiftCardItem>;
  /** The unique ID for a `ShipmentItemInterface` object */
  id: Scalars['ID'];
  /** Associated order item */
  order_item?: Maybe<Magento2OrderItemInterface>;
  /** Name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** Sale price for the base product */
  product_sale_price: Magento2Money;
  /** SKU of the base product */
  product_sku: Scalars['String'];
  /** Number of shipped items */
  quantity_shipped: Scalars['Float'];
};

/** This enumeration defines the types of gift cards */
export enum Magento2GiftCardTypeEnum {
  Combined = 'COMBINED',
  Physical = 'PHYSICAL',
  Virtual = 'VIRTUAL'
}

/** A gift card product wish list item */
export type Magento2GiftCardWishlistItem = Magento2WishlistItemInterface & {
  __typename?: 'GiftCardWishlistItem';
  /** The date and time the item was added to the wish list */
  added_at: Scalars['String'];
  /** Custom options selected for the wish list item */
  customizable_options: Array<Maybe<Magento2SelectedCustomizableOption>>;
  /** The description of the item */
  description?: Maybe<Scalars['String']>;
  gift_card_options: Magento2GiftCardOptions;
  /** The unique ID for a `WishlistItemInterface` object */
  id: Scalars['ID'];
  /** Product details of the wish list item */
  product?: Maybe<Magento2ProductInterface>;
  /** The quantity of this wish list item */
  quantity: Scalars['Float'];
};

/** Contains the text of a gift message, its sender, and recipient */
export type Magento2GiftMessage = {
  __typename?: 'GiftMessage';
  /** Sender name */
  from: Scalars['String'];
  /** Gift message text */
  message: Scalars['String'];
  /** Recipient name */
  to: Scalars['String'];
};

/** Contains the text of a gift message, its sender, and recipient */
export type Magento2GiftMessageInput = {
  /** Sender name */
  from: Scalars['String'];
  /** Gift message text */
  message: Scalars['String'];
  /** Recepient name */
  to: Scalars['String'];
};

export type Magento2GiftOptionsPrices = {
  __typename?: 'GiftOptionsPrices';
  /** Price of the gift wrapping for all individual order items */
  gift_wrapping_for_items?: Maybe<Magento2Money>;
  /** Price of the gift wrapping for the whole order */
  gift_wrapping_for_order?: Maybe<Magento2Money>;
  /** Price for the printed card */
  printed_card?: Maybe<Magento2Money>;
};

export type Magento2GiftRegistry = {
  __typename?: 'GiftRegistry';
  /** The date on which the gift registry was created. Only the registry owner can access this attribute */
  created_at: Scalars['String'];
  /** An array of attributes that define elements of the gift registry. Each attribute is specified as a code-value pair */
  dynamic_attributes?: Maybe<Array<Maybe<Magento2GiftRegistryDynamicAttribute>>>;
  /** The name of the event */
  event_name: Scalars['String'];
  /** An array of products added to the gift registry */
  items?: Maybe<Array<Maybe<Magento2GiftRegistryItemInterface>>>;
  /** The message text the customer entered to describe the event */
  message: Scalars['String'];
  /** The customer who created the gift registry */
  owner_name: Scalars['String'];
  /** An enum that states whether the gift registry is PRIVATE or PUBLIC. Only the registry owner can access this attribute */
  privacy_settings: Magento2GiftRegistryPrivacySettings;
  /** Contains details about each registrant for the event */
  registrants?: Maybe<Array<Maybe<Magento2GiftRegistryRegistrant>>>;
  /** Contains the customer's shipping address. Only the registry owner can access this attribute */
  shipping_address?: Maybe<Magento2CustomerAddress>;
  /** An enum that states whether the gift registry is ACTIVE or INACTIVE. Only the registry owner can access this attribute */
  status: Magento2GiftRegistryStatus;
  /** Contains details about the type of gift registry */
  type?: Maybe<Magento2GiftRegistryType>;
  /** The unique ID assigned to the gift registry */
  uid: Scalars['ID'];
};

export type Magento2GiftRegistryDynamicAttribute = Magento2GiftRegistryDynamicAttributeInterface & {
  __typename?: 'GiftRegistryDynamicAttribute';
  /** The internal ID of the dynamic attribute */
  code: Scalars['ID'];
  /** Indicates which group the dynamic attribute is a member of */
  group: Magento2GiftRegistryDynamicAttributeGroup;
  /** The display name of the dynamic attribute */
  label: Scalars['String'];
  /** A corresponding value for the code */
  value: Scalars['String'];
};

export enum Magento2GiftRegistryDynamicAttributeGroup {
  DetailedInformation = 'DETAILED_INFORMATION',
  EventInformation = 'EVENT_INFORMATION',
  GeneralInformation = 'GENERAL_INFORMATION',
  PrivacySettings = 'PRIVACY_SETTINGS',
  Registrant = 'REGISTRANT',
  ShippingAddress = 'SHIPPING_ADDRESS'
}

export type Magento2GiftRegistryDynamicAttributeInput = {
  /** A unique key for an additional attribute of the event */
  code: Scalars['ID'];
  /** A string that describes a dynamic attribute */
  value: Scalars['String'];
};

export type Magento2GiftRegistryDynamicAttributeInterface = {
  /** The internal ID of the dynamic attribute */
  code: Scalars['ID'];
  /** The display name of the dynamic attribute */
  label: Scalars['String'];
  /** A corresponding value for the code */
  value: Scalars['String'];
};

export type Magento2GiftRegistryDynamicAttributeMetadata = Magento2GiftRegistryDynamicAttributeMetadataInterface & {
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

export type Magento2GiftRegistryDynamicAttributeMetadataInterface = {
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

export type Magento2GiftRegistryItem = Magento2GiftRegistryItemInterface & {
  __typename?: 'GiftRegistryItem';
  /** The date the product was added to the gift registry */
  created_at: Scalars['String'];
  /** A brief message about the gift registry item */
  note?: Maybe<Scalars['String']>;
  product?: Maybe<Magento2ProductInterface>;
  /** The requested quantity of the product */
  quantity: Scalars['Float'];
  /** The fulfilled quantity of the product */
  quantity_fulfilled: Scalars['Float'];
  /** The unique ID of a gift registry item */
  uid: Scalars['ID'];
};

export type Magento2GiftRegistryItemInterface = {
  /** The date the product was added to the gift registry */
  created_at: Scalars['String'];
  /** A brief message about the gift registry item */
  note?: Maybe<Scalars['String']>;
  product?: Maybe<Magento2ProductInterface>;
  /** The requested quantity of the product */
  quantity: Scalars['Float'];
  /** The fulfilled quantity of the product */
  quantity_fulfilled: Scalars['Float'];
  /** The unique ID of a gift registry item */
  uid: Scalars['ID'];
};

/** Contains the status and any errors that encountered with the customer's gift register item */
export type Magento2GiftRegistryItemUserErrorInterface = {
  /** Indicates whether the attempt to move the cart items to the gift registry was successful */
  status: Scalars['Boolean'];
  /** An array of errors encountered while moving items from the cart to the gift registry */
  user_errors: Array<Maybe<Magento2GiftRegistryItemsUserError>>;
};

export type Magento2GiftRegistryItemUserErrors = Magento2GiftRegistryItemUserErrorInterface & {
  __typename?: 'GiftRegistryItemUserErrors';
  /** Indicates whether the attempt to move the cart items to the gift registry was successful */
  status: Scalars['Boolean'];
  /** An array of errors encountered while moving items from the cart to the gift registry */
  user_errors: Array<Maybe<Magento2GiftRegistryItemsUserError>>;
};

export type Magento2GiftRegistryItemsUserError = {
  __typename?: 'GiftRegistryItemsUserError';
  /** An error code that describes the error encountered */
  code: Magento2GiftRegistryItemsUserErrorType;
  /** The unique ID of the gift registry item containing an error */
  gift_registry_item_uid?: Maybe<Scalars['ID']>;
  /** The unique ID of the `Gift registry` object containing an error */
  gift_registry_uid?: Maybe<Scalars['ID']>;
  /** A localized error message */
  message: Scalars['String'];
  /** The unique ID of the product containing an error */
  product_uid?: Maybe<Scalars['ID']>;
};

export enum Magento2GiftRegistryItemsUserErrorType {
  /** Used for exceptions like EntityNotFound */
  NotFound = 'NOT_FOUND',
  /** Used for handling out of stock products */
  OutOfStock = 'OUT_OF_STOCK',
  /** Used for other exceptions, such as database connection failures */
  Undefined = 'UNDEFINED'
}

export type Magento2GiftRegistryOutput = Magento2GiftRegistryOutputInterface & {
  __typename?: 'GiftRegistryOutput';
  /** The gift registry */
  gift_registry?: Maybe<Magento2GiftRegistry>;
};

/** Contains the customer's gift registry */
export type Magento2GiftRegistryOutputInterface = {
  /** The gift registry */
  gift_registry?: Maybe<Magento2GiftRegistry>;
};

export enum Magento2GiftRegistryPrivacySettings {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Magento2GiftRegistryRegistrant = {
  __typename?: 'GiftRegistryRegistrant';
  /** An array of dynamic attributes assigned to the registrant */
  dynamic_attributes?: Maybe<Array<Maybe<Magento2GiftRegistryRegistrantDynamicAttribute>>>;
  /** The email address of the registrant. Only the registry owner can access this attribute */
  email: Scalars['String'];
  /** The first name of the registrant */
  firstname: Scalars['String'];
  /** The last name of the registrant */
  lastname: Scalars['String'];
  /** The unique ID assigned to the registrant */
  uid: Scalars['ID'];
};

export type Magento2GiftRegistryRegistrantDynamicAttribute = Magento2GiftRegistryDynamicAttributeInterface & {
  __typename?: 'GiftRegistryRegistrantDynamicAttribute';
  /** The internal ID of the dynamic attribute */
  code: Scalars['ID'];
  /** The display name of the dynamic attribute */
  label: Scalars['String'];
  /** A corresponding value for the code */
  value: Scalars['String'];
};

export type Magento2GiftRegistrySearchResult = {
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
export type Magento2GiftRegistryShippingAddressInput = {
  /** Defines the shipping address for this gift registry */
  address_data?: InputMaybe<Magento2CustomerAddressInput>;
  /** The ID assigned to this customer address */
  address_id?: InputMaybe<Scalars['ID']>;
};

export enum Magento2GiftRegistryStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type Magento2GiftRegistryType = {
  __typename?: 'GiftRegistryType';
  /** An array of attributes that define elements of the gift registry. Each attribute is specified as a code-value pair */
  dynamic_attributes_metadata?: Maybe<Array<Maybe<Magento2GiftRegistryDynamicAttributeMetadataInterface>>>;
  /** The label assigned to the gift registry type on the Admin */
  label: Scalars['String'];
  /** The unique ID assigned to the gift registry type */
  uid: Scalars['ID'];
};

export type Magento2GiftWrapping = {
  __typename?: 'GiftWrapping';
  /** Gift wrapping design name */
  design: Scalars['String'];
  /**
   * The unique ID for a `GiftWrapping` object
   * @deprecated Use `uid` instead
   */
  id: Scalars['ID'];
  /** Gift wrapping preview image */
  image?: Maybe<Magento2GiftWrappingImage>;
  /** Gift wrapping price */
  price: Magento2Money;
  /** The unique ID for a `GiftWrapping` object */
  uid: Scalars['ID'];
};

export type Magento2GiftWrappingImage = {
  __typename?: 'GiftWrappingImage';
  /** Gift wrapping preview image label */
  label: Scalars['String'];
  /** Gift wrapping preview image URL */
  url: Scalars['String'];
};

/** A grouped product consists of simple standalone products that are presented as a group */
export type Magento2GroupedProduct = Magento2PhysicalProductInterface & Magento2ProductInterface & Magento2RoutableInterface & {
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
  categories?: Maybe<Array<Maybe<Magento2CategoryInterface>>>;
  color?: Maybe<Scalars['Int']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<Magento2ProductInterface>>>;
  /** List of product custom attributes details. */
  custom_attributes: Array<Maybe<Magento2CustomAttribute>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<Magento2ComplexTextValue>;
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
  image?: Maybe<Magento2ProductImage>;
  /** Indicates whether the product can be returned */
  is_returnable?: Maybe<Scalars['String']>;
  /** An array containing grouped product items */
  items?: Maybe<Array<Maybe<Magento2GroupedProductItem>>>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']>;
  /** An array of Media Gallery objects. */
  media_gallery?: Maybe<Array<Maybe<Magento2MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use product's `media_gallery` instead
   */
  media_gallery_entries?: Maybe<Array<Maybe<Magento2MediaGalleryEntry>>>;
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
  price?: Maybe<Magento2ProductPrices>;
  /** A PriceRange object, indicating the range of prices for the product */
  price_range: Magento2PriceRange;
  /** An array of TierPrice objects. */
  price_tiers?: Maybe<Array<Maybe<Magento2TierPrice>>>;
  /** An array of ProductLinks objects. */
  product_links?: Maybe<Array<Maybe<Magento2ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /**
   * Contains 0 when there is no redirect error. A value of 301 indicates the URL
   * of the requested resource has been changed permanently, while a value of 302
   * indicates a temporary redirect
   */
  redirect_code: Scalars['Int'];
  /** Related Products */
  related_products?: Maybe<Array<Maybe<Magento2ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original */
  relative_url?: Maybe<Scalars['String']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: Magento2ProductReviews;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<Magento2ComplexTextValue>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<Magento2ProductImage>;
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
  stock_status?: Maybe<Magento2ProductStockStatus>;
  /** The file name of a swatch image */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<Magento2ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<Magento2ProductTierPrices>>>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<Magento2UrlRewriteEntityTypeEnum>;
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
  upsell_products?: Maybe<Array<Maybe<Magento2ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<Magento2UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  video_file?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Magento2Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']>;
};


/** A grouped product consists of simple standalone products that are presented as a group */
export type Magento2GroupedProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

/** GroupedProductItem contains information about an individual grouped product item */
export type Magento2GroupedProductItem = {
  __typename?: 'GroupedProductItem';
  /** The relative position of this item compared to the other group items */
  position?: Maybe<Scalars['Int']>;
  /** The ProductInterface object, which contains details about this product option */
  product?: Maybe<Magento2ProductInterface>;
  /** The quantity of this grouped product item */
  qty?: Maybe<Scalars['Float']>;
};

/** A grouped product wish list item */
export type Magento2GroupedProductWishlistItem = Magento2WishlistItemInterface & {
  __typename?: 'GroupedProductWishlistItem';
  /** The date and time the item was added to the wish list */
  added_at: Scalars['String'];
  /** Custom options selected for the wish list item */
  customizable_options: Array<Maybe<Magento2SelectedCustomizableOption>>;
  /** The description of the item */
  description?: Maybe<Scalars['String']>;
  /** The unique ID for a `WishlistItemInterface` object */
  id: Scalars['ID'];
  /** Product details of the wish list item */
  product?: Maybe<Magento2ProductInterface>;
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
export type Magento2HostedProInput = {
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
export type Magento2HostedProUrl = {
  __typename?: 'HostedProUrl';
  /** Secure Url generated by PayPal */
  secure_form_url?: Maybe<Scalars['String']>;
};

/** The required input to request the secure URL for Payments Pro Hosted Solution payment. */
export type Magento2HostedProUrlInput = {
  /** The unique ID that identifies the customer's cart */
  cart_id: Scalars['String'];
};

/** The object details of target path parameters */
export type Magento2HttpQueryParameter = {
  __typename?: 'HttpQueryParameter';
  /** Parameter name */
  name?: Maybe<Scalars['String']>;
  /** Parameter value */
  value?: Maybe<Scalars['String']>;
};

export type Magento2ImageSwatchData = Magento2SwatchDataInterface & {
  __typename?: 'ImageSwatchData';
  /** Thumbnail swatch image URL */
  thumbnail?: Maybe<Scalars['String']>;
  /** Value of swatch item (HEX color code, image link or textual value) */
  value?: Maybe<Scalars['String']>;
};

/** Invoice details */
export type Magento2Invoice = {
  __typename?: 'Invoice';
  /** Comments on the invoice */
  comments?: Maybe<Array<Maybe<Magento2SalesCommentItem>>>;
  /** The unique ID for a `Invoice` object */
  id: Scalars['ID'];
  /** Invoiced product details */
  items?: Maybe<Array<Maybe<Magento2InvoiceItemInterface>>>;
  /** Sequential invoice number */
  number: Scalars['String'];
  /** Invoice total amount details */
  total?: Maybe<Magento2InvoiceTotal>;
};

export type Magento2InvoiceItem = Magento2InvoiceItemInterface & {
  __typename?: 'InvoiceItem';
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Magento2Discount>>>;
  /** The unique ID for a `InvoiceItemInterface` object */
  id: Scalars['ID'];
  /** Contains details about an individual order item */
  order_item?: Maybe<Magento2OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product including selected options */
  product_sale_price: Magento2Money;
  /** The SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of invoiced items */
  quantity_invoiced?: Maybe<Scalars['Float']>;
};

/** Invoice item details */
export type Magento2InvoiceItemInterface = {
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Magento2Discount>>>;
  /** The unique ID for a `InvoiceItemInterface` object */
  id: Scalars['ID'];
  /** Contains details about an individual order item */
  order_item?: Maybe<Magento2OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product including selected options */
  product_sale_price: Magento2Money;
  /** The SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of invoiced items */
  quantity_invoiced?: Maybe<Scalars['Float']>;
};

/** Contains price details from an invoice */
export type Magento2InvoiceTotal = {
  __typename?: 'InvoiceTotal';
  /** The final base grand total amount in the base currency */
  base_grand_total: Magento2Money;
  /** The applied discounts to the invoice */
  discounts?: Maybe<Array<Maybe<Magento2Discount>>>;
  /** The final total amount, including shipping, discounts, and taxes */
  grand_total: Magento2Money;
  /** Contains details about the shipping and handling costs for the invoice */
  shipping_handling?: Maybe<Magento2ShippingHandling>;
  /** The subtotal of the invoice, excluding shipping, discounts, and taxes */
  subtotal: Magento2Money;
  /** The invoice tax details */
  taxes?: Maybe<Array<Maybe<Magento2TaxItem>>>;
  /** The shipping amount for the invoice */
  total_shipping: Magento2Money;
  /** The amount of tax applied to the invoice */
  total_tax: Magento2Money;
};

export type Magento2IsConfigSettingEnabledOutput = {
  __typename?: 'IsConfigSettingEnabledOutput';
  /** Is config setting enabled */
  is_enabled?: Maybe<Scalars['Boolean']>;
};

export type Magento2IsEmailAvailableOutput = {
  __typename?: 'IsEmailAvailableOutput';
  /** Is email availabel value */
  is_email_available?: Maybe<Scalars['Boolean']>;
};

/** A list of options of the selected bundle product */
export type Magento2ItemSelectedBundleOption = {
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
  values?: Maybe<Array<Maybe<Magento2ItemSelectedBundleOptionValue>>>;
};

/** A list of values for the selected bundle product */
export type Magento2ItemSelectedBundleOptionValue = {
  __typename?: 'ItemSelectedBundleOptionValue';
  /**
   * The unique ID for a `ItemSelectedBundleOptionValue` object
   * @deprecated Use `uid` instead
   */
  id: Scalars['ID'];
  /** The price of the child bundle product */
  price: Magento2Money;
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
export type Magento2KeyValue = {
  __typename?: 'KeyValue';
  /** The name part of the name/value pair */
  name?: Maybe<Scalars['String']>;
  /** The value part of the name/value pair */
  value?: Maybe<Scalars['String']>;
};

export type Magento2KlarnaInput = {
  /** The authorization token must be provided to set any Klarna Payments method */
  authorization_token: Scalars['String'];
};

export type Magento2LayerFilter = {
  __typename?: 'LayerFilter';
  /**
   * Array of filter items.
   * @deprecated Use Aggregation.options instead.
   */
  filter_items?: Maybe<Array<Maybe<Magento2LayerFilterItemInterface>>>;
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

export type Magento2LayerFilterItem = Magento2LayerFilterItemInterface & {
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

export type Magento2LayerFilterItemInterface = {
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
export type Magento2MediaGalleryEntry = {
  __typename?: 'MediaGalleryEntry';
  /** Contains a ProductMediaGalleryEntriesContent object. */
  content?: Maybe<Magento2ProductMediaGalleryEntriesContent>;
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
  video_content?: Maybe<Magento2ProductMediaGalleryEntriesVideoContent>;
};

/** Contains basic information about a product image or video. */
export type Magento2MediaGalleryInterface = {
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
export type Magento2Money = {
  __typename?: 'Money';
  /** A three-letter currency code, such as USD or EUR */
  currency?: Maybe<Magento2CurrencyEnum>;
  /** A number expressing a monetary value */
  value?: Maybe<Scalars['Float']>;
};

/** Contains the customer's gift registry and any errors encountered */
export type Magento2MoveCartItemsToGiftRegistryOutput = Magento2GiftRegistryItemUserErrorInterface & Magento2GiftRegistryOutputInterface & {
  __typename?: 'MoveCartItemsToGiftRegistryOutput';
  /** The gift registry */
  gift_registry?: Maybe<Magento2GiftRegistry>;
  /** Indicates whether the attempt to move the cart items to the gift registry was successful */
  status: Scalars['Boolean'];
  /** An array of errors encountered while moving items from the cart to the gift registry */
  user_errors: Array<Maybe<Magento2GiftRegistryItemsUserError>>;
};

export type Magento2MoveProductsBetweenWishlistsOutput = {
  __typename?: 'MoveProductsBetweenWishlistsOutput';
  /** The destination wish list after receiving products move from the source wish list */
  destination_wishlist: Magento2Wishlist;
  /** The source wish list after moving products from it */
  source_wishlist: Magento2Wishlist;
  /** An array of errors encountered while moving products in a wish list */
  user_errors: Array<Maybe<Magento2WishListUserInputError>>;
};

export type Magento2Mutation = {
  __typename?: 'Mutation';
  addBundleProductsToCart?: Maybe<Magento2AddBundleProductsToCartOutput>;
  addConfigurableProductsToCart?: Maybe<Magento2AddConfigurableProductsToCartOutput>;
  addDownloadableProductsToCart?: Maybe<Magento2AddDownloadableProductsToCartOutput>;
  /** Add registrants to the specified gift registry */
  addGiftRegistryRegistrants?: Maybe<Magento2AddGiftRegistryRegistrantsOutput>;
  /** Add any type of product to the cart */
  addProductsToCart?: Maybe<Magento2AddProductsToCartOutput>;
  /** Add products to the specified compare list */
  addProductsToCompareList?: Maybe<Magento2CompareList>;
  /** Adds one or more products to the specified wish list. This mutation supports all product types */
  addProductsToWishlist?: Maybe<Magento2AddProductsToWishlistOutput>;
  /** Add a comment to an existing return */
  addReturnComment?: Maybe<Magento2AddReturnCommentOutput>;
  /** Add tracking information to the return */
  addReturnTracking?: Maybe<Magento2AddReturnTrackingOutput>;
  addSimpleProductsToCart?: Maybe<Magento2AddSimpleProductsToCartOutput>;
  addVirtualProductsToCart?: Maybe<Magento2AddVirtualProductsToCartOutput>;
  /** Add items in the specified wishlist to the customer's cart */
  addWishlistItemsToCart?: Maybe<Magento2AddWishlistItemsToCartOutput>;
  applyCouponToCart?: Maybe<Magento2ApplyCouponToCartOutput>;
  /** Apply a pre-defined gift card code to the specified cart. */
  applyGiftCardToCart?: Maybe<Magento2ApplyGiftCardToCartOutput>;
  /** Apply all available points, up to the cart total. Partial redemption is not available */
  applyRewardPointsToCart?: Maybe<Magento2ApplyRewardPointsToCartOutput>;
  /** Apply store credit to the specified cart. */
  applyStoreCreditToCart?: Maybe<Magento2ApplyStoreCreditToCartOutput>;
  /** Assign the specified compare list to the logged in customer */
  assignCompareListToCustomer?: Maybe<Magento2AssignCompareListToCustomerOutput>;
  /** Changes the password for the logged-in customer */
  changeCustomerPassword?: Maybe<Magento2Customer>;
  /** Send a 'Contact Us' email to the merchant. */
  contactUs?: Maybe<Magento2ContactUsOutput>;
  /** Copy products from one wish list to another */
  copyProductsBetweenWishlists?: Maybe<Magento2CopyProductsBetweenWishlistsOutput>;
  /** Creates Client Token for Braintree Javascript SDK initialization. */
  createBraintreeClientToken: Scalars['String'];
  /** Creates a new compare list. The compare list is saved for logged in customers */
  createCompareList?: Maybe<Magento2CompareList>;
  /** Create customer account */
  createCustomer?: Maybe<Magento2CustomerOutput>;
  /** Create customer address */
  createCustomerAddress?: Maybe<Magento2CustomerAddress>;
  /** Create customer account */
  createCustomerV2?: Maybe<Magento2CustomerOutput>;
  /** Creates an empty shopping cart for a guest or logged in user */
  createEmptyCart?: Maybe<Scalars['String']>;
  /** Create a gift registry on behalf of the customer */
  createGiftRegistry?: Maybe<Magento2CreateGiftRegistryOutput>;
  /** Creates a Klarna Payments Session. */
  createKlarnaPaymentsSession?: Maybe<Magento2CreateKlarnaPaymentsSessionOutput>;
  /** Initiates a transaction and receives a token. Use this mutation for Payflow Pro and Payments Pro payment methods */
  createPayflowProToken?: Maybe<Magento2CreatePayflowProTokenOutput>;
  /**
   * Initiates an Express Checkout transaction and receives a token. Use this
   * mutation for Express Checkout and Payments Standard payment methods.
   */
  createPaypalExpressToken?: Maybe<Magento2PaypalExpressTokenOutput>;
  /** Creates a product review for the specified SKU */
  createProductReview: Magento2CreateProductReviewOutput;
  /** Create a new wish list */
  createWishlist?: Maybe<Magento2CreateWishlistOutput>;
  /** Delete the specified compare list */
  deleteCompareList?: Maybe<Magento2DeleteCompareListOutput>;
  /** Delete customer address */
  deleteCustomerAddress?: Maybe<Scalars['Boolean']>;
  /** Delete a customer payment token */
  deletePaymentToken?: Maybe<Magento2DeletePaymentTokenOutput>;
  /** Delete the specified wish list filtered by the unique ID for a `Wishlist` object */
  deleteWishlist?: Maybe<Magento2DeleteWishlistOutput>;
  /** Retrieve the customer token */
  generateCustomerToken?: Maybe<Magento2CustomerToken>;
  /** Request a customer token so that an administrator can perform remote shopping assistance */
  generateCustomerTokenAsAdmin?: Maybe<Magento2GenerateCustomerTokenAsAdminOutput>;
  /** Handles payment response and saves payment in Quote. Use this mutations for Payflow Pro and Payments Pro payment methods. */
  handlePayflowProResponse?: Maybe<Magento2PayflowProResponseOutput>;
  /** Merges the source cart into the destination cart */
  mergeCarts: Magento2Cart;
  /** Moves all items from the cart to a gift registry */
  moveCartItemsToGiftRegistry?: Maybe<Magento2MoveCartItemsToGiftRegistryOutput>;
  /** Move products from one wish list to another */
  moveProductsBetweenWishlists?: Maybe<Magento2MoveProductsBetweenWishlistsOutput>;
  placeOrder?: Maybe<Magento2PlaceOrderOutput>;
  /** Redeem gift card for store credit. */
  redeemGiftCardBalanceAsStoreCredit?: Maybe<Magento2GiftCardAccount>;
  removeCouponFromCart?: Maybe<Magento2RemoveCouponFromCartOutput>;
  removeGiftCardFromCart?: Maybe<Magento2RemoveGiftCardFromCartOutput>;
  /** Delete the specified gift registry */
  removeGiftRegistry?: Maybe<Magento2RemoveGiftRegistryOutput>;
  /** Delete the specified items from a gift registry */
  removeGiftRegistryItems?: Maybe<Magento2RemoveGiftRegistryItemsOutput>;
  /** Removes registrants from a gift registry */
  removeGiftRegistryRegistrants?: Maybe<Magento2RemoveGiftRegistryRegistrantsOutput>;
  removeItemFromCart?: Maybe<Magento2RemoveItemFromCartOutput>;
  /** Remove products from the specified compare list */
  removeProductsFromCompareList?: Maybe<Magento2CompareList>;
  /** Removes one or more products from the specified wish list */
  removeProductsFromWishlist?: Maybe<Magento2RemoveProductsFromWishlistOutput>;
  /** Remove a tracked shipment from a return */
  removeReturnTracking?: Maybe<Magento2RemoveReturnTrackingOutput>;
  /** Cancel the application of reward points to the cart */
  removeRewardPointsFromCart?: Maybe<Magento2RemoveRewardPointsFromCartOutput>;
  /** Remove applied store credit from the specified cart. */
  removeStoreCreditFromCart?: Maybe<Magento2RemoveStoreCreditFromCartOutput>;
  /** Adds all products from a customer's previous order to the cart. */
  reorderItems?: Maybe<Magento2ReorderItemsOutput>;
  /** Request an email with a reset password token for the registered customer identified by the specified email. */
  requestPasswordResetEmail?: Maybe<Scalars['Boolean']>;
  /** Initiates a buyer's  request to return an item for replacement or refund */
  requestReturn?: Maybe<Magento2RequestReturnOutput>;
  /**
   * Reset a customer's password using the reset password token that the customer
   * received in an email after requesting it using requestPasswordResetEmail.
   */
  resetPassword?: Maybe<Scalars['Boolean']>;
  /** Revoke the customer token */
  revokeCustomerToken?: Maybe<Magento2RevokeCustomerTokenOutput>;
  /** Recommends Product by Sending Single/Multiple Email */
  sendEmailToFriend?: Maybe<Magento2SendEmailToFriendOutput>;
  setBillingAddressOnCart?: Maybe<Magento2SetBillingAddressOnCartOutput>;
  /** Set gift options like gift wrapping or gift message for the entire cart */
  setGiftOptionsOnCart?: Maybe<Magento2SetGiftOptionsOnCartOutput>;
  setGuestEmailOnCart?: Maybe<Magento2SetGuestEmailOnCartOutput>;
  /** @deprecated Should use setPaymentMethodOnCart and placeOrder mutations in single request. */
  setPaymentMethodAndPlaceOrder?: Maybe<Magento2PlaceOrderOutput>;
  setPaymentMethodOnCart?: Maybe<Magento2SetPaymentMethodOnCartOutput>;
  setShippingAddressesOnCart?: Maybe<Magento2SetShippingAddressesOnCartOutput>;
  setShippingMethodsOnCart?: Maybe<Magento2SetShippingMethodsOnCartOutput>;
  /** Send an email about the gift registry to a list of invitees */
  shareGiftRegistry?: Maybe<Magento2ShareGiftRegistryOutput>;
  /** Subscribes the specified email to a newsletter */
  subscribeEmailToNewsletter?: Maybe<Magento2SubscribeEmailToNewsletterOutput>;
  updateCartItems?: Maybe<Magento2UpdateCartItemsOutput>;
  /** Sends chat profile data to Engagement Cloud. */
  updateChatProfile?: Maybe<Scalars['Boolean']>;
  /** Deprecated. Use UpdateCustomerV2 instead. */
  updateCustomer?: Maybe<Magento2CustomerOutput>;
  /** Update customer address */
  updateCustomerAddress?: Maybe<Magento2CustomerAddress>;
  updateCustomerEmail?: Maybe<Magento2CustomerOutput>;
  /** Update the customer's personal information */
  updateCustomerV2?: Maybe<Magento2CustomerOutput>;
  /** Update the specified gift registry */
  updateGiftRegistry?: Maybe<Magento2UpdateGiftRegistryOutput>;
  /** Update the specified items in the gift registry */
  updateGiftRegistryItems?: Maybe<Magento2UpdateGiftRegistryItemsOutput>;
  /** Modify the properties of one or more gift registry registrants */
  updateGiftRegistryRegistrants?: Maybe<Magento2UpdateGiftRegistryRegistrantsOutput>;
  /** Updates one or more products in the specified wish list */
  updateProductsInWishlist?: Maybe<Magento2UpdateProductsInWishlistOutput>;
  /** Updates the email address of a quote. */
  updateQuoteEmail?: Maybe<Scalars['Boolean']>;
  /** Change the name and visibility of the specified wish list */
  updateWishlist?: Maybe<Magento2UpdateWishlistOutput>;
};


export type Magento2MutationAddBundleProductsToCartArgs = {
  input?: InputMaybe<Magento2AddBundleProductsToCartInput>;
};


export type Magento2MutationAddConfigurableProductsToCartArgs = {
  input?: InputMaybe<Magento2AddConfigurableProductsToCartInput>;
};


export type Magento2MutationAddDownloadableProductsToCartArgs = {
  input?: InputMaybe<Magento2AddDownloadableProductsToCartInput>;
};


export type Magento2MutationAddGiftRegistryRegistrantsArgs = {
  giftRegistryUid: Scalars['ID'];
  registrants: Array<Magento2AddGiftRegistryRegistrantInput>;
};


export type Magento2MutationAddProductsToCartArgs = {
  cartId: Scalars['String'];
  cartItems: Array<Magento2CartItemInput>;
};


export type Magento2MutationAddProductsToCompareListArgs = {
  input?: InputMaybe<Magento2AddProductsToCompareListInput>;
};


export type Magento2MutationAddProductsToWishlistArgs = {
  wishlistId: Scalars['ID'];
  wishlistItems: Array<Magento2WishlistItemInput>;
};


export type Magento2MutationAddReturnCommentArgs = {
  input: Magento2AddReturnCommentInput;
};


export type Magento2MutationAddReturnTrackingArgs = {
  input: Magento2AddReturnTrackingInput;
};


export type Magento2MutationAddSimpleProductsToCartArgs = {
  input?: InputMaybe<Magento2AddSimpleProductsToCartInput>;
};


export type Magento2MutationAddVirtualProductsToCartArgs = {
  input?: InputMaybe<Magento2AddVirtualProductsToCartInput>;
};


export type Magento2MutationAddWishlistItemsToCartArgs = {
  wishlistId: Scalars['ID'];
  wishlistItemIds?: InputMaybe<Array<Scalars['ID']>>;
};


export type Magento2MutationApplyCouponToCartArgs = {
  input?: InputMaybe<Magento2ApplyCouponToCartInput>;
};


export type Magento2MutationApplyGiftCardToCartArgs = {
  input?: InputMaybe<Magento2ApplyGiftCardToCartInput>;
};


export type Magento2MutationApplyRewardPointsToCartArgs = {
  cartId: Scalars['ID'];
};


export type Magento2MutationApplyStoreCreditToCartArgs = {
  input: Magento2ApplyStoreCreditToCartInput;
};


export type Magento2MutationAssignCompareListToCustomerArgs = {
  uid: Scalars['ID'];
};


export type Magento2MutationChangeCustomerPasswordArgs = {
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
};


export type Magento2MutationContactUsArgs = {
  input: Magento2ContactUsInput;
};


export type Magento2MutationCopyProductsBetweenWishlistsArgs = {
  destinationWishlistUid: Scalars['ID'];
  sourceWishlistUid: Scalars['ID'];
  wishlistItems: Array<Magento2WishlistItemCopyInput>;
};


export type Magento2MutationCreateCompareListArgs = {
  input?: InputMaybe<Magento2CreateCompareListInput>;
};


export type Magento2MutationCreateCustomerArgs = {
  input: Magento2CustomerInput;
};


export type Magento2MutationCreateCustomerAddressArgs = {
  input: Magento2CustomerAddressInput;
};


export type Magento2MutationCreateCustomerV2Args = {
  input: Magento2CustomerCreateInput;
};


export type Magento2MutationCreateEmptyCartArgs = {
  input?: InputMaybe<Magento2CreateEmptyCartInput>;
};


export type Magento2MutationCreateGiftRegistryArgs = {
  giftRegistry: Magento2CreateGiftRegistryInput;
};


export type Magento2MutationCreateKlarnaPaymentsSessionArgs = {
  input?: InputMaybe<Magento2CreateKlarnaPaymentsSessionInput>;
};


export type Magento2MutationCreatePayflowProTokenArgs = {
  input: Magento2PayflowProTokenInput;
};


export type Magento2MutationCreatePaypalExpressTokenArgs = {
  input: Magento2PaypalExpressTokenInput;
};


export type Magento2MutationCreateProductReviewArgs = {
  input: Magento2CreateProductReviewInput;
};


export type Magento2MutationCreateWishlistArgs = {
  input: Magento2CreateWishlistInput;
};


export type Magento2MutationDeleteCompareListArgs = {
  uid: Scalars['ID'];
};


export type Magento2MutationDeleteCustomerAddressArgs = {
  id: Scalars['Int'];
};


export type Magento2MutationDeletePaymentTokenArgs = {
  public_hash: Scalars['String'];
};


export type Magento2MutationDeleteWishlistArgs = {
  wishlistId: Scalars['ID'];
};


export type Magento2MutationGenerateCustomerTokenArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type Magento2MutationGenerateCustomerTokenAsAdminArgs = {
  input: Magento2GenerateCustomerTokenAsAdminInput;
};


export type Magento2MutationHandlePayflowProResponseArgs = {
  input: Magento2PayflowProResponseInput;
};


export type Magento2MutationMergeCartsArgs = {
  destination_cart_id?: InputMaybe<Scalars['String']>;
  source_cart_id: Scalars['String'];
};


export type Magento2MutationMoveCartItemsToGiftRegistryArgs = {
  cartUid: Scalars['ID'];
  giftRegistryUid: Scalars['ID'];
};


export type Magento2MutationMoveProductsBetweenWishlistsArgs = {
  destinationWishlistUid: Scalars['ID'];
  sourceWishlistUid: Scalars['ID'];
  wishlistItems: Array<Magento2WishlistItemMoveInput>;
};


export type Magento2MutationPlaceOrderArgs = {
  input?: InputMaybe<Magento2PlaceOrderInput>;
};


export type Magento2MutationRedeemGiftCardBalanceAsStoreCreditArgs = {
  input: Magento2GiftCardAccountInput;
};


export type Magento2MutationRemoveCouponFromCartArgs = {
  input?: InputMaybe<Magento2RemoveCouponFromCartInput>;
};


export type Magento2MutationRemoveGiftCardFromCartArgs = {
  input?: InputMaybe<Magento2RemoveGiftCardFromCartInput>;
};


export type Magento2MutationRemoveGiftRegistryArgs = {
  giftRegistryUid: Scalars['ID'];
};


export type Magento2MutationRemoveGiftRegistryItemsArgs = {
  giftRegistryUid: Scalars['ID'];
  itemsUid: Array<Scalars['ID']>;
};


export type Magento2MutationRemoveGiftRegistryRegistrantsArgs = {
  giftRegistryUid: Scalars['ID'];
  registrantsUid: Array<Scalars['ID']>;
};


export type Magento2MutationRemoveItemFromCartArgs = {
  input?: InputMaybe<Magento2RemoveItemFromCartInput>;
};


export type Magento2MutationRemoveProductsFromCompareListArgs = {
  input?: InputMaybe<Magento2RemoveProductsFromCompareListInput>;
};


export type Magento2MutationRemoveProductsFromWishlistArgs = {
  wishlistId: Scalars['ID'];
  wishlistItemsIds: Array<Scalars['ID']>;
};


export type Magento2MutationRemoveReturnTrackingArgs = {
  input: Magento2RemoveReturnTrackingInput;
};


export type Magento2MutationRemoveRewardPointsFromCartArgs = {
  cartId: Scalars['ID'];
};


export type Magento2MutationRemoveStoreCreditFromCartArgs = {
  input: Magento2RemoveStoreCreditFromCartInput;
};


export type Magento2MutationReorderItemsArgs = {
  orderNumber: Scalars['String'];
};


export type Magento2MutationRequestPasswordResetEmailArgs = {
  email: Scalars['String'];
};


export type Magento2MutationRequestReturnArgs = {
  input: Magento2RequestReturnInput;
};


export type Magento2MutationResetPasswordArgs = {
  email: Scalars['String'];
  newPassword: Scalars['String'];
  resetPasswordToken: Scalars['String'];
};


export type Magento2MutationSendEmailToFriendArgs = {
  input?: InputMaybe<Magento2SendEmailToFriendInput>;
};


export type Magento2MutationSetBillingAddressOnCartArgs = {
  input?: InputMaybe<Magento2SetBillingAddressOnCartInput>;
};


export type Magento2MutationSetGiftOptionsOnCartArgs = {
  input?: InputMaybe<Magento2SetGiftOptionsOnCartInput>;
};


export type Magento2MutationSetGuestEmailOnCartArgs = {
  input?: InputMaybe<Magento2SetGuestEmailOnCartInput>;
};


export type Magento2MutationSetPaymentMethodAndPlaceOrderArgs = {
  input?: InputMaybe<Magento2SetPaymentMethodAndPlaceOrderInput>;
};


export type Magento2MutationSetPaymentMethodOnCartArgs = {
  input?: InputMaybe<Magento2SetPaymentMethodOnCartInput>;
};


export type Magento2MutationSetShippingAddressesOnCartArgs = {
  input?: InputMaybe<Magento2SetShippingAddressesOnCartInput>;
};


export type Magento2MutationSetShippingMethodsOnCartArgs = {
  input?: InputMaybe<Magento2SetShippingMethodsOnCartInput>;
};


export type Magento2MutationShareGiftRegistryArgs = {
  giftRegistryUid: Scalars['ID'];
  invitees: Array<Magento2ShareGiftRegistryInviteeInput>;
  sender: Magento2ShareGiftRegistrySenderInput;
};


export type Magento2MutationSubscribeEmailToNewsletterArgs = {
  email: Scalars['String'];
};


export type Magento2MutationUpdateCartItemsArgs = {
  input?: InputMaybe<Magento2UpdateCartItemsInput>;
};


export type Magento2MutationUpdateChatProfileArgs = {
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  profileId: Scalars['String'];
};


export type Magento2MutationUpdateCustomerArgs = {
  input: Magento2CustomerInput;
};


export type Magento2MutationUpdateCustomerAddressArgs = {
  id: Scalars['Int'];
  input?: InputMaybe<Magento2CustomerAddressInput>;
};


export type Magento2MutationUpdateCustomerEmailArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type Magento2MutationUpdateCustomerV2Args = {
  input: Magento2CustomerUpdateInput;
};


export type Magento2MutationUpdateGiftRegistryArgs = {
  giftRegistry: Magento2UpdateGiftRegistryInput;
  giftRegistryUid: Scalars['ID'];
};


export type Magento2MutationUpdateGiftRegistryItemsArgs = {
  giftRegistryUid: Scalars['ID'];
  items: Array<Magento2UpdateGiftRegistryItemInput>;
};


export type Magento2MutationUpdateGiftRegistryRegistrantsArgs = {
  giftRegistryUid: Scalars['ID'];
  registrants: Array<Magento2UpdateGiftRegistryRegistrantInput>;
};


export type Magento2MutationUpdateProductsInWishlistArgs = {
  wishlistId: Scalars['ID'];
  wishlistItems: Array<Magento2WishlistItemUpdateInput>;
};


export type Magento2MutationUpdateQuoteEmailArgs = {
  cartId: Scalars['String'];
  email: Scalars['String'];
};


export type Magento2MutationUpdateWishlistArgs = {
  name?: InputMaybe<Scalars['String']>;
  visibility?: InputMaybe<Magento2WishlistVisibilityEnum>;
  wishlistId: Scalars['ID'];
};

export enum Magento2ObjectDataTypeEnum {
  Boolean = 'BOOLEAN',
  Complex = 'COMPLEX',
  Float = 'FLOAT',
  Int = 'INT',
  String = 'STRING'
}

/** Contains details about the requested order */
export type Magento2Order = {
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
export type Magento2OrderAddress = {
  __typename?: 'OrderAddress';
  /** The city or town */
  city: Scalars['String'];
  /** The customer's company */
  company?: Maybe<Scalars['String']>;
  /** The customer's country */
  country_code?: Maybe<Magento2CountryCodeEnum>;
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

export type Magento2OrderItem = Magento2OrderItemInterface & {
  __typename?: 'OrderItem';
  /** The final discount information for the product */
  discounts?: Maybe<Array<Maybe<Magento2Discount>>>;
  /** Indicates whether the order item is eligible is eligible to be in a return request */
  eligible_for_return?: Maybe<Scalars['Boolean']>;
  /** The entered option for the base product, such as a logo or image */
  entered_options?: Maybe<Array<Maybe<Magento2OrderItemOption>>>;
  /** The selected gift wrapping for the order item */
  gift_wrapping?: Maybe<Magento2GiftWrapping>;
  /** The unique ID for a `OrderItemInterface` object */
  id: Scalars['ID'];
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price of the base product, including selected options */
  product_sale_price: Magento2Money;
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
  selected_options?: Maybe<Array<Maybe<Magento2OrderItemOption>>>;
  /** The status of the order item */
  status?: Maybe<Scalars['String']>;
};

/** Order item details */
export type Magento2OrderItemInterface = {
  /** The final discount information for the product */
  discounts?: Maybe<Array<Maybe<Magento2Discount>>>;
  /** Indicates whether the order item is eligible is eligible to be in a return request */
  eligible_for_return?: Maybe<Scalars['Boolean']>;
  /** The entered option for the base product, such as a logo or image */
  entered_options?: Maybe<Array<Maybe<Magento2OrderItemOption>>>;
  /** The selected gift wrapping for the order item */
  gift_wrapping?: Maybe<Magento2GiftWrapping>;
  /** The unique ID for a `OrderItemInterface` object */
  id: Scalars['ID'];
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price of the base product, including selected options */
  product_sale_price: Magento2Money;
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
  selected_options?: Maybe<Array<Maybe<Magento2OrderItemOption>>>;
  /** The status of the order item */
  status?: Maybe<Scalars['String']>;
};

/** Represents order item options like selected or entered */
export type Magento2OrderItemOption = {
  __typename?: 'OrderItemOption';
  /** The name of the option */
  label: Scalars['String'];
  /** The value of the option */
  value: Scalars['String'];
};

/** Contains details about the payment method used to pay for the order */
export type Magento2OrderPaymentMethod = {
  __typename?: 'OrderPaymentMethod';
  /** Additional data per payment method type */
  additional_data?: Maybe<Array<Maybe<Magento2KeyValue>>>;
  /** The label that describes the payment method */
  name: Scalars['String'];
  /** The payment method code that indicates how the order was paid for */
  type: Scalars['String'];
};

/** Order shipment details */
export type Magento2OrderShipment = {
  __typename?: 'OrderShipment';
  /** Comments added to the shipment */
  comments?: Maybe<Array<Maybe<Magento2SalesCommentItem>>>;
  /** The unique ID for a `OrderShipment` object */
  id: Scalars['ID'];
  /** Contains items included in the shipment */
  items?: Maybe<Array<Maybe<Magento2ShipmentItemInterface>>>;
  /** The sequential credit shipment number */
  number: Scalars['String'];
  /** Contains shipment tracking details */
  tracking?: Maybe<Array<Maybe<Magento2ShipmentTracking>>>;
};

/** Contains details about the sales total amounts used to calculate the final price */
export type Magento2OrderTotal = {
  __typename?: 'OrderTotal';
  /** The final base grand total amount in the base currency */
  base_grand_total: Magento2Money;
  /** The applied discounts to the order */
  discounts?: Maybe<Array<Maybe<Magento2Discount>>>;
  /** The final total amount, including shipping, discounts, and taxes */
  grand_total: Magento2Money;
  /** Contains details about the shipping and handling costs for the order */
  shipping_handling?: Maybe<Magento2ShippingHandling>;
  /** The subtotal of the order, excluding shipping, discounts, and taxes */
  subtotal: Magento2Money;
  /** The order tax details */
  taxes?: Maybe<Array<Maybe<Magento2TaxItem>>>;
  /** The gift card balance applied to the order */
  total_giftcard?: Maybe<Magento2Money>;
  /** The shipping amount for the order */
  total_shipping: Magento2Money;
  /** The amount of tax applied to the order */
  total_tax: Magento2Money;
};

/** Required input for Payflow Express Checkout payments */
export type Magento2PayflowExpressInput = {
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
export type Magento2PayflowLinkInput = {
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
export enum Magento2PayflowLinkMode {
  Live = 'LIVE',
  Test = 'TEST'
}

/**
 * Contains information used to generate PayPal iframe for transaction. Applies to
 * Payflow Link and Payments Advanced payment methods.
 */
export type Magento2PayflowLinkToken = {
  __typename?: 'PayflowLinkToken';
  /** Mode for Payflow transaction */
  mode?: Maybe<Magento2PayflowLinkMode>;
  /** PayPal URL used for requesting Payflow form */
  paypal_url?: Maybe<Scalars['String']>;
  /** Secure token generated by PayPal */
  secure_token?: Maybe<Scalars['String']>;
  /** Secure token ID generated by PayPal */
  secure_token_id?: Maybe<Scalars['String']>;
};

/** Input required to fetch payment token information for Payflow Link and Payments Advanced payment methods. */
export type Magento2PayflowLinkTokenInput = {
  /** The unique ID that identifies the customer's cart */
  cart_id: Scalars['String'];
};

/** Required input for Payflow Pro and Payments Pro payment methods. */
export type Magento2PayflowProInput = {
  /** Required input for credit card related information */
  cc_details: Magento2CreditCardDetailsInput;
  /**
   * States whether details about the customer's credit/debit card should be
   * tokenized for later usage. Required only if Vault is enabled for PayPal
   * Payflow Pro payment integration.
   */
  is_active_payment_token_enabler?: InputMaybe<Scalars['Boolean']>;
};

/** Input required to complete payment. Applies to Payflow Pro and Payments Pro payment methods. */
export type Magento2PayflowProResponseInput = {
  cart_id: Scalars['String'];
  paypal_payload: Scalars['String'];
};

export type Magento2PayflowProResponseOutput = {
  __typename?: 'PayflowProResponseOutput';
  cart: Magento2Cart;
};

/** Contains the secure information used to authorize transaction. Applies to Payflow Pro and Payments Pro payment methods. */
export type Magento2PayflowProToken = {
  __typename?: 'PayflowProToken';
  response_message: Scalars['String'];
  result: Scalars['Int'];
  result_code: Scalars['Int'];
  secure_token: Scalars['String'];
  secure_token_id: Scalars['String'];
};

/** Input required to fetch payment token information for Payflow Pro and Payments Pro payment methods. */
export type Magento2PayflowProTokenInput = {
  /** The unique ID that identifies the customer's cart */
  cart_id: Scalars['String'];
  /** A set of relative URLs that PayPal uses for callback. */
  urls: Magento2PayflowProUrlInput;
};

/**
 * A set of relative URLs that PayPal will use in response to various actions
 * during the authorization process. Magento prepends the base URL to this value to
 * create a full URL. For example, if the full URL is
 * https://www.example.com/path/to/page.html, the relative URL is
 * path/to/page.html. Use this input for Payflow Pro and Payment Pro payment methods.
 */
export type Magento2PayflowProUrlInput = {
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

export type Magento2PaymentMethodInput = {
  braintree?: InputMaybe<Magento2BraintreeInput>;
  braintree_cc_vault?: InputMaybe<Magento2BraintreeCcVaultInput>;
  /** Payment method code */
  code: Scalars['String'];
  /** Required input for PayPal Hosted pro payments */
  hosted_pro?: InputMaybe<Magento2HostedProInput>;
  klarna?: InputMaybe<Magento2KlarnaInput>;
  /** Required input for Payflow Express Checkout payments */
  payflow_express?: InputMaybe<Magento2PayflowExpressInput>;
  /** Required input for PayPal Payflow Link and Payments Advanced payments */
  payflow_link?: InputMaybe<Magento2PayflowLinkInput>;
  /** Required input type for PayPal Payflow Pro and Payment Pro payments */
  payflowpro?: InputMaybe<Magento2PayflowProInput>;
  /** Required input type for PayPal Payflow Pro vault payments */
  payflowpro_cc_vault?: InputMaybe<Magento2VaultTokenInput>;
  /** Required input for Express Checkout and Payments Standard payments */
  paypal_express?: InputMaybe<Magento2PaypalExpressInput>;
  /** Purchase order number */
  purchase_order_number?: InputMaybe<Scalars['String']>;
};

/** The stored payment method available to the customer */
export type Magento2PaymentToken = {
  __typename?: 'PaymentToken';
  /** Stored account details */
  details?: Maybe<Scalars['String']>;
  /** The payment method code associated with the token */
  payment_method_code: Scalars['String'];
  /** The public hash of the token */
  public_hash: Scalars['String'];
  type: Magento2PaymentTokenTypeEnum;
};

/** The list of available payment token types */
export enum Magento2PaymentTokenTypeEnum {
  Account = 'account',
  Card = 'card'
}

/** Required input for Express Checkout and Payments Standard payments */
export type Magento2PaypalExpressInput = {
  /** The unique ID of the PayPal user */
  payer_id: Scalars['String'];
  /** The token returned by the createPaypalExpressToken mutation */
  token: Scalars['String'];
};

/** Deprecated: use type `PaypalExpressTokenOutput` instead */
export type Magento2PaypalExpressToken = {
  __typename?: 'PaypalExpressToken';
  /**
   * A set of URLs that allow the buyer to authorize payment and adjust checkout details
   * @deprecated Use field `paypal_urls` of type `PaypalExpressTokenOutput` instead
   */
  paypal_urls?: Maybe<Magento2PaypalExpressUrlList>;
  /**
   * The token returned by PayPal
   * @deprecated Use field `token` of type `PaypalExpressTokenOutput` instead
   */
  token?: Maybe<Scalars['String']>;
};

/** Defines the attributes required to receive a payment token for Express Checkout and Payments Standard payment methods. */
export type Magento2PaypalExpressTokenInput = {
  /** The unique ID that identifies the customer's cart */
  cart_id: Scalars['String'];
  /** Payment method code */
  code: Scalars['String'];
  /** Indicates whether the buyer selected the quick checkout button. The default value is false */
  express_button?: InputMaybe<Scalars['Boolean']>;
  /** A set of relative URLs that PayPal uses in response to various actions during the authorization process */
  urls: Magento2PaypalExpressUrlsInput;
  /** Indicates whether the buyer clicked the PayPal credit button. The default value is false */
  use_paypal_credit?: InputMaybe<Scalars['Boolean']>;
};

/**
 * Contains the token returned by PayPal and a set of URLs that allow the buyer to
 * authorize payment and adjust checkout details. Applies to Express Checkout and
 * Payments Standard payment methods.
 */
export type Magento2PaypalExpressTokenOutput = {
  __typename?: 'PaypalExpressTokenOutput';
  /** A set of URLs that allow the buyer to authorize payment and adjust checkout details */
  paypal_urls?: Maybe<Magento2PaypalExpressUrlList>;
  /** The token returned by PayPal */
  token?: Maybe<Scalars['String']>;
};

/**
 * A set of URLs that allow the buyer to authorize payment and adjust checkout
 * details for Express Checkout and Payments Standard transactions.
 */
export type Magento2PaypalExpressUrlList = {
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
export type Magento2PaypalExpressUrlsInput = {
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
export type Magento2PhysicalProductInterface = {
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']>;
};

/** Defines Pickup Location information. */
export type Magento2PickupLocation = {
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
export type Magento2PickupLocationFilterInput = {
  /** Filter by city. */
  city?: InputMaybe<Magento2FilterTypeInput>;
  /** Filter by country. */
  country_id?: InputMaybe<Magento2FilterTypeInput>;
  /** Filter by pickup location name. */
  name?: InputMaybe<Magento2FilterTypeInput>;
  /** Filter by pickup location code. */
  pickup_location_code?: InputMaybe<Magento2FilterTypeInput>;
  /** Filter by postcode. */
  postcode?: InputMaybe<Magento2FilterTypeInput>;
  /** Filter by region. */
  region?: InputMaybe<Magento2FilterTypeInput>;
  /** Filter by region id. */
  region_id?: InputMaybe<Magento2FilterTypeInput>;
  /** Filter by street. */
  street?: InputMaybe<Magento2FilterTypeInput>;
};

/**
 * PickupLocationSortInput specifies attribute to use for sorting search results
 * and indicates whether the results are sorted in ascending or descending order.
 */
export type Magento2PickupLocationSortInput = {
  /** City where pickup location is placed. */
  city?: InputMaybe<Magento2SortEnum>;
  /** Name of the contact person. */
  contact_name?: InputMaybe<Magento2SortEnum>;
  /** Id of the country in two letters. */
  country_id?: InputMaybe<Magento2SortEnum>;
  /** Description of the pickup location. */
  description?: InputMaybe<Magento2SortEnum>;
  /**
   * Distance to the address, requested by distance filter. Applicable only with
   * distance filter. If distance sort order is present, all other sort orders will be ignored.
   */
  distance?: InputMaybe<Magento2SortEnum>;
  /** Contact email of the pickup location. */
  email?: InputMaybe<Magento2SortEnum>;
  /** Contact fax of the pickup location. */
  fax?: InputMaybe<Magento2SortEnum>;
  /** Geographic latitude where pickup location is placed. */
  latitude?: InputMaybe<Magento2SortEnum>;
  /** Geographic longitude where pickup location is placed. */
  longitude?: InputMaybe<Magento2SortEnum>;
  /** The pickup location name. Customer use this to identify the pickup location. */
  name?: InputMaybe<Magento2SortEnum>;
  /** Contact phone number of the pickup location. */
  phone?: InputMaybe<Magento2SortEnum>;
  /** A code assigned to pickup location to identify the source. */
  pickup_location_code?: InputMaybe<Magento2SortEnum>;
  /** Postcode where pickup location is placed. */
  postcode?: InputMaybe<Magento2SortEnum>;
  /** Name of the region. */
  region?: InputMaybe<Magento2SortEnum>;
  /** Id of the region. */
  region_id?: InputMaybe<Magento2SortEnum>;
  /** Street where pickup location is placed. */
  street?: InputMaybe<Magento2SortEnum>;
};

/** Top level object returned in a pickup locations search. */
export type Magento2PickupLocations = {
  __typename?: 'PickupLocations';
  /** An array of pickup locations that match the specific search request. */
  items?: Maybe<Array<Maybe<Magento2PickupLocation>>>;
  /** An object that includes the page_info and currentPage values specified in the query. */
  page_info?: Maybe<Magento2SearchResultPageInfo>;
  /** The number of products returned. */
  total_count?: Maybe<Scalars['Int']>;
};

export type Magento2PlaceOrderInput = {
  cart_id: Scalars['String'];
};

export type Magento2PlaceOrderOutput = {
  __typename?: 'PlaceOrderOutput';
  order: Magento2Order;
};

/**
 * Price is deprecated, replaced by ProductPrice. The Price object defines the
 * price of a product as well as any tax-related adjustments.
 */
export type Magento2Price = {
  __typename?: 'Price';
  /**
   * An array that provides information about tax, weee, or weee_tax adjustments.
   * @deprecated Price is deprecated, use ProductPrice.
   */
  adjustments?: Maybe<Array<Maybe<Magento2PriceAdjustment>>>;
  /**
   * The price of a product plus a three-letter currency code.
   * @deprecated Price is deprecated, use ProductPrice.
   */
  amount?: Maybe<Magento2Money>;
};

/**
 * PriceAdjustment is deprecated. Taxes will be included or excluded in the price.
 * The PricedAdjustment object defines the amount of money to apply as an
 * adjustment, the type of adjustment to apply, and whether the item is included or
 * excluded from the adjustment.
 */
export type Magento2PriceAdjustment = {
  __typename?: 'PriceAdjustment';
  /** The amount of the price adjustment and its currency code. */
  amount?: Maybe<Magento2Money>;
  /**
   * Indicates whether the adjustment involves tax, weee, or weee_tax.
   * @deprecated PriceAdjustment is deprecated.
   */
  code?: Maybe<Magento2PriceAdjustmentCodesEnum>;
  /**
   * Indicates whether the entity described by the code attribute is included or excluded from the adjustment.
   * @deprecated PriceAdjustment is deprecated.
   */
  description?: Maybe<Magento2PriceAdjustmentDescriptionEnum>;
};

/** PriceAdjustment.code is deprecated. This enumeration contains values defined in modules other than the Catalog module. */
export enum Magento2PriceAdjustmentCodesEnum {
  Tax = 'TAX',
  Weee = 'WEEE',
  WeeeTax = 'WEEE_TAX'
}

/** PriceAdjustmentDescriptionEnum is deprecated. This enumeration states whether a price adjustment is included or excluded. */
export enum Magento2PriceAdjustmentDescriptionEnum {
  Excluded = 'EXCLUDED',
  Included = 'INCLUDED'
}

/** Price range for a product. If the product has a single price, the minimum and maximum price will be the same. */
export type Magento2PriceRange = {
  __typename?: 'PriceRange';
  /** The highest possible price for the product. */
  maximum_price?: Maybe<Magento2ProductPrice>;
  /** The lowest possible price for the product. */
  minimum_price: Magento2ProductPrice;
};

/** This enumeration the price type. */
export enum Magento2PriceTypeEnum {
  Dynamic = 'DYNAMIC',
  Fixed = 'FIXED',
  Percent = 'PERCENT'
}

/** This enumeration defines whether a bundle product's price is displayed as the lowest possible value or as a range. */
export enum Magento2PriceViewEnum {
  AsLowAs = 'AS_LOW_AS',
  PriceRange = 'PRICE_RANGE'
}

export type Magento2ProductAttribute = {
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
export type Magento2ProductAttributeFilterInput = {
  /** Deprecated: use `category_uid` to filter product by category id. */
  category_id?: InputMaybe<Magento2FilterEqualTypeInput>;
  /** Filter product by the unique ID for a `CategoryInterface` object. */
  category_uid?: InputMaybe<Magento2FilterEqualTypeInput>;
  /** Attribute label: Description */
  description?: InputMaybe<Magento2FilterMatchTypeInput>;
  /** Attribute label: Color */
  fashion_color?: InputMaybe<Magento2FilterEqualTypeInput>;
  /** Attribute label: Material */
  fashion_material?: InputMaybe<Magento2FilterEqualTypeInput>;
  /** Attribute label: Size */
  fashion_size?: InputMaybe<Magento2FilterEqualTypeInput>;
  /** Attribute label: Style */
  fashion_style?: InputMaybe<Magento2FilterEqualTypeInput>;
  /** Attribute label: Format */
  format?: InputMaybe<Magento2FilterEqualTypeInput>;
  /** Attribute label: Has Video */
  has_video?: InputMaybe<Magento2FilterEqualTypeInput>;
  /** Attribute label: Product Name */
  name?: InputMaybe<Magento2FilterMatchTypeInput>;
  /** Attribute label: Price */
  price?: InputMaybe<Magento2FilterRangeTypeInput>;
  /** Attribute label: Short Description */
  short_description?: InputMaybe<Magento2FilterMatchTypeInput>;
  /** Attribute label: SKU */
  sku?: InputMaybe<Magento2FilterEqualTypeInput>;
  /** The part of the URL that identifies the product */
  url_key?: InputMaybe<Magento2FilterEqualTypeInput>;
};

export type Magento2ProductAttributeMetadata = Magento2AttributeMetadataInterface & {
  __typename?: 'ProductAttributeMetadata';
  /** An array of attribute labels defined for the current store. */
  attribute_labels?: Maybe<Array<Maybe<Magento2StoreLabels>>>;
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  code?: Maybe<Scalars['String']>;
  /** The data type of the attribute. */
  data_type?: Maybe<Magento2ObjectDataTypeEnum>;
  /** The type of entity that defines the attribute. */
  entity_type?: Maybe<Magento2AttributeEntityTypeEnum>;
  /** Indicates whether the attribute is a system attribute. */
  is_system?: Maybe<Scalars['Boolean']>;
  /** The label assigned to the attribute. */
  label?: Maybe<Scalars['String']>;
  /** The relative position of the attribute. */
  sort_order?: Maybe<Scalars['Int']>;
  /** Frontend UI properties of the attribute. */
  ui_input?: Maybe<Magento2UiInputTypeInterface>;
  /** The unique ID of an attribute. */
  uid?: Maybe<Scalars['ID']>;
  /** Places in the store front where the attribute is used. */
  used_in_components?: Maybe<Array<Maybe<Magento2CustomAttributesListsEnum>>>;
};

/**
 * ProductAttributeSortInput specifies the attribute to use for sorting search
 * results and indicates whether the results are sorted in ascending or descending
 * order. It's possible to sort products using searchable attributes with enabled
 * 'Use in Filter Options' option
 */
export type Magento2ProductAttributeSortInput = {
  /** Attribute label: Product Name */
  name?: InputMaybe<Magento2SortEnum>;
  /** Sort by the position assigned to each product. */
  position?: InputMaybe<Magento2SortEnum>;
  /** Attribute label: Price */
  price?: InputMaybe<Magento2SortEnum>;
  /** Sort by the search relevance score (default). */
  relevance?: InputMaybe<Magento2SortEnum>;
};

/** A discount applied to a product price. */
export type Magento2ProductDiscount = {
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
export type Magento2ProductFilterInput = {
  /** Category ID the product belongs to. */
  category_id?: InputMaybe<Magento2FilterTypeInput>;
  /** The product's country of origin. */
  country_of_manufacture?: InputMaybe<Magento2FilterTypeInput>;
  /** Timestamp indicating when the product was created. */
  created_at?: InputMaybe<Magento2FilterTypeInput>;
  /** The name of a custom layout. */
  custom_layout?: InputMaybe<Magento2FilterTypeInput>;
  /** XML code that is applied as a layout update to the product page. */
  custom_layout_update?: InputMaybe<Magento2FilterTypeInput>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: InputMaybe<Magento2FilterTypeInput>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: InputMaybe<Magento2FilterTypeInput>;
  /** Indicates whether additional attributes have been created for the product. */
  has_options?: InputMaybe<Magento2FilterTypeInput>;
  /** The relative path to the main image on the product page. */
  image?: InputMaybe<Magento2FilterTypeInput>;
  /** The label assigned to a product image. */
  image_label?: InputMaybe<Magento2FilterTypeInput>;
  /** Indicates whether the product can be returned */
  is_returnable?: InputMaybe<Magento2FilterTypeInput>;
  /** A number representing the product's manufacturer. */
  manufacturer?: InputMaybe<Magento2FilterTypeInput>;
  /** The numeric maximal price of the product. Do not include the currency code. */
  max_price?: InputMaybe<Magento2FilterTypeInput>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: InputMaybe<Magento2FilterTypeInput>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: InputMaybe<Magento2FilterTypeInput>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: InputMaybe<Magento2FilterTypeInput>;
  /** The numeric minimal price of the product. Do not include the currency code. */
  min_price?: InputMaybe<Magento2FilterTypeInput>;
  /** The product name. Customers use this name to identify the product. */
  name?: InputMaybe<Magento2FilterTypeInput>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  news_from_date?: InputMaybe<Magento2FilterTypeInput>;
  /** The end date for new product listings. */
  news_to_date?: InputMaybe<Magento2FilterTypeInput>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: InputMaybe<Magento2FilterTypeInput>;
  /** The keyword required to perform a logical OR comparison. */
  or?: InputMaybe<Magento2ProductFilterInput>;
  /** The price of an item. */
  price?: InputMaybe<Magento2FilterTypeInput>;
  /** Indicates whether the product has required options. */
  required_options?: InputMaybe<Magento2FilterTypeInput>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: InputMaybe<Magento2FilterTypeInput>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: InputMaybe<Magento2FilterTypeInput>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: InputMaybe<Magento2FilterTypeInput>;
  /** The label assigned to a product's small image. */
  small_image_label?: InputMaybe<Magento2FilterTypeInput>;
  /** The beginning date that a product has a special price. */
  special_from_date?: InputMaybe<Magento2FilterTypeInput>;
  /** The discounted price of the product. Do not include the currency code. */
  special_price?: InputMaybe<Magento2FilterTypeInput>;
  /** The end date that a product has a special price. */
  special_to_date?: InputMaybe<Magento2FilterTypeInput>;
  /** The file name of a swatch image */
  swatch_image?: InputMaybe<Magento2FilterTypeInput>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: InputMaybe<Magento2FilterTypeInput>;
  /** The label assigned to a product's thumbnail image. */
  thumbnail_label?: InputMaybe<Magento2FilterTypeInput>;
  /** The price when tier pricing is in effect and the items purchased threshold has been reached. */
  tier_price?: InputMaybe<Magento2FilterTypeInput>;
  /** Timestamp indicating when the product was updated. */
  updated_at?: InputMaybe<Magento2FilterTypeInput>;
  /** The part of the URL that identifies the product */
  url_key?: InputMaybe<Magento2FilterTypeInput>;
  url_path?: InputMaybe<Magento2FilterTypeInput>;
  /** The weight of the item, in units defined by the store. */
  weight?: InputMaybe<Magento2FilterTypeInput>;
};

/** Product image information. Contains the image URL and label. */
export type Magento2ProductImage = Magento2MediaGalleryInterface & {
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
export type Magento2ProductInfoInput = {
  /** Product SKU. */
  sku: Scalars['String'];
};

/**
 * The ProductInterface contains attributes that are common to all types of
 * products. Note that descriptions may not be available for custom and EAV attributes.
 */
export type Magento2ProductInterface = {
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
  categories?: Maybe<Array<Maybe<Magento2CategoryInterface>>>;
  color?: Maybe<Scalars['Int']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<Magento2ProductInterface>>>;
  /** List of product custom attributes details. */
  custom_attributes: Array<Maybe<Magento2CustomAttribute>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<Magento2ComplexTextValue>;
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
  image?: Maybe<Magento2ProductImage>;
  /** Indicates whether the product can be returned */
  is_returnable?: Maybe<Scalars['String']>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']>;
  /** An array of Media Gallery objects. */
  media_gallery?: Maybe<Array<Maybe<Magento2MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use product's `media_gallery` instead
   */
  media_gallery_entries?: Maybe<Array<Maybe<Magento2MediaGalleryEntry>>>;
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
  price?: Maybe<Magento2ProductPrices>;
  /** A PriceRange object, indicating the range of prices for the product */
  price_range: Magento2PriceRange;
  /** An array of TierPrice objects. */
  price_tiers?: Maybe<Array<Maybe<Magento2TierPrice>>>;
  /** An array of ProductLinks objects. */
  product_links?: Maybe<Array<Maybe<Magento2ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /** Related Products */
  related_products?: Maybe<Array<Maybe<Magento2ProductInterface>>>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: Magento2ProductReviews;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<Magento2ComplexTextValue>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<Magento2ProductImage>;
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
  stock_status?: Maybe<Magento2ProductStockStatus>;
  /** The file name of a swatch image */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<Magento2ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<Magento2ProductTierPrices>>>;
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
  upsell_products?: Maybe<Array<Maybe<Magento2ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<Magento2UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  video_file?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Magento2Website>>>;
};


/**
 * The ProductInterface contains attributes that are common to all types of
 * products. Note that descriptions may not be available for custom and EAV attributes.
 */
export type Magento2ProductInterfaceReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

/** ProductLinks is an implementation of ProductLinksInterface. */
export type Magento2ProductLinks = Magento2ProductLinksInterface & {
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
export type Magento2ProductLinksInterface = {
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
export type Magento2ProductMediaGalleryEntriesContent = {
  __typename?: 'ProductMediaGalleryEntriesContent';
  /** The image in base64 format. */
  base64_encoded_data?: Maybe<Scalars['String']>;
  /** The file name of the image. */
  name?: Maybe<Scalars['String']>;
  /** The MIME type of the file, such as image/png. */
  type?: Maybe<Scalars['String']>;
};

/** ProductMediaGalleryEntriesVideoContent contains a link to a video file and basic information about the video. */
export type Magento2ProductMediaGalleryEntriesVideoContent = {
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
export type Magento2ProductPrice = {
  __typename?: 'ProductPrice';
  /** The price discount. Represents the difference between the regular and final price. */
  discount?: Maybe<Magento2ProductDiscount>;
  /** The final price of the product after discounts applied. */
  final_price: Magento2Money;
  /** The multiple FPTs that can be applied to a product price. */
  fixed_product_taxes?: Maybe<Array<Maybe<Magento2FixedProductTax>>>;
  /** The regular price of the product. */
  regular_price: Magento2Money;
};

/**
 * ProductPrices is deprecated, replaced by PriceRange. The ProductPrices object
 * contains the regular price of an item, as well as its minimum and maximum
 * prices. Only composite products, which include bundle, configurable, and grouped
 * products, can contain a minimum and maximum price.
 */
export type Magento2ProductPrices = {
  __typename?: 'ProductPrices';
  /**
   * The highest possible final price for all the options defined within a
   * composite product. If you are specifying a price range, this would be the to value.
   * @deprecated Use PriceRange.maximum_price.
   */
  maximalPrice?: Maybe<Magento2Price>;
  /**
   * The lowest possible final price for all the options defined within a composite
   * product. If you are specifying a price range, this would be the from value.
   * @deprecated Use PriceRange.minimum_price.
   */
  minimalPrice?: Maybe<Magento2Price>;
  /**
   * The base price of a product.
   * @deprecated Use regular_price from PriceRange.minimum_price or PriceRange.maximum_price.
   */
  regularPrice?: Maybe<Magento2Price>;
};

/** Details of a product review */
export type Magento2ProductReview = {
  __typename?: 'ProductReview';
  /** The average rating for product review. */
  average_rating: Scalars['Float'];
  /** Date indicating when the review was created. */
  created_at: Scalars['String'];
  /** The customer's nickname. Defaults to the customer name, if logged in */
  nickname: Scalars['String'];
  /** Contains details about the reviewed product */
  product: Magento2ProductInterface;
  /** An array of ratings by rating category, such as quality, price, and value */
  ratings_breakdown: Array<Maybe<Magento2ProductReviewRating>>;
  /** The summary (title) of the review */
  summary: Scalars['String'];
  /** The review text. */
  text: Scalars['String'];
};

export type Magento2ProductReviewRating = {
  __typename?: 'ProductReviewRating';
  /** The label assigned to an aspect of a product that is being rated, such as quality or price */
  name: Scalars['String'];
  /** The rating value given by customer. By default, possible values range from 1 to 5. */
  value: Scalars['String'];
};

export type Magento2ProductReviewRatingInput = {
  /** An encoded rating ID. */
  id: Scalars['String'];
  /** An encoded rating value id. */
  value_id: Scalars['String'];
};

export type Magento2ProductReviewRatingMetadata = {
  __typename?: 'ProductReviewRatingMetadata';
  /** An encoded rating ID. */
  id: Scalars['String'];
  /** The label assigned to an aspect of a product that is being rated, such as quality or price */
  name: Scalars['String'];
  /** List of product review ratings sorted by position. */
  values: Array<Maybe<Magento2ProductReviewRatingValueMetadata>>;
};

export type Magento2ProductReviewRatingValueMetadata = {
  __typename?: 'ProductReviewRatingValueMetadata';
  /** A ratings scale, such as the number of stars awarded */
  value: Scalars['String'];
  /** An encoded rating value id. */
  value_id: Scalars['String'];
};

export type Magento2ProductReviewRatingsMetadata = {
  __typename?: 'ProductReviewRatingsMetadata';
  /** List of product reviews sorted by position */
  items: Array<Maybe<Magento2ProductReviewRatingMetadata>>;
};

export type Magento2ProductReviews = {
  __typename?: 'ProductReviews';
  /** An array of product reviews. */
  items: Array<Maybe<Magento2ProductReview>>;
  /** Metadata for pagination rendering. */
  page_info: Magento2SearchResultPageInfo;
};

/**
 * ProductSortInput is deprecated, use @ProductAttributeSortInput instead.
 * ProductSortInput specifies the attribute to use for sorting search results and
 * indicates whether the results are sorted in ascending or descending order.
 */
export type Magento2ProductSortInput = {
  /** The product's country of origin. */
  country_of_manufacture?: InputMaybe<Magento2SortEnum>;
  /** Timestamp indicating when the product was created. */
  created_at?: InputMaybe<Magento2SortEnum>;
  /** The name of a custom layout. */
  custom_layout?: InputMaybe<Magento2SortEnum>;
  /** XML code that is applied as a layout update to the product page. */
  custom_layout_update?: InputMaybe<Magento2SortEnum>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: InputMaybe<Magento2SortEnum>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: InputMaybe<Magento2SortEnum>;
  /** Indicates whether additional attributes have been created for the product. */
  has_options?: InputMaybe<Magento2SortEnum>;
  /** The relative path to the main image on the product page. */
  image?: InputMaybe<Magento2SortEnum>;
  /** The label assigned to a product image. */
  image_label?: InputMaybe<Magento2SortEnum>;
  /** Indicates whether the product can be returned */
  is_returnable?: InputMaybe<Magento2SortEnum>;
  /** A number representing the product's manufacturer. */
  manufacturer?: InputMaybe<Magento2SortEnum>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: InputMaybe<Magento2SortEnum>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: InputMaybe<Magento2SortEnum>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: InputMaybe<Magento2SortEnum>;
  /** The product name. Customers use this name to identify the product. */
  name?: InputMaybe<Magento2SortEnum>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  news_from_date?: InputMaybe<Magento2SortEnum>;
  /** The end date for new product listings. */
  news_to_date?: InputMaybe<Magento2SortEnum>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: InputMaybe<Magento2SortEnum>;
  /** The price of the item. */
  price?: InputMaybe<Magento2SortEnum>;
  /** Indicates whether the product has required options. */
  required_options?: InputMaybe<Magento2SortEnum>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: InputMaybe<Magento2SortEnum>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: InputMaybe<Magento2SortEnum>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: InputMaybe<Magento2SortEnum>;
  /** The label assigned to a product's small image. */
  small_image_label?: InputMaybe<Magento2SortEnum>;
  /** The beginning date that a product has a special price. */
  special_from_date?: InputMaybe<Magento2SortEnum>;
  /** The discounted price of the product. */
  special_price?: InputMaybe<Magento2SortEnum>;
  /** The end date that a product has a special price. */
  special_to_date?: InputMaybe<Magento2SortEnum>;
  /** The file name of a swatch image */
  swatch_image?: InputMaybe<Magento2SortEnum>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: InputMaybe<Magento2SortEnum>;
  /** The label assigned to a product's thumbnail image. */
  thumbnail_label?: InputMaybe<Magento2SortEnum>;
  /** The price when tier pricing is in effect and the items purchased threshold has been reached. */
  tier_price?: InputMaybe<Magento2SortEnum>;
  /** Timestamp indicating when the product was updated. */
  updated_at?: InputMaybe<Magento2SortEnum>;
  /** The part of the URL that identifies the product */
  url_key?: InputMaybe<Magento2SortEnum>;
  url_path?: InputMaybe<Magento2SortEnum>;
  /** The weight of the item, in units defined by the store. */
  weight?: InputMaybe<Magento2SortEnum>;
};

/** This enumeration states whether a product stock status is in stock or out of stock */
export enum Magento2ProductStockStatus {
  InStock = 'IN_STOCK',
  OutOfStock = 'OUT_OF_STOCK'
}

/**
 * ProductTierPrices is deprecated and has been replaced by TierPrice. The
 * ProductTierPrices object defines a tier price, which is a quantity discount
 * offered to a specific customer group.
 */
export type Magento2ProductTierPrices = {
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
export type Magento2ProductVideo = Magento2MediaGalleryInterface & {
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
  video_content?: Maybe<Magento2ProductMediaGalleryEntriesVideoContent>;
};

/** The Products object is the top-level object returned in a product search. */
export type Magento2Products = {
  __typename?: 'Products';
  /** Layered navigation aggregations. */
  aggregations?: Maybe<Array<Maybe<Magento2Aggregation>>>;
  /**
   * Layered navigation filters array.
   * @deprecated Use aggregations instead
   */
  filters?: Maybe<Array<Maybe<Magento2LayerFilter>>>;
  /** An array of products that match the specified search criteria. */
  items?: Maybe<Array<Maybe<Magento2ProductInterface>>>;
  /** An object that includes the page_info and currentPage values specified in the query. */
  page_info?: Maybe<Magento2SearchResultPageInfo>;
  /** An object that includes the default sort field and all available sort fields. */
  sort_fields?: Maybe<Magento2SortFields>;
  /**
   * The number of products that are marked as visible. By default, in complex
   * products, parent products are visible, but their child products are not.
   */
  total_count?: Maybe<Scalars['Int']>;
};

export type Magento2Query = {
  __typename?: 'Query';
  /** Return details about custom EAV attributes, and optionally, system attributes. */
  attributesMetadata?: Maybe<Magento2AttributesMetadata>;
  /** Get a list of available store views and their config information. */
  availableStores?: Maybe<Array<Maybe<Magento2StoreConfig>>>;
  /** Returns information about shopping cart */
  cart?: Maybe<Magento2Cart>;
  categories?: Maybe<Magento2CategoryResult>;
  /**
   * The category query searches for categories that match the criteria specified in the search and filter attributes.
   * @deprecated Use 'categoryList' query instead of 'category' query
   */
  category?: Maybe<Magento2CategoryTree>;
  /** Returns an array of categories based on the specified filters. */
  categoryList?: Maybe<Array<Maybe<Magento2CategoryTree>>>;
  /** Retrieves an array of configuration data for the chat widget. */
  chatData?: Maybe<Magento2ChatData>;
  /** The Checkout Agreements information */
  checkoutAgreements?: Maybe<Array<Maybe<Magento2CheckoutAgreement>>>;
  /** The CMS block query returns information about CMS blocks */
  cmsBlocks?: Maybe<Magento2CmsBlocks>;
  /** The CMS page query returns information about a CMS page */
  cmsPage?: Maybe<Magento2CmsPage>;
  /** Return products that have been added to the specified compare list */
  compareList?: Maybe<Magento2CompareList>;
  /** The countries query provides information for all countries. */
  countries?: Maybe<Array<Maybe<Magento2Country>>>;
  /** The countries query provides information for a single country. */
  country?: Maybe<Magento2Country>;
  /** The currency query returns information about store currency. */
  currency?: Maybe<Magento2Currency>;
  /** The customAttributeMetadata query returns the attribute type, given an attribute code and entity type */
  customAttributeMetadata?: Maybe<Magento2CustomAttributeMetadata>;
  /** The customer query returns information about a customer account */
  customer?: Maybe<Magento2Customer>;
  /** Returns information about the customer shopping cart */
  customerCart: Magento2Cart;
  /** The query returns the contents of a customer's downloadable products */
  customerDownloadableProducts?: Maybe<Magento2CustomerDownloadableProducts>;
  /** @deprecated Use orders from customer instead */
  customerOrders?: Maybe<Magento2CustomerOrders>;
  /** Return a list of customer payment tokens */
  customerPaymentTokens?: Maybe<Magento2CustomerPaymentTokens>;
  /** Return a list of dynamic blocks filtered by type, location, or UIDs */
  dynamicBlocks: Magento2DynamicBlocks;
  /** Returns status of Easy Email Capture for Checkout. */
  emailCaptureCheckout?: Maybe<Magento2IsConfigSettingEnabledOutput>;
  /** Returns status of Easy Email Capture for Newsletter. */
  emailCaptureNewsletter?: Maybe<Magento2IsConfigSettingEnabledOutput>;
  /** Retrieve secure PayPal url for Payments Pro Hosted Solution transaction. */
  getHostedProUrl?: Maybe<Magento2HostedProUrl>;
  /** Retrieve payment credentials for transaction. Use this query for Payflow Link and Payments Advanced payment methods. */
  getPayflowLinkToken?: Maybe<Magento2PayflowLinkToken>;
  /** Get information for gift card account by code */
  giftCardAccount?: Maybe<Magento2GiftCardAccount>;
  /** Return the specified gift registry. Some details will not be available to guests. */
  giftRegistry?: Maybe<Magento2GiftRegistry>;
  /** Search for gift registries by specifying a registrant email address */
  giftRegistryEmailSearch?: Maybe<Array<Maybe<Magento2GiftRegistrySearchResult>>>;
  /** Search for gift registries by specifying a registry URL key */
  giftRegistryIdSearch?: Maybe<Array<Maybe<Magento2GiftRegistrySearchResult>>>;
  /** Search for gift registries by specifying the registrant name and registry type ID */
  giftRegistryTypeSearch?: Maybe<Array<Maybe<Magento2GiftRegistrySearchResult>>>;
  /** Get a list of available gift registry types */
  giftRegistryTypes?: Maybe<Array<Maybe<Magento2GiftRegistryType>>>;
  isEmailAvailable?: Maybe<Magento2IsEmailAvailableOutput>;
  /** Retrieves information about an order by order id. */
  orderData?: Maybe<Magento2Order>;
  /** The pickup locations query searches for locations that match the search request requirements. */
  pickupLocations?: Maybe<Magento2PickupLocations>;
  /** Retrieves metadata required by clients to render the Reviews section. */
  productReviewRatingsMetadata: Magento2ProductReviewRatingsMetadata;
  /** The products query searches for products that match the criteria specified in the search and filter attributes. */
  products?: Maybe<Magento2Products>;
  /** Returns details about Google reCAPTCHA V3-Invisible configuration. */
  recaptchaV3Config?: Maybe<Magento2ReCaptchaConfigurationV3>;
  /**
   * Return the full details for a specified product, category, or CMS page given
   * the specified url_key, appended by the url_suffix, if one exists
   */
  route?: Maybe<Magento2RoutableInterface>;
  /** The store config query */
  storeConfig?: Maybe<Magento2StoreConfig>;
  /** Retrieves an array of configuration data for different types of tracking. */
  trackingData?: Maybe<Magento2TrackingData>;
  /**
   * The urlResolver query returns the relative URL for a specified product,
   * category or CMS page, using as input a url_key appended by the url_suffix, if one exists
   * @deprecated Use the 'route' query instead
   */
  urlResolver?: Maybe<Magento2EntityUrl>;
  /**
   * The wishlist query returns the contents of a customer's wish list
   * @deprecated Moved under `Customer` `wishlist`
   */
  wishlist?: Maybe<Magento2WishlistOutput>;
};


export type Magento2QueryAttributesMetadataArgs = {
  attributeUids?: InputMaybe<Array<Scalars['ID']>>;
  entityType: Magento2AttributeEntityTypeEnum;
  showSystemAttributes?: InputMaybe<Scalars['Boolean']>;
};


export type Magento2QueryAvailableStoresArgs = {
  useCurrentGroup?: InputMaybe<Scalars['Boolean']>;
};


export type Magento2QueryCartArgs = {
  cart_id: Scalars['String'];
};


export type Magento2QueryCategoriesArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  filters?: InputMaybe<Magento2CategoryFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type Magento2QueryCategoryArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type Magento2QueryCategoryListArgs = {
  filters?: InputMaybe<Magento2CategoryFilterInput>;
};


export type Magento2QueryCmsBlocksArgs = {
  identifiers?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Magento2QueryCmsPageArgs = {
  id?: InputMaybe<Scalars['Int']>;
  identifier?: InputMaybe<Scalars['String']>;
};


export type Magento2QueryCompareListArgs = {
  uid: Scalars['ID'];
};


export type Magento2QueryCountryArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type Magento2QueryCustomAttributeMetadataArgs = {
  attributes: Array<Magento2AttributeInput>;
};


export type Magento2QueryDynamicBlocksArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<Magento2DynamicBlocksFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type Magento2QueryGetHostedProUrlArgs = {
  input: Magento2HostedProUrlInput;
};


export type Magento2QueryGetPayflowLinkTokenArgs = {
  input: Magento2PayflowLinkTokenInput;
};


export type Magento2QueryGiftCardAccountArgs = {
  input: Magento2GiftCardAccountInput;
};


export type Magento2QueryGiftRegistryArgs = {
  giftRegistryUid: Scalars['ID'];
};


export type Magento2QueryGiftRegistryEmailSearchArgs = {
  email: Scalars['String'];
};


export type Magento2QueryGiftRegistryIdSearchArgs = {
  giftRegistryUid: Scalars['ID'];
};


export type Magento2QueryGiftRegistryTypeSearchArgs = {
  firstName: Scalars['String'];
  giftRegistryTypeUid?: InputMaybe<Scalars['ID']>;
  lastName: Scalars['String'];
};


export type Magento2QueryIsEmailAvailableArgs = {
  email: Scalars['String'];
};


export type Magento2QueryOrderDataArgs = {
  orderId: Scalars['String'];
};


export type Magento2QueryPickupLocationsArgs = {
  area?: InputMaybe<Magento2AreaInput>;
  currentPage?: InputMaybe<Scalars['Int']>;
  filters?: InputMaybe<Magento2PickupLocationFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']>;
  productsInfo?: InputMaybe<Array<InputMaybe<Magento2ProductInfoInput>>>;
  sort?: InputMaybe<Magento2PickupLocationSortInput>;
};


export type Magento2QueryProductsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<Magento2ProductAttributeFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Magento2ProductAttributeSortInput>;
};


export type Magento2QueryRouteArgs = {
  url: Scalars['String'];
};


export type Magento2QueryUrlResolverArgs = {
  url: Scalars['String'];
};

/** Contains reCAPTCHA V3-Invisible configuration details. */
export type Magento2ReCaptchaConfigurationV3 = {
  __typename?: 'ReCaptchaConfigurationV3';
  /** The position of the invisible reCAPTCHA badge on each page. */
  badge_position: Scalars['String'];
  /** The message that appears to the user if validation fails. */
  failure_message: Scalars['String'];
  /** A list of forms on the storefront that have been configured to use reCAPTCHA V3. */
  forms: Array<Maybe<Magento2ReCaptchaFormEnum>>;
  /** A two-character code that specifies the language that is used for Google reCAPTCHA text and messaging. */
  language_code?: Maybe<Scalars['String']>;
  /** The minimum score that identifies a user interaction as a potential risk. */
  minimum_score: Scalars['Float'];
  /** The website key generated when the Google reCAPTCHA account was registered. */
  website_key: Scalars['String'];
};

export enum Magento2ReCaptchaFormEnum {
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

export type Magento2Region = {
  __typename?: 'Region';
  code?: Maybe<Scalars['String']>;
  /** The unique ID for a `Region` object. */
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Magento2RemoveCouponFromCartInput = {
  cart_id: Scalars['String'];
};

export type Magento2RemoveCouponFromCartOutput = {
  __typename?: 'RemoveCouponFromCartOutput';
  cart?: Maybe<Magento2Cart>;
};

/** Defines the input required to run the removeGiftCardFromCart mutation */
export type Magento2RemoveGiftCardFromCartInput = {
  /** The unique ID that identifies the customer's cart */
  cart_id: Scalars['String'];
  /** The gift card code to be removed to the cart */
  gift_card_code: Scalars['String'];
};

/** Defines the possible output for the removeGiftCardFromCart mutation */
export type Magento2RemoveGiftCardFromCartOutput = {
  __typename?: 'RemoveGiftCardFromCartOutput';
  /** Describes the contents of the specified shopping cart */
  cart: Magento2Cart;
};

export type Magento2RemoveGiftRegistryItemsOutput = {
  __typename?: 'RemoveGiftRegistryItemsOutput';
  /** The gift registry after removing items */
  gift_registry?: Maybe<Magento2GiftRegistry>;
};

export type Magento2RemoveGiftRegistryOutput = {
  __typename?: 'RemoveGiftRegistryOutput';
  /** Indicates whether the gift registry was successfully deleted */
  success: Scalars['Boolean'];
};

export type Magento2RemoveGiftRegistryRegistrantsOutput = {
  __typename?: 'RemoveGiftRegistryRegistrantsOutput';
  /** The gift registry after deleting registrants */
  gift_registry?: Maybe<Magento2GiftRegistry>;
};

export type Magento2RemoveItemFromCartInput = {
  cart_id: Scalars['String'];
  /** Deprecated. Use `cart_item_uid` instead. */
  cart_item_id?: InputMaybe<Scalars['Int']>;
  /** Required field. The unique ID for a `CartItemInterface` object */
  cart_item_uid?: InputMaybe<Scalars['ID']>;
};

export type Magento2RemoveItemFromCartOutput = {
  __typename?: 'RemoveItemFromCartOutput';
  cart: Magento2Cart;
};

export type Magento2RemoveProductsFromCompareListInput = {
  /** An array of product IDs to remove from the compare list */
  products: Array<InputMaybe<Scalars['ID']>>;
  /** The unique identifier of the compare list to modify */
  uid: Scalars['ID'];
};

/** Contains the customer's wish list and any errors encountered */
export type Magento2RemoveProductsFromWishlistOutput = {
  __typename?: 'RemoveProductsFromWishlistOutput';
  /** An array of errors encountered while deleting products from a wish list */
  user_errors: Array<Maybe<Magento2WishListUserInputError>>;
  /** Contains the wish list with after items were successfully deleted */
  wishlist: Magento2Wishlist;
};

export type Magento2RemoveReturnTrackingInput = {
  /** The unique ID for a `ReturnShippingTracking` object */
  return_shipping_tracking_uid: Scalars['ID'];
};

export type Magento2RemoveReturnTrackingOutput = {
  __typename?: 'RemoveReturnTrackingOutput';
  /** Contains details about the modified return */
  return?: Maybe<Magento2Return>;
};

export type Magento2RemoveRewardPointsFromCartOutput = {
  __typename?: 'RemoveRewardPointsFromCartOutput';
  /** The customer cart after reward points are removed */
  cart: Magento2Cart;
};

/** Defines the input required to run the removeStoreCreditFromCart mutation */
export type Magento2RemoveStoreCreditFromCartInput = {
  /** The unique ID that identifies the customer's cart */
  cart_id: Scalars['String'];
};

/** Defines the possible output for the removeStoreCreditFromCart mutation */
export type Magento2RemoveStoreCreditFromCartOutput = {
  __typename?: 'RemoveStoreCreditFromCartOutput';
  /** Describes the contents of the specified shopping cart */
  cart: Magento2Cart;
};

export type Magento2ReorderItemsOutput = {
  __typename?: 'ReorderItemsOutput';
  /** Contains detailed information about the customer's cart. */
  cart: Magento2Cart;
  /** An array of reordering errors. */
  userInputErrors: Array<Maybe<Magento2CheckoutUserInputError>>;
};

export type Magento2RequestReturnInput = {
  /** Text the buyer entered that describes the reason for the refund request */
  comment_text?: InputMaybe<Scalars['String']>;
  /** An email address the buyer enters to receive notifications about the status of the return */
  contact_email?: InputMaybe<Scalars['String']>;
  /** An array of items to be returned */
  items: Array<InputMaybe<Magento2RequestReturnItemInput>>;
  /** The unique ID for a `Order` object */
  order_uid: Scalars['ID'];
};

export type Magento2RequestReturnItemInput = {
  /** Contains details about a custom attribute that was entered, such as text or a file */
  entered_custom_attributes?: InputMaybe<Array<InputMaybe<Magento2EnteredCustomAttributeInput>>>;
  /** The unique ID for a `OrderItemInterface` object */
  order_item_uid: Scalars['ID'];
  /** The quantity of the item to be returned */
  quantity_to_return: Scalars['Float'];
  /**
   * An array of selected custom option IDs associated with the item to be
   * returned. For example, the IDs for the selected color and size of a
   * configurable product
   */
  selected_custom_attributes?: InputMaybe<Array<InputMaybe<Magento2SelectedCustomAttributeInput>>>;
};

export type Magento2RequestReturnOutput = {
  __typename?: 'RequestReturnOutput';
  /** Contains details about a single return request */
  return?: Maybe<Magento2Return>;
  /** Contains an array of return requests */
  returns?: Maybe<Magento2Returns>;
};


export type Magento2RequestReturnOutputReturnsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

/** Customer return */
export type Magento2Return = {
  __typename?: 'Return';
  /** A list of shipping carriers available for returns */
  available_shipping_carriers?: Maybe<Array<Maybe<Magento2ReturnShippingCarrier>>>;
  /** A list of comments posted for the return request */
  comments?: Maybe<Array<Maybe<Magento2ReturnComment>>>;
  /** The date the return was requested */
  created_at: Scalars['String'];
  /** The data from customer who created the return request */
  customer: Magento2ReturnCustomer;
  /** A list of items being returned */
  items?: Maybe<Array<Maybe<Magento2ReturnItem>>>;
  /** Human-readable return number */
  number: Scalars['String'];
  /** The order associated with the return */
  order?: Maybe<Magento2CustomerOrder>;
  /** Shipping information for the return */
  shipping?: Maybe<Magento2ReturnShipping>;
  /** The status of the return request */
  status?: Maybe<Magento2ReturnStatus>;
  /** The unique ID for a `Return` object */
  uid: Scalars['ID'];
};

export type Magento2ReturnComment = {
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

export type Magento2ReturnCustomAttribute = {
  __typename?: 'ReturnCustomAttribute';
  /** A description of the attribute */
  label: Scalars['String'];
  /** The unique ID for a `ReturnCustomAttribute` object */
  uid: Scalars['ID'];
  /** A JSON-encoded value of the attribute */
  value: Scalars['String'];
};

/** The Customer information for the return. */
export type Magento2ReturnCustomer = {
  __typename?: 'ReturnCustomer';
  /** Customer email address. */
  email: Scalars['String'];
  /** Customer first name. */
  firstname?: Maybe<Scalars['String']>;
  /** Customer last name. */
  lastname?: Maybe<Scalars['String']>;
};

export type Magento2ReturnItem = {
  __typename?: 'ReturnItem';
  /** Return item custom attributes that are visible on the storefront */
  custom_attributes?: Maybe<Array<Maybe<Magento2ReturnCustomAttribute>>>;
  /** Provides access to the product being returned, including information about selected and entered options */
  order_item: Magento2OrderItemInterface;
  /** The quantity of the item the merchant authorized to be returned */
  quantity: Scalars['Float'];
  /** The quantity of the item requested to be returned */
  request_quantity: Scalars['Float'];
  /** The return status of the item */
  status: Magento2ReturnItemStatus;
  /** The unique ID for a `ReturnItem` object */
  uid: Scalars['ID'];
};

export enum Magento2ReturnItemStatus {
  Approved = 'APPROVED',
  Authorized = 'AUTHORIZED',
  Denied = 'DENIED',
  Pending = 'PENDING',
  Received = 'RECEIVED',
  Rejected = 'REJECTED'
}

export type Magento2ReturnShipping = {
  __typename?: 'ReturnShipping';
  /** The merchant-defined return shipping address */
  address?: Maybe<Magento2ReturnShippingAddress>;
  /**
   * The unique ID for a `ReturnShippingTracking` object. If a single UID is
   * specified, contains a single tracking record. Otherwise, contains all tracking information
   */
  tracking?: Maybe<Array<Maybe<Magento2ReturnShippingTracking>>>;
};


export type Magento2ReturnShippingTrackingArgs = {
  uid?: InputMaybe<Scalars['ID']>;
};

export type Magento2ReturnShippingAddress = {
  __typename?: 'ReturnShippingAddress';
  /** The city for product returns */
  city: Scalars['String'];
  /** The merchant's contact person */
  contact_name?: Maybe<Scalars['String']>;
  /** An object that defines the country for product returns */
  country: Magento2Country;
  /** The postal code for product returns */
  postcode: Scalars['String'];
  /** An object that defines the state or province for product returns */
  region: Magento2Region;
  /** The street address for product returns */
  street: Array<Maybe<Scalars['String']>>;
  /** The telephone number for product returns */
  telephone?: Maybe<Scalars['String']>;
};

export type Magento2ReturnShippingCarrier = {
  __typename?: 'ReturnShippingCarrier';
  /** A description of the shipping carrier */
  label: Scalars['String'];
  /** The unique ID for a `ReturnShippingCarrier` object assigned to the shipping carrier */
  uid: Scalars['ID'];
};

export type Magento2ReturnShippingTracking = {
  __typename?: 'ReturnShippingTracking';
  /** Contains details of a shipping carrier */
  carrier: Magento2ReturnShippingCarrier;
  /** Contains details about the status of a shipment */
  status?: Maybe<Magento2ReturnShippingTrackingStatus>;
  /** A tracking number assigned by the carrier */
  tracking_number: Scalars['String'];
  /** The unique ID for a `ReturnShippingTracking` object assigned to the tracking item */
  uid: Scalars['ID'];
};

export type Magento2ReturnShippingTrackingStatus = {
  __typename?: 'ReturnShippingTrackingStatus';
  /** Text that describes the status */
  text: Scalars['String'];
  /** Indicates whether the status type is informational or an error */
  type: Magento2ReturnShippingTrackingStatusType;
};

export enum Magento2ReturnShippingTrackingStatusType {
  Error = 'ERROR',
  Information = 'INFORMATION'
}

export enum Magento2ReturnStatus {
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

export type Magento2Returns = {
  __typename?: 'Returns';
  /** A list of return requests */
  items?: Maybe<Array<Maybe<Magento2Return>>>;
  /** Pagination metadata */
  page_info?: Maybe<Magento2SearchResultPageInfo>;
  /** The total number of return requests */
  total_count?: Maybe<Scalars['Int']>;
};

export type Magento2RevokeCustomerTokenOutput = {
  __typename?: 'RevokeCustomerTokenOutput';
  result: Scalars['Boolean'];
};

export type Magento2RewardPoints = {
  __typename?: 'RewardPoints';
  /** The current balance of reward points */
  balance?: Maybe<Magento2RewardPointsAmount>;
  /**
   * The balance history of reward points. If the ability for customers to view the
   * balance history has been disabled in the Admin, this field will be set to null
   */
  balance_history?: Maybe<Array<Maybe<Magento2RewardPointsBalanceHistoryItem>>>;
  /** The current exchange rates for reward points */
  exchange_rates?: Maybe<Magento2RewardPointsExchangeRates>;
  /** The subscription status of emails related to reward points */
  subscription_status?: Maybe<Magento2RewardPointsSubscriptionStatus>;
};

export type Magento2RewardPointsAmount = {
  __typename?: 'RewardPointsAmount';
  /** Reward points amount in store currency */
  money: Magento2Money;
  /** Reward points amount in points */
  points: Scalars['Float'];
};

export type Magento2RewardPointsBalanceHistoryItem = {
  __typename?: 'RewardPointsBalanceHistoryItem';
  /** Reward points balance after the completion of the transaction */
  balance?: Maybe<Magento2RewardPointsAmount>;
  /** The reason the balance changed */
  change_reason: Scalars['String'];
  /** Transaction date */
  date: Scalars['String'];
  /** The number of points added or deducted in the transaction */
  points_change: Scalars['Float'];
};

/** Exchange rates depend on the customer group */
export type Magento2RewardPointsExchangeRates = {
  __typename?: 'RewardPointsExchangeRates';
  /** How many points are earned for a given amount spent */
  earning?: Maybe<Magento2RewardPointsRate>;
  /** How many points must be redeemed to get a given amount of currency discount at the checkout */
  redemption?: Maybe<Magento2RewardPointsRate>;
};

export type Magento2RewardPointsRate = {
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

export type Magento2RewardPointsSubscriptionStatus = {
  __typename?: 'RewardPointsSubscriptionStatus';
  /** Customer subscription status to 'Reward points balance updates' emails */
  balance_updates: Magento2RewardPointsSubscriptionStatusesEnum;
  /** Customer subscription status to 'Reward points expiration notifications' emails */
  points_expiration_notifications: Magento2RewardPointsSubscriptionStatusesEnum;
};

export enum Magento2RewardPointsSubscriptionStatusesEnum {
  NotSubscribed = 'NOT_SUBSCRIBED',
  Subscribed = 'SUBSCRIBED'
}

/** Routable entities serve as the model for a rendered page */
export type Magento2RoutableInterface = {
  /**
   * Contains 0 when there is no redirect error. A value of 301 indicates the URL
   * of the requested resource has been changed permanently, while a value of 302
   * indicates a temporary redirect
   */
  redirect_code: Scalars['Int'];
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original */
  relative_url?: Maybe<Scalars['String']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<Magento2UrlRewriteEntityTypeEnum>;
};

/** Comment item details */
export type Magento2SalesCommentItem = {
  __typename?: 'SalesCommentItem';
  /** The text of the message */
  message: Scalars['String'];
  /** The timestamp of the comment */
  timestamp: Scalars['String'];
};

export type Magento2SalesItemInterface = {
  __typename?: 'SalesItemInterface';
  /** The entered gift message for the order item */
  gift_message?: Maybe<Magento2GiftMessage>;
};

/** SearchResultPageInfo provides navigation for the query response */
export type Magento2SearchResultPageInfo = {
  __typename?: 'SearchResultPageInfo';
  /** Specifies which page of results to return */
  current_page?: Maybe<Scalars['Int']>;
  /** Specifies the maximum number of items to return */
  page_size?: Maybe<Scalars['Int']>;
  /** Total pages */
  total_pages?: Maybe<Scalars['Int']>;
};

/** Defines selectable input types of the attribute. */
export type Magento2SelectableInputTypeInterface = {
  /** An array of attribute options. */
  attribute_options?: Maybe<Array<Maybe<Magento2AttributeOptionInterface>>>;
};

export type Magento2SelectedAttributeOption = {
  __typename?: 'SelectedAttributeOption';
  /** Selected attribute option details. */
  attribute_option?: Maybe<Array<Maybe<Magento2AttributeOptionInterface>>>;
};

export type Magento2SelectedBundleOption = {
  __typename?: 'SelectedBundleOption';
  /** @deprecated Use `uid` instead */
  id: Scalars['Int'];
  label: Scalars['String'];
  type: Scalars['String'];
  /** The unique ID for a `SelectedBundleOption` object */
  uid: Scalars['ID'];
  values: Array<Maybe<Magento2SelectedBundleOptionValue>>;
};

export type Magento2SelectedBundleOptionValue = {
  __typename?: 'SelectedBundleOptionValue';
  /** Use `uid` instead */
  id: Scalars['Int'];
  label: Scalars['String'];
  price: Scalars['Float'];
  quantity: Scalars['Float'];
  /** The unique ID for a `SelectedBundleOptionValue` object */
  uid: Scalars['ID'];
};

export type Magento2SelectedConfigurableOption = {
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

export type Magento2SelectedCustomAttributeInput = {
  /** A string that identifies the selected attribute */
  attribute_code: Scalars['String'];
  /** The unique ID for a `CustomAttribute` object of a selected custom attribute */
  value: Scalars['ID'];
};

export type Magento2SelectedCustomizableOption = {
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
  values: Array<Maybe<Magento2SelectedCustomizableOptionValue>>;
};

export type Magento2SelectedCustomizableOptionValue = {
  __typename?: 'SelectedCustomizableOptionValue';
  /**
   * The unique ID for a `CustomizableMultipleValue`, `CustomizableRadioValue`,
   * `CustomizableCheckboxValue`, `CustomizableDropDownValue`, etc. objects
   */
  customizable_option_value_uid: Scalars['ID'];
  /** @deprecated Use SelectedCustomizableOptionValue.customizable_option_value_uid instead */
  id: Scalars['Int'];
  label: Scalars['String'];
  price: Magento2CartItemSelectedOptionValuePrice;
  value: Scalars['String'];
};

export type Magento2SelectedPaymentMethod = {
  __typename?: 'SelectedPaymentMethod';
  /** The payment method code */
  code: Scalars['String'];
  /** The purchase order number. */
  purchase_order_number?: Maybe<Scalars['String']>;
  /** The payment method title. */
  title: Scalars['String'];
};

export type Magento2SelectedShippingMethod = {
  __typename?: 'SelectedShippingMethod';
  amount: Magento2Money;
  /** @deprecated The field should not be used on the storefront */
  base_amount?: Maybe<Magento2Money>;
  carrier_code: Scalars['String'];
  carrier_title: Scalars['String'];
  method_code: Scalars['String'];
  method_title: Scalars['String'];
};

export type Magento2SendEmailToFriendInput = {
  product_id: Scalars['Int'];
  recipients: Array<InputMaybe<Magento2SendEmailToFriendRecipientInput>>;
  sender: Magento2SendEmailToFriendSenderInput;
};

export type Magento2SendEmailToFriendOutput = {
  __typename?: 'SendEmailToFriendOutput';
  recipients?: Maybe<Array<Maybe<Magento2SendEmailToFriendRecipient>>>;
  sender?: Maybe<Magento2SendEmailToFriendSender>;
};

export type Magento2SendEmailToFriendRecipient = {
  __typename?: 'SendEmailToFriendRecipient';
  email: Scalars['String'];
  name: Scalars['String'];
};

export type Magento2SendEmailToFriendRecipientInput = {
  email: Scalars['String'];
  name: Scalars['String'];
};

export type Magento2SendEmailToFriendSender = {
  __typename?: 'SendEmailToFriendSender';
  email: Scalars['String'];
  message: Scalars['String'];
  name: Scalars['String'];
};

export type Magento2SendEmailToFriendSenderInput = {
  email: Scalars['String'];
  message: Scalars['String'];
  name: Scalars['String'];
};

export type Magento2SendFriendConfiguration = {
  __typename?: 'SendFriendConfiguration';
  /** Indicates whether the Email to a Friend feature is enabled. */
  enabled_for_customers: Scalars['Boolean'];
  /** Indicates whether the Email to a Friend feature is enabled for guests. */
  enabled_for_guests: Scalars['Boolean'];
};

export type Magento2SetBillingAddressOnCartInput = {
  billing_address: Magento2BillingAddressInput;
  cart_id: Scalars['String'];
};

export type Magento2SetBillingAddressOnCartOutput = {
  __typename?: 'SetBillingAddressOnCartOutput';
  cart: Magento2Cart;
};

export type Magento2SetGiftOptionsOnCartInput = {
  /** The unique ID that identifies the shopper's cart */
  cart_id: Scalars['String'];
  /** Gift message details for the cart */
  gift_message?: InputMaybe<Magento2GiftMessageInput>;
  /** Whether customer requested gift receipt for the cart */
  gift_receipt_included: Scalars['Boolean'];
  /** The unique ID for a `GiftWrapping` object to be used for the cart */
  gift_wrapping_id?: InputMaybe<Scalars['ID']>;
  /** Whether customer requested printed card for the cart */
  printed_card_included: Scalars['Boolean'];
};

export type Magento2SetGiftOptionsOnCartOutput = {
  __typename?: 'SetGiftOptionsOnCartOutput';
  /** The modified cart object */
  cart: Magento2Cart;
};

export type Magento2SetGuestEmailOnCartInput = {
  cart_id: Scalars['String'];
  email: Scalars['String'];
};

export type Magento2SetGuestEmailOnCartOutput = {
  __typename?: 'SetGuestEmailOnCartOutput';
  cart: Magento2Cart;
};

export type Magento2SetPaymentMethodAndPlaceOrderInput = {
  cart_id: Scalars['String'];
  payment_method: Magento2PaymentMethodInput;
};

export type Magento2SetPaymentMethodOnCartInput = {
  cart_id: Scalars['String'];
  payment_method: Magento2PaymentMethodInput;
};

export type Magento2SetPaymentMethodOnCartOutput = {
  __typename?: 'SetPaymentMethodOnCartOutput';
  cart: Magento2Cart;
};

export type Magento2SetShippingAddressesOnCartInput = {
  cart_id: Scalars['String'];
  shipping_addresses: Array<InputMaybe<Magento2ShippingAddressInput>>;
};

export type Magento2SetShippingAddressesOnCartOutput = {
  __typename?: 'SetShippingAddressesOnCartOutput';
  cart: Magento2Cart;
};

export type Magento2SetShippingMethodsOnCartInput = {
  cart_id: Scalars['String'];
  shipping_methods: Array<InputMaybe<Magento2ShippingMethodInput>>;
};

export type Magento2SetShippingMethodsOnCartOutput = {
  __typename?: 'SetShippingMethodsOnCartOutput';
  cart: Magento2Cart;
};

export type Magento2ShareGiftRegistryInviteeInput = {
  /** The email address of the gift registry invitee */
  email: Scalars['String'];
  /** The name of the gift registry invitee */
  name: Scalars['String'];
};

export type Magento2ShareGiftRegistryOutput = {
  __typename?: 'ShareGiftRegistryOutput';
  /** Indicates whether the gift registry was successfully shared */
  is_shared: Scalars['Boolean'];
};

export type Magento2ShareGiftRegistrySenderInput = {
  /** A brief message from the sender */
  message: Scalars['String'];
  /** The sender of the gift registry invitation */
  name: Scalars['String'];
};

/** This enumeration defines whether bundle items must be shipped together. */
export enum Magento2ShipBundleItemsEnum {
  Separately = 'SEPARATELY',
  Together = 'TOGETHER'
}

export type Magento2ShipmentItem = Magento2ShipmentItemInterface & {
  __typename?: 'ShipmentItem';
  /** The unique ID for a `ShipmentItemInterface` object */
  id: Scalars['ID'];
  /** Associated order item */
  order_item?: Maybe<Magento2OrderItemInterface>;
  /** Name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** Sale price for the base product */
  product_sale_price: Magento2Money;
  /** SKU of the base product */
  product_sku: Scalars['String'];
  /** Number of shipped items */
  quantity_shipped: Scalars['Float'];
};

/** Order shipment item details */
export type Magento2ShipmentItemInterface = {
  /** The unique ID for a `ShipmentItemInterface` object */
  id: Scalars['ID'];
  /** Associated order item */
  order_item?: Maybe<Magento2OrderItemInterface>;
  /** Name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** Sale price for the base product */
  product_sale_price: Magento2Money;
  /** SKU of the base product */
  product_sku: Scalars['String'];
  /** Number of shipped items */
  quantity_shipped: Scalars['Float'];
};

/** Order shipment tracking details */
export type Magento2ShipmentTracking = {
  __typename?: 'ShipmentTracking';
  /** The shipping carrier for the order delivery */
  carrier: Scalars['String'];
  /** The tracking number of the order shipment */
  number?: Maybe<Scalars['String']>;
  /** The shipment tracking title */
  title: Scalars['String'];
};

export type Magento2ShippingAddressInput = {
  address?: InputMaybe<Magento2CartAddressInput>;
  customer_address_id?: InputMaybe<Scalars['Int']>;
  customer_notes?: InputMaybe<Scalars['String']>;
  /** The code of Pickup Location which will be used for In-Store Pickup. */
  pickup_location_code?: InputMaybe<Scalars['String']>;
};

export type Magento2ShippingCartAddress = Magento2CartAddressInterface & {
  __typename?: 'ShippingCartAddress';
  available_shipping_methods?: Maybe<Array<Maybe<Magento2AvailableShippingMethod>>>;
  /** @deprecated `cart_items_v2` should be used instead */
  cart_items?: Maybe<Array<Maybe<Magento2CartItemQuantity>>>;
  cart_items_v2?: Maybe<Array<Maybe<Magento2CartItemInterface>>>;
  city: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  country: Magento2CartAddressCountry;
  customer_notes?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  /** @deprecated This information shoud not be exposed on frontend */
  items_weight?: Maybe<Scalars['Float']>;
  lastname: Scalars['String'];
  pickup_location_code?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  region?: Maybe<Magento2CartAddressRegion>;
  selected_shipping_method?: Maybe<Magento2SelectedShippingMethod>;
  street: Array<Maybe<Scalars['String']>>;
  telephone: Scalars['String'];
};

/** Defines an individual shipping discount. This discount can be applied to shipping. */
export type Magento2ShippingDiscount = {
  __typename?: 'ShippingDiscount';
  /** The amount of the discount */
  amount: Magento2Money;
};

/** The Shipping handling details */
export type Magento2ShippingHandling = {
  __typename?: 'ShippingHandling';
  /** The shipping amount, excluding tax */
  amount_excluding_tax?: Maybe<Magento2Money>;
  /** The shipping amount, including tax */
  amount_including_tax?: Maybe<Magento2Money>;
  /** The applied discounts to the shipping */
  discounts?: Maybe<Array<Maybe<Magento2ShippingDiscount>>>;
  /** Contains details about taxes applied for shipping */
  taxes?: Maybe<Array<Maybe<Magento2TaxItem>>>;
  /** The total amount for shipping */
  total_amount: Magento2Money;
};

export type Magento2ShippingMethodInput = {
  carrier_code: Scalars['String'];
  method_code: Scalars['String'];
};

/** Simple Cart Item */
export type Magento2SimpleCartItem = Magento2CartItemInterface & {
  __typename?: 'SimpleCartItem';
  /** The list of available gift wrapping options for the cart item */
  available_gift_wrapping: Array<Maybe<Magento2GiftWrapping>>;
  customizable_options: Array<Maybe<Magento2SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<Magento2CartItemError>>>;
  /** The entered gift message for the cart item */
  gift_message?: Maybe<Magento2GiftMessage>;
  /** The selected gift wrapping for the cart item */
  gift_wrapping?: Maybe<Magento2GiftWrapping>;
  /** @deprecated Use `uid` instead */
  id: Scalars['String'];
  prices?: Maybe<Magento2CartItemPrices>;
  product: Magento2ProductInterface;
  quantity: Scalars['Float'];
  /** The unique ID for a `CartItemInterface` object */
  uid: Scalars['ID'];
};

/** A simple product is tangible and is usually sold in single units or in fixed quantities */
export type Magento2SimpleProduct = Magento2CustomizableProductInterface & Magento2PhysicalProductInterface & Magento2ProductInterface & Magento2RoutableInterface & {
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
  categories?: Maybe<Array<Maybe<Magento2CategoryInterface>>>;
  color?: Maybe<Scalars['Int']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<Magento2ProductInterface>>>;
  /** List of product custom attributes details. */
  custom_attributes: Array<Maybe<Magento2CustomAttribute>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<Magento2ComplexTextValue>;
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
  image?: Maybe<Magento2ProductImage>;
  /** Indicates whether the product can be returned */
  is_returnable?: Maybe<Scalars['String']>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']>;
  /** An array of Media Gallery objects. */
  media_gallery?: Maybe<Array<Maybe<Magento2MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use product's `media_gallery` instead
   */
  media_gallery_entries?: Maybe<Array<Maybe<Magento2MediaGalleryEntry>>>;
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
  options?: Maybe<Array<Maybe<Magento2CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  /**
   * A ProductPrices object, indicating the price of an item.
   * @deprecated Use price_range for product price information.
   */
  price?: Maybe<Magento2ProductPrices>;
  /** A PriceRange object, indicating the range of prices for the product */
  price_range: Magento2PriceRange;
  /** An array of TierPrice objects. */
  price_tiers?: Maybe<Array<Maybe<Magento2TierPrice>>>;
  /** An array of ProductLinks objects. */
  product_links?: Maybe<Array<Maybe<Magento2ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /**
   * Contains 0 when there is no redirect error. A value of 301 indicates the URL
   * of the requested resource has been changed permanently, while a value of 302
   * indicates a temporary redirect
   */
  redirect_code: Scalars['Int'];
  /** Related Products */
  related_products?: Maybe<Array<Maybe<Magento2ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original */
  relative_url?: Maybe<Scalars['String']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: Magento2ProductReviews;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<Magento2ComplexTextValue>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<Magento2ProductImage>;
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
  stock_status?: Maybe<Magento2ProductStockStatus>;
  /** The file name of a swatch image */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<Magento2ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<Magento2ProductTierPrices>>>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<Magento2UrlRewriteEntityTypeEnum>;
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
  upsell_products?: Maybe<Array<Maybe<Magento2ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<Magento2UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  video_file?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Magento2Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']>;
};


/** A simple product is tangible and is usually sold in single units or in fixed quantities */
export type Magento2SimpleProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type Magento2SimpleProductCartItemInput = {
  customizable_options?: InputMaybe<Array<InputMaybe<Magento2CustomizableOptionInput>>>;
  data: Magento2CartItemInput;
};

/** A simple product wish list Item */
export type Magento2SimpleWishlistItem = Magento2WishlistItemInterface & {
  __typename?: 'SimpleWishlistItem';
  /** The date and time the item was added to the wish list */
  added_at: Scalars['String'];
  /** Custom options selected for the wish list item */
  customizable_options: Array<Maybe<Magento2SelectedCustomizableOption>>;
  /** The description of the item */
  description?: Maybe<Scalars['String']>;
  /** The unique ID for a `WishlistItemInterface` object */
  id: Scalars['ID'];
  /** Product details of the wish list item */
  product?: Maybe<Magento2ProductInterface>;
  /** The quantity of this wish list item */
  quantity: Scalars['Float'];
};

/** This enumeration indicates whether to return results in ascending or descending order */
export enum Magento2SortEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Magento2SortField = {
  __typename?: 'SortField';
  /** Label of sort field. */
  label?: Maybe<Scalars['String']>;
  /** Attribute code of sort field. */
  value?: Maybe<Scalars['String']>;
};

/** SortFields contains a default value for sort fields and all available sort fields. */
export type Magento2SortFields = {
  __typename?: 'SortFields';
  /** Default value of sort fields. */
  default?: Maybe<Scalars['String']>;
  /** Available sort fields. */
  options?: Maybe<Array<Maybe<Magento2SortField>>>;
};

/** The type contains information about a store config */
export type Magento2StoreConfig = {
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
  category_fixed_product_tax_display_setting?: Maybe<Magento2FixedProductTaxDisplaySettings>;
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
  product_fixed_product_tax_display_setting?: Maybe<Magento2FixedProductTaxDisplaySettings>;
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
  sales_fixed_product_tax_display_setting?: Maybe<Magento2FixedProductTaxDisplaySettings>;
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
  send_friend?: Maybe<Magento2SendFriendConfiguration>;
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
export type Magento2StoreLabels = {
  __typename?: 'StoreLabels';
  /** The label assigned to the attribute. */
  label?: Maybe<Scalars['String']>;
  /** The assigned store code. */
  store_code?: Maybe<Scalars['String']>;
};

export type Magento2StorefrontProperties = {
  __typename?: 'StorefrontProperties';
  /** The relative position of the attribute in the layered navigation block */
  position?: Maybe<Scalars['Int']>;
  /** Indicates whether the attribute is filterable with results, without results, or not at all */
  use_in_layered_navigation?: Maybe<Magento2UseInLayeredNavigationOptions>;
  /** Indicates whether the attribute is displayed in product listings */
  use_in_product_listing?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the attribute can be used in layered navigation on search results pages */
  use_in_search_results_layered_navigation?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the attribute is displayed on product pages */
  visible_on_catalog_pages?: Maybe<Scalars['Boolean']>;
};

export type Magento2SubscribeEmailToNewsletterOutput = {
  __typename?: 'SubscribeEmailToNewsletterOutput';
  /** Returns the status of the subscription request */
  status?: Maybe<Magento2SubscriptionStatusesEnum>;
};

export enum Magento2SubscriptionStatusesEnum {
  NotActive = 'NOT_ACTIVE',
  Subscribed = 'SUBSCRIBED',
  Unconfirmed = 'UNCONFIRMED',
  Unsubscribed = 'UNSUBSCRIBED'
}

export type Magento2SwatchData = {
  __typename?: 'SwatchData';
  /** Type of swatch filter item: 1 - text, 2 - image */
  type?: Maybe<Scalars['String']>;
  /** Value for swatch item (text or image link) */
  value?: Maybe<Scalars['String']>;
};

export type Magento2SwatchDataInterface = {
  /** Value of swatch item (HEX color code, image link or textual value) */
  value?: Maybe<Scalars['String']>;
};

export type Magento2SwatchLayerFilterItem = Magento2LayerFilterItemInterface & Magento2SwatchLayerFilterItemInterface & {
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
  swatch_data?: Maybe<Magento2SwatchData>;
  /**
   * Value for filter request variable to be used in query.
   * @deprecated Use AggregationOption.value instead.
   */
  value_string?: Maybe<Scalars['String']>;
};

export type Magento2SwatchLayerFilterItemInterface = {
  /** Data required to render swatch filter item */
  swatch_data?: Maybe<Magento2SwatchData>;
};

/** The tax item details */
export type Magento2TaxItem = {
  __typename?: 'TaxItem';
  /** The amount of tax applied to the item */
  amount: Magento2Money;
  /** The rate used to calculate the tax */
  rate: Scalars['Float'];
  /** A title that describes the tax */
  title: Scalars['String'];
};

export type Magento2TextSwatchData = Magento2SwatchDataInterface & {
  __typename?: 'TextSwatchData';
  /** Value of swatch item (HEX color code, image link or textual value) */
  value?: Maybe<Scalars['String']>;
};

/** A price based on the quantity purchased. */
export type Magento2TierPrice = {
  __typename?: 'TierPrice';
  /** The price discount that this tier represents. */
  discount?: Maybe<Magento2ProductDiscount>;
  final_price?: Maybe<Magento2Money>;
  /** The minimum number of items that must be purchased to qualify for this price tier. */
  quantity?: Maybe<Scalars['Float']>;
};

export type Magento2TrackingData = {
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

export type Magento2UiAttributeTypeAny = Magento2UiInputTypeInterface & {
  __typename?: 'UiAttributeTypeAny';
  /** Indicates whether the attribute value allowed to have html content. */
  is_html_allowed?: Maybe<Scalars['Boolean']>;
  /** The frontend input type of the attribute. */
  ui_input_type?: Maybe<Magento2UiInputTypeEnum>;
};

export type Magento2UiAttributeTypeBoolean = Magento2AttributeOptionsInterface & Magento2SelectableInputTypeInterface & Magento2UiInputTypeInterface & {
  __typename?: 'UiAttributeTypeBoolean';
  /** An array of attribute options. */
  attribute_options?: Maybe<Array<Maybe<Magento2AttributeOptionInterface>>>;
  /** Indicates whether the attribute value allowed to have html content. */
  is_html_allowed?: Maybe<Scalars['Boolean']>;
  /** The frontend input type of the attribute. */
  ui_input_type?: Maybe<Magento2UiInputTypeEnum>;
};

export type Magento2UiAttributeTypeFixedProductTax = Magento2UiInputTypeInterface & {
  __typename?: 'UiAttributeTypeFixedProductTax';
  /** Indicates whether the attribute value allowed to have html content. */
  is_html_allowed?: Maybe<Scalars['Boolean']>;
  /** The frontend input type of the attribute. */
  ui_input_type?: Maybe<Magento2UiInputTypeEnum>;
};

export type Magento2UiAttributeTypeMultiSelect = Magento2AttributeOptionsInterface & Magento2SelectableInputTypeInterface & Magento2UiInputTypeInterface & {
  __typename?: 'UiAttributeTypeMultiSelect';
  /** An array of attribute options. */
  attribute_options?: Maybe<Array<Maybe<Magento2AttributeOptionInterface>>>;
  /** Indicates whether the attribute value allowed to have html content. */
  is_html_allowed?: Maybe<Scalars['Boolean']>;
  /** The frontend input type of the attribute. */
  ui_input_type?: Maybe<Magento2UiInputTypeEnum>;
};

export type Magento2UiAttributeTypeSelect = Magento2AttributeOptionsInterface & Magento2SelectableInputTypeInterface & Magento2UiInputTypeInterface & {
  __typename?: 'UiAttributeTypeSelect';
  /** An array of attribute options. */
  attribute_options?: Maybe<Array<Maybe<Magento2AttributeOptionInterface>>>;
  /** Indicates whether the attribute value allowed to have html content. */
  is_html_allowed?: Maybe<Scalars['Boolean']>;
  /** The frontend input type of the attribute. */
  ui_input_type?: Maybe<Magento2UiInputTypeEnum>;
};

export enum Magento2UiInputTypeEnum {
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
export type Magento2UiInputTypeInterface = {
  /** Indicates whether the attribute value allowed to have html content. */
  is_html_allowed?: Maybe<Scalars['Boolean']>;
  /** The frontend input type of the attribute. */
  ui_input_type?: Maybe<Magento2UiInputTypeEnum>;
};

export type Magento2UpdateCartItemsInput = {
  cart_id: Scalars['String'];
  cart_items: Array<InputMaybe<Magento2CartItemUpdateInput>>;
};

export type Magento2UpdateCartItemsOutput = {
  __typename?: 'UpdateCartItemsOutput';
  cart: Magento2Cart;
};

export type Magento2UpdateGiftRegistryInput = {
  /** Additional attributes specified as a code-value pair. Unspecified dynamic attributes are not changed */
  dynamic_attributes?: InputMaybe<Array<InputMaybe<Magento2GiftRegistryDynamicAttributeInput>>>;
  /** The updated name of the event */
  event_name?: InputMaybe<Scalars['String']>;
  /** The updated message describing the event */
  message?: InputMaybe<Scalars['String']>;
  /** Indicates whether the gift registry is PRIVATE or PUBLIC */
  privacy_settings?: InputMaybe<Magento2GiftRegistryPrivacySettings>;
  /** The updated shipping address for all gift registry items */
  shipping_address?: InputMaybe<Magento2GiftRegistryShippingAddressInput>;
  /** Indicates whether the gift registry is ACTIVE or INACTIVE */
  status?: InputMaybe<Magento2GiftRegistryStatus>;
};

export type Magento2UpdateGiftRegistryItemInput = {
  /** The unique ID of a `giftRegistryItem` object */
  gift_registry_item_uid: Scalars['ID'];
  /** The updated description of the item */
  note?: InputMaybe<Scalars['String']>;
  /** The updated quantity of the gift registry item */
  quantity: Scalars['Float'];
};

export type Magento2UpdateGiftRegistryItemsOutput = {
  __typename?: 'UpdateGiftRegistryItemsOutput';
  /** The gift registry after updating updating items */
  gift_registry?: Maybe<Magento2GiftRegistry>;
};

export type Magento2UpdateGiftRegistryOutput = {
  __typename?: 'UpdateGiftRegistryOutput';
  /** The updated gift registry */
  gift_registry?: Maybe<Magento2GiftRegistry>;
};

export type Magento2UpdateGiftRegistryRegistrantInput = {
  /**
   * As a result of the update, only the values of provided attributes will be
   * affected. If the attribute is missing in the request, its value will not be changed
   */
  dynamic_attributes?: InputMaybe<Array<InputMaybe<Magento2GiftRegistryDynamicAttributeInput>>>;
  /** The updated email address of the registrant */
  email?: InputMaybe<Scalars['String']>;
  /** The updated first name of the registrant */
  firstname?: InputMaybe<Scalars['String']>;
  /** The unique ID of a `giftRegistryRegistrant` object */
  gift_registry_registrant_uid: Scalars['ID'];
  /** The updated last name of the registrant */
  lastname?: InputMaybe<Scalars['String']>;
};

export type Magento2UpdateGiftRegistryRegistrantsOutput = {
  __typename?: 'UpdateGiftRegistryRegistrantsOutput';
  /** The gift registry after updating registrants */
  gift_registry?: Maybe<Magento2GiftRegistry>;
};

/** Contains the customer's wish list and any errors encountered */
export type Magento2UpdateProductsInWishlistOutput = {
  __typename?: 'UpdateProductsInWishlistOutput';
  /** An array of errors encountered while updating products in a wish list */
  user_errors: Array<Maybe<Magento2WishListUserInputError>>;
  /** Contains the wish list with all items that were successfully updated */
  wishlist: Magento2Wishlist;
};

export type Magento2UpdateWishlistOutput = {
  __typename?: 'UpdateWishlistOutput';
  /** The wish list name */
  name: Scalars['String'];
  /** The unique ID for a `Wishlist` object */
  uid: Scalars['ID'];
  /** Indicates whether the wish list is public or private */
  visibility: Magento2WishlistVisibilityEnum;
};

/** The object contains URL rewrite details */
export type Magento2UrlRewrite = {
  __typename?: 'UrlRewrite';
  /** Request parameters */
  parameters?: Maybe<Array<Maybe<Magento2HttpQueryParameter>>>;
  /** Request URL */
  url?: Maybe<Scalars['String']>;
};

/** This enumeration defines the entity type. */
export enum Magento2UrlRewriteEntityTypeEnum {
  Category = 'CATEGORY',
  CmsPage = 'CMS_PAGE',
  Product = 'PRODUCT'
}

export enum Magento2UseInLayeredNavigationOptions {
  FilterableNoResult = 'FILTERABLE_NO_RESULT',
  FilterableWithResults = 'FILTERABLE_WITH_RESULTS',
  No = 'NO'
}

/** Required input for payment methods with Vault support. */
export type Magento2VaultTokenInput = {
  /** The public hash of the payment token */
  public_hash: Scalars['String'];
};

/** Virtual Cart Item */
export type Magento2VirtualCartItem = Magento2CartItemInterface & {
  __typename?: 'VirtualCartItem';
  customizable_options: Array<Maybe<Magento2SelectedCustomizableOption>>;
  /** An array of errors encountered while loading the cart item */
  errors?: Maybe<Array<Maybe<Magento2CartItemError>>>;
  /** @deprecated Use `uid` instead */
  id: Scalars['String'];
  prices?: Maybe<Magento2CartItemPrices>;
  product: Magento2ProductInterface;
  quantity: Scalars['Float'];
  /** The unique ID for a `CartItemInterface` object */
  uid: Scalars['ID'];
};

/** A virtual product is a non-tangible product that does not require shipping and is not kept in inventory */
export type Magento2VirtualProduct = Magento2CustomizableProductInterface & Magento2ProductInterface & Magento2RoutableInterface & {
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
  categories?: Maybe<Array<Maybe<Magento2CategoryInterface>>>;
  color?: Maybe<Scalars['Int']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<Magento2ProductInterface>>>;
  /** List of product custom attributes details. */
  custom_attributes: Array<Maybe<Magento2CustomAttribute>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<Magento2ComplexTextValue>;
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
  image?: Maybe<Magento2ProductImage>;
  /** Indicates whether the product can be returned */
  is_returnable?: Maybe<Scalars['String']>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']>;
  /** An array of Media Gallery objects. */
  media_gallery?: Maybe<Array<Maybe<Magento2MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use product's `media_gallery` instead
   */
  media_gallery_entries?: Maybe<Array<Maybe<Magento2MediaGalleryEntry>>>;
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
  options?: Maybe<Array<Maybe<Magento2CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  /**
   * A ProductPrices object, indicating the price of an item.
   * @deprecated Use price_range for product price information.
   */
  price?: Maybe<Magento2ProductPrices>;
  /** A PriceRange object, indicating the range of prices for the product */
  price_range: Magento2PriceRange;
  /** An array of TierPrice objects. */
  price_tiers?: Maybe<Array<Maybe<Magento2TierPrice>>>;
  /** An array of ProductLinks objects. */
  product_links?: Maybe<Array<Maybe<Magento2ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /**
   * Contains 0 when there is no redirect error. A value of 301 indicates the URL
   * of the requested resource has been changed permanently, while a value of 302
   * indicates a temporary redirect
   */
  redirect_code: Scalars['Int'];
  /** Related Products */
  related_products?: Maybe<Array<Maybe<Magento2ProductInterface>>>;
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original */
  relative_url?: Maybe<Scalars['String']>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: Magento2ProductReviews;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<Magento2ComplexTextValue>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<Magento2ProductImage>;
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
  stock_status?: Maybe<Magento2ProductStockStatus>;
  /** The file name of a swatch image */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<Magento2ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<Magento2ProductTierPrices>>>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<Magento2UrlRewriteEntityTypeEnum>;
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
  upsell_products?: Maybe<Array<Maybe<Magento2ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<Magento2UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  video_file?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Magento2Website>>>;
};


/** A virtual product is a non-tangible product that does not require shipping and is not kept in inventory */
export type Magento2VirtualProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type Magento2VirtualProductCartItemInput = {
  customizable_options?: InputMaybe<Array<InputMaybe<Magento2CustomizableOptionInput>>>;
  data: Magento2CartItemInput;
};

/** A virtual product wish list item */
export type Magento2VirtualWishlistItem = Magento2WishlistItemInterface & {
  __typename?: 'VirtualWishlistItem';
  /** The date and time the item was added to the wish list */
  added_at: Scalars['String'];
  /** Custom options selected for the wish list item */
  customizable_options: Array<Maybe<Magento2SelectedCustomizableOption>>;
  /** The description of the item */
  description?: Maybe<Scalars['String']>;
  /** The unique ID for a `WishlistItemInterface` object */
  id: Scalars['ID'];
  /** Product details of the wish list item */
  product?: Maybe<Magento2ProductInterface>;
  /** The quantity of this wish list item */
  quantity: Scalars['Float'];
};

/** Website is deprecated because it is should not be used on storefront. The type contains information about a website */
export type Magento2Website = {
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
export type Magento2WishListUserInputError = {
  __typename?: 'WishListUserInputError';
  /** Wishlist-specific error code */
  code: Magento2WishListUserInputErrorType;
  /** A localized error message */
  message: Scalars['String'];
};

export enum Magento2WishListUserInputErrorType {
  ProductNotFound = 'PRODUCT_NOT_FOUND',
  Undefined = 'UNDEFINED'
}

export type Magento2Wishlist = {
  __typename?: 'Wishlist';
  /** The unique ID for a `Wishlist` object */
  id?: Maybe<Scalars['ID']>;
  /** @deprecated Use field `items_v2` from type `Wishlist` instead */
  items?: Maybe<Array<Maybe<Magento2WishlistItem>>>;
  /** The number of items in the wish list */
  items_count?: Maybe<Scalars['Int']>;
  /** An array of items in the customer's wish list */
  items_v2?: Maybe<Magento2WishlistItems>;
  /** The wish list name */
  name?: Maybe<Scalars['String']>;
  /** An encrypted code that Magento uses to link to the wish list */
  sharing_code?: Maybe<Scalars['String']>;
  /** The time of the last modification to the wish list */
  updated_at?: Maybe<Scalars['String']>;
  /** Indicates whether the wish list is public or private */
  visibility: Magento2WishlistVisibilityEnum;
};


export type Magento2WishlistItems_V2Args = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type Magento2WishlistCartUserInputError = {
  __typename?: 'WishlistCartUserInputError';
  /** An error code that describes the error encountered */
  code: Magento2WishlistCartUserInputErrorType;
  /** A localized error message */
  message: Scalars['String'];
  /** The unique ID of the `Wishlist` object containing an error */
  wishlistId: Scalars['ID'];
  /** The unique ID of the wish list item containing an error */
  wishlistItemId: Scalars['ID'];
};

export enum Magento2WishlistCartUserInputErrorType {
  InsufficientStock = 'INSUFFICIENT_STOCK',
  NotSalable = 'NOT_SALABLE',
  ProductNotFound = 'PRODUCT_NOT_FOUND',
  Undefined = 'UNDEFINED'
}

export type Magento2WishlistItem = {
  __typename?: 'WishlistItem';
  /** The time when the customer added the item to the wish list */
  added_at?: Maybe<Scalars['String']>;
  /** The customer's comment about this item */
  description?: Maybe<Scalars['String']>;
  /** The unique ID for a `WishlistItem` object */
  id?: Maybe<Scalars['Int']>;
  product?: Maybe<Magento2ProductInterface>;
  /** The quantity of this wish list item */
  qty?: Maybe<Scalars['Float']>;
};

export type Magento2WishlistItemCopyInput = {
  /**
   * The quantity of this item to copy to the destination wish list. This value
   * can't be greater than the quantity in the source wish list.
   */
  quantity?: InputMaybe<Scalars['Float']>;
  /** The unique ID for a `WishlistItemInterface` object to be copied */
  wishlist_item_id: Scalars['ID'];
};

/** Defines the items to add to a wish list */
export type Magento2WishlistItemInput = {
  /** An array of options that the customer entered */
  entered_options?: InputMaybe<Array<InputMaybe<Magento2EnteredOptionInput>>>;
  /** For complex product types, the SKU of the parent product */
  parent_sku?: InputMaybe<Scalars['String']>;
  /** The amount or number of items to add */
  quantity: Scalars['Float'];
  /** An array of strings corresponding to options the customer selected */
  selected_options?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** The SKU of the product to add. For complex product types, specify the child product SKU */
  sku: Scalars['String'];
};

export type Magento2WishlistItemInterface = {
  /** The date and time the item was added to the wish list */
  added_at: Scalars['String'];
  /** Custom options selected for the wish list item */
  customizable_options: Array<Maybe<Magento2SelectedCustomizableOption>>;
  /** The description of the item */
  description?: Maybe<Scalars['String']>;
  /** The unique ID for a `WishlistItemInterface` object */
  id: Scalars['ID'];
  /** Product details of the wish list item */
  product?: Maybe<Magento2ProductInterface>;
  /** The quantity of this wish list item */
  quantity: Scalars['Float'];
};

export type Magento2WishlistItemMoveInput = {
  /**
   * The quantity of this item to move to the destination wish list. This value
   * can't be greater than the quantity in the source wish list.
   */
  quantity?: InputMaybe<Scalars['Float']>;
  /** filtered by the unique ID for a `WishlistItemInterface` object to be moved */
  wishlist_item_id: Scalars['ID'];
};

/** Defines updates to items in a wish list */
export type Magento2WishlistItemUpdateInput = {
  /** Customer-entered comments about the item */
  description?: InputMaybe<Scalars['String']>;
  /** An array of options that the customer entered */
  entered_options?: InputMaybe<Array<InputMaybe<Magento2EnteredOptionInput>>>;
  /** The new amount or number of this item */
  quantity?: InputMaybe<Scalars['Float']>;
  /** An array of strings corresponding to options the customer selected */
  selected_options?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** The unique ID for a `WishlistItemInterface` object */
  wishlist_item_id: Scalars['ID'];
};

export type Magento2WishlistItems = {
  __typename?: 'WishlistItems';
  /** A list of items in the wish list */
  items: Array<Maybe<Magento2WishlistItemInterface>>;
  /** Contains pagination metadata */
  page_info?: Maybe<Magento2SearchResultPageInfo>;
};

/** Deprecated: `Wishlist` type should be used instead */
export type Magento2WishlistOutput = {
  __typename?: 'WishlistOutput';
  /**
   * An array of items in the customer's wish list
   * @deprecated Use field `items` from type `Wishlist` instead
   */
  items?: Maybe<Array<Maybe<Magento2WishlistItem>>>;
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
export enum Magento2WishlistVisibilityEnum {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Magento2CreateEmptyCartInput = {
  cart_id?: InputMaybe<Scalars['String']>;
};

export type Magento2CreateKlarnaPaymentsSessionInput = {
  cart_id: Scalars['String'];
};

export type Magento2CreateKlarnaPaymentsSessionOutput = {
  __typename?: 'createKlarnaPaymentsSessionOutput';
  /** The payment method client token */
  client_token?: Maybe<Scalars['String']>;
  /** The payment method categories */
  payment_method_categories?: Maybe<Array<Maybe<Magento2Categories>>>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type Magento2ResolversTypes = {
  AddBundleProductsToCartInput: Magento2AddBundleProductsToCartInput;
  AddBundleProductsToCartOutput: ResolverTypeWrapper<Magento2AddBundleProductsToCartOutput>;
  AddConfigurableProductsToCartInput: Magento2AddConfigurableProductsToCartInput;
  AddConfigurableProductsToCartOutput: ResolverTypeWrapper<Magento2AddConfigurableProductsToCartOutput>;
  AddDownloadableProductsToCartInput: Magento2AddDownloadableProductsToCartInput;
  AddDownloadableProductsToCartOutput: ResolverTypeWrapper<Magento2AddDownloadableProductsToCartOutput>;
  AddGiftRegistryItemInput: Magento2AddGiftRegistryItemInput;
  AddGiftRegistryRegistrantInput: Magento2AddGiftRegistryRegistrantInput;
  AddGiftRegistryRegistrantsOutput: ResolverTypeWrapper<Magento2AddGiftRegistryRegistrantsOutput>;
  AddProductsToCartOutput: ResolverTypeWrapper<Magento2AddProductsToCartOutput>;
  AddProductsToCompareListInput: Magento2AddProductsToCompareListInput;
  AddProductsToWishlistOutput: ResolverTypeWrapper<Magento2AddProductsToWishlistOutput>;
  AddReturnCommentInput: Magento2AddReturnCommentInput;
  AddReturnCommentOutput: ResolverTypeWrapper<Magento2AddReturnCommentOutput>;
  AddReturnTrackingInput: Magento2AddReturnTrackingInput;
  AddReturnTrackingOutput: ResolverTypeWrapper<Magento2AddReturnTrackingOutput>;
  AddSimpleProductsToCartInput: Magento2AddSimpleProductsToCartInput;
  AddSimpleProductsToCartOutput: ResolverTypeWrapper<Magento2AddSimpleProductsToCartOutput>;
  AddVirtualProductsToCartInput: Magento2AddVirtualProductsToCartInput;
  AddVirtualProductsToCartOutput: ResolverTypeWrapper<Magento2AddVirtualProductsToCartOutput>;
  AddWishlistItemsToCartOutput: ResolverTypeWrapper<Magento2AddWishlistItemsToCartOutput>;
  Aggregation: ResolverTypeWrapper<Magento2Aggregation>;
  AggregationOption: ResolverTypeWrapper<Magento2AggregationOption>;
  AggregationOptionInterface: Magento2ResolversTypes['AggregationOption'];
  AppliedCoupon: ResolverTypeWrapper<Magento2AppliedCoupon>;
  AppliedGiftCard: ResolverTypeWrapper<Magento2AppliedGiftCard>;
  AppliedStoreCredit: ResolverTypeWrapper<Magento2AppliedStoreCredit>;
  ApplyCouponToCartInput: Magento2ApplyCouponToCartInput;
  ApplyCouponToCartOutput: ResolverTypeWrapper<Magento2ApplyCouponToCartOutput>;
  ApplyGiftCardToCartInput: Magento2ApplyGiftCardToCartInput;
  ApplyGiftCardToCartOutput: ResolverTypeWrapper<Magento2ApplyGiftCardToCartOutput>;
  ApplyRewardPointsToCartOutput: ResolverTypeWrapper<Magento2ApplyRewardPointsToCartOutput>;
  ApplyStoreCreditToCartInput: Magento2ApplyStoreCreditToCartInput;
  ApplyStoreCreditToCartOutput: ResolverTypeWrapper<Magento2ApplyStoreCreditToCartOutput>;
  AreaInput: Magento2AreaInput;
  Assets: ResolverTypeWrapper<Magento2Assets>;
  AssignCompareListToCustomerOutput: ResolverTypeWrapper<Magento2AssignCompareListToCustomerOutput>;
  Attribute: ResolverTypeWrapper<Magento2Attribute>;
  AttributeEntityTypeEnum: Magento2AttributeEntityTypeEnum;
  AttributeInput: Magento2AttributeInput;
  AttributeMetadataInterface: Magento2ResolversTypes['ProductAttributeMetadata'];
  AttributeOption: ResolverTypeWrapper<Magento2AttributeOption>;
  AttributeOptionInterface: Magento2ResolversTypes['AttributeOption'];
  AttributeOptions: ResolverTypeWrapper<Magento2AttributeOptions>;
  AttributeOptionsInterface: Magento2ResolversTypes['AttributeOptions'] | Magento2ResolversTypes['UiAttributeTypeBoolean'] | Magento2ResolversTypes['UiAttributeTypeMultiSelect'] | Magento2ResolversTypes['UiAttributeTypeSelect'];
  AttributesMetadata: ResolverTypeWrapper<Magento2AttributesMetadata>;
  AvailablePaymentMethod: ResolverTypeWrapper<Magento2AvailablePaymentMethod>;
  AvailableShippingMethod: ResolverTypeWrapper<Magento2AvailableShippingMethod>;
  BillingAddressInput: Magento2BillingAddressInput;
  BillingCartAddress: ResolverTypeWrapper<Magento2BillingCartAddress>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  BraintreeCcVaultInput: Magento2BraintreeCcVaultInput;
  BraintreeInput: Magento2BraintreeInput;
  Breadcrumb: ResolverTypeWrapper<Magento2Breadcrumb>;
  BundleCartItem: ResolverTypeWrapper<Magento2BundleCartItem>;
  BundleCreditMemoItem: ResolverTypeWrapper<Magento2BundleCreditMemoItem>;
  BundleInvoiceItem: ResolverTypeWrapper<Magento2BundleInvoiceItem>;
  BundleItem: ResolverTypeWrapper<Magento2BundleItem>;
  BundleItemOption: ResolverTypeWrapper<Magento2BundleItemOption>;
  BundleOptionInput: Magento2BundleOptionInput;
  BundleOrderItem: ResolverTypeWrapper<Magento2BundleOrderItem>;
  BundleProduct: ResolverTypeWrapper<Magento2BundleProduct>;
  BundleProductCartItemInput: Magento2BundleProductCartItemInput;
  BundleShipmentItem: ResolverTypeWrapper<Magento2BundleShipmentItem>;
  BundleWishlistItem: ResolverTypeWrapper<Magento2BundleWishlistItem>;
  Cart: ResolverTypeWrapper<Magento2Cart>;
  CartAddressCountry: ResolverTypeWrapper<Magento2CartAddressCountry>;
  CartAddressInput: Magento2CartAddressInput;
  CartAddressInterface: Magento2ResolversTypes['BillingCartAddress'] | Magento2ResolversTypes['ShippingCartAddress'];
  CartAddressRegion: ResolverTypeWrapper<Magento2CartAddressRegion>;
  CartDiscount: ResolverTypeWrapper<Magento2CartDiscount>;
  CartItemError: ResolverTypeWrapper<Magento2CartItemError>;
  CartItemErrorType: Magento2CartItemErrorType;
  CartItemInput: Magento2CartItemInput;
  CartItemInterface: Magento2ResolversTypes['BundleCartItem'] | Magento2ResolversTypes['ConfigurableCartItem'] | Magento2ResolversTypes['DownloadableCartItem'] | Magento2ResolversTypes['GiftCardCartItem'] | Magento2ResolversTypes['SimpleCartItem'] | Magento2ResolversTypes['VirtualCartItem'];
  CartItemPrices: ResolverTypeWrapper<Magento2CartItemPrices>;
  CartItemQuantity: ResolverTypeWrapper<Magento2CartItemQuantity>;
  CartItemSelectedOptionValuePrice: ResolverTypeWrapper<Magento2CartItemSelectedOptionValuePrice>;
  CartItemUpdateInput: Magento2CartItemUpdateInput;
  CartPrices: ResolverTypeWrapper<Magento2CartPrices>;
  CartTaxItem: ResolverTypeWrapper<Magento2CartTaxItem>;
  CartUserInputError: ResolverTypeWrapper<Magento2CartUserInputError>;
  CartUserInputErrorType: Magento2CartUserInputErrorType;
  Categories: ResolverTypeWrapper<Magento2Categories>;
  CategoryFilterInput: Magento2CategoryFilterInput;
  CategoryInterface: Magento2ResolversTypes['CategoryTree'];
  CategoryProducts: ResolverTypeWrapper<Magento2CategoryProducts>;
  CategoryResult: ResolverTypeWrapper<Magento2CategoryResult>;
  CategoryTree: ResolverTypeWrapper<Magento2CategoryTree>;
  ChatData: ResolverTypeWrapper<Magento2ChatData>;
  CheckoutAgreement: ResolverTypeWrapper<Magento2CheckoutAgreement>;
  CheckoutAgreementMode: Magento2CheckoutAgreementMode;
  CheckoutUserInputError: ResolverTypeWrapper<Magento2CheckoutUserInputError>;
  CheckoutUserInputErrorCodes: Magento2CheckoutUserInputErrorCodes;
  CmsBlock: ResolverTypeWrapper<Magento2CmsBlock>;
  CmsBlocks: ResolverTypeWrapper<Magento2CmsBlocks>;
  CmsPage: ResolverTypeWrapper<Magento2CmsPage>;
  ColorSwatchData: ResolverTypeWrapper<Magento2ColorSwatchData>;
  ComparableAttribute: ResolverTypeWrapper<Magento2ComparableAttribute>;
  ComparableItem: ResolverTypeWrapper<Magento2ComparableItem>;
  CompareList: ResolverTypeWrapper<Magento2CompareList>;
  ComplexTextValue: ResolverTypeWrapper<Magento2ComplexTextValue>;
  ConfigurableAttributeOption: ResolverTypeWrapper<Magento2ConfigurableAttributeOption>;
  ConfigurableCartItem: ResolverTypeWrapper<Magento2ConfigurableCartItem>;
  ConfigurableOptionAvailableForSelection: ResolverTypeWrapper<Magento2ConfigurableOptionAvailableForSelection>;
  ConfigurableProduct: ResolverTypeWrapper<Magento2ConfigurableProduct>;
  ConfigurableProductCartItemInput: Magento2ConfigurableProductCartItemInput;
  ConfigurableProductOption: ResolverTypeWrapper<Magento2ConfigurableProductOption>;
  ConfigurableProductOptionValue: ResolverTypeWrapper<Magento2ConfigurableProductOptionValue>;
  ConfigurableProductOptions: ResolverTypeWrapper<Magento2ConfigurableProductOptions>;
  ConfigurableProductOptionsSelection: ResolverTypeWrapper<Magento2ConfigurableProductOptionsSelection>;
  ConfigurableProductOptionsValues: ResolverTypeWrapper<Magento2ConfigurableProductOptionsValues>;
  ConfigurableVariant: ResolverTypeWrapper<Magento2ConfigurableVariant>;
  ConfigurableWishlistItem: ResolverTypeWrapper<Magento2ConfigurableWishlistItem>;
  ContactUsInput: Magento2ContactUsInput;
  ContactUsOutput: ResolverTypeWrapper<Magento2ContactUsOutput>;
  CopyProductsBetweenWishlistsOutput: ResolverTypeWrapper<Magento2CopyProductsBetweenWishlistsOutput>;
  Country: ResolverTypeWrapper<Magento2Country>;
  CountryCodeEnum: Magento2CountryCodeEnum;
  CreateCompareListInput: Magento2CreateCompareListInput;
  CreateGiftRegistryInput: Magento2CreateGiftRegistryInput;
  CreateGiftRegistryOutput: ResolverTypeWrapper<Magento2CreateGiftRegistryOutput>;
  CreatePayflowProTokenOutput: ResolverTypeWrapper<Magento2CreatePayflowProTokenOutput>;
  CreateProductReviewInput: Magento2CreateProductReviewInput;
  CreateProductReviewOutput: ResolverTypeWrapper<Magento2CreateProductReviewOutput>;
  CreateWishlistInput: Magento2CreateWishlistInput;
  CreateWishlistOutput: ResolverTypeWrapper<Magento2CreateWishlistOutput>;
  CreditCardDetailsInput: Magento2CreditCardDetailsInput;
  CreditMemo: ResolverTypeWrapper<Magento2CreditMemo>;
  CreditMemoItem: ResolverTypeWrapper<Magento2CreditMemoItem>;
  CreditMemoItemInterface: Magento2ResolversTypes['BundleCreditMemoItem'] | Magento2ResolversTypes['CreditMemoItem'] | Magento2ResolversTypes['DownloadableCreditMemoItem'] | Magento2ResolversTypes['GiftCardCreditMemoItem'];
  CreditMemoTotal: ResolverTypeWrapper<Magento2CreditMemoTotal>;
  Currency: ResolverTypeWrapper<Magento2Currency>;
  CurrencyEnum: Magento2CurrencyEnum;
  CustomAttribute: ResolverTypeWrapper<Magento2CustomAttribute>;
  CustomAttributeMetadata: ResolverTypeWrapper<Magento2CustomAttributeMetadata>;
  CustomAttributesListsEnum: Magento2CustomAttributesListsEnum;
  Customer: ResolverTypeWrapper<Magento2Customer>;
  CustomerAddress: ResolverTypeWrapper<Magento2CustomerAddress>;
  CustomerAddressAttribute: ResolverTypeWrapper<Magento2CustomerAddressAttribute>;
  CustomerAddressAttributeInput: Magento2CustomerAddressAttributeInput;
  CustomerAddressInput: Magento2CustomerAddressInput;
  CustomerAddressRegion: ResolverTypeWrapper<Magento2CustomerAddressRegion>;
  CustomerAddressRegionInput: Magento2CustomerAddressRegionInput;
  CustomerCreateInput: Magento2CustomerCreateInput;
  CustomerDownloadableProduct: ResolverTypeWrapper<Magento2CustomerDownloadableProduct>;
  CustomerDownloadableProducts: ResolverTypeWrapper<Magento2CustomerDownloadableProducts>;
  CustomerInput: Magento2CustomerInput;
  CustomerOrder: ResolverTypeWrapper<Magento2CustomerOrder>;
  CustomerOrders: ResolverTypeWrapper<Magento2CustomerOrders>;
  CustomerOrdersFilterInput: Magento2CustomerOrdersFilterInput;
  CustomerOutput: ResolverTypeWrapper<Magento2CustomerOutput>;
  CustomerPaymentTokens: ResolverTypeWrapper<Magento2CustomerPaymentTokens>;
  CustomerStoreCredit: ResolverTypeWrapper<Magento2CustomerStoreCredit>;
  CustomerStoreCreditHistory: ResolverTypeWrapper<Magento2CustomerStoreCreditHistory>;
  CustomerStoreCreditHistoryItem: ResolverTypeWrapper<Magento2CustomerStoreCreditHistoryItem>;
  CustomerToken: ResolverTypeWrapper<Magento2CustomerToken>;
  CustomerUpdateInput: Magento2CustomerUpdateInput;
  CustomizableAreaOption: ResolverTypeWrapper<Magento2CustomizableAreaOption>;
  CustomizableAreaValue: ResolverTypeWrapper<Magento2CustomizableAreaValue>;
  CustomizableCheckboxOption: ResolverTypeWrapper<Magento2CustomizableCheckboxOption>;
  CustomizableCheckboxValue: ResolverTypeWrapper<Magento2CustomizableCheckboxValue>;
  CustomizableDateOption: ResolverTypeWrapper<Magento2CustomizableDateOption>;
  CustomizableDateTypeEnum: Magento2CustomizableDateTypeEnum;
  CustomizableDateValue: ResolverTypeWrapper<Magento2CustomizableDateValue>;
  CustomizableDropDownOption: ResolverTypeWrapper<Magento2CustomizableDropDownOption>;
  CustomizableDropDownValue: ResolverTypeWrapper<Magento2CustomizableDropDownValue>;
  CustomizableFieldOption: ResolverTypeWrapper<Magento2CustomizableFieldOption>;
  CustomizableFieldValue: ResolverTypeWrapper<Magento2CustomizableFieldValue>;
  CustomizableFileOption: ResolverTypeWrapper<Magento2CustomizableFileOption>;
  CustomizableFileValue: ResolverTypeWrapper<Magento2CustomizableFileValue>;
  CustomizableMultipleOption: ResolverTypeWrapper<Magento2CustomizableMultipleOption>;
  CustomizableMultipleValue: ResolverTypeWrapper<Magento2CustomizableMultipleValue>;
  CustomizableOptionInput: Magento2CustomizableOptionInput;
  CustomizableOptionInterface: Magento2ResolversTypes['CustomizableAreaOption'] | Magento2ResolversTypes['CustomizableCheckboxOption'] | Magento2ResolversTypes['CustomizableDateOption'] | Magento2ResolversTypes['CustomizableDropDownOption'] | Magento2ResolversTypes['CustomizableFieldOption'] | Magento2ResolversTypes['CustomizableFileOption'] | Magento2ResolversTypes['CustomizableMultipleOption'] | Magento2ResolversTypes['CustomizableRadioOption'];
  CustomizableProductInterface: Magento2ResolversTypes['BundleProduct'] | Magento2ResolversTypes['ConfigurableProduct'] | Magento2ResolversTypes['DownloadableProduct'] | Magento2ResolversTypes['GiftCardProduct'] | Magento2ResolversTypes['SimpleProduct'] | Magento2ResolversTypes['VirtualProduct'];
  CustomizableRadioOption: ResolverTypeWrapper<Magento2CustomizableRadioOption>;
  CustomizableRadioValue: ResolverTypeWrapper<Magento2CustomizableRadioValue>;
  DeleteCompareListOutput: ResolverTypeWrapper<Magento2DeleteCompareListOutput>;
  DeletePaymentTokenOutput: ResolverTypeWrapper<Magento2DeletePaymentTokenOutput>;
  DeleteWishlistOutput: ResolverTypeWrapper<Magento2DeleteWishlistOutput>;
  Discount: ResolverTypeWrapper<Magento2Discount>;
  DownloadableCartItem: ResolverTypeWrapper<Magento2DownloadableCartItem>;
  DownloadableCreditMemoItem: ResolverTypeWrapper<Magento2DownloadableCreditMemoItem>;
  DownloadableFileTypeEnum: Magento2DownloadableFileTypeEnum;
  DownloadableInvoiceItem: ResolverTypeWrapper<Magento2DownloadableInvoiceItem>;
  DownloadableItemsLinks: ResolverTypeWrapper<Magento2DownloadableItemsLinks>;
  DownloadableOrderItem: ResolverTypeWrapper<Magento2DownloadableOrderItem>;
  DownloadableProduct: ResolverTypeWrapper<Magento2DownloadableProduct>;
  DownloadableProductCartItemInput: Magento2DownloadableProductCartItemInput;
  DownloadableProductLinks: ResolverTypeWrapper<Magento2DownloadableProductLinks>;
  DownloadableProductLinksInput: Magento2DownloadableProductLinksInput;
  DownloadableProductSamples: ResolverTypeWrapper<Magento2DownloadableProductSamples>;
  DownloadableWishlistItem: ResolverTypeWrapper<Magento2DownloadableWishlistItem>;
  DynamicBlock: ResolverTypeWrapper<Magento2DynamicBlock>;
  DynamicBlockLocationEnum: Magento2DynamicBlockLocationEnum;
  DynamicBlockTypeEnum: Magento2DynamicBlockTypeEnum;
  DynamicBlocks: ResolverTypeWrapper<Magento2DynamicBlocks>;
  DynamicBlocksFilterInput: Magento2DynamicBlocksFilterInput;
  EnteredAttributeValue: ResolverTypeWrapper<Magento2EnteredAttributeValue>;
  EnteredCustomAttributeInput: Magento2EnteredCustomAttributeInput;
  EnteredOptionInput: Magento2EnteredOptionInput;
  EntityUrl: ResolverTypeWrapper<Magento2EntityUrl>;
  ExchangeRate: ResolverTypeWrapper<Magento2ExchangeRate>;
  FilterEqualTypeInput: Magento2FilterEqualTypeInput;
  FilterMatchTypeInput: Magento2FilterMatchTypeInput;
  FilterRangeTypeInput: Magento2FilterRangeTypeInput;
  FilterStringTypeInput: Magento2FilterStringTypeInput;
  FilterTypeInput: Magento2FilterTypeInput;
  FixedProductTax: ResolverTypeWrapper<Magento2FixedProductTax>;
  FixedProductTaxDisplaySettings: Magento2FixedProductTaxDisplaySettings;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  GenerateCustomerTokenAsAdminInput: Magento2GenerateCustomerTokenAsAdminInput;
  GenerateCustomerTokenAsAdminOutput: ResolverTypeWrapper<Magento2GenerateCustomerTokenAsAdminOutput>;
  GiftCardAccount: ResolverTypeWrapper<Magento2GiftCardAccount>;
  GiftCardAccountInput: Magento2GiftCardAccountInput;
  GiftCardAmounts: ResolverTypeWrapper<Magento2GiftCardAmounts>;
  GiftCardCartItem: ResolverTypeWrapper<Magento2GiftCardCartItem>;
  GiftCardCreditMemoItem: ResolverTypeWrapper<Magento2GiftCardCreditMemoItem>;
  GiftCardInvoiceItem: ResolverTypeWrapper<Magento2GiftCardInvoiceItem>;
  GiftCardItem: ResolverTypeWrapper<Magento2GiftCardItem>;
  GiftCardOptions: ResolverTypeWrapper<Magento2GiftCardOptions>;
  GiftCardOrderItem: ResolverTypeWrapper<Magento2GiftCardOrderItem>;
  GiftCardProduct: ResolverTypeWrapper<Magento2GiftCardProduct>;
  GiftCardShipmentItem: ResolverTypeWrapper<Magento2GiftCardShipmentItem>;
  GiftCardTypeEnum: Magento2GiftCardTypeEnum;
  GiftCardWishlistItem: ResolverTypeWrapper<Magento2GiftCardWishlistItem>;
  GiftMessage: ResolverTypeWrapper<Magento2GiftMessage>;
  GiftMessageInput: Magento2GiftMessageInput;
  GiftOptionsPrices: ResolverTypeWrapper<Magento2GiftOptionsPrices>;
  GiftRegistry: ResolverTypeWrapper<Magento2GiftRegistry>;
  GiftRegistryDynamicAttribute: ResolverTypeWrapper<Magento2GiftRegistryDynamicAttribute>;
  GiftRegistryDynamicAttributeGroup: Magento2GiftRegistryDynamicAttributeGroup;
  GiftRegistryDynamicAttributeInput: Magento2GiftRegistryDynamicAttributeInput;
  GiftRegistryDynamicAttributeInterface: Magento2ResolversTypes['GiftRegistryDynamicAttribute'] | Magento2ResolversTypes['GiftRegistryRegistrantDynamicAttribute'];
  GiftRegistryDynamicAttributeMetadata: ResolverTypeWrapper<Magento2GiftRegistryDynamicAttributeMetadata>;
  GiftRegistryDynamicAttributeMetadataInterface: Magento2ResolversTypes['GiftRegistryDynamicAttributeMetadata'];
  GiftRegistryItem: ResolverTypeWrapper<Magento2GiftRegistryItem>;
  GiftRegistryItemInterface: Magento2ResolversTypes['GiftRegistryItem'];
  GiftRegistryItemUserErrorInterface: Magento2ResolversTypes['GiftRegistryItemUserErrors'] | Magento2ResolversTypes['MoveCartItemsToGiftRegistryOutput'];
  GiftRegistryItemUserErrors: ResolverTypeWrapper<Magento2GiftRegistryItemUserErrors>;
  GiftRegistryItemsUserError: ResolverTypeWrapper<Magento2GiftRegistryItemsUserError>;
  GiftRegistryItemsUserErrorType: Magento2GiftRegistryItemsUserErrorType;
  GiftRegistryOutput: ResolverTypeWrapper<Magento2GiftRegistryOutput>;
  GiftRegistryOutputInterface: Magento2ResolversTypes['GiftRegistryOutput'] | Magento2ResolversTypes['MoveCartItemsToGiftRegistryOutput'];
  GiftRegistryPrivacySettings: Magento2GiftRegistryPrivacySettings;
  GiftRegistryRegistrant: ResolverTypeWrapper<Magento2GiftRegistryRegistrant>;
  GiftRegistryRegistrantDynamicAttribute: ResolverTypeWrapper<Magento2GiftRegistryRegistrantDynamicAttribute>;
  GiftRegistrySearchResult: ResolverTypeWrapper<Magento2GiftRegistrySearchResult>;
  GiftRegistryShippingAddressInput: Magento2GiftRegistryShippingAddressInput;
  GiftRegistryStatus: Magento2GiftRegistryStatus;
  GiftRegistryType: ResolverTypeWrapper<Magento2GiftRegistryType>;
  GiftWrapping: ResolverTypeWrapper<Magento2GiftWrapping>;
  GiftWrappingImage: ResolverTypeWrapper<Magento2GiftWrappingImage>;
  GroupedProduct: ResolverTypeWrapper<Magento2GroupedProduct>;
  GroupedProductItem: ResolverTypeWrapper<Magento2GroupedProductItem>;
  GroupedProductWishlistItem: ResolverTypeWrapper<Magento2GroupedProductWishlistItem>;
  HostedProInput: Magento2HostedProInput;
  HostedProUrl: ResolverTypeWrapper<Magento2HostedProUrl>;
  HostedProUrlInput: Magento2HostedProUrlInput;
  HttpQueryParameter: ResolverTypeWrapper<Magento2HttpQueryParameter>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  ImageSwatchData: ResolverTypeWrapper<Magento2ImageSwatchData>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Invoice: ResolverTypeWrapper<Magento2Invoice>;
  InvoiceItem: ResolverTypeWrapper<Magento2InvoiceItem>;
  InvoiceItemInterface: Magento2ResolversTypes['BundleInvoiceItem'] | Magento2ResolversTypes['DownloadableInvoiceItem'] | Magento2ResolversTypes['GiftCardInvoiceItem'] | Magento2ResolversTypes['InvoiceItem'];
  InvoiceTotal: ResolverTypeWrapper<Magento2InvoiceTotal>;
  IsConfigSettingEnabledOutput: ResolverTypeWrapper<Magento2IsConfigSettingEnabledOutput>;
  IsEmailAvailableOutput: ResolverTypeWrapper<Magento2IsEmailAvailableOutput>;
  ItemSelectedBundleOption: ResolverTypeWrapper<Magento2ItemSelectedBundleOption>;
  ItemSelectedBundleOptionValue: ResolverTypeWrapper<Magento2ItemSelectedBundleOptionValue>;
  KeyValue: ResolverTypeWrapper<Magento2KeyValue>;
  KlarnaInput: Magento2KlarnaInput;
  LayerFilter: ResolverTypeWrapper<Magento2LayerFilter>;
  LayerFilterItem: ResolverTypeWrapper<Magento2LayerFilterItem>;
  LayerFilterItemInterface: Magento2ResolversTypes['LayerFilterItem'] | Magento2ResolversTypes['SwatchLayerFilterItem'];
  MediaGalleryEntry: ResolverTypeWrapper<Magento2MediaGalleryEntry>;
  MediaGalleryInterface: Magento2ResolversTypes['ProductImage'] | Magento2ResolversTypes['ProductVideo'];
  Money: ResolverTypeWrapper<Magento2Money>;
  MoveCartItemsToGiftRegistryOutput: ResolverTypeWrapper<Magento2MoveCartItemsToGiftRegistryOutput>;
  MoveProductsBetweenWishlistsOutput: ResolverTypeWrapper<Magento2MoveProductsBetweenWishlistsOutput>;
  Mutation: ResolverTypeWrapper<{}>;
  ObjectDataTypeEnum: Magento2ObjectDataTypeEnum;
  Order: ResolverTypeWrapper<Magento2Order>;
  OrderAddress: ResolverTypeWrapper<Magento2OrderAddress>;
  OrderItem: ResolverTypeWrapper<Magento2OrderItem>;
  OrderItemInterface: Magento2ResolversTypes['BundleOrderItem'] | Magento2ResolversTypes['DownloadableOrderItem'] | Magento2ResolversTypes['GiftCardOrderItem'] | Magento2ResolversTypes['OrderItem'];
  OrderItemOption: ResolverTypeWrapper<Magento2OrderItemOption>;
  OrderPaymentMethod: ResolverTypeWrapper<Magento2OrderPaymentMethod>;
  OrderShipment: ResolverTypeWrapper<Magento2OrderShipment>;
  OrderTotal: ResolverTypeWrapper<Magento2OrderTotal>;
  PayflowExpressInput: Magento2PayflowExpressInput;
  PayflowLinkInput: Magento2PayflowLinkInput;
  PayflowLinkMode: Magento2PayflowLinkMode;
  PayflowLinkToken: ResolverTypeWrapper<Magento2PayflowLinkToken>;
  PayflowLinkTokenInput: Magento2PayflowLinkTokenInput;
  PayflowProInput: Magento2PayflowProInput;
  PayflowProResponseInput: Magento2PayflowProResponseInput;
  PayflowProResponseOutput: ResolverTypeWrapper<Magento2PayflowProResponseOutput>;
  PayflowProToken: ResolverTypeWrapper<Magento2PayflowProToken>;
  PayflowProTokenInput: Magento2PayflowProTokenInput;
  PayflowProUrlInput: Magento2PayflowProUrlInput;
  PaymentMethodInput: Magento2PaymentMethodInput;
  PaymentToken: ResolverTypeWrapper<Magento2PaymentToken>;
  PaymentTokenTypeEnum: Magento2PaymentTokenTypeEnum;
  PaypalExpressInput: Magento2PaypalExpressInput;
  PaypalExpressToken: ResolverTypeWrapper<Magento2PaypalExpressToken>;
  PaypalExpressTokenInput: Magento2PaypalExpressTokenInput;
  PaypalExpressTokenOutput: ResolverTypeWrapper<Magento2PaypalExpressTokenOutput>;
  PaypalExpressUrlList: ResolverTypeWrapper<Magento2PaypalExpressUrlList>;
  PaypalExpressUrlsInput: Magento2PaypalExpressUrlsInput;
  PhysicalProductInterface: Magento2ResolversTypes['BundleProduct'] | Magento2ResolversTypes['ConfigurableProduct'] | Magento2ResolversTypes['GiftCardProduct'] | Magento2ResolversTypes['GroupedProduct'] | Magento2ResolversTypes['SimpleProduct'];
  PickupLocation: ResolverTypeWrapper<Magento2PickupLocation>;
  PickupLocationFilterInput: Magento2PickupLocationFilterInput;
  PickupLocationSortInput: Magento2PickupLocationSortInput;
  PickupLocations: ResolverTypeWrapper<Magento2PickupLocations>;
  PlaceOrderInput: Magento2PlaceOrderInput;
  PlaceOrderOutput: ResolverTypeWrapper<Magento2PlaceOrderOutput>;
  Price: ResolverTypeWrapper<Magento2Price>;
  PriceAdjustment: ResolverTypeWrapper<Magento2PriceAdjustment>;
  PriceAdjustmentCodesEnum: Magento2PriceAdjustmentCodesEnum;
  PriceAdjustmentDescriptionEnum: Magento2PriceAdjustmentDescriptionEnum;
  PriceRange: ResolverTypeWrapper<Magento2PriceRange>;
  PriceTypeEnum: Magento2PriceTypeEnum;
  PriceViewEnum: Magento2PriceViewEnum;
  ProductAttribute: ResolverTypeWrapper<Magento2ProductAttribute>;
  ProductAttributeFilterInput: Magento2ProductAttributeFilterInput;
  ProductAttributeMetadata: ResolverTypeWrapper<Magento2ProductAttributeMetadata>;
  ProductAttributeSortInput: Magento2ProductAttributeSortInput;
  ProductDiscount: ResolverTypeWrapper<Magento2ProductDiscount>;
  ProductFilterInput: Magento2ProductFilterInput;
  ProductImage: ResolverTypeWrapper<Magento2ProductImage>;
  ProductInfoInput: Magento2ProductInfoInput;
  ProductInterface: Magento2ResolversTypes['BundleProduct'] | Magento2ResolversTypes['ConfigurableProduct'] | Magento2ResolversTypes['DownloadableProduct'] | Magento2ResolversTypes['GiftCardProduct'] | Magento2ResolversTypes['GroupedProduct'] | Magento2ResolversTypes['SimpleProduct'] | Magento2ResolversTypes['VirtualProduct'];
  ProductLinks: ResolverTypeWrapper<Magento2ProductLinks>;
  ProductLinksInterface: Magento2ResolversTypes['ProductLinks'];
  ProductMediaGalleryEntriesContent: ResolverTypeWrapper<Magento2ProductMediaGalleryEntriesContent>;
  ProductMediaGalleryEntriesVideoContent: ResolverTypeWrapper<Magento2ProductMediaGalleryEntriesVideoContent>;
  ProductPrice: ResolverTypeWrapper<Magento2ProductPrice>;
  ProductPrices: ResolverTypeWrapper<Magento2ProductPrices>;
  ProductReview: ResolverTypeWrapper<Magento2ProductReview>;
  ProductReviewRating: ResolverTypeWrapper<Magento2ProductReviewRating>;
  ProductReviewRatingInput: Magento2ProductReviewRatingInput;
  ProductReviewRatingMetadata: ResolverTypeWrapper<Magento2ProductReviewRatingMetadata>;
  ProductReviewRatingValueMetadata: ResolverTypeWrapper<Magento2ProductReviewRatingValueMetadata>;
  ProductReviewRatingsMetadata: ResolverTypeWrapper<Magento2ProductReviewRatingsMetadata>;
  ProductReviews: ResolverTypeWrapper<Magento2ProductReviews>;
  ProductSortInput: Magento2ProductSortInput;
  ProductStockStatus: Magento2ProductStockStatus;
  ProductTierPrices: ResolverTypeWrapper<Magento2ProductTierPrices>;
  ProductVideo: ResolverTypeWrapper<Magento2ProductVideo>;
  Products: ResolverTypeWrapper<Magento2Products>;
  Query: ResolverTypeWrapper<{}>;
  ReCaptchaConfigurationV3: ResolverTypeWrapper<Magento2ReCaptchaConfigurationV3>;
  ReCaptchaFormEnum: Magento2ReCaptchaFormEnum;
  Region: ResolverTypeWrapper<Magento2Region>;
  RemoveCouponFromCartInput: Magento2RemoveCouponFromCartInput;
  RemoveCouponFromCartOutput: ResolverTypeWrapper<Magento2RemoveCouponFromCartOutput>;
  RemoveGiftCardFromCartInput: Magento2RemoveGiftCardFromCartInput;
  RemoveGiftCardFromCartOutput: ResolverTypeWrapper<Magento2RemoveGiftCardFromCartOutput>;
  RemoveGiftRegistryItemsOutput: ResolverTypeWrapper<Magento2RemoveGiftRegistryItemsOutput>;
  RemoveGiftRegistryOutput: ResolverTypeWrapper<Magento2RemoveGiftRegistryOutput>;
  RemoveGiftRegistryRegistrantsOutput: ResolverTypeWrapper<Magento2RemoveGiftRegistryRegistrantsOutput>;
  RemoveItemFromCartInput: Magento2RemoveItemFromCartInput;
  RemoveItemFromCartOutput: ResolverTypeWrapper<Magento2RemoveItemFromCartOutput>;
  RemoveProductsFromCompareListInput: Magento2RemoveProductsFromCompareListInput;
  RemoveProductsFromWishlistOutput: ResolverTypeWrapper<Magento2RemoveProductsFromWishlistOutput>;
  RemoveReturnTrackingInput: Magento2RemoveReturnTrackingInput;
  RemoveReturnTrackingOutput: ResolverTypeWrapper<Magento2RemoveReturnTrackingOutput>;
  RemoveRewardPointsFromCartOutput: ResolverTypeWrapper<Magento2RemoveRewardPointsFromCartOutput>;
  RemoveStoreCreditFromCartInput: Magento2RemoveStoreCreditFromCartInput;
  RemoveStoreCreditFromCartOutput: ResolverTypeWrapper<Magento2RemoveStoreCreditFromCartOutput>;
  ReorderItemsOutput: ResolverTypeWrapper<Magento2ReorderItemsOutput>;
  RequestReturnInput: Magento2RequestReturnInput;
  RequestReturnItemInput: Magento2RequestReturnItemInput;
  RequestReturnOutput: ResolverTypeWrapper<Magento2RequestReturnOutput>;
  Return: ResolverTypeWrapper<Magento2Return>;
  ReturnComment: ResolverTypeWrapper<Magento2ReturnComment>;
  ReturnCustomAttribute: ResolverTypeWrapper<Magento2ReturnCustomAttribute>;
  ReturnCustomer: ResolverTypeWrapper<Magento2ReturnCustomer>;
  ReturnItem: ResolverTypeWrapper<Magento2ReturnItem>;
  ReturnItemStatus: Magento2ReturnItemStatus;
  ReturnShipping: ResolverTypeWrapper<Magento2ReturnShipping>;
  ReturnShippingAddress: ResolverTypeWrapper<Magento2ReturnShippingAddress>;
  ReturnShippingCarrier: ResolverTypeWrapper<Magento2ReturnShippingCarrier>;
  ReturnShippingTracking: ResolverTypeWrapper<Magento2ReturnShippingTracking>;
  ReturnShippingTrackingStatus: ResolverTypeWrapper<Magento2ReturnShippingTrackingStatus>;
  ReturnShippingTrackingStatusType: Magento2ReturnShippingTrackingStatusType;
  ReturnStatus: Magento2ReturnStatus;
  Returns: ResolverTypeWrapper<Magento2Returns>;
  RevokeCustomerTokenOutput: ResolverTypeWrapper<Magento2RevokeCustomerTokenOutput>;
  RewardPoints: ResolverTypeWrapper<Magento2RewardPoints>;
  RewardPointsAmount: ResolverTypeWrapper<Magento2RewardPointsAmount>;
  RewardPointsBalanceHistoryItem: ResolverTypeWrapper<Magento2RewardPointsBalanceHistoryItem>;
  RewardPointsExchangeRates: ResolverTypeWrapper<Magento2RewardPointsExchangeRates>;
  RewardPointsRate: ResolverTypeWrapper<Magento2RewardPointsRate>;
  RewardPointsSubscriptionStatus: ResolverTypeWrapper<Magento2RewardPointsSubscriptionStatus>;
  RewardPointsSubscriptionStatusesEnum: Magento2RewardPointsSubscriptionStatusesEnum;
  RoutableInterface: Magento2ResolversTypes['BundleProduct'] | Magento2ResolversTypes['CategoryTree'] | Magento2ResolversTypes['CmsPage'] | Magento2ResolversTypes['ConfigurableProduct'] | Magento2ResolversTypes['DownloadableProduct'] | Magento2ResolversTypes['GiftCardProduct'] | Magento2ResolversTypes['GroupedProduct'] | Magento2ResolversTypes['SimpleProduct'] | Magento2ResolversTypes['VirtualProduct'];
  SalesCommentItem: ResolverTypeWrapper<Magento2SalesCommentItem>;
  SalesItemInterface: ResolverTypeWrapper<Magento2SalesItemInterface>;
  SearchResultPageInfo: ResolverTypeWrapper<Magento2SearchResultPageInfo>;
  SelectableInputTypeInterface: Magento2ResolversTypes['UiAttributeTypeBoolean'] | Magento2ResolversTypes['UiAttributeTypeMultiSelect'] | Magento2ResolversTypes['UiAttributeTypeSelect'];
  SelectedAttributeOption: ResolverTypeWrapper<Magento2SelectedAttributeOption>;
  SelectedBundleOption: ResolverTypeWrapper<Magento2SelectedBundleOption>;
  SelectedBundleOptionValue: ResolverTypeWrapper<Magento2SelectedBundleOptionValue>;
  SelectedConfigurableOption: ResolverTypeWrapper<Magento2SelectedConfigurableOption>;
  SelectedCustomAttributeInput: Magento2SelectedCustomAttributeInput;
  SelectedCustomizableOption: ResolverTypeWrapper<Magento2SelectedCustomizableOption>;
  SelectedCustomizableOptionValue: ResolverTypeWrapper<Magento2SelectedCustomizableOptionValue>;
  SelectedPaymentMethod: ResolverTypeWrapper<Magento2SelectedPaymentMethod>;
  SelectedShippingMethod: ResolverTypeWrapper<Magento2SelectedShippingMethod>;
  SendEmailToFriendInput: Magento2SendEmailToFriendInput;
  SendEmailToFriendOutput: ResolverTypeWrapper<Magento2SendEmailToFriendOutput>;
  SendEmailToFriendRecipient: ResolverTypeWrapper<Magento2SendEmailToFriendRecipient>;
  SendEmailToFriendRecipientInput: Magento2SendEmailToFriendRecipientInput;
  SendEmailToFriendSender: ResolverTypeWrapper<Magento2SendEmailToFriendSender>;
  SendEmailToFriendSenderInput: Magento2SendEmailToFriendSenderInput;
  SendFriendConfiguration: ResolverTypeWrapper<Magento2SendFriendConfiguration>;
  SetBillingAddressOnCartInput: Magento2SetBillingAddressOnCartInput;
  SetBillingAddressOnCartOutput: ResolverTypeWrapper<Magento2SetBillingAddressOnCartOutput>;
  SetGiftOptionsOnCartInput: Magento2SetGiftOptionsOnCartInput;
  SetGiftOptionsOnCartOutput: ResolverTypeWrapper<Magento2SetGiftOptionsOnCartOutput>;
  SetGuestEmailOnCartInput: Magento2SetGuestEmailOnCartInput;
  SetGuestEmailOnCartOutput: ResolverTypeWrapper<Magento2SetGuestEmailOnCartOutput>;
  SetPaymentMethodAndPlaceOrderInput: Magento2SetPaymentMethodAndPlaceOrderInput;
  SetPaymentMethodOnCartInput: Magento2SetPaymentMethodOnCartInput;
  SetPaymentMethodOnCartOutput: ResolverTypeWrapper<Magento2SetPaymentMethodOnCartOutput>;
  SetShippingAddressesOnCartInput: Magento2SetShippingAddressesOnCartInput;
  SetShippingAddressesOnCartOutput: ResolverTypeWrapper<Magento2SetShippingAddressesOnCartOutput>;
  SetShippingMethodsOnCartInput: Magento2SetShippingMethodsOnCartInput;
  SetShippingMethodsOnCartOutput: ResolverTypeWrapper<Magento2SetShippingMethodsOnCartOutput>;
  ShareGiftRegistryInviteeInput: Magento2ShareGiftRegistryInviteeInput;
  ShareGiftRegistryOutput: ResolverTypeWrapper<Magento2ShareGiftRegistryOutput>;
  ShareGiftRegistrySenderInput: Magento2ShareGiftRegistrySenderInput;
  ShipBundleItemsEnum: Magento2ShipBundleItemsEnum;
  ShipmentItem: ResolverTypeWrapper<Magento2ShipmentItem>;
  ShipmentItemInterface: Magento2ResolversTypes['BundleShipmentItem'] | Magento2ResolversTypes['GiftCardShipmentItem'] | Magento2ResolversTypes['ShipmentItem'];
  ShipmentTracking: ResolverTypeWrapper<Magento2ShipmentTracking>;
  ShippingAddressInput: Magento2ShippingAddressInput;
  ShippingCartAddress: ResolverTypeWrapper<Magento2ShippingCartAddress>;
  ShippingDiscount: ResolverTypeWrapper<Magento2ShippingDiscount>;
  ShippingHandling: ResolverTypeWrapper<Magento2ShippingHandling>;
  ShippingMethodInput: Magento2ShippingMethodInput;
  SimpleCartItem: ResolverTypeWrapper<Magento2SimpleCartItem>;
  SimpleProduct: ResolverTypeWrapper<Magento2SimpleProduct>;
  SimpleProductCartItemInput: Magento2SimpleProductCartItemInput;
  SimpleWishlistItem: ResolverTypeWrapper<Magento2SimpleWishlistItem>;
  SortEnum: Magento2SortEnum;
  SortField: ResolverTypeWrapper<Magento2SortField>;
  SortFields: ResolverTypeWrapper<Magento2SortFields>;
  StoreConfig: ResolverTypeWrapper<Magento2StoreConfig>;
  StoreLabels: ResolverTypeWrapper<Magento2StoreLabels>;
  StorefrontProperties: ResolverTypeWrapper<Magento2StorefrontProperties>;
  String: ResolverTypeWrapper<Scalars['String']>;
  SubscribeEmailToNewsletterOutput: ResolverTypeWrapper<Magento2SubscribeEmailToNewsletterOutput>;
  SubscriptionStatusesEnum: Magento2SubscriptionStatusesEnum;
  SwatchData: ResolverTypeWrapper<Magento2SwatchData>;
  SwatchDataInterface: Magento2ResolversTypes['ColorSwatchData'] | Magento2ResolversTypes['ImageSwatchData'] | Magento2ResolversTypes['TextSwatchData'];
  SwatchLayerFilterItem: ResolverTypeWrapper<Magento2SwatchLayerFilterItem>;
  SwatchLayerFilterItemInterface: Magento2ResolversTypes['SwatchLayerFilterItem'];
  TaxItem: ResolverTypeWrapper<Magento2TaxItem>;
  TextSwatchData: ResolverTypeWrapper<Magento2TextSwatchData>;
  TierPrice: ResolverTypeWrapper<Magento2TierPrice>;
  TrackingData: ResolverTypeWrapper<Magento2TrackingData>;
  UiAttributeTypeAny: ResolverTypeWrapper<Magento2UiAttributeTypeAny>;
  UiAttributeTypeBoolean: ResolverTypeWrapper<Magento2UiAttributeTypeBoolean>;
  UiAttributeTypeFixedProductTax: ResolverTypeWrapper<Magento2UiAttributeTypeFixedProductTax>;
  UiAttributeTypeMultiSelect: ResolverTypeWrapper<Magento2UiAttributeTypeMultiSelect>;
  UiAttributeTypeSelect: ResolverTypeWrapper<Magento2UiAttributeTypeSelect>;
  UiInputTypeEnum: Magento2UiInputTypeEnum;
  UiInputTypeInterface: Magento2ResolversTypes['UiAttributeTypeAny'] | Magento2ResolversTypes['UiAttributeTypeBoolean'] | Magento2ResolversTypes['UiAttributeTypeFixedProductTax'] | Magento2ResolversTypes['UiAttributeTypeMultiSelect'] | Magento2ResolversTypes['UiAttributeTypeSelect'];
  UpdateCartItemsInput: Magento2UpdateCartItemsInput;
  UpdateCartItemsOutput: ResolverTypeWrapper<Magento2UpdateCartItemsOutput>;
  UpdateGiftRegistryInput: Magento2UpdateGiftRegistryInput;
  UpdateGiftRegistryItemInput: Magento2UpdateGiftRegistryItemInput;
  UpdateGiftRegistryItemsOutput: ResolverTypeWrapper<Magento2UpdateGiftRegistryItemsOutput>;
  UpdateGiftRegistryOutput: ResolverTypeWrapper<Magento2UpdateGiftRegistryOutput>;
  UpdateGiftRegistryRegistrantInput: Magento2UpdateGiftRegistryRegistrantInput;
  UpdateGiftRegistryRegistrantsOutput: ResolverTypeWrapper<Magento2UpdateGiftRegistryRegistrantsOutput>;
  UpdateProductsInWishlistOutput: ResolverTypeWrapper<Magento2UpdateProductsInWishlistOutput>;
  UpdateWishlistOutput: ResolverTypeWrapper<Magento2UpdateWishlistOutput>;
  UrlRewrite: ResolverTypeWrapper<Magento2UrlRewrite>;
  UrlRewriteEntityTypeEnum: Magento2UrlRewriteEntityTypeEnum;
  UseInLayeredNavigationOptions: Magento2UseInLayeredNavigationOptions;
  VaultTokenInput: Magento2VaultTokenInput;
  VirtualCartItem: ResolverTypeWrapper<Magento2VirtualCartItem>;
  VirtualProduct: ResolverTypeWrapper<Magento2VirtualProduct>;
  VirtualProductCartItemInput: Magento2VirtualProductCartItemInput;
  VirtualWishlistItem: ResolverTypeWrapper<Magento2VirtualWishlistItem>;
  Website: ResolverTypeWrapper<Magento2Website>;
  WishListUserInputError: ResolverTypeWrapper<Magento2WishListUserInputError>;
  WishListUserInputErrorType: Magento2WishListUserInputErrorType;
  Wishlist: ResolverTypeWrapper<Magento2Wishlist>;
  WishlistCartUserInputError: ResolverTypeWrapper<Magento2WishlistCartUserInputError>;
  WishlistCartUserInputErrorType: Magento2WishlistCartUserInputErrorType;
  WishlistItem: ResolverTypeWrapper<Magento2WishlistItem>;
  WishlistItemCopyInput: Magento2WishlistItemCopyInput;
  WishlistItemInput: Magento2WishlistItemInput;
  WishlistItemInterface: Magento2ResolversTypes['BundleWishlistItem'] | Magento2ResolversTypes['ConfigurableWishlistItem'] | Magento2ResolversTypes['DownloadableWishlistItem'] | Magento2ResolversTypes['GiftCardWishlistItem'] | Magento2ResolversTypes['GroupedProductWishlistItem'] | Magento2ResolversTypes['SimpleWishlistItem'] | Magento2ResolversTypes['VirtualWishlistItem'];
  WishlistItemMoveInput: Magento2WishlistItemMoveInput;
  WishlistItemUpdateInput: Magento2WishlistItemUpdateInput;
  WishlistItems: ResolverTypeWrapper<Magento2WishlistItems>;
  WishlistOutput: ResolverTypeWrapper<Magento2WishlistOutput>;
  WishlistVisibilityEnum: Magento2WishlistVisibilityEnum;
  createEmptyCartInput: Magento2CreateEmptyCartInput;
  createKlarnaPaymentsSessionInput: Magento2CreateKlarnaPaymentsSessionInput;
  createKlarnaPaymentsSessionOutput: ResolverTypeWrapper<Magento2CreateKlarnaPaymentsSessionOutput>;
};

/** Mapping between all available schema types and the resolvers parents */
export type Magento2ResolversParentTypes = {
  AddBundleProductsToCartInput: Magento2AddBundleProductsToCartInput;
  AddBundleProductsToCartOutput: Magento2AddBundleProductsToCartOutput;
  AddConfigurableProductsToCartInput: Magento2AddConfigurableProductsToCartInput;
  AddConfigurableProductsToCartOutput: Magento2AddConfigurableProductsToCartOutput;
  AddDownloadableProductsToCartInput: Magento2AddDownloadableProductsToCartInput;
  AddDownloadableProductsToCartOutput: Magento2AddDownloadableProductsToCartOutput;
  AddGiftRegistryItemInput: Magento2AddGiftRegistryItemInput;
  AddGiftRegistryRegistrantInput: Magento2AddGiftRegistryRegistrantInput;
  AddGiftRegistryRegistrantsOutput: Magento2AddGiftRegistryRegistrantsOutput;
  AddProductsToCartOutput: Magento2AddProductsToCartOutput;
  AddProductsToCompareListInput: Magento2AddProductsToCompareListInput;
  AddProductsToWishlistOutput: Magento2AddProductsToWishlistOutput;
  AddReturnCommentInput: Magento2AddReturnCommentInput;
  AddReturnCommentOutput: Magento2AddReturnCommentOutput;
  AddReturnTrackingInput: Magento2AddReturnTrackingInput;
  AddReturnTrackingOutput: Magento2AddReturnTrackingOutput;
  AddSimpleProductsToCartInput: Magento2AddSimpleProductsToCartInput;
  AddSimpleProductsToCartOutput: Magento2AddSimpleProductsToCartOutput;
  AddVirtualProductsToCartInput: Magento2AddVirtualProductsToCartInput;
  AddVirtualProductsToCartOutput: Magento2AddVirtualProductsToCartOutput;
  AddWishlistItemsToCartOutput: Magento2AddWishlistItemsToCartOutput;
  Aggregation: Magento2Aggregation;
  AggregationOption: Magento2AggregationOption;
  AggregationOptionInterface: Magento2ResolversParentTypes['AggregationOption'];
  AppliedCoupon: Magento2AppliedCoupon;
  AppliedGiftCard: Magento2AppliedGiftCard;
  AppliedStoreCredit: Magento2AppliedStoreCredit;
  ApplyCouponToCartInput: Magento2ApplyCouponToCartInput;
  ApplyCouponToCartOutput: Magento2ApplyCouponToCartOutput;
  ApplyGiftCardToCartInput: Magento2ApplyGiftCardToCartInput;
  ApplyGiftCardToCartOutput: Magento2ApplyGiftCardToCartOutput;
  ApplyRewardPointsToCartOutput: Magento2ApplyRewardPointsToCartOutput;
  ApplyStoreCreditToCartInput: Magento2ApplyStoreCreditToCartInput;
  ApplyStoreCreditToCartOutput: Magento2ApplyStoreCreditToCartOutput;
  AreaInput: Magento2AreaInput;
  Assets: Magento2Assets;
  AssignCompareListToCustomerOutput: Magento2AssignCompareListToCustomerOutput;
  Attribute: Magento2Attribute;
  AttributeInput: Magento2AttributeInput;
  AttributeMetadataInterface: Magento2ResolversParentTypes['ProductAttributeMetadata'];
  AttributeOption: Magento2AttributeOption;
  AttributeOptionInterface: Magento2ResolversParentTypes['AttributeOption'];
  AttributeOptions: Magento2AttributeOptions;
  AttributeOptionsInterface: Magento2ResolversParentTypes['AttributeOptions'] | Magento2ResolversParentTypes['UiAttributeTypeBoolean'] | Magento2ResolversParentTypes['UiAttributeTypeMultiSelect'] | Magento2ResolversParentTypes['UiAttributeTypeSelect'];
  AttributesMetadata: Magento2AttributesMetadata;
  AvailablePaymentMethod: Magento2AvailablePaymentMethod;
  AvailableShippingMethod: Magento2AvailableShippingMethod;
  BillingAddressInput: Magento2BillingAddressInput;
  BillingCartAddress: Magento2BillingCartAddress;
  Boolean: Scalars['Boolean'];
  BraintreeCcVaultInput: Magento2BraintreeCcVaultInput;
  BraintreeInput: Magento2BraintreeInput;
  Breadcrumb: Magento2Breadcrumb;
  BundleCartItem: Magento2BundleCartItem;
  BundleCreditMemoItem: Magento2BundleCreditMemoItem;
  BundleInvoiceItem: Magento2BundleInvoiceItem;
  BundleItem: Magento2BundleItem;
  BundleItemOption: Magento2BundleItemOption;
  BundleOptionInput: Magento2BundleOptionInput;
  BundleOrderItem: Magento2BundleOrderItem;
  BundleProduct: Magento2BundleProduct;
  BundleProductCartItemInput: Magento2BundleProductCartItemInput;
  BundleShipmentItem: Magento2BundleShipmentItem;
  BundleWishlistItem: Magento2BundleWishlistItem;
  Cart: Magento2Cart;
  CartAddressCountry: Magento2CartAddressCountry;
  CartAddressInput: Magento2CartAddressInput;
  CartAddressInterface: Magento2ResolversParentTypes['BillingCartAddress'] | Magento2ResolversParentTypes['ShippingCartAddress'];
  CartAddressRegion: Magento2CartAddressRegion;
  CartDiscount: Magento2CartDiscount;
  CartItemError: Magento2CartItemError;
  CartItemInput: Magento2CartItemInput;
  CartItemInterface: Magento2ResolversParentTypes['BundleCartItem'] | Magento2ResolversParentTypes['ConfigurableCartItem'] | Magento2ResolversParentTypes['DownloadableCartItem'] | Magento2ResolversParentTypes['GiftCardCartItem'] | Magento2ResolversParentTypes['SimpleCartItem'] | Magento2ResolversParentTypes['VirtualCartItem'];
  CartItemPrices: Magento2CartItemPrices;
  CartItemQuantity: Magento2CartItemQuantity;
  CartItemSelectedOptionValuePrice: Magento2CartItemSelectedOptionValuePrice;
  CartItemUpdateInput: Magento2CartItemUpdateInput;
  CartPrices: Magento2CartPrices;
  CartTaxItem: Magento2CartTaxItem;
  CartUserInputError: Magento2CartUserInputError;
  Categories: Magento2Categories;
  CategoryFilterInput: Magento2CategoryFilterInput;
  CategoryInterface: Magento2ResolversParentTypes['CategoryTree'];
  CategoryProducts: Magento2CategoryProducts;
  CategoryResult: Magento2CategoryResult;
  CategoryTree: Magento2CategoryTree;
  ChatData: Magento2ChatData;
  CheckoutAgreement: Magento2CheckoutAgreement;
  CheckoutUserInputError: Magento2CheckoutUserInputError;
  CmsBlock: Magento2CmsBlock;
  CmsBlocks: Magento2CmsBlocks;
  CmsPage: Magento2CmsPage;
  ColorSwatchData: Magento2ColorSwatchData;
  ComparableAttribute: Magento2ComparableAttribute;
  ComparableItem: Magento2ComparableItem;
  CompareList: Magento2CompareList;
  ComplexTextValue: Magento2ComplexTextValue;
  ConfigurableAttributeOption: Magento2ConfigurableAttributeOption;
  ConfigurableCartItem: Magento2ConfigurableCartItem;
  ConfigurableOptionAvailableForSelection: Magento2ConfigurableOptionAvailableForSelection;
  ConfigurableProduct: Magento2ConfigurableProduct;
  ConfigurableProductCartItemInput: Magento2ConfigurableProductCartItemInput;
  ConfigurableProductOption: Magento2ConfigurableProductOption;
  ConfigurableProductOptionValue: Magento2ConfigurableProductOptionValue;
  ConfigurableProductOptions: Magento2ConfigurableProductOptions;
  ConfigurableProductOptionsSelection: Magento2ConfigurableProductOptionsSelection;
  ConfigurableProductOptionsValues: Magento2ConfigurableProductOptionsValues;
  ConfigurableVariant: Magento2ConfigurableVariant;
  ConfigurableWishlistItem: Magento2ConfigurableWishlistItem;
  ContactUsInput: Magento2ContactUsInput;
  ContactUsOutput: Magento2ContactUsOutput;
  CopyProductsBetweenWishlistsOutput: Magento2CopyProductsBetweenWishlistsOutput;
  Country: Magento2Country;
  CreateCompareListInput: Magento2CreateCompareListInput;
  CreateGiftRegistryInput: Magento2CreateGiftRegistryInput;
  CreateGiftRegistryOutput: Magento2CreateGiftRegistryOutput;
  CreatePayflowProTokenOutput: Magento2CreatePayflowProTokenOutput;
  CreateProductReviewInput: Magento2CreateProductReviewInput;
  CreateProductReviewOutput: Magento2CreateProductReviewOutput;
  CreateWishlistInput: Magento2CreateWishlistInput;
  CreateWishlistOutput: Magento2CreateWishlistOutput;
  CreditCardDetailsInput: Magento2CreditCardDetailsInput;
  CreditMemo: Magento2CreditMemo;
  CreditMemoItem: Magento2CreditMemoItem;
  CreditMemoItemInterface: Magento2ResolversParentTypes['BundleCreditMemoItem'] | Magento2ResolversParentTypes['CreditMemoItem'] | Magento2ResolversParentTypes['DownloadableCreditMemoItem'] | Magento2ResolversParentTypes['GiftCardCreditMemoItem'];
  CreditMemoTotal: Magento2CreditMemoTotal;
  Currency: Magento2Currency;
  CustomAttribute: Magento2CustomAttribute;
  CustomAttributeMetadata: Magento2CustomAttributeMetadata;
  Customer: Magento2Customer;
  CustomerAddress: Magento2CustomerAddress;
  CustomerAddressAttribute: Magento2CustomerAddressAttribute;
  CustomerAddressAttributeInput: Magento2CustomerAddressAttributeInput;
  CustomerAddressInput: Magento2CustomerAddressInput;
  CustomerAddressRegion: Magento2CustomerAddressRegion;
  CustomerAddressRegionInput: Magento2CustomerAddressRegionInput;
  CustomerCreateInput: Magento2CustomerCreateInput;
  CustomerDownloadableProduct: Magento2CustomerDownloadableProduct;
  CustomerDownloadableProducts: Magento2CustomerDownloadableProducts;
  CustomerInput: Magento2CustomerInput;
  CustomerOrder: Magento2CustomerOrder;
  CustomerOrders: Magento2CustomerOrders;
  CustomerOrdersFilterInput: Magento2CustomerOrdersFilterInput;
  CustomerOutput: Magento2CustomerOutput;
  CustomerPaymentTokens: Magento2CustomerPaymentTokens;
  CustomerStoreCredit: Magento2CustomerStoreCredit;
  CustomerStoreCreditHistory: Magento2CustomerStoreCreditHistory;
  CustomerStoreCreditHistoryItem: Magento2CustomerStoreCreditHistoryItem;
  CustomerToken: Magento2CustomerToken;
  CustomerUpdateInput: Magento2CustomerUpdateInput;
  CustomizableAreaOption: Magento2CustomizableAreaOption;
  CustomizableAreaValue: Magento2CustomizableAreaValue;
  CustomizableCheckboxOption: Magento2CustomizableCheckboxOption;
  CustomizableCheckboxValue: Magento2CustomizableCheckboxValue;
  CustomizableDateOption: Magento2CustomizableDateOption;
  CustomizableDateValue: Magento2CustomizableDateValue;
  CustomizableDropDownOption: Magento2CustomizableDropDownOption;
  CustomizableDropDownValue: Magento2CustomizableDropDownValue;
  CustomizableFieldOption: Magento2CustomizableFieldOption;
  CustomizableFieldValue: Magento2CustomizableFieldValue;
  CustomizableFileOption: Magento2CustomizableFileOption;
  CustomizableFileValue: Magento2CustomizableFileValue;
  CustomizableMultipleOption: Magento2CustomizableMultipleOption;
  CustomizableMultipleValue: Magento2CustomizableMultipleValue;
  CustomizableOptionInput: Magento2CustomizableOptionInput;
  CustomizableOptionInterface: Magento2ResolversParentTypes['CustomizableAreaOption'] | Magento2ResolversParentTypes['CustomizableCheckboxOption'] | Magento2ResolversParentTypes['CustomizableDateOption'] | Magento2ResolversParentTypes['CustomizableDropDownOption'] | Magento2ResolversParentTypes['CustomizableFieldOption'] | Magento2ResolversParentTypes['CustomizableFileOption'] | Magento2ResolversParentTypes['CustomizableMultipleOption'] | Magento2ResolversParentTypes['CustomizableRadioOption'];
  CustomizableProductInterface: Magento2ResolversParentTypes['BundleProduct'] | Magento2ResolversParentTypes['ConfigurableProduct'] | Magento2ResolversParentTypes['DownloadableProduct'] | Magento2ResolversParentTypes['GiftCardProduct'] | Magento2ResolversParentTypes['SimpleProduct'] | Magento2ResolversParentTypes['VirtualProduct'];
  CustomizableRadioOption: Magento2CustomizableRadioOption;
  CustomizableRadioValue: Magento2CustomizableRadioValue;
  DeleteCompareListOutput: Magento2DeleteCompareListOutput;
  DeletePaymentTokenOutput: Magento2DeletePaymentTokenOutput;
  DeleteWishlistOutput: Magento2DeleteWishlistOutput;
  Discount: Magento2Discount;
  DownloadableCartItem: Magento2DownloadableCartItem;
  DownloadableCreditMemoItem: Magento2DownloadableCreditMemoItem;
  DownloadableInvoiceItem: Magento2DownloadableInvoiceItem;
  DownloadableItemsLinks: Magento2DownloadableItemsLinks;
  DownloadableOrderItem: Magento2DownloadableOrderItem;
  DownloadableProduct: Magento2DownloadableProduct;
  DownloadableProductCartItemInput: Magento2DownloadableProductCartItemInput;
  DownloadableProductLinks: Magento2DownloadableProductLinks;
  DownloadableProductLinksInput: Magento2DownloadableProductLinksInput;
  DownloadableProductSamples: Magento2DownloadableProductSamples;
  DownloadableWishlistItem: Magento2DownloadableWishlistItem;
  DynamicBlock: Magento2DynamicBlock;
  DynamicBlocks: Magento2DynamicBlocks;
  DynamicBlocksFilterInput: Magento2DynamicBlocksFilterInput;
  EnteredAttributeValue: Magento2EnteredAttributeValue;
  EnteredCustomAttributeInput: Magento2EnteredCustomAttributeInput;
  EnteredOptionInput: Magento2EnteredOptionInput;
  EntityUrl: Magento2EntityUrl;
  ExchangeRate: Magento2ExchangeRate;
  FilterEqualTypeInput: Magento2FilterEqualTypeInput;
  FilterMatchTypeInput: Magento2FilterMatchTypeInput;
  FilterRangeTypeInput: Magento2FilterRangeTypeInput;
  FilterStringTypeInput: Magento2FilterStringTypeInput;
  FilterTypeInput: Magento2FilterTypeInput;
  FixedProductTax: Magento2FixedProductTax;
  Float: Scalars['Float'];
  GenerateCustomerTokenAsAdminInput: Magento2GenerateCustomerTokenAsAdminInput;
  GenerateCustomerTokenAsAdminOutput: Magento2GenerateCustomerTokenAsAdminOutput;
  GiftCardAccount: Magento2GiftCardAccount;
  GiftCardAccountInput: Magento2GiftCardAccountInput;
  GiftCardAmounts: Magento2GiftCardAmounts;
  GiftCardCartItem: Magento2GiftCardCartItem;
  GiftCardCreditMemoItem: Magento2GiftCardCreditMemoItem;
  GiftCardInvoiceItem: Magento2GiftCardInvoiceItem;
  GiftCardItem: Magento2GiftCardItem;
  GiftCardOptions: Magento2GiftCardOptions;
  GiftCardOrderItem: Magento2GiftCardOrderItem;
  GiftCardProduct: Magento2GiftCardProduct;
  GiftCardShipmentItem: Magento2GiftCardShipmentItem;
  GiftCardWishlistItem: Magento2GiftCardWishlistItem;
  GiftMessage: Magento2GiftMessage;
  GiftMessageInput: Magento2GiftMessageInput;
  GiftOptionsPrices: Magento2GiftOptionsPrices;
  GiftRegistry: Magento2GiftRegistry;
  GiftRegistryDynamicAttribute: Magento2GiftRegistryDynamicAttribute;
  GiftRegistryDynamicAttributeInput: Magento2GiftRegistryDynamicAttributeInput;
  GiftRegistryDynamicAttributeInterface: Magento2ResolversParentTypes['GiftRegistryDynamicAttribute'] | Magento2ResolversParentTypes['GiftRegistryRegistrantDynamicAttribute'];
  GiftRegistryDynamicAttributeMetadata: Magento2GiftRegistryDynamicAttributeMetadata;
  GiftRegistryDynamicAttributeMetadataInterface: Magento2ResolversParentTypes['GiftRegistryDynamicAttributeMetadata'];
  GiftRegistryItem: Magento2GiftRegistryItem;
  GiftRegistryItemInterface: Magento2ResolversParentTypes['GiftRegistryItem'];
  GiftRegistryItemUserErrorInterface: Magento2ResolversParentTypes['GiftRegistryItemUserErrors'] | Magento2ResolversParentTypes['MoveCartItemsToGiftRegistryOutput'];
  GiftRegistryItemUserErrors: Magento2GiftRegistryItemUserErrors;
  GiftRegistryItemsUserError: Magento2GiftRegistryItemsUserError;
  GiftRegistryOutput: Magento2GiftRegistryOutput;
  GiftRegistryOutputInterface: Magento2ResolversParentTypes['GiftRegistryOutput'] | Magento2ResolversParentTypes['MoveCartItemsToGiftRegistryOutput'];
  GiftRegistryRegistrant: Magento2GiftRegistryRegistrant;
  GiftRegistryRegistrantDynamicAttribute: Magento2GiftRegistryRegistrantDynamicAttribute;
  GiftRegistrySearchResult: Magento2GiftRegistrySearchResult;
  GiftRegistryShippingAddressInput: Magento2GiftRegistryShippingAddressInput;
  GiftRegistryType: Magento2GiftRegistryType;
  GiftWrapping: Magento2GiftWrapping;
  GiftWrappingImage: Magento2GiftWrappingImage;
  GroupedProduct: Magento2GroupedProduct;
  GroupedProductItem: Magento2GroupedProductItem;
  GroupedProductWishlistItem: Magento2GroupedProductWishlistItem;
  HostedProInput: Magento2HostedProInput;
  HostedProUrl: Magento2HostedProUrl;
  HostedProUrlInput: Magento2HostedProUrlInput;
  HttpQueryParameter: Magento2HttpQueryParameter;
  ID: Scalars['ID'];
  ImageSwatchData: Magento2ImageSwatchData;
  Int: Scalars['Int'];
  Invoice: Magento2Invoice;
  InvoiceItem: Magento2InvoiceItem;
  InvoiceItemInterface: Magento2ResolversParentTypes['BundleInvoiceItem'] | Magento2ResolversParentTypes['DownloadableInvoiceItem'] | Magento2ResolversParentTypes['GiftCardInvoiceItem'] | Magento2ResolversParentTypes['InvoiceItem'];
  InvoiceTotal: Magento2InvoiceTotal;
  IsConfigSettingEnabledOutput: Magento2IsConfigSettingEnabledOutput;
  IsEmailAvailableOutput: Magento2IsEmailAvailableOutput;
  ItemSelectedBundleOption: Magento2ItemSelectedBundleOption;
  ItemSelectedBundleOptionValue: Magento2ItemSelectedBundleOptionValue;
  KeyValue: Magento2KeyValue;
  KlarnaInput: Magento2KlarnaInput;
  LayerFilter: Magento2LayerFilter;
  LayerFilterItem: Magento2LayerFilterItem;
  LayerFilterItemInterface: Magento2ResolversParentTypes['LayerFilterItem'] | Magento2ResolversParentTypes['SwatchLayerFilterItem'];
  MediaGalleryEntry: Magento2MediaGalleryEntry;
  MediaGalleryInterface: Magento2ResolversParentTypes['ProductImage'] | Magento2ResolversParentTypes['ProductVideo'];
  Money: Magento2Money;
  MoveCartItemsToGiftRegistryOutput: Magento2MoveCartItemsToGiftRegistryOutput;
  MoveProductsBetweenWishlistsOutput: Magento2MoveProductsBetweenWishlistsOutput;
  Mutation: {};
  Order: Magento2Order;
  OrderAddress: Magento2OrderAddress;
  OrderItem: Magento2OrderItem;
  OrderItemInterface: Magento2ResolversParentTypes['BundleOrderItem'] | Magento2ResolversParentTypes['DownloadableOrderItem'] | Magento2ResolversParentTypes['GiftCardOrderItem'] | Magento2ResolversParentTypes['OrderItem'];
  OrderItemOption: Magento2OrderItemOption;
  OrderPaymentMethod: Magento2OrderPaymentMethod;
  OrderShipment: Magento2OrderShipment;
  OrderTotal: Magento2OrderTotal;
  PayflowExpressInput: Magento2PayflowExpressInput;
  PayflowLinkInput: Magento2PayflowLinkInput;
  PayflowLinkToken: Magento2PayflowLinkToken;
  PayflowLinkTokenInput: Magento2PayflowLinkTokenInput;
  PayflowProInput: Magento2PayflowProInput;
  PayflowProResponseInput: Magento2PayflowProResponseInput;
  PayflowProResponseOutput: Magento2PayflowProResponseOutput;
  PayflowProToken: Magento2PayflowProToken;
  PayflowProTokenInput: Magento2PayflowProTokenInput;
  PayflowProUrlInput: Magento2PayflowProUrlInput;
  PaymentMethodInput: Magento2PaymentMethodInput;
  PaymentToken: Magento2PaymentToken;
  PaypalExpressInput: Magento2PaypalExpressInput;
  PaypalExpressToken: Magento2PaypalExpressToken;
  PaypalExpressTokenInput: Magento2PaypalExpressTokenInput;
  PaypalExpressTokenOutput: Magento2PaypalExpressTokenOutput;
  PaypalExpressUrlList: Magento2PaypalExpressUrlList;
  PaypalExpressUrlsInput: Magento2PaypalExpressUrlsInput;
  PhysicalProductInterface: Magento2ResolversParentTypes['BundleProduct'] | Magento2ResolversParentTypes['ConfigurableProduct'] | Magento2ResolversParentTypes['GiftCardProduct'] | Magento2ResolversParentTypes['GroupedProduct'] | Magento2ResolversParentTypes['SimpleProduct'];
  PickupLocation: Magento2PickupLocation;
  PickupLocationFilterInput: Magento2PickupLocationFilterInput;
  PickupLocationSortInput: Magento2PickupLocationSortInput;
  PickupLocations: Magento2PickupLocations;
  PlaceOrderInput: Magento2PlaceOrderInput;
  PlaceOrderOutput: Magento2PlaceOrderOutput;
  Price: Magento2Price;
  PriceAdjustment: Magento2PriceAdjustment;
  PriceRange: Magento2PriceRange;
  ProductAttribute: Magento2ProductAttribute;
  ProductAttributeFilterInput: Magento2ProductAttributeFilterInput;
  ProductAttributeMetadata: Magento2ProductAttributeMetadata;
  ProductAttributeSortInput: Magento2ProductAttributeSortInput;
  ProductDiscount: Magento2ProductDiscount;
  ProductFilterInput: Magento2ProductFilterInput;
  ProductImage: Magento2ProductImage;
  ProductInfoInput: Magento2ProductInfoInput;
  ProductInterface: Magento2ResolversParentTypes['BundleProduct'] | Magento2ResolversParentTypes['ConfigurableProduct'] | Magento2ResolversParentTypes['DownloadableProduct'] | Magento2ResolversParentTypes['GiftCardProduct'] | Magento2ResolversParentTypes['GroupedProduct'] | Magento2ResolversParentTypes['SimpleProduct'] | Magento2ResolversParentTypes['VirtualProduct'];
  ProductLinks: Magento2ProductLinks;
  ProductLinksInterface: Magento2ResolversParentTypes['ProductLinks'];
  ProductMediaGalleryEntriesContent: Magento2ProductMediaGalleryEntriesContent;
  ProductMediaGalleryEntriesVideoContent: Magento2ProductMediaGalleryEntriesVideoContent;
  ProductPrice: Magento2ProductPrice;
  ProductPrices: Magento2ProductPrices;
  ProductReview: Magento2ProductReview;
  ProductReviewRating: Magento2ProductReviewRating;
  ProductReviewRatingInput: Magento2ProductReviewRatingInput;
  ProductReviewRatingMetadata: Magento2ProductReviewRatingMetadata;
  ProductReviewRatingValueMetadata: Magento2ProductReviewRatingValueMetadata;
  ProductReviewRatingsMetadata: Magento2ProductReviewRatingsMetadata;
  ProductReviews: Magento2ProductReviews;
  ProductSortInput: Magento2ProductSortInput;
  ProductTierPrices: Magento2ProductTierPrices;
  ProductVideo: Magento2ProductVideo;
  Products: Magento2Products;
  Query: {};
  ReCaptchaConfigurationV3: Magento2ReCaptchaConfigurationV3;
  Region: Magento2Region;
  RemoveCouponFromCartInput: Magento2RemoveCouponFromCartInput;
  RemoveCouponFromCartOutput: Magento2RemoveCouponFromCartOutput;
  RemoveGiftCardFromCartInput: Magento2RemoveGiftCardFromCartInput;
  RemoveGiftCardFromCartOutput: Magento2RemoveGiftCardFromCartOutput;
  RemoveGiftRegistryItemsOutput: Magento2RemoveGiftRegistryItemsOutput;
  RemoveGiftRegistryOutput: Magento2RemoveGiftRegistryOutput;
  RemoveGiftRegistryRegistrantsOutput: Magento2RemoveGiftRegistryRegistrantsOutput;
  RemoveItemFromCartInput: Magento2RemoveItemFromCartInput;
  RemoveItemFromCartOutput: Magento2RemoveItemFromCartOutput;
  RemoveProductsFromCompareListInput: Magento2RemoveProductsFromCompareListInput;
  RemoveProductsFromWishlistOutput: Magento2RemoveProductsFromWishlistOutput;
  RemoveReturnTrackingInput: Magento2RemoveReturnTrackingInput;
  RemoveReturnTrackingOutput: Magento2RemoveReturnTrackingOutput;
  RemoveRewardPointsFromCartOutput: Magento2RemoveRewardPointsFromCartOutput;
  RemoveStoreCreditFromCartInput: Magento2RemoveStoreCreditFromCartInput;
  RemoveStoreCreditFromCartOutput: Magento2RemoveStoreCreditFromCartOutput;
  ReorderItemsOutput: Magento2ReorderItemsOutput;
  RequestReturnInput: Magento2RequestReturnInput;
  RequestReturnItemInput: Magento2RequestReturnItemInput;
  RequestReturnOutput: Magento2RequestReturnOutput;
  Return: Magento2Return;
  ReturnComment: Magento2ReturnComment;
  ReturnCustomAttribute: Magento2ReturnCustomAttribute;
  ReturnCustomer: Magento2ReturnCustomer;
  ReturnItem: Magento2ReturnItem;
  ReturnShipping: Magento2ReturnShipping;
  ReturnShippingAddress: Magento2ReturnShippingAddress;
  ReturnShippingCarrier: Magento2ReturnShippingCarrier;
  ReturnShippingTracking: Magento2ReturnShippingTracking;
  ReturnShippingTrackingStatus: Magento2ReturnShippingTrackingStatus;
  Returns: Magento2Returns;
  RevokeCustomerTokenOutput: Magento2RevokeCustomerTokenOutput;
  RewardPoints: Magento2RewardPoints;
  RewardPointsAmount: Magento2RewardPointsAmount;
  RewardPointsBalanceHistoryItem: Magento2RewardPointsBalanceHistoryItem;
  RewardPointsExchangeRates: Magento2RewardPointsExchangeRates;
  RewardPointsRate: Magento2RewardPointsRate;
  RewardPointsSubscriptionStatus: Magento2RewardPointsSubscriptionStatus;
  RoutableInterface: Magento2ResolversParentTypes['BundleProduct'] | Magento2ResolversParentTypes['CategoryTree'] | Magento2ResolversParentTypes['CmsPage'] | Magento2ResolversParentTypes['ConfigurableProduct'] | Magento2ResolversParentTypes['DownloadableProduct'] | Magento2ResolversParentTypes['GiftCardProduct'] | Magento2ResolversParentTypes['GroupedProduct'] | Magento2ResolversParentTypes['SimpleProduct'] | Magento2ResolversParentTypes['VirtualProduct'];
  SalesCommentItem: Magento2SalesCommentItem;
  SalesItemInterface: Magento2SalesItemInterface;
  SearchResultPageInfo: Magento2SearchResultPageInfo;
  SelectableInputTypeInterface: Magento2ResolversParentTypes['UiAttributeTypeBoolean'] | Magento2ResolversParentTypes['UiAttributeTypeMultiSelect'] | Magento2ResolversParentTypes['UiAttributeTypeSelect'];
  SelectedAttributeOption: Magento2SelectedAttributeOption;
  SelectedBundleOption: Magento2SelectedBundleOption;
  SelectedBundleOptionValue: Magento2SelectedBundleOptionValue;
  SelectedConfigurableOption: Magento2SelectedConfigurableOption;
  SelectedCustomAttributeInput: Magento2SelectedCustomAttributeInput;
  SelectedCustomizableOption: Magento2SelectedCustomizableOption;
  SelectedCustomizableOptionValue: Magento2SelectedCustomizableOptionValue;
  SelectedPaymentMethod: Magento2SelectedPaymentMethod;
  SelectedShippingMethod: Magento2SelectedShippingMethod;
  SendEmailToFriendInput: Magento2SendEmailToFriendInput;
  SendEmailToFriendOutput: Magento2SendEmailToFriendOutput;
  SendEmailToFriendRecipient: Magento2SendEmailToFriendRecipient;
  SendEmailToFriendRecipientInput: Magento2SendEmailToFriendRecipientInput;
  SendEmailToFriendSender: Magento2SendEmailToFriendSender;
  SendEmailToFriendSenderInput: Magento2SendEmailToFriendSenderInput;
  SendFriendConfiguration: Magento2SendFriendConfiguration;
  SetBillingAddressOnCartInput: Magento2SetBillingAddressOnCartInput;
  SetBillingAddressOnCartOutput: Magento2SetBillingAddressOnCartOutput;
  SetGiftOptionsOnCartInput: Magento2SetGiftOptionsOnCartInput;
  SetGiftOptionsOnCartOutput: Magento2SetGiftOptionsOnCartOutput;
  SetGuestEmailOnCartInput: Magento2SetGuestEmailOnCartInput;
  SetGuestEmailOnCartOutput: Magento2SetGuestEmailOnCartOutput;
  SetPaymentMethodAndPlaceOrderInput: Magento2SetPaymentMethodAndPlaceOrderInput;
  SetPaymentMethodOnCartInput: Magento2SetPaymentMethodOnCartInput;
  SetPaymentMethodOnCartOutput: Magento2SetPaymentMethodOnCartOutput;
  SetShippingAddressesOnCartInput: Magento2SetShippingAddressesOnCartInput;
  SetShippingAddressesOnCartOutput: Magento2SetShippingAddressesOnCartOutput;
  SetShippingMethodsOnCartInput: Magento2SetShippingMethodsOnCartInput;
  SetShippingMethodsOnCartOutput: Magento2SetShippingMethodsOnCartOutput;
  ShareGiftRegistryInviteeInput: Magento2ShareGiftRegistryInviteeInput;
  ShareGiftRegistryOutput: Magento2ShareGiftRegistryOutput;
  ShareGiftRegistrySenderInput: Magento2ShareGiftRegistrySenderInput;
  ShipmentItem: Magento2ShipmentItem;
  ShipmentItemInterface: Magento2ResolversParentTypes['BundleShipmentItem'] | Magento2ResolversParentTypes['GiftCardShipmentItem'] | Magento2ResolversParentTypes['ShipmentItem'];
  ShipmentTracking: Magento2ShipmentTracking;
  ShippingAddressInput: Magento2ShippingAddressInput;
  ShippingCartAddress: Magento2ShippingCartAddress;
  ShippingDiscount: Magento2ShippingDiscount;
  ShippingHandling: Magento2ShippingHandling;
  ShippingMethodInput: Magento2ShippingMethodInput;
  SimpleCartItem: Magento2SimpleCartItem;
  SimpleProduct: Magento2SimpleProduct;
  SimpleProductCartItemInput: Magento2SimpleProductCartItemInput;
  SimpleWishlistItem: Magento2SimpleWishlistItem;
  SortField: Magento2SortField;
  SortFields: Magento2SortFields;
  StoreConfig: Magento2StoreConfig;
  StoreLabels: Magento2StoreLabels;
  StorefrontProperties: Magento2StorefrontProperties;
  String: Scalars['String'];
  SubscribeEmailToNewsletterOutput: Magento2SubscribeEmailToNewsletterOutput;
  SwatchData: Magento2SwatchData;
  SwatchDataInterface: Magento2ResolversParentTypes['ColorSwatchData'] | Magento2ResolversParentTypes['ImageSwatchData'] | Magento2ResolversParentTypes['TextSwatchData'];
  SwatchLayerFilterItem: Magento2SwatchLayerFilterItem;
  SwatchLayerFilterItemInterface: Magento2ResolversParentTypes['SwatchLayerFilterItem'];
  TaxItem: Magento2TaxItem;
  TextSwatchData: Magento2TextSwatchData;
  TierPrice: Magento2TierPrice;
  TrackingData: Magento2TrackingData;
  UiAttributeTypeAny: Magento2UiAttributeTypeAny;
  UiAttributeTypeBoolean: Magento2UiAttributeTypeBoolean;
  UiAttributeTypeFixedProductTax: Magento2UiAttributeTypeFixedProductTax;
  UiAttributeTypeMultiSelect: Magento2UiAttributeTypeMultiSelect;
  UiAttributeTypeSelect: Magento2UiAttributeTypeSelect;
  UiInputTypeInterface: Magento2ResolversParentTypes['UiAttributeTypeAny'] | Magento2ResolversParentTypes['UiAttributeTypeBoolean'] | Magento2ResolversParentTypes['UiAttributeTypeFixedProductTax'] | Magento2ResolversParentTypes['UiAttributeTypeMultiSelect'] | Magento2ResolversParentTypes['UiAttributeTypeSelect'];
  UpdateCartItemsInput: Magento2UpdateCartItemsInput;
  UpdateCartItemsOutput: Magento2UpdateCartItemsOutput;
  UpdateGiftRegistryInput: Magento2UpdateGiftRegistryInput;
  UpdateGiftRegistryItemInput: Magento2UpdateGiftRegistryItemInput;
  UpdateGiftRegistryItemsOutput: Magento2UpdateGiftRegistryItemsOutput;
  UpdateGiftRegistryOutput: Magento2UpdateGiftRegistryOutput;
  UpdateGiftRegistryRegistrantInput: Magento2UpdateGiftRegistryRegistrantInput;
  UpdateGiftRegistryRegistrantsOutput: Magento2UpdateGiftRegistryRegistrantsOutput;
  UpdateProductsInWishlistOutput: Magento2UpdateProductsInWishlistOutput;
  UpdateWishlistOutput: Magento2UpdateWishlistOutput;
  UrlRewrite: Magento2UrlRewrite;
  VaultTokenInput: Magento2VaultTokenInput;
  VirtualCartItem: Magento2VirtualCartItem;
  VirtualProduct: Magento2VirtualProduct;
  VirtualProductCartItemInput: Magento2VirtualProductCartItemInput;
  VirtualWishlistItem: Magento2VirtualWishlistItem;
  Website: Magento2Website;
  WishListUserInputError: Magento2WishListUserInputError;
  Wishlist: Magento2Wishlist;
  WishlistCartUserInputError: Magento2WishlistCartUserInputError;
  WishlistItem: Magento2WishlistItem;
  WishlistItemCopyInput: Magento2WishlistItemCopyInput;
  WishlistItemInput: Magento2WishlistItemInput;
  WishlistItemInterface: Magento2ResolversParentTypes['BundleWishlistItem'] | Magento2ResolversParentTypes['ConfigurableWishlistItem'] | Magento2ResolversParentTypes['DownloadableWishlistItem'] | Magento2ResolversParentTypes['GiftCardWishlistItem'] | Magento2ResolversParentTypes['GroupedProductWishlistItem'] | Magento2ResolversParentTypes['SimpleWishlistItem'] | Magento2ResolversParentTypes['VirtualWishlistItem'];
  WishlistItemMoveInput: Magento2WishlistItemMoveInput;
  WishlistItemUpdateInput: Magento2WishlistItemUpdateInput;
  WishlistItems: Magento2WishlistItems;
  WishlistOutput: Magento2WishlistOutput;
  createEmptyCartInput: Magento2CreateEmptyCartInput;
  createKlarnaPaymentsSessionInput: Magento2CreateKlarnaPaymentsSessionInput;
  createKlarnaPaymentsSessionOutput: Magento2CreateKlarnaPaymentsSessionOutput;
};

export type Magento2ClientDirectiveArgs = { };

export type Magento2ClientDirectiveResolver<Result, Parent, ContextType = any, Args = Magento2ClientDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type Magento2AddBundleProductsToCartOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['AddBundleProductsToCartOutput'] = Magento2ResolversParentTypes['AddBundleProductsToCartOutput']> = {
  cart?: Resolver<Magento2ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2AddConfigurableProductsToCartOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['AddConfigurableProductsToCartOutput'] = Magento2ResolversParentTypes['AddConfigurableProductsToCartOutput']> = {
  cart?: Resolver<Magento2ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2AddDownloadableProductsToCartOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['AddDownloadableProductsToCartOutput'] = Magento2ResolversParentTypes['AddDownloadableProductsToCartOutput']> = {
  cart?: Resolver<Magento2ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2AddGiftRegistryRegistrantsOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['AddGiftRegistryRegistrantsOutput'] = Magento2ResolversParentTypes['AddGiftRegistryRegistrantsOutput']> = {
  gift_registry?: Resolver<Maybe<Magento2ResolversTypes['GiftRegistry']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2AddProductsToCartOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['AddProductsToCartOutput'] = Magento2ResolversParentTypes['AddProductsToCartOutput']> = {
  cart?: Resolver<Magento2ResolversTypes['Cart'], ParentType, ContextType>;
  user_errors?: Resolver<Array<Maybe<Magento2ResolversTypes['CartUserInputError']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2AddProductsToWishlistOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['AddProductsToWishlistOutput'] = Magento2ResolversParentTypes['AddProductsToWishlistOutput']> = {
  user_errors?: Resolver<Array<Maybe<Magento2ResolversTypes['WishListUserInputError']>>, ParentType, ContextType>;
  wishlist?: Resolver<Magento2ResolversTypes['Wishlist'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2AddReturnCommentOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['AddReturnCommentOutput'] = Magento2ResolversParentTypes['AddReturnCommentOutput']> = {
  return?: Resolver<Maybe<Magento2ResolversTypes['Return']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2AddReturnTrackingOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['AddReturnTrackingOutput'] = Magento2ResolversParentTypes['AddReturnTrackingOutput']> = {
  return?: Resolver<Maybe<Magento2ResolversTypes['Return']>, ParentType, ContextType>;
  return_shipping_tracking?: Resolver<Maybe<Magento2ResolversTypes['ReturnShippingTracking']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2AddSimpleProductsToCartOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['AddSimpleProductsToCartOutput'] = Magento2ResolversParentTypes['AddSimpleProductsToCartOutput']> = {
  cart?: Resolver<Magento2ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2AddVirtualProductsToCartOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['AddVirtualProductsToCartOutput'] = Magento2ResolversParentTypes['AddVirtualProductsToCartOutput']> = {
  cart?: Resolver<Magento2ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2AddWishlistItemsToCartOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['AddWishlistItemsToCartOutput'] = Magento2ResolversParentTypes['AddWishlistItemsToCartOutput']> = {
  add_wishlist_items_to_cart_user_errors?: Resolver<Array<Maybe<Magento2ResolversTypes['WishlistCartUserInputError']>>, ParentType, ContextType>;
  status?: Resolver<Magento2ResolversTypes['Boolean'], ParentType, ContextType>;
  wishlist?: Resolver<Magento2ResolversTypes['Wishlist'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2AggregationResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['Aggregation'] = Magento2ResolversParentTypes['Aggregation']> = {
  attribute_code?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  count?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  label?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['AggregationOption']>>>, ParentType, ContextType>;
  position?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2AggregationOptionResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['AggregationOption'] = Magento2ResolversParentTypes['AggregationOption']> = {
  count?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  label?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2AggregationOptionInterfaceResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['AggregationOptionInterface'] = Magento2ResolversParentTypes['AggregationOptionInterface']> = {
  __resolveType: TypeResolveFn<'AggregationOption', ParentType, ContextType>;
  count?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  label?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
};

export type Magento2AppliedCouponResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['AppliedCoupon'] = Magento2ResolversParentTypes['AppliedCoupon']> = {
  code?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2AppliedGiftCardResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['AppliedGiftCard'] = Magento2ResolversParentTypes['AppliedGiftCard']> = {
  applied_balance?: Resolver<Maybe<Magento2ResolversTypes['Money']>, ParentType, ContextType>;
  code?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  current_balance?: Resolver<Maybe<Magento2ResolversTypes['Money']>, ParentType, ContextType>;
  expiration_date?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2AppliedStoreCreditResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['AppliedStoreCredit'] = Magento2ResolversParentTypes['AppliedStoreCredit']> = {
  applied_balance?: Resolver<Maybe<Magento2ResolversTypes['Money']>, ParentType, ContextType>;
  current_balance?: Resolver<Maybe<Magento2ResolversTypes['Money']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ApplyCouponToCartOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ApplyCouponToCartOutput'] = Magento2ResolversParentTypes['ApplyCouponToCartOutput']> = {
  cart?: Resolver<Magento2ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ApplyGiftCardToCartOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ApplyGiftCardToCartOutput'] = Magento2ResolversParentTypes['ApplyGiftCardToCartOutput']> = {
  cart?: Resolver<Magento2ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ApplyRewardPointsToCartOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ApplyRewardPointsToCartOutput'] = Magento2ResolversParentTypes['ApplyRewardPointsToCartOutput']> = {
  cart?: Resolver<Magento2ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ApplyStoreCreditToCartOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ApplyStoreCreditToCartOutput'] = Magento2ResolversParentTypes['ApplyStoreCreditToCartOutput']> = {
  cart?: Resolver<Magento2ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2AssetsResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['Assets'] = Magento2ResolversParentTypes['Assets']> = {
  descriptive?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  standard?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2AssignCompareListToCustomerOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['AssignCompareListToCustomerOutput'] = Magento2ResolversParentTypes['AssignCompareListToCustomerOutput']> = {
  compare_list?: Resolver<Maybe<Magento2ResolversTypes['CompareList']>, ParentType, ContextType>;
  result?: Resolver<Magento2ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2AttributeResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['Attribute'] = Magento2ResolversParentTypes['Attribute']> = {
  attribute_code?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  attribute_options?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['AttributeOption']>>>, ParentType, ContextType>;
  attribute_type?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  entity_type?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  input_type?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  storefront_properties?: Resolver<Maybe<Magento2ResolversTypes['StorefrontProperties']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2AttributeMetadataInterfaceResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['AttributeMetadataInterface'] = Magento2ResolversParentTypes['AttributeMetadataInterface']> = {
  __resolveType: TypeResolveFn<'ProductAttributeMetadata', ParentType, ContextType>;
  attribute_labels?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['StoreLabels']>>>, ParentType, ContextType>;
  code?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  data_type?: Resolver<Maybe<Magento2ResolversTypes['ObjectDataTypeEnum']>, ParentType, ContextType>;
  entity_type?: Resolver<Maybe<Magento2ResolversTypes['AttributeEntityTypeEnum']>, ParentType, ContextType>;
  is_system?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  ui_input?: Resolver<Maybe<Magento2ResolversTypes['UiInputTypeInterface']>, ParentType, ContextType>;
  uid?: Resolver<Maybe<Magento2ResolversTypes['ID']>, ParentType, ContextType>;
};

export type Magento2AttributeOptionResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['AttributeOption'] = Magento2ResolversParentTypes['AttributeOption']> = {
  is_default?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2AttributeOptionInterfaceResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['AttributeOptionInterface'] = Magento2ResolversParentTypes['AttributeOptionInterface']> = {
  __resolveType: TypeResolveFn<'AttributeOption', ParentType, ContextType>;
  is_default?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
};

export type Magento2AttributeOptionsResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['AttributeOptions'] = Magento2ResolversParentTypes['AttributeOptions']> = {
  attribute_options?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['AttributeOptionInterface']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2AttributeOptionsInterfaceResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['AttributeOptionsInterface'] = Magento2ResolversParentTypes['AttributeOptionsInterface']> = {
  __resolveType: TypeResolveFn<'AttributeOptions' | 'UiAttributeTypeBoolean' | 'UiAttributeTypeMultiSelect' | 'UiAttributeTypeSelect', ParentType, ContextType>;
  attribute_options?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['AttributeOptionInterface']>>>, ParentType, ContextType>;
};

export type Magento2AttributesMetadataResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['AttributesMetadata'] = Magento2ResolversParentTypes['AttributesMetadata']> = {
  items?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['AttributeMetadataInterface']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2AvailablePaymentMethodResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['AvailablePaymentMethod'] = Magento2ResolversParentTypes['AvailablePaymentMethod']> = {
  code?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2AvailableShippingMethodResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['AvailableShippingMethod'] = Magento2ResolversParentTypes['AvailableShippingMethod']> = {
  amount?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  available?: Resolver<Magento2ResolversTypes['Boolean'], ParentType, ContextType>;
  base_amount?: Resolver<Maybe<Magento2ResolversTypes['Money']>, ParentType, ContextType>;
  carrier_code?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  carrier_title?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  error_message?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  method_code?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  method_title?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  price_excl_tax?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  price_incl_tax?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2BillingCartAddressResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['BillingCartAddress'] = Magento2ResolversParentTypes['BillingCartAddress']> = {
  city?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  company?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Magento2ResolversTypes['CartAddressCountry'], ParentType, ContextType>;
  customer_notes?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  firstname?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  lastname?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  postcode?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<Magento2ResolversTypes['CartAddressRegion']>, ParentType, ContextType>;
  street?: Resolver<Array<Maybe<Magento2ResolversTypes['String']>>, ParentType, ContextType>;
  telephone?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2BreadcrumbResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['Breadcrumb'] = Magento2ResolversParentTypes['Breadcrumb']> = {
  category_id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  category_level?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  category_name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  category_uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  category_url_key?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  category_url_path?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2BundleCartItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['BundleCartItem'] = Magento2ResolversParentTypes['BundleCartItem']> = {
  available_gift_wrapping?: Resolver<Array<Maybe<Magento2ResolversTypes['GiftWrapping']>>, ParentType, ContextType>;
  bundle_options?: Resolver<Array<Maybe<Magento2ResolversTypes['SelectedBundleOption']>>, ParentType, ContextType>;
  customizable_options?: Resolver<Array<Maybe<Magento2ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CartItemError']>>>, ParentType, ContextType>;
  gift_message?: Resolver<Maybe<Magento2ResolversTypes['GiftMessage']>, ParentType, ContextType>;
  gift_wrapping?: Resolver<Maybe<Magento2ResolversTypes['GiftWrapping']>, ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  prices?: Resolver<Maybe<Magento2ResolversTypes['CartItemPrices']>, ParentType, ContextType>;
  product?: Resolver<Magento2ResolversTypes['ProductInterface'], ParentType, ContextType>;
  quantity?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2BundleCreditMemoItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['BundleCreditMemoItem'] = Magento2ResolversParentTypes['BundleCreditMemoItem']> = {
  bundle_options?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ItemSelectedBundleOption']>>>, ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['Discount']>>>, ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<Magento2ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  quantity_refunded?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2BundleInvoiceItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['BundleInvoiceItem'] = Magento2ResolversParentTypes['BundleInvoiceItem']> = {
  bundle_options?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ItemSelectedBundleOption']>>>, ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['Discount']>>>, ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<Magento2ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  quantity_invoiced?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2BundleItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['BundleItem'] = Magento2ResolversParentTypes['BundleItem']> = {
  option_id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['BundleItemOption']>>>, ParentType, ContextType>;
  position?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  required?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<Maybe<Magento2ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2BundleItemOptionResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['BundleItemOption'] = Magento2ResolversParentTypes['BundleItemOption']> = {
  can_change_quantity?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  is_default?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  price_type?: Resolver<Maybe<Magento2ResolversTypes['PriceTypeEnum']>, ParentType, ContextType>;
  product?: Resolver<Maybe<Magento2ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  qty?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2BundleOrderItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['BundleOrderItem'] = Magento2ResolversParentTypes['BundleOrderItem']> = {
  bundle_options?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ItemSelectedBundleOption']>>>, ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['Discount']>>>, ParentType, ContextType>;
  eligible_for_return?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  entered_options?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['OrderItemOption']>>>, ParentType, ContextType>;
  gift_wrapping?: Resolver<Maybe<Magento2ResolversTypes['GiftWrapping']>, ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  product_name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  product_type?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  product_url_key?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  quantity_canceled?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_invoiced?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_ordered?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_refunded?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_returned?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_shipped?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  selected_options?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['OrderItemOption']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2BundleProductResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['BundleProduct'] = Magento2ResolversParentTypes['BundleProduct']> = {
  attribute_set_id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  canonical_url?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CategoryInterface']>>>, ParentType, ContextType>;
  color?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  country_of_manufacture?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  crosssell_products?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  custom_attributes?: Resolver<Array<Maybe<Magento2ResolversTypes['CustomAttribute']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<Magento2ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  dynamic_price?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  dynamic_sku?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  dynamic_weight?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  fashion_color?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  fashion_material?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  fashion_size?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  fashion_style?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  format?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  gift_message_available?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  has_video?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<Magento2ResolversTypes['ProductImage']>, ParentType, ContextType>;
  is_returnable?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['BundleItem']>>>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  media_gallery?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['MediaGalleryInterface']>>>, ParentType, ContextType>;
  media_gallery_entries?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['MediaGalleryEntry']>>>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  meta_keyword?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  new_from_date?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  new_to_date?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  only_x_left_in_stock?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CustomizableOptionInterface']>>>, ParentType, ContextType>;
  options_container?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<Magento2ResolversTypes['ProductPrices']>, ParentType, ContextType>;
  price_range?: Resolver<Magento2ResolversTypes['PriceRange'], ParentType, ContextType>;
  price_tiers?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['TierPrice']>>>, ParentType, ContextType>;
  price_view?: Resolver<Maybe<Magento2ResolversTypes['PriceViewEnum']>, ParentType, ContextType>;
  product_links?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductLinksInterface']>>>, ParentType, ContextType>;
  rating_summary?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  redirect_code?: Resolver<Magento2ResolversTypes['Int'], ParentType, ContextType>;
  related_products?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  relative_url?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  review_count?: Resolver<Magento2ResolversTypes['Int'], ParentType, ContextType>;
  reviews?: Resolver<Magento2ResolversTypes['ProductReviews'], ParentType, ContextType, RequireFields<Magento2BundleProductReviewsArgs, 'currentPage' | 'pageSize'>>;
  ship_bundle_items?: Resolver<Maybe<Magento2ResolversTypes['ShipBundleItemsEnum']>, ParentType, ContextType>;
  short_description?: Resolver<Maybe<Magento2ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  small_image?: Resolver<Maybe<Magento2ResolversTypes['ProductImage']>, ParentType, ContextType>;
  special_from_date?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  special_price?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  special_to_date?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  staged?: Resolver<Magento2ResolversTypes['Boolean'], ParentType, ContextType>;
  stock_status?: Resolver<Maybe<Magento2ResolversTypes['ProductStockStatus']>, ParentType, ContextType>;
  swatch_image?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<Magento2ResolversTypes['ProductImage']>, ParentType, ContextType>;
  tier_price?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  tier_prices?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductTierPrices']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<Magento2ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
  type_id?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  upsell_products?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  url_path?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  url_rewrites?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['UrlRewrite']>>>, ParentType, ContextType>;
  url_suffix?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  video_file?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  websites?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['Website']>>>, ParentType, ContextType>;
  weight?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2BundleShipmentItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['BundleShipmentItem'] = Magento2ResolversParentTypes['BundleShipmentItem']> = {
  bundle_options?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ItemSelectedBundleOption']>>>, ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<Magento2ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  quantity_shipped?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2BundleWishlistItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['BundleWishlistItem'] = Magento2ResolversParentTypes['BundleWishlistItem']> = {
  added_at?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  bundle_options?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['SelectedBundleOption']>>>, ParentType, ContextType>;
  customizable_options?: Resolver<Array<Maybe<Magento2ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  product?: Resolver<Maybe<Magento2ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  quantity?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CartResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['Cart'] = Magento2ResolversParentTypes['Cart']> = {
  applied_coupon?: Resolver<Maybe<Magento2ResolversTypes['AppliedCoupon']>, ParentType, ContextType>;
  applied_coupons?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['AppliedCoupon']>>>, ParentType, ContextType>;
  applied_gift_cards?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['AppliedGiftCard']>>>, ParentType, ContextType>;
  applied_reward_points?: Resolver<Maybe<Magento2ResolversTypes['RewardPointsAmount']>, ParentType, ContextType>;
  applied_store_credit?: Resolver<Maybe<Magento2ResolversTypes['AppliedStoreCredit']>, ParentType, ContextType>;
  available_gift_wrappings?: Resolver<Array<Maybe<Magento2ResolversTypes['GiftWrapping']>>, ParentType, ContextType>;
  available_payment_methods?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['AvailablePaymentMethod']>>>, ParentType, ContextType>;
  billing_address?: Resolver<Maybe<Magento2ResolversTypes['BillingCartAddress']>, ParentType, ContextType>;
  email?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  gift_message?: Resolver<Maybe<Magento2ResolversTypes['GiftMessage']>, ParentType, ContextType>;
  gift_receipt_included?: Resolver<Magento2ResolversTypes['Boolean'], ParentType, ContextType>;
  gift_wrapping?: Resolver<Maybe<Magento2ResolversTypes['GiftWrapping']>, ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  is_virtual?: Resolver<Magento2ResolversTypes['Boolean'], ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CartItemInterface']>>>, ParentType, ContextType>;
  prices?: Resolver<Maybe<Magento2ResolversTypes['CartPrices']>, ParentType, ContextType>;
  printed_card_included?: Resolver<Magento2ResolversTypes['Boolean'], ParentType, ContextType>;
  selected_payment_method?: Resolver<Maybe<Magento2ResolversTypes['SelectedPaymentMethod']>, ParentType, ContextType>;
  shipping_addresses?: Resolver<Array<Maybe<Magento2ResolversTypes['ShippingCartAddress']>>, ParentType, ContextType>;
  total_quantity?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CartAddressCountryResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CartAddressCountry'] = Magento2ResolversParentTypes['CartAddressCountry']> = {
  code?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CartAddressInterfaceResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CartAddressInterface'] = Magento2ResolversParentTypes['CartAddressInterface']> = {
  __resolveType: TypeResolveFn<'BillingCartAddress' | 'ShippingCartAddress', ParentType, ContextType>;
  city?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  company?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Magento2ResolversTypes['CartAddressCountry'], ParentType, ContextType>;
  firstname?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  lastname?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  postcode?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<Magento2ResolversTypes['CartAddressRegion']>, ParentType, ContextType>;
  street?: Resolver<Array<Maybe<Magento2ResolversTypes['String']>>, ParentType, ContextType>;
  telephone?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
};

export type Magento2CartAddressRegionResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CartAddressRegion'] = Magento2ResolversParentTypes['CartAddressRegion']> = {
  code?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  region_id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CartDiscountResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CartDiscount'] = Magento2ResolversParentTypes['CartDiscount']> = {
  amount?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  label?: Resolver<Array<Maybe<Magento2ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CartItemErrorResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CartItemError'] = Magento2ResolversParentTypes['CartItemError']> = {
  code?: Resolver<Magento2ResolversTypes['CartItemErrorType'], ParentType, ContextType>;
  message?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CartItemInterfaceResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CartItemInterface'] = Magento2ResolversParentTypes['CartItemInterface']> = {
  __resolveType: TypeResolveFn<'BundleCartItem' | 'ConfigurableCartItem' | 'DownloadableCartItem' | 'GiftCardCartItem' | 'SimpleCartItem' | 'VirtualCartItem', ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CartItemError']>>>, ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  prices?: Resolver<Maybe<Magento2ResolversTypes['CartItemPrices']>, ParentType, ContextType>;
  product?: Resolver<Magento2ResolversTypes['ProductInterface'], ParentType, ContextType>;
  quantity?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
};

export type Magento2CartItemPricesResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CartItemPrices'] = Magento2ResolversParentTypes['CartItemPrices']> = {
  discounts?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['Discount']>>>, ParentType, ContextType>;
  fixed_product_taxes?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['FixedProductTax']>>>, ParentType, ContextType>;
  price?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  row_total?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  row_total_including_tax?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  total_item_discount?: Resolver<Maybe<Magento2ResolversTypes['Money']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CartItemQuantityResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CartItemQuantity'] = Magento2ResolversParentTypes['CartItemQuantity']> = {
  cart_item_id?: Resolver<Magento2ResolversTypes['Int'], ParentType, ContextType>;
  quantity?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CartItemSelectedOptionValuePriceResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CartItemSelectedOptionValuePrice'] = Magento2ResolversParentTypes['CartItemSelectedOptionValuePrice']> = {
  type?: Resolver<Magento2ResolversTypes['PriceTypeEnum'], ParentType, ContextType>;
  units?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CartPricesResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CartPrices'] = Magento2ResolversParentTypes['CartPrices']> = {
  applied_taxes?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CartTaxItem']>>>, ParentType, ContextType>;
  discount?: Resolver<Maybe<Magento2ResolversTypes['CartDiscount']>, ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['Discount']>>>, ParentType, ContextType>;
  gift_options?: Resolver<Maybe<Magento2ResolversTypes['GiftOptionsPrices']>, ParentType, ContextType>;
  grand_total?: Resolver<Maybe<Magento2ResolversTypes['Money']>, ParentType, ContextType>;
  subtotal_excluding_tax?: Resolver<Maybe<Magento2ResolversTypes['Money']>, ParentType, ContextType>;
  subtotal_including_tax?: Resolver<Maybe<Magento2ResolversTypes['Money']>, ParentType, ContextType>;
  subtotal_with_discount_excluding_tax?: Resolver<Maybe<Magento2ResolversTypes['Money']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CartTaxItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CartTaxItem'] = Magento2ResolversParentTypes['CartTaxItem']> = {
  amount?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  label?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CartUserInputErrorResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CartUserInputError'] = Magento2ResolversParentTypes['CartUserInputError']> = {
  code?: Resolver<Magento2ResolversTypes['CartUserInputErrorType'], ParentType, ContextType>;
  message?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CategoriesResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['Categories'] = Magento2ResolversParentTypes['Categories']> = {
  asset_urls?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['Assets']>>>, ParentType, ContextType>;
  identifier?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CategoryInterfaceResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CategoryInterface'] = Magento2ResolversParentTypes['CategoryInterface']> = {
  __resolveType: TypeResolveFn<'CategoryTree', ParentType, ContextType>;
  automatic_sorting?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  available_sort_by?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['String']>>>, ParentType, ContextType>;
  breadcrumbs?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['Breadcrumb']>>>, ParentType, ContextType>;
  canonical_url?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  children_count?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  cms_block?: Resolver<Maybe<Magento2ResolversTypes['CmsBlock']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  custom_layout_update_file?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  default_sort_by?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  display_mode?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  filter_price_range?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  include_in_menu?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  is_anchor?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  landing_page?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  level?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  meta_keywords?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  path?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  path_in_store?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  product_count?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  products?: Resolver<Maybe<Magento2ResolversTypes['CategoryProducts']>, ParentType, ContextType, RequireFields<Magento2CategoryInterfaceProductsArgs, 'currentPage' | 'pageSize'>>;
  staged?: Resolver<Magento2ResolversTypes['Boolean'], ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  url_path?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  url_suffix?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
};

export type Magento2CategoryProductsResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CategoryProducts'] = Magento2ResolversParentTypes['CategoryProducts']> = {
  items?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  page_info?: Resolver<Maybe<Magento2ResolversTypes['SearchResultPageInfo']>, ParentType, ContextType>;
  total_count?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CategoryResultResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CategoryResult'] = Magento2ResolversParentTypes['CategoryResult']> = {
  items?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CategoryTree']>>>, ParentType, ContextType>;
  page_info?: Resolver<Maybe<Magento2ResolversTypes['SearchResultPageInfo']>, ParentType, ContextType>;
  total_count?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CategoryTreeResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CategoryTree'] = Magento2ResolversParentTypes['CategoryTree']> = {
  automatic_sorting?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  available_sort_by?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['String']>>>, ParentType, ContextType>;
  breadcrumbs?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['Breadcrumb']>>>, ParentType, ContextType>;
  canonical_url?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  children?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CategoryTree']>>>, ParentType, ContextType>;
  children_count?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  cms_block?: Resolver<Maybe<Magento2ResolversTypes['CmsBlock']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  custom_layout_update_file?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  default_sort_by?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  display_mode?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  filter_price_range?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  include_in_menu?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  is_anchor?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  landing_page?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  level?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  meta_keywords?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  path?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  path_in_store?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  product_count?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  products?: Resolver<Maybe<Magento2ResolversTypes['CategoryProducts']>, ParentType, ContextType, RequireFields<Magento2CategoryTreeProductsArgs, 'currentPage' | 'pageSize'>>;
  redirect_code?: Resolver<Magento2ResolversTypes['Int'], ParentType, ContextType>;
  relative_url?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  staged?: Resolver<Magento2ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<Maybe<Magento2ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  url_path?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  url_suffix?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ChatDataResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ChatData'] = Magento2ResolversParentTypes['ChatData']> = {
  api_space_id?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  cookie_name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  is_enabled?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CheckoutAgreementResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CheckoutAgreement'] = Magento2ResolversParentTypes['CheckoutAgreement']> = {
  agreement_id?: Resolver<Magento2ResolversTypes['Int'], ParentType, ContextType>;
  checkbox_text?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  content?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  content_height?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  is_html?: Resolver<Magento2ResolversTypes['Boolean'], ParentType, ContextType>;
  mode?: Resolver<Magento2ResolversTypes['CheckoutAgreementMode'], ParentType, ContextType>;
  name?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CheckoutUserInputErrorResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CheckoutUserInputError'] = Magento2ResolversParentTypes['CheckoutUserInputError']> = {
  code?: Resolver<Magento2ResolversTypes['CheckoutUserInputErrorCodes'], ParentType, ContextType>;
  message?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  path?: Resolver<Array<Maybe<Magento2ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CmsBlockResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CmsBlock'] = Magento2ResolversParentTypes['CmsBlock']> = {
  content?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  identifier?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CmsBlocksResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CmsBlocks'] = Magento2ResolversParentTypes['CmsBlocks']> = {
  items?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CmsBlock']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CmsPageResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CmsPage'] = Magento2ResolversParentTypes['CmsPage']> = {
  content?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  content_heading?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  identifier?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  meta_keywords?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  page_layout?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  redirect_code?: Resolver<Magento2ResolversTypes['Int'], ParentType, ContextType>;
  relative_url?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<Magento2ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ColorSwatchDataResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ColorSwatchData'] = Magento2ResolversParentTypes['ColorSwatchData']> = {
  value?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ComparableAttributeResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ComparableAttribute'] = Magento2ResolversParentTypes['ComparableAttribute']> = {
  code?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ComparableItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ComparableItem'] = Magento2ResolversParentTypes['ComparableItem']> = {
  attributes?: Resolver<Array<Maybe<Magento2ResolversTypes['ProductAttribute']>>, ParentType, ContextType>;
  product?: Resolver<Magento2ResolversTypes['ProductInterface'], ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CompareListResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CompareList'] = Magento2ResolversParentTypes['CompareList']> = {
  attributes?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ComparableAttribute']>>>, ParentType, ContextType>;
  item_count?: Resolver<Magento2ResolversTypes['Int'], ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ComparableItem']>>>, ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ComplexTextValueResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ComplexTextValue'] = Magento2ResolversParentTypes['ComplexTextValue']> = {
  html?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ConfigurableAttributeOptionResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ConfigurableAttributeOption'] = Magento2ResolversParentTypes['ConfigurableAttributeOption']> = {
  code?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  value_index?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ConfigurableCartItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ConfigurableCartItem'] = Magento2ResolversParentTypes['ConfigurableCartItem']> = {
  available_gift_wrapping?: Resolver<Array<Maybe<Magento2ResolversTypes['GiftWrapping']>>, ParentType, ContextType>;
  configurable_options?: Resolver<Array<Maybe<Magento2ResolversTypes['SelectedConfigurableOption']>>, ParentType, ContextType>;
  configured_variant?: Resolver<Magento2ResolversTypes['ProductInterface'], ParentType, ContextType>;
  customizable_options?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['SelectedCustomizableOption']>>>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CartItemError']>>>, ParentType, ContextType>;
  gift_message?: Resolver<Maybe<Magento2ResolversTypes['GiftMessage']>, ParentType, ContextType>;
  gift_wrapping?: Resolver<Maybe<Magento2ResolversTypes['GiftWrapping']>, ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  prices?: Resolver<Maybe<Magento2ResolversTypes['CartItemPrices']>, ParentType, ContextType>;
  product?: Resolver<Magento2ResolversTypes['ProductInterface'], ParentType, ContextType>;
  quantity?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ConfigurableOptionAvailableForSelectionResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ConfigurableOptionAvailableForSelection'] = Magento2ResolversParentTypes['ConfigurableOptionAvailableForSelection']> = {
  attribute_code?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  option_value_uids?: Resolver<Array<Maybe<Magento2ResolversTypes['ID']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ConfigurableProductResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ConfigurableProduct'] = Magento2ResolversParentTypes['ConfigurableProduct']> = {
  attribute_set_id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  canonical_url?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CategoryInterface']>>>, ParentType, ContextType>;
  color?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  configurable_options?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ConfigurableProductOptions']>>>, ParentType, ContextType>;
  configurable_product_options_selection?: Resolver<Maybe<Magento2ResolversTypes['ConfigurableProductOptionsSelection']>, ParentType, ContextType, RequireFields<Magento2ConfigurableProductConfigurable_Product_Options_SelectionArgs, never>>;
  country_of_manufacture?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  crosssell_products?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  custom_attributes?: Resolver<Array<Maybe<Magento2ResolversTypes['CustomAttribute']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<Magento2ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  fashion_color?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  fashion_material?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  fashion_size?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  fashion_style?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  format?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  gift_message_available?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  has_video?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<Magento2ResolversTypes['ProductImage']>, ParentType, ContextType>;
  is_returnable?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  media_gallery?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['MediaGalleryInterface']>>>, ParentType, ContextType>;
  media_gallery_entries?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['MediaGalleryEntry']>>>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  meta_keyword?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  new_from_date?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  new_to_date?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  only_x_left_in_stock?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CustomizableOptionInterface']>>>, ParentType, ContextType>;
  options_container?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<Magento2ResolversTypes['ProductPrices']>, ParentType, ContextType>;
  price_range?: Resolver<Magento2ResolversTypes['PriceRange'], ParentType, ContextType>;
  price_tiers?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['TierPrice']>>>, ParentType, ContextType>;
  product_links?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductLinksInterface']>>>, ParentType, ContextType>;
  rating_summary?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  redirect_code?: Resolver<Magento2ResolversTypes['Int'], ParentType, ContextType>;
  related_products?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  relative_url?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  review_count?: Resolver<Magento2ResolversTypes['Int'], ParentType, ContextType>;
  reviews?: Resolver<Magento2ResolversTypes['ProductReviews'], ParentType, ContextType, RequireFields<Magento2ConfigurableProductReviewsArgs, 'currentPage' | 'pageSize'>>;
  short_description?: Resolver<Maybe<Magento2ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  small_image?: Resolver<Maybe<Magento2ResolversTypes['ProductImage']>, ParentType, ContextType>;
  special_from_date?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  special_price?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  special_to_date?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  staged?: Resolver<Magento2ResolversTypes['Boolean'], ParentType, ContextType>;
  stock_status?: Resolver<Maybe<Magento2ResolversTypes['ProductStockStatus']>, ParentType, ContextType>;
  swatch_image?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<Magento2ResolversTypes['ProductImage']>, ParentType, ContextType>;
  tier_price?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  tier_prices?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductTierPrices']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<Magento2ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
  type_id?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  upsell_products?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  url_path?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  url_rewrites?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['UrlRewrite']>>>, ParentType, ContextType>;
  url_suffix?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  variants?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ConfigurableVariant']>>>, ParentType, ContextType>;
  video_file?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  websites?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['Website']>>>, ParentType, ContextType>;
  weight?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ConfigurableProductOptionResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ConfigurableProductOption'] = Magento2ResolversParentTypes['ConfigurableProductOption']> = {
  attribute_code?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  values?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ConfigurableProductOptionValue']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ConfigurableProductOptionValueResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ConfigurableProductOptionValue'] = Magento2ResolversParentTypes['ConfigurableProductOptionValue']> = {
  is_available?: Resolver<Magento2ResolversTypes['Boolean'], ParentType, ContextType>;
  is_use_default?: Resolver<Magento2ResolversTypes['Boolean'], ParentType, ContextType>;
  label?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  swatch?: Resolver<Maybe<Magento2ResolversTypes['SwatchDataInterface']>, ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ConfigurableProductOptionsResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ConfigurableProductOptions'] = Magento2ResolversParentTypes['ConfigurableProductOptions']> = {
  attribute_code?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  attribute_id?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  attribute_id_v2?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  attribute_uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  label?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  product_id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  use_default?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  values?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ConfigurableProductOptionsValues']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ConfigurableProductOptionsSelectionResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ConfigurableProductOptionsSelection'] = Magento2ResolversParentTypes['ConfigurableProductOptionsSelection']> = {
  configurable_options?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ConfigurableProductOption']>>>, ParentType, ContextType>;
  media_gallery?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['MediaGalleryInterface']>>>, ParentType, ContextType>;
  options_available_for_selection?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ConfigurableOptionAvailableForSelection']>>>, ParentType, ContextType>;
  variant?: Resolver<Maybe<Magento2ResolversTypes['SimpleProduct']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ConfigurableProductOptionsValuesResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ConfigurableProductOptionsValues'] = Magento2ResolversParentTypes['ConfigurableProductOptionsValues']> = {
  default_label?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  store_label?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  swatch_data?: Resolver<Maybe<Magento2ResolversTypes['SwatchDataInterface']>, ParentType, ContextType>;
  uid?: Resolver<Maybe<Magento2ResolversTypes['ID']>, ParentType, ContextType>;
  use_default_value?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  value_index?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ConfigurableVariantResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ConfigurableVariant'] = Magento2ResolversParentTypes['ConfigurableVariant']> = {
  attributes?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ConfigurableAttributeOption']>>>, ParentType, ContextType>;
  product?: Resolver<Maybe<Magento2ResolversTypes['SimpleProduct']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ConfigurableWishlistItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ConfigurableWishlistItem'] = Magento2ResolversParentTypes['ConfigurableWishlistItem']> = {
  added_at?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  child_sku?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  configurable_options?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['SelectedConfigurableOption']>>>, ParentType, ContextType>;
  customizable_options?: Resolver<Array<Maybe<Magento2ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  product?: Resolver<Maybe<Magento2ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  quantity?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ContactUsOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ContactUsOutput'] = Magento2ResolversParentTypes['ContactUsOutput']> = {
  status?: Resolver<Magento2ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CopyProductsBetweenWishlistsOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CopyProductsBetweenWishlistsOutput'] = Magento2ResolversParentTypes['CopyProductsBetweenWishlistsOutput']> = {
  destination_wishlist?: Resolver<Magento2ResolversTypes['Wishlist'], ParentType, ContextType>;
  source_wishlist?: Resolver<Magento2ResolversTypes['Wishlist'], ParentType, ContextType>;
  user_errors?: Resolver<Array<Maybe<Magento2ResolversTypes['WishListUserInputError']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CountryResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['Country'] = Magento2ResolversParentTypes['Country']> = {
  available_regions?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['Region']>>>, ParentType, ContextType>;
  full_name_english?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  full_name_locale?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  three_letter_abbreviation?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  two_letter_abbreviation?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CreateGiftRegistryOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CreateGiftRegistryOutput'] = Magento2ResolversParentTypes['CreateGiftRegistryOutput']> = {
  gift_registry?: Resolver<Maybe<Magento2ResolversTypes['GiftRegistry']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CreatePayflowProTokenOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CreatePayflowProTokenOutput'] = Magento2ResolversParentTypes['CreatePayflowProTokenOutput']> = {
  response_message?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  result?: Resolver<Magento2ResolversTypes['Int'], ParentType, ContextType>;
  result_code?: Resolver<Magento2ResolversTypes['Int'], ParentType, ContextType>;
  secure_token?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  secure_token_id?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CreateProductReviewOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CreateProductReviewOutput'] = Magento2ResolversParentTypes['CreateProductReviewOutput']> = {
  review?: Resolver<Magento2ResolversTypes['ProductReview'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CreateWishlistOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CreateWishlistOutput'] = Magento2ResolversParentTypes['CreateWishlistOutput']> = {
  wishlist?: Resolver<Magento2ResolversTypes['Wishlist'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CreditMemoResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CreditMemo'] = Magento2ResolversParentTypes['CreditMemo']> = {
  comments?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['SalesCommentItem']>>>, ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CreditMemoItemInterface']>>>, ParentType, ContextType>;
  number?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  total?: Resolver<Maybe<Magento2ResolversTypes['CreditMemoTotal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CreditMemoItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CreditMemoItem'] = Magento2ResolversParentTypes['CreditMemoItem']> = {
  discounts?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['Discount']>>>, ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<Magento2ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  quantity_refunded?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CreditMemoItemInterfaceResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CreditMemoItemInterface'] = Magento2ResolversParentTypes['CreditMemoItemInterface']> = {
  __resolveType: TypeResolveFn<'BundleCreditMemoItem' | 'CreditMemoItem' | 'DownloadableCreditMemoItem' | 'GiftCardCreditMemoItem', ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['Discount']>>>, ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<Magento2ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  quantity_refunded?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
};

export type Magento2CreditMemoTotalResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CreditMemoTotal'] = Magento2ResolversParentTypes['CreditMemoTotal']> = {
  adjustment?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  base_grand_total?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['Discount']>>>, ParentType, ContextType>;
  grand_total?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  shipping_handling?: Resolver<Maybe<Magento2ResolversTypes['ShippingHandling']>, ParentType, ContextType>;
  subtotal?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  taxes?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['TaxItem']>>>, ParentType, ContextType>;
  total_shipping?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  total_tax?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CurrencyResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['Currency'] = Magento2ResolversParentTypes['Currency']> = {
  available_currency_codes?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['String']>>>, ParentType, ContextType>;
  base_currency_code?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  base_currency_symbol?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  default_display_currecy_code?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  default_display_currecy_symbol?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  default_display_currency_code?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  default_display_currency_symbol?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  exchange_rates?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ExchangeRate']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CustomAttributeResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CustomAttribute'] = Magento2ResolversParentTypes['CustomAttribute']> = {
  attribute_metadata?: Resolver<Maybe<Magento2ResolversTypes['AttributeMetadataInterface']>, ParentType, ContextType>;
  entered_attribute_value?: Resolver<Maybe<Magento2ResolversTypes['EnteredAttributeValue']>, ParentType, ContextType>;
  selected_attribute_options?: Resolver<Maybe<Magento2ResolversTypes['SelectedAttributeOption']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CustomAttributeMetadataResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CustomAttributeMetadata'] = Magento2ResolversParentTypes['CustomAttributeMetadata']> = {
  items?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['Attribute']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CustomerResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['Customer'] = Magento2ResolversParentTypes['Customer']> = {
  addresses?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CustomerAddress']>>>, ParentType, ContextType>;
  allow_remote_shopping_assistance?: Resolver<Magento2ResolversTypes['Boolean'], ParentType, ContextType>;
  compare_list?: Resolver<Maybe<Magento2ResolversTypes['CompareList']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  date_of_birth?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  default_billing?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  default_shipping?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  dob?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  firstname?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  gift_registries?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['GiftRegistry']>>>, ParentType, ContextType>;
  gift_registry?: Resolver<Maybe<Magento2ResolversTypes['GiftRegistry']>, ParentType, ContextType, RequireFields<Magento2CustomerGift_RegistryArgs, 'giftRegistryUid'>>;
  group_id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  is_subscribed?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastname?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  middlename?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  orders?: Resolver<Maybe<Magento2ResolversTypes['CustomerOrders']>, ParentType, ContextType, RequireFields<Magento2CustomerOrdersArgs, 'currentPage' | 'pageSize'>>;
  prefix?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  return?: Resolver<Maybe<Magento2ResolversTypes['Return']>, ParentType, ContextType, RequireFields<Magento2CustomerReturnArgs, 'uid'>>;
  returns?: Resolver<Maybe<Magento2ResolversTypes['Returns']>, ParentType, ContextType, RequireFields<Magento2CustomerReturnsArgs, 'currentPage' | 'pageSize'>>;
  reviews?: Resolver<Magento2ResolversTypes['ProductReviews'], ParentType, ContextType, RequireFields<Magento2CustomerReviewsArgs, 'currentPage' | 'pageSize'>>;
  reward_points?: Resolver<Maybe<Magento2ResolversTypes['RewardPoints']>, ParentType, ContextType>;
  store_credit?: Resolver<Maybe<Magento2ResolversTypes['CustomerStoreCredit']>, ParentType, ContextType>;
  suffix?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  taxvat?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  wishlist?: Resolver<Magento2ResolversTypes['Wishlist'], ParentType, ContextType>;
  wishlist_v2?: Resolver<Maybe<Magento2ResolversTypes['Wishlist']>, ParentType, ContextType, RequireFields<Magento2CustomerWishlist_V2Args, 'id'>>;
  wishlists?: Resolver<Array<Maybe<Magento2ResolversTypes['Wishlist']>>, ParentType, ContextType, RequireFields<Magento2CustomerWishlistsArgs, 'currentPage' | 'pageSize'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CustomerAddressResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CustomerAddress'] = Magento2ResolversParentTypes['CustomerAddress']> = {
  city?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  country_code?: Resolver<Maybe<Magento2ResolversTypes['CountryCodeEnum']>, ParentType, ContextType>;
  country_id?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  custom_attributes?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CustomerAddressAttribute']>>>, ParentType, ContextType>;
  customer_id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  default_billing?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  default_shipping?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  extension_attributes?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CustomerAddressAttribute']>>>, ParentType, ContextType>;
  fax?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  firstname?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  lastname?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  middlename?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  postcode?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  prefix?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<Magento2ResolversTypes['CustomerAddressRegion']>, ParentType, ContextType>;
  region_id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  street?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['String']>>>, ParentType, ContextType>;
  suffix?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  telephone?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  vat_id?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CustomerAddressAttributeResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CustomerAddressAttribute'] = Magento2ResolversParentTypes['CustomerAddressAttribute']> = {
  attribute_code?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CustomerAddressRegionResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CustomerAddressRegion'] = Magento2ResolversParentTypes['CustomerAddressRegion']> = {
  region?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  region_code?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  region_id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CustomerDownloadableProductResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CustomerDownloadableProduct'] = Magento2ResolversParentTypes['CustomerDownloadableProduct']> = {
  date?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  download_url?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  order_increment_id?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  remaining_downloads?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CustomerDownloadableProductsResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CustomerDownloadableProducts'] = Magento2ResolversParentTypes['CustomerDownloadableProducts']> = {
  items?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CustomerDownloadableProduct']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CustomerOrderResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CustomerOrder'] = Magento2ResolversParentTypes['CustomerOrder']> = {
  billing_address?: Resolver<Maybe<Magento2ResolversTypes['OrderAddress']>, ParentType, ContextType>;
  carrier?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  comments?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['SalesCommentItem']>>>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  credit_memos?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CreditMemo']>>>, ParentType, ContextType>;
  gift_message?: Resolver<Maybe<Magento2ResolversTypes['GiftMessage']>, ParentType, ContextType>;
  gift_receipt_included?: Resolver<Magento2ResolversTypes['Boolean'], ParentType, ContextType>;
  gift_wrapping?: Resolver<Maybe<Magento2ResolversTypes['GiftWrapping']>, ParentType, ContextType>;
  grand_total?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  increment_id?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  invoices?: Resolver<Array<Maybe<Magento2ResolversTypes['Invoice']>>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['OrderItemInterface']>>>, ParentType, ContextType>;
  items_eligible_for_return?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['OrderItemInterface']>>>, ParentType, ContextType>;
  number?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  order_date?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  order_number?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  payment_methods?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['OrderPaymentMethod']>>>, ParentType, ContextType>;
  printed_card_included?: Resolver<Magento2ResolversTypes['Boolean'], ParentType, ContextType>;
  returns?: Resolver<Maybe<Magento2ResolversTypes['Returns']>, ParentType, ContextType, RequireFields<Magento2CustomerOrderReturnsArgs, 'currentPage' | 'pageSize'>>;
  shipments?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['OrderShipment']>>>, ParentType, ContextType>;
  shipping_address?: Resolver<Maybe<Magento2ResolversTypes['OrderAddress']>, ParentType, ContextType>;
  shipping_method?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  total?: Resolver<Maybe<Magento2ResolversTypes['OrderTotal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CustomerOrdersResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CustomerOrders'] = Magento2ResolversParentTypes['CustomerOrders']> = {
  items?: Resolver<Array<Maybe<Magento2ResolversTypes['CustomerOrder']>>, ParentType, ContextType>;
  page_info?: Resolver<Maybe<Magento2ResolversTypes['SearchResultPageInfo']>, ParentType, ContextType>;
  total_count?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CustomerOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CustomerOutput'] = Magento2ResolversParentTypes['CustomerOutput']> = {
  customer?: Resolver<Magento2ResolversTypes['Customer'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CustomerPaymentTokensResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CustomerPaymentTokens'] = Magento2ResolversParentTypes['CustomerPaymentTokens']> = {
  items?: Resolver<Array<Maybe<Magento2ResolversTypes['PaymentToken']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CustomerStoreCreditResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CustomerStoreCredit'] = Magento2ResolversParentTypes['CustomerStoreCredit']> = {
  balance_history?: Resolver<Maybe<Magento2ResolversTypes['CustomerStoreCreditHistory']>, ParentType, ContextType, RequireFields<Magento2CustomerStoreCreditBalance_HistoryArgs, 'currentPage' | 'pageSize'>>;
  current_balance?: Resolver<Maybe<Magento2ResolversTypes['Money']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CustomerStoreCreditHistoryResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CustomerStoreCreditHistory'] = Magento2ResolversParentTypes['CustomerStoreCreditHistory']> = {
  items?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CustomerStoreCreditHistoryItem']>>>, ParentType, ContextType>;
  page_info?: Resolver<Maybe<Magento2ResolversTypes['SearchResultPageInfo']>, ParentType, ContextType>;
  total_count?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CustomerStoreCreditHistoryItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CustomerStoreCreditHistoryItem'] = Magento2ResolversParentTypes['CustomerStoreCreditHistoryItem']> = {
  action?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  actual_balance?: Resolver<Maybe<Magento2ResolversTypes['Money']>, ParentType, ContextType>;
  balance_change?: Resolver<Maybe<Magento2ResolversTypes['Money']>, ParentType, ContextType>;
  date_time_changed?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CustomerTokenResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CustomerToken'] = Magento2ResolversParentTypes['CustomerToken']> = {
  token?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CustomizableAreaOptionResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CustomizableAreaOption'] = Magento2ResolversParentTypes['CustomizableAreaOption']> = {
  option_id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  product_sku?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  required?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<Maybe<Magento2ResolversTypes['CustomizableAreaValue']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CustomizableAreaValueResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CustomizableAreaValue'] = Magento2ResolversParentTypes['CustomizableAreaValue']> = {
  max_characters?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  price_type?: Resolver<Maybe<Magento2ResolversTypes['PriceTypeEnum']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CustomizableCheckboxOptionResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CustomizableCheckboxOption'] = Magento2ResolversParentTypes['CustomizableCheckboxOption']> = {
  option_id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  required?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CustomizableCheckboxValue']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CustomizableCheckboxValueResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CustomizableCheckboxValue'] = Magento2ResolversParentTypes['CustomizableCheckboxValue']> = {
  option_type_id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  price_type?: Resolver<Maybe<Magento2ResolversTypes['PriceTypeEnum']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CustomizableDateOptionResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CustomizableDateOption'] = Magento2ResolversParentTypes['CustomizableDateOption']> = {
  option_id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  product_sku?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  required?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<Maybe<Magento2ResolversTypes['CustomizableDateValue']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CustomizableDateValueResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CustomizableDateValue'] = Magento2ResolversParentTypes['CustomizableDateValue']> = {
  price?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  price_type?: Resolver<Maybe<Magento2ResolversTypes['PriceTypeEnum']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<Magento2ResolversTypes['CustomizableDateTypeEnum']>, ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CustomizableDropDownOptionResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CustomizableDropDownOption'] = Magento2ResolversParentTypes['CustomizableDropDownOption']> = {
  option_id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  required?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CustomizableDropDownValue']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CustomizableDropDownValueResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CustomizableDropDownValue'] = Magento2ResolversParentTypes['CustomizableDropDownValue']> = {
  option_type_id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  price_type?: Resolver<Maybe<Magento2ResolversTypes['PriceTypeEnum']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CustomizableFieldOptionResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CustomizableFieldOption'] = Magento2ResolversParentTypes['CustomizableFieldOption']> = {
  option_id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  product_sku?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  required?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<Maybe<Magento2ResolversTypes['CustomizableFieldValue']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CustomizableFieldValueResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CustomizableFieldValue'] = Magento2ResolversParentTypes['CustomizableFieldValue']> = {
  max_characters?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  price_type?: Resolver<Maybe<Magento2ResolversTypes['PriceTypeEnum']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CustomizableFileOptionResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CustomizableFileOption'] = Magento2ResolversParentTypes['CustomizableFileOption']> = {
  option_id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  product_sku?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  required?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<Maybe<Magento2ResolversTypes['CustomizableFileValue']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CustomizableFileValueResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CustomizableFileValue'] = Magento2ResolversParentTypes['CustomizableFileValue']> = {
  file_extension?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  image_size_x?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  image_size_y?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  price_type?: Resolver<Maybe<Magento2ResolversTypes['PriceTypeEnum']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CustomizableMultipleOptionResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CustomizableMultipleOption'] = Magento2ResolversParentTypes['CustomizableMultipleOption']> = {
  option_id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  required?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CustomizableMultipleValue']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CustomizableMultipleValueResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CustomizableMultipleValue'] = Magento2ResolversParentTypes['CustomizableMultipleValue']> = {
  option_type_id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  price_type?: Resolver<Maybe<Magento2ResolversTypes['PriceTypeEnum']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CustomizableOptionInterfaceResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CustomizableOptionInterface'] = Magento2ResolversParentTypes['CustomizableOptionInterface']> = {
  __resolveType: TypeResolveFn<'CustomizableAreaOption' | 'CustomizableCheckboxOption' | 'CustomizableDateOption' | 'CustomizableDropDownOption' | 'CustomizableFieldOption' | 'CustomizableFileOption' | 'CustomizableMultipleOption' | 'CustomizableRadioOption', ParentType, ContextType>;
  option_id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  required?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
};

export type Magento2CustomizableProductInterfaceResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CustomizableProductInterface'] = Magento2ResolversParentTypes['CustomizableProductInterface']> = {
  __resolveType: TypeResolveFn<'BundleProduct' | 'ConfigurableProduct' | 'DownloadableProduct' | 'GiftCardProduct' | 'SimpleProduct' | 'VirtualProduct', ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CustomizableOptionInterface']>>>, ParentType, ContextType>;
};

export type Magento2CustomizableRadioOptionResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CustomizableRadioOption'] = Magento2ResolversParentTypes['CustomizableRadioOption']> = {
  option_id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  required?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CustomizableRadioValue']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CustomizableRadioValueResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['CustomizableRadioValue'] = Magento2ResolversParentTypes['CustomizableRadioValue']> = {
  option_type_id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  price_type?: Resolver<Maybe<Magento2ResolversTypes['PriceTypeEnum']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2DeleteCompareListOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['DeleteCompareListOutput'] = Magento2ResolversParentTypes['DeleteCompareListOutput']> = {
  result?: Resolver<Magento2ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2DeletePaymentTokenOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['DeletePaymentTokenOutput'] = Magento2ResolversParentTypes['DeletePaymentTokenOutput']> = {
  customerPaymentTokens?: Resolver<Maybe<Magento2ResolversTypes['CustomerPaymentTokens']>, ParentType, ContextType>;
  result?: Resolver<Magento2ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2DeleteWishlistOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['DeleteWishlistOutput'] = Magento2ResolversParentTypes['DeleteWishlistOutput']> = {
  status?: Resolver<Magento2ResolversTypes['Boolean'], ParentType, ContextType>;
  wishlists?: Resolver<Array<Maybe<Magento2ResolversTypes['Wishlist']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2DiscountResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['Discount'] = Magento2ResolversParentTypes['Discount']> = {
  amount?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  label?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2DownloadableCartItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['DownloadableCartItem'] = Magento2ResolversParentTypes['DownloadableCartItem']> = {
  customizable_options?: Resolver<Array<Maybe<Magento2ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CartItemError']>>>, ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  links?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['DownloadableProductLinks']>>>, ParentType, ContextType>;
  prices?: Resolver<Maybe<Magento2ResolversTypes['CartItemPrices']>, ParentType, ContextType>;
  product?: Resolver<Magento2ResolversTypes['ProductInterface'], ParentType, ContextType>;
  quantity?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  samples?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['DownloadableProductSamples']>>>, ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2DownloadableCreditMemoItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['DownloadableCreditMemoItem'] = Magento2ResolversParentTypes['DownloadableCreditMemoItem']> = {
  discounts?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['Discount']>>>, ParentType, ContextType>;
  downloadable_links?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['DownloadableItemsLinks']>>>, ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<Magento2ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  quantity_refunded?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2DownloadableInvoiceItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['DownloadableInvoiceItem'] = Magento2ResolversParentTypes['DownloadableInvoiceItem']> = {
  discounts?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['Discount']>>>, ParentType, ContextType>;
  downloadable_links?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['DownloadableItemsLinks']>>>, ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<Magento2ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  quantity_invoiced?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2DownloadableItemsLinksResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['DownloadableItemsLinks'] = Magento2ResolversParentTypes['DownloadableItemsLinks']> = {
  sort_order?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2DownloadableOrderItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['DownloadableOrderItem'] = Magento2ResolversParentTypes['DownloadableOrderItem']> = {
  discounts?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['Discount']>>>, ParentType, ContextType>;
  downloadable_links?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['DownloadableItemsLinks']>>>, ParentType, ContextType>;
  eligible_for_return?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  entered_options?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['OrderItemOption']>>>, ParentType, ContextType>;
  gift_wrapping?: Resolver<Maybe<Magento2ResolversTypes['GiftWrapping']>, ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  product_name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  product_type?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  product_url_key?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  quantity_canceled?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_invoiced?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_ordered?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_refunded?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_returned?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_shipped?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  selected_options?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['OrderItemOption']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2DownloadableProductResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['DownloadableProduct'] = Magento2ResolversParentTypes['DownloadableProduct']> = {
  attribute_set_id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  canonical_url?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CategoryInterface']>>>, ParentType, ContextType>;
  color?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  country_of_manufacture?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  crosssell_products?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  custom_attributes?: Resolver<Array<Maybe<Magento2ResolversTypes['CustomAttribute']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<Magento2ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  downloadable_product_links?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['DownloadableProductLinks']>>>, ParentType, ContextType>;
  downloadable_product_samples?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['DownloadableProductSamples']>>>, ParentType, ContextType>;
  fashion_color?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  fashion_material?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  fashion_size?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  fashion_style?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  format?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  gift_message_available?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  has_video?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<Magento2ResolversTypes['ProductImage']>, ParentType, ContextType>;
  is_returnable?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  links_purchased_separately?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  links_title?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  media_gallery?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['MediaGalleryInterface']>>>, ParentType, ContextType>;
  media_gallery_entries?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['MediaGalleryEntry']>>>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  meta_keyword?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  new_from_date?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  new_to_date?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  only_x_left_in_stock?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CustomizableOptionInterface']>>>, ParentType, ContextType>;
  options_container?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<Magento2ResolversTypes['ProductPrices']>, ParentType, ContextType>;
  price_range?: Resolver<Magento2ResolversTypes['PriceRange'], ParentType, ContextType>;
  price_tiers?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['TierPrice']>>>, ParentType, ContextType>;
  product_links?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductLinksInterface']>>>, ParentType, ContextType>;
  rating_summary?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  redirect_code?: Resolver<Magento2ResolversTypes['Int'], ParentType, ContextType>;
  related_products?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  relative_url?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  review_count?: Resolver<Magento2ResolversTypes['Int'], ParentType, ContextType>;
  reviews?: Resolver<Magento2ResolversTypes['ProductReviews'], ParentType, ContextType, RequireFields<Magento2DownloadableProductReviewsArgs, 'currentPage' | 'pageSize'>>;
  short_description?: Resolver<Maybe<Magento2ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  small_image?: Resolver<Maybe<Magento2ResolversTypes['ProductImage']>, ParentType, ContextType>;
  special_from_date?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  special_price?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  special_to_date?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  staged?: Resolver<Magento2ResolversTypes['Boolean'], ParentType, ContextType>;
  stock_status?: Resolver<Maybe<Magento2ResolversTypes['ProductStockStatus']>, ParentType, ContextType>;
  swatch_image?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<Magento2ResolversTypes['ProductImage']>, ParentType, ContextType>;
  tier_price?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  tier_prices?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductTierPrices']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<Magento2ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
  type_id?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  upsell_products?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  url_path?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  url_rewrites?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['UrlRewrite']>>>, ParentType, ContextType>;
  url_suffix?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  video_file?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  websites?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['Website']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2DownloadableProductLinksResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['DownloadableProductLinks'] = Magento2ResolversParentTypes['DownloadableProductLinks']> = {
  id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  is_shareable?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  link_type?: Resolver<Maybe<Magento2ResolversTypes['DownloadableFileTypeEnum']>, ParentType, ContextType>;
  number_of_downloads?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  sample_file?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  sample_type?: Resolver<Maybe<Magento2ResolversTypes['DownloadableFileTypeEnum']>, ParentType, ContextType>;
  sample_url?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2DownloadableProductSamplesResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['DownloadableProductSamples'] = Magento2ResolversParentTypes['DownloadableProductSamples']> = {
  id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  sample_file?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  sample_type?: Resolver<Maybe<Magento2ResolversTypes['DownloadableFileTypeEnum']>, ParentType, ContextType>;
  sample_url?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2DownloadableWishlistItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['DownloadableWishlistItem'] = Magento2ResolversParentTypes['DownloadableWishlistItem']> = {
  added_at?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  customizable_options?: Resolver<Array<Maybe<Magento2ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  links_v2?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['DownloadableProductLinks']>>>, ParentType, ContextType>;
  product?: Resolver<Maybe<Magento2ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  quantity?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  samples?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['DownloadableProductSamples']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2DynamicBlockResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['DynamicBlock'] = Magento2ResolversParentTypes['DynamicBlock']> = {
  content?: Resolver<Magento2ResolversTypes['ComplexTextValue'], ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2DynamicBlocksResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['DynamicBlocks'] = Magento2ResolversParentTypes['DynamicBlocks']> = {
  items?: Resolver<Array<Maybe<Magento2ResolversTypes['DynamicBlock']>>, ParentType, ContextType>;
  page_info?: Resolver<Maybe<Magento2ResolversTypes['SearchResultPageInfo']>, ParentType, ContextType>;
  total_count?: Resolver<Magento2ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2EnteredAttributeValueResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['EnteredAttributeValue'] = Magento2ResolversParentTypes['EnteredAttributeValue']> = {
  value?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2EntityUrlResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['EntityUrl'] = Magento2ResolversParentTypes['EntityUrl']> = {
  canonical_url?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  entity_uid?: Resolver<Maybe<Magento2ResolversTypes['ID']>, ParentType, ContextType>;
  id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  redirectCode?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  relative_url?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<Magento2ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ExchangeRateResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ExchangeRate'] = Magento2ResolversParentTypes['ExchangeRate']> = {
  currency_to?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  rate?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2FixedProductTaxResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['FixedProductTax'] = Magento2ResolversParentTypes['FixedProductTax']> = {
  amount?: Resolver<Maybe<Magento2ResolversTypes['Money']>, ParentType, ContextType>;
  label?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2GenerateCustomerTokenAsAdminOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['GenerateCustomerTokenAsAdminOutput'] = Magento2ResolversParentTypes['GenerateCustomerTokenAsAdminOutput']> = {
  customer_token?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2GiftCardAccountResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['GiftCardAccount'] = Magento2ResolversParentTypes['GiftCardAccount']> = {
  balance?: Resolver<Maybe<Magento2ResolversTypes['Money']>, ParentType, ContextType>;
  code?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  expiration_date?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2GiftCardAmountsResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['GiftCardAmounts'] = Magento2ResolversParentTypes['GiftCardAmounts']> = {
  attribute_id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  value_id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  website_id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  website_value?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2GiftCardCartItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['GiftCardCartItem'] = Magento2ResolversParentTypes['GiftCardCartItem']> = {
  amount?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  customizable_options?: Resolver<Array<Maybe<Magento2ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CartItemError']>>>, ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  prices?: Resolver<Maybe<Magento2ResolversTypes['CartItemPrices']>, ParentType, ContextType>;
  product?: Resolver<Magento2ResolversTypes['ProductInterface'], ParentType, ContextType>;
  quantity?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  recipient_email?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  recipient_name?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  sender_email?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  sender_name?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2GiftCardCreditMemoItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['GiftCardCreditMemoItem'] = Magento2ResolversParentTypes['GiftCardCreditMemoItem']> = {
  discounts?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['Discount']>>>, ParentType, ContextType>;
  gift_card?: Resolver<Maybe<Magento2ResolversTypes['GiftCardItem']>, ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<Magento2ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  quantity_refunded?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2GiftCardInvoiceItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['GiftCardInvoiceItem'] = Magento2ResolversParentTypes['GiftCardInvoiceItem']> = {
  discounts?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['Discount']>>>, ParentType, ContextType>;
  gift_card?: Resolver<Maybe<Magento2ResolversTypes['GiftCardItem']>, ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<Magento2ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  quantity_invoiced?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2GiftCardItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['GiftCardItem'] = Magento2ResolversParentTypes['GiftCardItem']> = {
  message?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  recipient_email?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  recipient_name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  sender_email?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  sender_name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2GiftCardOptionsResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['GiftCardOptions'] = Magento2ResolversParentTypes['GiftCardOptions']> = {
  amount?: Resolver<Maybe<Magento2ResolversTypes['Money']>, ParentType, ContextType>;
  custom_giftcard_amount?: Resolver<Maybe<Magento2ResolversTypes['Money']>, ParentType, ContextType>;
  message?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  recipient_email?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  recipient_name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  sender_email?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  sender_name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2GiftCardOrderItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['GiftCardOrderItem'] = Magento2ResolversParentTypes['GiftCardOrderItem']> = {
  discounts?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['Discount']>>>, ParentType, ContextType>;
  eligible_for_return?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  entered_options?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['OrderItemOption']>>>, ParentType, ContextType>;
  gift_card?: Resolver<Maybe<Magento2ResolversTypes['GiftCardItem']>, ParentType, ContextType>;
  gift_wrapping?: Resolver<Maybe<Magento2ResolversTypes['GiftWrapping']>, ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  product_name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  product_type?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  product_url_key?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  quantity_canceled?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_invoiced?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_ordered?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_refunded?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_returned?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_shipped?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  selected_options?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['OrderItemOption']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2GiftCardProductResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['GiftCardProduct'] = Magento2ResolversParentTypes['GiftCardProduct']> = {
  allow_message?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  allow_open_amount?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  attribute_set_id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  canonical_url?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CategoryInterface']>>>, ParentType, ContextType>;
  color?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  country_of_manufacture?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  crosssell_products?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  custom_attributes?: Resolver<Array<Maybe<Magento2ResolversTypes['CustomAttribute']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<Magento2ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  fashion_color?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  fashion_material?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  fashion_size?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  fashion_style?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  format?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  gift_card_options?: Resolver<Array<Maybe<Magento2ResolversTypes['CustomizableOptionInterface']>>, ParentType, ContextType>;
  gift_message_available?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  giftcard_amounts?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['GiftCardAmounts']>>>, ParentType, ContextType>;
  giftcard_type?: Resolver<Maybe<Magento2ResolversTypes['GiftCardTypeEnum']>, ParentType, ContextType>;
  has_video?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<Magento2ResolversTypes['ProductImage']>, ParentType, ContextType>;
  is_redeemable?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_returnable?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  lifetime?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  media_gallery?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['MediaGalleryInterface']>>>, ParentType, ContextType>;
  media_gallery_entries?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['MediaGalleryEntry']>>>, ParentType, ContextType>;
  message_max_length?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  meta_keyword?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  new_from_date?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  new_to_date?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  only_x_left_in_stock?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  open_amount_max?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  open_amount_min?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CustomizableOptionInterface']>>>, ParentType, ContextType>;
  options_container?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<Magento2ResolversTypes['ProductPrices']>, ParentType, ContextType>;
  price_range?: Resolver<Magento2ResolversTypes['PriceRange'], ParentType, ContextType>;
  price_tiers?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['TierPrice']>>>, ParentType, ContextType>;
  product_links?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductLinksInterface']>>>, ParentType, ContextType>;
  rating_summary?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  redirect_code?: Resolver<Magento2ResolversTypes['Int'], ParentType, ContextType>;
  related_products?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  relative_url?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  review_count?: Resolver<Magento2ResolversTypes['Int'], ParentType, ContextType>;
  reviews?: Resolver<Magento2ResolversTypes['ProductReviews'], ParentType, ContextType, RequireFields<Magento2GiftCardProductReviewsArgs, 'currentPage' | 'pageSize'>>;
  short_description?: Resolver<Maybe<Magento2ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  small_image?: Resolver<Maybe<Magento2ResolversTypes['ProductImage']>, ParentType, ContextType>;
  special_from_date?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  special_price?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  special_to_date?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  staged?: Resolver<Magento2ResolversTypes['Boolean'], ParentType, ContextType>;
  stock_status?: Resolver<Maybe<Magento2ResolversTypes['ProductStockStatus']>, ParentType, ContextType>;
  swatch_image?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<Magento2ResolversTypes['ProductImage']>, ParentType, ContextType>;
  tier_price?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  tier_prices?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductTierPrices']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<Magento2ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
  type_id?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  upsell_products?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  url_path?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  url_rewrites?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['UrlRewrite']>>>, ParentType, ContextType>;
  url_suffix?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  video_file?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  websites?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['Website']>>>, ParentType, ContextType>;
  weight?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2GiftCardShipmentItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['GiftCardShipmentItem'] = Magento2ResolversParentTypes['GiftCardShipmentItem']> = {
  gift_card?: Resolver<Maybe<Magento2ResolversTypes['GiftCardItem']>, ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<Magento2ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  quantity_shipped?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2GiftCardWishlistItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['GiftCardWishlistItem'] = Magento2ResolversParentTypes['GiftCardWishlistItem']> = {
  added_at?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  customizable_options?: Resolver<Array<Maybe<Magento2ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  gift_card_options?: Resolver<Magento2ResolversTypes['GiftCardOptions'], ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  product?: Resolver<Maybe<Magento2ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  quantity?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2GiftMessageResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['GiftMessage'] = Magento2ResolversParentTypes['GiftMessage']> = {
  from?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  to?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2GiftOptionsPricesResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['GiftOptionsPrices'] = Magento2ResolversParentTypes['GiftOptionsPrices']> = {
  gift_wrapping_for_items?: Resolver<Maybe<Magento2ResolversTypes['Money']>, ParentType, ContextType>;
  gift_wrapping_for_order?: Resolver<Maybe<Magento2ResolversTypes['Money']>, ParentType, ContextType>;
  printed_card?: Resolver<Maybe<Magento2ResolversTypes['Money']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2GiftRegistryResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['GiftRegistry'] = Magento2ResolversParentTypes['GiftRegistry']> = {
  created_at?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  dynamic_attributes?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['GiftRegistryDynamicAttribute']>>>, ParentType, ContextType>;
  event_name?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['GiftRegistryItemInterface']>>>, ParentType, ContextType>;
  message?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  owner_name?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  privacy_settings?: Resolver<Magento2ResolversTypes['GiftRegistryPrivacySettings'], ParentType, ContextType>;
  registrants?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['GiftRegistryRegistrant']>>>, ParentType, ContextType>;
  shipping_address?: Resolver<Maybe<Magento2ResolversTypes['CustomerAddress']>, ParentType, ContextType>;
  status?: Resolver<Magento2ResolversTypes['GiftRegistryStatus'], ParentType, ContextType>;
  type?: Resolver<Maybe<Magento2ResolversTypes['GiftRegistryType']>, ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2GiftRegistryDynamicAttributeResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['GiftRegistryDynamicAttribute'] = Magento2ResolversParentTypes['GiftRegistryDynamicAttribute']> = {
  code?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  group?: Resolver<Magento2ResolversTypes['GiftRegistryDynamicAttributeGroup'], ParentType, ContextType>;
  label?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2GiftRegistryDynamicAttributeInterfaceResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['GiftRegistryDynamicAttributeInterface'] = Magento2ResolversParentTypes['GiftRegistryDynamicAttributeInterface']> = {
  __resolveType: TypeResolveFn<'GiftRegistryDynamicAttribute' | 'GiftRegistryRegistrantDynamicAttribute', ParentType, ContextType>;
  code?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  label?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
};

export type Magento2GiftRegistryDynamicAttributeMetadataResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['GiftRegistryDynamicAttributeMetadata'] = Magento2ResolversParentTypes['GiftRegistryDynamicAttributeMetadata']> = {
  attribute_group?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  code?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  input_type?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  is_required?: Resolver<Magento2ResolversTypes['Boolean'], ParentType, ContextType>;
  label?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  sort_order?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2GiftRegistryDynamicAttributeMetadataInterfaceResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['GiftRegistryDynamicAttributeMetadataInterface'] = Magento2ResolversParentTypes['GiftRegistryDynamicAttributeMetadataInterface']> = {
  __resolveType: TypeResolveFn<'GiftRegistryDynamicAttributeMetadata', ParentType, ContextType>;
  attribute_group?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  code?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  input_type?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  is_required?: Resolver<Magento2ResolversTypes['Boolean'], ParentType, ContextType>;
  label?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  sort_order?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
};

export type Magento2GiftRegistryItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['GiftRegistryItem'] = Magento2ResolversParentTypes['GiftRegistryItem']> = {
  created_at?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  note?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  product?: Resolver<Maybe<Magento2ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  quantity?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  quantity_fulfilled?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2GiftRegistryItemInterfaceResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['GiftRegistryItemInterface'] = Magento2ResolversParentTypes['GiftRegistryItemInterface']> = {
  __resolveType: TypeResolveFn<'GiftRegistryItem', ParentType, ContextType>;
  created_at?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  note?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  product?: Resolver<Maybe<Magento2ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  quantity?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  quantity_fulfilled?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
};

export type Magento2GiftRegistryItemUserErrorInterfaceResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['GiftRegistryItemUserErrorInterface'] = Magento2ResolversParentTypes['GiftRegistryItemUserErrorInterface']> = {
  __resolveType: TypeResolveFn<'GiftRegistryItemUserErrors' | 'MoveCartItemsToGiftRegistryOutput', ParentType, ContextType>;
  status?: Resolver<Magento2ResolversTypes['Boolean'], ParentType, ContextType>;
  user_errors?: Resolver<Array<Maybe<Magento2ResolversTypes['GiftRegistryItemsUserError']>>, ParentType, ContextType>;
};

export type Magento2GiftRegistryItemUserErrorsResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['GiftRegistryItemUserErrors'] = Magento2ResolversParentTypes['GiftRegistryItemUserErrors']> = {
  status?: Resolver<Magento2ResolversTypes['Boolean'], ParentType, ContextType>;
  user_errors?: Resolver<Array<Maybe<Magento2ResolversTypes['GiftRegistryItemsUserError']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2GiftRegistryItemsUserErrorResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['GiftRegistryItemsUserError'] = Magento2ResolversParentTypes['GiftRegistryItemsUserError']> = {
  code?: Resolver<Magento2ResolversTypes['GiftRegistryItemsUserErrorType'], ParentType, ContextType>;
  gift_registry_item_uid?: Resolver<Maybe<Magento2ResolversTypes['ID']>, ParentType, ContextType>;
  gift_registry_uid?: Resolver<Maybe<Magento2ResolversTypes['ID']>, ParentType, ContextType>;
  message?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  product_uid?: Resolver<Maybe<Magento2ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2GiftRegistryOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['GiftRegistryOutput'] = Magento2ResolversParentTypes['GiftRegistryOutput']> = {
  gift_registry?: Resolver<Maybe<Magento2ResolversTypes['GiftRegistry']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2GiftRegistryOutputInterfaceResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['GiftRegistryOutputInterface'] = Magento2ResolversParentTypes['GiftRegistryOutputInterface']> = {
  __resolveType: TypeResolveFn<'GiftRegistryOutput' | 'MoveCartItemsToGiftRegistryOutput', ParentType, ContextType>;
  gift_registry?: Resolver<Maybe<Magento2ResolversTypes['GiftRegistry']>, ParentType, ContextType>;
};

export type Magento2GiftRegistryRegistrantResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['GiftRegistryRegistrant'] = Magento2ResolversParentTypes['GiftRegistryRegistrant']> = {
  dynamic_attributes?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['GiftRegistryRegistrantDynamicAttribute']>>>, ParentType, ContextType>;
  email?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  firstname?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  lastname?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2GiftRegistryRegistrantDynamicAttributeResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['GiftRegistryRegistrantDynamicAttribute'] = Magento2ResolversParentTypes['GiftRegistryRegistrantDynamicAttribute']> = {
  code?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  label?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2GiftRegistrySearchResultResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['GiftRegistrySearchResult'] = Magento2ResolversParentTypes['GiftRegistrySearchResult']> = {
  event_date?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  event_title?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  gift_registry_uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  location?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2GiftRegistryTypeResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['GiftRegistryType'] = Magento2ResolversParentTypes['GiftRegistryType']> = {
  dynamic_attributes_metadata?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['GiftRegistryDynamicAttributeMetadataInterface']>>>, ParentType, ContextType>;
  label?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2GiftWrappingResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['GiftWrapping'] = Magento2ResolversParentTypes['GiftWrapping']> = {
  design?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<Magento2ResolversTypes['GiftWrappingImage']>, ParentType, ContextType>;
  price?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2GiftWrappingImageResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['GiftWrappingImage'] = Magento2ResolversParentTypes['GiftWrappingImage']> = {
  label?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2GroupedProductResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['GroupedProduct'] = Magento2ResolversParentTypes['GroupedProduct']> = {
  attribute_set_id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  canonical_url?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CategoryInterface']>>>, ParentType, ContextType>;
  color?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  country_of_manufacture?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  crosssell_products?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  custom_attributes?: Resolver<Array<Maybe<Magento2ResolversTypes['CustomAttribute']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<Magento2ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  fashion_color?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  fashion_material?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  fashion_size?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  fashion_style?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  format?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  gift_message_available?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  has_video?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<Magento2ResolversTypes['ProductImage']>, ParentType, ContextType>;
  is_returnable?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['GroupedProductItem']>>>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  media_gallery?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['MediaGalleryInterface']>>>, ParentType, ContextType>;
  media_gallery_entries?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['MediaGalleryEntry']>>>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  meta_keyword?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  new_from_date?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  new_to_date?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  only_x_left_in_stock?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  options_container?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<Magento2ResolversTypes['ProductPrices']>, ParentType, ContextType>;
  price_range?: Resolver<Magento2ResolversTypes['PriceRange'], ParentType, ContextType>;
  price_tiers?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['TierPrice']>>>, ParentType, ContextType>;
  product_links?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductLinksInterface']>>>, ParentType, ContextType>;
  rating_summary?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  redirect_code?: Resolver<Magento2ResolversTypes['Int'], ParentType, ContextType>;
  related_products?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  relative_url?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  review_count?: Resolver<Magento2ResolversTypes['Int'], ParentType, ContextType>;
  reviews?: Resolver<Magento2ResolversTypes['ProductReviews'], ParentType, ContextType, RequireFields<Magento2GroupedProductReviewsArgs, 'currentPage' | 'pageSize'>>;
  short_description?: Resolver<Maybe<Magento2ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  small_image?: Resolver<Maybe<Magento2ResolversTypes['ProductImage']>, ParentType, ContextType>;
  special_from_date?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  special_price?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  special_to_date?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  staged?: Resolver<Magento2ResolversTypes['Boolean'], ParentType, ContextType>;
  stock_status?: Resolver<Maybe<Magento2ResolversTypes['ProductStockStatus']>, ParentType, ContextType>;
  swatch_image?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<Magento2ResolversTypes['ProductImage']>, ParentType, ContextType>;
  tier_price?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  tier_prices?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductTierPrices']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<Magento2ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
  type_id?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  upsell_products?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  url_path?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  url_rewrites?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['UrlRewrite']>>>, ParentType, ContextType>;
  url_suffix?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  video_file?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  websites?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['Website']>>>, ParentType, ContextType>;
  weight?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2GroupedProductItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['GroupedProductItem'] = Magento2ResolversParentTypes['GroupedProductItem']> = {
  position?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  product?: Resolver<Maybe<Magento2ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  qty?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2GroupedProductWishlistItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['GroupedProductWishlistItem'] = Magento2ResolversParentTypes['GroupedProductWishlistItem']> = {
  added_at?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  customizable_options?: Resolver<Array<Maybe<Magento2ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  product?: Resolver<Maybe<Magento2ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  quantity?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2HostedProUrlResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['HostedProUrl'] = Magento2ResolversParentTypes['HostedProUrl']> = {
  secure_form_url?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2HttpQueryParameterResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['HttpQueryParameter'] = Magento2ResolversParentTypes['HttpQueryParameter']> = {
  name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ImageSwatchDataResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ImageSwatchData'] = Magento2ResolversParentTypes['ImageSwatchData']> = {
  thumbnail?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2InvoiceResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['Invoice'] = Magento2ResolversParentTypes['Invoice']> = {
  comments?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['SalesCommentItem']>>>, ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['InvoiceItemInterface']>>>, ParentType, ContextType>;
  number?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  total?: Resolver<Maybe<Magento2ResolversTypes['InvoiceTotal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2InvoiceItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['InvoiceItem'] = Magento2ResolversParentTypes['InvoiceItem']> = {
  discounts?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['Discount']>>>, ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<Magento2ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  quantity_invoiced?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2InvoiceItemInterfaceResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['InvoiceItemInterface'] = Magento2ResolversParentTypes['InvoiceItemInterface']> = {
  __resolveType: TypeResolveFn<'BundleInvoiceItem' | 'DownloadableInvoiceItem' | 'GiftCardInvoiceItem' | 'InvoiceItem', ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['Discount']>>>, ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<Magento2ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  quantity_invoiced?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
};

export type Magento2InvoiceTotalResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['InvoiceTotal'] = Magento2ResolversParentTypes['InvoiceTotal']> = {
  base_grand_total?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['Discount']>>>, ParentType, ContextType>;
  grand_total?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  shipping_handling?: Resolver<Maybe<Magento2ResolversTypes['ShippingHandling']>, ParentType, ContextType>;
  subtotal?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  taxes?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['TaxItem']>>>, ParentType, ContextType>;
  total_shipping?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  total_tax?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2IsConfigSettingEnabledOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['IsConfigSettingEnabledOutput'] = Magento2ResolversParentTypes['IsConfigSettingEnabledOutput']> = {
  is_enabled?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2IsEmailAvailableOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['IsEmailAvailableOutput'] = Magento2ResolversParentTypes['IsEmailAvailableOutput']> = {
  is_email_available?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ItemSelectedBundleOptionResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ItemSelectedBundleOption'] = Magento2ResolversParentTypes['ItemSelectedBundleOption']> = {
  id?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  label?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  values?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ItemSelectedBundleOptionValue']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ItemSelectedBundleOptionValueResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ItemSelectedBundleOptionValue'] = Magento2ResolversParentTypes['ItemSelectedBundleOptionValue']> = {
  id?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  price?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  product_name?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  product_sku?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  quantity?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2KeyValueResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['KeyValue'] = Magento2ResolversParentTypes['KeyValue']> = {
  name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2LayerFilterResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['LayerFilter'] = Magento2ResolversParentTypes['LayerFilter']> = {
  filter_items?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['LayerFilterItemInterface']>>>, ParentType, ContextType>;
  filter_items_count?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  request_var?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2LayerFilterItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['LayerFilterItem'] = Magento2ResolversParentTypes['LayerFilterItem']> = {
  items_count?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  label?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  value_string?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2LayerFilterItemInterfaceResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['LayerFilterItemInterface'] = Magento2ResolversParentTypes['LayerFilterItemInterface']> = {
  __resolveType: TypeResolveFn<'LayerFilterItem' | 'SwatchLayerFilterItem', ParentType, ContextType>;
  items_count?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  label?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  value_string?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
};

export type Magento2MediaGalleryEntryResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['MediaGalleryEntry'] = Magento2ResolversParentTypes['MediaGalleryEntry']> = {
  content?: Resolver<Maybe<Magento2ResolversTypes['ProductMediaGalleryEntriesContent']>, ParentType, ContextType>;
  disabled?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  file?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  label?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  media_type?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  types?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['String']>>>, ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  video_content?: Resolver<Maybe<Magento2ResolversTypes['ProductMediaGalleryEntriesVideoContent']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2MediaGalleryInterfaceResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['MediaGalleryInterface'] = Magento2ResolversParentTypes['MediaGalleryInterface']> = {
  __resolveType: TypeResolveFn<'ProductImage' | 'ProductVideo', ParentType, ContextType>;
  disabled?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  url?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
};

export type Magento2MoneyResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['Money'] = Magento2ResolversParentTypes['Money']> = {
  currency?: Resolver<Maybe<Magento2ResolversTypes['CurrencyEnum']>, ParentType, ContextType>;
  value?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2MoveCartItemsToGiftRegistryOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['MoveCartItemsToGiftRegistryOutput'] = Magento2ResolversParentTypes['MoveCartItemsToGiftRegistryOutput']> = {
  gift_registry?: Resolver<Maybe<Magento2ResolversTypes['GiftRegistry']>, ParentType, ContextType>;
  status?: Resolver<Magento2ResolversTypes['Boolean'], ParentType, ContextType>;
  user_errors?: Resolver<Array<Maybe<Magento2ResolversTypes['GiftRegistryItemsUserError']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2MoveProductsBetweenWishlistsOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['MoveProductsBetweenWishlistsOutput'] = Magento2ResolversParentTypes['MoveProductsBetweenWishlistsOutput']> = {
  destination_wishlist?: Resolver<Magento2ResolversTypes['Wishlist'], ParentType, ContextType>;
  source_wishlist?: Resolver<Magento2ResolversTypes['Wishlist'], ParentType, ContextType>;
  user_errors?: Resolver<Array<Maybe<Magento2ResolversTypes['WishListUserInputError']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2MutationResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['Mutation'] = Magento2ResolversParentTypes['Mutation']> = {
  addBundleProductsToCart?: Resolver<Maybe<Magento2ResolversTypes['AddBundleProductsToCartOutput']>, ParentType, ContextType, RequireFields<Magento2MutationAddBundleProductsToCartArgs, never>>;
  addConfigurableProductsToCart?: Resolver<Maybe<Magento2ResolversTypes['AddConfigurableProductsToCartOutput']>, ParentType, ContextType, RequireFields<Magento2MutationAddConfigurableProductsToCartArgs, never>>;
  addDownloadableProductsToCart?: Resolver<Maybe<Magento2ResolversTypes['AddDownloadableProductsToCartOutput']>, ParentType, ContextType, RequireFields<Magento2MutationAddDownloadableProductsToCartArgs, never>>;
  addGiftRegistryRegistrants?: Resolver<Maybe<Magento2ResolversTypes['AddGiftRegistryRegistrantsOutput']>, ParentType, ContextType, RequireFields<Magento2MutationAddGiftRegistryRegistrantsArgs, 'giftRegistryUid' | 'registrants'>>;
  addProductsToCart?: Resolver<Maybe<Magento2ResolversTypes['AddProductsToCartOutput']>, ParentType, ContextType, RequireFields<Magento2MutationAddProductsToCartArgs, 'cartId' | 'cartItems'>>;
  addProductsToCompareList?: Resolver<Maybe<Magento2ResolversTypes['CompareList']>, ParentType, ContextType, RequireFields<Magento2MutationAddProductsToCompareListArgs, never>>;
  addProductsToWishlist?: Resolver<Maybe<Magento2ResolversTypes['AddProductsToWishlistOutput']>, ParentType, ContextType, RequireFields<Magento2MutationAddProductsToWishlistArgs, 'wishlistId' | 'wishlistItems'>>;
  addReturnComment?: Resolver<Maybe<Magento2ResolversTypes['AddReturnCommentOutput']>, ParentType, ContextType, RequireFields<Magento2MutationAddReturnCommentArgs, 'input'>>;
  addReturnTracking?: Resolver<Maybe<Magento2ResolversTypes['AddReturnTrackingOutput']>, ParentType, ContextType, RequireFields<Magento2MutationAddReturnTrackingArgs, 'input'>>;
  addSimpleProductsToCart?: Resolver<Maybe<Magento2ResolversTypes['AddSimpleProductsToCartOutput']>, ParentType, ContextType, RequireFields<Magento2MutationAddSimpleProductsToCartArgs, never>>;
  addVirtualProductsToCart?: Resolver<Maybe<Magento2ResolversTypes['AddVirtualProductsToCartOutput']>, ParentType, ContextType, RequireFields<Magento2MutationAddVirtualProductsToCartArgs, never>>;
  addWishlistItemsToCart?: Resolver<Maybe<Magento2ResolversTypes['AddWishlistItemsToCartOutput']>, ParentType, ContextType, RequireFields<Magento2MutationAddWishlistItemsToCartArgs, 'wishlistId'>>;
  applyCouponToCart?: Resolver<Maybe<Magento2ResolversTypes['ApplyCouponToCartOutput']>, ParentType, ContextType, RequireFields<Magento2MutationApplyCouponToCartArgs, never>>;
  applyGiftCardToCart?: Resolver<Maybe<Magento2ResolversTypes['ApplyGiftCardToCartOutput']>, ParentType, ContextType, RequireFields<Magento2MutationApplyGiftCardToCartArgs, never>>;
  applyRewardPointsToCart?: Resolver<Maybe<Magento2ResolversTypes['ApplyRewardPointsToCartOutput']>, ParentType, ContextType, RequireFields<Magento2MutationApplyRewardPointsToCartArgs, 'cartId'>>;
  applyStoreCreditToCart?: Resolver<Maybe<Magento2ResolversTypes['ApplyStoreCreditToCartOutput']>, ParentType, ContextType, RequireFields<Magento2MutationApplyStoreCreditToCartArgs, 'input'>>;
  assignCompareListToCustomer?: Resolver<Maybe<Magento2ResolversTypes['AssignCompareListToCustomerOutput']>, ParentType, ContextType, RequireFields<Magento2MutationAssignCompareListToCustomerArgs, 'uid'>>;
  changeCustomerPassword?: Resolver<Maybe<Magento2ResolversTypes['Customer']>, ParentType, ContextType, RequireFields<Magento2MutationChangeCustomerPasswordArgs, 'currentPassword' | 'newPassword'>>;
  contactUs?: Resolver<Maybe<Magento2ResolversTypes['ContactUsOutput']>, ParentType, ContextType, RequireFields<Magento2MutationContactUsArgs, 'input'>>;
  copyProductsBetweenWishlists?: Resolver<Maybe<Magento2ResolversTypes['CopyProductsBetweenWishlistsOutput']>, ParentType, ContextType, RequireFields<Magento2MutationCopyProductsBetweenWishlistsArgs, 'destinationWishlistUid' | 'sourceWishlistUid' | 'wishlistItems'>>;
  createBraintreeClientToken?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  createCompareList?: Resolver<Maybe<Magento2ResolversTypes['CompareList']>, ParentType, ContextType, RequireFields<Magento2MutationCreateCompareListArgs, never>>;
  createCustomer?: Resolver<Maybe<Magento2ResolversTypes['CustomerOutput']>, ParentType, ContextType, RequireFields<Magento2MutationCreateCustomerArgs, 'input'>>;
  createCustomerAddress?: Resolver<Maybe<Magento2ResolversTypes['CustomerAddress']>, ParentType, ContextType, RequireFields<Magento2MutationCreateCustomerAddressArgs, 'input'>>;
  createCustomerV2?: Resolver<Maybe<Magento2ResolversTypes['CustomerOutput']>, ParentType, ContextType, RequireFields<Magento2MutationCreateCustomerV2Args, 'input'>>;
  createEmptyCart?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType, RequireFields<Magento2MutationCreateEmptyCartArgs, never>>;
  createGiftRegistry?: Resolver<Maybe<Magento2ResolversTypes['CreateGiftRegistryOutput']>, ParentType, ContextType, RequireFields<Magento2MutationCreateGiftRegistryArgs, 'giftRegistry'>>;
  createKlarnaPaymentsSession?: Resolver<Maybe<Magento2ResolversTypes['createKlarnaPaymentsSessionOutput']>, ParentType, ContextType, RequireFields<Magento2MutationCreateKlarnaPaymentsSessionArgs, never>>;
  createPayflowProToken?: Resolver<Maybe<Magento2ResolversTypes['CreatePayflowProTokenOutput']>, ParentType, ContextType, RequireFields<Magento2MutationCreatePayflowProTokenArgs, 'input'>>;
  createPaypalExpressToken?: Resolver<Maybe<Magento2ResolversTypes['PaypalExpressTokenOutput']>, ParentType, ContextType, RequireFields<Magento2MutationCreatePaypalExpressTokenArgs, 'input'>>;
  createProductReview?: Resolver<Magento2ResolversTypes['CreateProductReviewOutput'], ParentType, ContextType, RequireFields<Magento2MutationCreateProductReviewArgs, 'input'>>;
  createWishlist?: Resolver<Maybe<Magento2ResolversTypes['CreateWishlistOutput']>, ParentType, ContextType, RequireFields<Magento2MutationCreateWishlistArgs, 'input'>>;
  deleteCompareList?: Resolver<Maybe<Magento2ResolversTypes['DeleteCompareListOutput']>, ParentType, ContextType, RequireFields<Magento2MutationDeleteCompareListArgs, 'uid'>>;
  deleteCustomerAddress?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<Magento2MutationDeleteCustomerAddressArgs, 'id'>>;
  deletePaymentToken?: Resolver<Maybe<Magento2ResolversTypes['DeletePaymentTokenOutput']>, ParentType, ContextType, RequireFields<Magento2MutationDeletePaymentTokenArgs, 'public_hash'>>;
  deleteWishlist?: Resolver<Maybe<Magento2ResolversTypes['DeleteWishlistOutput']>, ParentType, ContextType, RequireFields<Magento2MutationDeleteWishlistArgs, 'wishlistId'>>;
  generateCustomerToken?: Resolver<Maybe<Magento2ResolversTypes['CustomerToken']>, ParentType, ContextType, RequireFields<Magento2MutationGenerateCustomerTokenArgs, 'email' | 'password'>>;
  generateCustomerTokenAsAdmin?: Resolver<Maybe<Magento2ResolversTypes['GenerateCustomerTokenAsAdminOutput']>, ParentType, ContextType, RequireFields<Magento2MutationGenerateCustomerTokenAsAdminArgs, 'input'>>;
  handlePayflowProResponse?: Resolver<Maybe<Magento2ResolversTypes['PayflowProResponseOutput']>, ParentType, ContextType, RequireFields<Magento2MutationHandlePayflowProResponseArgs, 'input'>>;
  mergeCarts?: Resolver<Magento2ResolversTypes['Cart'], ParentType, ContextType, RequireFields<Magento2MutationMergeCartsArgs, 'source_cart_id'>>;
  moveCartItemsToGiftRegistry?: Resolver<Maybe<Magento2ResolversTypes['MoveCartItemsToGiftRegistryOutput']>, ParentType, ContextType, RequireFields<Magento2MutationMoveCartItemsToGiftRegistryArgs, 'cartUid' | 'giftRegistryUid'>>;
  moveProductsBetweenWishlists?: Resolver<Maybe<Magento2ResolversTypes['MoveProductsBetweenWishlistsOutput']>, ParentType, ContextType, RequireFields<Magento2MutationMoveProductsBetweenWishlistsArgs, 'destinationWishlistUid' | 'sourceWishlistUid' | 'wishlistItems'>>;
  placeOrder?: Resolver<Maybe<Magento2ResolversTypes['PlaceOrderOutput']>, ParentType, ContextType, RequireFields<Magento2MutationPlaceOrderArgs, never>>;
  redeemGiftCardBalanceAsStoreCredit?: Resolver<Maybe<Magento2ResolversTypes['GiftCardAccount']>, ParentType, ContextType, RequireFields<Magento2MutationRedeemGiftCardBalanceAsStoreCreditArgs, 'input'>>;
  removeCouponFromCart?: Resolver<Maybe<Magento2ResolversTypes['RemoveCouponFromCartOutput']>, ParentType, ContextType, RequireFields<Magento2MutationRemoveCouponFromCartArgs, never>>;
  removeGiftCardFromCart?: Resolver<Maybe<Magento2ResolversTypes['RemoveGiftCardFromCartOutput']>, ParentType, ContextType, RequireFields<Magento2MutationRemoveGiftCardFromCartArgs, never>>;
  removeGiftRegistry?: Resolver<Maybe<Magento2ResolversTypes['RemoveGiftRegistryOutput']>, ParentType, ContextType, RequireFields<Magento2MutationRemoveGiftRegistryArgs, 'giftRegistryUid'>>;
  removeGiftRegistryItems?: Resolver<Maybe<Magento2ResolversTypes['RemoveGiftRegistryItemsOutput']>, ParentType, ContextType, RequireFields<Magento2MutationRemoveGiftRegistryItemsArgs, 'giftRegistryUid' | 'itemsUid'>>;
  removeGiftRegistryRegistrants?: Resolver<Maybe<Magento2ResolversTypes['RemoveGiftRegistryRegistrantsOutput']>, ParentType, ContextType, RequireFields<Magento2MutationRemoveGiftRegistryRegistrantsArgs, 'giftRegistryUid' | 'registrantsUid'>>;
  removeItemFromCart?: Resolver<Maybe<Magento2ResolversTypes['RemoveItemFromCartOutput']>, ParentType, ContextType, RequireFields<Magento2MutationRemoveItemFromCartArgs, never>>;
  removeProductsFromCompareList?: Resolver<Maybe<Magento2ResolversTypes['CompareList']>, ParentType, ContextType, RequireFields<Magento2MutationRemoveProductsFromCompareListArgs, never>>;
  removeProductsFromWishlist?: Resolver<Maybe<Magento2ResolversTypes['RemoveProductsFromWishlistOutput']>, ParentType, ContextType, RequireFields<Magento2MutationRemoveProductsFromWishlistArgs, 'wishlistId' | 'wishlistItemsIds'>>;
  removeReturnTracking?: Resolver<Maybe<Magento2ResolversTypes['RemoveReturnTrackingOutput']>, ParentType, ContextType, RequireFields<Magento2MutationRemoveReturnTrackingArgs, 'input'>>;
  removeRewardPointsFromCart?: Resolver<Maybe<Magento2ResolversTypes['RemoveRewardPointsFromCartOutput']>, ParentType, ContextType, RequireFields<Magento2MutationRemoveRewardPointsFromCartArgs, 'cartId'>>;
  removeStoreCreditFromCart?: Resolver<Maybe<Magento2ResolversTypes['RemoveStoreCreditFromCartOutput']>, ParentType, ContextType, RequireFields<Magento2MutationRemoveStoreCreditFromCartArgs, 'input'>>;
  reorderItems?: Resolver<Maybe<Magento2ResolversTypes['ReorderItemsOutput']>, ParentType, ContextType, RequireFields<Magento2MutationReorderItemsArgs, 'orderNumber'>>;
  requestPasswordResetEmail?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<Magento2MutationRequestPasswordResetEmailArgs, 'email'>>;
  requestReturn?: Resolver<Maybe<Magento2ResolversTypes['RequestReturnOutput']>, ParentType, ContextType, RequireFields<Magento2MutationRequestReturnArgs, 'input'>>;
  resetPassword?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<Magento2MutationResetPasswordArgs, 'email' | 'newPassword' | 'resetPasswordToken'>>;
  revokeCustomerToken?: Resolver<Maybe<Magento2ResolversTypes['RevokeCustomerTokenOutput']>, ParentType, ContextType>;
  sendEmailToFriend?: Resolver<Maybe<Magento2ResolversTypes['SendEmailToFriendOutput']>, ParentType, ContextType, RequireFields<Magento2MutationSendEmailToFriendArgs, never>>;
  setBillingAddressOnCart?: Resolver<Maybe<Magento2ResolversTypes['SetBillingAddressOnCartOutput']>, ParentType, ContextType, RequireFields<Magento2MutationSetBillingAddressOnCartArgs, never>>;
  setGiftOptionsOnCart?: Resolver<Maybe<Magento2ResolversTypes['SetGiftOptionsOnCartOutput']>, ParentType, ContextType, RequireFields<Magento2MutationSetGiftOptionsOnCartArgs, never>>;
  setGuestEmailOnCart?: Resolver<Maybe<Magento2ResolversTypes['SetGuestEmailOnCartOutput']>, ParentType, ContextType, RequireFields<Magento2MutationSetGuestEmailOnCartArgs, never>>;
  setPaymentMethodAndPlaceOrder?: Resolver<Maybe<Magento2ResolversTypes['PlaceOrderOutput']>, ParentType, ContextType, RequireFields<Magento2MutationSetPaymentMethodAndPlaceOrderArgs, never>>;
  setPaymentMethodOnCart?: Resolver<Maybe<Magento2ResolversTypes['SetPaymentMethodOnCartOutput']>, ParentType, ContextType, RequireFields<Magento2MutationSetPaymentMethodOnCartArgs, never>>;
  setShippingAddressesOnCart?: Resolver<Maybe<Magento2ResolversTypes['SetShippingAddressesOnCartOutput']>, ParentType, ContextType, RequireFields<Magento2MutationSetShippingAddressesOnCartArgs, never>>;
  setShippingMethodsOnCart?: Resolver<Maybe<Magento2ResolversTypes['SetShippingMethodsOnCartOutput']>, ParentType, ContextType, RequireFields<Magento2MutationSetShippingMethodsOnCartArgs, never>>;
  shareGiftRegistry?: Resolver<Maybe<Magento2ResolversTypes['ShareGiftRegistryOutput']>, ParentType, ContextType, RequireFields<Magento2MutationShareGiftRegistryArgs, 'giftRegistryUid' | 'invitees' | 'sender'>>;
  subscribeEmailToNewsletter?: Resolver<Maybe<Magento2ResolversTypes['SubscribeEmailToNewsletterOutput']>, ParentType, ContextType, RequireFields<Magento2MutationSubscribeEmailToNewsletterArgs, 'email'>>;
  updateCartItems?: Resolver<Maybe<Magento2ResolversTypes['UpdateCartItemsOutput']>, ParentType, ContextType, RequireFields<Magento2MutationUpdateCartItemsArgs, never>>;
  updateChatProfile?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<Magento2MutationUpdateChatProfileArgs, 'profileId'>>;
  updateCustomer?: Resolver<Maybe<Magento2ResolversTypes['CustomerOutput']>, ParentType, ContextType, RequireFields<Magento2MutationUpdateCustomerArgs, 'input'>>;
  updateCustomerAddress?: Resolver<Maybe<Magento2ResolversTypes['CustomerAddress']>, ParentType, ContextType, RequireFields<Magento2MutationUpdateCustomerAddressArgs, 'id'>>;
  updateCustomerEmail?: Resolver<Maybe<Magento2ResolversTypes['CustomerOutput']>, ParentType, ContextType, RequireFields<Magento2MutationUpdateCustomerEmailArgs, 'email' | 'password'>>;
  updateCustomerV2?: Resolver<Maybe<Magento2ResolversTypes['CustomerOutput']>, ParentType, ContextType, RequireFields<Magento2MutationUpdateCustomerV2Args, 'input'>>;
  updateGiftRegistry?: Resolver<Maybe<Magento2ResolversTypes['UpdateGiftRegistryOutput']>, ParentType, ContextType, RequireFields<Magento2MutationUpdateGiftRegistryArgs, 'giftRegistry' | 'giftRegistryUid'>>;
  updateGiftRegistryItems?: Resolver<Maybe<Magento2ResolversTypes['UpdateGiftRegistryItemsOutput']>, ParentType, ContextType, RequireFields<Magento2MutationUpdateGiftRegistryItemsArgs, 'giftRegistryUid' | 'items'>>;
  updateGiftRegistryRegistrants?: Resolver<Maybe<Magento2ResolversTypes['UpdateGiftRegistryRegistrantsOutput']>, ParentType, ContextType, RequireFields<Magento2MutationUpdateGiftRegistryRegistrantsArgs, 'giftRegistryUid' | 'registrants'>>;
  updateProductsInWishlist?: Resolver<Maybe<Magento2ResolversTypes['UpdateProductsInWishlistOutput']>, ParentType, ContextType, RequireFields<Magento2MutationUpdateProductsInWishlistArgs, 'wishlistId' | 'wishlistItems'>>;
  updateQuoteEmail?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<Magento2MutationUpdateQuoteEmailArgs, 'cartId' | 'email'>>;
  updateWishlist?: Resolver<Maybe<Magento2ResolversTypes['UpdateWishlistOutput']>, ParentType, ContextType, RequireFields<Magento2MutationUpdateWishlistArgs, 'wishlistId'>>;
};

export type Magento2OrderResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['Order'] = Magento2ResolversParentTypes['Order']> = {
  items?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['String']>>>, ParentType, ContextType>;
  order_id?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  order_number?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  total?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2OrderAddressResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['OrderAddress'] = Magento2ResolversParentTypes['OrderAddress']> = {
  city?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  company?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  country_code?: Resolver<Maybe<Magento2ResolversTypes['CountryCodeEnum']>, ParentType, ContextType>;
  fax?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  firstname?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  lastname?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  middlename?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  postcode?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  prefix?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  region_id?: Resolver<Maybe<Magento2ResolversTypes['ID']>, ParentType, ContextType>;
  street?: Resolver<Array<Maybe<Magento2ResolversTypes['String']>>, ParentType, ContextType>;
  suffix?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  telephone?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  vat_id?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2OrderItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['OrderItem'] = Magento2ResolversParentTypes['OrderItem']> = {
  discounts?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['Discount']>>>, ParentType, ContextType>;
  eligible_for_return?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  entered_options?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['OrderItemOption']>>>, ParentType, ContextType>;
  gift_wrapping?: Resolver<Maybe<Magento2ResolversTypes['GiftWrapping']>, ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  product_name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  product_type?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  product_url_key?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  quantity_canceled?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_invoiced?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_ordered?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_refunded?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_returned?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_shipped?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  selected_options?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['OrderItemOption']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2OrderItemInterfaceResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['OrderItemInterface'] = Magento2ResolversParentTypes['OrderItemInterface']> = {
  __resolveType: TypeResolveFn<'BundleOrderItem' | 'DownloadableOrderItem' | 'GiftCardOrderItem' | 'OrderItem', ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['Discount']>>>, ParentType, ContextType>;
  eligible_for_return?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  entered_options?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['OrderItemOption']>>>, ParentType, ContextType>;
  gift_wrapping?: Resolver<Maybe<Magento2ResolversTypes['GiftWrapping']>, ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  product_name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  product_type?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  product_url_key?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  quantity_canceled?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_invoiced?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_ordered?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_refunded?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_returned?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  quantity_shipped?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  selected_options?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['OrderItemOption']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
};

export type Magento2OrderItemOptionResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['OrderItemOption'] = Magento2ResolversParentTypes['OrderItemOption']> = {
  label?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2OrderPaymentMethodResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['OrderPaymentMethod'] = Magento2ResolversParentTypes['OrderPaymentMethod']> = {
  additional_data?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['KeyValue']>>>, ParentType, ContextType>;
  name?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2OrderShipmentResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['OrderShipment'] = Magento2ResolversParentTypes['OrderShipment']> = {
  comments?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['SalesCommentItem']>>>, ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ShipmentItemInterface']>>>, ParentType, ContextType>;
  number?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  tracking?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ShipmentTracking']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2OrderTotalResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['OrderTotal'] = Magento2ResolversParentTypes['OrderTotal']> = {
  base_grand_total?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['Discount']>>>, ParentType, ContextType>;
  grand_total?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  shipping_handling?: Resolver<Maybe<Magento2ResolversTypes['ShippingHandling']>, ParentType, ContextType>;
  subtotal?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  taxes?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['TaxItem']>>>, ParentType, ContextType>;
  total_giftcard?: Resolver<Maybe<Magento2ResolversTypes['Money']>, ParentType, ContextType>;
  total_shipping?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  total_tax?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2PayflowLinkTokenResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['PayflowLinkToken'] = Magento2ResolversParentTypes['PayflowLinkToken']> = {
  mode?: Resolver<Maybe<Magento2ResolversTypes['PayflowLinkMode']>, ParentType, ContextType>;
  paypal_url?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  secure_token?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  secure_token_id?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2PayflowProResponseOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['PayflowProResponseOutput'] = Magento2ResolversParentTypes['PayflowProResponseOutput']> = {
  cart?: Resolver<Magento2ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2PayflowProTokenResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['PayflowProToken'] = Magento2ResolversParentTypes['PayflowProToken']> = {
  response_message?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  result?: Resolver<Magento2ResolversTypes['Int'], ParentType, ContextType>;
  result_code?: Resolver<Magento2ResolversTypes['Int'], ParentType, ContextType>;
  secure_token?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  secure_token_id?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2PaymentTokenResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['PaymentToken'] = Magento2ResolversParentTypes['PaymentToken']> = {
  details?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  payment_method_code?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  public_hash?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<Magento2ResolversTypes['PaymentTokenTypeEnum'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2PaypalExpressTokenResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['PaypalExpressToken'] = Magento2ResolversParentTypes['PaypalExpressToken']> = {
  paypal_urls?: Resolver<Maybe<Magento2ResolversTypes['PaypalExpressUrlList']>, ParentType, ContextType>;
  token?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2PaypalExpressTokenOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['PaypalExpressTokenOutput'] = Magento2ResolversParentTypes['PaypalExpressTokenOutput']> = {
  paypal_urls?: Resolver<Maybe<Magento2ResolversTypes['PaypalExpressUrlList']>, ParentType, ContextType>;
  token?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2PaypalExpressUrlListResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['PaypalExpressUrlList'] = Magento2ResolversParentTypes['PaypalExpressUrlList']> = {
  edit?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  start?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2PhysicalProductInterfaceResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['PhysicalProductInterface'] = Magento2ResolversParentTypes['PhysicalProductInterface']> = {
  __resolveType: TypeResolveFn<'BundleProduct' | 'ConfigurableProduct' | 'GiftCardProduct' | 'GroupedProduct' | 'SimpleProduct', ParentType, ContextType>;
  weight?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
};

export type Magento2PickupLocationResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['PickupLocation'] = Magento2ResolversParentTypes['PickupLocation']> = {
  city?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  contact_name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  country_id?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  fax?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  pickup_location_code?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  postcode?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  region_id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  street?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2PickupLocationsResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['PickupLocations'] = Magento2ResolversParentTypes['PickupLocations']> = {
  items?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['PickupLocation']>>>, ParentType, ContextType>;
  page_info?: Resolver<Maybe<Magento2ResolversTypes['SearchResultPageInfo']>, ParentType, ContextType>;
  total_count?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2PlaceOrderOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['PlaceOrderOutput'] = Magento2ResolversParentTypes['PlaceOrderOutput']> = {
  order?: Resolver<Magento2ResolversTypes['Order'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2PriceResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['Price'] = Magento2ResolversParentTypes['Price']> = {
  adjustments?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['PriceAdjustment']>>>, ParentType, ContextType>;
  amount?: Resolver<Maybe<Magento2ResolversTypes['Money']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2PriceAdjustmentResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['PriceAdjustment'] = Magento2ResolversParentTypes['PriceAdjustment']> = {
  amount?: Resolver<Maybe<Magento2ResolversTypes['Money']>, ParentType, ContextType>;
  code?: Resolver<Maybe<Magento2ResolversTypes['PriceAdjustmentCodesEnum']>, ParentType, ContextType>;
  description?: Resolver<Maybe<Magento2ResolversTypes['PriceAdjustmentDescriptionEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2PriceRangeResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['PriceRange'] = Magento2ResolversParentTypes['PriceRange']> = {
  maximum_price?: Resolver<Maybe<Magento2ResolversTypes['ProductPrice']>, ParentType, ContextType>;
  minimum_price?: Resolver<Magento2ResolversTypes['ProductPrice'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ProductAttributeResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ProductAttribute'] = Magento2ResolversParentTypes['ProductAttribute']> = {
  code?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ProductAttributeMetadataResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ProductAttributeMetadata'] = Magento2ResolversParentTypes['ProductAttributeMetadata']> = {
  attribute_labels?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['StoreLabels']>>>, ParentType, ContextType>;
  code?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  data_type?: Resolver<Maybe<Magento2ResolversTypes['ObjectDataTypeEnum']>, ParentType, ContextType>;
  entity_type?: Resolver<Maybe<Magento2ResolversTypes['AttributeEntityTypeEnum']>, ParentType, ContextType>;
  is_system?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  ui_input?: Resolver<Maybe<Magento2ResolversTypes['UiInputTypeInterface']>, ParentType, ContextType>;
  uid?: Resolver<Maybe<Magento2ResolversTypes['ID']>, ParentType, ContextType>;
  used_in_components?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CustomAttributesListsEnum']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ProductDiscountResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ProductDiscount'] = Magento2ResolversParentTypes['ProductDiscount']> = {
  amount_off?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  percent_off?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ProductImageResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ProductImage'] = Magento2ResolversParentTypes['ProductImage']> = {
  disabled?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  url?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ProductInterfaceResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ProductInterface'] = Magento2ResolversParentTypes['ProductInterface']> = {
  __resolveType: TypeResolveFn<'BundleProduct' | 'ConfigurableProduct' | 'DownloadableProduct' | 'GiftCardProduct' | 'GroupedProduct' | 'SimpleProduct' | 'VirtualProduct', ParentType, ContextType>;
  attribute_set_id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  canonical_url?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CategoryInterface']>>>, ParentType, ContextType>;
  color?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  country_of_manufacture?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  crosssell_products?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  custom_attributes?: Resolver<Array<Maybe<Magento2ResolversTypes['CustomAttribute']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<Magento2ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  fashion_color?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  fashion_material?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  fashion_size?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  fashion_style?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  format?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  gift_message_available?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  has_video?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<Magento2ResolversTypes['ProductImage']>, ParentType, ContextType>;
  is_returnable?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  media_gallery?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['MediaGalleryInterface']>>>, ParentType, ContextType>;
  media_gallery_entries?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['MediaGalleryEntry']>>>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  meta_keyword?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  new_from_date?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  new_to_date?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  only_x_left_in_stock?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  options_container?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<Magento2ResolversTypes['ProductPrices']>, ParentType, ContextType>;
  price_range?: Resolver<Magento2ResolversTypes['PriceRange'], ParentType, ContextType>;
  price_tiers?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['TierPrice']>>>, ParentType, ContextType>;
  product_links?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductLinksInterface']>>>, ParentType, ContextType>;
  rating_summary?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  related_products?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  review_count?: Resolver<Magento2ResolversTypes['Int'], ParentType, ContextType>;
  reviews?: Resolver<Magento2ResolversTypes['ProductReviews'], ParentType, ContextType, RequireFields<Magento2ProductInterfaceReviewsArgs, 'currentPage' | 'pageSize'>>;
  short_description?: Resolver<Maybe<Magento2ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  small_image?: Resolver<Maybe<Magento2ResolversTypes['ProductImage']>, ParentType, ContextType>;
  special_from_date?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  special_price?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  special_to_date?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  staged?: Resolver<Magento2ResolversTypes['Boolean'], ParentType, ContextType>;
  stock_status?: Resolver<Maybe<Magento2ResolversTypes['ProductStockStatus']>, ParentType, ContextType>;
  swatch_image?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<Magento2ResolversTypes['ProductImage']>, ParentType, ContextType>;
  tier_price?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  tier_prices?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductTierPrices']>>>, ParentType, ContextType>;
  type_id?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  upsell_products?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  url_path?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  url_rewrites?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['UrlRewrite']>>>, ParentType, ContextType>;
  url_suffix?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  video_file?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  websites?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['Website']>>>, ParentType, ContextType>;
};

export type Magento2ProductLinksResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ProductLinks'] = Magento2ResolversParentTypes['ProductLinks']> = {
  link_type?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  linked_product_sku?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  linked_product_type?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ProductLinksInterfaceResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ProductLinksInterface'] = Magento2ResolversParentTypes['ProductLinksInterface']> = {
  __resolveType: TypeResolveFn<'ProductLinks', ParentType, ContextType>;
  link_type?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  linked_product_sku?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  linked_product_type?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
};

export type Magento2ProductMediaGalleryEntriesContentResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ProductMediaGalleryEntriesContent'] = Magento2ResolversParentTypes['ProductMediaGalleryEntriesContent']> = {
  base64_encoded_data?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ProductMediaGalleryEntriesVideoContentResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ProductMediaGalleryEntriesVideoContent'] = Magento2ResolversParentTypes['ProductMediaGalleryEntriesVideoContent']> = {
  media_type?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  video_description?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  video_metadata?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  video_provider?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  video_title?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  video_url?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ProductPriceResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ProductPrice'] = Magento2ResolversParentTypes['ProductPrice']> = {
  discount?: Resolver<Maybe<Magento2ResolversTypes['ProductDiscount']>, ParentType, ContextType>;
  final_price?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  fixed_product_taxes?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['FixedProductTax']>>>, ParentType, ContextType>;
  regular_price?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ProductPricesResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ProductPrices'] = Magento2ResolversParentTypes['ProductPrices']> = {
  maximalPrice?: Resolver<Maybe<Magento2ResolversTypes['Price']>, ParentType, ContextType>;
  minimalPrice?: Resolver<Maybe<Magento2ResolversTypes['Price']>, ParentType, ContextType>;
  regularPrice?: Resolver<Maybe<Magento2ResolversTypes['Price']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ProductReviewResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ProductReview'] = Magento2ResolversParentTypes['ProductReview']> = {
  average_rating?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  created_at?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  nickname?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  product?: Resolver<Magento2ResolversTypes['ProductInterface'], ParentType, ContextType>;
  ratings_breakdown?: Resolver<Array<Maybe<Magento2ResolversTypes['ProductReviewRating']>>, ParentType, ContextType>;
  summary?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  text?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ProductReviewRatingResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ProductReviewRating'] = Magento2ResolversParentTypes['ProductReviewRating']> = {
  name?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ProductReviewRatingMetadataResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ProductReviewRatingMetadata'] = Magento2ResolversParentTypes['ProductReviewRatingMetadata']> = {
  id?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  values?: Resolver<Array<Maybe<Magento2ResolversTypes['ProductReviewRatingValueMetadata']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ProductReviewRatingValueMetadataResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ProductReviewRatingValueMetadata'] = Magento2ResolversParentTypes['ProductReviewRatingValueMetadata']> = {
  value?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  value_id?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ProductReviewRatingsMetadataResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ProductReviewRatingsMetadata'] = Magento2ResolversParentTypes['ProductReviewRatingsMetadata']> = {
  items?: Resolver<Array<Maybe<Magento2ResolversTypes['ProductReviewRatingMetadata']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ProductReviewsResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ProductReviews'] = Magento2ResolversParentTypes['ProductReviews']> = {
  items?: Resolver<Array<Maybe<Magento2ResolversTypes['ProductReview']>>, ParentType, ContextType>;
  page_info?: Resolver<Magento2ResolversTypes['SearchResultPageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ProductTierPricesResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ProductTierPrices'] = Magento2ResolversParentTypes['ProductTierPrices']> = {
  customer_group_id?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  percentage_value?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  qty?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  value?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  website_id?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ProductVideoResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ProductVideo'] = Magento2ResolversParentTypes['ProductVideo']> = {
  disabled?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  url?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  video_content?: Resolver<Maybe<Magento2ResolversTypes['ProductMediaGalleryEntriesVideoContent']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ProductsResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['Products'] = Magento2ResolversParentTypes['Products']> = {
  aggregations?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['Aggregation']>>>, ParentType, ContextType>;
  filters?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['LayerFilter']>>>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  page_info?: Resolver<Maybe<Magento2ResolversTypes['SearchResultPageInfo']>, ParentType, ContextType>;
  sort_fields?: Resolver<Maybe<Magento2ResolversTypes['SortFields']>, ParentType, ContextType>;
  total_count?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2QueryResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['Query'] = Magento2ResolversParentTypes['Query']> = {
  attributesMetadata?: Resolver<Maybe<Magento2ResolversTypes['AttributesMetadata']>, ParentType, ContextType, RequireFields<Magento2QueryAttributesMetadataArgs, 'entityType'>>;
  availableStores?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['StoreConfig']>>>, ParentType, ContextType, RequireFields<Magento2QueryAvailableStoresArgs, never>>;
  cart?: Resolver<Maybe<Magento2ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<Magento2QueryCartArgs, 'cart_id'>>;
  categories?: Resolver<Maybe<Magento2ResolversTypes['CategoryResult']>, ParentType, ContextType, RequireFields<Magento2QueryCategoriesArgs, 'currentPage' | 'pageSize'>>;
  category?: Resolver<Maybe<Magento2ResolversTypes['CategoryTree']>, ParentType, ContextType, RequireFields<Magento2QueryCategoryArgs, never>>;
  categoryList?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CategoryTree']>>>, ParentType, ContextType, RequireFields<Magento2QueryCategoryListArgs, never>>;
  chatData?: Resolver<Maybe<Magento2ResolversTypes['ChatData']>, ParentType, ContextType>;
  checkoutAgreements?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CheckoutAgreement']>>>, ParentType, ContextType>;
  cmsBlocks?: Resolver<Maybe<Magento2ResolversTypes['CmsBlocks']>, ParentType, ContextType, RequireFields<Magento2QueryCmsBlocksArgs, never>>;
  cmsPage?: Resolver<Maybe<Magento2ResolversTypes['CmsPage']>, ParentType, ContextType, RequireFields<Magento2QueryCmsPageArgs, never>>;
  compareList?: Resolver<Maybe<Magento2ResolversTypes['CompareList']>, ParentType, ContextType, RequireFields<Magento2QueryCompareListArgs, 'uid'>>;
  countries?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['Country']>>>, ParentType, ContextType>;
  country?: Resolver<Maybe<Magento2ResolversTypes['Country']>, ParentType, ContextType, RequireFields<Magento2QueryCountryArgs, never>>;
  currency?: Resolver<Maybe<Magento2ResolversTypes['Currency']>, ParentType, ContextType>;
  customAttributeMetadata?: Resolver<Maybe<Magento2ResolversTypes['CustomAttributeMetadata']>, ParentType, ContextType, RequireFields<Magento2QueryCustomAttributeMetadataArgs, 'attributes'>>;
  customer?: Resolver<Maybe<Magento2ResolversTypes['Customer']>, ParentType, ContextType>;
  customerCart?: Resolver<Magento2ResolversTypes['Cart'], ParentType, ContextType>;
  customerDownloadableProducts?: Resolver<Maybe<Magento2ResolversTypes['CustomerDownloadableProducts']>, ParentType, ContextType>;
  customerOrders?: Resolver<Maybe<Magento2ResolversTypes['CustomerOrders']>, ParentType, ContextType>;
  customerPaymentTokens?: Resolver<Maybe<Magento2ResolversTypes['CustomerPaymentTokens']>, ParentType, ContextType>;
  dynamicBlocks?: Resolver<Magento2ResolversTypes['DynamicBlocks'], ParentType, ContextType, RequireFields<Magento2QueryDynamicBlocksArgs, 'currentPage' | 'pageSize'>>;
  emailCaptureCheckout?: Resolver<Maybe<Magento2ResolversTypes['IsConfigSettingEnabledOutput']>, ParentType, ContextType>;
  emailCaptureNewsletter?: Resolver<Maybe<Magento2ResolversTypes['IsConfigSettingEnabledOutput']>, ParentType, ContextType>;
  getHostedProUrl?: Resolver<Maybe<Magento2ResolversTypes['HostedProUrl']>, ParentType, ContextType, RequireFields<Magento2QueryGetHostedProUrlArgs, 'input'>>;
  getPayflowLinkToken?: Resolver<Maybe<Magento2ResolversTypes['PayflowLinkToken']>, ParentType, ContextType, RequireFields<Magento2QueryGetPayflowLinkTokenArgs, 'input'>>;
  giftCardAccount?: Resolver<Maybe<Magento2ResolversTypes['GiftCardAccount']>, ParentType, ContextType, RequireFields<Magento2QueryGiftCardAccountArgs, 'input'>>;
  giftRegistry?: Resolver<Maybe<Magento2ResolversTypes['GiftRegistry']>, ParentType, ContextType, RequireFields<Magento2QueryGiftRegistryArgs, 'giftRegistryUid'>>;
  giftRegistryEmailSearch?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['GiftRegistrySearchResult']>>>, ParentType, ContextType, RequireFields<Magento2QueryGiftRegistryEmailSearchArgs, 'email'>>;
  giftRegistryIdSearch?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['GiftRegistrySearchResult']>>>, ParentType, ContextType, RequireFields<Magento2QueryGiftRegistryIdSearchArgs, 'giftRegistryUid'>>;
  giftRegistryTypeSearch?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['GiftRegistrySearchResult']>>>, ParentType, ContextType, RequireFields<Magento2QueryGiftRegistryTypeSearchArgs, 'firstName' | 'lastName'>>;
  giftRegistryTypes?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['GiftRegistryType']>>>, ParentType, ContextType>;
  isEmailAvailable?: Resolver<Maybe<Magento2ResolversTypes['IsEmailAvailableOutput']>, ParentType, ContextType, RequireFields<Magento2QueryIsEmailAvailableArgs, 'email'>>;
  orderData?: Resolver<Maybe<Magento2ResolversTypes['Order']>, ParentType, ContextType, RequireFields<Magento2QueryOrderDataArgs, 'orderId'>>;
  pickupLocations?: Resolver<Maybe<Magento2ResolversTypes['PickupLocations']>, ParentType, ContextType, RequireFields<Magento2QueryPickupLocationsArgs, 'currentPage' | 'pageSize'>>;
  productReviewRatingsMetadata?: Resolver<Magento2ResolversTypes['ProductReviewRatingsMetadata'], ParentType, ContextType>;
  products?: Resolver<Maybe<Magento2ResolversTypes['Products']>, ParentType, ContextType, RequireFields<Magento2QueryProductsArgs, 'currentPage' | 'pageSize'>>;
  recaptchaV3Config?: Resolver<Maybe<Magento2ResolversTypes['ReCaptchaConfigurationV3']>, ParentType, ContextType>;
  route?: Resolver<Maybe<Magento2ResolversTypes['RoutableInterface']>, ParentType, ContextType, RequireFields<Magento2QueryRouteArgs, 'url'>>;
  storeConfig?: Resolver<Maybe<Magento2ResolversTypes['StoreConfig']>, ParentType, ContextType>;
  trackingData?: Resolver<Maybe<Magento2ResolversTypes['TrackingData']>, ParentType, ContextType>;
  urlResolver?: Resolver<Maybe<Magento2ResolversTypes['EntityUrl']>, ParentType, ContextType, RequireFields<Magento2QueryUrlResolverArgs, 'url'>>;
  wishlist?: Resolver<Maybe<Magento2ResolversTypes['WishlistOutput']>, ParentType, ContextType>;
};

export type Magento2ReCaptchaConfigurationV3Resolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ReCaptchaConfigurationV3'] = Magento2ResolversParentTypes['ReCaptchaConfigurationV3']> = {
  badge_position?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  failure_message?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  forms?: Resolver<Array<Maybe<Magento2ResolversTypes['ReCaptchaFormEnum']>>, ParentType, ContextType>;
  language_code?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  minimum_score?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  website_key?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2RegionResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['Region'] = Magento2ResolversParentTypes['Region']> = {
  code?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2RemoveCouponFromCartOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['RemoveCouponFromCartOutput'] = Magento2ResolversParentTypes['RemoveCouponFromCartOutput']> = {
  cart?: Resolver<Maybe<Magento2ResolversTypes['Cart']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2RemoveGiftCardFromCartOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['RemoveGiftCardFromCartOutput'] = Magento2ResolversParentTypes['RemoveGiftCardFromCartOutput']> = {
  cart?: Resolver<Magento2ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2RemoveGiftRegistryItemsOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['RemoveGiftRegistryItemsOutput'] = Magento2ResolversParentTypes['RemoveGiftRegistryItemsOutput']> = {
  gift_registry?: Resolver<Maybe<Magento2ResolversTypes['GiftRegistry']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2RemoveGiftRegistryOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['RemoveGiftRegistryOutput'] = Magento2ResolversParentTypes['RemoveGiftRegistryOutput']> = {
  success?: Resolver<Magento2ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2RemoveGiftRegistryRegistrantsOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['RemoveGiftRegistryRegistrantsOutput'] = Magento2ResolversParentTypes['RemoveGiftRegistryRegistrantsOutput']> = {
  gift_registry?: Resolver<Maybe<Magento2ResolversTypes['GiftRegistry']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2RemoveItemFromCartOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['RemoveItemFromCartOutput'] = Magento2ResolversParentTypes['RemoveItemFromCartOutput']> = {
  cart?: Resolver<Magento2ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2RemoveProductsFromWishlistOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['RemoveProductsFromWishlistOutput'] = Magento2ResolversParentTypes['RemoveProductsFromWishlistOutput']> = {
  user_errors?: Resolver<Array<Maybe<Magento2ResolversTypes['WishListUserInputError']>>, ParentType, ContextType>;
  wishlist?: Resolver<Magento2ResolversTypes['Wishlist'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2RemoveReturnTrackingOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['RemoveReturnTrackingOutput'] = Magento2ResolversParentTypes['RemoveReturnTrackingOutput']> = {
  return?: Resolver<Maybe<Magento2ResolversTypes['Return']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2RemoveRewardPointsFromCartOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['RemoveRewardPointsFromCartOutput'] = Magento2ResolversParentTypes['RemoveRewardPointsFromCartOutput']> = {
  cart?: Resolver<Magento2ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2RemoveStoreCreditFromCartOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['RemoveStoreCreditFromCartOutput'] = Magento2ResolversParentTypes['RemoveStoreCreditFromCartOutput']> = {
  cart?: Resolver<Magento2ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ReorderItemsOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ReorderItemsOutput'] = Magento2ResolversParentTypes['ReorderItemsOutput']> = {
  cart?: Resolver<Magento2ResolversTypes['Cart'], ParentType, ContextType>;
  userInputErrors?: Resolver<Array<Maybe<Magento2ResolversTypes['CheckoutUserInputError']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2RequestReturnOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['RequestReturnOutput'] = Magento2ResolversParentTypes['RequestReturnOutput']> = {
  return?: Resolver<Maybe<Magento2ResolversTypes['Return']>, ParentType, ContextType>;
  returns?: Resolver<Maybe<Magento2ResolversTypes['Returns']>, ParentType, ContextType, RequireFields<Magento2RequestReturnOutputReturnsArgs, 'currentPage' | 'pageSize'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ReturnResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['Return'] = Magento2ResolversParentTypes['Return']> = {
  available_shipping_carriers?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ReturnShippingCarrier']>>>, ParentType, ContextType>;
  comments?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ReturnComment']>>>, ParentType, ContextType>;
  created_at?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  customer?: Resolver<Magento2ResolversTypes['ReturnCustomer'], ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ReturnItem']>>>, ParentType, ContextType>;
  number?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  order?: Resolver<Maybe<Magento2ResolversTypes['CustomerOrder']>, ParentType, ContextType>;
  shipping?: Resolver<Maybe<Magento2ResolversTypes['ReturnShipping']>, ParentType, ContextType>;
  status?: Resolver<Maybe<Magento2ResolversTypes['ReturnStatus']>, ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ReturnCommentResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ReturnComment'] = Magento2ResolversParentTypes['ReturnComment']> = {
  author_name?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  text?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ReturnCustomAttributeResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ReturnCustomAttribute'] = Magento2ResolversParentTypes['ReturnCustomAttribute']> = {
  label?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ReturnCustomerResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ReturnCustomer'] = Magento2ResolversParentTypes['ReturnCustomer']> = {
  email?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  firstname?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  lastname?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ReturnItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ReturnItem'] = Magento2ResolversParentTypes['ReturnItem']> = {
  custom_attributes?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ReturnCustomAttribute']>>>, ParentType, ContextType>;
  order_item?: Resolver<Magento2ResolversTypes['OrderItemInterface'], ParentType, ContextType>;
  quantity?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  request_quantity?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  status?: Resolver<Magento2ResolversTypes['ReturnItemStatus'], ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ReturnShippingResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ReturnShipping'] = Magento2ResolversParentTypes['ReturnShipping']> = {
  address?: Resolver<Maybe<Magento2ResolversTypes['ReturnShippingAddress']>, ParentType, ContextType>;
  tracking?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ReturnShippingTracking']>>>, ParentType, ContextType, RequireFields<Magento2ReturnShippingTrackingArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ReturnShippingAddressResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ReturnShippingAddress'] = Magento2ResolversParentTypes['ReturnShippingAddress']> = {
  city?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  contact_name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Magento2ResolversTypes['Country'], ParentType, ContextType>;
  postcode?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  region?: Resolver<Magento2ResolversTypes['Region'], ParentType, ContextType>;
  street?: Resolver<Array<Maybe<Magento2ResolversTypes['String']>>, ParentType, ContextType>;
  telephone?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ReturnShippingCarrierResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ReturnShippingCarrier'] = Magento2ResolversParentTypes['ReturnShippingCarrier']> = {
  label?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ReturnShippingTrackingResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ReturnShippingTracking'] = Magento2ResolversParentTypes['ReturnShippingTracking']> = {
  carrier?: Resolver<Magento2ResolversTypes['ReturnShippingCarrier'], ParentType, ContextType>;
  status?: Resolver<Maybe<Magento2ResolversTypes['ReturnShippingTrackingStatus']>, ParentType, ContextType>;
  tracking_number?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ReturnShippingTrackingStatusResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ReturnShippingTrackingStatus'] = Magento2ResolversParentTypes['ReturnShippingTrackingStatus']> = {
  text?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<Magento2ResolversTypes['ReturnShippingTrackingStatusType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ReturnsResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['Returns'] = Magento2ResolversParentTypes['Returns']> = {
  items?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['Return']>>>, ParentType, ContextType>;
  page_info?: Resolver<Maybe<Magento2ResolversTypes['SearchResultPageInfo']>, ParentType, ContextType>;
  total_count?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2RevokeCustomerTokenOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['RevokeCustomerTokenOutput'] = Magento2ResolversParentTypes['RevokeCustomerTokenOutput']> = {
  result?: Resolver<Magento2ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2RewardPointsResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['RewardPoints'] = Magento2ResolversParentTypes['RewardPoints']> = {
  balance?: Resolver<Maybe<Magento2ResolversTypes['RewardPointsAmount']>, ParentType, ContextType>;
  balance_history?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['RewardPointsBalanceHistoryItem']>>>, ParentType, ContextType>;
  exchange_rates?: Resolver<Maybe<Magento2ResolversTypes['RewardPointsExchangeRates']>, ParentType, ContextType>;
  subscription_status?: Resolver<Maybe<Magento2ResolversTypes['RewardPointsSubscriptionStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2RewardPointsAmountResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['RewardPointsAmount'] = Magento2ResolversParentTypes['RewardPointsAmount']> = {
  money?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  points?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2RewardPointsBalanceHistoryItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['RewardPointsBalanceHistoryItem'] = Magento2ResolversParentTypes['RewardPointsBalanceHistoryItem']> = {
  balance?: Resolver<Maybe<Magento2ResolversTypes['RewardPointsAmount']>, ParentType, ContextType>;
  change_reason?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  date?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  points_change?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2RewardPointsExchangeRatesResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['RewardPointsExchangeRates'] = Magento2ResolversParentTypes['RewardPointsExchangeRates']> = {
  earning?: Resolver<Maybe<Magento2ResolversTypes['RewardPointsRate']>, ParentType, ContextType>;
  redemption?: Resolver<Maybe<Magento2ResolversTypes['RewardPointsRate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2RewardPointsRateResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['RewardPointsRate'] = Magento2ResolversParentTypes['RewardPointsRate']> = {
  currency_amount?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  points?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2RewardPointsSubscriptionStatusResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['RewardPointsSubscriptionStatus'] = Magento2ResolversParentTypes['RewardPointsSubscriptionStatus']> = {
  balance_updates?: Resolver<Magento2ResolversTypes['RewardPointsSubscriptionStatusesEnum'], ParentType, ContextType>;
  points_expiration_notifications?: Resolver<Magento2ResolversTypes['RewardPointsSubscriptionStatusesEnum'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2RoutableInterfaceResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['RoutableInterface'] = Magento2ResolversParentTypes['RoutableInterface']> = {
  __resolveType: TypeResolveFn<'BundleProduct' | 'CategoryTree' | 'CmsPage' | 'ConfigurableProduct' | 'DownloadableProduct' | 'GiftCardProduct' | 'GroupedProduct' | 'SimpleProduct' | 'VirtualProduct', ParentType, ContextType>;
  redirect_code?: Resolver<Magento2ResolversTypes['Int'], ParentType, ContextType>;
  relative_url?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<Magento2ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
};

export type Magento2SalesCommentItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['SalesCommentItem'] = Magento2ResolversParentTypes['SalesCommentItem']> = {
  message?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2SalesItemInterfaceResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['SalesItemInterface'] = Magento2ResolversParentTypes['SalesItemInterface']> = {
  gift_message?: Resolver<Maybe<Magento2ResolversTypes['GiftMessage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2SearchResultPageInfoResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['SearchResultPageInfo'] = Magento2ResolversParentTypes['SearchResultPageInfo']> = {
  current_page?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  page_size?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  total_pages?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2SelectableInputTypeInterfaceResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['SelectableInputTypeInterface'] = Magento2ResolversParentTypes['SelectableInputTypeInterface']> = {
  __resolveType: TypeResolveFn<'UiAttributeTypeBoolean' | 'UiAttributeTypeMultiSelect' | 'UiAttributeTypeSelect', ParentType, ContextType>;
  attribute_options?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['AttributeOptionInterface']>>>, ParentType, ContextType>;
};

export type Magento2SelectedAttributeOptionResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['SelectedAttributeOption'] = Magento2ResolversParentTypes['SelectedAttributeOption']> = {
  attribute_option?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['AttributeOptionInterface']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2SelectedBundleOptionResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['SelectedBundleOption'] = Magento2ResolversParentTypes['SelectedBundleOption']> = {
  id?: Resolver<Magento2ResolversTypes['Int'], ParentType, ContextType>;
  label?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  values?: Resolver<Array<Maybe<Magento2ResolversTypes['SelectedBundleOptionValue']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2SelectedBundleOptionValueResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['SelectedBundleOptionValue'] = Magento2ResolversParentTypes['SelectedBundleOptionValue']> = {
  id?: Resolver<Magento2ResolversTypes['Int'], ParentType, ContextType>;
  label?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  quantity?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2SelectedConfigurableOptionResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['SelectedConfigurableOption'] = Magento2ResolversParentTypes['SelectedConfigurableOption']> = {
  configurable_product_option_uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  configurable_product_option_value_uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['Int'], ParentType, ContextType>;
  option_label?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  value_id?: Resolver<Magento2ResolversTypes['Int'], ParentType, ContextType>;
  value_label?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2SelectedCustomizableOptionResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['SelectedCustomizableOption'] = Magento2ResolversParentTypes['SelectedCustomizableOption']> = {
  customizable_option_uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['Int'], ParentType, ContextType>;
  is_required?: Resolver<Magento2ResolversTypes['Boolean'], ParentType, ContextType>;
  label?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  sort_order?: Resolver<Magento2ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  values?: Resolver<Array<Maybe<Magento2ResolversTypes['SelectedCustomizableOptionValue']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2SelectedCustomizableOptionValueResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['SelectedCustomizableOptionValue'] = Magento2ResolversParentTypes['SelectedCustomizableOptionValue']> = {
  customizable_option_value_uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['Int'], ParentType, ContextType>;
  label?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<Magento2ResolversTypes['CartItemSelectedOptionValuePrice'], ParentType, ContextType>;
  value?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2SelectedPaymentMethodResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['SelectedPaymentMethod'] = Magento2ResolversParentTypes['SelectedPaymentMethod']> = {
  code?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  purchase_order_number?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2SelectedShippingMethodResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['SelectedShippingMethod'] = Magento2ResolversParentTypes['SelectedShippingMethod']> = {
  amount?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  base_amount?: Resolver<Maybe<Magento2ResolversTypes['Money']>, ParentType, ContextType>;
  carrier_code?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  carrier_title?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  method_code?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  method_title?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2SendEmailToFriendOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['SendEmailToFriendOutput'] = Magento2ResolversParentTypes['SendEmailToFriendOutput']> = {
  recipients?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['SendEmailToFriendRecipient']>>>, ParentType, ContextType>;
  sender?: Resolver<Maybe<Magento2ResolversTypes['SendEmailToFriendSender']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2SendEmailToFriendRecipientResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['SendEmailToFriendRecipient'] = Magento2ResolversParentTypes['SendEmailToFriendRecipient']> = {
  email?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2SendEmailToFriendSenderResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['SendEmailToFriendSender'] = Magento2ResolversParentTypes['SendEmailToFriendSender']> = {
  email?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2SendFriendConfigurationResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['SendFriendConfiguration'] = Magento2ResolversParentTypes['SendFriendConfiguration']> = {
  enabled_for_customers?: Resolver<Magento2ResolversTypes['Boolean'], ParentType, ContextType>;
  enabled_for_guests?: Resolver<Magento2ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2SetBillingAddressOnCartOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['SetBillingAddressOnCartOutput'] = Magento2ResolversParentTypes['SetBillingAddressOnCartOutput']> = {
  cart?: Resolver<Magento2ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2SetGiftOptionsOnCartOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['SetGiftOptionsOnCartOutput'] = Magento2ResolversParentTypes['SetGiftOptionsOnCartOutput']> = {
  cart?: Resolver<Magento2ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2SetGuestEmailOnCartOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['SetGuestEmailOnCartOutput'] = Magento2ResolversParentTypes['SetGuestEmailOnCartOutput']> = {
  cart?: Resolver<Magento2ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2SetPaymentMethodOnCartOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['SetPaymentMethodOnCartOutput'] = Magento2ResolversParentTypes['SetPaymentMethodOnCartOutput']> = {
  cart?: Resolver<Magento2ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2SetShippingAddressesOnCartOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['SetShippingAddressesOnCartOutput'] = Magento2ResolversParentTypes['SetShippingAddressesOnCartOutput']> = {
  cart?: Resolver<Magento2ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2SetShippingMethodsOnCartOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['SetShippingMethodsOnCartOutput'] = Magento2ResolversParentTypes['SetShippingMethodsOnCartOutput']> = {
  cart?: Resolver<Magento2ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ShareGiftRegistryOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ShareGiftRegistryOutput'] = Magento2ResolversParentTypes['ShareGiftRegistryOutput']> = {
  is_shared?: Resolver<Magento2ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ShipmentItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ShipmentItem'] = Magento2ResolversParentTypes['ShipmentItem']> = {
  id?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<Magento2ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  quantity_shipped?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ShipmentItemInterfaceResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ShipmentItemInterface'] = Magento2ResolversParentTypes['ShipmentItemInterface']> = {
  __resolveType: TypeResolveFn<'BundleShipmentItem' | 'GiftCardShipmentItem' | 'ShipmentItem', ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  order_item?: Resolver<Maybe<Magento2ResolversTypes['OrderItemInterface']>, ParentType, ContextType>;
  product_name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  product_sale_price?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  product_sku?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  quantity_shipped?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
};

export type Magento2ShipmentTrackingResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ShipmentTracking'] = Magento2ResolversParentTypes['ShipmentTracking']> = {
  carrier?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  number?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ShippingCartAddressResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ShippingCartAddress'] = Magento2ResolversParentTypes['ShippingCartAddress']> = {
  available_shipping_methods?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['AvailableShippingMethod']>>>, ParentType, ContextType>;
  cart_items?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CartItemQuantity']>>>, ParentType, ContextType>;
  cart_items_v2?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CartItemInterface']>>>, ParentType, ContextType>;
  city?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  company?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Magento2ResolversTypes['CartAddressCountry'], ParentType, ContextType>;
  customer_notes?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  firstname?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  items_weight?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  lastname?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  pickup_location_code?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  postcode?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<Magento2ResolversTypes['CartAddressRegion']>, ParentType, ContextType>;
  selected_shipping_method?: Resolver<Maybe<Magento2ResolversTypes['SelectedShippingMethod']>, ParentType, ContextType>;
  street?: Resolver<Array<Maybe<Magento2ResolversTypes['String']>>, ParentType, ContextType>;
  telephone?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ShippingDiscountResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ShippingDiscount'] = Magento2ResolversParentTypes['ShippingDiscount']> = {
  amount?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2ShippingHandlingResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['ShippingHandling'] = Magento2ResolversParentTypes['ShippingHandling']> = {
  amount_excluding_tax?: Resolver<Maybe<Magento2ResolversTypes['Money']>, ParentType, ContextType>;
  amount_including_tax?: Resolver<Maybe<Magento2ResolversTypes['Money']>, ParentType, ContextType>;
  discounts?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ShippingDiscount']>>>, ParentType, ContextType>;
  taxes?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['TaxItem']>>>, ParentType, ContextType>;
  total_amount?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2SimpleCartItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['SimpleCartItem'] = Magento2ResolversParentTypes['SimpleCartItem']> = {
  available_gift_wrapping?: Resolver<Array<Maybe<Magento2ResolversTypes['GiftWrapping']>>, ParentType, ContextType>;
  customizable_options?: Resolver<Array<Maybe<Magento2ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CartItemError']>>>, ParentType, ContextType>;
  gift_message?: Resolver<Maybe<Magento2ResolversTypes['GiftMessage']>, ParentType, ContextType>;
  gift_wrapping?: Resolver<Maybe<Magento2ResolversTypes['GiftWrapping']>, ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  prices?: Resolver<Maybe<Magento2ResolversTypes['CartItemPrices']>, ParentType, ContextType>;
  product?: Resolver<Magento2ResolversTypes['ProductInterface'], ParentType, ContextType>;
  quantity?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2SimpleProductResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['SimpleProduct'] = Magento2ResolversParentTypes['SimpleProduct']> = {
  attribute_set_id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  canonical_url?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CategoryInterface']>>>, ParentType, ContextType>;
  color?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  country_of_manufacture?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  crosssell_products?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  custom_attributes?: Resolver<Array<Maybe<Magento2ResolversTypes['CustomAttribute']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<Magento2ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  fashion_color?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  fashion_material?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  fashion_size?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  fashion_style?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  format?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  gift_message_available?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  has_video?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<Magento2ResolversTypes['ProductImage']>, ParentType, ContextType>;
  is_returnable?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  media_gallery?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['MediaGalleryInterface']>>>, ParentType, ContextType>;
  media_gallery_entries?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['MediaGalleryEntry']>>>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  meta_keyword?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  new_from_date?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  new_to_date?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  only_x_left_in_stock?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CustomizableOptionInterface']>>>, ParentType, ContextType>;
  options_container?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<Magento2ResolversTypes['ProductPrices']>, ParentType, ContextType>;
  price_range?: Resolver<Magento2ResolversTypes['PriceRange'], ParentType, ContextType>;
  price_tiers?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['TierPrice']>>>, ParentType, ContextType>;
  product_links?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductLinksInterface']>>>, ParentType, ContextType>;
  rating_summary?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  redirect_code?: Resolver<Magento2ResolversTypes['Int'], ParentType, ContextType>;
  related_products?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  relative_url?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  review_count?: Resolver<Magento2ResolversTypes['Int'], ParentType, ContextType>;
  reviews?: Resolver<Magento2ResolversTypes['ProductReviews'], ParentType, ContextType, RequireFields<Magento2SimpleProductReviewsArgs, 'currentPage' | 'pageSize'>>;
  short_description?: Resolver<Maybe<Magento2ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  small_image?: Resolver<Maybe<Magento2ResolversTypes['ProductImage']>, ParentType, ContextType>;
  special_from_date?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  special_price?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  special_to_date?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  staged?: Resolver<Magento2ResolversTypes['Boolean'], ParentType, ContextType>;
  stock_status?: Resolver<Maybe<Magento2ResolversTypes['ProductStockStatus']>, ParentType, ContextType>;
  swatch_image?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<Magento2ResolversTypes['ProductImage']>, ParentType, ContextType>;
  tier_price?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  tier_prices?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductTierPrices']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<Magento2ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
  type_id?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  upsell_products?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  url_path?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  url_rewrites?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['UrlRewrite']>>>, ParentType, ContextType>;
  url_suffix?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  video_file?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  websites?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['Website']>>>, ParentType, ContextType>;
  weight?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2SimpleWishlistItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['SimpleWishlistItem'] = Magento2ResolversParentTypes['SimpleWishlistItem']> = {
  added_at?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  customizable_options?: Resolver<Array<Maybe<Magento2ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  product?: Resolver<Maybe<Magento2ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  quantity?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2SortFieldResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['SortField'] = Magento2ResolversParentTypes['SortField']> = {
  label?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2SortFieldsResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['SortFields'] = Magento2ResolversParentTypes['SortFields']> = {
  default?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['SortField']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2StoreConfigResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['StoreConfig'] = Magento2ResolversParentTypes['StoreConfig']> = {
  absolute_footer?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  allow_gift_receipt?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  allow_gift_wrapping_on_order?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  allow_gift_wrapping_on_order_items?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  allow_guests_to_write_product_reviews?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  allow_items?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  allow_order?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  allow_printed_card?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  autocomplete_on_storefront?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  base_currency_code?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  base_link_url?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  base_media_url?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  base_static_url?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  base_url?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  braintree_cc_vault_active?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  cart_gift_wrapping?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  cart_printed_card?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  catalog_default_sort_by?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  category_fixed_product_tax_display_setting?: Resolver<Maybe<Magento2ResolversTypes['FixedProductTaxDisplaySettings']>, ParentType, ContextType>;
  category_url_suffix?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  cms_home_page?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  cms_no_cookies?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  cms_no_route?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  configurable_thumbnail_source?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  contact_enabled?: Resolver<Magento2ResolversTypes['Boolean'], ParentType, ContextType>;
  copyright?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  default_description?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  default_display_currency_code?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  default_keywords?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  default_title?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  demonotice?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  enable_multiple_wishlists?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  front?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  grid_per_page?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  grid_per_page_values?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  head_includes?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  head_shortcut_icon?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  header_logo_src?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  is_default_store?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_default_store_group?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  list_mode?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  list_per_page?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  list_per_page_values?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  logo_alt?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  logo_height?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  logo_width?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  magento_reward_general_is_enabled?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  magento_reward_general_is_enabled_on_front?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  magento_reward_general_min_points_balance?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  magento_reward_general_publish_history?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  magento_reward_points_invitation_customer?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  magento_reward_points_invitation_customer_limit?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  magento_reward_points_invitation_order?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  magento_reward_points_invitation_order_limit?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  magento_reward_points_newsletter?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  magento_reward_points_order?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  magento_reward_points_register?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  magento_reward_points_review?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  magento_reward_points_review_limit?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  magento_wishlist_general_is_enabled?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  maximum_number_of_wishlists?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  minimum_password_length?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  newsletter_enabled?: Resolver<Magento2ResolversTypes['Boolean'], ParentType, ContextType>;
  no_route?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  payment_payflowpro_cc_vault_active?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  printed_card_price?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  product_fixed_product_tax_display_setting?: Resolver<Maybe<Magento2ResolversTypes['FixedProductTaxDisplaySettings']>, ParentType, ContextType>;
  product_reviews_enabled?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  product_url_suffix?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  required_character_classes_number?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  returns_enabled?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  root_category_id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  root_category_uid?: Resolver<Maybe<Magento2ResolversTypes['ID']>, ParentType, ContextType>;
  sales_fixed_product_tax_display_setting?: Resolver<Maybe<Magento2ResolversTypes['FixedProductTaxDisplaySettings']>, ParentType, ContextType>;
  sales_gift_wrapping?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  sales_printed_card?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  secure_base_link_url?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  secure_base_media_url?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  secure_base_static_url?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  secure_base_url?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  send_friend?: Resolver<Maybe<Magento2ResolversTypes['SendFriendConfiguration']>, ParentType, ContextType>;
  show_cms_breadcrumbs?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  store_code?: Resolver<Maybe<Magento2ResolversTypes['ID']>, ParentType, ContextType>;
  store_group_code?: Resolver<Maybe<Magento2ResolversTypes['ID']>, ParentType, ContextType>;
  store_group_name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  store_name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  store_sort_order?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  title_prefix?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  title_separator?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  title_suffix?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  use_store_in_url?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  website_code?: Resolver<Maybe<Magento2ResolversTypes['ID']>, ParentType, ContextType>;
  website_id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  website_name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  weight_unit?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  welcome?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2StoreLabelsResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['StoreLabels'] = Magento2ResolversParentTypes['StoreLabels']> = {
  label?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  store_code?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2StorefrontPropertiesResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['StorefrontProperties'] = Magento2ResolversParentTypes['StorefrontProperties']> = {
  position?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  use_in_layered_navigation?: Resolver<Maybe<Magento2ResolversTypes['UseInLayeredNavigationOptions']>, ParentType, ContextType>;
  use_in_product_listing?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  use_in_search_results_layered_navigation?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  visible_on_catalog_pages?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2SubscribeEmailToNewsletterOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['SubscribeEmailToNewsletterOutput'] = Magento2ResolversParentTypes['SubscribeEmailToNewsletterOutput']> = {
  status?: Resolver<Maybe<Magento2ResolversTypes['SubscriptionStatusesEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2SwatchDataResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['SwatchData'] = Magento2ResolversParentTypes['SwatchData']> = {
  type?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2SwatchDataInterfaceResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['SwatchDataInterface'] = Magento2ResolversParentTypes['SwatchDataInterface']> = {
  __resolveType: TypeResolveFn<'ColorSwatchData' | 'ImageSwatchData' | 'TextSwatchData', ParentType, ContextType>;
  value?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
};

export type Magento2SwatchLayerFilterItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['SwatchLayerFilterItem'] = Magento2ResolversParentTypes['SwatchLayerFilterItem']> = {
  items_count?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  label?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  swatch_data?: Resolver<Maybe<Magento2ResolversTypes['SwatchData']>, ParentType, ContextType>;
  value_string?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2SwatchLayerFilterItemInterfaceResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['SwatchLayerFilterItemInterface'] = Magento2ResolversParentTypes['SwatchLayerFilterItemInterface']> = {
  __resolveType: TypeResolveFn<'SwatchLayerFilterItem', ParentType, ContextType>;
  swatch_data?: Resolver<Maybe<Magento2ResolversTypes['SwatchData']>, ParentType, ContextType>;
};

export type Magento2TaxItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['TaxItem'] = Magento2ResolversParentTypes['TaxItem']> = {
  amount?: Resolver<Magento2ResolversTypes['Money'], ParentType, ContextType>;
  rate?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  title?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2TextSwatchDataResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['TextSwatchData'] = Magento2ResolversParentTypes['TextSwatchData']> = {
  value?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2TierPriceResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['TierPrice'] = Magento2ResolversParentTypes['TierPrice']> = {
  discount?: Resolver<Maybe<Magento2ResolversTypes['ProductDiscount']>, ParentType, ContextType>;
  final_price?: Resolver<Maybe<Magento2ResolversTypes['Money']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2TrackingDataResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['TrackingData'] = Magento2ResolversParentTypes['TrackingData']> = {
  page_tracking_enabled?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  region_prefix?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  roi_tracking_enabled?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  wbt_profile_id?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2UiAttributeTypeAnyResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['UiAttributeTypeAny'] = Magento2ResolversParentTypes['UiAttributeTypeAny']> = {
  is_html_allowed?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  ui_input_type?: Resolver<Maybe<Magento2ResolversTypes['UiInputTypeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2UiAttributeTypeBooleanResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['UiAttributeTypeBoolean'] = Magento2ResolversParentTypes['UiAttributeTypeBoolean']> = {
  attribute_options?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['AttributeOptionInterface']>>>, ParentType, ContextType>;
  is_html_allowed?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  ui_input_type?: Resolver<Maybe<Magento2ResolversTypes['UiInputTypeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2UiAttributeTypeFixedProductTaxResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['UiAttributeTypeFixedProductTax'] = Magento2ResolversParentTypes['UiAttributeTypeFixedProductTax']> = {
  is_html_allowed?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  ui_input_type?: Resolver<Maybe<Magento2ResolversTypes['UiInputTypeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2UiAttributeTypeMultiSelectResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['UiAttributeTypeMultiSelect'] = Magento2ResolversParentTypes['UiAttributeTypeMultiSelect']> = {
  attribute_options?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['AttributeOptionInterface']>>>, ParentType, ContextType>;
  is_html_allowed?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  ui_input_type?: Resolver<Maybe<Magento2ResolversTypes['UiInputTypeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2UiAttributeTypeSelectResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['UiAttributeTypeSelect'] = Magento2ResolversParentTypes['UiAttributeTypeSelect']> = {
  attribute_options?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['AttributeOptionInterface']>>>, ParentType, ContextType>;
  is_html_allowed?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  ui_input_type?: Resolver<Maybe<Magento2ResolversTypes['UiInputTypeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2UiInputTypeInterfaceResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['UiInputTypeInterface'] = Magento2ResolversParentTypes['UiInputTypeInterface']> = {
  __resolveType: TypeResolveFn<'UiAttributeTypeAny' | 'UiAttributeTypeBoolean' | 'UiAttributeTypeFixedProductTax' | 'UiAttributeTypeMultiSelect' | 'UiAttributeTypeSelect', ParentType, ContextType>;
  is_html_allowed?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  ui_input_type?: Resolver<Maybe<Magento2ResolversTypes['UiInputTypeEnum']>, ParentType, ContextType>;
};

export type Magento2UpdateCartItemsOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['UpdateCartItemsOutput'] = Magento2ResolversParentTypes['UpdateCartItemsOutput']> = {
  cart?: Resolver<Magento2ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2UpdateGiftRegistryItemsOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['UpdateGiftRegistryItemsOutput'] = Magento2ResolversParentTypes['UpdateGiftRegistryItemsOutput']> = {
  gift_registry?: Resolver<Maybe<Magento2ResolversTypes['GiftRegistry']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2UpdateGiftRegistryOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['UpdateGiftRegistryOutput'] = Magento2ResolversParentTypes['UpdateGiftRegistryOutput']> = {
  gift_registry?: Resolver<Maybe<Magento2ResolversTypes['GiftRegistry']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2UpdateGiftRegistryRegistrantsOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['UpdateGiftRegistryRegistrantsOutput'] = Magento2ResolversParentTypes['UpdateGiftRegistryRegistrantsOutput']> = {
  gift_registry?: Resolver<Maybe<Magento2ResolversTypes['GiftRegistry']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2UpdateProductsInWishlistOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['UpdateProductsInWishlistOutput'] = Magento2ResolversParentTypes['UpdateProductsInWishlistOutput']> = {
  user_errors?: Resolver<Array<Maybe<Magento2ResolversTypes['WishListUserInputError']>>, ParentType, ContextType>;
  wishlist?: Resolver<Magento2ResolversTypes['Wishlist'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2UpdateWishlistOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['UpdateWishlistOutput'] = Magento2ResolversParentTypes['UpdateWishlistOutput']> = {
  name?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  visibility?: Resolver<Magento2ResolversTypes['WishlistVisibilityEnum'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2UrlRewriteResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['UrlRewrite'] = Magento2ResolversParentTypes['UrlRewrite']> = {
  parameters?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['HttpQueryParameter']>>>, ParentType, ContextType>;
  url?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2VirtualCartItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['VirtualCartItem'] = Magento2ResolversParentTypes['VirtualCartItem']> = {
  customizable_options?: Resolver<Array<Maybe<Magento2ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CartItemError']>>>, ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  prices?: Resolver<Maybe<Magento2ResolversTypes['CartItemPrices']>, ParentType, ContextType>;
  product?: Resolver<Magento2ResolversTypes['ProductInterface'], ParentType, ContextType>;
  quantity?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2VirtualProductResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['VirtualProduct'] = Magento2ResolversParentTypes['VirtualProduct']> = {
  attribute_set_id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  canonical_url?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CategoryInterface']>>>, ParentType, ContextType>;
  color?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  country_of_manufacture?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  crosssell_products?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  custom_attributes?: Resolver<Array<Maybe<Magento2ResolversTypes['CustomAttribute']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<Magento2ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  fashion_color?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  fashion_material?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  fashion_size?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  fashion_style?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  format?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  gift_message_available?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  has_video?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<Magento2ResolversTypes['ProductImage']>, ParentType, ContextType>;
  is_returnable?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  media_gallery?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['MediaGalleryInterface']>>>, ParentType, ContextType>;
  media_gallery_entries?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['MediaGalleryEntry']>>>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  meta_keyword?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  new_from_date?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  new_to_date?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  only_x_left_in_stock?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['CustomizableOptionInterface']>>>, ParentType, ContextType>;
  options_container?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<Magento2ResolversTypes['ProductPrices']>, ParentType, ContextType>;
  price_range?: Resolver<Magento2ResolversTypes['PriceRange'], ParentType, ContextType>;
  price_tiers?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['TierPrice']>>>, ParentType, ContextType>;
  product_links?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductLinksInterface']>>>, ParentType, ContextType>;
  rating_summary?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  redirect_code?: Resolver<Magento2ResolversTypes['Int'], ParentType, ContextType>;
  related_products?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  relative_url?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  review_count?: Resolver<Magento2ResolversTypes['Int'], ParentType, ContextType>;
  reviews?: Resolver<Magento2ResolversTypes['ProductReviews'], ParentType, ContextType, RequireFields<Magento2VirtualProductReviewsArgs, 'currentPage' | 'pageSize'>>;
  short_description?: Resolver<Maybe<Magento2ResolversTypes['ComplexTextValue']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  small_image?: Resolver<Maybe<Magento2ResolversTypes['ProductImage']>, ParentType, ContextType>;
  special_from_date?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  special_price?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  special_to_date?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  staged?: Resolver<Magento2ResolversTypes['Boolean'], ParentType, ContextType>;
  stock_status?: Resolver<Maybe<Magento2ResolversTypes['ProductStockStatus']>, ParentType, ContextType>;
  swatch_image?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<Magento2ResolversTypes['ProductImage']>, ParentType, ContextType>;
  tier_price?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  tier_prices?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductTierPrices']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<Magento2ResolversTypes['UrlRewriteEntityTypeEnum']>, ParentType, ContextType>;
  type_id?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  upsell_products?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['ProductInterface']>>>, ParentType, ContextType>;
  url_key?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  url_path?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  url_rewrites?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['UrlRewrite']>>>, ParentType, ContextType>;
  url_suffix?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  video_file?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  websites?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['Website']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2VirtualWishlistItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['VirtualWishlistItem'] = Magento2ResolversParentTypes['VirtualWishlistItem']> = {
  added_at?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  customizable_options?: Resolver<Array<Maybe<Magento2ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  product?: Resolver<Maybe<Magento2ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  quantity?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2WebsiteResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['Website'] = Magento2ResolversParentTypes['Website']> = {
  code?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  default_group_id?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  is_default?: Resolver<Maybe<Magento2ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  sort_order?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2WishListUserInputErrorResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['WishListUserInputError'] = Magento2ResolversParentTypes['WishListUserInputError']> = {
  code?: Resolver<Magento2ResolversTypes['WishListUserInputErrorType'], ParentType, ContextType>;
  message?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2WishlistResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['Wishlist'] = Magento2ResolversParentTypes['Wishlist']> = {
  id?: Resolver<Maybe<Magento2ResolversTypes['ID']>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['WishlistItem']>>>, ParentType, ContextType>;
  items_count?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  items_v2?: Resolver<Maybe<Magento2ResolversTypes['WishlistItems']>, ParentType, ContextType, RequireFields<Magento2WishlistItems_V2Args, 'currentPage' | 'pageSize'>>;
  name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  sharing_code?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  visibility?: Resolver<Magento2ResolversTypes['WishlistVisibilityEnum'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2WishlistCartUserInputErrorResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['WishlistCartUserInputError'] = Magento2ResolversParentTypes['WishlistCartUserInputError']> = {
  code?: Resolver<Magento2ResolversTypes['WishlistCartUserInputErrorType'], ParentType, ContextType>;
  message?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  wishlistId?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  wishlistItemId?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2WishlistItemResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['WishlistItem'] = Magento2ResolversParentTypes['WishlistItem']> = {
  added_at?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  product?: Resolver<Maybe<Magento2ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  qty?: Resolver<Maybe<Magento2ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2WishlistItemInterfaceResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['WishlistItemInterface'] = Magento2ResolversParentTypes['WishlistItemInterface']> = {
  __resolveType: TypeResolveFn<'BundleWishlistItem' | 'ConfigurableWishlistItem' | 'DownloadableWishlistItem' | 'GiftCardWishlistItem' | 'GroupedProductWishlistItem' | 'SimpleWishlistItem' | 'VirtualWishlistItem', ParentType, ContextType>;
  added_at?: Resolver<Magento2ResolversTypes['String'], ParentType, ContextType>;
  customizable_options?: Resolver<Array<Maybe<Magento2ResolversTypes['SelectedCustomizableOption']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Magento2ResolversTypes['ID'], ParentType, ContextType>;
  product?: Resolver<Maybe<Magento2ResolversTypes['ProductInterface']>, ParentType, ContextType>;
  quantity?: Resolver<Magento2ResolversTypes['Float'], ParentType, ContextType>;
};

export type Magento2WishlistItemsResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['WishlistItems'] = Magento2ResolversParentTypes['WishlistItems']> = {
  items?: Resolver<Array<Maybe<Magento2ResolversTypes['WishlistItemInterface']>>, ParentType, ContextType>;
  page_info?: Resolver<Maybe<Magento2ResolversTypes['SearchResultPageInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2WishlistOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['WishlistOutput'] = Magento2ResolversParentTypes['WishlistOutput']> = {
  items?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['WishlistItem']>>>, ParentType, ContextType>;
  items_count?: Resolver<Maybe<Magento2ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  sharing_code?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2CreateKlarnaPaymentsSessionOutputResolvers<ContextType = any, ParentType extends Magento2ResolversParentTypes['createKlarnaPaymentsSessionOutput'] = Magento2ResolversParentTypes['createKlarnaPaymentsSessionOutput']> = {
  client_token?: Resolver<Maybe<Magento2ResolversTypes['String']>, ParentType, ContextType>;
  payment_method_categories?: Resolver<Maybe<Array<Maybe<Magento2ResolversTypes['Categories']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Magento2Resolvers<ContextType = any> = {
  AddBundleProductsToCartOutput?: Magento2AddBundleProductsToCartOutputResolvers<ContextType>;
  AddConfigurableProductsToCartOutput?: Magento2AddConfigurableProductsToCartOutputResolvers<ContextType>;
  AddDownloadableProductsToCartOutput?: Magento2AddDownloadableProductsToCartOutputResolvers<ContextType>;
  AddGiftRegistryRegistrantsOutput?: Magento2AddGiftRegistryRegistrantsOutputResolvers<ContextType>;
  AddProductsToCartOutput?: Magento2AddProductsToCartOutputResolvers<ContextType>;
  AddProductsToWishlistOutput?: Magento2AddProductsToWishlistOutputResolvers<ContextType>;
  AddReturnCommentOutput?: Magento2AddReturnCommentOutputResolvers<ContextType>;
  AddReturnTrackingOutput?: Magento2AddReturnTrackingOutputResolvers<ContextType>;
  AddSimpleProductsToCartOutput?: Magento2AddSimpleProductsToCartOutputResolvers<ContextType>;
  AddVirtualProductsToCartOutput?: Magento2AddVirtualProductsToCartOutputResolvers<ContextType>;
  AddWishlistItemsToCartOutput?: Magento2AddWishlistItemsToCartOutputResolvers<ContextType>;
  Aggregation?: Magento2AggregationResolvers<ContextType>;
  AggregationOption?: Magento2AggregationOptionResolvers<ContextType>;
  AggregationOptionInterface?: Magento2AggregationOptionInterfaceResolvers<ContextType>;
  AppliedCoupon?: Magento2AppliedCouponResolvers<ContextType>;
  AppliedGiftCard?: Magento2AppliedGiftCardResolvers<ContextType>;
  AppliedStoreCredit?: Magento2AppliedStoreCreditResolvers<ContextType>;
  ApplyCouponToCartOutput?: Magento2ApplyCouponToCartOutputResolvers<ContextType>;
  ApplyGiftCardToCartOutput?: Magento2ApplyGiftCardToCartOutputResolvers<ContextType>;
  ApplyRewardPointsToCartOutput?: Magento2ApplyRewardPointsToCartOutputResolvers<ContextType>;
  ApplyStoreCreditToCartOutput?: Magento2ApplyStoreCreditToCartOutputResolvers<ContextType>;
  Assets?: Magento2AssetsResolvers<ContextType>;
  AssignCompareListToCustomerOutput?: Magento2AssignCompareListToCustomerOutputResolvers<ContextType>;
  Attribute?: Magento2AttributeResolvers<ContextType>;
  AttributeMetadataInterface?: Magento2AttributeMetadataInterfaceResolvers<ContextType>;
  AttributeOption?: Magento2AttributeOptionResolvers<ContextType>;
  AttributeOptionInterface?: Magento2AttributeOptionInterfaceResolvers<ContextType>;
  AttributeOptions?: Magento2AttributeOptionsResolvers<ContextType>;
  AttributeOptionsInterface?: Magento2AttributeOptionsInterfaceResolvers<ContextType>;
  AttributesMetadata?: Magento2AttributesMetadataResolvers<ContextType>;
  AvailablePaymentMethod?: Magento2AvailablePaymentMethodResolvers<ContextType>;
  AvailableShippingMethod?: Magento2AvailableShippingMethodResolvers<ContextType>;
  BillingCartAddress?: Magento2BillingCartAddressResolvers<ContextType>;
  Breadcrumb?: Magento2BreadcrumbResolvers<ContextType>;
  BundleCartItem?: Magento2BundleCartItemResolvers<ContextType>;
  BundleCreditMemoItem?: Magento2BundleCreditMemoItemResolvers<ContextType>;
  BundleInvoiceItem?: Magento2BundleInvoiceItemResolvers<ContextType>;
  BundleItem?: Magento2BundleItemResolvers<ContextType>;
  BundleItemOption?: Magento2BundleItemOptionResolvers<ContextType>;
  BundleOrderItem?: Magento2BundleOrderItemResolvers<ContextType>;
  BundleProduct?: Magento2BundleProductResolvers<ContextType>;
  BundleShipmentItem?: Magento2BundleShipmentItemResolvers<ContextType>;
  BundleWishlistItem?: Magento2BundleWishlistItemResolvers<ContextType>;
  Cart?: Magento2CartResolvers<ContextType>;
  CartAddressCountry?: Magento2CartAddressCountryResolvers<ContextType>;
  CartAddressInterface?: Magento2CartAddressInterfaceResolvers<ContextType>;
  CartAddressRegion?: Magento2CartAddressRegionResolvers<ContextType>;
  CartDiscount?: Magento2CartDiscountResolvers<ContextType>;
  CartItemError?: Magento2CartItemErrorResolvers<ContextType>;
  CartItemInterface?: Magento2CartItemInterfaceResolvers<ContextType>;
  CartItemPrices?: Magento2CartItemPricesResolvers<ContextType>;
  CartItemQuantity?: Magento2CartItemQuantityResolvers<ContextType>;
  CartItemSelectedOptionValuePrice?: Magento2CartItemSelectedOptionValuePriceResolvers<ContextType>;
  CartPrices?: Magento2CartPricesResolvers<ContextType>;
  CartTaxItem?: Magento2CartTaxItemResolvers<ContextType>;
  CartUserInputError?: Magento2CartUserInputErrorResolvers<ContextType>;
  Categories?: Magento2CategoriesResolvers<ContextType>;
  CategoryInterface?: Magento2CategoryInterfaceResolvers<ContextType>;
  CategoryProducts?: Magento2CategoryProductsResolvers<ContextType>;
  CategoryResult?: Magento2CategoryResultResolvers<ContextType>;
  CategoryTree?: Magento2CategoryTreeResolvers<ContextType>;
  ChatData?: Magento2ChatDataResolvers<ContextType>;
  CheckoutAgreement?: Magento2CheckoutAgreementResolvers<ContextType>;
  CheckoutUserInputError?: Magento2CheckoutUserInputErrorResolvers<ContextType>;
  CmsBlock?: Magento2CmsBlockResolvers<ContextType>;
  CmsBlocks?: Magento2CmsBlocksResolvers<ContextType>;
  CmsPage?: Magento2CmsPageResolvers<ContextType>;
  ColorSwatchData?: Magento2ColorSwatchDataResolvers<ContextType>;
  ComparableAttribute?: Magento2ComparableAttributeResolvers<ContextType>;
  ComparableItem?: Magento2ComparableItemResolvers<ContextType>;
  CompareList?: Magento2CompareListResolvers<ContextType>;
  ComplexTextValue?: Magento2ComplexTextValueResolvers<ContextType>;
  ConfigurableAttributeOption?: Magento2ConfigurableAttributeOptionResolvers<ContextType>;
  ConfigurableCartItem?: Magento2ConfigurableCartItemResolvers<ContextType>;
  ConfigurableOptionAvailableForSelection?: Magento2ConfigurableOptionAvailableForSelectionResolvers<ContextType>;
  ConfigurableProduct?: Magento2ConfigurableProductResolvers<ContextType>;
  ConfigurableProductOption?: Magento2ConfigurableProductOptionResolvers<ContextType>;
  ConfigurableProductOptionValue?: Magento2ConfigurableProductOptionValueResolvers<ContextType>;
  ConfigurableProductOptions?: Magento2ConfigurableProductOptionsResolvers<ContextType>;
  ConfigurableProductOptionsSelection?: Magento2ConfigurableProductOptionsSelectionResolvers<ContextType>;
  ConfigurableProductOptionsValues?: Magento2ConfigurableProductOptionsValuesResolvers<ContextType>;
  ConfigurableVariant?: Magento2ConfigurableVariantResolvers<ContextType>;
  ConfigurableWishlistItem?: Magento2ConfigurableWishlistItemResolvers<ContextType>;
  ContactUsOutput?: Magento2ContactUsOutputResolvers<ContextType>;
  CopyProductsBetweenWishlistsOutput?: Magento2CopyProductsBetweenWishlistsOutputResolvers<ContextType>;
  Country?: Magento2CountryResolvers<ContextType>;
  CreateGiftRegistryOutput?: Magento2CreateGiftRegistryOutputResolvers<ContextType>;
  CreatePayflowProTokenOutput?: Magento2CreatePayflowProTokenOutputResolvers<ContextType>;
  CreateProductReviewOutput?: Magento2CreateProductReviewOutputResolvers<ContextType>;
  CreateWishlistOutput?: Magento2CreateWishlistOutputResolvers<ContextType>;
  CreditMemo?: Magento2CreditMemoResolvers<ContextType>;
  CreditMemoItem?: Magento2CreditMemoItemResolvers<ContextType>;
  CreditMemoItemInterface?: Magento2CreditMemoItemInterfaceResolvers<ContextType>;
  CreditMemoTotal?: Magento2CreditMemoTotalResolvers<ContextType>;
  Currency?: Magento2CurrencyResolvers<ContextType>;
  CustomAttribute?: Magento2CustomAttributeResolvers<ContextType>;
  CustomAttributeMetadata?: Magento2CustomAttributeMetadataResolvers<ContextType>;
  Customer?: Magento2CustomerResolvers<ContextType>;
  CustomerAddress?: Magento2CustomerAddressResolvers<ContextType>;
  CustomerAddressAttribute?: Magento2CustomerAddressAttributeResolvers<ContextType>;
  CustomerAddressRegion?: Magento2CustomerAddressRegionResolvers<ContextType>;
  CustomerDownloadableProduct?: Magento2CustomerDownloadableProductResolvers<ContextType>;
  CustomerDownloadableProducts?: Magento2CustomerDownloadableProductsResolvers<ContextType>;
  CustomerOrder?: Magento2CustomerOrderResolvers<ContextType>;
  CustomerOrders?: Magento2CustomerOrdersResolvers<ContextType>;
  CustomerOutput?: Magento2CustomerOutputResolvers<ContextType>;
  CustomerPaymentTokens?: Magento2CustomerPaymentTokensResolvers<ContextType>;
  CustomerStoreCredit?: Magento2CustomerStoreCreditResolvers<ContextType>;
  CustomerStoreCreditHistory?: Magento2CustomerStoreCreditHistoryResolvers<ContextType>;
  CustomerStoreCreditHistoryItem?: Magento2CustomerStoreCreditHistoryItemResolvers<ContextType>;
  CustomerToken?: Magento2CustomerTokenResolvers<ContextType>;
  CustomizableAreaOption?: Magento2CustomizableAreaOptionResolvers<ContextType>;
  CustomizableAreaValue?: Magento2CustomizableAreaValueResolvers<ContextType>;
  CustomizableCheckboxOption?: Magento2CustomizableCheckboxOptionResolvers<ContextType>;
  CustomizableCheckboxValue?: Magento2CustomizableCheckboxValueResolvers<ContextType>;
  CustomizableDateOption?: Magento2CustomizableDateOptionResolvers<ContextType>;
  CustomizableDateValue?: Magento2CustomizableDateValueResolvers<ContextType>;
  CustomizableDropDownOption?: Magento2CustomizableDropDownOptionResolvers<ContextType>;
  CustomizableDropDownValue?: Magento2CustomizableDropDownValueResolvers<ContextType>;
  CustomizableFieldOption?: Magento2CustomizableFieldOptionResolvers<ContextType>;
  CustomizableFieldValue?: Magento2CustomizableFieldValueResolvers<ContextType>;
  CustomizableFileOption?: Magento2CustomizableFileOptionResolvers<ContextType>;
  CustomizableFileValue?: Magento2CustomizableFileValueResolvers<ContextType>;
  CustomizableMultipleOption?: Magento2CustomizableMultipleOptionResolvers<ContextType>;
  CustomizableMultipleValue?: Magento2CustomizableMultipleValueResolvers<ContextType>;
  CustomizableOptionInterface?: Magento2CustomizableOptionInterfaceResolvers<ContextType>;
  CustomizableProductInterface?: Magento2CustomizableProductInterfaceResolvers<ContextType>;
  CustomizableRadioOption?: Magento2CustomizableRadioOptionResolvers<ContextType>;
  CustomizableRadioValue?: Magento2CustomizableRadioValueResolvers<ContextType>;
  DeleteCompareListOutput?: Magento2DeleteCompareListOutputResolvers<ContextType>;
  DeletePaymentTokenOutput?: Magento2DeletePaymentTokenOutputResolvers<ContextType>;
  DeleteWishlistOutput?: Magento2DeleteWishlistOutputResolvers<ContextType>;
  Discount?: Magento2DiscountResolvers<ContextType>;
  DownloadableCartItem?: Magento2DownloadableCartItemResolvers<ContextType>;
  DownloadableCreditMemoItem?: Magento2DownloadableCreditMemoItemResolvers<ContextType>;
  DownloadableInvoiceItem?: Magento2DownloadableInvoiceItemResolvers<ContextType>;
  DownloadableItemsLinks?: Magento2DownloadableItemsLinksResolvers<ContextType>;
  DownloadableOrderItem?: Magento2DownloadableOrderItemResolvers<ContextType>;
  DownloadableProduct?: Magento2DownloadableProductResolvers<ContextType>;
  DownloadableProductLinks?: Magento2DownloadableProductLinksResolvers<ContextType>;
  DownloadableProductSamples?: Magento2DownloadableProductSamplesResolvers<ContextType>;
  DownloadableWishlistItem?: Magento2DownloadableWishlistItemResolvers<ContextType>;
  DynamicBlock?: Magento2DynamicBlockResolvers<ContextType>;
  DynamicBlocks?: Magento2DynamicBlocksResolvers<ContextType>;
  EnteredAttributeValue?: Magento2EnteredAttributeValueResolvers<ContextType>;
  EntityUrl?: Magento2EntityUrlResolvers<ContextType>;
  ExchangeRate?: Magento2ExchangeRateResolvers<ContextType>;
  FixedProductTax?: Magento2FixedProductTaxResolvers<ContextType>;
  GenerateCustomerTokenAsAdminOutput?: Magento2GenerateCustomerTokenAsAdminOutputResolvers<ContextType>;
  GiftCardAccount?: Magento2GiftCardAccountResolvers<ContextType>;
  GiftCardAmounts?: Magento2GiftCardAmountsResolvers<ContextType>;
  GiftCardCartItem?: Magento2GiftCardCartItemResolvers<ContextType>;
  GiftCardCreditMemoItem?: Magento2GiftCardCreditMemoItemResolvers<ContextType>;
  GiftCardInvoiceItem?: Magento2GiftCardInvoiceItemResolvers<ContextType>;
  GiftCardItem?: Magento2GiftCardItemResolvers<ContextType>;
  GiftCardOptions?: Magento2GiftCardOptionsResolvers<ContextType>;
  GiftCardOrderItem?: Magento2GiftCardOrderItemResolvers<ContextType>;
  GiftCardProduct?: Magento2GiftCardProductResolvers<ContextType>;
  GiftCardShipmentItem?: Magento2GiftCardShipmentItemResolvers<ContextType>;
  GiftCardWishlistItem?: Magento2GiftCardWishlistItemResolvers<ContextType>;
  GiftMessage?: Magento2GiftMessageResolvers<ContextType>;
  GiftOptionsPrices?: Magento2GiftOptionsPricesResolvers<ContextType>;
  GiftRegistry?: Magento2GiftRegistryResolvers<ContextType>;
  GiftRegistryDynamicAttribute?: Magento2GiftRegistryDynamicAttributeResolvers<ContextType>;
  GiftRegistryDynamicAttributeInterface?: Magento2GiftRegistryDynamicAttributeInterfaceResolvers<ContextType>;
  GiftRegistryDynamicAttributeMetadata?: Magento2GiftRegistryDynamicAttributeMetadataResolvers<ContextType>;
  GiftRegistryDynamicAttributeMetadataInterface?: Magento2GiftRegistryDynamicAttributeMetadataInterfaceResolvers<ContextType>;
  GiftRegistryItem?: Magento2GiftRegistryItemResolvers<ContextType>;
  GiftRegistryItemInterface?: Magento2GiftRegistryItemInterfaceResolvers<ContextType>;
  GiftRegistryItemUserErrorInterface?: Magento2GiftRegistryItemUserErrorInterfaceResolvers<ContextType>;
  GiftRegistryItemUserErrors?: Magento2GiftRegistryItemUserErrorsResolvers<ContextType>;
  GiftRegistryItemsUserError?: Magento2GiftRegistryItemsUserErrorResolvers<ContextType>;
  GiftRegistryOutput?: Magento2GiftRegistryOutputResolvers<ContextType>;
  GiftRegistryOutputInterface?: Magento2GiftRegistryOutputInterfaceResolvers<ContextType>;
  GiftRegistryRegistrant?: Magento2GiftRegistryRegistrantResolvers<ContextType>;
  GiftRegistryRegistrantDynamicAttribute?: Magento2GiftRegistryRegistrantDynamicAttributeResolvers<ContextType>;
  GiftRegistrySearchResult?: Magento2GiftRegistrySearchResultResolvers<ContextType>;
  GiftRegistryType?: Magento2GiftRegistryTypeResolvers<ContextType>;
  GiftWrapping?: Magento2GiftWrappingResolvers<ContextType>;
  GiftWrappingImage?: Magento2GiftWrappingImageResolvers<ContextType>;
  GroupedProduct?: Magento2GroupedProductResolvers<ContextType>;
  GroupedProductItem?: Magento2GroupedProductItemResolvers<ContextType>;
  GroupedProductWishlistItem?: Magento2GroupedProductWishlistItemResolvers<ContextType>;
  HostedProUrl?: Magento2HostedProUrlResolvers<ContextType>;
  HttpQueryParameter?: Magento2HttpQueryParameterResolvers<ContextType>;
  ImageSwatchData?: Magento2ImageSwatchDataResolvers<ContextType>;
  Invoice?: Magento2InvoiceResolvers<ContextType>;
  InvoiceItem?: Magento2InvoiceItemResolvers<ContextType>;
  InvoiceItemInterface?: Magento2InvoiceItemInterfaceResolvers<ContextType>;
  InvoiceTotal?: Magento2InvoiceTotalResolvers<ContextType>;
  IsConfigSettingEnabledOutput?: Magento2IsConfigSettingEnabledOutputResolvers<ContextType>;
  IsEmailAvailableOutput?: Magento2IsEmailAvailableOutputResolvers<ContextType>;
  ItemSelectedBundleOption?: Magento2ItemSelectedBundleOptionResolvers<ContextType>;
  ItemSelectedBundleOptionValue?: Magento2ItemSelectedBundleOptionValueResolvers<ContextType>;
  KeyValue?: Magento2KeyValueResolvers<ContextType>;
  LayerFilter?: Magento2LayerFilterResolvers<ContextType>;
  LayerFilterItem?: Magento2LayerFilterItemResolvers<ContextType>;
  LayerFilterItemInterface?: Magento2LayerFilterItemInterfaceResolvers<ContextType>;
  MediaGalleryEntry?: Magento2MediaGalleryEntryResolvers<ContextType>;
  MediaGalleryInterface?: Magento2MediaGalleryInterfaceResolvers<ContextType>;
  Money?: Magento2MoneyResolvers<ContextType>;
  MoveCartItemsToGiftRegistryOutput?: Magento2MoveCartItemsToGiftRegistryOutputResolvers<ContextType>;
  MoveProductsBetweenWishlistsOutput?: Magento2MoveProductsBetweenWishlistsOutputResolvers<ContextType>;
  Mutation?: Magento2MutationResolvers<ContextType>;
  Order?: Magento2OrderResolvers<ContextType>;
  OrderAddress?: Magento2OrderAddressResolvers<ContextType>;
  OrderItem?: Magento2OrderItemResolvers<ContextType>;
  OrderItemInterface?: Magento2OrderItemInterfaceResolvers<ContextType>;
  OrderItemOption?: Magento2OrderItemOptionResolvers<ContextType>;
  OrderPaymentMethod?: Magento2OrderPaymentMethodResolvers<ContextType>;
  OrderShipment?: Magento2OrderShipmentResolvers<ContextType>;
  OrderTotal?: Magento2OrderTotalResolvers<ContextType>;
  PayflowLinkToken?: Magento2PayflowLinkTokenResolvers<ContextType>;
  PayflowProResponseOutput?: Magento2PayflowProResponseOutputResolvers<ContextType>;
  PayflowProToken?: Magento2PayflowProTokenResolvers<ContextType>;
  PaymentToken?: Magento2PaymentTokenResolvers<ContextType>;
  PaypalExpressToken?: Magento2PaypalExpressTokenResolvers<ContextType>;
  PaypalExpressTokenOutput?: Magento2PaypalExpressTokenOutputResolvers<ContextType>;
  PaypalExpressUrlList?: Magento2PaypalExpressUrlListResolvers<ContextType>;
  PhysicalProductInterface?: Magento2PhysicalProductInterfaceResolvers<ContextType>;
  PickupLocation?: Magento2PickupLocationResolvers<ContextType>;
  PickupLocations?: Magento2PickupLocationsResolvers<ContextType>;
  PlaceOrderOutput?: Magento2PlaceOrderOutputResolvers<ContextType>;
  Price?: Magento2PriceResolvers<ContextType>;
  PriceAdjustment?: Magento2PriceAdjustmentResolvers<ContextType>;
  PriceRange?: Magento2PriceRangeResolvers<ContextType>;
  ProductAttribute?: Magento2ProductAttributeResolvers<ContextType>;
  ProductAttributeMetadata?: Magento2ProductAttributeMetadataResolvers<ContextType>;
  ProductDiscount?: Magento2ProductDiscountResolvers<ContextType>;
  ProductImage?: Magento2ProductImageResolvers<ContextType>;
  ProductInterface?: Magento2ProductInterfaceResolvers<ContextType>;
  ProductLinks?: Magento2ProductLinksResolvers<ContextType>;
  ProductLinksInterface?: Magento2ProductLinksInterfaceResolvers<ContextType>;
  ProductMediaGalleryEntriesContent?: Magento2ProductMediaGalleryEntriesContentResolvers<ContextType>;
  ProductMediaGalleryEntriesVideoContent?: Magento2ProductMediaGalleryEntriesVideoContentResolvers<ContextType>;
  ProductPrice?: Magento2ProductPriceResolvers<ContextType>;
  ProductPrices?: Magento2ProductPricesResolvers<ContextType>;
  ProductReview?: Magento2ProductReviewResolvers<ContextType>;
  ProductReviewRating?: Magento2ProductReviewRatingResolvers<ContextType>;
  ProductReviewRatingMetadata?: Magento2ProductReviewRatingMetadataResolvers<ContextType>;
  ProductReviewRatingValueMetadata?: Magento2ProductReviewRatingValueMetadataResolvers<ContextType>;
  ProductReviewRatingsMetadata?: Magento2ProductReviewRatingsMetadataResolvers<ContextType>;
  ProductReviews?: Magento2ProductReviewsResolvers<ContextType>;
  ProductTierPrices?: Magento2ProductTierPricesResolvers<ContextType>;
  ProductVideo?: Magento2ProductVideoResolvers<ContextType>;
  Products?: Magento2ProductsResolvers<ContextType>;
  Query?: Magento2QueryResolvers<ContextType>;
  ReCaptchaConfigurationV3?: Magento2ReCaptchaConfigurationV3Resolvers<ContextType>;
  Region?: Magento2RegionResolvers<ContextType>;
  RemoveCouponFromCartOutput?: Magento2RemoveCouponFromCartOutputResolvers<ContextType>;
  RemoveGiftCardFromCartOutput?: Magento2RemoveGiftCardFromCartOutputResolvers<ContextType>;
  RemoveGiftRegistryItemsOutput?: Magento2RemoveGiftRegistryItemsOutputResolvers<ContextType>;
  RemoveGiftRegistryOutput?: Magento2RemoveGiftRegistryOutputResolvers<ContextType>;
  RemoveGiftRegistryRegistrantsOutput?: Magento2RemoveGiftRegistryRegistrantsOutputResolvers<ContextType>;
  RemoveItemFromCartOutput?: Magento2RemoveItemFromCartOutputResolvers<ContextType>;
  RemoveProductsFromWishlistOutput?: Magento2RemoveProductsFromWishlistOutputResolvers<ContextType>;
  RemoveReturnTrackingOutput?: Magento2RemoveReturnTrackingOutputResolvers<ContextType>;
  RemoveRewardPointsFromCartOutput?: Magento2RemoveRewardPointsFromCartOutputResolvers<ContextType>;
  RemoveStoreCreditFromCartOutput?: Magento2RemoveStoreCreditFromCartOutputResolvers<ContextType>;
  ReorderItemsOutput?: Magento2ReorderItemsOutputResolvers<ContextType>;
  RequestReturnOutput?: Magento2RequestReturnOutputResolvers<ContextType>;
  Return?: Magento2ReturnResolvers<ContextType>;
  ReturnComment?: Magento2ReturnCommentResolvers<ContextType>;
  ReturnCustomAttribute?: Magento2ReturnCustomAttributeResolvers<ContextType>;
  ReturnCustomer?: Magento2ReturnCustomerResolvers<ContextType>;
  ReturnItem?: Magento2ReturnItemResolvers<ContextType>;
  ReturnShipping?: Magento2ReturnShippingResolvers<ContextType>;
  ReturnShippingAddress?: Magento2ReturnShippingAddressResolvers<ContextType>;
  ReturnShippingCarrier?: Magento2ReturnShippingCarrierResolvers<ContextType>;
  ReturnShippingTracking?: Magento2ReturnShippingTrackingResolvers<ContextType>;
  ReturnShippingTrackingStatus?: Magento2ReturnShippingTrackingStatusResolvers<ContextType>;
  Returns?: Magento2ReturnsResolvers<ContextType>;
  RevokeCustomerTokenOutput?: Magento2RevokeCustomerTokenOutputResolvers<ContextType>;
  RewardPoints?: Magento2RewardPointsResolvers<ContextType>;
  RewardPointsAmount?: Magento2RewardPointsAmountResolvers<ContextType>;
  RewardPointsBalanceHistoryItem?: Magento2RewardPointsBalanceHistoryItemResolvers<ContextType>;
  RewardPointsExchangeRates?: Magento2RewardPointsExchangeRatesResolvers<ContextType>;
  RewardPointsRate?: Magento2RewardPointsRateResolvers<ContextType>;
  RewardPointsSubscriptionStatus?: Magento2RewardPointsSubscriptionStatusResolvers<ContextType>;
  RoutableInterface?: Magento2RoutableInterfaceResolvers<ContextType>;
  SalesCommentItem?: Magento2SalesCommentItemResolvers<ContextType>;
  SalesItemInterface?: Magento2SalesItemInterfaceResolvers<ContextType>;
  SearchResultPageInfo?: Magento2SearchResultPageInfoResolvers<ContextType>;
  SelectableInputTypeInterface?: Magento2SelectableInputTypeInterfaceResolvers<ContextType>;
  SelectedAttributeOption?: Magento2SelectedAttributeOptionResolvers<ContextType>;
  SelectedBundleOption?: Magento2SelectedBundleOptionResolvers<ContextType>;
  SelectedBundleOptionValue?: Magento2SelectedBundleOptionValueResolvers<ContextType>;
  SelectedConfigurableOption?: Magento2SelectedConfigurableOptionResolvers<ContextType>;
  SelectedCustomizableOption?: Magento2SelectedCustomizableOptionResolvers<ContextType>;
  SelectedCustomizableOptionValue?: Magento2SelectedCustomizableOptionValueResolvers<ContextType>;
  SelectedPaymentMethod?: Magento2SelectedPaymentMethodResolvers<ContextType>;
  SelectedShippingMethod?: Magento2SelectedShippingMethodResolvers<ContextType>;
  SendEmailToFriendOutput?: Magento2SendEmailToFriendOutputResolvers<ContextType>;
  SendEmailToFriendRecipient?: Magento2SendEmailToFriendRecipientResolvers<ContextType>;
  SendEmailToFriendSender?: Magento2SendEmailToFriendSenderResolvers<ContextType>;
  SendFriendConfiguration?: Magento2SendFriendConfigurationResolvers<ContextType>;
  SetBillingAddressOnCartOutput?: Magento2SetBillingAddressOnCartOutputResolvers<ContextType>;
  SetGiftOptionsOnCartOutput?: Magento2SetGiftOptionsOnCartOutputResolvers<ContextType>;
  SetGuestEmailOnCartOutput?: Magento2SetGuestEmailOnCartOutputResolvers<ContextType>;
  SetPaymentMethodOnCartOutput?: Magento2SetPaymentMethodOnCartOutputResolvers<ContextType>;
  SetShippingAddressesOnCartOutput?: Magento2SetShippingAddressesOnCartOutputResolvers<ContextType>;
  SetShippingMethodsOnCartOutput?: Magento2SetShippingMethodsOnCartOutputResolvers<ContextType>;
  ShareGiftRegistryOutput?: Magento2ShareGiftRegistryOutputResolvers<ContextType>;
  ShipmentItem?: Magento2ShipmentItemResolvers<ContextType>;
  ShipmentItemInterface?: Magento2ShipmentItemInterfaceResolvers<ContextType>;
  ShipmentTracking?: Magento2ShipmentTrackingResolvers<ContextType>;
  ShippingCartAddress?: Magento2ShippingCartAddressResolvers<ContextType>;
  ShippingDiscount?: Magento2ShippingDiscountResolvers<ContextType>;
  ShippingHandling?: Magento2ShippingHandlingResolvers<ContextType>;
  SimpleCartItem?: Magento2SimpleCartItemResolvers<ContextType>;
  SimpleProduct?: Magento2SimpleProductResolvers<ContextType>;
  SimpleWishlistItem?: Magento2SimpleWishlistItemResolvers<ContextType>;
  SortField?: Magento2SortFieldResolvers<ContextType>;
  SortFields?: Magento2SortFieldsResolvers<ContextType>;
  StoreConfig?: Magento2StoreConfigResolvers<ContextType>;
  StoreLabels?: Magento2StoreLabelsResolvers<ContextType>;
  StorefrontProperties?: Magento2StorefrontPropertiesResolvers<ContextType>;
  SubscribeEmailToNewsletterOutput?: Magento2SubscribeEmailToNewsletterOutputResolvers<ContextType>;
  SwatchData?: Magento2SwatchDataResolvers<ContextType>;
  SwatchDataInterface?: Magento2SwatchDataInterfaceResolvers<ContextType>;
  SwatchLayerFilterItem?: Magento2SwatchLayerFilterItemResolvers<ContextType>;
  SwatchLayerFilterItemInterface?: Magento2SwatchLayerFilterItemInterfaceResolvers<ContextType>;
  TaxItem?: Magento2TaxItemResolvers<ContextType>;
  TextSwatchData?: Magento2TextSwatchDataResolvers<ContextType>;
  TierPrice?: Magento2TierPriceResolvers<ContextType>;
  TrackingData?: Magento2TrackingDataResolvers<ContextType>;
  UiAttributeTypeAny?: Magento2UiAttributeTypeAnyResolvers<ContextType>;
  UiAttributeTypeBoolean?: Magento2UiAttributeTypeBooleanResolvers<ContextType>;
  UiAttributeTypeFixedProductTax?: Magento2UiAttributeTypeFixedProductTaxResolvers<ContextType>;
  UiAttributeTypeMultiSelect?: Magento2UiAttributeTypeMultiSelectResolvers<ContextType>;
  UiAttributeTypeSelect?: Magento2UiAttributeTypeSelectResolvers<ContextType>;
  UiInputTypeInterface?: Magento2UiInputTypeInterfaceResolvers<ContextType>;
  UpdateCartItemsOutput?: Magento2UpdateCartItemsOutputResolvers<ContextType>;
  UpdateGiftRegistryItemsOutput?: Magento2UpdateGiftRegistryItemsOutputResolvers<ContextType>;
  UpdateGiftRegistryOutput?: Magento2UpdateGiftRegistryOutputResolvers<ContextType>;
  UpdateGiftRegistryRegistrantsOutput?: Magento2UpdateGiftRegistryRegistrantsOutputResolvers<ContextType>;
  UpdateProductsInWishlistOutput?: Magento2UpdateProductsInWishlistOutputResolvers<ContextType>;
  UpdateWishlistOutput?: Magento2UpdateWishlistOutputResolvers<ContextType>;
  UrlRewrite?: Magento2UrlRewriteResolvers<ContextType>;
  VirtualCartItem?: Magento2VirtualCartItemResolvers<ContextType>;
  VirtualProduct?: Magento2VirtualProductResolvers<ContextType>;
  VirtualWishlistItem?: Magento2VirtualWishlistItemResolvers<ContextType>;
  Website?: Magento2WebsiteResolvers<ContextType>;
  WishListUserInputError?: Magento2WishListUserInputErrorResolvers<ContextType>;
  Wishlist?: Magento2WishlistResolvers<ContextType>;
  WishlistCartUserInputError?: Magento2WishlistCartUserInputErrorResolvers<ContextType>;
  WishlistItem?: Magento2WishlistItemResolvers<ContextType>;
  WishlistItemInterface?: Magento2WishlistItemInterfaceResolvers<ContextType>;
  WishlistItems?: Magento2WishlistItemsResolvers<ContextType>;
  WishlistOutput?: Magento2WishlistOutputResolvers<ContextType>;
  createKlarnaPaymentsSessionOutput?: Magento2CreateKlarnaPaymentsSessionOutputResolvers<ContextType>;
};

export type Magento2DirectiveResolvers<ContextType = any> = {
  client?: Magento2ClientDirectiveResolver<any, any, ContextType>;
};

export type Magento2StoreFragmentsKeys = keyof Magento2ResolversParentTypes;
export type Magento2StorePossibleTypesKeys = keyof Magento2ResolversParentTypes;
