import { memo } from "react";
export default memo(function Content() {
  console.log("2. Content render");
  return (
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      architecto vero dolore voluptas repudiandae quibusdam ratione non in iure,
      quos aut illo! Fugit autem assumenda modi dolorum quaerat, quas magni.
    </p>
  );
});
