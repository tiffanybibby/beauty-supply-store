import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const newUser = await prisma.user.create({
    data: {
      email: "tiffany.b@email.com",
      firstName: "Tiffany",
      lastName: "Bibby",
    },
  });
  console.log("New user sucessfully created: ", newUser);

  const allUsers = await prisma.user.findMany({});
  console.log("Users: ");
  console.dir(allUsers, { depth: null });

  const newProduct = await prisma.product.create({
    data: {
      name: "Eco Styler Gel",
      description:
        "For all hair types. Moisturizes hair and scalp, tames frizz. No flake, no tack, anti-itch. UV protection. Alcohol free. Genuine. Ecostyle olive oil styling gel is made with 100% pure olive oil. Olive oil helps your scalp naturally regulate its own moisturizing system. Olive oil helps attract moisture to the scalp and holds it in. Like all our styling gels, it is weightless and will leave your hair with a healthy shine and superior hold. www.ecocoinc.com. Dispose of properly. Made in USA Chicago, IL.",
      img: "https://www.instacart.com/image-server/466x466/filters:fill(FFF,true):format(webp)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_bdc879db-a629-44dd-a8a8-c962faa75e54.jpeg",
      price: 2.90,
      countInStock: 88,
      rating: 2.5,
    },
  });
  console.log("New product sucessfully created: ", newProduct);

  const allProducts = await prisma.product.findMany({});
  console.log("Products: ");
  console.dir(allProducts, { depth: null });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
