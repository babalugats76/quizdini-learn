const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    title: String,
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true }
  },
  {
    id: true,
    toObject: {
      getters: true,
      virtuals: true,
      versionKey: false,
      minimize: false,
      transform: function(doc, ret) {
        delete ret._id;
      }
    },
    toJSON: {
      getters: true,
      virtuals: true,
      versionKey: false,
      minimize: false,
      transform: function(doc, ret) {
        delete ret._id;
      }
    }
  }
);

userSchema.virtual('author').get(function() {
  return (
    (this.title ? this.title + ' ' : '') +
    (this.firstName ? this.firstName + ' ' : '') +
    (this.lastName ? this.lastName : '')
  );
});

mongoose.model('users', userSchema);
