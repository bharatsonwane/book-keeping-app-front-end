const medicalStoreSchema = {
    name: "medicalStoreSchema",
    label: "Medical Store Schema",
    type: "schema",
    version: "1.0",
    children: [
      {
        label: "Store Details",
        type: "parentTab",
        children: [
          {
            label: "Basic Information",
            type: "tab",
            children: [
              {
                label: "Store Name",
                type: "text",
                dataMappingName: "store.name",
                validationType: "string",
                validations: [
                  { type: "min", params: [3, "Must be at least 3 characters"] },
                  { type: "max", params: [50, "Must be at most 50 characters"] },
                  { type: "trim" },
                ],
                readOnly: false,
                isMultilingual: false,
              },
              {
                label: "Store ID",
                type: "text",
                dataMappingName: "store.id",
                validationType: "string",
                validations: [
                  { type: "min", params: [3, "Must be at least 3 characters"] },
                  { type: "max", params: [50, "Must be at most 50 characters"] },
                  { type: "trim" },
                ],
                readOnly: false,
                isMultilingual: false,
              },
              {
                label: "Store Address",
                type: "textarea",
                dataMappingName: "store.address",
                readOnly: false,
                isMultilingual: false,
              },
              {
                label: "Store Contact",
                type: "text",
                dataMappingName: "store.contact",
                validationType: "string",
                validations: [
                  { type: "min", params: [10, "Must be at least 10 characters"] },
                  { type: "max", params: [15, "Must be at most 15 characters"] },
                  { type: "trim" },
                ],
                readOnly: false,
                isMultilingual: false,
              },
            ],
          },
          {
            label: "Operational Information",
            type: "tab",
            children: [
              {
                label: "Opening Hours",
                type: "text",
                dataMappingName: "store.openingHours",
                readOnly: false,
                isMultilingual: false,
              },
              {
                label: "Closing Hours",
                type: "text",
                dataMappingName: "store.closingHours",
                readOnly: false,
                isMultilingual: false,
              },
              {
                label: "Emergency Contact",
                type: "text",
                dataMappingName: "store.emergencyContact",
                validationType: "string",
                validations: [
                  { type: "min", params: [10, "Must be at least 10 characters"] },
                  { type: "max", params: [15, "Must be at most 15 characters"] },
                  { type: "trim" },
                ],
                readOnly: false,
                isMultilingual: false,
              },
            ],
          },
        ],
      },
      {
        label: "Inventory Details",
        type: "tab",
        children: [
          {
            label: "Medicine Information",
            type: "section",
            children: [
              {
                label: "Medicine Name",
                type: "text",
                dataMappingName: "inventory.medicineName",
                readOnly: false,
                isMultilingual: false,
              },
              {
                label: "Medicine ID",
                type: "text",
                dataMappingName: "inventory.medicineId",
                readOnly: false,
                isMultilingual: false,
              },
              {
                label: "Quantity",
                type: "number",
                dataMappingName: "inventory.quantity",
                readOnly: false,
                isMultilingual: false,
              },
              {
                label: "Expiry Date",
                type: "date",
                dataMappingName: "inventory.expiryDate",
                readOnly: false,
                isMultilingual: false,
              },
              {
                label: "Price",
                type: "number",
                dataMappingName: "inventory.price",
                readOnly: false,
                isMultilingual: false,
              },
            ],
          },
        ],
      },
      {
        label: "Supplier Details",
        type: "tab",
        children: [
          {
            label: "Supplier Information",
            type: "section",
            children: [
              {
                label: "Supplier Name",
                type: "text",
                dataMappingName: "supplier.name",
                readOnly: false,
                isMultilingual: false,
              },
              {
                label: "Supplier ID",
                type: "text",
                dataMappingName: "supplier.id",
                readOnly: false,
                isMultilingual: false,
              },
              {
                label: "Supplier Contact",
                type: "text",
                dataMappingName: "supplier.contact",
                validationType: "string",
                validations: [
                  { type: "min", params: [10, "Must be at least 10 characters"] },
                  { type: "max", params: [15, "Must be at most 15 characters"] },
                  { type: "trim" },
                ],
                readOnly: false,
                isMultilingual: false,
              },
              {
                label: "Supplier Address",
                type: "textarea",
                dataMappingName: "supplier.address",
                readOnly: false,
                isMultilingual: false,
              },
            ],
          },
        ],
      },
    ],
  };
  
  export default medicalStoreSchema;