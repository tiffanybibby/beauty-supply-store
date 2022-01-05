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
        const newProduct = yield prisma.product.create({
            data: {
                name: "Eco Styler Gel",
                description: "For all hair types. Moisturizes hair and scalp, tames frizz. No flake, no tack, anti-itch. UV protection. Alcohol free. Genuine. Ecostyle olive oil styling gel is made with 100% pure olive oil. Olive oil helps your scalp naturally regulate its own moisturizing system. Olive oil helps attract moisture to the scalp and holds it in. Like all our styling gels, it is weightless and will leave your hair with a healthy shine and superior hold. www.ecocoinc.com. Dispose of properly. Made in USA Chicago, IL.",
                img: "https://www.instacart.com/image-server/466x466/filters:fill(FFF,true):format(webp)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_bdc879db-a629-44dd-a8a8-c962faa75e54.jpeg",
                price: 2.9,
                countInStock: 88,
                rating: 2.5,
            },
        });
        console.log("New product sucessfully created: ", newProduct);
        const allProducts = yield prisma.product.findMany({});
        console.log("Products: ");
        console.dir(allProducts, { depth: null });
    });
}
main()
    .catch((e) => console.error(e))
    .finally(() => __awaiter(void 0, void 0, void 0, function* () { return yield prisma.$disconnect(); }));
//# sourceMappingURL=main.js.map