const {Course} = require('../models/models')
const ApiError =require('../error/ApiError')

class CourseController {
    async getCourse(req, res) {
        const courses = await Course.findAll()
        return res.json(courses)
    }

    async update(req, res) {
        const {id} = req.params
        const {price} = req.body
        const course = await Course.update({ price: price }, {
            where: {
              id: id
            }
          });
          return res.json(course)
    }

    async create(req, res) {
        const {name, price} = req.body;
        const course = Course.create({name, price})
        return res.json(course)
    }
}

module.exports = new CourseController()