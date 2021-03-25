export const locationAttributesMapping = {
  id: "ID",
  name: "Name",
  phone: "Phone Number",
  address: {
    _prefix: "Address",
    street: "Street",
    streetNumber: "Street Number",
    zip: "Zip",
    city: "City"
  },
  skills: {
    _prefix: "Skill",
    _listField: true
  },
  locationType: "Location Type",
  notes: "Notes"
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
  locationType: string;
  notes: string;
}
