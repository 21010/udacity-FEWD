function renderResultsTitle (title) {
    const h3 = document.createElement('h3')
    h3.className = 'results-title'
    h3.textContent = title
    return h3
}

function renderHashtags ({ url, hashtags }) {
    const parent = document.getElementById('hashtags')

    const title = renderResultsTitle(`Hashtags generated for ${url}`)
    parent.appendChild(title)

    const hashtagsList = document.createElement('ul')

    hashtags.forEach(hashtag => {
        const listItem = document.createElement('li')
        listItem.textContent = hashtag
        hashtagsList.appendChild(listItem)
    })

    parent.appendChild(hashtagsList)
}

function renderSummary ({ url, sentences }) {
    const parent = document.getElementById('summary')

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