
const { expect } = require("chai");
const Ajv = require("ajv");
const ajv = new Ajv({ allErrors: true }); 

// aktifkan semua error
describe("Validasi JSON Schema", () => {
    it("should validate response against schema", () => {
        const responseData = {
            name: "Gajah Lucu",
            age: 60,
            isActive: true,
    };

        const schema = {
            "$schema": "http://json-schema.org/draft-07/schema#",
            "title": "Generated schema for Root",
            "type": "object",
            "properties": {
                "name": { 
                    "type": "string" 
                },
                "age": { 
                    "type": "number" 
                },
                "isActive": { 
                    "type": "boolean" 
                }
                ,
            },
        "required": [
            "name", 
            "age", 
            "isActive",
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
