import { useEffect } from "react";
import { useState } from "react";

export default function UploadImage() {
  const [image, setImage] = useState({});
  const [status, setStatus] = useState("idle");
  const handleChangeImage = (e) => {
    const imageUrl = URL.createObjectURL(e.target.files[0]);
    setImage({ ...image, imagePreviewUrl: imageUrl, file: e.target.files[0] });
  };
  const requestUploadFile = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      setStatus("pending");
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/files/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      return response.json();
    } catch {
      return false;
    } finally {
      setStatus("idle");
    }
  };
  const handleUploadFile = async () => {
    const output = await requestUploadFile(image.file);
    if (!output) {
      return alert("Upload failed");
    }
    setImage({ ...image, output, imagePreviewUrl: null }); //Cập nhật state để hiển thị kết quả lên giao diện
  };
  useEffect(() => {
    return () => {
      URL.revokeObjectURL(image.imagePreviewUrl);
    };
  }, [image.imagePreviewUrl]);
  return (
    <div>
      <input type="file" name="image" onChange={handleChangeImage} />
      <button disabled={status === "pending"} onClick={handleUploadFile}>
        {status === "pending" ? "Uploading..." : "Upload"}
      </button>
      <div>
        {image.imagePreviewUrl && (
          <img src={image.imagePreviewUrl} width={300} />
        )}
        {image.output && (
          <>
            <p>Đã upload thành công</p>
            <p>
              <a target="_blank" rel="noreferrer" href={image.output.location}>
                {image.output.location}
              </a>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
