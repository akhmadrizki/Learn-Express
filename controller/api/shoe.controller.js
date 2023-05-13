const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class ShoeController {

    static async index(req, res) {
        const result = await prisma.shoe.findMany({})
        res.status(200).json(result)
    }

    static async show(req, res) {
        const { id } = req.params
        const result = await prisma.shoe.findUnique({
            where: {
                id: Number(id)
            }
        })
        res.status(200).json(result)
    }

    static async store(req, res) {
        const { name, brand, qty, available } = req.body
        const result = await prisma.shoe.create({
            data: {
                name,
                brand,
                qty,
                available
            }
        })
        res.status(201).json(result)
    }

    static async update(req, res) {
        const { id } = req.params
        const { name, brand, qty, available } = req.body
        const result = await prisma.shoe.update({
            where: {
                id: Number(id)
            },
            data: {
                name,
                brand,
                qty,
                available
            }
        })
        res.status(200).json(result)
    }

    static async destroy(req, res) {
        const { id } = req.params
        const result = await prisma.shoe.delete({
            where: {
                id: Number(id)
            }
        })
        res.status(200).json(result)
    }

}

module.exports = ShoeController