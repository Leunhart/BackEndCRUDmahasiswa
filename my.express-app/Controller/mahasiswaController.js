let items = [];

exports.CreateMahasiswa = (req, res) => {
    const mahasiswa = req.body;
    items.push(mahasiswa);
    res.status(201).send('Data mahasiswa berhasil dibuat');
}

exports.GetData = (req, res) => {
    res.json(items);
}

exports.UpdateData = (req, res) => {
    const { id } = req.params;
    const updateItem = req.body;
    items[id] = updateItem;
    res.send('Data sudah dirubah')
}

exports.DeleteData = (req, res) => {
    const { id } = req.params;
    items.splice(id, 1);
    res.send('Data berhasil dihapus')
}