const packs = [
    {
        id: 2,
        name: "Move to London"
    },
    {
        id: 1,
        name: "Back to Vancouver"
    }
]

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


exports.getPacks = (req, res, next) => {
    res.status(200).json(packs);
};

// GET /v2/packs/{packId}/items
exports.getPackItems = (req, res, next) => {
    const packId = req.params.packId;
    console.log(`packId=${packId}`);

    res.status(200).json(packItems[req.params.packId]);
};


exports.createPack = (req, res, next) => {
    const name = req.body.name;
    console.log(name);
    // TODO: create pack in database
    const newPackID = packs.length + 1;
    const newPack = {id: newPackID, name: name};
    packs.unshift(newPack);
    packItems[newPackID] = [];
    res.status(201).json(
        {
            message: 'Package created successfully',
            pack: newPack
        }
    )
};

