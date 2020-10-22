const inject = (items, sections) => {
    sections.sort((a, b) => (a.index > b.index) ? 1 : -1);
    sections.map((request, index) => {
        const sectionOne = items.slice(0, request.index + index);
        const sectionTwo = items.slice(request.index + index);
        items = [...sectionOne, request.content, ...sectionTwo];
    });
    return items;
}

export { inject };
