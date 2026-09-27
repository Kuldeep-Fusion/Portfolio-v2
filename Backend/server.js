import app from "./src/app.js";

const PORT =  8000 || process.env.PORT;

app.listen(PORT, () => console.log(`server is running ${PORT}`));