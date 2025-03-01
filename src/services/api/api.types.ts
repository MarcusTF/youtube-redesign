/**
 * Complete reference for all Faker API Custom field types
 */
export const Faker = {
  /**
   * Generates a boolean value
   * @example true
   */
  boolean: "boolean",

  /**
   * Generates a boolean as a digit
   * @example 0
   */
  boolean_digit: "boolean_digit",

  /**
   * Generates a building number
   * @example "53187"
   */
  buildingNumber: "buildingNumber",

  /**
   * Generates a building number (alias)
   * @example "53187"
   */
  building_number: "building_number",

  /**
   * Generates a credit card expiration date
   * @example "02/25"
   */
  card_expiration: "card_expiration",

  /**
   * Generates a credit card number
   * @example "4556082033886662"
   */
  card_number: "card_number",

  /**
   * Generates a credit card type
   * @example "Visa"
   */
  card_type: "card_type",

  /**
   * Generates a city name
   * @example "Priceborough"
   */
  city: "city",

  /**
   * Generates a company name
   * @example "Schmitt, Gutmann and Bahringer"
   */
  company_name: "company_name",

  /**
   * Generates a sequential counter
   * @example 8
   */
  counter: "counter",

  /**
   * Generates a country name
   * @example "Tonga"
   */
  country: "country",

  /**
   * Generates a country code
   * @example "BO"
   */
  countryCode: "countryCode",

  /**
   * Generates a country code (alias)
   * @example "BO"
   */
  country_code: "country_code",

  /**
   * Generates a date
   * @example "1971-11-13"
   */
  date: "date",

  /**
   * Generates a date and time
   * @example {"date":"2002-11-10 13:45:33.000000","timezone_type":3,"timezone":"UTC"}
   */
  dateTime: "dateTime",

  /**
   * Generates a date and time (alias)
   * @example {"date":"2002-11-10 13:45:33.000000","timezone_type":3,"timezone":"UTC"}
   */
  date_time: "date_time",

  /**
   * Generates an EAN (European Article Number)
   * @example "7532778771811"
   */
  ean: "ean",

  /**
   * Generates an email address
   * @example "unique67@swift.biz"
   */
  email: "email",

  /**
   * Generates a first name
   * @example "Jakob"
   */
  firstName: "firstName",

  /**
   * Generates a first name (alias)
   * @example "Jakob"
   */
  first_name: "first_name",

  /**
   * Generates an image URL
   * @example "http://placeimg.com/640/480/any"
   */
  image: "image",

  /**
   * Generates a last name
   * @example "Fritsch"
   */
  lastName: "lastName",

  /**
   * Generates a last name (alias)
   * @example "Fritsch"
   */
  last_name: "last_name",

  /**
   * Generates a latitude coordinate
   * @example -35.512254
   */
  latitude: "latitude",

  /**
   * Generates a long text passage
   * @example "No accounting for tastes! Sing her "Turtle Soup," will you, won't you, will you, won't you join the dance..."
   */
  longText: "longText",

  /**
   * Generates a long text passage (alias)
   * @example "No accounting for tastes! Sing her "Turtle Soup," will you, won't you, will you, won't you join the dance..."
   */
  long_text: "long_text",

  /**
   * Generates a longitude coordinate
   * @example 14.42684
   */
  longitude: "longitude",

  /**
   * Generates a full name
   * @example "Abigale Bode"
   */
  name: "name",

  /**
   * Generates a null value
   * @example null
   */
  null: "null",

  /**
   * Generates a number
   * @example 71306343
   */
  number: "number",

  /**
   * Generates a phone number
   * @example "+1151949349100"
   */
  phone: "phone",

  /**
   * Generates a Pokémon name
   * @example "Prinplup"
   */
  pokemon: "pokemon",

  /**
   * Generates a postal code
   * @example "20687"
   */
  postcode: "postcode",

  /**
   * Generates a state name
   * @example "Pennsylvania"
   */
  state: "state",

  /**
   * Generates a street address
   * @example "6153 Gabe Forest Suite 236"
   */
  streetAddress: "streetAddress",

  /**
   * Generates a street name
   * @example "Una Shoal"
   */
  streetName: "streetName",

  /**
   * Generates a street address (alias)
   * @example "6153 Gabe Forest Suite 236"
   */
  street_address: "street_address",

  /**
   * Generates a street name (alias)
   * @example "Una Shoal"
   */
  street_name: "street_name",

  /**
   * Generates random text
   * @example "Hatter. 'He won't stand beating. Now, if you want to get through was more and more sounds of broken glass, from which she concluded that it might belong to one of the water, and seemed not to be two."
   */
  text: "text",

  /**
   * Generates a Universal Product Code
   * @example "677703563138"
   */
  upc: "upc",

  /**
   * Generates a UUID
   * @example "18a374fa-4e69-3c4e-86da-ebc71870b594"
   */
  uuid: "uuid",

  /**
   * Generates a VAT (Value Added Tax) number
   * @example "0276969273"
   */
  vat: "vat",

  /**
   * Generates a website URL
   * @example "stark.com"
   */
  website: "website",

  /**
   * Generates a single word
   * @example "velit"
   */
  word: "word",
} as const;

// Type derived from the object above
export type FakerAPICustomFieldType = typeof Faker;
export type FakerAPICustomField = keyof FakerAPICustomFieldType;

// Example usage:
// const customFields: FakerAPICustomFieldType = {
//   myName: "firstName",
//   userEmail: "email",
//   userAddress: "address"
// };

export interface FakerResponse<
  TData extends Partial<Record<string, unknown>> = Record<string, unknown>,
> {
  status: string;
  code: number;
  locale: string;
  seed: string;
  total: number;
  data: TData[];
}
