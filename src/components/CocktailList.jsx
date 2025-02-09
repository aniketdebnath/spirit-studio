import Wrapper from "../assets/wrappers/CocktailList";
import CocktailCard from "./CocktailCard";
const CocktailList = ({ drinks = [] }) => {
  if (!drinks) {
    return (
      <h4 style={{ textAlign: "center" }}>No matching cocktails found!</h4>
    );
  }
  const formattedDrinks = drinks.map((drink) => {
    const {
      idDrink: id,
      strDrink: name,
      strDrinkThumb: image,
      strAlcoholic: info,
      strGlass: glass,
    } = drink;
    return { id, name, image, info, glass };
  });
  return (
    <Wrapper>
      {formattedDrinks.map((drink) => {
        return <CocktailCard key={drink.id} {...drink} />;
      })}
    </Wrapper>
  );
};
export default CocktailList;
