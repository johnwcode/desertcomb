export const locationAttributesMapping = {
  id: "ID",
  name: "Name",
  phone: "Phone Number",
  address: {
    _prefix: "Contact",
    street: "Street",
    streetNumber: "Street Number",
    zip: "ZIP",
    city: "City"
  },
  skills: {
    _prefix: "Skill",
    _listField: true
  }
};

export interface Location {
  id: string;
  name: string;
  phone: string;
  address: {
    street: string;
    streetNumber: string;
    zip: string;
    city: string;
  };
  skills: string[];
}
