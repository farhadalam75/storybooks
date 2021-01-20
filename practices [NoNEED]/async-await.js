async function A() {
    console.log('calling')
    const res = await C()
    console.log(res)
}

function wait2sec() {

    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved')
        },
        2000)
    })
}


function B() {
    return new Promise(res => 
        {
            setTimeout(() => 
            {
                res('resolvedddddd')
            }, 2000)
    })
}

function C(){
    return new Promise(printSecond =>
        {
            setTimeout(() => 
            {
                printSecond('3s')
            }, 3000)
        })
}

A()