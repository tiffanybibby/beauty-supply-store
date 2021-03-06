import { PrismaClient, Prisma } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany({});
  await prisma.product.deleteMany({});

  const newUser = await prisma.user.create({
    data: {
      email: "tiffany.b@email.com",
      firstName: "Tiffany",
      lastName: "Bibby",
      password_digest: await bcrypt.hash("!a$ecureP@ssw0Rd55!", 11),
    },
  });
  console.log("New user sucessfully created: ", newUser);

  const allUsers = await prisma.user.findMany({});
  console.log("Users: ");
  console.dir(allUsers, { depth: null });

  const newProduct = await prisma.product.createMany({
    data: [
      {
        name: "Eco Styler Olive Oil Styling Hair Gel, 16oz",
        description:
          "For all hair types. Moisturizes hair and scalp, tames frizz. No flake, no tack, anti-itch. UV protection. Alcohol free. Genuine. Ecostyle olive oil styling gel is made with 100% pure olive oil. Olive oil helps your scalp naturally regulate its own moisturizing system. Olive oil helps attract moisture to the scalp and holds it in. Like all our styling gels, it is weightless and will leave your hair with a healthy shine and superior hold.",
        img: "https://i5.walmartimages.com/asr/d492a35a-706f-4778-a0e2-4f8c7064949b_1.7c8a1d62a95ab65f90ded65639272d0c.jpeg",
        price: 290,
        countInStock: 88,
        rating: 2.5,
      },
      {
        name: "Olaplex No. 6 Bond Smoother Leave-In Reparative Styling Cream, 3.3 Oz",
        description:
          "Olaplex No. 6 Bond Smoother Leave-In Reparative Styling Cream, 3.3 Oz-- This leave-in cream eliminates frizz, moisturizes, and protects all hair types.",
        img: "https://i5.walmartimages.com/asr/83ba06bb-9a9c-4b84-b84c-3f8d0ca86cf5_1.2090083e3ec95b88f80b228d5ba12f89.jpeg",
        price: 1996,
        countInStock: 23,
        rating: 4.5,
      },
      {
        name: "Mario Badescu Facial Spray with Aloe,Herbs and Rosewater, 4 oz. /118 ml",
        description:
          "Mario Badescu Facial Spray with Aloe, Herbs and Rosewater - Revitalize skin with dewy radiance. Whether spritzed for a hydrating boost or mid-day pick-me-up, our cult-favorite facial spray helps revive dehydrated skin anytime, anywhere. It's a rejuvenating mist infused with herbal and botanical extracts (like Aloe Vera, Gardenia, Rose, Bladderwrack and Thyme) that help soothe and re-energize skin???giving it a healthy, radiant glow.",
        img: "https://i5.walmartimages.com/asr/a99801a4-0886-4e3c-adb6-191fc6d5b929.5ce937e37dd3358b8f1bf62e76ddf29e.jpeg",
        price: 700,
        countInStock: 16,
        rating: 4.7,
      },
      {
        name: "Neutrogena Makeup Remover Cleansing Face Wipes, 25 ct., 2 Pack",
        description:
          "Remove makeup in one easy step with Neutrogena Makeup Remover Face Wipes. These soft and gentle pre-moistened facial cleansing towelettes effectively dissolve all traces of dirt, oil and makeup--even waterproof mascara-- for clean, fresh looking skin every day. Our makeup remover features an effective micellar-infused, triple emollient formula that leaves skin feeling refreshed, nourished, conditioned and thoroughly clean with no heavy residue. These facial towelettes also remove sweat, sunscreen, and pollution from skin with no need to rinse after use. These daily face wipes are formulated to be gentle on the sensitive eye area. The makeup removing wet wipes are formulated without phthalates, parabens, sulfates, alcohols, soaps, or dyes and are ophthalmologist-, dermatologist-, and allergy-tested. Designed with the earth in mind, the compostable wipes are made with 100% plant-based fibers and biodegrade in 35 days in home compost.",
        img: "https://i5.walmartimages.com/asr/c2053939-9d00-4eb5-8517-b7964ea804b1.0f29f492b15e7ce987a893f9d37fa9f2.jpeg",
        price: 893,
        countInStock: 49,
        rating: 4.4,
      },
      {
        name: "Maybelline Lash Sensational Washable Mascara Makeup, Very Black, 0.32 fl. oz.",
        description:
          "Lash Sensational, for a full fan effect! Lashes go supple, separated and fully fanned. Now infused with conditioning Rose Hip Oil and mineral pigments, this cult-favorite mascara delivers thick lashes that never feel weighed down. Maybelline???s exclusive fanning mascara brush with ten layers of bristles reveals layers of lashes, adding the look of length and volume without clumping. The fresh liquid formula captures lashes from root to tip for fanned-out volume. Now available in a new washable shade: Midnight Black. Ophthalmologist tested. Suitable for contact lens wearers. Packaging May Vary",
        img: "https://i5.walmartimages.com/asr/ffa5874e-81f4-4813-a16c-c8823b2d6571.d8783e945731deda55c3d714f4f8871d.jpeg",
        price: 639,
        countInStock: 13,
        rating: 4.3,
      },
      {
        name: "Cutex Strength Shield Nail Polish Remover, for Healthy Nails, with Vitamins E, B5, and Hydrolyzed Silk, 6.76 fl oz",
        description:
          "Nail Polish Remover, Strength-Shield, Bottle 6.7 OZ, with hydrolyzed silk and vitamins E. Since 1911. Cutex Strength-Shield helps maintain healthy-looking nails. The formula quickly and completely removes all traces of polish. Questions? Visit cutex.com. Made in Mexico. Good for 24 months once opened. Extremely flammable. Keep away from heat or flame. Eye irritant. Do not ingest. Keep away from children. 6.7 fl oz (200 ml) New York, NY 10004 800-455-6665 2016 Cutex, Inc.",
        img: "https://i5.walmartimages.com/asr/5d579290-5ee4-4064-af62-2897343d9744_1.c26c32ca4e398625cdefe74ac26ca6a9.jpeg",
        price: 197,
        countInStock: 91,
        rating: 4.8,
      },
    ],
  });
  console.log("New products sucessfully created: ", newProduct);

  const allProducts = await prisma.product.findMany({});
  console.log("Products: ");
  console.dir(allProducts, { depth: null });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
