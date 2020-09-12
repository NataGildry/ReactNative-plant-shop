const categories = [
    {
        id: 'plants',
        name: 'Plants',
        tags: ['products', 'inspirations', 'shop'],
        count: 147,
        image: require('../../assets/icons/plants.png')
    },
    {
        id: 'seeds',
        name: 'Seeds',
        tags: ['products', 'shop'],
        count: 16,
        image: require('../../assets/icons/seeds.png')
    },
    {
        id: 'flowers',
        name: 'Flowers',
        tags: ['products', 'inspirations'],
        count: 25,
        image: require('../../assets/icons/flowers.png')
    },
    {
        id: 'sprayers',
        name: 'Sprayers',
        tags: ['products', 'shop'],
        count: 50,
        image: require('../../assets/icons/sprayers.png')
    },
    {
        id: 'pots',
        name: 'Pots',
        tags: ['products', 'inspirations'],
        count: 125,
        image: require('../../assets/icons/pots.png')
    },
    {
        id: 'fertilizers',
        name: 'Fertilizers',
        tags: ['products', 'shop'],
        count: 41,
        image: require('../../assets/icons/fertilizers.png')
    },
];

const products = [
    {
        id: 1,
        name: '16 Best Plants That Thrive In Your Bedroom',
        description: 'Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.',
        tags: ['Interior', '27 m²', 'Ideas'],
        gallery: [
            require('../../assets/images/plants_1.png'),
            require('../../assets/images/plants_2.png'),
            require('../../assets/images/plants_3.png'),
            //showing only 3 images, show +3 for the rest
            require('../../assets/images/plants_1.png'),
            require('../../assets/images/plants_2.png'),
            require('../../assets/images/plants_3.png')
        ]
    }
];

const explore = [
    //images
    require('../../assets/images/exp1.png'),
    require('../../assets/images/exp2.png'),
    require('../../assets/images/exp3.png'),
    require('../../assets/images/exp4.png'),
    require('../../assets/images/exp5.png'),
    require('../../assets/images/exp6.png')
];

const profile = {
    username: 'nata_gildry',
    location: 'Europe',
    email: 'natalia.podpryatova@gmail.com',
    avatar: require('../../assets/images/ava.jpg'),
    budget: 1000,
    monthly_cap: 5000,
    notifications: true,
    newsLetter: false
};

export {
    categories,
    products,
    profile,
    explore
};
