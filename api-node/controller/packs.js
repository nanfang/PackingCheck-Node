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
            console.log(packs);
            res.status(200).json(packs);
        })
        .catch(err => {
            console.log(err);
        });

};

// GET /v2/packs/{packId}/items
exports.getPackItems = (req, res, next) => {
    const packId = req.params.packId;
    console.log(`packId=${packId}`);

    res.status(200).json(packItems[req.params.packId]);
};


exports.createPack = (req, res, next) => {
    const name = req.body.name;
    // TODO: create pack in database
    db.execute('INSERT INTO packs (user_id, name) VALUES (?, ?)', [1, name])
        .then(result => {
            console.log(result);
            res.status(201).json(
                {
                    message: 'Package created successfully',
                    pack: {id: result.insertId}
                }
            )
        })
        .catch(err => {
            console.log(err);
        });


};

