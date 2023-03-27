const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const test= await User.findOne({ _id: context.user._id });
                return test;
            } 
            throw new AuthenticationError('You need to be logged in!');
        },
    },