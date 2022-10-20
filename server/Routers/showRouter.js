const express = require("express");
const router = express.Router();

const showBLL = require("../BLL/showsBLL");

// get data function
router.get("/", async (req, res) => {
  try {
    const shows = await showBLL.getAllData();
    res.status(200).json(shows);
  } catch (e) {
    res.status(500).json({ msg: e });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const show = await showBLL.getDataById(id);
    res.status(200).json(show);
  } catch (error) {
    res.status(500).json(e);
  }
});

// post function add show
router.post("/", async (req, res) => {
  try {
    const show = req.body;
    const status = await showBLL.createShow(show);
    res.status(200).json({ msg: status });
    console.log(show);
  } catch (e) {
    res.status(500).json({ err: e });
  }
});

// put function update 
router.put("/:id", async (req, res) =>{
    try{
        const id = req.params.id;
        const obj = req.body;
        const status = await showBLL.updateShow(id, obj);
        res.status(200).json(status);
    } catch (e) {
        res.status(500).json({ msg: e })
    }
})

// delete function delete show
router.delete("/:id", async(req, res) => {
    try {
        const id = req.params.id;
        const status = await showBLL.deleteShow(id);
        res.status(200).json(status);
    } catch (error) {
        res.status(500).json({msg:error})
    }
    })

module.exports = router;
