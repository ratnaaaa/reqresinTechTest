describe("Register", () => {
  it("Register Should be success", () => {
    cy.request({
      method: "POST",
      url: "/api/register",
      body: {
        email: "eve.holt@reqres.in",
        password: "pistol",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Register Unsuccessfully", () => {
    cy.request({
      method: "POST",
      url: "/api/register",
      body: {
        email: "eve.holt@reqres.in",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
