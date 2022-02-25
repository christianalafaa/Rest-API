const { findByIdAndDelete } = require('../models/user');
const User = require('../models/user')

class UserController {
    static create = async (req, res) => {
        try {
            const { name, age, email, bio } = req.body;

            const user = await User.create({
                name,
                age,
                email,
                bio
            })

            res.status(201).json(user)

        } catch (error) {
            res.status(500).json('Server error')
        }
    }

    static getAll = async (req, res) => {
        try {
            const users = await User.find();

            res.status(200).json(users)

        } catch (error) {
            res.status(500).json('Server not found')
        }
    }

    static update = async (req, res) => {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(404).json('User not found')
            }

            const user = await User.findOne({ _id: id })
            const updatedUser = Object.assign(user, req.body)

            updatedUser.save();

            res.status(200).json(updatedUser)

        } catch (error) {
            res.status(500).json('Server not found')
        }
    }

    static delete = async (req, res) => {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json('Invalid request')
            }

            const user = await User.findByIdAndDelete({ _id: id })
            
            if (!user) {
                return res.status(404).json('User not found')
            }

            res.status(200).json('Deleted')

        } catch (error) {
            res.status(500).json('Server not found')
        }
    }
}


module.exports = UserController