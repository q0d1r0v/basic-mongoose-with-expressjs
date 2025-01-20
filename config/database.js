const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB ulanishi muvaffaqiyatli');
  } catch (err) {
    console.error('MongoDB ulanishida xatolik', err);
    process.exit(1);
  }
};

module.exports = {connectDB};
