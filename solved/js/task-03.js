const images = [
    {
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];


window.addEventListener("load", function () {
    // acceptance criteria: do not edit html
    // add <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" type="text/css" >
    // add <link rel="stylesheet" href="css/task3.css" />
    const cssReference = `<link rel="stylesheet" href="css/task3.css" />`
    const flexBoxReference = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" type="text/css" >`
    document.querySelector("head").insertAdjacentHTML("beforeend", flexBoxReference)
    document.querySelector("head").insertAdjacentHTML("beforeend", cssReference)

    const gallery = document.querySelector("body > ul.gallery");
    // fix flexbox
    gallery.classList.add("row")

    for(const img of images) {
        let rawHtml = `<li class="col-xs-12 col-md-6 col-lg-4"><img src="${img.url}" alt="${img.alt}" class="box"></li>`
        gallery.insertAdjacentHTML("beforeend", rawHtml);
    }
})

