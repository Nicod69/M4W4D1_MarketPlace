export function startLoading(){

    const wrap = document.createElement('div')
    const p = document.createElement('p')

    wrap.id = 'loader'
    p.innerHTML = 'Loading...'

    wrap.append(p)

    document.body.appendChild(wrap)

}

export function stopLoading(){
    document.getElementById('loader').remove()
}

