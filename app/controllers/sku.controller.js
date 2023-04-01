// Retrieve all Skus.
exports.getAll = (req, res) => {
  res.send([
	     {
               id:1,
               name:'pencils',
               barcode:'123456789012'
	     },
	     {
               id:2,
               name:'printer ink',
               barcode:'723456744022'
	     },
	     {
               id:1,
               name:'hanging files',
               barcode:'333476789019'
	     },
	     {
               id:1,
               name:'0.7mm pens',
               barcode:'163152766811'
	     }

  ]);
};
