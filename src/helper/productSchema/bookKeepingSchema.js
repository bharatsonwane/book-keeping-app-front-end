const bookKeepingSchema = {
  schemaName: "BookkeepingSchema",
  version: "1.0",
  childrenType: "tab",
  children: [
    {
      tabName: "Transaction Details",
      childrenType: "childTab",
      children: [
        {
          tabName: "Basic Information",
          childrenType: "field",
          children: [
            {
              label: "Transaction ID",
              type: "text",
              dataMappingName: "transactions.id",
              validationType: "string",
              validations: [
                { type: "min", params: [3, "Must be at least 3 characters"] },
                { type: "max", params: [50, "Must be at most 50 characters"] },
                { type: "trim" },
              ],
              readOnly: false,
              isMultilingual: true,
            },
            {
              label: "Transaction Bank",
              type: "text",
              dataMappingName: "transactions.bank",
              validationType: "string",
              validations: [
                { type: "min", params: [3, "Must be at least 3 characters"] },
                { type: "max", params: [50, "Must be at most 50 characters"] },
                { type: "trim" },
              ],
              readOnly: false,
              isMultilingual: true,
            },

            {
              label: "Transaction Date",
              type: "date",
              dataMappingName: "transactions.date",
              readOnly: false,
              isMultilingual: false,
            },
            {
              label: "Transaction Type",
              type: "select",
              options: [
                { label: "Income", value: "Income" },
                { label: "Expense", value: "Expense" },
                { label: "Transfer", value: "Transfer" },
              ],
              dataMappingName: "transactions.type",
              readOnly: false,
              isMultilingual: false,
            },
            {
              label: "Recurring Transaction",
              type: "switch",
              dataMappingName: "transactions.recurring",
              readOnly: false,
              isMultilingual: false,
            },
          ],
        },
        {
          tabName: "Payment Information",
          childrenType: "field",
          children: [
            {
              label: "Account Name",
              type: "text",
              dataMappingName: "accounts.name",
              readOnly: false,
              isMultilingual: false,
            },
            {
              label: "Account Number",
              type: "text",
              dataMappingName: "accounts.number",
              readOnly: false,
              isMultilingual: false,
            },
            {
              label: "Amount",
              type: "number",
              dataMappingName: "transactions.amount",
              readOnly: false,
              isMultilingual: false,
            },
            {
              label: "Currency",
              type: "text",
              default: "USD",
              dataMappingName: "transactions.currency",
              readOnly: false,
              isMultilingual: false,
            },
            {
              label: "Payment Method",
              type: "select",
              options: [
                { label: "Cash", value: "Cash" },
                { label: "Credit Card", value: "Credit Card" },
                { label: "Bank Transfer", value: "Bank Transfer" },
              ],
              dataMappingName: "transactions.paymentMethod",
              readOnly: false,
              isMultilingual: false,
            },
          ],
        },
      ],
    },
    {
      tabName: "Invoice Details",
      childrenType: "field",
      children: [
        {
          label: "Invoice Information",
          type: "section",
          children: [
            {
              label: "Invoice Number",
              type: "text",
              dataMappingName: "invoices.number",
              readOnly: false,
              isMultilingual: false,
            },
            {
              label: "Invoice Date",
              type: "date",
              dataMappingName: "invoices.date",
              readOnly: false,
              isMultilingual: false,
            },
            {
              label: "Due Date",
              type: "date",
              dataMappingName: "invoices.dueDate",
              readOnly: false,
              isMultilingual: false,
            },
            {
              label: "Invoice Notes",
              type: "textarea",
              dataMappingName: "invoices.notes",
              readOnly: false,
              isMultilingual: false,
            },
          ],
        },
        {
          label: "Tax Information",
          type: "section",
          children: [
            {
              label: "Tax Percentage",
              type: "number",
              dataMappingName: "taxes.percentage",
              readOnly: false,
              isMultilingual: false,
            },
            {
              label: "Tax Amount",
              type: "number",
              dataMappingName: "taxes.amount",
              readOnly: false,
              isMultilingual: false,
            },
            {
              label: "Discount",
              type: "number",
              dataMappingName: "transactions.discount",
              readOnly: false,
              isMultilingual: false,
            },
            {
              label: "Net Amount",
              type: "number",
              dataMappingName: "transactions.netAmount",
              readOnly: false,
              isMultilingual: false,
            },
            {
              label: "Apply Discount",
              type: "switch",
              dataMappingName: "transactions.applyDiscount",
              readOnly: false,
              isMultilingual: false,
            },
            {
              label: "Invoice Highlight Color",
              type: "color",
              dataMappingName: "invoices.color",
              readOnly: false,
              isMultilingual: false,
            },
          ],
        },
      ],
    },
  ],
};

export default bookKeepingSchema;
