import { app } from "./app";

const PORT = process.env.PORT || 4000;

(() => {
  try {
    app.listen(PORT, () => {
      console.log(`Server start on port: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
