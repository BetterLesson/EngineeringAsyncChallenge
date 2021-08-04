const router = require("express").Router();
const store = require("../db/store");

// TODO
// Error responses include supporting error message
// this involves throwing a new error in the store method and then it bubbles up
router.get("/reservations", (req, res) => {
  store
    .getReservations()
    .then((reservs) => {
      return res.json(reservs);
    })
    .catch((err) => res.status(500).json(err));
});

router.post("/reservation", (req, res) => {
  console.log("WE ARE POST", req.body);
  store
    .addReservation(req.body)
    .then((note) => res.json(note))
    .catch((err) => {
      if (err.type && err.type === 400) {
        return res.status(400).json(err.errorText);
      } else {
        return res.status(500).json(err);
      }
    });
});

// DELETE "/api/notes" deletes the note with an id equal to req.params.id
// TODO implement store method
router.delete("/reservation/:id", (req, res) => {
  store
    .removeReservation(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
