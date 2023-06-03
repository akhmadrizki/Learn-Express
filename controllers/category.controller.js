const { PrismaClient, Prisma } = require("@prisma/client");
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

        try {
            await prisma.category.create({
                data: {
                    name: req.body.name,
                },
            });

            req.flash("success", "Category created successfully");
            res.redirect("/category");
        } catch (error) {
            if (error.code === "P2002") {
                req.flash("error", "Category already exists");
            }
            res.redirect("/category/create");
        }
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
        try {
            await prisma.category.update({
            where: {
                id: Number(req.params.id),
            },
            data: {
                name: req.body.name,
            },
        });

        req.flash("success", "Category updated successfully");
        res.redirect("/category");
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === "P2002") {
                    req.flash("error", "Category already exists");
                }
            }

            res.redirect(`/category/${req.params.id}/edit`);
        }
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