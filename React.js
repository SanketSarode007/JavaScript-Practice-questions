
const React = (function (){
	
   let hooks = [], idx = 0 ;
	
  function useState(initVal){
	
	const state = hooks[idx] || initVal;
	const _idx = idx;
	const setState = newVal => {
		hooks[_idx] = newVal;
	}
	idx++;
	return [state, setState]
  }
 
  function useEffect(cb, depArray){
	
  }
 
  function render(Component){
	  idx = 0;
	  const C = Component();
	  C.render();
	  return C;
  }

 return {useState, render}
}());


function Component(){
	
	const [count, setCount] = React.useState(1);
	const [text, setText]   = React.useState('apple');
	
	React.useEffect( () => {
		console.log('JSON')
	},[]);
	
	return {
		render: () => console.log({count, text}),
		click: () => setCount(count + 1),
		type: word => setText(word)
	}
}

var App = React.render(Component);
App.click();
var App = React.render(Component);
App.click();
var App = React.render(Component);
App.type('pear');
var App = React.render(Component);
App.click();