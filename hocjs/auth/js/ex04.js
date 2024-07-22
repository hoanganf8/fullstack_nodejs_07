const apiUrl = `https://api.escuelajs.co/api/v1/files/upload`;
const btn = document.querySelector("button");
const input = document.querySelector("input");
btn.addEventListener("click", async () => {
  //Lấy file object
  const imageObj = input.files[0];
  const formData = new FormData();
  formData.append("file", imageObj);
  const response = await fetch(apiUrl, {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  console.log(data);
});
