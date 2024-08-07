var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			default: "user",
		},
		password: {
			type: String,
			required: true,
		},
		isConfirmed: {
			type: Boolean,
			required: true,
			default: 0,
		},
		confirmOTP: {
			type: String,
			required: false,
		},
		forgotPasswordId: {
			type: String,
			required: false,
			default: null,
		},
		status: {
			type: Boolean,
			required: true,
			default: 1,
		},
	},
	{ timestamps: true }
);

// Virtual for user's full name
UserSchema.virtual("fullName").get(function () {
	return this.firstName + " " + this.lastName;
});

module.exports = mongoose.model("User", UserSchema);
