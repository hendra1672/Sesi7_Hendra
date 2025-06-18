const assert = require("assert");
describe("Feature Reqres", function ()
{
    it("PUT Reqres", async function () {
        const response = await fetch("https://reqres.in/api/users/2", {
            method: "PUT",
            headers: {
               "x-api-key": "reqres-free-v1",
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: "morpheus",
                job: "zion resident",
            }),
        });

        const data = await response.json();
        console.log(data);

        //bawaan
        assert.strictEqual(response.status, 200);

        //cek nama
        assert.strictEqual(data.name, "morpheus");
                    
        //cek job
        assert.strictEqual(data.job, "zion resident");
        
    })
})