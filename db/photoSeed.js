const StreetPhotos = require('../models/StreetPhotos');
const streetPhotoSeeds = require('./photoList.json');

// Logic
StreetPhotos.deleteMany({})
    .then(() => {
        console.log('Deleted all my street photos!');
        return streetPhotoSeeds.map((photos) => {
            return { ...photos };
        });
    })
    .then((photos) => {
        return StreetPhotos.insertMany(photos);
    })
    .then((newPhotos) => {
        console.log('Created a new street photo!', newPhotos);
    })
    .catch(console.error)
    .finally(() => {
        process.exit();
    });