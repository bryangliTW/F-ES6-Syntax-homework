const parseData = (input) => {
    const {data, column} = input;
    return data.map((profile) => {
        let info = {};
        profile.map((inf, index) => info[column[index].name] = inf);
        return info;
    });
};

export { parseData };
