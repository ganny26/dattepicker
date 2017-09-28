import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const batchSchema = new Schema({
    batchname: { type: 'String', required: true },
    apiroute:{type:'String',required: true },
    coordinates: { 
        identity:{type: 'String', required: true},
        position:{
            x:{type: 'String'},
            y:{type: 'String'},
            w:{type: 'String'},
            h:{type: 'String'}
        }
     },
    createddate: { type: 'Date', default: Date.now, required: true },
  });
  
export default mongoose.model('BatchModel', batchSchema);
  