// const packs = [
//     {
//         id: 2,
//         name: "Move to London"
//     },
//     {
//         id: 1,
//         name: "Back to Vancouver"
//     }
// ]

const packItems =
    {
        2: [
            {id: 2, name: 'Passport'},
            {id: 1, name: 'Phone'}
        ],
        1: [{id: 3, name: 'Cash'},
            {id: 2, name: 'Passport'},
            {id: 1, name: 'Phone'},
        ],

    }

const db = require('../utils/db')

exports.getPacks = (req, res, next) => {
    db.execute('SELECT * FROM packs ORDER BY id DESC')
        .then(result => {
            const rows = result[0];
            const packs = rows.map((row, index) => {
                return {
                    id: row.id,
                    name: row.name
                }
            })
            // console.log(packs);
            res.status(200).json(packs);
        })
        .catch(err => {
            console.log(err);
        });

};

// GET /v2/packs/{packId}/items
exports.getPackItems = (req, res, next) => {
    const packId = req.params.packId;
    // console.log(`packId=${packId}`);
    db.execute(`
        SELECT items.id AS id, items.name AS name
            FROM pack_items 
            INNER JOIN items
        ON pack_items.item_id = items.id
        WHERE pack_items.pack_id = ?
        `, [packId])
        .then(result => {
            const rows = result[0];
            const packs = rows.map((row, index) => {
                return {
                    id: row.id,
                    name: row.name
                }
            })
            // console.log(packs);
            res.status(200).json(packs);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.addPackItem = (req, res, next) => {
    const itemName = req.body.name.trim();
    const packId = req.params.packId;
    console.log(itemName, packId);
    let itemId;
    db.execute('SELECT id FROM items WHERE name = ?', [itemName])
        .then(result => {
            const rows = result[0];
            if (rows.length > 0) {
                return rows[0].id;
            }
            // create new
            return db.execute('INSERT INTO items (name) VALUES (?)', [itemName]);
        })
        .then(result => {
            console.log(result);
            itemId = typeof result === 'number'? result: result[0].insertId;
            // FIXME: handle duplication (low priority, UX could avoid it)
            return db.execute('INSERT INTO pack_items (pack_id, item_id) VALUES (?, ?)', [packId, itemId]);
        })
        .then(result => {
            console.log(result);
            res.status(201).json(
                {
                    message: 'Item added successfully',
                    itemId: itemId
                }
            )
        })
        .catch(err => {
            console.log("Error=", err);
            res.status(500).json(
                {
                    message: 'Item failed to add',
                }
            )
        });
}

exports.createPack = (req, res, next) => {
    const name = req.body.name;
    db.execute('INSERT INTO packs (user_id, name) VALUES (?, ?)', [1, name])
        .then(result => {
            // console.log(result);
            res.status(201).json(
                {
                    message: 'Package created successfully',
                    pack: {id: result[0].insertId}
                }
            )
        })
        .catch(err => {
            console.log(err);
        });
};

exports.removePack = (req, res, next) => {
    const packId = req.params.packId;
    db.execute('DELETE FROM packs WHERE id = ?', [packId])
        .then(result => {
            return db.execute('DELETE FROM pack_items WHERE pack_id = ?', [packId]);
        })
        .then(
            result => {
                res.status(200).json({message: 'Package created successfully'});
            }
        ).catch(err => {
        console.log(err);
    });
};

