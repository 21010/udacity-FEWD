export function renderResultsTitle (title) {
    const h3 = document.createElement('h3')
    h3.className = 'results-title'
    h3.textContent = title
    return h3
}

export function scrollTop() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}

function renderHashtags ({ url, hashtags }) {
    const parent = document.querySelector('.results')
    parent.innerHTML = ''

    const title = renderResultsTitle(`Hashtags generated for ${url}`)
    parent.appendChild(title)

    const hashtagsList = document.createElement('ul')

    hashtags.sort((a, b) => b.length - a.length)
        .forEach(hashtag => {
            const listItem = document.createElement('li')
            listItem.textContent = hashtag
            hashtagsList.appendChild(listItem)
        })

    parent.appendChild(hashtagsList)
}

function renderSummary ({ url, sentences }) {
    const parent = document.querySelector('.results')
    parent.innerHTML = ''

    const title = renderResultsTitle(`Summary generated for ${url}`)
    parent.appendChild(title)

    sentences.forEach(sentence => {
        const p = document.createElement('p')
        p.textContent = sentence
        parent.appendChild(p)
    })
}

export function renderResults ({ type, url, data }) {
    const { response } = data
    switch (type) {
        case 'hashtags' :
            renderHashtags({ url, ...response })
            break
        case 'summarize' :
            renderSummary({ url, ...response })
            break
    }
}