const list = document.querySelector("ul")
const buttonShowAll = document.querySelector(".show-all")
const buttonMapAll = document.querySelector(".map-all")
const sumAll = document.querySelector(".sum-all")
const filterAll = document.querySelector(".filter-all")

function formatCurrency(value) {
    const newValue = value.toLocaleString("pt-br",{
        style: "currency",
        currency: "BRL",
    }) 
    return newValue
}


function ShowAll(productsArray) {
    let myLi = " "


productsArray.forEach((product) => {
    myLi += ` 
        <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price">${formatCurrency(product.price)}</p>
        </li>
    `
    })

    list.innerHTML = myLi
    }    

function mapAllitems() {
    const newPrices = menuOptions.map((product) =>({
        name: product.name,
        price: product.price * 0.9, // dar 10% de desconto
        vegan: product.vagen,
        src: product.src
    }))
     //   =>    Spread Operator
     //...product,
     //price: product.price * 0.9,

     ShowAll(newPrices)
    }

    function sumAllitems() {
        const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

        list.innerHTML = `
        <li>
        <p>O valor total é R$ ${formatCurrency(totalValue)}</p>
        </li>
        `
    }

    function filterAllitems() {
        const filterJustVegan = menuOptions.filter((product) => product.vegan === true)
    
        ShowAll(filterJustVegan)
    }
    
    buttonShowAll.addEventListener("click", () => ShowAll(menuOptions))
    buttonMapAll.addEventListener("click", mapAllitems)
    sumAll.addEventListener("click", sumAllitems)
    filterAll.addEventListener("click", filterAllitems)