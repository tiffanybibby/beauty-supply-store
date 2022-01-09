"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const newUser = yield prisma.user.create({
            data: {
                email: "tiffany.b@email.com",
                firstName: "Tiffany",
                lastName: "Bibby",
            },
        });
        console.log("New user sucessfully created: ", newUser);
        const allUsers = yield prisma.user.findMany({});
        console.log("Users: ");
        console.dir(allUsers, { depth: null });
        const newProduct = yield prisma.product.createMany({
            data: [{
                    name: "Eco Styler Gel",
                    description: "For all hair types. Moisturizes hair and scalp, tames frizz. No flake, no tack, anti-itch. UV protection. Alcohol free. Genuine. Ecostyle olive oil styling gel is made with 100% pure olive oil. Olive oil helps your scalp naturally regulate its own moisturizing system. Olive oil helps attract moisture to the scalp and holds it in. Like all our styling gels, it is weightless and will leave your hair with a healthy shine and superior hold. www.ecocoinc.com. Dispose of properly. Made in USA Chicago, IL.",
                    img: "https://www.instacart.com/image-server/466x466/filters:fill(FFF,true):format(webp)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_bdc879db-a629-44dd-a8a8-c962faa75e54.jpeg",
                    price: 2.90,
                    countInStock: 88,
                    rating: 2.5,
                },
                {
                    name: "Olaplex No. 6 Bond Smoother Leave-In Reparative Styling Cream, 3.3 Oz",
                    description: "Olaplex No. 6 Bond Smoother Leave-In Reparative Styling Cream, 3.3 Oz-- This leave-in cream eliminates frizz, moisturizes, and protects all hair types.",
                    img: "https://i5.walmartimages.com/asr/83ba06bb-9a9c-4b84-b84c-3f8d0ca86cf5_1.2090083e3ec95b88f80b228d5ba12f89.jpeg",
                    price: 19.96,
                    countInStock: 23,
                    rating: 4.5,
                },
                {
                    name: "Mario Badescu Facial Spray with Aloe,Herbs and Rosewater, 4 oz. /118 ml",
                    description: "Mario Badescu Facial Spray with Aloe, Herbs and Rosewater - Revitalize skin with dewy radiance. Whether spritzed for a hydrating boost or mid-day pick-me-up, our cult-favorite facial spray helps revive dehydrated skin anytime, anywhere. It's a rejuvenating mist infused with herbal and botanical extracts (like Aloe Vera, Gardenia, Rose, Bladderwrack and Thyme) that help soothe and re-energize skin—giving it a healthy, radiant glow.",
                    img: "https://i5.walmartimages.com/asr/a99801a4-0886-4e3c-adb6-191fc6d5b929.5ce937e37dd3358b8f1bf62e76ddf29e.jpeg",
                    price: 7.00,
                    countInStock: 16,
                    rating: 4.7,
                },
                {
                    name: "Neutrogena Makeup Remover Cleansing Face Wipes, 25 ct., 2 Pack",
                    description: "For all hair types. Moisturizes hair and scalp, tames frizz. No flake, no tack, anti-itch. UV protection. Alcohol free. Genuine. Ecostyle olive oil styling gel is made with 100% pure olive oil. Olive oil helps your scalp naturally regulate its own moisturizing system. Olive oil helps attract moisture to the scalp and holds it in. Like all our styling gels, it is weightless and will leave your hair with a healthy shine and superior hold. www.ecocoinc.com. Dispose of properly. Made in USA Chicago, IL.",
                    img: "https://i5.walmartimages.com/asr/c2053939-9d00-4eb5-8517-b7964ea804b1.0f29f492b15e7ce987a893f9d37fa9f2.jpeg",
                    price: 8.93,
                    countInStock: 49,
                    rating: 4.4,
                },
                {
                    name: "Maybelline Lash Sensational Washable Mascara Makeup, Very Black, 0.32 fl. oz.",
                    description: "Lash Sensational, for a full fan effect! Lashes go supple, separated and fully fanned. Now infused with conditioning Rose Hip Oil and mineral pigments, this cult-favorite mascara delivers thick lashes that never feel weighed down. Maybelline\’s exclusive fanning mascara brush with ten layers of bristles reveals layers of lashes, adding the look of length and volume without clumping. The fresh liquid formula captures lashes from root to tip for fanned-out volume. Now available in a new washable shade: Midnight Black. Ophthalmologist tested. Suitable for contact lens wearers. Packaging May Vary",
                    img: "https://i5.walmartimages.com/asr/ffa5874e-81f4-4813-a16c-c8823b2d6571.d8783e945731deda55c3d714f4f8871d.jpeg",
                    price: 6.39,
                    countInStock: 13,
                    rating: 4.3,
                },
                {
                    name: "Cutex Strength Shield Nail Polish Remover, for Healthy Nails, with Vitamins E, B5, and Hydrolyzed Silk, 6.76 fl oz",
                    description: "For all hair types. Moisturizes hair and scalp, tames frizz. No flake, no tack, anti-itch. UV protection. Alcohol free. Genuine. Ecostyle olive oil styling gel is made with 100% pure olive oil. Olive oil helps your scalp naturally regulate its own moisturizing system. Olive oil helps attract moisture to the scalp and holds it in. Like all our styling gels, it is weightless and will leave your hair with a healthy shine and superior hold. www.ecocoinc.com. Dispose of properly. Made in USA Chicago, IL.",
                    img: "https://i5.walmartimages.com/asr/5d579290-5ee4-4064-af62-2897343d9744_1.c26c32ca4e398625cdefe74ac26ca6a9.jpeg",
                    price: 1.97,
                    countInStock: 91,
                    rating: 4.8,
                },
            ],
        });
        console.log("New products sucessfully created: ", newProduct);
        const allProducts = yield prisma.product.findMany({});
        console.log("Products: ");
        console.dir(allProducts, { depth: null });
    });
}
main()
    .catch((e) => console.error(e))
    .finally(() => __awaiter(void 0, void 0, void 0, function* () { return yield prisma.$disconnect(); }));
//# sourceMappingURL=seed.js.map