const Item = require("../models/item");

exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item)
      return res.status(404).json({ message: "Item not found" });

    res.status(200).json(item);
  } catch (err) {
    res.status(400).json({ message: "Invalid ID" });
  }
};

exports.createItem = async (req, res) => {
  try {
    const { name, price } = req.body;

    if (!name || price == null) {
      return res.status(400).json({ message: "Name and price are required" });
    }

    const newItem = await Item.create({ name, price });
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateItem = async (req, res) => {
  try {
    const { name, price } = req.body;

    if (!name || price == null) {
      return res.status(400).json({ message: "Name and price are required" });
    }

    const item = await Item.findByIdAndUpdate(
      req.params.id,
      { name, price },
      { new: true }
    );

    if (!item)
      return res.status(404).json({ message: "Item not found" });

    res.status(200).json(item);
  } catch (err) {
    res.status(400).json({ message: "Invalid ID" });
  }
};

exports.patchItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!item)
      return res.status(404).json({ message: "Item not found" });

    res.status(200).json(item);
  } catch (err) {
    res.status(400).json({ message: "Invalid ID" });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);

    if (!item)
      return res.status(404).json({ message: "Item not found" });

    res.status(204).send();
  } catch (err) {
    res.status(400).json({ message: "Invalid ID" });
  }
};
