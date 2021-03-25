export const locationAttributesMapping = {
  id: "ID",
  name: "Name",
  phone: "Phone Number",
  contact: {
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
  contact: {
    street: string;
    streetNumber: string;
    zip: string;
    city: string;
  };
  skills: string[];
}
