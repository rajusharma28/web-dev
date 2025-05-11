const element =React.createElement("h1",{id:"fisrt",className:"raju",style:{background:"blue",fontSize:"30px",color:"pink"}},"  Hello Coder Army");
const element2 =React.createElement("h1",{id:"fisrt",className:"raju",style:{background:"blue",fontSize:"30px",color:"pink"}},"  Hello ");
// ReactDOM.render(element,document.getElementById('root'));
// element : 50 card pade hue hai




const div1 =React.createElement( 'div',{},[element,element2])
const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
// React root container: is

// single element ki liya th
// Reactroot.render(element); 
// Reactroot.render(element2);


// multiple element ki liya 
Reactroot.render(div1)