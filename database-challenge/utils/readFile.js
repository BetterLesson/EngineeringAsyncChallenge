import fs from "fs-extra";

const readFile = async (path) => {
  try {
    const jsonString = await fs.readFile(path, "UTF-8");
    const jsonData = JSON.parse(jsonString);
    return jsonData;
  } catch (error) {
    console.log(error);
  }

}

export default readFile;
