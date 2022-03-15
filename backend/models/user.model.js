const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    emailId: { type: String, required: true },
    password: { type: String, required: true },
    profilePicture: { type: String, required: true, default: "https://github.com/Sethuram52001/KeyPal/blob/main/backend/assets/default-profile-icon.jpg?raw=true" }
}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;