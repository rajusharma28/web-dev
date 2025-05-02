const React = {
    createElement: function (tag, styles, children) {
      const element = document.createElement(tag);
      
      // Apply styles
      for (let key in styles) {
        element.style[key] = styles[key];
      }
      
      // Set children
      if (Array.isArray(children)) {
        for (let child of children) {
          element.append(child);
        }
      } else {
        element.innerText = children;
      }
      
      return element;
    }
  };
  
  const ReactDOM = {
    render: function (element, root) {
      root.append(element);
    }
  };
  
  // Create elements
  const header1 = React.createElement(
    'h1',
    { fontSize: "30px", backgroundColor: "blue", color: "white" },
    "Hello coder Army"
  );
  
  const header2 = React.createElement(
    'h2',
    { fontSize: "30px", backgroundColor: "blue", color: "white" },
    "Kaise ho aap sab log"
  );
  
  const li1 = React.createElement('li', {}, "HTML");
  const li2 = React.createElement('li', {}, "CSS");
  const li3 = React.createElement('li', {}, "JS");
  
  const ul = React.createElement(
    'ul',
    { fontSize: "30px", backgroundColor: "blue", color: "white" },
    [li1, li2, li3]
  );
  
  // Render elements
  const root = document.getElementById('root');
  ReactDOM.render(header1, root);
  ReactDOM.render(header2, root);
  ReactDOM.render(ul, root);
  