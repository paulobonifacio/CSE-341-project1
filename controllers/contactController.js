const Contact = require('../models/Contact');

exports.getAllContacts = async (req, res) =>
{
  try
  {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  }
  catch (errors)
  {
    res.status(500).json({ message: errors.message });
  }
};
exports.getContactById = async (req, res) =>
{
  try
  {
    const contact = await Contact.findById(req.params.id);
    if (!contact)
    {
        return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json(contact);
  }
  catch (errors)
  {
    res.status(500).json({ message: errors.message });
  }
};
exports.createContact = async (req, res) =>
{
  try
  {
    const newContact = new Contact(req.body);
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  }
  catch (errors)
  {
    res.status(400).json({ message: errors.message });
  }
};
exports.updateContact = async (req, res) =>
{
  try
  {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedContact)
    {
        return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json(updatedContact);
  }
  catch (errors)
  {
    res.status(400).json({ message: errors.message });
  }
};
exports.deleteContact = async (req, res) =>
{
  try
  {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact)
    {
        return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json({ message: 'Contact deleted' });
  }
  catch (errors)
  {
    res.status(500).json({ message: errors.message });
  }
};
