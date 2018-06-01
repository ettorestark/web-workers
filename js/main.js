(function(window, document) {
	'use strict';
	var start = document.getElementById('startWorker');
	var stop = document.getElementById('stopWorker');
	var result = document.getElementById('result');
	var w;
	function startWorker() {
		if(typeof(Worker) !== "undefined") {
			w = new Worker('js/worker.js');
			w.addEventListener('message', function(e) {
				result.innerHTML = e.data;
			});
		}else {
			result.innerHTML = 'Web Worker is not supported for your browser.';
		}
	}
	function stopWorker() {
		w.terminate();
	}
	start.addEventListener('click', startWorker);
	stop.addEventListener('click', stopWorker);
})(window, document);
