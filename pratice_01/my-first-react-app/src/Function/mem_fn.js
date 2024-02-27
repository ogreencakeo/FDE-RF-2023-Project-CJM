const initData = () => {
    if(localStorage.getItem('universal-mem-data') === null){
        localStorage.setItem(
            "universal-mem-data",
            `
                [
                    {
                        "idx": "1",
                        "pwd":"1111",
                        "uid": "admin",
                        "unm": "Administrator",
                        "eml":"admin@dc.com"
                    },
                    {
                        "idx": "2",
                        "pwd":"1111",
                        "uid":"happy",
                        "unm":"happyfood",
                        "eml":"happy@food.com"
                    }
                ]
            `
        );
    }
};
export {  initData };
