const assert = require("assert");
describe("Feature Reqres", function ()
{
    it("POST Reqres", async function () {
        const response = await fetch("https://reqres.in/api/users", {
            method: "POST",
            headers: {
               "x-api-key": "reqres-free-v1",
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: "shinta",
                job: "leader",
            }),
        });

        const data = await response.json();
        console.log(data);

        //bawaan
        assert.strictEqual(response.status, 201);

        //cek nama
        assert.strictEqual(data.name, "shinta");
                    
        //cek job
        assert.strictEqual(data.job, "leader");

    })
})