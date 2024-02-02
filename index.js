const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static("public")); // Assuming your Webflow files are in a folder named 'public'

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
