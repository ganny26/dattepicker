import BatchModel from "../models/batchmodel";

export function addbatch(req, res) {
    if (!req.body.post.batchname || !req.body.post.routename || !req.body.post.coordinates) {
        res.status(403).end();
    }

    const batchObject = new BatchModel(req.body.post);

    batchObject.save((err, result) => {
        if (err) {
            res.status(500).send(err);
        }
        res.json({ post: saved });
    })
}


