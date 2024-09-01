import * as sdk from "node-appwrite";

export const {
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;

const client = new sdk.Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66c4b9e8000937fc277a")
  .setKey(
    "27d76184599d0cf1391d7c4f42028efc2601ce2608c102ab1c9962d43c2caaffb01eb54110faa2f227c3c229b90d90b949c7f8fa61e0799545d1b076bb23cc3d66b76e452ff944e8839885fbcd262702fe1a7b95bdc3f475c73ee01eb81139a0015347f5467fd28068da06ada78e2fc83433039b462b6522de80b91639c2a8ad"
  );

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const Messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);
