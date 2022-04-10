const Menus = [
    {   
        id: 1,
        title: "Home",
        url: "/"
    },
    {
        title: "Result",
        url: "/results",
        id: 2,
        child: [
            {
                title: "Home",
                url: "/",
                id: 2.1,
            }
        ]
    }
];

export default Menus;