describe("Get User", () => {
  it("get user with page", () => {
    cy.request({
      methode: "GET",
      url: "/api/users?page=3",
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
  it("get Single User With ID", () => {
    cy.request({
      method: "GET",
      url: "/api/users/10",
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
