const {Contact} = require('../models/models')
const ApiError = require('../error/ApiError')

class ContactController {
    async getAll(req, res) {
        const contacts = await Contact.findAll()
        return res.json(contacts)
    }

    async create(req, res) {
        const {phone, iban, name, course, post, get} = req.body;
        const contact = await Contact.create({phone, iban, name, course, post, get})
        return res.json(contact)
    }

    async delete(req, res) {
        const {id} = req.params
        const contact = await Contact.destroy({where: {id}})
        return res.json(contact)
    }
}

module.exports = new ContactController()