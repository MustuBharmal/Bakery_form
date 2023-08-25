const router = require("express").Router();
const ContactForm = require("../models/contact.form.model")


router.get("/", (req, res) => {
    res.send(":)");
});

router.post("/v1.0/add-record", async (req, res) => {
    try {
        const name = req.body.name;
        const phone = req.body.phone;
        const relation = req.body.relation
        const ocassion = req.body.ocassion

        if(name == null || phone == null || relation == null || ocassion == null){
            console.log("lol :(");
            res.status(409).json("error.message");
        }
      const body = req.body;
      const newAdmin = new ContactForm(body);
      await newAdmin.save();
      res.status(201).json(newAdmin);
    } catch (error) {
      res.status(409).json(error.message);
    }
});

module.exports = router;