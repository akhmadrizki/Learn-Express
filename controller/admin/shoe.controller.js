const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class ShoeController {

    static async index(req, res) {
        const result = await prisma.shoe.findMany({});
        res.render("pages/index", { shoes: result });
    }

    static async show(req, res) {
        const { id } = req.params;
        const result = await prisma.shoe.findUnique({
            where: {
                id: Number(id),
            },
        });
        res.render("pages/detail", { shoe: result });
    }

    static async add(req, res) {
        res.render("pages/add");
    }

    static async store(req, res) {
        const { name, brand, qty, price, available, desc, img } = req.body;

        try {
            await prisma.shoe.create({
                data: {
                    name: name,
                    brand: brand,
                    qty: Number(qty),
                    price: Number(price),
                    available: Boolean(available),
                    desc : desc,
                    img : img,
                },
            });
        } catch (error) {
            res.send(error);
        }

        res.redirect("/shoe");
    }

    // static async edit(req, res) {
    //     res.render("pages/detail");
    // }

    static async about(req, res) {
        res.render("pages/about");
    }

}

module.exports = ShoeController;