import db from "./database/db.js";
import {Datatypes} from "sequelize"

const postModel = db.define("posts", {
    title:{type:Datatypes.STRING},
    content:{type:Datatypes.STRING}
})

export default postModel;