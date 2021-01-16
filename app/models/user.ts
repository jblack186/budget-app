const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        trim: true,
        unique: true,
        required: [true, 'password is required'],
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

//employee
const User = new mongoose.model('User', UserSchema);

module.exports = User;