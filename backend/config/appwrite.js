import { Client, ID, Storage } from "node-appwrite";
import { InputFile } from "node-appwrite/file";

const client = new Client();
client
  .setEndpoint(process.env.APPWRITE_ENDPOINT)
  .setProject(process.env.APPWRITE_PROJECT_ID);

const storage = new Storage(client);

export let imageUrl = "";

export async function uploadFile(file) {
  try {
    if (!file) {
      throw new Error("No valid file provided for upload.");
    }
    console.log(
      " process.env.APPWRITE_EVENTS_BUCKET_IMAGES_ID",
      process.env.APPWRITE_EVENTS_BUCKET_IMAGES_ID
    );

    const response = await storage.createFile(
      process.env.APPWRITE_EVENTS_BUCKET_IMAGES_ID,
      ID.unique(),
      InputFile.fromBuffer(file.buffer, file.originalname)
    );

    console.log("File uploaded successfully:", response);

    if (!response.$id) {
      throw new Error("File upload failed, missing response.$id");
    }

    return `${process.env.APPWRITE_ENDPOINT}/storage/buckets/${response.bucketId}/files/${response.$id}/view?project=${process.env.APPWRITE_PROJECT_ID}`;
  } catch (error) {
    console.error("Error uploading file:", error.message);
    throw error;
  }
}
