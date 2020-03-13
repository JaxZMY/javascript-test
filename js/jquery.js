class Jquery {
	constructor(selector) {
		const result = document.querySelectorAll(selector);
		const length = result.length;
		for (let i = 0; i < length; i++) {
			this[i] = result[i]
		}
		this.length = length;
		this.selector = selector;
	}
	get(index) {
		return this[index]
	}
	each(fn) {
		for (let i = 0; i < this.length; i++) {
			const elem = this[i]
			fn(elem)
		}
	}
	on(type, fn) {
		return this.each(elem => {
			elem.addEventListener(type, fn, false)
		})
	}
	addClass(ClassName) {
		return this.each(function(ele) {
				ele.classList.add(ClassName)
			}

		)
	}
}

let p = new Jquery('p');
p.get(2)
let fn3 = function() {
	console.log(111)
}

// let p2 = new jQuery('span');
p.addClass('d1')
p.addClass('d2')
console.log(p)
// console.log(p2)
