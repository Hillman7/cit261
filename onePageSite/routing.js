const route = [

    {file: 'views/hike.html', label: 'hiking' },
    {file: 'views/parks.html', label: 'Parks'}

];

let navigationThing = document.getElementById("mainNav");
makeLinks(navigationThing);

// loop through array and makes links
// makes the navigation
function makeLinks(parent)
{
route.forEach((route)=> {
    let item = document.createElement('li');
    item.innerHTML = `<a href="#">${route.label}</a>`;
    parent.appendChild(item);

    
   console.log( getView(route.file));

    addNavEvent(item,route.file);
})
}


function getView(viewPath)
{

  return fetch(viewPath).then(

        (response) => {

            // do junk // need to parse first
            // blob() // returning binary like image

            // text() 
            // json() // json back to be parsed
            return response.text();
        })
        .catch(err=> {
            console.log('Something went wront',err);
        })
    
    


}

function addNavEvent(element,path) 
{
element.addEventListener('touchend',(e)=> {
insertView(getView(path));

})


}


function insertView(viewPromise) {
    const contentElement = document.getElementById('');
    
    // call then on the data to use what it sends us
    viewPromise.then((data)=> {
        contentElement.appendChild(data);
    });
}

