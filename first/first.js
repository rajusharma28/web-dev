// const header = document.createElement('h1');
// header.innerText ="Hello Coder Army";

// document.getElementById('root').append(header);
// // console.dir(document.getElementById('root'));


//***************** second ************** */

const header = React.createElemnt('h1',{},"Hello Coder Army");
const React ={
    createElemnt:function(heading,style,children){
        const element = document.createElement(heading);
        if(typeof children ==='object')
        {
            for(let val of children)
                element.appendchildren(val);

        }
        else 
        element.innerText = children;
        for(let key in styles){
            element.style[key]=styles[key]
        }
        return element;
    }
}

const ReactDOM ={
    render:function(root,element)
    {
        root.append(element);
    }
}
const element =React.createElemnt("h1",{id:"money",class:"rohit",backdround:"pink"},"Hello");
const element2 =React.createElemnt("h1",{id:"money",class:"rohit",backdround:"pink"},"coder army");

const li1 =React.createElemnt('li',{},"chai");
const li2=React.createElemnt('li',{},"biscuit");
const li3=React.createElemnt('li',{},"samosa");
const element3 = React.createElemnt('ul',{fontsize:"30px",color:"white",backdround:"green"},[li1,li2,li3]);

ReactDOM.render(document.getElementById('root',element));

ReactDOM.render(document.getElementById('root',element2));
ReactDOM.render(document.getElementById('root',element3));

document.getElementById('root').append(element);
document.getElementById('root').append(element2)
