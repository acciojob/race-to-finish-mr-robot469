window.promises = [];

//Do not change the code above this
//add your promises to the array `promises`
promises = [promise1,promise2,promise3,promise4,promise5]

Promise.any(promises).then((value) => {
	document.getElementById("output").innerText = value;
});

function promise1(){
	const random = Math.floor(Math.random() *  6) + 1;
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
		resolve("Promise 1")
	    },random)
	}
}

function promise2(){
	const random = Math.floor(Math.random() *  6) + 1;
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
		resolve("Promise 2")
	    },random)
	}
}

function promise3(){
	const random = Math.floor(Math.random() *  6) + 1;
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
		resolve("Promise 3")
	    },random)
	}
}

function promise4(){
	const random = Math.floor(Math.random() *  6) + 1;
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
		resolve("Promise 4")
	    },random)
	}
}

function promise5(){
	const random = Math.floor(Math.random() *  6) + 1;
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
		resolve("Promise 5")
	    },random)
	}
}