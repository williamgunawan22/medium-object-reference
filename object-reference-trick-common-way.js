function simulation() {
    // set item
    items = [{
        img: "my-image-1.jpg",
        show: false
    },
    {
        img: "my-image-2.jpg",
        show: false
    }];
    showItem(items[1]); // common way
    console.log(items);
}

function showItem(item) {
    item.show = true;
}

simulation();


