import { ProGallery } from 'pro-gallery';
import React from 'react'

export const Galeria = () => {
    const items = [
        { // Image item:
            itemId: 'sample-id',
            mediaUrl: 'https://scontent-iad3-1.cdninstagram.com/v/t39.30808-6/428627003_18412361209039742_4648745438158764117_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_eui2=AeH-MA0DZ6NOY4MdQ1Hh-7NdgKnBfJpgM3OAqcF8mmAzc3Tt2Nq4dUMmfVx8jEMUU6U&_nc_ohc=Dc8AGeMP2aMAX9RGC5M&_nc_ht=scontent-iad3-1.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=00_AfDrITTgQlLfg1s9TAu0ktAG1eG4oMgWRgjyoO6XhJK2cw&oe=65D532A3',
            metaData: {
                type: 'image',
                height: 200,
                width: 200,
                title: 'sample-title',
                description: 'sample-description',
                focalPoint: [10, 0],
                link: {
                    url: 'http://example.com',
                    target: '_blank'
                },
            }
        },
        { // Another Image item:
            itemId: 'differentItem',
            mediaUrl: 'https://scontent-iad3-1.cdninstagram.com/v/t39.30808-6/428627003_18412361209039742_4648745438158764117_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_eui2=AeH-MA0DZ6NOY4MdQ1Hh-7NdgKnBfJpgM3OAqcF8mmAzc3Tt2Nq4dUMmfVx8jEMUU6U&_nc_ohc=Dc8AGeMP2aMAX9RGC5M&_nc_ht=scontent-iad3-1.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=00_AfDrITTgQlLfg1s9TAu0ktAG1eG4oMgWRgjyoO6XhJK2cw&oe=65D532A3',            metaData: {
                type: 'image',
                height: 200,
                width: 100,
                title: 'sample-title',
                description: 'sample-description',
                focalPoint: [0, 0],
                link: {
                    url: 'http://example.com',
                    target: '_blank'
                },
            }
        },
        { // Another Image item:
            itemId: 'differentItem',
            mediaUrl: 'https://scontent-iad3-1.cdninstagram.com/v/t39.30808-6/428627003_18412361209039742_4648745438158764117_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_eui2=AeH-MA0DZ6NOY4MdQ1Hh-7NdgKnBfJpgM3OAqcF8mmAzc3Tt2Nq4dUMmfVx8jEMUU6U&_nc_ohc=Dc8AGeMP2aMAX9RGC5M&_nc_ht=scontent-iad3-1.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=00_AfDrITTgQlLfg1s9TAu0ktAG1eG4oMgWRgjyoO6XhJK2cw&oe=65D532A3',            metaData: {
                type: 'image',
                height: 200,
                width: 100,
                title: 'sample-title',
                description: 'sample-description',
                focalPoint: [0, 0],
                link: {
                    url: 'http://example.com',
                    target: '_blank'
                },
            }
        },
    ]


    // The options of the gallery (from the playground current state)
    const options =  {
        "layoutParams": {
            "structure": {
                "galleryLayout": 2,
                "responsiveMode": 'SET_ITEMS_PER_ROW',
                "numberOfColumns": 6
            }
        }
    
};

// The size of the gallery container. The images will fit themselves in it
const container = {
    width: '1000',
 
};

// The eventsListener will notify you anytime something has happened in the gallery.
const eventsListener = (eventName, eventData) => console.log({ eventName, eventData });

// The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
const scrollingElement = window;

return (
    <ProGallery
        items={items}
        options={options}
        container={container}
        eventsListener={eventsListener}
       // scrollingElement={scrollingElement}
    />
);
  
}
