const generateSlug = (title) => {
    let slug = title.trim().toLowerCase().replace(/\s+/g, '-');
    return `${slug}.com`;
}


console.log(generateSlug("Hello World"));  

