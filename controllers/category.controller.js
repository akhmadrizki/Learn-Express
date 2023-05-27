const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class CategoryController {
    static async index(req, res) {
        const results = await prisma.category.findMany();
        res.render("pages/category/list", { categories: results });
    }

    static async create(req, res) {
        res.render("pages/category/create");
    }

    static async store(req, res) {
        await prisma.category.create({
            data: {
                name: req.body.name,
            },
        });

        res.redirect("/category");
    }

    static async edit(req, res) {
        const result = await prisma.category.findUnique({
            where: {
                id: Number(req.params.id),
            },
        });

        res.render("pages/category/edit", { category: result });
    }

    static async update(req, res) {
        await prisma.category.update({
            where: {
                id: Number(req.params.id),
            },
            data: {
                name: req.body.name,
            },
        });

        res.redirect("/category");
    }

    static async delete(req, res) {
        await prisma.category.delete({
            where: {
                id: Number(req.params.id),
            }
        });

        res.redirect("/category");
    }
}

module.exports = CategoryController;