// function to import all photos at the same time
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('./images', false, /\.png/));


const SliderData =[
    {
        image: images['photo_123_fake_background.png'].default
    },
    {
        image: images['photo_1.png'].default
    },
    {
        image: images['photo_2.png'].default
    },
    {
        image: images['photo_3.png'].default
    },
    {
        image: images['photo_4.png'].default
    },
    {
        image: images['photo_5.png'].default
    },
    {
        image: images['photo_6.png'].default
    },
    {
        image: images['photo_7.png'].default
    }
]

export {SliderData}
