module.exports = (req, res, next) => {
    const { name, nrp, telp, alamat } = req.body;

    if (!name || typeof name !== 'string' || name.trim() === '') {
        return res.status(400).send('Nama tidak boleh kosong.');
    }

   
    if (typeof nrp !== 'number' || isNaN(nrp)) {
        return res.status(400).send('NRP harus berupa angka.');
    }
    
    const telpRegex = /^\d+$/; 
    if (!telp || !telpRegex.test(telp)) {
        return res.status(400).send('Nomor telepon hanya boleh berisi angka.');
    }

    if (!alamat || typeof alamat !== 'string' || alamat.trim() === '') {
        return res.status(400).send('Alamat tidak boleh kosong.');
    }

    next();
};
