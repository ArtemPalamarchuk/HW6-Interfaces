describe('Array list', function () {
	beforeEach(function () {
        arrayList.clear();
    })
	
	describe('Push Method', function () {
        it('Create object a, push value 1 and expected return true if a[0] = 1', function () {
            arrayList.push(1);
            let exp = 1;
            const act = arrayList.array[0];
            assert.equal(exp, act);
        })
	})

	describe('Length method', function () {
		it('Call push method three times, expected return true if length = 3', function () {
			arrayList.push(1);
			arrayList.push(1);
			arrayList.push(1);
            const exp = 3;
            const act = arrayList.length();
            assert.equal(exp, act)
        })

	})


	describe('Pop method', function () {
		it('List have length 0, expected return false ', function () {
            const exp = false;
            const act = arrayList.length();
            assert.equal(exp, act)
        })

	})

	describe('Unshift method', function () {

	})

	describe('toString method', function () {

		it('Method toString return no String and expected return false', function () {
            const exp = false;
            const act = [];
            assert.equal(exp, act);
        })
		it('Method toString return String and expected return true', function () {
            const exp = "string";
            const act = typeof(arrayList.toString())
            assert.equal(exp, act);
        })
	})

});

describe('Linked list', function () {
	beforeEach(function () {
        linkedList.clear();
    })

	describe('Object structure', function () {

		it('Check if linkedList is object ', function () {
            const exp = typeof({});
            const act = typeof(linkedList);
            assert.deepEqual(exp, act);
        })
	})

	describe('Root field', function () {
         it('Check default properties of root object', function () {
            const exp = {
				next : null,
				prev : null,
				length : 0,
			};
            const act = linkedList.root;
            assert.deepEqual(exp, act);
        })
	})

	describe('CreateNode', function () {
		it('Function CreateNode create object, expected return true', function () {
            const exp = "object";
            const act = typeof(linkedList.createNode(1));
            assert.deepEqual(exp, act);
        })
	})



	describe('Pop method', function () {
		it('List have length 0, expected return false ', function () {
            const exp = false;
            const act = linkedList.length();
            assert.equal(exp, act)
        })

	})

	describe('Unshift method', function () {
		it('Method unshift have one argument and expected return true', function () {
            const exp = true;
            const act = linkedList.unshift(1);
            assert.equal(exp, act);
        })
	})

	describe('toString method', function () {
		it('Method toString have arg/s and expected return false', function () {
            const exp = false;
            const act = linkedList.toString(1, "a");
            assert.equal(exp, act);
        })

		it('Method toString return no String and expected return false', function () {
            const exp = false;
            const act = [];
            assert.equal(exp, act);
        })
		it('Method toString return String and expected return true', function () {
            const exp = "string";
            const act = typeof(linkedList.toString())
            assert.equal(exp, act);
        })
	})

})




