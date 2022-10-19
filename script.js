const Card = ({ title, sub, text }, index) => {

    return `
      <div class="card">
        <h4>${sub}</h4>
        <div id="${index + 1}">${index + 1}</div>
        <h2>${title}</h2>
        <p>${text}</p>
        <button class="read-more">read more <span class="material-icons">arrow_forward</span></button>
      </div>`
      
}

const CardContainer = document.querySelector('.card-container')

const { cards } = books
const BookCardsElements = cards.map((card, i) => Card(card, i))

CardContainer.innerHTML = BookCardsElements.join('')
