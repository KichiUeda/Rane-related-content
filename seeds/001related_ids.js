exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("related_id_join")
    .del()
    .then(function () {
      // Each game can be related to up to three games related titles
      let randRelationships = () => Math.ceil(Math.random() * 3);
      let randProduct = () => Math.ceil(Math.random() * 100);
      let relationships = [];
      let counter = 1;

      for (let i = 0; i <= 100; i++) {
        let numRelated = randRelationships();
        for (let j = 0; j <= numRelated; j++) {
          let relatedProd = randProduct();
          while (relatedProd === i) {
            relatedProd = randProduct();
          }
          relationships.push({
            id: counter,
            product_id: i,
            related_id: relatedProd,
          });
          counter++;
        }
      }

      return knex("related_id_join").insert(relationships);
    });
};
