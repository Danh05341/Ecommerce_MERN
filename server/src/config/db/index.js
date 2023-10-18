import mongoose from 'mongoose'

async function connect(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Ecommerce');
        console.log('DB connect Succesfully')
    } catch(err) {
        console.log('DB connect Failed')
    }
}

export default { connect }