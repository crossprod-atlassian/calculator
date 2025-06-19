class User {
    constructor(id, firstName, lastName, address, postCode, country) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.postCode = postCode;
        this.country = country;
    }
}

// In-memory storage for users (in real application, this would be a database)
const users = new Map();

class UserAPI {
    // GET - Retrieve a user by ID
    static get(userId) {
        if (!userId) {
            throw new Error('User ID is required');
        }
        
        const user = users.get(userId);
        if (!user) {
            throw new Error('User not found');
        }
        
        return user;
    }

    // POST - Create a new user
    static post(userData) {
        if (!userData || !userData.id) {
            throw new Error('Invalid user data');
        }

        if (users.has(userData.id)) {
            throw new Error('User already exists');
        }

        const newUser = new User(
            userData.id,
            userData.firstName,
            userData.lastName,
            userData.address,
            userData.postCode,
            userData.country
        );

        users.set(userData.id, newUser);
        return newUser;
    }

    // PUT - Update an existing user
    static put(userId, userData) {
        if (!userId || !userData) {
            throw new Error('User ID and update data are required');
        }

        if (!users.has(userId)) {
            throw new Error('User not found');
        }

        const updatedUser = new User(
            userId,
            userData.firstName,
            userData.lastName,
            userData.address,
            userData.postCode,
            userData.country
        );

        users.set(userId, updatedUser);
        return updatedUser;
    }

    // DELETE - Remove a user
    static delete(userId) {
        if (!userId) {
            throw new Error('User ID is required');
        }

        if (!users.has(userId)) {
            throw new Error('User not found');
        }

        users.delete(userId);
        return true;
    }
}

module.exports = {
    User,
    UserAPI
};