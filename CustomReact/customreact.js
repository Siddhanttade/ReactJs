function customRender(reactElement, container){//here we will create a custom render function in which we will create a DOM element from the reactElement and append it to the container
    
    // const domElement = document.createElement(reactElement.type)//create a DOM element based on the type of reactElement
    // domElement.innerHTML = reactElement.children   //set the innerHTML of the DOM element to the children of reactElement
    // domElement.setAttribute('href', reactElement.props.href)//set the href attribute of the DOM element to the href prop of reactElement
    // domElement.setAttribute('target', reactElement.props.target)//set the target attribute of the DOM element to the target prop of reactElement

    // container.appendChild(domElement)//append the DOM element to the container
    

    // The above code can be simplified using a loop to set attributes dynamically
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

//tree graph of the element
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)