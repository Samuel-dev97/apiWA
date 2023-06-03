const expres = require("express");
const router = expres.Router();
const whatsAppController = require("../controllers/whatsappControllers");

router
.get("/", whatsAppController.VerifyToken)
.post("/", whatsAppController.ReceiveMessage)

module.exports = router;