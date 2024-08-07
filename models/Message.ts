import mongoose, { Schema, Document } from 'mongoose';

interface IMessage extends Document {
  text: string;
  user: string;
  timestamp: Date;
}

const MessageSchema: Schema = new Schema({
  text: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Message || mongoose.model<IMessage>('Message', MessageSchema);
