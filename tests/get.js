
const assert = require("assert");
describe("Feature Reqres", function ()

{
    it("GET Reqres", async function () {
        const response = await fetch("https://reqres.in/api/users?page=2", {
            method: "GET",
            headers: {
               "x-api-key": "reqres-free-v1",
               "Content-Type": "application/json",
            },
        })
    
        //menyimpan response
        const data = await response.json();
        console.log(data);

        //cek code respone yang dihasilkan harus 200
        assert.strictEqual(response.status, 200);

        //kita punya data pada hal 2 tapi kita cek di halaman 3
        assert.strictEqual(data.page, 2);

        //Cek data array ke 1 dengan id = 7
        assert.strictEqual(data.data[0].id, 7);

        //cek data email array ke 1 dengan nama michael
        assert.strictEqual(data.data[0].email, "michael.lawson@reqres.in");

    })
})
