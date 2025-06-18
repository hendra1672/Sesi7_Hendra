
const { expect } = require("chai");
const Ajv = require("ajv");
const ajv = new Ajv({ allErrors: true }); 

// aktifkan semua error
describe("Validasi JSON Schema", () => {
    it("should validate response against schema", () => {
        const responseData = {
        id: 2,
        email: "janet.weaver@reqres.in",
        first_name: "Janet",
        last_name: "Weaver",
        };

        const schema = {
            "$schema": "http://json-schema.org/draft-07/schema#",
            "title": "Generated schema for Root",
            "type": "object",
            "properties": 
            {
                "id": { 
                    "type": "number" 
                },
                "email": { 
                    "type": "string" 
                },
                "first_name": { 
                    "type": "string" 
                },
                "last_name": {
                    "type": "string"
                }
            },

            "required": [
            "id", 
            "email", 
            "first_name",
            "last_name",
            ],
    };

    const validate = ajv.compile(schema);
    const isValid = validate(responseData);

    // Cetak error jika tidak valid
    if (!isValid) {
        console.error("Schema validation errors:", validate.errors);
    }
         expect(isValid, JSON.stringify(validate.errors, null, 2)).to.be.true;

  });
});
