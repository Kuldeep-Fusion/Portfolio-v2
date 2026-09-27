import cloudinary from "../config/cloudnaydb.js";

export async function UploadCloudinary(
  buffer,
  folder = "projects"
) {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: "image",
      },
      (error, result) => {
        if (error) {
          console.error(
            "Cloudinary Upload Error:",
            error
          );

          reject(error);
          return;
        }

        resolve(result);
      }
    );

    stream.end(buffer);
  });
}