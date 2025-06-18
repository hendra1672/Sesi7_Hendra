
const assert = require("assert");
describe("Feature Reqres", function () 

{
    it("DELETE Reqres", async function () {
        const response = await fetch("https://reqres.in/api/users/2", {
            method: "DELETE", 
            headers: {
                "x-api-key": "reqres-free-v1",
                "Content-Type": "application/json",
            },
        });

        //cek respons status
        console.log("Response Status:", response.status);
        assert.strictEqual(response.status, 204, "204");
        
        //cek bodytext kosong
        const responseBodyText = await response.text();
        assert.strictEqual(responseBodyText, "", "");

        //cek text kosong
        const responseText = await response.text();
        assert.strictEqual(responseText.length, 0, "()");

        //cek header kososng
        const contentTypeHeader = response.headers.get("content-type");
        assert.strictEqual(contentTypeHeader, null, "");

    });
    
});



