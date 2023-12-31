import { hideLoading } from "./toggleLoading.js";
import getElement from "./getElement.js";

const DisplayDrink = (data)=>{
 hideLoading()
 const drink = data.drinks[0];
 
 const {strDrinkThumb:image, strDrink:name, strInstructions:desc} = drink;
 const list = [
  drink.strIngredient1,
  drink.strIngredient2,
  drink.strIngredient3,
  drink.strIngredient4,
  drink.strIngredient5,
 ]
 console.log(drink, list);

 const img = getElement('.drink-img');
 const drinkName = getElement('.drink-name');
 const description = getElement(".drink-desc");
 const ingredient = getElement(".drink-ingredients");

 img.src = image;
 document.title = name;
 drinkName.textContent = name;
 description.textContent = desc;
 ingredient.innerHTML = list.map((item)=>{
  if(!item) return;
  return `<li> <i class="fas fa-check-square"></i>${item}</li>`
 }).join('')

}

export default DisplayDrink