function GerarListener(){
	var count = 0;
	function executar(){
		return ++count;
	}
	
	return executar;
}

var obj ={};
obj.executar = GerarListener();


console.log('contador: ' + obj.executar() );
console.log('contador: ' + obj.executar() );
console.log('contador: ' + obj.executar() );
